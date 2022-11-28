import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://elasticache.{region}.amazonaws.com", "https://elasticache.{region}.amazonaws.com", "http://elasticache.{region}.amazonaws.com.cn", "https://elasticache.{region}.amazonaws.com.cn"];
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
     * getAuthorizeCacheSecurityGroupIngress - <p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>
    **/
    getAuthorizeCacheSecurityGroupIngress(req: operations.GetAuthorizeCacheSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizeCacheSecurityGroupIngressResponse>;
    /**
     * getBatchApplyUpdateAction - Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.
    **/
    getBatchApplyUpdateAction(req: operations.GetBatchApplyUpdateActionRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchApplyUpdateActionResponse>;
    /**
     * getBatchStopUpdateAction - Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.
    **/
    getBatchStopUpdateAction(req: operations.GetBatchStopUpdateActionRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchStopUpdateActionResponse>;
    /**
     * getCompleteMigration - Complete the migration of data.
    **/
    getCompleteMigration(req: operations.GetCompleteMigrationRequest, config?: AxiosRequestConfig): Promise<operations.GetCompleteMigrationResponse>;
    /**
     * getCreateGlobalReplicationGroup - <p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>
    **/
    getCreateGlobalReplicationGroup(req: operations.GetCreateGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetCreateGlobalReplicationGroupResponse>;
    /**
     * getDecreaseNodeGroupsInGlobalReplicationGroup - Decreases the number of node groups in a Global datastore
    **/
    getDecreaseNodeGroupsInGlobalReplicationGroup(req: operations.GetDecreaseNodeGroupsInGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDecreaseNodeGroupsInGlobalReplicationGroupResponse>;
    /**
     * getDeleteCacheCluster - <p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>
    **/
    getDeleteCacheCluster(req: operations.GetDeleteCacheClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteCacheClusterResponse>;
    /**
     * getDeleteCacheParameterGroup - Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.
    **/
    getDeleteCacheParameterGroup(req: operations.GetDeleteCacheParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteCacheParameterGroupResponse>;
    /**
     * getDeleteCacheSecurityGroup - <p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>
    **/
    getDeleteCacheSecurityGroup(req: operations.GetDeleteCacheSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteCacheSecurityGroupResponse>;
    /**
     * getDeleteCacheSubnetGroup - <p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>
    **/
    getDeleteCacheSubnetGroup(req: operations.GetDeleteCacheSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteCacheSubnetGroupResponse>;
    /**
     * getDeleteGlobalReplicationGroup - <p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>
    **/
    getDeleteGlobalReplicationGroup(req: operations.GetDeleteGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteGlobalReplicationGroupResponse>;
    /**
     * getDeleteReplicationGroup - <p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    getDeleteReplicationGroup(req: operations.GetDeleteReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteReplicationGroupResponse>;
    /**
     * getDeleteSnapshot - <p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    getDeleteSnapshot(req: operations.GetDeleteSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteSnapshotResponse>;
    /**
     * getDeleteUser - For Redis engine version 6.x onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.
    **/
    getDeleteUser(req: operations.GetDeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteUserResponse>;
    /**
     * getDeleteUserGroup - For Redis engine version 6.x onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.
    **/
    getDeleteUserGroup(req: operations.GetDeleteUserGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDeleteUserGroupResponse>;
    /**
     * getDescribeCacheClusters - <p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>
    **/
    getDescribeCacheClusters(req: operations.GetDescribeCacheClustersRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeCacheClustersResponse>;
    /**
     * getDescribeCacheEngineVersions - Returns a list of the available cache engines and their versions.
    **/
    getDescribeCacheEngineVersions(req: operations.GetDescribeCacheEngineVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeCacheEngineVersionsResponse>;
    /**
     * getDescribeCacheParameterGroups - Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
    **/
    getDescribeCacheParameterGroups(req: operations.GetDescribeCacheParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeCacheParameterGroupsResponse>;
    /**
     * getDescribeCacheParameters - Returns the detailed parameter list for a particular cache parameter group.
    **/
    getDescribeCacheParameters(req: operations.GetDescribeCacheParametersRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeCacheParametersResponse>;
    /**
     * getDescribeCacheSecurityGroups - Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup
    **/
    getDescribeCacheSecurityGroups(req: operations.GetDescribeCacheSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeCacheSecurityGroupsResponse>;
    /**
     * getDescribeCacheSubnetGroups - Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default.
    **/
    getDescribeCacheSubnetGroups(req: operations.GetDescribeCacheSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeCacheSubnetGroupsResponse>;
    /**
     * getDescribeEngineDefaultParameters - Returns the default engine and system parameter information for the specified cache engine.
    **/
    getDescribeEngineDefaultParameters(req: operations.GetDescribeEngineDefaultParametersRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeEngineDefaultParametersResponse>;
    /**
     * getDescribeEvents - <p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
    **/
    getDescribeEvents(req: operations.GetDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeEventsResponse>;
    /**
     * getDescribeGlobalReplicationGroups - Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores.
    **/
    getDescribeGlobalReplicationGroups(req: operations.GetDescribeGlobalReplicationGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeGlobalReplicationGroupsResponse>;
    /**
     * getDescribeReplicationGroups - <p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    getDescribeReplicationGroups(req: operations.GetDescribeReplicationGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeReplicationGroupsResponse>;
    /**
     * getDescribeReservedCacheNodes - Returns information about reserved cache nodes for this account, or about a specified reserved cache node.
    **/
    getDescribeReservedCacheNodes(req: operations.GetDescribeReservedCacheNodesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeReservedCacheNodesResponse>;
    /**
     * getDescribeReservedCacheNodesOfferings - Lists available reserved cache node offerings.
    **/
    getDescribeReservedCacheNodesOfferings(req: operations.GetDescribeReservedCacheNodesOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeReservedCacheNodesOfferingsResponse>;
    /**
     * getDescribeServiceUpdates - Returns details of the service updates
    **/
    getDescribeServiceUpdates(req: operations.GetDescribeServiceUpdatesRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeServiceUpdatesResponse>;
    /**
     * getDescribeSnapshots - <p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    getDescribeSnapshots(req: operations.GetDescribeSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeSnapshotsResponse>;
    /**
     * getDescribeUpdateActions - Returns details of the update actions
    **/
    getDescribeUpdateActions(req: operations.GetDescribeUpdateActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeUpdateActionsResponse>;
    /**
     * getDescribeUserGroups - Returns a list of user groups.
    **/
    getDescribeUserGroups(req: operations.GetDescribeUserGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetDescribeUserGroupsResponse>;
    /**
     * getDisassociateGlobalReplicationGroup - Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.
    **/
    getDisassociateGlobalReplicationGroup(req: operations.GetDisassociateGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDisassociateGlobalReplicationGroupResponse>;
    /**
     * getFailoverGlobalReplicationGroup - Used to failover the primary region to a selected secondary region. The selected secondary region will become primary, and all other clusters will become secondary.
    **/
    getFailoverGlobalReplicationGroup(req: operations.GetFailoverGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetFailoverGlobalReplicationGroupResponse>;
    /**
     * getListAllowedNodeTypeModifications - <p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>
    **/
    getListAllowedNodeTypeModifications(req: operations.GetListAllowedNodeTypeModificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetListAllowedNodeTypeModificationsResponse>;
    /**
     * getListTagsForResource - <p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>
    **/
    getListTagsForResource(req: operations.GetListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetListTagsForResourceResponse>;
    /**
     * getModifyCacheSubnetGroup - Modifies an existing cache subnet group.
    **/
    getModifyCacheSubnetGroup(req: operations.GetModifyCacheSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyCacheSubnetGroupResponse>;
    /**
     * getModifyGlobalReplicationGroup - Modifies the settings for a Global datastore.
    **/
    getModifyGlobalReplicationGroup(req: operations.GetModifyGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyGlobalReplicationGroupResponse>;
    /**
     * getModifyUser - Changes user password(s) and/or access string.
    **/
    getModifyUser(req: operations.GetModifyUserRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyUserResponse>;
    /**
     * getModifyUserGroup - Changes the list of users that belong to the user group.
    **/
    getModifyUserGroup(req: operations.GetModifyUserGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetModifyUserGroupResponse>;
    /**
     * getRebalanceSlotsInGlobalReplicationGroup - Redistribute slots to ensure uniform distribution across existing shards in the cluster.
    **/
    getRebalanceSlotsInGlobalReplicationGroup(req: operations.GetRebalanceSlotsInGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetRebalanceSlotsInGlobalReplicationGroupResponse>;
    /**
     * getRebootCacheCluster - <p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
    **/
    getRebootCacheCluster(req: operations.GetRebootCacheClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetRebootCacheClusterResponse>;
    /**
     * getRemoveTagsFromResource - Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.
    **/
    getRemoveTagsFromResource(req: operations.GetRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveTagsFromResourceResponse>;
    /**
     * getRevokeCacheSecurityGroupIngress - Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.
    **/
    getRevokeCacheSecurityGroupIngress(req: operations.GetRevokeCacheSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.GetRevokeCacheSecurityGroupIngressResponse>;
    /**
     * getTestFailover - <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>
    **/
    getTestFailover(req: operations.GetTestFailoverRequest, config?: AxiosRequestConfig): Promise<operations.GetTestFailoverResponse>;
    /**
     * postAddTagsToResource - <p>A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p> For example, you can use cost-allocation tags to your ElastiCache resources, Amazon generates a cost allocation report as a comma-separated value (CSV) file with your usage and costs aggregated by your tags. You can apply tags that represent business categories (such as cost centers, application names, or owners) to organize your costs across multiple services.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Tagging.html">Using Cost Allocation Tags in Amazon ElastiCache</a> in the <i>ElastiCache User Guide</i>.</p>
    **/
    postAddTagsToResource(req: operations.PostAddTagsToResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostAddTagsToResourceResponse>;
    /**
     * postAuthorizeCacheSecurityGroupIngress - <p>Allows network ingress to a cache security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2 security groups are used as the authorization mechanism.</p> <note> <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an ElastiCache cluster in another region.</p> </note>
    **/
    postAuthorizeCacheSecurityGroupIngress(req: operations.PostAuthorizeCacheSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.PostAuthorizeCacheSecurityGroupIngressResponse>;
    /**
     * postBatchApplyUpdateAction - Apply the service update. For more information on service updates and applying them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/applying-updates.html">Applying Service Updates</a>.
    **/
    postBatchApplyUpdateAction(req: operations.PostBatchApplyUpdateActionRequest, config?: AxiosRequestConfig): Promise<operations.PostBatchApplyUpdateActionResponse>;
    /**
     * postBatchStopUpdateAction - Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.
    **/
    postBatchStopUpdateAction(req: operations.PostBatchStopUpdateActionRequest, config?: AxiosRequestConfig): Promise<operations.PostBatchStopUpdateActionResponse>;
    /**
     * postCompleteMigration - Complete the migration of data.
    **/
    postCompleteMigration(req: operations.PostCompleteMigrationRequest, config?: AxiosRequestConfig): Promise<operations.PostCompleteMigrationResponse>;
    /**
     * postCopySnapshot - <p>Makes a copy of an existing snapshot.</p> <note> <p>This operation is valid for Redis only.</p> </note> <important> <p>Users or groups that have permissions to use the <code>CopySnapshot</code> operation can create their own Amazon S3 buckets and copy snapshots to it. To control access to your snapshots, use an IAM policy to control who has the ability to use the <code>CopySnapshot</code> operation. For more information about using IAM to control the use of ElastiCache operations, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html">Exporting Snapshots</a> and <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.html">Authentication &amp; Access Control</a>.</p> </important> <p>You could receive the following error messages.</p> <p class="title"> <b>Error Messages</b> </p> <ul> <li> <p> <b>Error Message:</b> The S3 bucket %s is outside of the region.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s does not exist.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s is not owned by the authenticated user.</p> <p> <b>Solution:</b> Create an Amazon S3 bucket in the same region as your snapshot. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-create-s3-bucket">Step 1: Create an Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message:</b> The authenticated user does not have sufficient permissions to perform the desired activity.</p> <p> <b>Solution:</b> Contact your system administrator to get the needed permissions.</p> </li> <li> <p> <b>Error Message:</b> The S3 bucket %s already contains an object with key %s.</p> <p> <b>Solution:</b> Give the <code>TargetSnapshotName</code> a new and unique value. If exporting a snapshot, you could alternatively create a new Amazon S3 bucket and use this same value for <code>TargetSnapshotName</code>.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add List and Read permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted WRITE permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add Upload/Delete permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> <li> <p> <b>Error Message: </b> ElastiCache has not been granted READ_ACP permissions %s on the S3 Bucket.</p> <p> <b>Solution:</b> Add View Permissions on the bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/backups-exporting.html#backups-exporting-grant-access">Step 2: Grant ElastiCache Access to Your Amazon S3 Bucket</a> in the ElastiCache User Guide.</p> </li> </ul>
    **/
    postCopySnapshot(req: operations.PostCopySnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostCopySnapshotResponse>;
    /**
     * postCreateCacheCluster - <p>Creates a cluster. All nodes in the cluster run the same protocol-compliant cache engine software, either Memcached or Redis.</p> <p>This operation is not supported for Redis (cluster mode enabled) clusters.</p>
    **/
    postCreateCacheCluster(req: operations.PostCreateCacheClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateCacheClusterResponse>;
    /**
     * postCreateCacheParameterGroup - <p>Creates a new Amazon ElastiCache cache parameter group. An ElastiCache cache parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster or replication group using the CacheParameterGroup.</p> <p>A newly created CacheParameterGroup is an exact duplicate of the default parameter group for the CacheParameterGroupFamily. To customize the newly created CacheParameterGroup you can change the values of specific parameters. For more information, see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyCacheParameterGroup.html">ModifyCacheParameterGroup</a> in the ElastiCache API Reference.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ParameterGroups.html">Parameters and Parameter Groups</a> in the ElastiCache User Guide.</p> </li> </ul>
    **/
    postCreateCacheParameterGroup(req: operations.PostCreateCacheParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateCacheParameterGroupResponse>;
    /**
     * postCreateCacheSecurityGroup - <p>Creates a new cache security group. Use a cache security group to control access to one or more clusters.</p> <p>Cache security groups are only used when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC). If you are creating a cluster inside of a VPC, use a cache subnet group instead. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html">CreateCacheSubnetGroup</a>.</p>
    **/
    postCreateCacheSecurityGroup(req: operations.PostCreateCacheSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateCacheSecurityGroupResponse>;
    /**
     * postCreateCacheSubnetGroup - <p>Creates a new cache subnet group.</p> <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
    **/
    postCreateCacheSubnetGroup(req: operations.PostCreateCacheSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateCacheSubnetGroupResponse>;
    /**
     * postCreateGlobalReplicationGroup - <p>Global Datastore for Redis offers fully managed, fast, reliable and secure cross-region replication. Using Global Datastore for Redis, you can create cross-region read replica clusters for ElastiCache for Redis to enable low-latency reads and disaster recovery across regions. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Redis-Global-Datastore.html">Replication Across Regions Using Global Datastore</a>. </p> <ul> <li> <p>The <b>GlobalReplicationGroupIdSuffix</b> is the name of the Global datastore.</p> </li> <li> <p>The <b>PrimaryReplicationGroupId</b> represents the name of the primary cluster that accepts writes and will replicate updates to the secondary cluster.</p> </li> </ul>
    **/
    postCreateGlobalReplicationGroup(req: operations.PostCreateGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateGlobalReplicationGroupResponse>;
    /**
     * postCreateReplicationGroup - <p>Creates a Redis (cluster mode disabled) or a Redis (cluster mode enabled) replication group.</p> <p>This API can be used to create a standalone regional replication group or a secondary replication group associated with a Global datastore.</p> <p>A Redis (cluster mode disabled) replication group is a collection of clusters, where one of the clusters is a read/write primary and the others are read-only replicas. Writes to the primary are asynchronously propagated to the replicas.</p> <p>A Redis cluster-mode enabled cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed. </p> <p>The node or shard limit can be increased to a maximum of 500 per cluster if the Redis engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html">Creating a Subnet Group</a>. For versions below 5.0.6, the limit is 250 per cluster.</p> <p>To request a limit increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Service Limits</a> and choose the limit type <b>Nodes per cluster per instance type</b>. </p> <p>When a Redis (cluster mode disabled) replication group has been successfully created, you can add one or more read replicas to it, up to a total of 5 read replicas. If you need to increase or decrease the number of node groups (console: shards), you can avail yourself of ElastiCache for Redis' scaling. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Scaling.html">Scaling ElastiCache for Redis Clusters</a> in the <i>ElastiCache User Guide</i>.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    postCreateReplicationGroup(req: operations.PostCreateReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateReplicationGroupResponse>;
    /**
     * postCreateSnapshot - <p>Creates a copy of an entire cluster or replication group at a specific moment in time.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    postCreateSnapshot(req: operations.PostCreateSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateSnapshotResponse>;
    /**
     * postCreateUser - For Redis engine version 6.x onwards: Creates a Redis user. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.
    **/
    postCreateUser(req: operations.PostCreateUserRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateUserResponse>;
    /**
     * postCreateUserGroup - For Redis engine version 6.x onwards: Creates a Redis user group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>
    **/
    postCreateUserGroup(req: operations.PostCreateUserGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateUserGroupResponse>;
    /**
     * postDecreaseNodeGroupsInGlobalReplicationGroup - Decreases the number of node groups in a Global datastore
    **/
    postDecreaseNodeGroupsInGlobalReplicationGroup(req: operations.PostDecreaseNodeGroupsInGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDecreaseNodeGroupsInGlobalReplicationGroupResponse>;
    /**
     * postDecreaseReplicaCount - Dynamically decreases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.
    **/
    postDecreaseReplicaCount(req: operations.PostDecreaseReplicaCountRequest, config?: AxiosRequestConfig): Promise<operations.PostDecreaseReplicaCountResponse>;
    /**
     * postDeleteCacheCluster - <p>Deletes a previously provisioned cluster. <code>DeleteCacheCluster</code> deletes all associated cache nodes, node endpoints and the cluster itself. When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the cluster; you cannot cancel or revert this operation.</p> <p>This operation is not valid for:</p> <ul> <li> <p>Redis (cluster mode enabled) clusters</p> </li> <li> <p>Redis (cluster mode disabled) clusters</p> </li> <li> <p>A cluster that is the last read replica of a replication group</p> </li> <li> <p>A cluster that is the primary node of a replication group</p> </li> <li> <p>A node group (shard) that has Multi-AZ mode enabled</p> </li> <li> <p>A cluster from a Redis (cluster mode enabled) replication group</p> </li> <li> <p>A cluster that is not in the <code>available</code> state</p> </li> </ul>
    **/
    postDeleteCacheCluster(req: operations.PostDeleteCacheClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteCacheClusterResponse>;
    /**
     * postDeleteCacheParameterGroup - Deletes the specified cache parameter group. You cannot delete a cache parameter group if it is associated with any cache clusters. You cannot delete the default cache parameter groups in your account.
    **/
    postDeleteCacheParameterGroup(req: operations.PostDeleteCacheParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteCacheParameterGroupResponse>;
    /**
     * postDeleteCacheSecurityGroup - <p>Deletes a cache security group.</p> <note> <p>You cannot delete a cache security group if it is associated with any clusters.</p> </note>
    **/
    postDeleteCacheSecurityGroup(req: operations.PostDeleteCacheSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteCacheSecurityGroupResponse>;
    /**
     * postDeleteCacheSubnetGroup - <p>Deletes a cache subnet group.</p> <note> <p>You cannot delete a default cache subnet group or one that is associated with any clusters.</p> </note>
    **/
    postDeleteCacheSubnetGroup(req: operations.PostDeleteCacheSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteCacheSubnetGroupResponse>;
    /**
     * postDeleteGlobalReplicationGroup - <p>Deleting a Global datastore is a two-step process: </p> <ul> <li> <p>First, you must <a>DisassociateGlobalReplicationGroup</a> to remove the secondary clusters in the Global datastore.</p> </li> <li> <p>Once the Global datastore contains only the primary cluster, you can use the <code>DeleteGlobalReplicationGroup</code> API to delete the Global datastore while retainining the primary cluster using <code>RetainPrimaryReplicationGroup=true</code>.</p> </li> </ul> <p>Since the Global Datastore has only a primary cluster, you can delete the Global Datastore while retaining the primary by setting <code>RetainPrimaryReplicationGroup=true</code>. The primary cluster is never deleted when deleting a Global Datastore. It can only be deleted when it no longer is associated with any Global Datastore.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p>
    **/
    postDeleteGlobalReplicationGroup(req: operations.PostDeleteGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteGlobalReplicationGroupResponse>;
    /**
     * postDeleteReplicationGroup - <p>Deletes an existing replication group. By default, this operation deletes the entire replication group, including the primary/primaries and all of the read replicas. If the replication group has only one primary, you can optionally delete only the read replicas, while retaining the primary by setting <code>RetainPrimaryCluster=true</code>.</p> <p>When you receive a successful response from this operation, Amazon ElastiCache immediately begins deleting the selected resources; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    postDeleteReplicationGroup(req: operations.PostDeleteReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteReplicationGroupResponse>;
    /**
     * postDeleteSnapshot - <p>Deletes an existing snapshot. When you receive a successful response from this operation, ElastiCache immediately begins deleting the snapshot; you cannot cancel or revert this operation.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    postDeleteSnapshot(req: operations.PostDeleteSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteSnapshotResponse>;
    /**
     * postDeleteUser - For Redis engine version 6.x onwards: Deletes a user. The user will be removed from all user groups and in turn removed from all replication groups. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.
    **/
    postDeleteUser(req: operations.PostDeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteUserResponse>;
    /**
     * postDeleteUserGroup - For Redis engine version 6.x onwards: Deletes a user group. The user group must first be disassociated from the replication group before it can be deleted. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.RBAC.html">Using Role Based Access Control (RBAC)</a>.
    **/
    postDeleteUserGroup(req: operations.PostDeleteUserGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteUserGroupResponse>;
    /**
     * postDescribeCacheClusters - <p>Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.</p> <p>By default, abbreviated information about the clusters is returned. You can use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the cache nodes associated with the clusters. These details include the DNS address and port for the cache node endpoint.</p> <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p> <p>If cache nodes are currently being added to the cluster, node endpoint information and creation time for the additional nodes are not displayed until they are completely provisioned. When the cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If cache nodes are currently being removed from the cluster, no endpoint information for the removed nodes is displayed.</p>
    **/
    postDescribeCacheClusters(req: operations.PostDescribeCacheClustersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeCacheClustersResponse>;
    /**
     * postDescribeCacheEngineVersions - Returns a list of the available cache engines and their versions.
    **/
    postDescribeCacheEngineVersions(req: operations.PostDescribeCacheEngineVersionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeCacheEngineVersionsResponse>;
    /**
     * postDescribeCacheParameterGroups - Returns a list of cache parameter group descriptions. If a cache parameter group name is specified, the list contains only the descriptions for that group.
    **/
    postDescribeCacheParameterGroups(req: operations.PostDescribeCacheParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeCacheParameterGroupsResponse>;
    /**
     * postDescribeCacheParameters - Returns the detailed parameter list for a particular cache parameter group.
    **/
    postDescribeCacheParameters(req: operations.PostDescribeCacheParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeCacheParametersResponse>;
    /**
     * postDescribeCacheSecurityGroups - Returns a list of cache security group descriptions. If a cache security group name is specified, the list contains only the description of that group. This applicable only when you have ElastiCache in Classic setup
    **/
    postDescribeCacheSecurityGroups(req: operations.PostDescribeCacheSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeCacheSecurityGroupsResponse>;
    /**
     * postDescribeCacheSubnetGroups - Returns a list of cache subnet group descriptions. If a subnet group name is specified, the list contains only the description of that group. This is applicable only when you have ElastiCache in VPC setup. All ElastiCache clusters now launch in VPC by default.
    **/
    postDescribeCacheSubnetGroups(req: operations.PostDescribeCacheSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeCacheSubnetGroupsResponse>;
    /**
     * postDescribeEngineDefaultParameters - Returns the default engine and system parameter information for the specified cache engine.
    **/
    postDescribeEngineDefaultParameters(req: operations.PostDescribeEngineDefaultParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEngineDefaultParametersResponse>;
    /**
     * postDescribeEvents - <p>Returns events related to clusters, cache security groups, and cache parameter groups. You can obtain events specific to a particular cluster, cache security group, or cache parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last hour are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
    **/
    postDescribeEvents(req: operations.PostDescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeEventsResponse>;
    /**
     * postDescribeGlobalReplicationGroups - Returns information about a particular global replication group. If no identifier is specified, returns information about all Global datastores.
    **/
    postDescribeGlobalReplicationGroups(req: operations.PostDescribeGlobalReplicationGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeGlobalReplicationGroupsResponse>;
    /**
     * postDescribeReplicationGroups - <p>Returns information about a particular replication group. If no identifier is specified, <code>DescribeReplicationGroups</code> returns information about all replication groups.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    postDescribeReplicationGroups(req: operations.PostDescribeReplicationGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeReplicationGroupsResponse>;
    /**
     * postDescribeReservedCacheNodes - Returns information about reserved cache nodes for this account, or about a specified reserved cache node.
    **/
    postDescribeReservedCacheNodes(req: operations.PostDescribeReservedCacheNodesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeReservedCacheNodesResponse>;
    /**
     * postDescribeReservedCacheNodesOfferings - Lists available reserved cache node offerings.
    **/
    postDescribeReservedCacheNodesOfferings(req: operations.PostDescribeReservedCacheNodesOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeReservedCacheNodesOfferingsResponse>;
    /**
     * postDescribeServiceUpdates - Returns details of the service updates
    **/
    postDescribeServiceUpdates(req: operations.PostDescribeServiceUpdatesRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeServiceUpdatesResponse>;
    /**
     * postDescribeSnapshots - <p>Returns information about cluster or replication group snapshots. By default, <code>DescribeSnapshots</code> lists all of your snapshots; it can optionally describe a single snapshot, or just the snapshots associated with a particular cache cluster.</p> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    postDescribeSnapshots(req: operations.PostDescribeSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeSnapshotsResponse>;
    /**
     * postDescribeUpdateActions - Returns details of the update actions
    **/
    postDescribeUpdateActions(req: operations.PostDescribeUpdateActionsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeUpdateActionsResponse>;
    /**
     * postDescribeUserGroups - Returns a list of user groups.
    **/
    postDescribeUserGroups(req: operations.PostDescribeUserGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeUserGroupsResponse>;
    /**
     * postDescribeUsers - Returns a list of users.
    **/
    postDescribeUsers(req: operations.PostDescribeUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostDescribeUsersResponse>;
    /**
     * postDisassociateGlobalReplicationGroup - Remove a secondary cluster from the Global datastore using the Global datastore name. The secondary cluster will no longer receive updates from the primary cluster, but will remain as a standalone cluster in that Amazon region.
    **/
    postDisassociateGlobalReplicationGroup(req: operations.PostDisassociateGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostDisassociateGlobalReplicationGroupResponse>;
    /**
     * postFailoverGlobalReplicationGroup - Used to failover the primary region to a selected secondary region. The selected secondary region will become primary, and all other clusters will become secondary.
    **/
    postFailoverGlobalReplicationGroup(req: operations.PostFailoverGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostFailoverGlobalReplicationGroupResponse>;
    /**
     * postIncreaseNodeGroupsInGlobalReplicationGroup - Increase the number of node groups in the Global datastore
    **/
    postIncreaseNodeGroupsInGlobalReplicationGroup(req: operations.PostIncreaseNodeGroupsInGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostIncreaseNodeGroupsInGlobalReplicationGroupResponse>;
    /**
     * postIncreaseReplicaCount - Dynamically increases the number of replicas in a Redis (cluster mode disabled) replication group or the number of replica nodes in one or more node groups (shards) of a Redis (cluster mode enabled) replication group. This operation is performed with no cluster down time.
    **/
    postIncreaseReplicaCount(req: operations.PostIncreaseReplicaCountRequest, config?: AxiosRequestConfig): Promise<operations.PostIncreaseReplicaCountResponse>;
    /**
     * postListAllowedNodeTypeModifications - <p>Lists all available node types that you can scale your Redis cluster's or replication group's current node type.</p> <p>When you use the <code>ModifyCacheCluster</code> or <code>ModifyReplicationGroup</code> operations to scale your cluster or replication group, the value of the <code>CacheNodeType</code> parameter must be one of the node types returned by this operation.</p>
    **/
    postListAllowedNodeTypeModifications(req: operations.PostListAllowedNodeTypeModificationsRequest, config?: AxiosRequestConfig): Promise<operations.PostListAllowedNodeTypeModificationsResponse>;
    /**
     * postListTagsForResource - <p>Lists all tags currently on a named resource.</p> <p> A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.</p> <p>If the cluster is not in the <i>available</i> state, <code>ListTagsForResource</code> returns an error.</p>
    **/
    postListTagsForResource(req: operations.PostListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostListTagsForResourceResponse>;
    /**
     * postModifyCacheCluster - Modifies the settings for a cluster. You can use this operation to change one or more cluster configuration parameters by specifying the parameters and the new values.
    **/
    postModifyCacheCluster(req: operations.PostModifyCacheClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyCacheClusterResponse>;
    /**
     * postModifyCacheParameterGroup - Modifies the parameters of a cache parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
    **/
    postModifyCacheParameterGroup(req: operations.PostModifyCacheParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyCacheParameterGroupResponse>;
    /**
     * postModifyCacheSubnetGroup - Modifies an existing cache subnet group.
    **/
    postModifyCacheSubnetGroup(req: operations.PostModifyCacheSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyCacheSubnetGroupResponse>;
    /**
     * postModifyGlobalReplicationGroup - Modifies the settings for a Global datastore.
    **/
    postModifyGlobalReplicationGroup(req: operations.PostModifyGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyGlobalReplicationGroupResponse>;
    /**
     * postModifyReplicationGroup - <p>Modifies the settings for a replication group.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/scaling-redis-cluster-mode-enabled.html">Scaling for Amazon ElastiCache for Redis (cluster mode enabled)</a> in the ElastiCache User Guide</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html">ModifyReplicationGroupShardConfiguration</a> in the ElastiCache API Reference</p> </li> </ul> <note> <p>This operation is valid for Redis only.</p> </note>
    **/
    postModifyReplicationGroup(req: operations.PostModifyReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyReplicationGroupResponse>;
    /**
     * postModifyReplicationGroupShardConfiguration - Modifies a replication group's shards (node groups) by allowing you to add shards, remove shards, or rebalance the keyspaces among existing shards.
    **/
    postModifyReplicationGroupShardConfiguration(req: operations.PostModifyReplicationGroupShardConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyReplicationGroupShardConfigurationResponse>;
    /**
     * postModifyUser - Changes user password(s) and/or access string.
    **/
    postModifyUser(req: operations.PostModifyUserRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyUserResponse>;
    /**
     * postModifyUserGroup - Changes the list of users that belong to the user group.
    **/
    postModifyUserGroup(req: operations.PostModifyUserGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostModifyUserGroupResponse>;
    /**
     * postPurchaseReservedCacheNodesOffering - Allows you to purchase a reserved cache node offering. Reserved nodes are not eligible for cancellation and are non-refundable. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Redis or <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Memcached.
    **/
    postPurchaseReservedCacheNodesOffering(req: operations.PostPurchaseReservedCacheNodesOfferingRequest, config?: AxiosRequestConfig): Promise<operations.PostPurchaseReservedCacheNodesOfferingResponse>;
    /**
     * postRebalanceSlotsInGlobalReplicationGroup - Redistribute slots to ensure uniform distribution across existing shards in the cluster.
    **/
    postRebalanceSlotsInGlobalReplicationGroup(req: operations.PostRebalanceSlotsInGlobalReplicationGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostRebalanceSlotsInGlobalReplicationGroupResponse>;
    /**
     * postRebootCacheCluster - <p>Reboots some, or all, of the cache nodes within a provisioned cluster. This operation applies any modified cache parameter groups to the cluster. The reboot operation takes place as soon as possible, and results in a momentary outage to the cluster. During the reboot, the cluster status is set to REBOOTING.</p> <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p> <p>When the reboot is complete, a cluster event is created.</p> <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters. Rebooting is not supported on Redis (cluster mode enabled) clusters.</p> <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
    **/
    postRebootCacheCluster(req: operations.PostRebootCacheClusterRequest, config?: AxiosRequestConfig): Promise<operations.PostRebootCacheClusterResponse>;
    /**
     * postRemoveTagsFromResource - Removes the tags identified by the <code>TagKeys</code> list from the named resource. A tag is a key-value pair where the key and value are case-sensitive. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. For more information, see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/IAM.ResourceLevelPermissions.html">Resource-level permissions</a>.
    **/
    postRemoveTagsFromResource(req: operations.PostRemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostRemoveTagsFromResourceResponse>;
    /**
     * postResetCacheParameterGroup - Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.
    **/
    postResetCacheParameterGroup(req: operations.PostResetCacheParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.PostResetCacheParameterGroupResponse>;
    /**
     * postRevokeCacheSecurityGroupIngress - Revokes ingress from a cache security group. Use this operation to disallow access from an Amazon EC2 security group that had been previously authorized.
    **/
    postRevokeCacheSecurityGroupIngress(req: operations.PostRevokeCacheSecurityGroupIngressRequest, config?: AxiosRequestConfig): Promise<operations.PostRevokeCacheSecurityGroupIngressResponse>;
    /**
     * postStartMigration - Start the migration of data.
    **/
    postStartMigration(req: operations.PostStartMigrationRequest, config?: AxiosRequestConfig): Promise<operations.PostStartMigrationResponse>;
    /**
     * postTestFailover - <p>Represents the input of a <code>TestFailover</code> operation which test automatic failover on a specified node group (called shard in the console) in a replication group (called cluster in the console).</p> <p class="title"> <b>Note the following</b> </p> <ul> <li> <p>A customer can use this operation to test automatic failover on up to 5 shards (called node groups in the ElastiCache API and Amazon CLI) in any rolling 24-hour period.</p> </li> <li> <p>If calling this operation on shards in different clusters (called replication groups in the API and CLI), the calls can be made concurrently.</p> <p> </p> </li> <li> <p>If calling this operation multiple times on different shards in the same Redis (cluster mode enabled) replication group, the first node replacement must complete before a subsequent call can be made.</p> </li> <li> <p>To determine whether the node replacement is complete you can check Events using the Amazon ElastiCache console, the Amazon CLI, or the ElastiCache API. Look for the following automatic failover related events, listed here in order of occurrance:</p> <ol> <li> <p>Replication group message: <code>Test Failover API called for node group &lt;node-group-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Replication group message: <code>Failover from primary node &lt;primary-node-id&gt; to replica node &lt;node-id&gt; completed</code> </p> </li> <li> <p>Cache cluster message: <code>Recovering cache nodes &lt;node-id&gt;</code> </p> </li> <li> <p>Cache cluster message: <code>Finished recovery for cache nodes &lt;node-id&gt;</code> </p> </li> </ol> <p>For more information see:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/ECEvents.Viewing.html">Viewing ElastiCache Events</a> in the <i>ElastiCache User Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> in the ElastiCache API Reference</p> </li> </ul> </li> </ul> <p>Also see, <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html#auto-failover-test">Testing Multi-AZ </a> in the <i>ElastiCache User Guide</i>.</p>
    **/
    postTestFailover(req: operations.PostTestFailoverRequest, config?: AxiosRequestConfig): Promise<operations.PostTestFailoverResponse>;
}
export {};
