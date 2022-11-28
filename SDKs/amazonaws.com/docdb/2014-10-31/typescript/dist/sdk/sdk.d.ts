import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://rds.{region}.amazonaws.com", "https://rds.{region}.amazonaws.com", "http://rds.amazonaws.com", "https://rds.amazonaws.com", "http://rds.{region}.amazonaws.com.cn", "https://rds.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getAddSourceIdentifierToSubscription - Adds a source identifier to an existing event notification subscription.
    **/
    getAddSourceIdentifierToSubscription(req: operations.GetAddSourceIdentifierToSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetAddSourceIdentifierToSubscriptionResponse>;
    /**
     * getApplyPendingMaintenanceAction - Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).
    **/
    getApplyPendingMaintenanceAction(req: operations.GetApplyPendingMaintenanceActionRequest, config?: AxiosRequestConfig): Promise<operations.GetApplyPendingMaintenanceActionResponse>;
    /**
     * getCreateGlobalCluster - <p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
    **/
    getCreateGlobalCluster(req: operations.GetCreateGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetCreateGlobalClusterResponse>;
    /**
     * getDeleteDbCluster - <p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>
    **/
    getDeleteDbCluster(req: operations.GetDeleteDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbClusterResponse>;
    /**
     * getDeleteDbClusterParameterGroup - Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.
    **/
    getDeleteDbClusterParameterGroup(req: operations.GetDeleteDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbClusterParameterGroupResponse>;
    /**
     * getDeleteDbClusterSnapshot - <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
    **/
    getDeleteDbClusterSnapshot(req: operations.GetDeleteDbClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbClusterSnapshotResponse>;
    /**
     * getDeleteDbInstance - Deletes a previously provisioned instance.
    **/
    getDeleteDbInstance(req: operations.GetDeleteDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbInstanceResponse>;
    /**
     * getDeleteDbSubnetGroup - <p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
    **/
    getDeleteDbSubnetGroup(req: operations.GetDeleteDbSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteDbSubnetGroupResponse>;
    /**
     * getDeleteEventSubscription - Deletes an Amazon DocumentDB event notification subscription.
    **/
    getDeleteEventSubscription(req: operations.GetDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteEventSubscriptionResponse>;
    /**
     * getDeleteGlobalCluster - <p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
    **/
    getDeleteGlobalCluster(req: operations.GetDeleteGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteGlobalClusterResponse>;
    /**
     * getDescribeDbClusterSnapshotAttributes - <p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all accounts.</p>
    **/
    getDescribeDbClusterSnapshotAttributes(req: operations.GetDescribeDbClusterSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeDbClusterSnapshotAttributesResponse>;
    /**
     * getFailoverDbCluster - <p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
    **/
    getFailoverDbCluster(req: operations.GetFailoverDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetFailoverDbClusterResponse>;
    /**
     * getModifyDbCluster - Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
    **/
    getModifyDbCluster(req: operations.GetModifyDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbClusterResponse>;
    /**
     * getModifyDbClusterSnapshotAttribute - <p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
    **/
    getModifyDbClusterSnapshotAttribute(req: operations.GetModifyDbClusterSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbClusterSnapshotAttributeResponse>;
    /**
     * getModifyDbInstance - Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
    **/
    getModifyDbInstance(req: operations.GetModifyDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbInstanceResponse>;
    /**
     * getModifyDbSubnetGroup - Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Region.
    **/
    getModifyDbSubnetGroup(req: operations.GetModifyDbSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyDbSubnetGroupResponse>;
    /**
     * getModifyEventSubscription - Modifies an existing Amazon DocumentDB event notification subscription.
    **/
    getModifyEventSubscription(req: operations.GetModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyEventSubscriptionResponse>;
    /**
     * getModifyGlobalCluster - <p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
    **/
    getModifyGlobalCluster(req: operations.GetModifyGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyGlobalClusterResponse>;
    /**
     * getRebootDbInstance - <p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>
    **/
    getRebootDbInstance(req: operations.GetRebootDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.GetRebootDbInstanceResponse>;
    /**
     * getRemoveFromGlobalCluster - <p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
    **/
    getRemoveFromGlobalCluster(req: operations.GetRemoveFromGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveFromGlobalClusterResponse>;
    /**
     * getRemoveSourceIdentifierFromSubscription - Removes a source identifier from an existing Amazon DocumentDB event notification subscription.
    **/
    getRemoveSourceIdentifierFromSubscription(req: operations.GetRemoveSourceIdentifierFromSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveSourceIdentifierFromSubscriptionResponse>;
    /**
     * getRemoveTagsFromResource - Removes metadata tags from an Amazon DocumentDB resource.
    **/
    getRemoveTagsFromResource(req: operations.GetRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveTagsFromResourceResponse>;
    /**
     * getStartDbCluster - Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
    **/
    getStartDbCluster(req: operations.GetStartDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetStartDbClusterResponse>;
    /**
     * getStopDbCluster - Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
    **/
    getStopDbCluster(req: operations.GetStopDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetStopDbClusterResponse>;
    /**
     * postAddSourceIdentifierToSubscription - Adds a source identifier to an existing event notification subscription.
    **/
    postAddSourceIdentifierToSubscription(req: operations.PostAddSourceIdentifierToSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostAddSourceIdentifierToSubscriptionResponse>;
    /**
     * postAddTagsToResource - Adds metadata tags to an Amazon DocumentDB resource. You can use these tags with cost allocation reporting to track costs that are associated with Amazon DocumentDB resources or in a <code>Condition</code> statement in an Identity and Access Management (IAM) policy for Amazon DocumentDB.
    **/
    postAddTagsToResource(req: operations.PostAddTagsToResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostAddTagsToResourceResponse>;
    /**
     * postApplyPendingMaintenanceAction - Applies a pending maintenance action to a resource (for example, to an Amazon DocumentDB instance).
    **/
    postApplyPendingMaintenanceAction(req: operations.PostApplyPendingMaintenanceActionRequest, config?: AxiosRequestConfig): Promise<operations.PostApplyPendingMaintenanceActionResponse>;
    /**
     * postCopyDbClusterParameterGroup - Copies the specified cluster parameter group.
    **/
    postCopyDbClusterParameterGroup(req: operations.PostCopyDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCopyDbClusterParameterGroupResponse>;
    /**
     * postCopyDbClusterSnapshot - <p>Copies a snapshot of a cluster.</p> <p>To copy a cluster snapshot from a shared manual cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code> must be the Amazon Resource Name (ARN) of the shared cluster snapshot. You can only copy a shared DB cluster snapshot, whether encrypted or not, in the same Region.</p> <p>To cancel the copy operation after it is in progress, delete the target cluster snapshot identified by <code>TargetDBClusterSnapshotIdentifier</code> while that cluster snapshot is in the <i>copying</i> status.</p>
    **/
    postCopyDbClusterSnapshot(req: operations.PostCopyDbClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostCopyDbClusterSnapshotResponse>;
    /**
     * postCreateDbCluster - Creates a new Amazon DocumentDB cluster.
    **/
    postCreateDbCluster(req: operations.PostCreateDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbClusterResponse>;
    /**
     * postCreateDbClusterParameterGroup - <p>Creates a new cluster parameter group.</p> <p>Parameters in a cluster parameter group apply to all of the instances in a cluster.</p> <p>A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the <code>default.docdb3.6</code> cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html"> create a new parameter group</a> or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html"> copy an existing parameter group</a>, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html"> Modifying Amazon DocumentDB Cluster Parameter Groups</a>. </p>
    **/
    postCreateDbClusterParameterGroup(req: operations.PostCreateDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbClusterParameterGroupResponse>;
    /**
     * postCreateDbClusterSnapshot - Creates a snapshot of a cluster.
    **/
    postCreateDbClusterSnapshot(req: operations.PostCreateDbClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbClusterSnapshotResponse>;
    /**
     * postCreateDbInstance - Creates a new instance.
    **/
    postCreateDbInstance(req: operations.PostCreateDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbInstanceResponse>;
    /**
     * postCreateDbSubnetGroup - Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Region.
    **/
    postCreateDbSubnetGroup(req: operations.PostCreateDbSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateDbSubnetGroupResponse>;
    /**
     * postCreateEventSubscription - <p>Creates an Amazon DocumentDB event notification subscription. This action requires a topic Amazon Resource Name (ARN) created by using the Amazon DocumentDB console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the Amazon SNS console.</p> <p>You can specify the type of source (<code>SourceType</code>) that you want to be notified of. You can also provide a list of Amazon DocumentDB sources (<code>SourceIds</code>) that trigger the events, and you can provide a list of event categories (<code>EventCategories</code>) for events that you want to be notified of. For example, you can specify <code>SourceType = db-instance</code>, <code>SourceIds = mydbinstance1, mydbinstance2</code> and <code>EventCategories = Availability, Backup</code>.</p> <p>If you specify both the <code>SourceType</code> and <code>SourceIds</code> (such as <code>SourceType = db-instance</code> and <code>SourceIdentifier = myDBInstance1</code>), you are notified of all the <code>db-instance</code> events for the specified source. If you specify a <code>SourceType</code> but do not specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your Amazon DocumentDB sources. If you do not specify either the <code>SourceType</code> or the <code>SourceIdentifier</code>, you are notified of events generated from all Amazon DocumentDB sources belonging to your customer account.</p>
    **/
    postCreateEventSubscription(req: operations.PostCreateEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateEventSubscriptionResponse>;
    /**
     * postCreateGlobalCluster - <p>Creates an Amazon DocumentDB global cluster that can span multiple multiple Regions. The global cluster contains one primary cluster with read-write capability, and up-to give read-only secondary clusters. Global clusters uses storage-based fast replication across regions with latencies less than one second, using dedicated infrastructure with no impact to your workload’s performance.</p> <p/> <p>You can create a global cluster that is initially empty, and then add a primary and a secondary to it. Or you can specify an existing cluster during the create operation, and this cluster becomes the primary of the global cluster. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
    **/
    postCreateGlobalCluster(req: operations.PostCreateGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateGlobalClusterResponse>;
    /**
     * postDeleteDbCluster - <p>Deletes a previously provisioned cluster. When you delete a cluster, all automated backups for that cluster are deleted and can't be recovered. Manual DB cluster snapshots of the specified cluster are not deleted.</p> <p/>
    **/
    postDeleteDbCluster(req: operations.PostDeleteDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbClusterResponse>;
    /**
     * postDeleteDbClusterParameterGroup - Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.
    **/
    postDeleteDbClusterParameterGroup(req: operations.PostDeleteDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbClusterParameterGroupResponse>;
    /**
     * postDeleteDbClusterSnapshot - <p>Deletes a cluster snapshot. If the snapshot is being copied, the copy operation is terminated.</p> <note> <p>The cluster snapshot must be in the <code>available</code> state to be deleted.</p> </note>
    **/
    postDeleteDbClusterSnapshot(req: operations.PostDeleteDbClusterSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbClusterSnapshotResponse>;
    /**
     * postDeleteDbInstance - Deletes a previously provisioned instance.
    **/
    postDeleteDbInstance(req: operations.PostDeleteDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbInstanceResponse>;
    /**
     * postDeleteDbSubnetGroup - <p>Deletes a subnet group.</p> <note> <p>The specified database subnet group must not be associated with any DB instances.</p> </note>
    **/
    postDeleteDbSubnetGroup(req: operations.PostDeleteDbSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteDbSubnetGroupResponse>;
    /**
     * postDeleteEventSubscription - Deletes an Amazon DocumentDB event notification subscription.
    **/
    postDeleteEventSubscription(req: operations.PostDeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteEventSubscriptionResponse>;
    /**
     * postDeleteGlobalCluster - <p>Deletes a global cluster. The primary and secondary clusters must already be detached or deleted before attempting to delete a global cluster.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
    **/
    postDeleteGlobalCluster(req: operations.PostDeleteGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteGlobalClusterResponse>;
    /**
     * postDescribeCertificates - Returns a list of certificate authority (CA) certificates provided by Amazon DocumentDB for this account.
    **/
    postDescribeCertificates(req: operations.PostDescribeCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeCertificatesResponse>;
    /**
     * postDescribeDbClusterParameterGroups - Returns a list of <code>DBClusterParameterGroup</code> descriptions. If a <code>DBClusterParameterGroupName</code> parameter is specified, the list contains only the description of the specified cluster parameter group.
    **/
    postDescribeDbClusterParameterGroups(req: operations.PostDescribeDbClusterParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClusterParameterGroupsResponse>;
    /**
     * postDescribeDbClusterParameters - Returns the detailed parameter list for a particular cluster parameter group.
    **/
    postDescribeDbClusterParameters(req: operations.PostDescribeDbClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClusterParametersResponse>;
    /**
     * postDescribeDbClusterSnapshotAttributes - <p>Returns a list of cluster snapshot attribute names and values for a manual DB cluster snapshot.</p> <p>When you share snapshots with other accounts, <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute and a list of IDs for the accounts that are authorized to copy or restore the manual cluster snapshot. If <code>all</code> is included in the list of values for the <code>restore</code> attribute, then the manual cluster snapshot is public and can be copied or restored by all accounts.</p>
    **/
    postDescribeDbClusterSnapshotAttributes(req: operations.PostDescribeDbClusterSnapshotAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClusterSnapshotAttributesResponse>;
    /**
     * postDescribeDbClusterSnapshots - Returns information about cluster snapshots. This API operation supports pagination.
    **/
    postDescribeDbClusterSnapshots(req: operations.PostDescribeDbClusterSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClusterSnapshotsResponse>;
    /**
     * postDescribeDbClusters - Returns information about provisioned Amazon DocumentDB clusters. This API operation supports pagination. For certain management features such as cluster and instance lifecycle management, Amazon DocumentDB leverages operational technology that is shared with Amazon RDS and Amazon Neptune. Use the <code>filterName=engine,Values=docdb</code> filter parameter to return only Amazon DocumentDB clusters.
    **/
    postDescribeDbClusters(req: operations.PostDescribeDbClustersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbClustersResponse>;
    /**
     * postDescribeDbEngineVersions - Returns a list of the available engines.
    **/
    postDescribeDbEngineVersions(req: operations.PostDescribeDbEngineVersionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbEngineVersionsResponse>;
    /**
     * postDescribeDbInstances - Returns information about provisioned Amazon DocumentDB instances. This API supports pagination.
    **/
    postDescribeDbInstances(req: operations.PostDescribeDbInstancesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbInstancesResponse>;
    /**
     * postDescribeDbSubnetGroups - Returns a list of <code>DBSubnetGroup</code> descriptions. If a <code>DBSubnetGroupName</code> is specified, the list will contain only the descriptions of the specified <code>DBSubnetGroup</code>.
    **/
    postDescribeDbSubnetGroups(req: operations.PostDescribeDbSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeDbSubnetGroupsResponse>;
    /**
     * postDescribeEngineDefaultClusterParameters - Returns the default engine and system parameter information for the cluster database engine.
    **/
    postDescribeEngineDefaultClusterParameters(req: operations.PostDescribeEngineDefaultClusterParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEngineDefaultClusterParametersResponse>;
    /**
     * postDescribeEventCategories - Displays a list of categories for all event source types, or, if specified, for a specified source type.
    **/
    postDescribeEventCategories(req: operations.PostDescribeEventCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEventCategoriesResponse>;
    /**
     * postDescribeEventSubscriptions - <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p> <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
    **/
    postDescribeEventSubscriptions(req: operations.PostDescribeEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEventSubscriptionsResponse>;
    /**
     * postDescribeEvents - Returns events related to instances, security groups, snapshots, and DB parameter groups for the past 14 days. You can obtain events specific to a particular DB instance, security group, snapshot, or parameter group by providing the name as a parameter. By default, the events of the past hour are returned.
    **/
    postDescribeEvents(req: operations.PostDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEventsResponse>;
    /**
     * postDescribeGlobalClusters - <p>Returns information about Amazon DocumentDB global clusters. This API supports pagination.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
    **/
    postDescribeGlobalClusters(req: operations.PostDescribeGlobalClustersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeGlobalClustersResponse>;
    /**
     * postDescribeOrderableDbInstanceOptions - Returns a list of orderable instance options for the specified engine.
    **/
    postDescribeOrderableDbInstanceOptions(req: operations.PostDescribeOrderableDbInstanceOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeOrderableDbInstanceOptionsResponse>;
    /**
     * postDescribePendingMaintenanceActions - Returns a list of resources (for example, instances) that have at least one pending maintenance action.
    **/
    postDescribePendingMaintenanceActions(req: operations.PostDescribePendingMaintenanceActionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribePendingMaintenanceActionsResponse>;
    /**
     * postFailoverDbCluster - <p>Forces a failover for a cluster.</p> <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p> <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
    **/
    postFailoverDbCluster(req: operations.PostFailoverDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostFailoverDbClusterResponse>;
    /**
     * postListTagsForResource - Lists all tags on an Amazon DocumentDB resource.
    **/
    postListTagsForResource(req: operations.PostListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostListTagsForResourceResponse>;
    /**
     * postModifyDbCluster - Modifies a setting for an Amazon DocumentDB cluster. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
    **/
    postModifyDbCluster(req: operations.PostModifyDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbClusterResponse>;
    /**
     * postModifyDbClusterParameterGroup - <p> Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: <code>ParameterName</code>, <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single request. </p> <note> <p>Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect.</p> </note> <important> <p>After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the <code>character_set_database</code> parameter.</p> </important>
    **/
    postModifyDbClusterParameterGroup(req: operations.PostModifyDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbClusterParameterGroupResponse>;
    /**
     * postModifyDbClusterSnapshotAttribute - <p>Adds an attribute and values to, or removes an attribute and values from, a manual cluster snapshot.</p> <p>To share a manual cluster snapshot with other accounts, specify <code>restore</code> as the <code>AttributeName</code>, and use the <code>ValuesToAdd</code> parameter to add a list of IDs of the accounts that are authorized to restore the manual cluster snapshot. Use the value <code>all</code> to make the manual cluster snapshot public, which means that it can be copied or restored by all accounts. Do not add the <code>all</code> value for any manual cluster snapshots that contain private information that you don't want available to all accounts. If a manual cluster snapshot is encrypted, it can be shared, but only by specifying a list of authorized account IDs for the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that parameter in this case.</p>
    **/
    postModifyDbClusterSnapshotAttribute(req: operations.PostModifyDbClusterSnapshotAttributeRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbClusterSnapshotAttributeResponse>;
    /**
     * postModifyDbInstance - Modifies settings for an instance. You can change one or more database configuration parameters by specifying these parameters and the new values in the request.
    **/
    postModifyDbInstance(req: operations.PostModifyDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbInstanceResponse>;
    /**
     * postModifyDbSubnetGroup - Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Region.
    **/
    postModifyDbSubnetGroup(req: operations.PostModifyDbSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyDbSubnetGroupResponse>;
    /**
     * postModifyEventSubscription - Modifies an existing Amazon DocumentDB event notification subscription.
    **/
    postModifyEventSubscription(req: operations.PostModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyEventSubscriptionResponse>;
    /**
     * postModifyGlobalCluster - <p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
    **/
    postModifyGlobalCluster(req: operations.PostModifyGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyGlobalClusterResponse>;
    /**
     * postRebootDbInstance - <p>You might need to reboot your instance, usually for maintenance reasons. For example, if you make certain changes, or if you change the cluster parameter group that is associated with the instance, you must reboot the instance for the changes to take effect. </p> <p>Rebooting an instance restarts the database engine service. Rebooting an instance results in a momentary outage, during which the instance status is set to <i>rebooting</i>. </p>
    **/
    postRebootDbInstance(req: operations.PostRebootDbInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PostRebootDbInstanceResponse>;
    /**
     * postRemoveFromGlobalCluster - <p>Detaches an Amazon DocumentDB secondary cluster from a global cluster. The cluster becomes a standalone cluster with read-write capability instead of being read-only and receiving data from a primary in a different region. </p> <note> <p>This action only applies to Amazon DocumentDB clusters.</p> </note>
    **/
    postRemoveFromGlobalCluster(req: operations.PostRemoveFromGlobalClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoveFromGlobalClusterResponse>;
    /**
     * postRemoveSourceIdentifierFromSubscription - Removes a source identifier from an existing Amazon DocumentDB event notification subscription.
    **/
    postRemoveSourceIdentifierFromSubscription(req: operations.PostRemoveSourceIdentifierFromSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoveSourceIdentifierFromSubscriptionResponse>;
    /**
     * postRemoveTagsFromResource - Removes metadata tags from an Amazon DocumentDB resource.
    **/
    postRemoveTagsFromResource(req: operations.PostRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoveTagsFromResourceResponse>;
    /**
     * postResetDbClusterParameterGroup - <p> Modifies the parameters of a cluster parameter group to the default value. To reset specific parameters, submit a list of the following: <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire cluster parameter group, specify the <code>DBClusterParameterGroupName</code> and <code>ResetAllParameters</code> parameters. </p> <p> When you reset the entire group, dynamic parameters are updated immediately and static parameters are set to <code>pending-reboot</code> to take effect on the next DB instance reboot.</p>
    **/
    postResetDbClusterParameterGroup(req: operations.PostResetDbClusterParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostResetDbClusterParameterGroupResponse>;
    /**
     * postRestoreDbClusterFromSnapshot - <p>Creates a new cluster from a snapshot or cluster snapshot.</p> <p>If a snapshot is specified, the target cluster is created from the source DB snapshot with a default configuration and default security group.</p> <p>If a cluster snapshot is specified, the target cluster is created from the source cluster restore point with the same configuration as the original source DB cluster, except that the new cluster is created with the default security group.</p>
    **/
    postRestoreDbClusterFromSnapshot(req: operations.PostRestoreDbClusterFromSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostRestoreDbClusterFromSnapshotResponse>;
    /**
     * postRestoreDbClusterToPointInTime - Restores a cluster to an arbitrary point in time. Users can restore to any point in time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code> days. The target cluster is created from the source cluster with the same configuration as the original cluster, except that the new cluster is created with the default security group.
    **/
    postRestoreDbClusterToPointInTime(req: operations.PostRestoreDbClusterToPointInTimeRequest, config?: AxiosRequestConfig): Promise<operations.PostRestoreDbClusterToPointInTimeResponse>;
    /**
     * postStartDbCluster - Restarts the stopped cluster that is specified by <code>DBClusterIdentifier</code>. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
    **/
    postStartDbCluster(req: operations.PostStartDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostStartDbClusterResponse>;
    /**
     * postStopDbCluster - Stops the running cluster that is specified by <code>DBClusterIdentifier</code>. The cluster must be in the <i>available</i> state. For more information, see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-stop-start.html">Stopping and Starting an Amazon DocumentDB Cluster</a>.
    **/
    postStopDbCluster(req: operations.PostStopDbClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostStopDbClusterResponse>;
}
export {};
