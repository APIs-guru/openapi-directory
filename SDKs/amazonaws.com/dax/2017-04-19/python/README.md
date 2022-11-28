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
    
req = operations.CreateClusterRequest(
    headers=operations.CreateClusterHeaders(
        x_amz_algorithm="incidunt",
        x_amz_content_sha256="inventore",
        x_amz_credential="voluptatem",
        x_amz_date="voluptates",
        x_amz_security_token="quisquam",
        x_amz_signature="architecto",
        x_amz_signed_headers="sunt",
        x_amz_target="AmazonDAXV3.CreateCluster",
    ),
    request=shared.CreateClusterRequest(
        availability_zones=[
            "ut",
            "et",
        ],
        cluster_endpoint_encryption_type="TLS",
        cluster_name="et",
        description="ipsam",
        iam_role_arn="magni",
        node_type="et",
        notification_topic_arn="inventore",
        parameter_group_name="impedit",
        preferred_maintenance_window="molestiae",
        replication_factor=8112620927975136660,
        sse_specification=shared.SseSpecification(
            enabled=True,
        ),
        security_group_ids=[
            "repellendus",
        ],
        subnet_group_name="molestias",
        tags=[
            shared.Tag(
                key="quia",
                value="ipsa",
            ),
        ],
    ),
)
    
res = s.sdk.create_cluster(req)

if res.create_cluster_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_cluster` - Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.
* `create_parameter_group` - Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.
* `create_subnet_group` - Creates a new subnet group.
* `decrease_replication_factor` - <p>Removes one or more nodes from a DAX cluster.</p> <note> <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p> </note>
* `delete_cluster` - Deletes a previously provisioned DAX cluster. <i>DeleteCluster</i> deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.
* `delete_parameter_group` - Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.
* `delete_subnet_group` - <p>Deletes a subnet group.</p> <note> <p>You cannot delete a subnet group if it is associated with any DAX clusters.</p> </note>
* `describe_clusters` - <p>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied.</p> <p>If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the DELETING state, only cluster level information will be displayed.</p> <p>If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</p>
* `describe_default_parameters` - Returns the default system parameter information for the DAX caching software.
* `describe_events` - <p>Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last 24 hours are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
* `describe_parameter_groups` - Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.
* `describe_parameters` - Returns the detailed parameter list for a particular parameter group.
* `describe_subnet_groups` - Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.
* `increase_replication_factor` - Adds one or more nodes to a DAX cluster.
* `list_tags` - List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to 10 times per second, per account.
* `reboot_node` - <p>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.</p> <note> <p> <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache. </p> </note>
* `tag_resource` - Associates a set of tags with a DAX resource. You can call <code>TagResource</code> up to 5 times per second, per account. 
* `untag_resource` - Removes the association of tags from a DAX resource. You can call <code>UntagResource</code> up to 5 times per second, per account. 
* `update_cluster` - Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.
* `update_parameter_group` - Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* `update_subnet_group` - Modifies an existing subnet group.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
