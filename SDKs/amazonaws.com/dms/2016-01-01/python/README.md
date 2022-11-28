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
    
req = operations.AddTagsToResourceRequest(
    headers=operations.AddTagsToResourceHeaders(
        x_amz_algorithm="a",
        x_amz_content_sha256="tempore",
        x_amz_credential="veniam",
        x_amz_date="consequatur",
        x_amz_security_token="corporis",
        x_amz_signature="est",
        x_amz_signed_headers="iure",
        x_amz_target="AmazonDMSv20160101.AddTagsToResource",
    ),
    request=shared.AddTagsToResourceMessage(
        resource_arn="est",
        tags=[
            shared.Tag(
                key="consequatur",
                resource_arn="non",
                value="nulla",
            ),
            shared.Tag(
                key="inventore",
                resource_arn="reprehenderit",
                value="quos",
            ),
            shared.Tag(
                key="saepe",
                resource_arn="aperiam",
                value="est",
            ),
        ],
    ),
)
    
res = s.sdk.add_tags_to_resource(req)

if res.add_tags_to_resource_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `add_tags_to_resource` - Adds metadata tags to an DMS resource, including replication instance, endpoint, security group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
* `apply_pending_maintenance_action` - Applies a pending maintenance action to a resource (for example, to a replication instance).
* `cancel_replication_task_assessment_run` - <p>Cancels a single premigration assessment run.</p> <p>This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.</p>
* `create_endpoint` - <p>Creates an endpoint using the provided settings.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>CreateEndpoint</code> API call. Specifying <code>DatabaseName</code> when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>
* `create_event_subscription` - <p> Creates an DMS event notification subscription. </p> <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of, provide a list of DMS source IDs (<code>SourceIds</code>) that triggers the events, and provide a list of event categories (<code>EventCategories</code>) for events you want to be notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier = my-replinstance</code>, you will be notified of all the replication instance events for the specified source. If you specify a <code>SourceType</code> but don't specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your DMS sources. If you don't specify either <code>SourceType</code> nor <code>SourceIdentifier</code>, you will be notified of events generated from all DMS sources belonging to your customer account.</p> <p>For more information about DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> </p>
* `create_replication_instance` - <p>Creates the replication instance using the specified parameters.</p> <p>DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the CLI and DMS API</a>. For information on the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use DMS</a>.</p>
* `create_replication_subnet_group` - <p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p> <p>The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a <code>ReplicationSubnetGroupDoesNotCoverEnoughAZs</code> exception.</p>
* `create_replication_task` - Creates a replication task using the specified parameters.
* `delete_certificate` - Deletes the specified certificate. 
* `delete_connection` - Deletes the connection between a replication instance and an endpoint.
* `delete_endpoint` - <p>Deletes the specified endpoint.</p> <note> <p>All tasks associated with the endpoint must be deleted before you can delete the endpoint.</p> </note> <p/>
* `delete_event_subscription` -  Deletes an DMS event subscription. 
* `delete_replication_instance` - <p>Deletes the specified replication instance.</p> <note> <p>You must delete any migration tasks that are associated with the replication instance before you can delete it.</p> </note> <p/>
* `delete_replication_subnet_group` - Deletes a subnet group.
* `delete_replication_task` - Deletes the specified replication task.
* `delete_replication_task_assessment_run` - <p>Deletes the record of a single premigration assessment run.</p> <p>This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.</p>
* `describe_account_attributes` - <p>Lists all of the DMS attributes for a customer account. These attributes include DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region.</p> <p>This command does not take any parameters.</p>
* `describe_applicable_individual_assessments` - <p>Provides a list of individual assessments that you can specify for a new premigration assessment run, given one or more parameters.</p> <p>If you specify an existing migration task, this operation provides the default individual assessments you can specify for that task. Otherwise, the specified parameters model elements of a possible migration task on which to base a premigration assessment run.</p> <p>To use these migration task modeling parameters, you must specify an existing replication instance, a source database engine, a target database engine, and a migration type. This combination of parameters potentially limits the default individual assessments available for an assessment run created for a corresponding migration task.</p> <p>If you specify no parameters, this operation provides a list of all possible individual assessments that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must specify all of them or the operation cannot provide a list of individual assessments. The only parameter that you can specify alone is for an existing migration task. The specified task definition then determines the default list of individual assessments that you can specify in an assessment run for the task.</p>
* `describe_certificates` - Provides a description of the certificate.
* `describe_connections` - Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
* `describe_endpoint_settings` - Returns information about the possible endpoint settings available when you create an endpoint for a specific database engine.
* `describe_endpoint_types` - Returns information about the type of endpoints available.
* `describe_endpoints` - Returns information about the endpoints for your account in the current region.
* `describe_event_categories` - Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 
* `describe_event_subscriptions` - <p>Lists all the event subscriptions for a customer account. The description of a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>. </p> <p>If you specify <code>SubscriptionName</code>, this action lists the description for that subscription.</p>
* `describe_events` -  Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> 
* `describe_orderable_replication_instances` - Returns information about the replication instance types that can be created in the specified region.
* `describe_pending_maintenance_actions` - For internal use only
* `describe_refresh_schemas_status` - Returns the status of the RefreshSchemas operation.
* `describe_replication_instance_task_logs` - Returns information about the task logs for the specified task.
* `describe_replication_instances` - Returns information about replication instances for your account in the current region.
* `describe_replication_subnet_groups` - Returns information about the replication subnet groups.
* `describe_replication_task_assessment_results` - <p>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results.</p> <p>For more information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/dms/latest/userguide/Welcome.html"> Database Migration Service User Guide</a>.</p>
* `describe_replication_task_assessment_runs` - <p>Returns a paginated list of premigration assessment runs based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values.</p> <note> <p>This operation doesn't return information about individual assessments. For this information, see the <code>DescribeReplicationTaskIndividualAssessments</code> operation. </p> </note>
* `describe_replication_task_individual_assessments` - <p>Returns a paginated list of individual assessments based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, and assessment status values.</p>
* `describe_replication_tasks` - Returns information about replication tasks for your account in the current region.
* `describe_schemas` - <p>Returns information about the schema for the specified endpoint.</p> <p/>
* `describe_table_statistics` - <p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>
* `import_certificate` - Uploads the specified certificate.
* `list_tags_for_resource` - Lists all metadata tags attached to an DMS resource, including replication instance, endpoint, security group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
* `modify_endpoint` - <p>Modifies the specified endpoint.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>ModifyEndpoint</code> API call. Specifying <code>DatabaseName</code> when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>
* `modify_event_subscription` - Modifies an existing DMS event notification subscription. 
* `modify_replication_instance` - <p>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request.</p> <p>Some settings are applied during the maintenance window.</p> <p/>
* `modify_replication_subnet_group` - Modifies the settings for the specified replication subnet group.
* `modify_replication_task` - <p>Modifies the specified replication task.</p> <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the <i>Database Migration Service User Guide</i>.</p>
* `move_replication_task` - Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance.
* `reboot_replication_instance` - Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.
* `refresh_schemas` - Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.
* `reload_tables` - <p>Reloads the target database table with the source data. </p> <p>You can only use this operation with a task in the <code>RUNNING</code> state, otherwise the service will throw an <code>InvalidResourceStateFault</code> exception.</p>
* `remove_tags_from_resource` - Removes metadata tags from an DMS resource, including replication instance, endpoint, security group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
* `start_replication_task` - <p>Starts the replication task.</p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the <i>Database Migration Service User Guide.</i> </p>
* `start_replication_task_assessment` -  Starts the replication task assessment for unsupported data types in the source database. 
* `start_replication_task_assessment_run` - <p>Starts a new premigration assessment run for one or more individual assessments of a migration task.</p> <p>The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.</p>
* `stop_replication_task` - Stops the replication task.
* `test_connection` - Tests the connection between the replication instance and the endpoint.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
