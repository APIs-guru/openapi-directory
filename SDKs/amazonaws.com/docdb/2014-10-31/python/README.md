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
    
req = operations.GetAddSourceIdentifierToSubscriptionRequest(
    query_params=operations.GetAddSourceIdentifierToSubscriptionQueryParams(
        action="AddSourceIdentifierToSubscription",
        source_identifier="molestias",
        subscription_name="molestias",
        version="2014-10-31",
    ),
    headers=operations.GetAddSourceIdentifierToSubscriptionHeaders(
        x_amz_algorithm="animi",
        x_amz_content_sha256="nesciunt",
        x_amz_credential="nihil",
        x_amz_date="aspernatur",
        x_amz_security_token="hic",
        x_amz_signature="vitae",
        x_amz_signed_headers="libero",
    ),
)
    
res = s.sdk.get_add_source_identifier_to_subscription(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `get_add_source_identifier_to_subscription` - Adds a source identifier to an existing event notification subscription.
* `get_apply_pending_maintenance_action` - Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).
* `get_create_global_cluster` - <p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `get_delete_db_cluster` - <p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>
* `get_delete_db_cluster_parameter_group` - Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.
* `get_delete_db_cluster_snapshot` - <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
* `get_delete_db_instance` - Deletes a previously provisioned instance.
* `get_delete_db_subnet_group` - <p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
* `get_delete_event_subscription` - Deletes an Amazon DocumentDB event notification subscription.
* `get_delete_global_cluster` - <p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `get_describe_db_cluster_snapshot_attributes` - <p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all accounts.</p>
* `get_failover_db_cluster` - <p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
* `get_modify_db_cluster` - Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 
* `get_modify_db_cluster_snapshot_attribute` - <p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
* `get_modify_db_instance` - Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
* `get_modify_db_subnet_group` - Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Region.
* `get_modify_event_subscription` - Modifies an existing Amazon DocumentDB event notification subscription.
* `get_modify_global_cluster` - <p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `get_reboot_db_instance` - <p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>
* `get_remove_from_global_cluster` - <p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `get_remove_source_identifier_from_subscription` - Removes a source identifier from an existing Amazon DocumentDB event notification subscription.
* `get_remove_tags_from_resource` - Removes metadata tags from an Amazon DocumentDB resource.
* `get_start_db_cluster` - Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
* `get_stop_db_cluster` - Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
* `post_add_source_identifier_to_subscription` - Adds a source identifier to an existing event notification subscription.
* `post_add_tags_to_resource` - Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources or in a <code>Condition</code> statement in an Identity and Access Management (IAM) policy for Amazon DocumentDB.
* `post_apply_pending_maintenance_action` - Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).
* `post_copy_db_cluster_parameter_group` - Copies the specified cluster parameter group.
* `post_copy_db_cluster_snapshot` - <p>Copies a snapshot of a cluster.</p> <p>To copy a cluster snapshot from a shared manual cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Region.</p> <p>To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that cluster snapshot is in the <i>copying</i> status.</p>
* `post_create_db_cluster` - Creates a new Amazon DocumentDB cluster.
* `post_create_db_cluster_parameter_group` - <p>Creates a new cluster parameter group.</p> <p>Parameters in a cluster parameter group apply to all of the instances in a cluster.</p> <p>A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the <code>default.docdb3.6</code> cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html"> create a new parameter group</a> or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html"> copy an existing parameter group</a>, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html"> Modifying Amazon DocumentDB Cluster Parameter Groups</a>. </p>
* `post_create_db_cluster_snapshot` - Creates a snapshot of a cluster. 
* `post_create_db_instance` - Creates a new instance.
* `post_create_db_subnet_group` - Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Region.
* `post_create_event_subscription` - <p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>
* `post_create_global_cluster` - <p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `post_delete_db_cluster` - <p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>
* `post_delete_db_cluster_parameter_group` - Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.
* `post_delete_db_cluster_snapshot` - <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
* `post_delete_db_instance` - Deletes a previously provisioned instance.
* `post_delete_db_subnet_group` - <p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
* `post_delete_event_subscription` - Deletes an Amazon DocumentDB event notification subscription.
* `post_delete_global_cluster` - <p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `post_describe_certificates` - Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this account.
* `post_describe_db_cluster_parameter_groups` - Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group. 
* `post_describe_db_cluster_parameters` - Returns the detailed parameter list for a particular cluster parameter group.
* `post_describe_db_cluster_snapshot_attributes` - <p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all accounts.</p>
* `post_describe_db_cluster_snapshots` - Returns information about cluster snapshots. This API operation supports pagination.
* `post_describe_db_clusters` - Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the <code>filterName=engine,Values=docdb</code> filter parameter to return only Amazon DocumentDB clusters.
* `post_describe_db_engine_versions` - Returns a list of the available engines.
* `post_describe_db_instances` - Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.
* `post_describe_db_subnet_groups` - Returns a list of <code>DBSubnetGroup</code> descriptions. If a <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.
* `post_describe_engine_default_cluster_parameters` - Returns the default engine and system parameter information for the cluster database engine.
* `post_describe_event_categories` - Displays a list of categories for all event source types, or, if specified, for a specified source type. 
* `post_describe_event_subscriptions` - <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
* `post_describe_events` - Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.
* `post_describe_global_clusters` - <p>Returns information about Amazon DocumentDB global clusters. This API supports pagination.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `post_describe_orderable_db_instance_options` - Returns a list of orderable instance options for the specified engine.
* `post_describe_pending_maintenance_actions` - Returns a list of resources (for example, instances) that have at least one pending maintenance action.
* `post_failover_db_cluster` - <p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
* `post_list_tags_for_resource` - Lists all tags on an Amazon DocumentDB resource.
* `post_modify_db_cluster` - Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 
* `post_modify_db_cluster_parameter_group` - <p> Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.</p> </note> <important> <p>After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>
* `post_modify_db_cluster_snapshot_attribute` - <p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
* `post_modify_db_instance` - Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
* `post_modify_db_subnet_group` - Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Region.
* `post_modify_event_subscription` - Modifies an existing Amazon DocumentDB event notification subscription.
* `post_modify_global_cluster` - <p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `post_reboot_db_instance` - <p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>
* `post_remove_from_global_cluster` - <p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `post_remove_source_identifier_from_subscription` - Removes a source identifier from an existing Amazon DocumentDB event notification subscription.
* `post_remove_tags_from_resource` - Removes metadata tags from an Amazon DocumentDB resource.
* `post_reset_db_cluster_parameter_group` - <p> Modifies the parameters of a cluster parameter group to the default value. To reset specific parameters, submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance reboot.</p>
* `post_restore_db_cluster_from_snapshot` - <p>Creates a new cluster from a snapshot or cluster snapshot.</p> <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>
* `post_restore_db_cluster_to_point_in_time` - Restores a cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group. 
* `post_start_db_cluster` - Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
* `post_stop_db_cluster` - Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
