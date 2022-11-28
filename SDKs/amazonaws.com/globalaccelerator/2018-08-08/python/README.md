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
    
req = operations.AddCustomRoutingEndpointsRequest(
    headers=operations.AddCustomRoutingEndpointsHeaders(
        x_amz_algorithm="dignissimos",
        x_amz_content_sha256="voluptates",
        x_amz_credential="officia",
        x_amz_date="dolore",
        x_amz_security_token="hic",
        x_amz_signature="recusandae",
        x_amz_signed_headers="iste",
        x_amz_target="GlobalAccelerator_V20180706.AddCustomRoutingEndpoints",
    ),
    request=shared.AddCustomRoutingEndpointsRequest(
        endpoint_configurations=[
            shared.CustomRoutingEndpointConfiguration(
                endpoint_id="alias",
            ),
            shared.CustomRoutingEndpointConfiguration(
                endpoint_id="eum",
            ),
        ],
        endpoint_group_arn="quia",
    ),
)
    
res = s.sdk.add_custom_routing_endpoints(req)

if res.add_custom_routing_endpoints_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `add_custom_routing_endpoints` - <p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p> <p>The listener port range must be large enough to support the number of IP addresses that can be specified in your subnet. The number of ports required is: subnet size times the number of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener port range of at least 255 ports. </p> <p>Note: You must have enough remaining listener ports available to map to the subnet ports, or the call will fail with a LimitExceededException.</p> <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p>
* `advertise_byoip_cidr` - <p>Advertises an IPv4 address range that is provisioned for use with your AWS resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to AWS because of propagation delays. </p> <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html"> WithdrawByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
* `allow_custom_routing_traffic` - <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
* `create_accelerator` - <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the US West (Oregon) Region to create or update accelerators.</p> </important>
* `create_custom_routing_accelerator` - <p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p> <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the US West (Oregon) Region to create or update accelerators.</p> </important>
* `create_custom_routing_endpoint_group` - Create an endpoint group for the specified listener for a custom routing accelerator. An endpoint group is a collection of endpoints in one AWS Region. 
* `create_custom_routing_listener` - Create a listener to process inbound connections from clients to a custom routing accelerator. Connections arrive to assigned static IP addresses on the port range that you specify. 
* `create_endpoint_group` - Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one AWS Region. A resource must be valid and active when you add it as an endpoint.
* `create_listener` - Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify. 
* `delete_accelerator` - <p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Authentication and Access Control</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p> </important>
* `delete_custom_routing_accelerator` - <p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Authentication and Access Control</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p> </important>
* `delete_custom_routing_endpoint_group` - Delete an endpoint group from a listener for a custom routing accelerator.
* `delete_custom_routing_listener` - Delete a listener for a custom routing accelerator.
* `delete_endpoint_group` - Delete an endpoint group from a listener.
* `delete_listener` - Delete a listener from an accelerator.
* `deny_custom_routing_traffic` - <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a specified list of destination IP addresses and ports. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
* `deprovision_byoip_cidr` - <p>Releases the specified address range that you provisioned to use with your AWS resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p> <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have any accelerators that are using static IP addresses allocated from its address range. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
* `describe_accelerator` - Describe an accelerator. 
* `describe_accelerator_attributes` - Describe the attributes of an accelerator. 
* `describe_custom_routing_accelerator` - Describe a custom routing accelerator. 
* `describe_custom_routing_accelerator_attributes` - Describe the attributes of a custom routing accelerator. 
* `describe_custom_routing_endpoint_group` - Describe an endpoint group for a custom routing accelerator. 
* `describe_custom_routing_listener` - The description of a listener for a custom routing accelerator.
* `describe_endpoint_group` - Describe an endpoint group. 
* `describe_listener` - Describe a listener. 
* `list_accelerators` - List the accelerators for an AWS account. 
* `list_byoip_cidrs` - Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including the current state and a history of state changes.
* `list_custom_routing_accelerators` - List the custom routing accelerators for an AWS account. 
* `list_custom_routing_endpoint_groups` - List the endpoint groups that are associated with a listener for a custom routing accelerator. 
* `list_custom_routing_listeners` - List the listeners for a custom routing accelerator. 
* `list_custom_routing_port_mappings` - <p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator. For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p> <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p> <p>The mappings also include a flag for each destination denoting which destination IP addresses and ports are allowed or denied traffic.</p>
* `list_custom_routing_port_mappings_by_destination` - List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that span multiple custom routing accelerators in your account, or for scenarios where you only want to list the port mappings for a specific destination instance.
* `list_endpoint_groups` - List the endpoint groups that are associated with a listener. 
* `list_listeners` - List the listeners for an accelerator. 
* `list_tags_for_resource` - <p>List all tags for an accelerator. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>. </p>
* `provision_byoip_cidr` - <p>Provisions an IP address range to use with your AWS resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html"> AdvertiseByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
* `remove_custom_routing_endpoints` - Remove endpoints from a custom routing accelerator.
* `tag_resource` - <p>Add tags to an accelerator resource. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>. </p>
* `untag_resource` - <p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
* `update_accelerator` - <p>Update an accelerator. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the US West (Oregon) Region to create or update accelerators.</p> </important>
* `update_accelerator_attributes` - Update the attributes for an accelerator. 
* `update_custom_routing_accelerator` - Update a custom routing accelerator. 
* `update_custom_routing_accelerator_attributes` - Update the attributes for a custom routing accelerator. 
* `update_custom_routing_listener` - Update a listener for a custom routing accelerator. 
* `update_endpoint_group` - Update an endpoint group. A resource must be valid and active when you add it as an endpoint.
* `update_listener` - Update a listener. 
* `withdraw_byoip_cidr` - <p>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to AWS because of propagation delays.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
