# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { CreateClusterRequest, CreateClusterResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateClusterRequest = {
  headers: {
    xAmzAlgorithm: "incidunt",
    xAmzContentSha256: "inventore",
    xAmzCredential: "voluptatem",
    xAmzDate: "voluptates",
    xAmzSecurityToken: "quisquam",
    xAmzSignature: "architecto",
    xAmzSignedHeaders: "sunt",
    xAmzTarget: "AmazonDAXV3.CreateCluster",
  },
  request: {
    availabilityZones: [
      "ut",
      "et",
    ],
    clusterEndpointEncryptionType: "TLS",
    clusterName: "et",
    description: "ipsam",
    iamRoleArn: "magni",
    nodeType: "et",
    notificationTopicArn: "inventore",
    parameterGroupName: "impedit",
    preferredMaintenanceWindow: "molestiae",
    replicationFactor: 8112620927975136660,
    sseSpecification: {
      enabled: true,
    },
    securityGroupIds: [
      "repellendus",
    ],
    subnetGroupName: "molestias",
    tags: [
      {
        key: "quia",
        value: "ipsa",
      },
    ],
  },
};

sdk.sdk.createCluster(req).then((res: CreateClusterResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createCluster` - Creates a DAX cluster. All nodes in the cluster run the same DAX caching software.
* `createParameterGroup` - Creates a new parameter group. A parameter group is a collection of parameters that you apply to all of the nodes in a DAX cluster.
* `createSubnetGroup` - Creates a new subnet group.
* `decreaseReplicationFactor` - <p>Removes one or more nodes from a DAX cluster.</p> <note> <p>You cannot use <code>DecreaseReplicationFactor</code> to remove the last node in a DAX cluster. If you need to do this, use <code>DeleteCluster</code> instead.</p> </note>
* `deleteCluster` - Deletes a previously provisioned DAX cluster. <i>DeleteCluster</i> deletes all associated nodes, node endpoints and the DAX cluster itself. When you receive a successful response from this action, DAX immediately begins deleting the cluster; you cannot cancel or revert this action.
* `deleteParameterGroup` - Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any DAX clusters.
* `deleteSubnetGroup` - <p>Deletes a subnet group.</p> <note> <p>You cannot delete a subnet group if it is associated with any DAX clusters.</p> </note>
* `describeClusters` - <p>Returns information about all provisioned DAX clusters if no cluster identifier is specified, or about a specific DAX cluster if a cluster identifier is supplied.</p> <p>If the cluster is in the CREATING state, only cluster level information will be displayed until all of the nodes are successfully provisioned.</p> <p>If the cluster is in the DELETING state, only cluster level information will be displayed.</p> <p>If nodes are currently being added to the DAX cluster, node endpoint information and creation time for the additional nodes will not be displayed until they are completely provisioned. When the DAX cluster state is <i>available</i>, the cluster is ready for use.</p> <p>If nodes are currently being removed from the DAX cluster, no endpoint information for the removed nodes is displayed.</p>
* `describeDefaultParameters` - Returns the default system parameter information for the DAX caching software.
* `describeEvents` - <p>Returns events related to DAX clusters and parameter groups. You can obtain events specific to a particular DAX cluster or parameter group by providing the name as a parameter.</p> <p>By default, only the events occurring within the last 24 hours are returned; however, you can retrieve up to 14 days' worth of events if necessary.</p>
* `describeParameterGroups` - Returns a list of parameter group descriptions. If a parameter group name is specified, the list will contain only the descriptions for that group.
* `describeParameters` - Returns the detailed parameter list for a particular parameter group.
* `describeSubnetGroups` - Returns a list of subnet group descriptions. If a subnet group name is specified, the list will contain only the description of that group.
* `increaseReplicationFactor` - Adds one or more nodes to a DAX cluster.
* `listTags` - List all of the tags for a DAX cluster. You can call <code>ListTags</code> up to 10 times per second, per account.
* `rebootNode` - <p>Reboots a single node of a DAX cluster. The reboot action takes place as soon as possible. During the reboot, the node status is set to REBOOTING.</p> <note> <p> <code>RebootNode</code> restarts the DAX engine process and does not remove the contents of the cache. </p> </note>
* `tagResource` - Associates a set of tags with a DAX resource. You can call <code>TagResource</code> up to 5 times per second, per account. 
* `untagResource` - Removes the association of tags from a DAX resource. You can call <code>UntagResource</code> up to 5 times per second, per account. 
* `updateCluster` - Modifies the settings for a DAX cluster. You can use this action to change one or more cluster configuration parameters by specifying the parameters and the new values.
* `updateParameterGroup` - Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
* `updateSubnetGroup` - Modifies an existing subnet group.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
