# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CancelTaskExecutionRequest(
    headers=operations.CancelTaskExecutionHeaders(
        x_amz_algorithm="iste",
        x_amz_content_sha256="temporibus",
        x_amz_credential="explicabo",
        x_amz_date="eaque",
        x_amz_security_token="rem",
        x_amz_signature="explicabo",
        x_amz_signed_headers="veritatis",
        x_amz_target="FmrsService.CancelTaskExecution",
    ),
    request=shared.CancelTaskExecutionRequest(
        task_execution_arn="ut",
    ),
)
    
res = s.sdk.cancel_task_execution(req)

if res.cancel_task_execution_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `cancel_task_execution` - <p>Cancels execution of a task. </p> <p>When you cancel a task execution, the transfer of some files is abruptly interrupted. The contents of files that are transferred to the destination might be incomplete or inconsistent with the source files. However, if you start a new task execution on the same task and you allow the task execution to complete, file content on the destination is complete and consistent. This applies to other unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully complete the transfer when you start the next task execution.</p>
* `create_agent` - <p>Activates an DataSync agent that you have deployed on your host. The activation process associates your agent with your account. In the activation process, you specify information such as the Amazon Web Services Region that you want to activate the agent in. You activate the agent in the Amazon Web Services Region where your target locations (in Amazon S3 or Amazon EFS) reside. Your tasks are created in this Amazon Web Services Region.</p> <p>You can activate the agent in a VPC (virtual private cloud) or provide the agent access to a VPC endpoint so you can run tasks without going over the public internet.</p> <p>You can use an agent for more than one location. If a task uses multiple agents, all of them need to have status AVAILABLE for the task to run. If you use multiple agents for a source location, the status of all the agents must be AVAILABLE for the task to run. </p> <p>Agents are automatically updated by Amazon Web Services on a regular basis, using a mechanism that ensures minimal interruption to your tasks.</p> <p/>
* `create_location_efs` - Creates an endpoint for an Amazon EFS file system.
* `create_location_fsx_windows` - Creates an endpoint for an Amazon FSx for Windows File Server file system.
* `create_location_nfs` - Defines a file system on a Network File System (NFS) server that can be read from or written to.
* `create_location_object_storage` - Creates an endpoint for a self-managed object storage bucket. For more information about self-managed object storage locations, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.
* `create_location_s3` - <p>Creates an endpoint for an Amazon S3 bucket.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-locations-cli.html#create-location-s3-cli">Create an Amazon S3 location</a> in the <i>DataSync User Guide</i>.</p>
* `create_location_smb` - Defines a file system on a Server Message Block (SMB) server that can be read from or written to.
* `create_task` - <p>Creates a task.</p> <p>A task includes a source location and a destination location, and a configuration that specifies how data is transferred. A task always transfers data from the source location to the destination location. The configuration specifies options such as task scheduling, bandwidth limits, etc. A task is the complete definition of a data transfer.</p> <p>When you create a task that transfers data between Amazon Web Services services in different Amazon Web Services Regions, one of the two locations that you specify must reside in the Region where DataSync is being used. The other location must be specified in a different Region.</p> <p>You can transfer data between commercial Amazon Web Services Regions except for China, or between Amazon Web Services GovCloud (US) Regions.</p> <important> <p>When you use DataSync to copy files or objects between Amazon Web Services Regions, you pay for data transfer between Regions. This is billed as data transfer OUT from your source Region to your destination Region. For more information, see <a href="http://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer">Data Transfer pricing</a>. </p> </important>
* `delete_agent` - Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN) of the agent in your request. The operation disassociates the agent from your Amazon Web Services account. However, it doesn't delete the agent virtual machine (VM) from your on-premises environment.
* `delete_location` - Deletes the configuration of a location used by DataSync. 
* `delete_task` - Deletes a task.
* `describe_agent` - Returns metadata such as the name, the network interfaces, and the status (that is, whether the agent is running or not) for an agent. To specify which agent to describe, use the Amazon Resource Name (ARN) of the agent in your request. 
* `describe_location_efs` - Returns metadata, such as the path information about an Amazon EFS location.
* `describe_location_fsx_windows` - Returns metadata, such as the path information about an Amazon FSx for Windows File Server location.
* `describe_location_nfs` - Returns metadata, such as the path information, about an NFS location.
* `describe_location_object_storage` - Returns metadata about a self-managed object storage server location. For more information about self-managed object storage locations, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.
* `describe_location_s3` - Returns metadata, such as bucket name, about an Amazon S3 bucket location.
* `describe_location_smb` - Returns metadata, such as the path and user information about an SMB location.
* `describe_task` - Returns metadata about a task.
* `describe_task_execution` - Returns detailed metadata about a task that is being executed.
* `list_agents` - <p>Returns a list of agents owned by an Amazon Web Services account in the Amazon Web Services Region specified in the request. The returned list is ordered by agent Amazon Resource Name (ARN).</p> <p>By default, this operation returns a maximum of 100 agents. This operation supports pagination that enables you to optionally reduce the number of agents returned in a response.</p> <p>If you have more agents than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a marker that you can specify in your next request to fetch the next page of agents.</p>
* `list_locations` - <p>Returns a list of source and destination locations.</p> <p>If you have more locations than are returned in a response (that is, the response returns only a truncated list of your agents), the response contains a token that you can specify in your next request to fetch the next page of locations.</p>
* `list_tags_for_resource` - Returns all the tags associated with a specified resource. 
* `list_task_executions` - Returns a list of executed tasks.
* `list_tasks` - Returns a list of all the tasks.
* `start_task_execution` - <p>Starts a specific invocation of a task. A <code>TaskExecution</code> value represents an individual run of a task. Each task can have at most one <code>TaskExecution</code> at a time.</p> <p> <code>TaskExecution</code> has the following transition phases: INITIALIZING | PREPARING | TRANSFERRING | VERIFYING | SUCCESS/FAILURE. </p> <p>For detailed information, see the Task Execution section in the Components and Terminology topic in the <i>DataSync User Guide</i>.</p>
* `tag_resource` - Applies a key-value pair to an Amazon Web Services resource.
* `untag_resource` - Removes a tag from an Amazon Web Services resource.
* `update_agent` - Updates the name of an agent.
* `update_location_nfs` - Updates some of the parameters of a previously created location for Network File System (NFS) access. For information about creating an NFS location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Creating a location for NFS</a>.
* `update_location_object_storage` - Updates some of the parameters of a previously created location for self-managed object storage server access. For information about creating a self-managed object storage location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-object-location.html">Creating a location for object storage</a>.
* `update_location_smb` - Updates some of the parameters of a previously created location for Server Message Block (SMB) file system access. For information about creating an SMB location, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html">Creating a location for SMB</a>.
* `update_task` - Updates the metadata associated with a task.
* `update_task_execution` - <p>Updates execution of a task.</p> <p>You can modify bandwidth throttling for a task execution that is running or queued. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#adjust-bandwidth-throttling">Adjusting Bandwidth Throttling for a Task Execution</a>.</p> <note> <p>The only <code>Option</code> that can be modified by <code>UpdateTaskExecution</code> is <code> <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a> </code>.</p> </note>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
