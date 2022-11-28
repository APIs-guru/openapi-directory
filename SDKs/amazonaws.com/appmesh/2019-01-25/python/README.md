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
    
req = operations.CreateGatewayRouteRequest(
    path_params=operations.CreateGatewayRoutePathParams(
        mesh_name="esse",
        virtual_gateway_name="veritatis",
    ),
    query_params=operations.CreateGatewayRouteQueryParams(
        mesh_owner="voluptas",
    ),
    headers=operations.CreateGatewayRouteHeaders(
        x_amz_algorithm="incidunt",
        x_amz_content_sha256="sit",
        x_amz_credential="saepe",
        x_amz_date="est",
        x_amz_security_token="odio",
        x_amz_signature="delectus",
        x_amz_signed_headers="delectus",
    ),
    request=operations.CreateGatewayRouteRequestBody(
        client_token="voluptatem",
        gateway_route_name="et",
        spec=operations.CreateGatewayRouteRequestBodySpec(
            grpc_route=shared.GrpcGatewayRoute(
                action=shared.GrpcGatewayRouteAction(
                    rewrite=shared.GrpcGatewayRouteRewrite(
                        hostname=shared.GatewayRouteHostnameRewrite(
                            default_target_hostname="DISABLED",
                        ),
                    ),
                    target=shared.GatewayRouteTarget(
                        virtual_service=shared.GatewayRouteVirtualService(
                            virtual_service_name="in",
                        ),
                    ),
                ),
                match=shared.GrpcGatewayRouteMatch(
                    hostname=shared.GatewayRouteHostnameMatch(
                        exact="ipsa",
                        suffix="repellat",
                    ),
                    metadata=[
                        shared.GrpcGatewayRouteMetadata(
                            invert=True,
                            match=shared.GrpcMetadataMatchMethod(
                                exact="voluptatem",
                                prefix="hic",
                                range=shared.MatchRange(
                                    end=6559059606815254458,
                                    start=2858433378704809922,
                                ),
                                regex="nemo",
                                suffix="architecto",
                            ),
                            name="neque",
                        ),
                    ],
                    service_name="autem",
                ),
            ),
            http2_route=shared.HTTPGatewayRoute(
                action=shared.HTTPGatewayRouteAction(
                    rewrite=shared.HTTPGatewayRouteRewrite(
                        hostname=shared.GatewayRouteHostnameRewrite(
                            default_target_hostname="ENABLED",
                        ),
                        path=shared.HTTPGatewayRoutePathRewrite(
                            exact="voluptatem",
                        ),
                        prefix=shared.HTTPGatewayRoutePrefixRewrite(
                            default_prefix="ENABLED",
                            value="consequuntur",
                        ),
                    ),
                    target=shared.GatewayRouteTarget(
                        virtual_service=shared.GatewayRouteVirtualService(
                            virtual_service_name="in",
                        ),
                    ),
                ),
                match=shared.HTTPGatewayRouteMatch(
                    headers=[
                        shared.HTTPGatewayRouteHeader(
                            invert=True,
                            match=shared.HeaderMatchMethod(
                                exact="distinctio",
                                prefix="consequuntur",
                                range=shared.MatchRange(
                                    end=571382451650181810,
                                    start=4900844526495911920,
                                ),
                                regex="fugit",
                                suffix="non",
                            ),
                            name="aut",
                        ),
                        shared.HTTPGatewayRouteHeader(
                            invert=True,
                            match=shared.HeaderMatchMethod(
                                exact="dolores",
                                prefix="aperiam",
                                range=shared.MatchRange(
                                    end=5577086904450487800,
                                    start=7546125481208690348,
                                ),
                                regex="quaerat",
                                suffix="possimus",
                            ),
                            name="harum",
                        ),
                    ],
                    hostname=shared.GatewayRouteHostnameMatch(
                        exact="laudantium",
                        suffix="odio",
                    ),
                    method="PUT",
                    path=shared.HTTPPathMatch(
                        exact="qui",
                        regex="inventore",
                    ),
                    prefix="omnis",
                    query_parameters=[
                        shared.HTTPQueryParameter(
                            match=shared.QueryParameterMatch(
                                exact="minus",
                            ),
                            name="quia",
                        ),
                        shared.HTTPQueryParameter(
                            match=shared.QueryParameterMatch(
                                exact="expedita",
                            ),
                            name="vitae",
                        ),
                    ],
                ),
            ),
            http_route=shared.HTTPGatewayRoute(
                action=shared.HTTPGatewayRouteAction(
                    rewrite=shared.HTTPGatewayRouteRewrite(
                        hostname=shared.GatewayRouteHostnameRewrite(
                            default_target_hostname="DISABLED",
                        ),
                        path=shared.HTTPGatewayRoutePathRewrite(
                            exact="doloribus",
                        ),
                        prefix=shared.HTTPGatewayRoutePrefixRewrite(
                            default_prefix="DISABLED",
                            value="cupiditate",
                        ),
                    ),
                    target=shared.GatewayRouteTarget(
                        virtual_service=shared.GatewayRouteVirtualService(
                            virtual_service_name="similique",
                        ),
                    ),
                ),
                match=shared.HTTPGatewayRouteMatch(
                    headers=[
                        shared.HTTPGatewayRouteHeader(
                            invert=True,
                            match=shared.HeaderMatchMethod(
                                exact="et",
                                prefix="maiores",
                                range=shared.MatchRange(
                                    end=2517846983044291286,
                                    start=7744082604563041062,
                                ),
                                regex="qui",
                                suffix="ex",
                            ),
                            name="quo",
                        ),
                        shared.HTTPGatewayRouteHeader(
                            invert=True,
                            match=shared.HeaderMatchMethod(
                                exact="quam",
                                prefix="et",
                                range=shared.MatchRange(
                                    end=4110956043422946029,
                                    start=6279036500422337798,
                                ),
                                regex="provident",
                                suffix="voluptatem",
                            ),
                            name="qui",
                        ),
                    ],
                    hostname=shared.GatewayRouteHostnameMatch(
                        exact="modi",
                        suffix="omnis",
                    ),
                    method="GET",
                    path=shared.HTTPPathMatch(
                        exact="quasi",
                        regex="necessitatibus",
                    ),
                    prefix="sit",
                    query_parameters=[
                        shared.HTTPQueryParameter(
                            match=shared.QueryParameterMatch(
                                exact="sequi",
                            ),
                            name="qui",
                        ),
                        shared.HTTPQueryParameter(
                            match=shared.QueryParameterMatch(
                                exact="quidem",
                            ),
                            name="iure",
                        ),
                    ],
                ),
            ),
            priority=5434837994712789813,
        ),
        tags=[
            shared.TagRef(
                key="aut",
                value="repudiandae",
            ),
        ],
    ),
)
    
res = s.sdk.create_gateway_route(req)

if res.create_gateway_route_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_gateway_route` - <p>Creates a gateway route.</p> <p>A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.</p> <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>
* `create_mesh` - <p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
* `create_route` - <p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>
* `create_virtual_gateway` - <p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>
* `create_virtual_node` - <p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in the AWS App Mesh User Guide.</p>
* `create_virtual_router` - <p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
* `create_virtual_service` - <p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
* `delete_gateway_route` - Deletes an existing gateway route.
* `delete_mesh` - <p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>
* `delete_route` - Deletes an existing route.
* `delete_virtual_gateway` - Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.
* `delete_virtual_node` - <p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>
* `delete_virtual_router` - <p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>
* `delete_virtual_service` - Deletes an existing virtual service.
* `describe_gateway_route` - Describes an existing gateway route.
* `describe_mesh` - Describes an existing service mesh.
* `describe_route` - Describes an existing route.
* `describe_virtual_gateway` - Describes an existing virtual gateway.
* `describe_virtual_node` - Describes an existing virtual node.
* `describe_virtual_router` - Describes an existing virtual router.
* `describe_virtual_service` - Describes an existing virtual service.
* `list_gateway_routes` - Returns a list of existing gateway routes that are associated to a virtual gateway.
* `list_meshes` - Returns a list of existing service meshes.
* `list_routes` - Returns a list of existing routes in a service mesh.
* `list_tags_for_resource` - List the tags for an App Mesh resource.
* `list_virtual_gateways` - Returns a list of existing virtual gateways in a service mesh.
* `list_virtual_nodes` - Returns a list of existing virtual nodes.
* `list_virtual_routers` - Returns a list of existing virtual routers in a service mesh.
* `list_virtual_services` - Returns a list of existing virtual services in a service mesh.
* `tag_resource` - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.
* `untag_resource` - Deletes specified tags from a resource.
* `update_gateway_route` - Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.
* `update_mesh` - Updates an existing service mesh.
* `update_route` - Updates an existing route for a specified service mesh and virtual router.
* `update_virtual_gateway` - Updates an existing virtual gateway in a specified service mesh.
* `update_virtual_node` - Updates an existing virtual node in a specified service mesh.
* `update_virtual_router` - Updates an existing virtual router in a specified service mesh.
* `update_virtual_service` - Updates an existing virtual service in a specified service mesh.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
