import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://apigateway.{region}.amazonaws.com", "https://apigateway.{region}.amazonaws.com", "http://apigateway.{region}.amazonaws.com.cn", "https://apigateway.{region}.amazonaws.com.cn"];
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
     * createApiKey - <p>Create an <a>ApiKey</a> resource. </p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/create-api-key.html">AWS CLI</a></div>
    **/
    createApiKey(req: operations.CreateApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiKeyResponse>;
    /**
     * createAuthorizer - <p>Adds a new <a>Authorizer</a> resource to an existing <a>RestApi</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/create-authorizer.html">AWS CLI</a></div>
    **/
    createAuthorizer(req: operations.CreateAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorizerResponse>;
    /**
     * createBasePathMapping - Creates a new <a>BasePathMapping</a> resource.
    **/
    createBasePathMapping(req: operations.CreateBasePathMappingRequest, config?: AxiosRequestConfig): Promise<operations.CreateBasePathMappingResponse>;
    /**
     * createDeployment - Creates a <a>Deployment</a> resource, which makes a specified <a>RestApi</a> callable over the internet.
    **/
    createDeployment(req: operations.CreateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentResponse>;
    createDocumentationPart(req: operations.CreateDocumentationPartRequest, config?: AxiosRequestConfig): Promise<operations.CreateDocumentationPartResponse>;
    createDocumentationVersion(req: operations.CreateDocumentationVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateDocumentationVersionResponse>;
    /**
     * createDomainName - Creates a new domain name.
    **/
    createDomainName(req: operations.CreateDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainNameResponse>;
    /**
     * createModel - Adds a new <a>Model</a> resource to an existing <a>RestApi</a> resource.
    **/
    createModel(req: operations.CreateModelRequest, config?: AxiosRequestConfig): Promise<operations.CreateModelResponse>;
    /**
     * createRequestValidator - Creates a <a>ReqeustValidator</a> of a given <a>RestApi</a>.
    **/
    createRequestValidator(req: operations.CreateRequestValidatorRequest, config?: AxiosRequestConfig): Promise<operations.CreateRequestValidatorResponse>;
    /**
     * createResource - Creates a <a>Resource</a> resource.
    **/
    createResource(req: operations.CreateResourceRequest, config?: AxiosRequestConfig): Promise<operations.CreateResourceResponse>;
    /**
     * createRestApi - Creates a new <a>RestApi</a> resource.
    **/
    createRestApi(req: operations.CreateRestApiRequest, config?: AxiosRequestConfig): Promise<operations.CreateRestApiResponse>;
    /**
     * createStage - Creates a new <a>Stage</a> resource that references a pre-existing <a>Deployment</a> for the API.
    **/
    createStage(req: operations.CreateStageRequest, config?: AxiosRequestConfig): Promise<operations.CreateStageResponse>;
    /**
     * createUsagePlan - Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload.
    **/
    createUsagePlan(req: operations.CreateUsagePlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateUsagePlanResponse>;
    /**
     * createUsagePlanKey - Creates a usage plan key for adding an existing API key to a usage plan.
    **/
    createUsagePlanKey(req: operations.CreateUsagePlanKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateUsagePlanKeyResponse>;
    /**
     * createVpcLink - Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.
    **/
    createVpcLink(req: operations.CreateVpcLinkRequest, config?: AxiosRequestConfig): Promise<operations.CreateVpcLinkResponse>;
    /**
     * deleteApiKey - Deletes the <a>ApiKey</a> resource.
    **/
    deleteApiKey(req: operations.DeleteApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiKeyResponse>;
    /**
     * deleteAuthorizer - <p>Deletes an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/delete-authorizer.html">AWS CLI</a></div>
    **/
    deleteAuthorizer(req: operations.DeleteAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAuthorizerResponse>;
    /**
     * deleteBasePathMapping - Deletes the <a>BasePathMapping</a> resource.
    **/
    deleteBasePathMapping(req: operations.DeleteBasePathMappingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBasePathMappingResponse>;
    /**
     * deleteClientCertificate - Deletes the <a>ClientCertificate</a> resource.
    **/
    deleteClientCertificate(req: operations.DeleteClientCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClientCertificateResponse>;
    /**
     * deleteDeployment - Deletes a <a>Deployment</a> resource. Deleting a deployment will only succeed if there are no <a>Stage</a> resources associated with it.
    **/
    deleteDeployment(req: operations.DeleteDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeploymentResponse>;
    deleteDocumentationPart(req: operations.DeleteDocumentationPartRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDocumentationPartResponse>;
    deleteDocumentationVersion(req: operations.DeleteDocumentationVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDocumentationVersionResponse>;
    /**
     * deleteDomainName - Deletes the <a>DomainName</a> resource.
    **/
    deleteDomainName(req: operations.DeleteDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainNameResponse>;
    /**
     * deleteGatewayResponse - Clears any customization of a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a> and resets it with the default settings.
    **/
    deleteGatewayResponse(req: operations.DeleteGatewayResponseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGatewayResponseResponse>;
    /**
     * deleteIntegration - Represents a delete integration.
    **/
    deleteIntegration(req: operations.DeleteIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIntegrationResponse>;
    /**
     * deleteIntegrationResponse - Represents a delete integration response.
    **/
    deleteIntegrationResponse(req: operations.DeleteIntegrationResponseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIntegrationResponseResponse>;
    /**
     * deleteMethod - Deletes an existing <a>Method</a> resource.
    **/
    deleteMethod(req: operations.DeleteMethodRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMethodResponse>;
    /**
     * deleteMethodResponse - Deletes an existing <a>MethodResponse</a> resource.
    **/
    deleteMethodResponse(req: operations.DeleteMethodResponseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMethodResponseResponse>;
    /**
     * deleteModel - Deletes a model.
    **/
    deleteModel(req: operations.DeleteModelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelResponse>;
    /**
     * deleteRequestValidator - Deletes a <a>RequestValidator</a> of a given <a>RestApi</a>.
    **/
    deleteRequestValidator(req: operations.DeleteRequestValidatorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRequestValidatorResponse>;
    /**
     * deleteResource - Deletes a <a>Resource</a> resource.
    **/
    deleteResource(req: operations.DeleteResourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourceResponse>;
    /**
     * deleteRestApi - Deletes the specified API.
    **/
    deleteRestApi(req: operations.DeleteRestApiRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRestApiResponse>;
    /**
     * deleteStage - Deletes a <a>Stage</a> resource.
    **/
    deleteStage(req: operations.DeleteStageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStageResponse>;
    /**
     * deleteUsagePlan - Deletes a usage plan of a given plan Id.
    **/
    deleteUsagePlan(req: operations.DeleteUsagePlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsagePlanResponse>;
    /**
     * deleteUsagePlanKey - Deletes a usage plan key and remove the underlying API key from the associated usage plan.
    **/
    deleteUsagePlanKey(req: operations.DeleteUsagePlanKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsagePlanKeyResponse>;
    /**
     * deleteVpcLink - Deletes an existing <a>VpcLink</a> of a specified identifier.
    **/
    deleteVpcLink(req: operations.DeleteVpcLinkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVpcLinkResponse>;
    /**
     * flushStageAuthorizersCache - Flushes all authorizer cache entries on a stage.
    **/
    flushStageAuthorizersCache(req: operations.FlushStageAuthorizersCacheRequest, config?: AxiosRequestConfig): Promise<operations.FlushStageAuthorizersCacheResponse>;
    /**
     * flushStageCache - Flushes a stage's cache.
    **/
    flushStageCache(req: operations.FlushStageCacheRequest, config?: AxiosRequestConfig): Promise<operations.FlushStageCacheResponse>;
    /**
     * generateClientCertificate - Generates a <a>ClientCertificate</a> resource.
    **/
    generateClientCertificate(req: operations.GenerateClientCertificateRequest, config?: AxiosRequestConfig): Promise<operations.GenerateClientCertificateResponse>;
    /**
     * getAccount - Gets information about the current <a>Account</a> resource.
    **/
    getAccount(req: operations.GetAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
    /**
     * getApiKey - Gets information about the current <a>ApiKey</a> resource.
    **/
    getApiKey(req: operations.GetApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetApiKeyResponse>;
    /**
     * getApiKeys - Gets information about the current <a>ApiKeys</a> resource.
    **/
    getApiKeys(req: operations.GetApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetApiKeysResponse>;
    /**
     * getAuthorizer - <p>Describe an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizer.html">AWS CLI</a></div>
    **/
    getAuthorizer(req: operations.GetAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizerResponse>;
    /**
     * getAuthorizers - <p>Describe an existing <a>Authorizers</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizers.html">AWS CLI</a></div>
    **/
    getAuthorizers(req: operations.GetAuthorizersRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizersResponse>;
    /**
     * getBasePathMapping - Describe a <a>BasePathMapping</a> resource.
    **/
    getBasePathMapping(req: operations.GetBasePathMappingRequest, config?: AxiosRequestConfig): Promise<operations.GetBasePathMappingResponse>;
    /**
     * getBasePathMappings - Represents a collection of <a>BasePathMapping</a> resources.
    **/
    getBasePathMappings(req: operations.GetBasePathMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetBasePathMappingsResponse>;
    /**
     * getClientCertificate - Gets information about the current <a>ClientCertificate</a> resource.
    **/
    getClientCertificate(req: operations.GetClientCertificateRequest, config?: AxiosRequestConfig): Promise<operations.GetClientCertificateResponse>;
    /**
     * getClientCertificates - Gets a collection of <a>ClientCertificate</a> resources.
    **/
    getClientCertificates(req: operations.GetClientCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.GetClientCertificatesResponse>;
    /**
     * getDeployment - Gets information about a <a>Deployment</a> resource.
    **/
    getDeployment(req: operations.GetDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentResponse>;
    /**
     * getDeployments - Gets information about a <a>Deployments</a> collection.
    **/
    getDeployments(req: operations.GetDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentsResponse>;
    getDocumentationPart(req: operations.GetDocumentationPartRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentationPartResponse>;
    getDocumentationParts(req: operations.GetDocumentationPartsRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentationPartsResponse>;
    getDocumentationVersion(req: operations.GetDocumentationVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentationVersionResponse>;
    getDocumentationVersions(req: operations.GetDocumentationVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentationVersionsResponse>;
    /**
     * getDomainName - Represents a domain name that is contained in a simpler, more intuitive URL that can be called.
    **/
    getDomainName(req: operations.GetDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainNameResponse>;
    /**
     * getDomainNames - Represents a collection of <a>DomainName</a> resources.
    **/
    getDomainNames(req: operations.GetDomainNamesRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainNamesResponse>;
    /**
     * getExport - Exports a deployed version of a <a>RestApi</a> in a specified format.
    **/
    getExport(req: operations.GetExportRequest, config?: AxiosRequestConfig): Promise<operations.GetExportResponse>;
    /**
     * getGatewayResponse - Gets a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.
    **/
    getGatewayResponse(req: operations.GetGatewayResponseRequest, config?: AxiosRequestConfig): Promise<operations.GetGatewayResponseResponse>;
    /**
     * getGatewayResponses - Gets the <a>GatewayResponses</a> collection on the given <a>RestApi</a>. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default <a>GatewayResponses</a> collection for the supported response types.
    **/
    getGatewayResponses(req: operations.GetGatewayResponsesRequest, config?: AxiosRequestConfig): Promise<operations.GetGatewayResponsesResponse>;
    /**
     * getIntegration - Get the integration settings.
    **/
    getIntegration(req: operations.GetIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationResponse>;
    /**
     * getIntegrationResponse - Represents a get integration response.
    **/
    getIntegrationResponse(req: operations.GetIntegrationResponseRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationResponseResponse>;
    /**
     * getMethod - Describe an existing <a>Method</a> resource.
    **/
    getMethod(req: operations.GetMethodRequest, config?: AxiosRequestConfig): Promise<operations.GetMethodResponse>;
    /**
     * getMethodResponse - Describes a <a>MethodResponse</a> resource.
    **/
    getMethodResponse(req: operations.GetMethodResponseRequest, config?: AxiosRequestConfig): Promise<operations.GetMethodResponseResponse>;
    /**
     * getModel - Describes an existing model defined for a <a>RestApi</a> resource.
    **/
    getModel(req: operations.GetModelRequest, config?: AxiosRequestConfig): Promise<operations.GetModelResponse>;
    /**
     * getModelTemplate - Generates a sample mapping template that can be used to transform a payload into the structure of a model.
    **/
    getModelTemplate(req: operations.GetModelTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetModelTemplateResponse>;
    /**
     * getModels - Describes existing <a>Models</a> defined for a <a>RestApi</a> resource.
    **/
    getModels(req: operations.GetModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetModelsResponse>;
    /**
     * getRequestValidator - Gets a <a>RequestValidator</a> of a given <a>RestApi</a>.
    **/
    getRequestValidator(req: operations.GetRequestValidatorRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestValidatorResponse>;
    /**
     * getRequestValidators - Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.
    **/
    getRequestValidators(req: operations.GetRequestValidatorsRequest, config?: AxiosRequestConfig): Promise<operations.GetRequestValidatorsResponse>;
    /**
     * getResource - Lists information about a resource.
    **/
    getResource(req: operations.GetResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceResponse>;
    /**
     * getResources - Lists information about a collection of <a>Resource</a> resources.
    **/
    getResources(req: operations.GetResourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesResponse>;
    /**
     * getRestApi - Lists the <a>RestApi</a> resource in the collection.
    **/
    getRestApi(req: operations.GetRestApiRequest, config?: AxiosRequestConfig): Promise<operations.GetRestApiResponse>;
    /**
     * getRestApis - Lists the <a>RestApis</a> resources for your collection.
    **/
    getRestApis(req: operations.GetRestApisRequest, config?: AxiosRequestConfig): Promise<operations.GetRestApisResponse>;
    /**
     * getSdk - Generates a client SDK for a <a>RestApi</a> and <a>Stage</a>.
    **/
    getSdk(req: operations.GetSDKRequest, config?: AxiosRequestConfig): Promise<operations.GetSDKResponse>;
    getSdkType(req: operations.GetSDKTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetSDKTypeResponse>;
    getSdkTypes(req: operations.GetSDKTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetSDKTypesResponse>;
    /**
     * getStage - Gets information about a <a>Stage</a> resource.
    **/
    getStage(req: operations.GetStageRequest, config?: AxiosRequestConfig): Promise<operations.GetStageResponse>;
    /**
     * getStages - Gets information about one or more <a>Stage</a> resources.
    **/
    getStages(req: operations.GetStagesRequest, config?: AxiosRequestConfig): Promise<operations.GetStagesResponse>;
    /**
     * getTags - Gets the <a>Tags</a> collection for a given resource.
    **/
    getTags(req: operations.GetTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsResponse>;
    /**
     * getUsage - Gets the usage data of a usage plan in a specified time interval.
    **/
    getUsage(req: operations.GetUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetUsageResponse>;
    /**
     * getUsagePlan - Gets a usage plan of a given plan identifier.
    **/
    getUsagePlan(req: operations.GetUsagePlanRequest, config?: AxiosRequestConfig): Promise<operations.GetUsagePlanResponse>;
    /**
     * getUsagePlanKey - Gets a usage plan key of a given key identifier.
    **/
    getUsagePlanKey(req: operations.GetUsagePlanKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetUsagePlanKeyResponse>;
    /**
     * getUsagePlanKeys - Gets all the usage plan keys representing the API keys added to a specified usage plan.
    **/
    getUsagePlanKeys(req: operations.GetUsagePlanKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetUsagePlanKeysResponse>;
    /**
     * getUsagePlans - Gets all the usage plans of the caller's account.
    **/
    getUsagePlans(req: operations.GetUsagePlansRequest, config?: AxiosRequestConfig): Promise<operations.GetUsagePlansResponse>;
    /**
     * getVpcLink - Gets a specified VPC link under the caller's account in a region.
    **/
    getVpcLink(req: operations.GetVpcLinkRequest, config?: AxiosRequestConfig): Promise<operations.GetVpcLinkResponse>;
    /**
     * getVpcLinks - Gets the <a>VpcLinks</a> collection under the caller's account in a selected region.
    **/
    getVpcLinks(req: operations.GetVpcLinksRequest, config?: AxiosRequestConfig): Promise<operations.GetVpcLinksResponse>;
    /**
     * importApiKeys - Import API keys from an external source, such as a CSV-formatted file.
    **/
    importApiKeys(req: operations.ImportApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.ImportApiKeysResponse>;
    importDocumentationParts(req: operations.ImportDocumentationPartsRequest, config?: AxiosRequestConfig): Promise<operations.ImportDocumentationPartsResponse>;
    /**
     * importRestApi - A feature of the API Gateway control service for creating a new API from an external API definition file.
    **/
    importRestApi(req: operations.ImportRestApiRequest, config?: AxiosRequestConfig): Promise<operations.ImportRestApiResponse>;
    /**
     * putGatewayResponse - Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.
    **/
    putGatewayResponse(req: operations.PutGatewayResponseRequest, config?: AxiosRequestConfig): Promise<operations.PutGatewayResponseResponse>;
    /**
     * putIntegration - Sets up a method's integration.
    **/
    putIntegration(req: operations.PutIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.PutIntegrationResponse>;
    /**
     * putIntegrationResponse - Represents a put integration.
    **/
    putIntegrationResponse(req: operations.PutIntegrationResponseRequest, config?: AxiosRequestConfig): Promise<operations.PutIntegrationResponseResponse>;
    /**
     * putMethod - Add a method to an existing <a>Resource</a> resource.
    **/
    putMethod(req: operations.PutMethodRequest, config?: AxiosRequestConfig): Promise<operations.PutMethodResponse>;
    /**
     * putMethodResponse - Adds a <a>MethodResponse</a> to an existing <a>Method</a> resource.
    **/
    putMethodResponse(req: operations.PutMethodResponseRequest, config?: AxiosRequestConfig): Promise<operations.PutMethodResponseResponse>;
    /**
     * putRestApi - A feature of the API Gateway control service for updating an existing API with an input of external API definitions. The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.
    **/
    putRestApi(req: operations.PutRestApiRequest, config?: AxiosRequestConfig): Promise<operations.PutRestApiResponse>;
    /**
     * tagResource - Adds or updates a tag on a given resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * testInvokeAuthorizer - <p>Simulate the execution of an <a>Authorizer</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
    **/
    testInvokeAuthorizer(req: operations.TestInvokeAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.TestInvokeAuthorizerResponse>;
    /**
     * testInvokeMethod - Simulate the execution of a <a>Method</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.
    **/
    testInvokeMethod(req: operations.TestInvokeMethodRequest, config?: AxiosRequestConfig): Promise<operations.TestInvokeMethodResponse>;
    /**
     * untagResource - Removes a tag from a given resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateAccount - Changes information about the current <a>Account</a> resource.
    **/
    updateAccount(req: operations.UpdateAccountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccountResponse>;
    /**
     * updateApiKey - Changes information about an <a>ApiKey</a> resource.
    **/
    updateApiKey(req: operations.UpdateApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApiKeyResponse>;
    /**
     * updateAuthorizer - <p>Updates an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/update-authorizer.html">AWS CLI</a></div>
    **/
    updateAuthorizer(req: operations.UpdateAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAuthorizerResponse>;
    /**
     * updateBasePathMapping - Changes information about the <a>BasePathMapping</a> resource.
    **/
    updateBasePathMapping(req: operations.UpdateBasePathMappingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBasePathMappingResponse>;
    /**
     * updateClientCertificate - Changes information about an <a>ClientCertificate</a> resource.
    **/
    updateClientCertificate(req: operations.UpdateClientCertificateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClientCertificateResponse>;
    /**
     * updateDeployment - Changes information about a <a>Deployment</a> resource.
    **/
    updateDeployment(req: operations.UpdateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeploymentResponse>;
    updateDocumentationPart(req: operations.UpdateDocumentationPartRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDocumentationPartResponse>;
    updateDocumentationVersion(req: operations.UpdateDocumentationVersionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDocumentationVersionResponse>;
    /**
     * updateDomainName - Changes information about the <a>DomainName</a> resource.
    **/
    updateDomainName(req: operations.UpdateDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainNameResponse>;
    /**
     * updateGatewayResponse - Updates a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.
    **/
    updateGatewayResponse(req: operations.UpdateGatewayResponseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGatewayResponseResponse>;
    /**
     * updateIntegration - Represents an update integration.
    **/
    updateIntegration(req: operations.UpdateIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIntegrationResponse>;
    /**
     * updateIntegrationResponse - Represents an update integration response.
    **/
    updateIntegrationResponse(req: operations.UpdateIntegrationResponseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIntegrationResponseResponse>;
    /**
     * updateMethod - Updates an existing <a>Method</a> resource.
    **/
    updateMethod(req: operations.UpdateMethodRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMethodResponse>;
    /**
     * updateMethodResponse - Updates an existing <a>MethodResponse</a> resource.
    **/
    updateMethodResponse(req: operations.UpdateMethodResponseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMethodResponseResponse>;
    /**
     * updateModel - Changes information about a model.
    **/
    updateModel(req: operations.UpdateModelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateModelResponse>;
    /**
     * updateRequestValidator - Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.
    **/
    updateRequestValidator(req: operations.UpdateRequestValidatorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRequestValidatorResponse>;
    /**
     * updateResource - Changes information about a <a>Resource</a> resource.
    **/
    updateResource(req: operations.UpdateResourceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResourceResponse>;
    /**
     * updateRestApi - Changes information about the specified API.
    **/
    updateRestApi(req: operations.UpdateRestApiRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRestApiResponse>;
    /**
     * updateStage - Changes information about a <a>Stage</a> resource.
    **/
    updateStage(req: operations.UpdateStageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStageResponse>;
    /**
     * updateUsage - Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.
    **/
    updateUsage(req: operations.UpdateUsageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUsageResponse>;
    /**
     * updateUsagePlan - Updates a usage plan of a given plan Id.
    **/
    updateUsagePlan(req: operations.UpdateUsagePlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUsagePlanResponse>;
    /**
     * updateVpcLink - Updates an existing <a>VpcLink</a> of a specified identifier.
    **/
    updateVpcLink(req: operations.UpdateVpcLinkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVpcLinkResponse>;
}
export {};
