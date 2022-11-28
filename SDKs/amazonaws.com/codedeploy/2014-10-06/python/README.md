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
    
req = operations.AddTagsToOnPremisesInstancesRequest(
    headers=operations.AddTagsToOnPremisesInstancesHeaders(
        x_amz_algorithm="sed",
        x_amz_content_sha256="praesentium",
        x_amz_credential="excepturi",
        x_amz_date="aut",
        x_amz_security_token="architecto",
        x_amz_signature="omnis",
        x_amz_signed_headers="ut",
        x_amz_target="CodeDeploy_20141006.AddTagsToOnPremisesInstances",
    ),
    request=shared.AddTagsToOnPremisesInstancesInput(
        instance_names=[
            "nisi",
            "dolores",
        ],
        tags=[
            shared.Tag(
                key="dolorem",
                value="in",
            ),
            shared.Tag(
                key="est",
                value="quos",
            ),
        ],
    ),
)
    
res = s.sdk.add_tags_to_on_premises_instances(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `add_tags_to_on_premises_instances` - Adds tags to on-premises instances.
* `batch_get_application_revisions` - Gets information about one or more application revisions. The maximum number of application revisions that can be returned is 25.
* `batch_get_applications` - Gets information about one or more applications. The maximum number of applications that can be returned is 100.
* `batch_get_deployment_groups` - Gets information about one or more deployment groups.
* `batch_get_deployment_instances` - <note> <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code> instead. </p> </note> <p> Returns an array of one or more instances associated with a deployment. This method works with EC2/On-premises and AWS Lambda compute platforms. The newer <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum number of instances that can be returned is 25.</p>
* `batch_get_deployment_targets` - <p> Returns an array of one or more targets associated with a deployment. This method works with all compute types and should be used instead of the deprecated <code>BatchGetDeploymentInstances</code>. The maximum number of targets that can be returned is 25.</p> <p> The type of targets returned depends on the deployment's compute platform or deployment method: </p> <ul> <li> <p> <b>EC2/On-premises</b>: Information about EC2 instance targets. </p> </li> <li> <p> <b>AWS Lambda</b>: Information about Lambda functions targets. </p> </li> <li> <p> <b>Amazon ECS</b>: Information about Amazon ECS service targets. </p> </li> <li> <p> <b>CloudFormation</b>: Information about targets of blue/green deployments initiated by a CloudFormation stack update.</p> </li> </ul>
* `batch_get_deployments` - Gets information about one or more deployments. The maximum number of deployments that can be returned is 25.
* `batch_get_on_premises_instances` - Gets information about one or more on-premises instances. The maximum number of on-premises instances that can be returned is 25.
* `continue_deployment` - For a blue/green deployment, starts the process of rerouting traffic from instances in the original environment to instances in the replacement environment without waiting for a specified wait time to elapse. (Traffic rerouting, which is achieved by registering instances in the replacement environment with the load balancer, can start as soon as all instances have a status of Ready.) 
* `create_application` - Creates an application.
* `create_deployment` - Deploys an application revision through the specified deployment group.
* `create_deployment_config` -  Creates a deployment configuration. 
* `create_deployment_group` - Creates a deployment group to which application revisions are deployed.
* `delete_application` - Deletes an application.
* `delete_deployment_config` - <p>Deletes a deployment configuration.</p> <note> <p>A deployment configuration cannot be deleted if it is currently in use. Predefined configurations cannot be deleted.</p> </note>
* `delete_deployment_group` - Deletes a deployment group.
* `delete_git_hub_account_token` - Deletes a GitHub account connection.
* `delete_resources_by_external_id` - Deletes resources linked to an external ID.
* `deregister_on_premises_instance` - Deregisters an on-premises instance.
* `get_application` - Gets information about an application.
* `get_application_revision` - Gets information about an application revision.
* `get_deployment` - <p>Gets information about a deployment.</p> <note> <p> The <code>content</code> property of the <code>appSpecContent</code> object in the returned revision is always null. Use <code>GetApplicationRevision</code> and the <code>sha256</code> property of the returned <code>appSpecContent</code> object to get the content of the deployment’s AppSpec file. </p> </note>
* `get_deployment_config` - Gets information about a deployment configuration.
* `get_deployment_group` - Gets information about a deployment group.
* `get_deployment_instance` - Gets information about an instance as part of a deployment.
* `get_deployment_target` -  Returns information about a deployment target. 
* `get_on_premises_instance` -  Gets information about an on-premises instance. 
* `list_application_revisions` - Lists information about revisions for an application.
* `list_applications` - Lists the applications registered with the IAM user or AWS account.
* `list_deployment_configs` - Lists the deployment configurations with the IAM user or AWS account.
* `list_deployment_groups` - Lists the deployment groups for an application registered with the IAM user or AWS account.
* `list_deployment_instances` - <note> <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because it works with all compute types. <code>ListDeploymentInstances</code> throws an exception if it is used with a compute platform other than EC2/On-premises or AWS Lambda. </p> </note> <p> Lists the instance for a deployment associated with the IAM user or AWS account. </p>
* `list_deployment_targets` -  Returns an array of target IDs that are associated a deployment. 
* `list_deployments` - Lists the deployments in a deployment group for an application registered with the IAM user or AWS account.
* `list_git_hub_account_token_names` - Lists the names of stored connections to GitHub accounts.
* `list_on_premises_instances` - <p>Gets a list of names for one or more on-premises instances.</p> <p>Unless otherwise specified, both registered and deregistered on-premises instance names are listed. To list only registered or deregistered on-premises instance names, use the registration status parameter.</p>
* `list_tags_for_resource` -  Returns a list of tags for the resource identified by a specified Amazon Resource Name (ARN). Tags are used to organize and categorize your CodeDeploy resources. 
* `put_lifecycle_event_hook_execution_status` -  Sets the result of a Lambda validation function. The function validates lifecycle hooks during a deployment that uses the AWS Lambda or Amazon ECS compute platform. For AWS Lambda deployments, the available lifecycle hooks are <code>BeforeAllowTraffic</code> and <code>AfterAllowTraffic</code>. For Amazon ECS deployments, the available lifecycle hooks are <code>BeforeInstall</code>, <code>AfterInstall</code>, <code>AfterAllowTestTraffic</code>, <code>BeforeAllowTraffic</code>, and <code>AfterAllowTraffic</code>. Lambda validation functions return <code>Succeeded</code> or <code>Failed</code>. For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-lambda">AppSpec 'hooks' Section for an AWS Lambda Deployment </a> and <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html#appspec-hooks-ecs">AppSpec 'hooks' Section for an Amazon ECS Deployment</a>.
* `register_application_revision` - Registers with AWS CodeDeploy a revision for the specified application.
* `register_on_premises_instance` - <p>Registers an on-premises instance.</p> <note> <p>Only one IAM ARN (an IAM session ARN or IAM user ARN) is supported in the request. You cannot use both.</p> </note>
* `remove_tags_from_on_premises_instances` - Removes one or more tags from one or more on-premises instances.
* `skip_wait_time_for_instance_termination` - In a blue/green deployment, overrides any specified wait time and starts terminating instances immediately after the traffic routing is complete.
* `stop_deployment` - Attempts to stop an ongoing deployment.
* `tag_resource` -  Associates the list of tags in the input <code>Tags</code> parameter with the resource identified by the <code>ResourceArn</code> input parameter. 
* `untag_resource` -  Disassociates a resource from a list of tags. The resource is identified by the <code>ResourceArn</code> input parameter. The tags are identified by the list of keys in the <code>TagKeys</code> input parameter. 
* `update_application` - Changes the name of an application.
* `update_deployment_group` - Changes information about a deployment group.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
