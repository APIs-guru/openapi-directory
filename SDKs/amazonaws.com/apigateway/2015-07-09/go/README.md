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
    
    req := operations.CreateAPIKeyRequest{
        Headers: operations.CreateAPIKeyHeaders{
            XAmzAlgorithm: "saepe",
            XAmzContentSha256: "commodi",
            XAmzCredential: "in",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "asperiores",
            XAmzSignature: "quo",
            XAmzSignedHeaders: "ea",
        },
        Request: operations.CreateAPIKeyRequestBody{
            CustomerID: "soluta",
            Description: "tempora",
            Enabled: true,
            GenerateDistinctID: true,
            Name: "facere",
            StageKeys: []shared.StageKey{
                shared.StageKey{
                    RestAPIID: "et",
                    StageName: "odit",
                },
                shared.StageKey{
                    RestAPIID: "est",
                    StageName: "id",
                },
                shared.StageKey{
                    RestAPIID: "ipsum",
                    StageName: "aut",
                },
            },
            Tags: map[string]string{
                "et": "vero",
                "voluptatem": "ex",
            },
            Value: "magni",
        },
    }
    
    res, err := s.Sdk.CreateAPIKey(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKey != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateAPIKey` - <p>Create an <a>ApiKey</a> resource. </p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/create-api-key.html">AWS CLI</a></div>
* `CreateAuthorizer` - <p>Adds a new <a>Authorizer</a> resource to an existing <a>RestApi</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/create-authorizer.html">AWS CLI</a></div>
* `CreateBasePathMapping` - Creates a new <a>BasePathMapping</a> resource.
* `CreateDeployment` - Creates a <a>Deployment</a> resource, which makes a specified <a>RestApi</a> callable over the internet.
* `CreateDocumentationPart`
* `CreateDocumentationVersion`
* `CreateDomainName` - Creates a new domain name.
* `CreateModel` - Adds a new <a>Model</a> resource to an existing <a>RestApi</a> resource.
* `CreateRequestValidator` - Creates a <a>ReqeustValidator</a> of a given <a>RestApi</a>.
* `CreateResource` - Creates a <a>Resource</a> resource.
* `CreateRestAPI` - Creates a new <a>RestApi</a> resource.
* `CreateStage` - Creates a new <a>Stage</a> resource that references a pre-existing <a>Deployment</a> for the API. 
* `CreateUsagePlan` - Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload. 
* `CreateUsagePlanKey` - Creates a usage plan key for adding an existing API key to a usage plan.
* `CreateVpcLink` - Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.
* `DeleteAPIKey` - Deletes the <a>ApiKey</a> resource.
* `DeleteAuthorizer` - <p>Deletes an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/delete-authorizer.html">AWS CLI</a></div>
* `DeleteBasePathMapping` - Deletes the <a>BasePathMapping</a> resource.
* `DeleteClientCertificate` - Deletes the <a>ClientCertificate</a> resource.
* `DeleteDeployment` - Deletes a <a>Deployment</a> resource. Deleting a deployment will only succeed if there are no <a>Stage</a> resources associated with it.
* `DeleteDocumentationPart`
* `DeleteDocumentationVersion`
* `DeleteDomainName` - Deletes the <a>DomainName</a> resource.
* `DeleteGatewayResponse` - Clears any customization of a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a> and resets it with the default settings.
* `DeleteIntegration` - Represents a delete integration.
* `DeleteIntegrationResponse` - Represents a delete integration response.
* `DeleteMethod` - Deletes an existing <a>Method</a> resource.
* `DeleteMethodResponse` - Deletes an existing <a>MethodResponse</a> resource.
* `DeleteModel` - Deletes a model.
* `DeleteRequestValidator` - Deletes a <a>RequestValidator</a> of a given <a>RestApi</a>.
* `DeleteResource` - Deletes a <a>Resource</a> resource.
* `DeleteRestAPI` - Deletes the specified API.
* `DeleteStage` - Deletes a <a>Stage</a> resource.
* `DeleteUsagePlan` - Deletes a usage plan of a given plan Id.
* `DeleteUsagePlanKey` - Deletes a usage plan key and remove the underlying API key from the associated usage plan.
* `DeleteVpcLink` - Deletes an existing <a>VpcLink</a> of a specified identifier.
* `FlushStageAuthorizersCache` - Flushes all authorizer cache entries on a stage.
* `FlushStageCache` - Flushes a stage's cache.
* `GenerateClientCertificate` - Generates a <a>ClientCertificate</a> resource.
* `GetAccount` - Gets information about the current <a>Account</a> resource.
* `GetAPIKey` - Gets information about the current <a>ApiKey</a> resource.
* `GetAPIKeys` - Gets information about the current <a>ApiKeys</a> resource.
* `GetAuthorizer` - <p>Describe an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizer.html">AWS CLI</a></div>
* `GetAuthorizers` - <p>Describe an existing <a>Authorizers</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizers.html">AWS CLI</a></div>
* `GetBasePathMapping` - Describe a <a>BasePathMapping</a> resource.
* `GetBasePathMappings` - Represents a collection of <a>BasePathMapping</a> resources.
* `GetClientCertificate` - Gets information about the current <a>ClientCertificate</a> resource.
* `GetClientCertificates` - Gets a collection of <a>ClientCertificate</a> resources.
* `GetDeployment` - Gets information about a <a>Deployment</a> resource.
* `GetDeployments` - Gets information about a <a>Deployments</a> collection.
* `GetDocumentationPart`
* `GetDocumentationParts`
* `GetDocumentationVersion`
* `GetDocumentationVersions`
* `GetDomainName` - Represents a domain name that is contained in a simpler, more intuitive URL that can be called.
* `GetDomainNames` - Represents a collection of <a>DomainName</a> resources.
* `GetExport` - Exports a deployed version of a <a>RestApi</a> in a specified format.
* `GetGatewayResponse` - Gets a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.
* `GetGatewayResponses` - Gets the <a>GatewayResponses</a> collection on the given <a>RestApi</a>. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default <a>GatewayResponses</a> collection for the supported response types.
* `GetIntegration` - Get the integration settings.
* `GetIntegrationResponse` - Represents a get integration response.
* `GetMethod` - Describe an existing <a>Method</a> resource.
* `GetMethodResponse` - Describes a <a>MethodResponse</a> resource.
* `GetModel` - Describes an existing model defined for a <a>RestApi</a> resource.
* `GetModelTemplate` - Generates a sample mapping template that can be used to transform a payload into the structure of a model.
* `GetModels` - Describes existing <a>Models</a> defined for a <a>RestApi</a> resource.
* `GetRequestValidator` - Gets a <a>RequestValidator</a> of a given <a>RestApi</a>.
* `GetRequestValidators` - Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.
* `GetResource` - Lists information about a resource.
* `GetResources` - Lists information about a collection of <a>Resource</a> resources.
* `GetRestAPI` - Lists the <a>RestApi</a> resource in the collection.
* `GetRestApis` - Lists the <a>RestApis</a> resources for your collection.
* `GetSdk` - Generates a client SDK for a <a>RestApi</a> and <a>Stage</a>.
* `GetSdkType`
* `GetSdkTypes`
* `GetStage` - Gets information about a <a>Stage</a> resource.
* `GetStages` - Gets information about one or more <a>Stage</a> resources.
* `GetTags` - Gets the <a>Tags</a> collection for a given resource.
* `GetUsage` - Gets the usage data of a usage plan in a specified time interval.
* `GetUsagePlan` - Gets a usage plan of a given plan identifier.
* `GetUsagePlanKey` - Gets a usage plan key of a given key identifier.
* `GetUsagePlanKeys` - Gets all the usage plan keys representing the API keys added to a specified usage plan.
* `GetUsagePlans` - Gets all the usage plans of the caller's account.
* `GetVpcLink` - Gets a specified VPC link under the caller's account in a region.
* `GetVpcLinks` - Gets the <a>VpcLinks</a> collection under the caller's account in a selected region.
* `ImportAPIKeys` - Import API keys from an external source, such as a CSV-formatted file.
* `ImportDocumentationParts`
* `ImportRestAPI` - A feature of the API Gateway control service for creating a new API from an external API definition file.
* `PutGatewayResponse` - Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.
* `PutIntegration` - Sets up a method's integration.
* `PutIntegrationResponse` - Represents a put integration.
* `PutMethod` - Add a method to an existing <a>Resource</a> resource.
* `PutMethodResponse` - Adds a <a>MethodResponse</a> to an existing <a>Method</a> resource.
* `PutRestAPI` - A feature of the API Gateway control service for updating an existing API with an input of external API definitions. The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.
* `TagResource` - Adds or updates a tag on a given resource.
* `TestInvokeAuthorizer` - <p>Simulate the execution of an <a>Authorizer</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
* `TestInvokeMethod` - Simulate the execution of a <a>Method</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.
* `UntagResource` - Removes a tag from a given resource.
* `UpdateAccount` - Changes information about the current <a>Account</a> resource.
* `UpdateAPIKey` - Changes information about an <a>ApiKey</a> resource.
* `UpdateAuthorizer` - <p>Updates an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/update-authorizer.html">AWS CLI</a></div>
* `UpdateBasePathMapping` - Changes information about the <a>BasePathMapping</a> resource.
* `UpdateClientCertificate` - Changes information about an <a>ClientCertificate</a> resource.
* `UpdateDeployment` - Changes information about a <a>Deployment</a> resource.
* `UpdateDocumentationPart`
* `UpdateDocumentationVersion`
* `UpdateDomainName` - Changes information about the <a>DomainName</a> resource.
* `UpdateGatewayResponse` - Updates a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.
* `UpdateIntegration` - Represents an update integration.
* `UpdateIntegrationResponse` - Represents an update integration response.
* `UpdateMethod` - Updates an existing <a>Method</a> resource.
* `UpdateMethodResponse` - Updates an existing <a>MethodResponse</a> resource.
* `UpdateModel` - Changes information about a model.
* `UpdateRequestValidator` - Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.
* `UpdateResource` - Changes information about a <a>Resource</a> resource.
* `UpdateRestAPI` - Changes information about the specified API.
* `UpdateStage` - Changes information about a <a>Stage</a> resource.
* `UpdateUsage` - Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.
* `UpdateUsagePlan` - Updates a usage plan of a given plan Id.
* `UpdateVpcLink` - Updates an existing <a>VpcLink</a> of a specified identifier.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
