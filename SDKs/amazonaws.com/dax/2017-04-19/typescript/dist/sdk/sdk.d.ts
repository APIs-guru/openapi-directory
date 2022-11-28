import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://dax.{region}.amazonaws.com", "https://dax.{region}.amazonaws.com", "http://dax.{region}.amazonaws.com.cn", "https://dax.{region}.amazonaws.com.cn"];
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
     * createCluster - Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.
    **/
    createCluster(req: operations.CreateClusterRequest, config?: AxiosRequestConfig): Promise<operations.CreateClusterResponse>;
    /**
     * createParameterGroup - Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.
    **/
    createParameterGroup(req: operations.CreateParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateParameterGroupResponse>;
    /**
     * createSubnetGroup - Creates a new subnet group.
    **/
    createSubnetGroup(req: operations.CreateSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubnetGroupResponse>;
    /**
     * decreaseReplicationFactor - <p>Removes one or more nodes from a DAX cluster.</p> <note> <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p> </note>
    **/
    decreaseReplicationFactor(req: operations.DecreaseReplicationFactorRequest, config?: AxiosRequestConfig): Promise<operations.DecreaseReplicationFactorResponse>;
    /**
     * deleteCluster - Deletes a previously provisioned DAX cluster. <i>DeleteCluster</i> deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.
    **/
    deleteCluster(req: operations.DeleteClusterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClusterResponse>;
    /**
     * deleteParameterGroup - Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.
    **/
    deleteParameterGroup(req: operations.DeleteParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteParameterGroupResponse>;
    /**
     * deleteSubnetGroup - <p>Deletes a subnet group.</p> <note> <p>You cannot delete a subnet group if it is associated with any DAX clusters.</p> </note>
    **/
    deleteSubnetGroup(req: operations.DeleteSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubnetGroupResponse>;
    /**
     * describeClusters - <p>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied.</p> <p>If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the DELETING state, only cluster level information will be displayed.</p> <p>If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</p>
    **/
    describeClusters(req: operations.DescribeClustersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeClustersResponse>;
    /**
     * describeDefaultParameters - Returns the default system parameter information for the DAX caching software.
    **/
    describeDefaultParameters(req: operations.DescribeDefaultParametersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDefaultParametersResponse>;
    /**
     * describeEvents - <p>Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last 24 hours are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
    **/
    describeEvents(req: operations.DescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEventsResponse>;
    /**
     * describeParameterGroups - Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.
    **/
    describeParameterGroups(req: operations.DescribeParameterGroupsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeParameterGroupsResponse>;
    /**
     * describeParameters - Returns the detailed parameter list for a particular parameter group.
    **/
    describeParameters(req: operations.DescribeParametersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeParametersResponse>;
    /**
     * describeSubnetGroups - Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.
    **/
    describeSubnetGroups(req: operations.DescribeSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSubnetGroupsResponse>;
    /**
     * increaseReplicationFactor - Adds one or more nodes to a DAX cluster.
    **/
    increaseReplicationFactor(req: operations.IncreaseReplicationFactorRequest, config?: AxiosRequestConfig): Promise<operations.IncreaseReplicationFactorResponse>;
    /**
     * listTags - List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to 10 times per second, per account.
    **/
    listTags(req: operations.ListTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsResponse>;
    /**
     * rebootNode - <p>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.</p> <note> <p> <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache. </p> </note>
    **/
    rebootNode(req: operations.RebootNodeRequest, config?: AxiosRequestConfig): Promise<operations.RebootNodeResponse>;
    /**
     * tagResource - Associates a set of tags with a DAX resource. You can call <code>TagResource</code> up to 5 times per second, per account.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes the association of tags from a DAX resource. You can call <code>UntagResource</code> up to 5 times per second, per account.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateCluster - Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.
    **/
    updateCluster(req: operations.UpdateClusterRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClusterResponse>;
    /**
     * updateParameterGroup - Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
    **/
    updateParameterGroup(req: operations.UpdateParameterGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateParameterGroupResponse>;
    /**
     * updateSubnetGroup - Modifies an existing subnet group.
    **/
    updateSubnetGroup(req: operations.UpdateSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubnetGroupResponse>;
}
export {};
