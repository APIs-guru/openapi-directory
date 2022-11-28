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
import { CreateGatewayRouteRequest, CreateGatewayRouteResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateGatewayRouteRequest = {
  pathParams: {
    meshName: "esse",
    virtualGatewayName: "veritatis",
  },
  queryParams: {
    meshOwner: "voluptas",
  },
  headers: {
    xAmzAlgorithm: "incidunt",
    xAmzContentSha256: "sit",
    xAmzCredential: "saepe",
    xAmzDate: "est",
    xAmzSecurityToken: "odio",
    xAmzSignature: "delectus",
    xAmzSignedHeaders: "delectus",
  },
  request: {
    clientToken: "voluptatem",
    gatewayRouteName: "et",
    spec: {
      grpcRoute: {
        action: {
          rewrite: {
            hostname: {
              defaultTargetHostname: "DISABLED",
            },
          },
          target: {
            virtualService: {
              virtualServiceName: "in",
            },
          },
        },
        match: {
          hostname: {
            exact: "ipsa",
            suffix: "repellat",
          },
          metadata: [
            {
              invert: true,
              match: {
                exact: "voluptatem",
                prefix: "hic",
                range: {
                  end: 6559059606815254458,
                  start: 2858433378704809922,
                },
                regex: "nemo",
                suffix: "architecto",
              },
              name: "neque",
            },
          ],
          serviceName: "autem",
        },
      },
      http2Route: {
        action: {
          rewrite: {
            hostname: {
              defaultTargetHostname: "ENABLED",
            },
            path: {
              exact: "voluptatem",
            },
            prefix: {
              defaultPrefix: "ENABLED",
              value: "consequuntur",
            },
          },
          target: {
            virtualService: {
              virtualServiceName: "in",
            },
          },
        },
        match: {
          headers: [
            {
              invert: true,
              match: {
                exact: "distinctio",
                prefix: "consequuntur",
                range: {
                  end: 571382451650181810,
                  start: 4900844526495911920,
                },
                regex: "fugit",
                suffix: "non",
              },
              name: "aut",
            },
            {
              invert: true,
              match: {
                exact: "dolores",
                prefix: "aperiam",
                range: {
                  end: 5577086904450487800,
                  start: 7546125481208690348,
                },
                regex: "quaerat",
                suffix: "possimus",
              },
              name: "harum",
            },
          ],
          hostname: {
            exact: "laudantium",
            suffix: "odio",
          },
          method: "PUT",
          path: {
            exact: "qui",
            regex: "inventore",
          },
          prefix: "omnis",
          queryParameters: [
            {
              match: {
                exact: "minus",
              },
              name: "quia",
            },
            {
              match: {
                exact: "expedita",
              },
              name: "vitae",
            },
          ],
        },
      },
      httpRoute: {
        action: {
          rewrite: {
            hostname: {
              defaultTargetHostname: "DISABLED",
            },
            path: {
              exact: "doloribus",
            },
            prefix: {
              defaultPrefix: "DISABLED",
              value: "cupiditate",
            },
          },
          target: {
            virtualService: {
              virtualServiceName: "similique",
            },
          },
        },
        match: {
          headers: [
            {
              invert: true,
              match: {
                exact: "et",
                prefix: "maiores",
                range: {
                  end: 2517846983044291286,
                  start: 7744082604563041062,
                },
                regex: "qui",
                suffix: "ex",
              },
              name: "quo",
            },
            {
              invert: true,
              match: {
                exact: "quam",
                prefix: "et",
                range: {
                  end: 4110956043422946029,
                  start: 6279036500422337798,
                },
                regex: "provident",
                suffix: "voluptatem",
              },
              name: "qui",
            },
          ],
          hostname: {
            exact: "modi",
            suffix: "omnis",
          },
          method: "GET",
          path: {
            exact: "quasi",
            regex: "necessitatibus",
          },
          prefix: "sit",
          queryParameters: [
            {
              match: {
                exact: "sequi",
              },
              name: "qui",
            },
            {
              match: {
                exact: "quidem",
              },
              name: "iure",
            },
          ],
        },
      },
      priority: 5434837994712789813,
    },
    tags: [
      {
        key: "aut",
        value: "repudiandae",
      },
    ],
  },
};

sdk.sdk.createGatewayRoute(req).then((res: CreateGatewayRouteResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createGatewayRoute` - <p>Creates a gateway route.</p> <p>A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.</p> <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>
* `createMesh` - <p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>
* `createRoute` - <p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>
* `createVirtualGateway` - <p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>
* `createVirtualNode` - <p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in the AWS App Mesh User Guide.</p>
* `createVirtualRouter` - <p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>
* `createVirtualService` - <p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>
* `deleteGatewayRoute` - Deletes an existing gateway route.
* `deleteMesh` - <p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>
* `deleteRoute` - Deletes an existing route.
* `deleteVirtualGateway` - Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.
* `deleteVirtualNode` - <p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>
* `deleteVirtualRouter` - <p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>
* `deleteVirtualService` - Deletes an existing virtual service.
* `describeGatewayRoute` - Describes an existing gateway route.
* `describeMesh` - Describes an existing service mesh.
* `describeRoute` - Describes an existing route.
* `describeVirtualGateway` - Describes an existing virtual gateway.
* `describeVirtualNode` - Describes an existing virtual node.
* `describeVirtualRouter` - Describes an existing virtual router.
* `describeVirtualService` - Describes an existing virtual service.
* `listGatewayRoutes` - Returns a list of existing gateway routes that are associated to a virtual gateway.
* `listMeshes` - Returns a list of existing service meshes.
* `listRoutes` - Returns a list of existing routes in a service mesh.
* `listTagsForResource` - List the tags for an App Mesh resource.
* `listVirtualGateways` - Returns a list of existing virtual gateways in a service mesh.
* `listVirtualNodes` - Returns a list of existing virtual nodes.
* `listVirtualRouters` - Returns a list of existing virtual routers in a service mesh.
* `listVirtualServices` - Returns a list of existing virtual services in a service mesh.
* `tagResource` - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.
* `untagResource` - Deletes specified tags from a resource.
* `updateGatewayRoute` - Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.
* `updateMesh` - Updates an existing service mesh.
* `updateRoute` - Updates an existing route for a specified service mesh and virtual router.
* `updateVirtualGateway` - Updates an existing virtual gateway in a specified service mesh.
* `updateVirtualNode` - Updates an existing virtual node in a specified service mesh.
* `updateVirtualRouter` - Updates an existing virtual router in a specified service mesh.
* `updateVirtualService` - Updates an existing virtual service in a specified service mesh.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
