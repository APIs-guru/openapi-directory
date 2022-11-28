import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://globalaccelerator.{region}.amazonaws.com", "https://globalaccelerator.{region}.amazonaws.com", "http://globalaccelerator.{region}.amazonaws.com.cn", "https://globalaccelerator.{region}.amazonaws.com.cn"];
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
     * addCustomRoutingEndpoints - <p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p> <p>The listener port range must be large enough to support the number of IP addresses that can be specified in your subnet. The number of ports required is: subnet size times the number of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener port range of at least 255 ports. </p> <p>Note: You must have enough remaining listener ports available to map to the subnet ports, or the call will fail with a LimitExceededException.</p> <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p>
    **/
    addCustomRoutingEndpoints(req: operations.AddCustomRoutingEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.AddCustomRoutingEndpointsResponse>;
    /**
     * advertiseByoipCidr - <p>Advertises an IPv4 address range that is provisioned for use with your AWS resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to AWS because of propagation delays. </p> <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html"> WithdrawByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
    **/
    advertiseByoipCidr(req: operations.AdvertiseByoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.AdvertiseByoipCidrResponse>;
    /**
     * allowCustomRoutingTraffic - <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
    **/
    allowCustomRoutingTraffic(req: operations.AllowCustomRoutingTrafficRequest, config?: AxiosRequestConfig): Promise<operations.AllowCustomRoutingTrafficResponse>;
    /**
     * createAccelerator - <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the US West (Oregon) Region to create or update accelerators.</p> </important>
    **/
    createAccelerator(req: operations.CreateAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.CreateAcceleratorResponse>;
    /**
     * createCustomRoutingAccelerator - <p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p> <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the US West (Oregon) Region to create or update accelerators.</p> </important>
    **/
    createCustomRoutingAccelerator(req: operations.CreateCustomRoutingAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomRoutingAcceleratorResponse>;
    /**
     * createCustomRoutingEndpointGroup - Create an endpoint group for the specified listener for a custom routing accelerator. An endpoint group is a collection of endpoints in one AWS Region.
    **/
    createCustomRoutingEndpointGroup(req: operations.CreateCustomRoutingEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomRoutingEndpointGroupResponse>;
    /**
     * createCustomRoutingListener - Create a listener to process inbound connections from clients to a custom routing accelerator. Connections arrive to assigned static IP addresses on the port range that you specify.
    **/
    createCustomRoutingListener(req: operations.CreateCustomRoutingListenerRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomRoutingListenerResponse>;
    /**
     * createEndpointGroup - Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one AWS Region. A resource must be valid and active when you add it as an endpoint.
    **/
    createEndpointGroup(req: operations.CreateEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateEndpointGroupResponse>;
    /**
     * createListener - Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify.
    **/
    createListener(req: operations.CreateListenerRequest, config?: AxiosRequestConfig): Promise<operations.CreateListenerResponse>;
    /**
     * deleteAccelerator - <p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Authentication and Access Control</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p> </important>
    **/
    deleteAccelerator(req: operations.DeleteAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAcceleratorResponse>;
    /**
     * deleteCustomRoutingAccelerator - <p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Authentication and Access Control</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p> </important>
    **/
    deleteCustomRoutingAccelerator(req: operations.DeleteCustomRoutingAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomRoutingAcceleratorResponse>;
    /**
     * deleteCustomRoutingEndpointGroup - Delete an endpoint group from a listener for a custom routing accelerator.
    **/
    deleteCustomRoutingEndpointGroup(req: operations.DeleteCustomRoutingEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomRoutingEndpointGroupResponse>;
    /**
     * deleteCustomRoutingListener - Delete a listener for a custom routing accelerator.
    **/
    deleteCustomRoutingListener(req: operations.DeleteCustomRoutingListenerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomRoutingListenerResponse>;
    /**
     * deleteEndpointGroup - Delete an endpoint group from a listener.
    **/
    deleteEndpointGroup(req: operations.DeleteEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEndpointGroupResponse>;
    /**
     * deleteListener - Delete a listener from an accelerator.
    **/
    deleteListener(req: operations.DeleteListenerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteListenerResponse>;
    /**
     * denyCustomRoutingTraffic - <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a specified list of destination IP addresses and ports. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
    **/
    denyCustomRoutingTraffic(req: operations.DenyCustomRoutingTrafficRequest, config?: AxiosRequestConfig): Promise<operations.DenyCustomRoutingTrafficResponse>;
    /**
     * deprovisionByoipCidr - <p>Releases the specified address range that you provisioned to use with your AWS resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p> <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have any accelerators that are using static IP addresses allocated from its address range. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
    **/
    deprovisionByoipCidr(req: operations.DeprovisionByoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.DeprovisionByoipCidrResponse>;
    /**
     * describeAccelerator - Describe an accelerator.
    **/
    describeAccelerator(req: operations.DescribeAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAcceleratorResponse>;
    /**
     * describeAcceleratorAttributes - Describe the attributes of an accelerator.
    **/
    describeAcceleratorAttributes(req: operations.DescribeAcceleratorAttributesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAcceleratorAttributesResponse>;
    /**
     * describeCustomRoutingAccelerator - Describe a custom routing accelerator.
    **/
    describeCustomRoutingAccelerator(req: operations.DescribeCustomRoutingAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCustomRoutingAcceleratorResponse>;
    /**
     * describeCustomRoutingAcceleratorAttributes - Describe the attributes of a custom routing accelerator.
    **/
    describeCustomRoutingAcceleratorAttributes(req: operations.DescribeCustomRoutingAcceleratorAttributesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCustomRoutingAcceleratorAttributesResponse>;
    /**
     * describeCustomRoutingEndpointGroup - Describe an endpoint group for a custom routing accelerator.
    **/
    describeCustomRoutingEndpointGroup(req: operations.DescribeCustomRoutingEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCustomRoutingEndpointGroupResponse>;
    /**
     * describeCustomRoutingListener - The description of a listener for a custom routing accelerator.
    **/
    describeCustomRoutingListener(req: operations.DescribeCustomRoutingListenerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCustomRoutingListenerResponse>;
    /**
     * describeEndpointGroup - Describe an endpoint group.
    **/
    describeEndpointGroup(req: operations.DescribeEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEndpointGroupResponse>;
    /**
     * describeListener - Describe a listener.
    **/
    describeListener(req: operations.DescribeListenerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeListenerResponse>;
    /**
     * listAccelerators - List the accelerators for an AWS account.
    **/
    listAccelerators(req: operations.ListAcceleratorsRequest, config?: AxiosRequestConfig): Promise<operations.ListAcceleratorsResponse>;
    /**
     * listByoipCidrs - Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including the current state and a history of state changes.
    **/
    listByoipCidrs(req: operations.ListByoipCidrsRequest, config?: AxiosRequestConfig): Promise<operations.ListByoipCidrsResponse>;
    /**
     * listCustomRoutingAccelerators - List the custom routing accelerators for an AWS account.
    **/
    listCustomRoutingAccelerators(req: operations.ListCustomRoutingAcceleratorsRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomRoutingAcceleratorsResponse>;
    /**
     * listCustomRoutingEndpointGroups - List the endpoint groups that are associated with a listener for a custom routing accelerator.
    **/
    listCustomRoutingEndpointGroups(req: operations.ListCustomRoutingEndpointGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomRoutingEndpointGroupsResponse>;
    /**
     * listCustomRoutingListeners - List the listeners for a custom routing accelerator.
    **/
    listCustomRoutingListeners(req: operations.ListCustomRoutingListenersRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomRoutingListenersResponse>;
    /**
     * listCustomRoutingPortMappings - <p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator. For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p> <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p> <p>The mappings also include a flag for each destination denoting which destination IP addresses and ports are allowed or denied traffic.</p>
    **/
    listCustomRoutingPortMappings(req: operations.ListCustomRoutingPortMappingsRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomRoutingPortMappingsResponse>;
    /**
     * listCustomRoutingPortMappingsByDestination - List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that span multiple custom routing accelerators in your account, or for scenarios where you only want to list the port mappings for a specific destination instance.
    **/
    listCustomRoutingPortMappingsByDestination(req: operations.ListCustomRoutingPortMappingsByDestinationRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomRoutingPortMappingsByDestinationResponse>;
    /**
     * listEndpointGroups - List the endpoint groups that are associated with a listener.
    **/
    listEndpointGroups(req: operations.ListEndpointGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListEndpointGroupsResponse>;
    /**
     * listListeners - List the listeners for an accelerator.
    **/
    listListeners(req: operations.ListListenersRequest, config?: AxiosRequestConfig): Promise<operations.ListListenersResponse>;
    /**
     * listTagsForResource - <p>List all tags for an accelerator. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>. </p>
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * provisionByoipCidr - <p>Provisions an IP address range to use with your AWS resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html"> AdvertiseByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
    **/
    provisionByoipCidr(req: operations.ProvisionByoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.ProvisionByoipCidrResponse>;
    /**
     * removeCustomRoutingEndpoints - Remove endpoints from a custom routing accelerator.
    **/
    removeCustomRoutingEndpoints(req: operations.RemoveCustomRoutingEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.RemoveCustomRoutingEndpointsResponse>;
    /**
     * tagResource - <p>Add tags to an accelerator resource. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>. </p>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - <p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateAccelerator - <p>Update an accelerator. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the US West (Oregon) Region to create or update accelerators.</p> </important>
    **/
    updateAccelerator(req: operations.UpdateAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAcceleratorResponse>;
    /**
     * updateAcceleratorAttributes - Update the attributes for an accelerator.
    **/
    updateAcceleratorAttributes(req: operations.UpdateAcceleratorAttributesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAcceleratorAttributesResponse>;
    /**
     * updateCustomRoutingAccelerator - Update a custom routing accelerator.
    **/
    updateCustomRoutingAccelerator(req: operations.UpdateCustomRoutingAcceleratorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomRoutingAcceleratorResponse>;
    /**
     * updateCustomRoutingAcceleratorAttributes - Update the attributes for a custom routing accelerator.
    **/
    updateCustomRoutingAcceleratorAttributes(req: operations.UpdateCustomRoutingAcceleratorAttributesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomRoutingAcceleratorAttributesResponse>;
    /**
     * updateCustomRoutingListener - Update a listener for a custom routing accelerator.
    **/
    updateCustomRoutingListener(req: operations.UpdateCustomRoutingListenerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomRoutingListenerResponse>;
    /**
     * updateEndpointGroup - Update an endpoint group. A resource must be valid and active when you add it as an endpoint.
    **/
    updateEndpointGroup(req: operations.UpdateEndpointGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEndpointGroupResponse>;
    /**
     * updateListener - Update a listener.
    **/
    updateListener(req: operations.UpdateListenerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateListenerResponse>;
    /**
     * withdrawByoipCidr - <p>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to AWS because of propagation delays.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
    **/
    withdrawByoipCidr(req: operations.WithdrawByoipCidrRequest, config?: AxiosRequestConfig): Promise<operations.WithdrawByoipCidrResponse>;
}
export {};
