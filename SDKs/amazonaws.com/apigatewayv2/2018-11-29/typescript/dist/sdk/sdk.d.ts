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
     * createApi - Creates an Api resource.
    **/
    createApi(req: operations.CreateApiRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiResponse>;
    /**
     * createApiMapping - Creates an API mapping.
    **/
    createApiMapping(req: operations.CreateApiMappingRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiMappingResponse>;
    /**
     * createAuthorizer - Creates an Authorizer for an API.
    **/
    createAuthorizer(req: operations.CreateAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.CreateAuthorizerResponse>;
    /**
     * createDeployment - Creates a Deployment for an API.
    **/
    createDeployment(req: operations.CreateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentResponse>;
    /**
     * createDomainName - Creates a domain name.
    **/
    createDomainName(req: operations.CreateDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainNameResponse>;
    /**
     * createIntegration - Creates an Integration.
    **/
    createIntegration(req: operations.CreateIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.CreateIntegrationResponse>;
    /**
     * createIntegrationResponse - Creates an IntegrationResponses.
    **/
    createIntegrationResponse(req: operations.CreateIntegrationResponseRequest, config?: AxiosRequestConfig): Promise<operations.CreateIntegrationResponseResponse>;
    /**
     * createModel - Creates a Model for an API.
    **/
    createModel(req: operations.CreateModelRequest, config?: AxiosRequestConfig): Promise<operations.CreateModelResponse>;
    /**
     * createRoute - Creates a Route for an API.
    **/
    createRoute(req: operations.CreateRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateRouteResponse>;
    /**
     * createRouteResponse - Creates a RouteResponse for a Route.
    **/
    createRouteResponse(req: operations.CreateRouteResponseRequest, config?: AxiosRequestConfig): Promise<operations.CreateRouteResponseResponse>;
    /**
     * createStage - Creates a Stage for an API.
    **/
    createStage(req: operations.CreateStageRequest, config?: AxiosRequestConfig): Promise<operations.CreateStageResponse>;
    /**
     * createVpcLink - Creates a VPC link.
    **/
    createVpcLink(req: operations.CreateVpcLinkRequest, config?: AxiosRequestConfig): Promise<operations.CreateVpcLinkResponse>;
    /**
     * deleteAccessLogSettings - Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.
    **/
    deleteAccessLogSettings(req: operations.DeleteAccessLogSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccessLogSettingsResponse>;
    /**
     * deleteApi - Deletes an Api resource.
    **/
    deleteApi(req: operations.DeleteApiRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiResponse>;
    /**
     * deleteApiMapping - Deletes an API mapping.
    **/
    deleteApiMapping(req: operations.DeleteApiMappingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiMappingResponse>;
    /**
     * deleteAuthorizer - Deletes an Authorizer.
    **/
    deleteAuthorizer(req: operations.DeleteAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAuthorizerResponse>;
    /**
     * deleteCorsConfiguration - Deletes a CORS configuration.
    **/
    deleteCorsConfiguration(req: operations.DeleteCorsConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCorsConfigurationResponse>;
    /**
     * deleteDeployment - Deletes a Deployment.
    **/
    deleteDeployment(req: operations.DeleteDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeploymentResponse>;
    /**
     * deleteDomainName - Deletes a domain name.
    **/
    deleteDomainName(req: operations.DeleteDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainNameResponse>;
    /**
     * deleteIntegration - Deletes an Integration.
    **/
    deleteIntegration(req: operations.DeleteIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIntegrationResponse>;
    /**
     * deleteIntegrationResponse - Deletes an IntegrationResponses.
    **/
    deleteIntegrationResponse(req: operations.DeleteIntegrationResponseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIntegrationResponseResponse>;
    /**
     * deleteModel - Deletes a Model.
    **/
    deleteModel(req: operations.DeleteModelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelResponse>;
    /**
     * deleteRoute - Deletes a Route.
    **/
    deleteRoute(req: operations.DeleteRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRouteResponse>;
    /**
     * deleteRouteRequestParameter - Deletes a route request parameter.
    **/
    deleteRouteRequestParameter(req: operations.DeleteRouteRequestParameterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRouteRequestParameterResponse>;
    /**
     * deleteRouteResponse - Deletes a RouteResponse.
    **/
    deleteRouteResponse(req: operations.DeleteRouteResponseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRouteResponseResponse>;
    /**
     * deleteRouteSettings - Deletes the RouteSettings for a stage.
    **/
    deleteRouteSettings(req: operations.DeleteRouteSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRouteSettingsResponse>;
    /**
     * deleteStage - Deletes a Stage.
    **/
    deleteStage(req: operations.DeleteStageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStageResponse>;
    /**
     * deleteVpcLink - Deletes a VPC link.
    **/
    deleteVpcLink(req: operations.DeleteVpcLinkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVpcLinkResponse>;
    exportApi(req: operations.ExportApiRequest, config?: AxiosRequestConfig): Promise<operations.ExportApiResponse>;
    /**
     * getApi - Gets an Api resource.
    **/
    getApi(req: operations.GetApiRequest, config?: AxiosRequestConfig): Promise<operations.GetApiResponse>;
    /**
     * getApiMapping - Gets an API mapping.
    **/
    getApiMapping(req: operations.GetApiMappingRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMappingResponse>;
    /**
     * getApiMappings - Gets API mappings.
    **/
    getApiMappings(req: operations.GetApiMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMappingsResponse>;
    /**
     * getApis - Gets a collection of Api resources.
    **/
    getApis(req: operations.GetApisRequest, config?: AxiosRequestConfig): Promise<operations.GetApisResponse>;
    /**
     * getAuthorizer - Gets an Authorizer.
    **/
    getAuthorizer(req: operations.GetAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizerResponse>;
    /**
     * getAuthorizers - Gets the Authorizers for an API.
    **/
    getAuthorizers(req: operations.GetAuthorizersRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizersResponse>;
    /**
     * getDeployment - Gets a Deployment.
    **/
    getDeployment(req: operations.GetDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentResponse>;
    /**
     * getDeployments - Gets the Deployments for an API.
    **/
    getDeployments(req: operations.GetDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentsResponse>;
    /**
     * getDomainName - Gets a domain name.
    **/
    getDomainName(req: operations.GetDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainNameResponse>;
    /**
     * getDomainNames - Gets the domain names for an AWS account.
    **/
    getDomainNames(req: operations.GetDomainNamesRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainNamesResponse>;
    /**
     * getIntegration - Gets an Integration.
    **/
    getIntegration(req: operations.GetIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationResponse>;
    /**
     * getIntegrationResponse - Gets an IntegrationResponses.
    **/
    getIntegrationResponse(req: operations.GetIntegrationResponseRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationResponseResponse>;
    /**
     * getIntegrationResponses - Gets the IntegrationResponses for an Integration.
    **/
    getIntegrationResponses(req: operations.GetIntegrationResponsesRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationResponsesResponse>;
    /**
     * getIntegrations - Gets the Integrations for an API.
    **/
    getIntegrations(req: operations.GetIntegrationsRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationsResponse>;
    /**
     * getModel - Gets a Model.
    **/
    getModel(req: operations.GetModelRequest, config?: AxiosRequestConfig): Promise<operations.GetModelResponse>;
    /**
     * getModelTemplate - Gets a model template.
    **/
    getModelTemplate(req: operations.GetModelTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetModelTemplateResponse>;
    /**
     * getModels - Gets the Models for an API.
    **/
    getModels(req: operations.GetModelsRequest, config?: AxiosRequestConfig): Promise<operations.GetModelsResponse>;
    /**
     * getRoute - Gets a Route.
    **/
    getRoute(req: operations.GetRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetRouteResponse>;
    /**
     * getRouteResponse - Gets a RouteResponse.
    **/
    getRouteResponse(req: operations.GetRouteResponseRequest, config?: AxiosRequestConfig): Promise<operations.GetRouteResponseResponse>;
    /**
     * getRouteResponses - Gets the RouteResponses for a Route.
    **/
    getRouteResponses(req: operations.GetRouteResponsesRequest, config?: AxiosRequestConfig): Promise<operations.GetRouteResponsesResponse>;
    /**
     * getRoutes - Gets the Routes for an API.
    **/
    getRoutes(req: operations.GetRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetRoutesResponse>;
    /**
     * getStage - Gets a Stage.
    **/
    getStage(req: operations.GetStageRequest, config?: AxiosRequestConfig): Promise<operations.GetStageResponse>;
    /**
     * getStages - Gets the Stages for an API.
    **/
    getStages(req: operations.GetStagesRequest, config?: AxiosRequestConfig): Promise<operations.GetStagesResponse>;
    /**
     * getTags - Gets a collection of Tag resources.
    **/
    getTags(req: operations.GetTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsResponse>;
    /**
     * getVpcLink - Gets a VPC link.
    **/
    getVpcLink(req: operations.GetVpcLinkRequest, config?: AxiosRequestConfig): Promise<operations.GetVpcLinkResponse>;
    /**
     * getVpcLinks - Gets a collection of VPC links.
    **/
    getVpcLinks(req: operations.GetVpcLinksRequest, config?: AxiosRequestConfig): Promise<operations.GetVpcLinksResponse>;
    /**
     * importApi - Imports an API.
    **/
    importApi(req: operations.ImportApiRequest, config?: AxiosRequestConfig): Promise<operations.ImportApiResponse>;
    /**
     * reimportApi - Puts an Api resource.
    **/
    reimportApi(req: operations.ReimportApiRequest, config?: AxiosRequestConfig): Promise<operations.ReimportApiResponse>;
    /**
     * resetAuthorizersCache - Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.
    **/
    resetAuthorizersCache(req: operations.ResetAuthorizersCacheRequest, config?: AxiosRequestConfig): Promise<operations.ResetAuthorizersCacheResponse>;
    /**
     * tagResource - Creates a new Tag resource to represent a tag.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Deletes a Tag.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateApi - Updates an Api resource.
    **/
    updateApi(req: operations.UpdateApiRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApiResponse>;
    /**
     * updateApiMapping - The API mapping.
    **/
    updateApiMapping(req: operations.UpdateApiMappingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApiMappingResponse>;
    /**
     * updateAuthorizer - Updates an Authorizer.
    **/
    updateAuthorizer(req: operations.UpdateAuthorizerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAuthorizerResponse>;
    /**
     * updateDeployment - Updates a Deployment.
    **/
    updateDeployment(req: operations.UpdateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeploymentResponse>;
    /**
     * updateDomainName - Updates a domain name.
    **/
    updateDomainName(req: operations.UpdateDomainNameRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainNameResponse>;
    /**
     * updateIntegration - Updates an Integration.
    **/
    updateIntegration(req: operations.UpdateIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIntegrationResponse>;
    /**
     * updateIntegrationResponse - Updates an IntegrationResponses.
    **/
    updateIntegrationResponse(req: operations.UpdateIntegrationResponseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIntegrationResponseResponse>;
    /**
     * updateModel - Updates a Model.
    **/
    updateModel(req: operations.UpdateModelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateModelResponse>;
    /**
     * updateRoute - Updates a Route.
    **/
    updateRoute(req: operations.UpdateRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRouteResponse>;
    /**
     * updateRouteResponse - Updates a RouteResponse.
    **/
    updateRouteResponse(req: operations.UpdateRouteResponseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRouteResponseResponse>;
    /**
     * updateStage - Updates a Stage.
    **/
    updateStage(req: operations.UpdateStageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStageResponse>;
    /**
     * updateVpcLink - Updates a VPC link.
    **/
    updateVpcLink(req: operations.UpdateVpcLinkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVpcLinkResponse>;
}
export {};
