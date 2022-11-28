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
import { CreateApiKeyRequest, CreateApiKeyResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateApiKeyRequest = {
  headers: {
    xAmzAlgorithm: "saepe",
    xAmzContentSha256: "commodi",
    xAmzCredential: "in",
    xAmzDate: "quibusdam",
    xAmzSecurityToken: "asperiores",
    xAmzSignature: "quo",
    xAmzSignedHeaders: "ea",
  },
  request: {
    customerId: "soluta",
    description: "tempora",
    enabled: true,
    generateDistinctId: true,
    name: "facere",
    stageKeys: [
      {
        restApiId: "et",
        stageName: "odit",
      },
      {
        restApiId: "est",
        stageName: "id",
      },
      {
        restApiId: "ipsum",
        stageName: "aut",
      },
    ],
    tags: {
      "et": "vero",
      "voluptatem": "ex",
    },
    value: "magni",
  },
};

sdk.sdk.createApiKey(req).then((res: CreateApiKeyResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createApiKey` - <p>Create an <a>ApiKey</a> resource. </p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/create-api-key.html">AWS CLI</a></div>
* `createAuthorizer` - <p>Adds a new <a>Authorizer</a> resource to an existing <a>RestApi</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/create-authorizer.html">AWS CLI</a></div>
* `createBasePathMapping` - Creates a new <a>BasePathMapping</a> resource.
* `createDeployment` - Creates a <a>Deployment</a> resource, which makes a specified <a>RestApi</a> callable over the internet.
* `createDocumentationPart`
* `createDocumentationVersion`
* `createDomainName` - Creates a new domain name.
* `createModel` - Adds a new <a>Model</a> resource to an existing <a>RestApi</a> resource.
* `createRequestValidator` - Creates a <a>ReqeustValidator</a> of a given <a>RestApi</a>.
* `createResource` - Creates a <a>Resource</a> resource.
* `createRestApi` - Creates a new <a>RestApi</a> resource.
* `createStage` - Creates a new <a>Stage</a> resource that references a pre-existing <a>Deployment</a> for the API. 
* `createUsagePlan` - Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload. 
* `createUsagePlanKey` - Creates a usage plan key for adding an existing API key to a usage plan.
* `createVpcLink` - Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.
* `deleteApiKey` - Deletes the <a>ApiKey</a> resource.
* `deleteAuthorizer` - <p>Deletes an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/delete-authorizer.html">AWS CLI</a></div>
* `deleteBasePathMapping` - Deletes the <a>BasePathMapping</a> resource.
* `deleteClientCertificate` - Deletes the <a>ClientCertificate</a> resource.
* `deleteDeployment` - Deletes a <a>Deployment</a> resource. Deleting a deployment will only succeed if there are no <a>Stage</a> resources associated with it.
* `deleteDocumentationPart`
* `deleteDocumentationVersion`
* `deleteDomainName` - Deletes the <a>DomainName</a> resource.
* `deleteGatewayResponse` - Clears any customization of a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a> and resets it with the default settings.
* `deleteIntegration` - Represents a delete integration.
* `deleteIntegrationResponse` - Represents a delete integration response.
* `deleteMethod` - Deletes an existing <a>Method</a> resource.
* `deleteMethodResponse` - Deletes an existing <a>MethodResponse</a> resource.
* `deleteModel` - Deletes a model.
* `deleteRequestValidator` - Deletes a <a>RequestValidator</a> of a given <a>RestApi</a>.
* `deleteResource` - Deletes a <a>Resource</a> resource.
* `deleteRestApi` - Deletes the specified API.
* `deleteStage` - Deletes a <a>Stage</a> resource.
* `deleteUsagePlan` - Deletes a usage plan of a given plan Id.
* `deleteUsagePlanKey` - Deletes a usage plan key and remove the underlying API key from the associated usage plan.
* `deleteVpcLink` - Deletes an existing <a>VpcLink</a> of a specified identifier.
* `flushStageAuthorizersCache` - Flushes all authorizer cache entries on a stage.
* `flushStageCache` - Flushes a stage's cache.
* `generateClientCertificate` - Generates a <a>ClientCertificate</a> resource.
* `getAccount` - Gets information about the current <a>Account</a> resource.
* `getApiKey` - Gets information about the current <a>ApiKey</a> resource.
* `getApiKeys` - Gets information about the current <a>ApiKeys</a> resource.
* `getAuthorizer` - <p>Describe an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizer.html">AWS CLI</a></div>
* `getAuthorizers` - <p>Describe an existing <a>Authorizers</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizers.html">AWS CLI</a></div>
* `getBasePathMapping` - Describe a <a>BasePathMapping</a> resource.
* `getBasePathMappings` - Represents a collection of <a>BasePathMapping</a> resources.
* `getClientCertificate` - Gets information about the current <a>ClientCertificate</a> resource.
* `getClientCertificates` - Gets a collection of <a>ClientCertificate</a> resources.
* `getDeployment` - Gets information about a <a>Deployment</a> resource.
* `getDeployments` - Gets information about a <a>Deployments</a> collection.
* `getDocumentationPart`
* `getDocumentationParts`
* `getDocumentationVersion`
* `getDocumentationVersions`
* `getDomainName` - Represents a domain name that is contained in a simpler, more intuitive URL that can be called.
* `getDomainNames` - Represents a collection of <a>DomainName</a> resources.
* `getExport` - Exports a deployed version of a <a>RestApi</a> in a specified format.
* `getGatewayResponse` - Gets a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.
* `getGatewayResponses` - Gets the <a>GatewayResponses</a> collection on the given <a>RestApi</a>. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default <a>GatewayResponses</a> collection for the supported response types.
* `getIntegration` - Get the integration settings.
* `getIntegrationResponse` - Represents a get integration response.
* `getMethod` - Describe an existing <a>Method</a> resource.
* `getMethodResponse` - Describes a <a>MethodResponse</a> resource.
* `getModel` - Describes an existing model defined for a <a>RestApi</a> resource.
* `getModelTemplate` - Generates a sample mapping template that can be used to transform a payload into the structure of a model.
* `getModels` - Describes existing <a>Models</a> defined for a <a>RestApi</a> resource.
* `getRequestValidator` - Gets a <a>RequestValidator</a> of a given <a>RestApi</a>.
* `getRequestValidators` - Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.
* `getResource` - Lists information about a resource.
* `getResources` - Lists information about a collection of <a>Resource</a> resources.
* `getRestApi` - Lists the <a>RestApi</a> resource in the collection.
* `getRestApis` - Lists the <a>RestApis</a> resources for your collection.
* `getSdk` - Generates a client SDK for a <a>RestApi</a> and <a>Stage</a>.
* `getSdkType`
* `getSdkTypes`
* `getStage` - Gets information about a <a>Stage</a> resource.
* `getStages` - Gets information about one or more <a>Stage</a> resources.
* `getTags` - Gets the <a>Tags</a> collection for a given resource.
* `getUsage` - Gets the usage data of a usage plan in a specified time interval.
* `getUsagePlan` - Gets a usage plan of a given plan identifier.
* `getUsagePlanKey` - Gets a usage plan key of a given key identifier.
* `getUsagePlanKeys` - Gets all the usage plan keys representing the API keys added to a specified usage plan.
* `getUsagePlans` - Gets all the usage plans of the caller's account.
* `getVpcLink` - Gets a specified VPC link under the caller's account in a region.
* `getVpcLinks` - Gets the <a>VpcLinks</a> collection under the caller's account in a selected region.
* `importApiKeys` - Import API keys from an external source, such as a CSV-formatted file.
* `importDocumentationParts`
* `importRestApi` - A feature of the API Gateway control service for creating a new API from an external API definition file.
* `putGatewayResponse` - Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.
* `putIntegration` - Sets up a method's integration.
* `putIntegrationResponse` - Represents a put integration.
* `putMethod` - Add a method to an existing <a>Resource</a> resource.
* `putMethodResponse` - Adds a <a>MethodResponse</a> to an existing <a>Method</a> resource.
* `putRestApi` - A feature of the API Gateway control service for updating an existing API with an input of external API definitions. The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.
* `tagResource` - Adds or updates a tag on a given resource.
* `testInvokeAuthorizer` - <p>Simulate the execution of an <a>Authorizer</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
* `testInvokeMethod` - Simulate the execution of a <a>Method</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.
* `untagResource` - Removes a tag from a given resource.
* `updateAccount` - Changes information about the current <a>Account</a> resource.
* `updateApiKey` - Changes information about an <a>ApiKey</a> resource.
* `updateAuthorizer` - <p>Updates an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/update-authorizer.html">AWS CLI</a></div>
* `updateBasePathMapping` - Changes information about the <a>BasePathMapping</a> resource.
* `updateClientCertificate` - Changes information about an <a>ClientCertificate</a> resource.
* `updateDeployment` - Changes information about a <a>Deployment</a> resource.
* `updateDocumentationPart`
* `updateDocumentationVersion`
* `updateDomainName` - Changes information about the <a>DomainName</a> resource.
* `updateGatewayResponse` - Updates a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.
* `updateIntegration` - Represents an update integration.
* `updateIntegrationResponse` - Represents an update integration response.
* `updateMethod` - Updates an existing <a>Method</a> resource.
* `updateMethodResponse` - Updates an existing <a>MethodResponse</a> resource.
* `updateModel` - Changes information about a model.
* `updateRequestValidator` - Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.
* `updateResource` - Changes information about a <a>Resource</a> resource.
* `updateRestApi` - Changes information about the specified API.
* `updateStage` - Changes information about a <a>Stage</a> resource.
* `updateUsage` - Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.
* `updateUsagePlan` - Updates a usage plan of a given plan Id.
* `updateVpcLink` - Updates an existing <a>VpcLink</a> of a specified identifier.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
