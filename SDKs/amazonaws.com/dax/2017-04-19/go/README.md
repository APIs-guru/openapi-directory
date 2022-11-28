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
    
    req := operations.CreateClusterRequest{
        Headers: operations.CreateClusterHeaders{
            XAmzAlgorithm: "incidunt",
            XAmzContentSha256: "inventore",
            XAmzCredential: "voluptatem",
            XAmzDate: "voluptates",
            XAmzSecurityToken: "quisquam",
            XAmzSignature: "architecto",
            XAmzSignedHeaders: "sunt",
            XAmzTarget: "AmazonDAXV3.CreateCluster",
        },
        Request: shared.CreateClusterRequest{
            AvailabilityZones: []string{
                "ut",
                "et",
            },
            ClusterEndpointEncryptionType: "TLS",
            ClusterName: "et",
            Description: "ipsam",
            IamRoleArn: "magni",
            NodeType: "et",
            NotificationTopicArn: "inventore",
            ParameterGroupName: "impedit",
            PreferredMaintenanceWindow: "molestiae",
            ReplicationFactor: 8112620927975136660,
            SseSpecification: &shared.SseSpecification{
                Enabled: true,
            },
            SecurityGroupIds: []string{
                "repellendus",
            },
            SubnetGroupName: "molestias",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quia",
                    Value: "ipsa",
                },
            },
        },
    }
    
    res, err := s.Sdk.CreateCluster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateClusterResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateCluster` - Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.
* `CreateParameterGroup` - Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.
* `CreateSubnetGroup` - Creates a new subnet group.
* `DecreaseReplicationFactor` - <p>Removes one or more nodes from a DAX cluster.</p> <note> <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p> </note>
* `DeleteCluster` - Deletes a previously provisioned DAX cluster. <i>DeleteCluster</i> deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.
* `DeleteParameterGroup` - Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.
* `DeleteSubnetGroup` - <p>Deletes a subnet group.</p> <note> <p>You cannot delete a subnet group if it is associated with any DAX clusters.</p> </note>
* `DescribeClusters` - <p>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied.</p> <p>If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the DELETING state, only cluster level information will be displayed.</p> <p>If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</p>
* `DescribeDefaultParameters` - Returns the default system parameter information for the DAX caching software.
* `DescribeEvents` - <p>Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last 24 hours are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
* `DescribeParameterGroups` - Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.
* `DescribeParameters` - Returns the detailed parameter list for a particular parameter group.
* `DescribeSubnetGroups` - Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.
* `IncreaseReplicationFactor` - Adds one or more nodes to a DAX cluster.
* `ListTags` - List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to 10 times per second, per account.
* `RebootNode` - <p>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.</p> <note> <p> <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache. </p> </note>
* `TagResource` - Associates a set of tags with a DAX resource. You can call <code>TagResource</code> up to 5 times per second, per account. 
* `UntagResource` - Removes the association of tags from a DAX resource. You can call <code>UntagResource</code> up to 5 times per second, per account. 
* `UpdateCluster` - Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.
* `UpdateParameterGroup` - Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* `UpdateSubnetGroup` - Modifies an existing subnet group.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
