import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://appmesh.{region}.amazonaws.com", "https://appmesh.{region}.amazonaws.com", "http://appmesh.{region}.amazonaws.com.cn", "https://appmesh.{region}.amazonaws.com.cn"];
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
     * createGatewayRoute - <p>Creates a gateway route.</p> <p>A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.</p> <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>
    **/
    createGatewayRoute(req: operations.CreateGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateGatewayRouteResponse>;
    /**
     * createMesh - <p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
    **/
    createMesh(req: operations.CreateMeshRequest, config?: AxiosRequestConfig): Promise<operations.CreateMeshResponse>;
    /**
     * createRoute - <p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>
    **/
    createRoute(req: operations.CreateRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateRouteResponse>;
    /**
     * createVirtualGateway - <p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>
    **/
    createVirtualGateway(req: operations.CreateVirtualGatewayRequest, config?: AxiosRequestConfig): Promise<operations.CreateVirtualGatewayResponse>;
    /**
     * createVirtualNode - <p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in the AWS App Mesh User Guide.</p>
    **/
    createVirtualNode(req: operations.CreateVirtualNodeRequest, config?: AxiosRequestConfig): Promise<operations.CreateVirtualNodeResponse>;
    /**
     * createVirtualRouter - <p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
    **/
    createVirtualRouter(req: operations.CreateVirtualRouterRequest, config?: AxiosRequestConfig): Promise<operations.CreateVirtualRouterResponse>;
    /**
     * createVirtualService - <p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
    **/
    createVirtualService(req: operations.CreateVirtualServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateVirtualServiceResponse>;
    /**
     * deleteGatewayRoute - Deletes an existing gateway route.
    **/
    deleteGatewayRoute(req: operations.DeleteGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGatewayRouteResponse>;
    /**
     * deleteMesh - <p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>
    **/
    deleteMesh(req: operations.DeleteMeshRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMeshResponse>;
    /**
     * deleteRoute - Deletes an existing route.
    **/
    deleteRoute(req: operations.DeleteRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRouteResponse>;
    /**
     * deleteVirtualGateway - Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.
    **/
    deleteVirtualGateway(req: operations.DeleteVirtualGatewayRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVirtualGatewayResponse>;
    /**
     * deleteVirtualNode - <p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>
    **/
    deleteVirtualNode(req: operations.DeleteVirtualNodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVirtualNodeResponse>;
    /**
     * deleteVirtualRouter - <p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>
    **/
    deleteVirtualRouter(req: operations.DeleteVirtualRouterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVirtualRouterResponse>;
    /**
     * deleteVirtualService - Deletes an existing virtual service.
    **/
    deleteVirtualService(req: operations.DeleteVirtualServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVirtualServiceResponse>;
    /**
     * describeGatewayRoute - Describes an existing gateway route.
    **/
    describeGatewayRoute(req: operations.DescribeGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.DescribeGatewayRouteResponse>;
    /**
     * describeMesh - Describes an existing service mesh.
    **/
    describeMesh(req: operations.DescribeMeshRequest, config?: AxiosRequestConfig): Promise<operations.DescribeMeshResponse>;
    /**
     * describeRoute - Describes an existing route.
    **/
    describeRoute(req: operations.DescribeRouteRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRouteResponse>;
    /**
     * describeVirtualGateway - Describes an existing virtual gateway.
    **/
    describeVirtualGateway(req: operations.DescribeVirtualGatewayRequest, config?: AxiosRequestConfig): Promise<operations.DescribeVirtualGatewayResponse>;
    /**
     * describeVirtualNode - Describes an existing virtual node.
    **/
    describeVirtualNode(req: operations.DescribeVirtualNodeRequest, config?: AxiosRequestConfig): Promise<operations.DescribeVirtualNodeResponse>;
    /**
     * describeVirtualRouter - Describes an existing virtual router.
    **/
    describeVirtualRouter(req: operations.DescribeVirtualRouterRequest, config?: AxiosRequestConfig): Promise<operations.DescribeVirtualRouterResponse>;
    /**
     * describeVirtualService - Describes an existing virtual service.
    **/
    describeVirtualService(req: operations.DescribeVirtualServiceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeVirtualServiceResponse>;
    /**
     * listGatewayRoutes - Returns a list of existing gateway routes that are associated to a virtual gateway.
    **/
    listGatewayRoutes(req: operations.ListGatewayRoutesRequest, config?: AxiosRequestConfig): Promise<operations.ListGatewayRoutesResponse>;
    /**
     * listMeshes - Returns a list of existing service meshes.
    **/
    listMeshes(req: operations.ListMeshesRequest, config?: AxiosRequestConfig): Promise<operations.ListMeshesResponse>;
    /**
     * listRoutes - Returns a list of existing routes in a service mesh.
    **/
    listRoutes(req: operations.ListRoutesRequest, config?: AxiosRequestConfig): Promise<operations.ListRoutesResponse>;
    /**
     * listTagsForResource - List the tags for an App Mesh resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listVirtualGateways - Returns a list of existing virtual gateways in a service mesh.
    **/
    listVirtualGateways(req: operations.ListVirtualGatewaysRequest, config?: AxiosRequestConfig): Promise<operations.ListVirtualGatewaysResponse>;
    /**
     * listVirtualNodes - Returns a list of existing virtual nodes.
    **/
    listVirtualNodes(req: operations.ListVirtualNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListVirtualNodesResponse>;
    /**
     * listVirtualRouters - Returns a list of existing virtual routers in a service mesh.
    **/
    listVirtualRouters(req: operations.ListVirtualRoutersRequest, config?: AxiosRequestConfig): Promise<operations.ListVirtualRoutersResponse>;
    /**
     * listVirtualServices - Returns a list of existing virtual services in a service mesh.
    **/
    listVirtualServices(req: operations.ListVirtualServicesRequest, config?: AxiosRequestConfig): Promise<operations.ListVirtualServicesResponse>;
    /**
     * tagResource - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Deletes specified tags from a resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateGatewayRoute - Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.
    **/
    updateGatewayRoute(req: operations.UpdateGatewayRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGatewayRouteResponse>;
    /**
     * updateMesh - Updates an existing service mesh.
    **/
    updateMesh(req: operations.UpdateMeshRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMeshResponse>;
    /**
     * updateRoute - Updates an existing route for a specified service mesh and virtual router.
    **/
    updateRoute(req: operations.UpdateRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRouteResponse>;
    /**
     * updateVirtualGateway - Updates an existing virtual gateway in a specified service mesh.
    **/
    updateVirtualGateway(req: operations.UpdateVirtualGatewayRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVirtualGatewayResponse>;
    /**
     * updateVirtualNode - Updates an existing virtual node in a specified service mesh.
    **/
    updateVirtualNode(req: operations.UpdateVirtualNodeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVirtualNodeResponse>;
    /**
     * updateVirtualRouter - Updates an existing virtual router in a specified service mesh.
    **/
    updateVirtualRouter(req: operations.UpdateVirtualRouterRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVirtualRouterResponse>;
    /**
     * updateVirtualService - Updates an existing virtual service in a specified service mesh.
    **/
    updateVirtualService(req: operations.UpdateVirtualServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVirtualServiceResponse>;
}
export {};
