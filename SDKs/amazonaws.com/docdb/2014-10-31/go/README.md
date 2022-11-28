# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetAddSourceIdentifierToSubscriptionRequest{
        QueryParams: operations.GetAddSourceIdentifierToSubscriptionQueryParams{
            Action: "AddSourceIdentifierToSubscription",
            SourceIdentifier: "molestias",
            SubscriptionName: "molestias",
            Version: "2014-10-31",
        },
        Headers: operations.GetAddSourceIdentifierToSubscriptionHeaders{
            XAmzAlgorithm: "animi",
            XAmzContentSha256: "nesciunt",
            XAmzCredential: "nihil",
            XAmzDate: "aspernatur",
            XAmzSecurityToken: "hic",
            XAmzSignature: "vitae",
            XAmzSignedHeaders: "libero",
        },
    }
    
    res, err := s.Sdk.GetAddSourceIdentifierToSubscription(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `GetAddSourceIdentifierToSubscription` - Adds a source identifier to an existing event notification subscription.
* `GetApplyPendingMaintenanceAction` - Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).
* `GetCreateGlobalCluster` - <p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `GetDeleteDbCluster` - <p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>
* `GetDeleteDbClusterParameterGroup` - Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.
* `GetDeleteDbClusterSnapshot` - <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
* `GetDeleteDbInstance` - Deletes a previously provisioned instance.
* `GetDeleteDbSubnetGroup` - <p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
* `GetDeleteEventSubscription` - Deletes an Amazon DocumentDB event notification subscription.
* `GetDeleteGlobalCluster` - <p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `GetDescribeDbClusterSnapshotAttributes` - <p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all accounts.</p>
* `GetFailoverDbCluster` - <p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
* `GetModifyDbCluster` - Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 
* `GetModifyDbClusterSnapshotAttribute` - <p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
* `GetModifyDbInstance` - Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
* `GetModifyDbSubnetGroup` - Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Region.
* `GetModifyEventSubscription` - Modifies an existing Amazon DocumentDB event notification subscription.
* `GetModifyGlobalCluster` - <p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `GetRebootDbInstance` - <p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>
* `GetRemoveFromGlobalCluster` - <p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `GetRemoveSourceIdentifierFromSubscription` - Removes a source identifier from an existing Amazon DocumentDB event notification subscription.
* `GetRemoveTagsFromResource` - Removes metadata tags from an Amazon DocumentDB resource.
* `GetStartDbCluster` - Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
* `GetStopDbCluster` - Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
* `PostAddSourceIdentifierToSubscription` - Adds a source identifier to an existing event notification subscription.
* `PostAddTagsToResource` - Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources or in a <code>Condition</code> statement in an Identity and Access Management (IAM) policy for Amazon DocumentDB.
* `PostApplyPendingMaintenanceAction` - Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).
* `PostCopyDbClusterParameterGroup` - Copies the specified cluster parameter group.
* `PostCopyDbClusterSnapshot` - <p>Copies a snapshot of a cluster.</p> <p>To copy a cluster snapshot from a shared manual cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Region.</p> <p>To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that cluster snapshot is in the <i>copying</i> status.</p>
* `PostCreateDbCluster` - Creates a new Amazon DocumentDB cluster.
* `PostCreateDbClusterParameterGroup` - <p>Creates a new cluster parameter group.</p> <p>Parameters in a cluster parameter group apply to all of the instances in a cluster.</p> <p>A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the <code>default.docdb3.6</code> cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html"> create a new parameter group</a> or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html"> copy an existing parameter group</a>, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html"> Modifying Amazon DocumentDB Cluster Parameter Groups</a>. </p>
* `PostCreateDbClusterSnapshot` - Creates a snapshot of a cluster. 
* `PostCreateDbInstance` - Creates a new instance.
* `PostCreateDbSubnetGroup` - Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Region.
* `PostCreateEventSubscription` - <p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>
* `PostCreateGlobalCluster` - <p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `PostDeleteDbCluster` - <p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>
* `PostDeleteDbClusterParameterGroup` - Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.
* `PostDeleteDbClusterSnapshot` - <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
* `PostDeleteDbInstance` - Deletes a previously provisioned instance.
* `PostDeleteDbSubnetGroup` - <p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
* `PostDeleteEventSubscription` - Deletes an Amazon DocumentDB event notification subscription.
* `PostDeleteGlobalCluster` - <p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `PostDescribeCertificates` - Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this account.
* `PostDescribeDbClusterParameterGroups` - Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group. 
* `PostDescribeDbClusterParameters` - Returns the detailed parameter list for a particular cluster parameter group.
* `PostDescribeDbClusterSnapshotAttributes` - <p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all accounts.</p>
* `PostDescribeDbClusterSnapshots` - Returns information about cluster snapshots. This API operation supports pagination.
* `PostDescribeDbClusters` - Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the <code>filterName=engine,Values=docdb</code> filter parameter to return only Amazon DocumentDB clusters.
* `PostDescribeDbEngineVersions` - Returns a list of the available engines.
* `PostDescribeDbInstances` - Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.
* `PostDescribeDbSubnetGroups` - Returns a list of <code>DBSubnetGroup</code> descriptions. If a <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.
* `PostDescribeEngineDefaultClusterParameters` - Returns the default engine and system parameter information for the cluster database engine.
* `PostDescribeEventCategories` - Displays a list of categories for all event source types, or, if specified, for a specified source type. 
* `PostDescribeEventSubscriptions` - <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
* `PostDescribeEvents` - Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.
* `PostDescribeGlobalClusters` - <p>Returns information about Amazon DocumentDB global clusters. This API supports pagination.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `PostDescribeOrderableDbInstanceOptions` - Returns a list of orderable instance options for the specified engine.
* `PostDescribePendingMaintenanceActions` - Returns a list of resources (for example, instances) that have at least one pending maintenance action.
* `PostFailoverDbCluster` - <p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
* `PostListTagsForResource` - Lists all tags on an Amazon DocumentDB resource.
* `PostModifyDbCluster` - Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request. 
* `PostModifyDbClusterParameterGroup` - <p> Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.</p> </note> <important> <p>After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>
* `PostModifyDbClusterSnapshotAttribute` - <p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
* `PostModifyDbInstance` - Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
* `PostModifyDbSubnetGroup` - Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Region.
* `PostModifyEventSubscription` - Modifies an existing Amazon DocumentDB event notification subscription.
* `PostModifyGlobalCluster` - <p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `PostRebootDbInstance` - <p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>
* `PostRemoveFromGlobalCluster` - <p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
* `PostRemoveSourceIdentifierFromSubscription` - Removes a source identifier from an existing Amazon DocumentDB event notification subscription.
* `PostRemoveTagsFromResource` - Removes metadata tags from an Amazon DocumentDB resource.
* `PostResetDbClusterParameterGroup` - <p> Modifies the parameters of a cluster parameter group to the default value. To reset specific parameters, submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance reboot.</p>
* `PostRestoreDbClusterFromSnapshot` - <p>Creates a new cluster from a snapshot or cluster snapshot.</p> <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>
* `PostRestoreDbClusterToPointInTime` - Restores a cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group. 
* `PostStartDbCluster` - Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
* `PostStopDbCluster` - Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
