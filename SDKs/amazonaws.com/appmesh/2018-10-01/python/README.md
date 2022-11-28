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
    
req = operations.CreateMeshRequest(
    headers=operations.CreateMeshHeaders(
        x_amz_algorithm="quas",
        x_amz_content_sha256="facere",
        x_amz_credential="eveniet",
        x_amz_date="dolores",
        x_amz_security_token="fuga",
        x_amz_signature="error",
        x_amz_signed_headers="autem",
    ),
    request=operations.CreateMeshRequestBody(
        client_token="eaque",
        mesh_name="omnis",
    ),
)
    
res = s.sdk.create_mesh(req)

if res.create_mesh_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_mesh` - <p>Creates a new service mesh. A service mesh is a logical boundary for network traffic
         between the services that reside within it.</p>
         <p>After you create your service mesh, you can create virtual nodes, virtual routers, and
         routes to distribute traffic between the applications in your mesh.</p>
* `create_route` - <p>Creates a new route that is associated with a virtual router.</p>
         <p>You can use the <code>prefix</code> parameter in your route specification for path-based
         routing of requests. For example, if your virtual router service name is
            <code>my-service.local</code>, and you want the route to match requests to
            <code>my-service.local/metrics</code>, then your prefix should be
         <code>/metrics</code>.</p>
         <p>If your route matches a request, you can distribute traffic to one or more target
         virtual nodes with relative weighting.</p>
* `create_virtual_node` - <p>Creates a new virtual node within a service mesh.</p>
         <p>A virtual node acts as logical pointer to a particular task group, such as an Amazon ECS
         service or a Kubernetes deployment. When you create a virtual node, you must specify the
         DNS service discovery name for your task group.</p>
         <p>Any inbound traffic that your virtual node expects should be specified as a
            <code>listener</code>. Any outbound traffic that your virtual node expects to reach
         should be specified as a <code>backend</code>.</p>
         <p>The response metadata for your new virtual node contains the <code>arn</code> that is
         associated with the virtual node. Set this value (either the full ARN or the truncated
         resource name, for example, <code>mesh/default/virtualNode/simpleapp</code>, as the
            <code>APPMESH_VIRTUAL_NODE_NAME</code> environment variable for your task group's Envoy
         proxy container in your task definition or pod spec. This is then mapped to the
            <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p>
         <note>
            <p>If you require your Envoy stats or tracing to use a different name, you can override
            the <code>node.cluster</code> value that is set by
               <code>APPMESH_VIRTUAL_NODE_NAME</code> with the
               <code>APPMESH_VIRTUAL_NODE_CLUSTER</code> environment variable.</p>
         </note>
* `create_virtual_router` - <p>Creates a new virtual router within a service mesh.</p>
         <p>Virtual routers handle traffic for one or more service names within your mesh. After you
         create your virtual router, create and associate routes for your virtual router that direct
         incoming requests to different virtual nodes.</p>
* `delete_mesh` - <p>Deletes an existing service mesh.</p>
         <p>You must delete all resources (routes, virtual routers, virtual nodes) in the service
         mesh before you can delete the mesh itself.</p>
* `delete_route` - Deletes an existing route.
* `delete_virtual_node` - Deletes an existing virtual node.
* `delete_virtual_router` - <p>Deletes an existing virtual router.</p>
         <p>You must delete any routes associated with the virtual router before you can delete the
         router itself.</p>
* `describe_mesh` - Describes an existing service mesh.
* `describe_route` - Describes an existing route.
* `describe_virtual_node` - Describes an existing virtual node.
* `describe_virtual_router` - Describes an existing virtual router.
* `list_meshes` - Returns a list of existing service meshes.
* `list_routes` - Returns a list of existing routes in a service mesh.
* `list_virtual_nodes` - Returns a list of existing virtual nodes.
* `list_virtual_routers` - Returns a list of existing virtual routers in a service mesh.
* `update_route` - Updates an existing route for a specified service mesh and virtual router.
* `update_virtual_node` - Updates an existing virtual node in a specified service mesh.
* `update_virtual_router` - Updates an existing virtual router in a specified service mesh.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
