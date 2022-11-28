import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://secure.agco-ats.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * activitiesDeleteActivity - Mark the delete flag for the Activity
     *
     * Deletes an Activity. When successful, the response is empty.  If unsuccessful, an appropriate
     *             ApiError is returned.
    **/
    activitiesDeleteActivity(req: operations.ActivitiesDeleteActivityRequest, config?: AxiosRequestConfig): Promise<operations.ActivitiesDeleteActivityResponse>;
    /**
     * activitiesGetActivities - Get Activities
     *
     * Gets a collection of Activities. When successful, the response is a PagedResponse of Activities.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    activitiesGetActivities(req: operations.ActivitiesGetActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.ActivitiesGetActivitiesResponse>;
    /**
     * activitiesGetActivity - Get an Activity by ID
     *
     * Gets an Activity by ID. When successful, the response is the requested Activity.  If unsuccessful,
     *             an appropriate ApiError is returned.
    **/
    activitiesGetActivity(req: operations.ActivitiesGetActivityRequest, config?: AxiosRequestConfig): Promise<operations.ActivitiesGetActivityResponse>;
    /**
     * activitiesPostActivity - Create an Activity
     *
     * Creates an Activity.  The body of the POST is the Activity to create.  The ActivityID will be assigned
     *             on creation of the Activity.  When successful, the response is the ActivityID.  If unsuccessful, an
     *             appropriate ApiError is returned.
    **/
    activitiesPostActivity(req: operations.ActivitiesPostActivityRequest, config?: AxiosRequestConfig): Promise<operations.ActivitiesPostActivityResponse>;
    /**
     * activitiesPutActivity - Update an Activity
     *
     * Updates an Activity.  The body of the PUT is the updated Activity.  When successful, the response is empty.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    activitiesPutActivity(req: operations.ActivitiesPutActivityRequest, config?: AxiosRequestConfig): Promise<operations.ActivitiesPutActivityResponse>;
    /**
     * activityRunsGetActivityRun - Get an ActivityRun by ID
     *
     * Gets an ActivityRun by ID. When successful, the response is the requested ActivityRun.  If unsuccessful,
     *             an appropriate ApiError is returned.
    **/
    activityRunsGetActivityRun(req: operations.ActivityRunsGetActivityRunRequest, config?: AxiosRequestConfig): Promise<operations.ActivityRunsGetActivityRunResponse>;
    /**
     * activityRunsGetActivityRunStatus - Get the ActivityRunStatus of an ActivityRun
     *
     * Gets the ActivityRunStatus of an ActivityRun.  When successful, the response is the requested ActivityRunStatus.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    activityRunsGetActivityRunStatus(req: operations.ActivityRunsGetActivityRunStatusRequest, config?: AxiosRequestConfig): Promise<operations.ActivityRunsGetActivityRunStatusResponse>;
    /**
     * activityRunsGetActivityRuns - Get ActivityRuns
     *
     * Gets a collection of ActivityRuns. When successful, the response is a PagedResponse of ActivityRuns.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    activityRunsGetActivityRuns(req: operations.ActivityRunsGetActivityRunsRequest, config?: AxiosRequestConfig): Promise<operations.ActivityRunsGetActivityRunsResponse>;
    /**
     * activityRunsPutActivityRun - Update an ActivityRun
     *
     * Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.
     *             When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
    **/
    activityRunsPutActivityRun(req: operations.ActivityRunsPutActivityRunRequest, config?: AxiosRequestConfig): Promise<operations.ActivityRunsPutActivityRunResponse>;
    /**
     * activityRunsPutActivityRunStatus - Update the ActivityRunStatus of an ActivityRun
     *
     * Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.
     *             When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
    **/
    activityRunsPutActivityRunStatus(req: operations.ActivityRunsPutActivityRunStatusRequest, config?: AxiosRequestConfig): Promise<operations.ActivityRunsPutActivityRunStatusResponse>;
    /**
     * aftermarketServicesGetCerts - No Documentation Found.
     *
     * No Documentation Found.
    **/
    aftermarketServicesGetCerts(config?: AxiosRequestConfig): Promise<operations.AftermarketServicesGetCertsResponse>;
    /**
     * aftermarketServicesGetConnectionStatus - Check whether there is connectivity to AGCO Power Web Services
     *
     * No Documentation Found.
    **/
    aftermarketServicesGetConnectionStatus(config?: AxiosRequestConfig): Promise<operations.AftermarketServicesGetConnectionStatusResponse>;
    /**
     * aftermarketServicesGetEngineIqaCodes - Get injector codes given engine.
     *
     * No Documentation Found.
    **/
    aftermarketServicesGetEngineIqaCodes(req: operations.AftermarketServicesGetEngineIqaCodesRequest, config?: AxiosRequestConfig): Promise<operations.AftermarketServicesGetEngineIqaCodesResponse>;
    /**
     * aftermarketServicesGetProductionData - Get production calibration data for given engine.
     *
     * No Documentation Found.
    **/
    aftermarketServicesGetProductionData(req: operations.AftermarketServicesGetProductionDataRequest, config?: AxiosRequestConfig): Promise<operations.AftermarketServicesGetProductionDataResponse>;
    /**
     * aftermarketServicesGetUserStatus - Retrieve the status of an EDT Kit Registration with AGCO Power Web Services
     *
     * No Documentation Found.
    **/
    aftermarketServicesGetUserStatus(req: operations.AftermarketServicesGetUserStatusRequest, config?: AxiosRequestConfig): Promise<operations.AftermarketServicesGetUserStatusResponse>;
    /**
     * aftermarketServicesPutEcu - Activate or Deactivate an ECU, or Report an ECU as Damaged.
     *
     * No Documentation Found.
    **/
    aftermarketServicesPutEcu(req: operations.AftermarketServicesPutEcuRequest, config?: AxiosRequestConfig): Promise<operations.AftermarketServicesPutEcuResponse>;
    /**
     * aftermarketServicesUpdateUserStatus - Update the status of an EDT Kit Registration with AGCO Power Web Services
     *
     * No Documentation Found.
    **/
    aftermarketServicesUpdateUserStatus(req: operations.AftermarketServicesUpdateUserStatusRequest, config?: AxiosRequestConfig): Promise<operations.AftermarketServicesUpdateUserStatusResponse>;
    /**
     * agentsDeleteAgent - Delete an Agent
     *
     * Deletes an Agent. When successful, the response is empty.  If unsuccessful, an appropriate
     *             ApiError is returned.
    **/
    agentsDeleteAgent(req: operations.AgentsDeleteAgentRequest, config?: AxiosRequestConfig): Promise<operations.AgentsDeleteAgentResponse>;
    /**
     * agentsGetAgentActivityRun - Get an Agent's ActivityRun
     *
     * Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun
     *             assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.
    **/
    agentsGetAgentActivityRun(req: operations.AgentsGetAgentActivityRunRequest, config?: AxiosRequestConfig): Promise<operations.AgentsGetAgentActivityRunResponse>;
    /**
     * agentsGetAgentAsync - Get Agent
     *
     * Gets an Agent by ID. When successful, the response is the requested Agent.  If unsuccessful,
     *             an appropriate ApiError is returned.
    **/
    agentsGetAgentAsync(req: operations.AgentsGetAgentAsyncRequest, config?: AxiosRequestConfig): Promise<operations.AgentsGetAgentAsyncResponse>;
    /**
     * agentsGetAgents - Get Agents
     *
     * Gets a collection of Agents. When successful, the response is a PagedResponse of Agents.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    agentsGetAgents(req: operations.AgentsGetAgentsRequest, config?: AxiosRequestConfig): Promise<operations.AgentsGetAgentsResponse>;
    /**
     * agentsGetCurrentAgentActivityRun - Get the ActivityRun of Agent associated with the current user
     *
     * Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun
     *             assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.
    **/
    agentsGetCurrentAgentActivityRun(config?: AxiosRequestConfig): Promise<operations.AgentsGetCurrentAgentActivityRunResponse>;
    /**
     * agentsGetCurrentAgentAsync - Get Agent associated with the current user
     *
     * Gets the Agent associated with the current user. When successful, the response is the requested Agent.  If unsuccessful,
     *             an appropriate ApiError is returned.
    **/
    agentsGetCurrentAgentAsync(config?: AxiosRequestConfig): Promise<operations.AgentsGetCurrentAgentAsyncResponse>;
    /**
     * agentsPostAgent - Create an Agent
     *
     * Creates an Agent.  The body of the POST is the Agent to create.  The AgentID will be assigned
     *             on creation of the Agent.  When successful, the response is the AgentID.  If unsuccessful, an
     *             appropriate ApiError is returned.
    **/
    agentsPostAgent(req: operations.AgentsPostAgentRequest, config?: AxiosRequestConfig): Promise<operations.AgentsPostAgentResponse>;
    /**
     * agentsPutAgent - Update an Agent
     *
     * Updates an Agent.  The body of the PUT is the updated Agent.  When successful, the response is empty.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    agentsPutAgent(req: operations.AgentsPutAgentRequest, config?: AxiosRequestConfig): Promise<operations.AgentsPutAgentResponse>;
    /**
     * agentsPutAgentActivityRun - Update the ActivityRun assigned to the Agent.
     *
     * No Documentation Found.
    **/
    agentsPutAgentActivityRun(req: operations.AgentsPutAgentActivityRunRequest, config?: AxiosRequestConfig): Promise<operations.AgentsPutAgentActivityRunResponse>;
    /**
     * agentsPutAgentStatus - Update an Agent
     *
     * Updates the status of an Agent.The body of the PUT is the updated Agent status.  When successful,
     *             the response is empty.If unsuccessful, an appropriate ApiError is returned.
    **/
    agentsPutAgentStatus(req: operations.AgentsPutAgentStatusRequest, config?: AxiosRequestConfig): Promise<operations.AgentsPutAgentStatusResponse>;
    /**
     * authenticationDefault - Authenticate a user.
     *
     * No Documentation Found.
    **/
    authenticationDefault(req: operations.AuthenticationDefaultRequest, config?: AxiosRequestConfig): Promise<operations.AuthenticationDefaultResponse>;
    /**
     * authenticationIsAlive - Acknowledges the connection to the API
     *
     * No Documentation Found.
    **/
    authenticationIsAlive(config?: AxiosRequestConfig): Promise<operations.AuthenticationIsAliveResponse>;
    /**
     * authenticationPutManageTokens - Manage API tokens.
     *
     * No Documentation Found.
    **/
    authenticationPutManageTokens(req: operations.AuthenticationPutManageTokensRequest, config?: AxiosRequestConfig): Promise<operations.AuthenticationPutManageTokensResponse>;
    /**
     * authenticationRequestPasswordReset - Request a password reset.
     *
     * No Documentation Found.
    **/
    authenticationRequestPasswordReset(req: operations.AuthenticationRequestPasswordResetRequest, config?: AxiosRequestConfig): Promise<operations.AuthenticationRequestPasswordResetResponse>;
    /**
     * authenticationResetPasword - Reset a password
     *
     * No Documentation Found.
    **/
    authenticationResetPasword(req: operations.AuthenticationResetPaswordRequest, config?: AxiosRequestConfig): Promise<operations.AuthenticationResetPaswordResponse>;
    /**
     * authorizationCategoriesAddUser - Add a category that a user can see.
     *
     * No Documentation Found.
    **/
    authorizationCategoriesAddUser(req: operations.AuthorizationCategoriesAddUserRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCategoriesAddUserResponse>;
    /**
     * authorizationCategoriesDelete - Remove an authorization category.
     *
     * No Documentation Found.
    **/
    authorizationCategoriesDelete(req: operations.AuthorizationCategoriesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCategoriesDeleteResponse>;
    /**
     * authorizationCategoriesGet - Get authorization categories.
     *
     * No Documentation Found.
    **/
    authorizationCategoriesGet(req: operations.AuthorizationCategoriesGetRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCategoriesGetResponse>;
    /**
     * authorizationCategoriesGetUsers - Returns a report of access that users have to Authorization Categories.
     *
     * No Documentation Found.
    **/
    authorizationCategoriesGetUsers(req: operations.AuthorizationCategoriesGetUsersRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCategoriesGetUsersResponse>;
    /**
     * authorizationCategoriesPost - Add an authorization category.
     *
     * No Documentation Found.
    **/
    authorizationCategoriesPost(req: operations.AuthorizationCategoriesPostRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCategoriesPostResponse>;
    /**
     * authorizationCategoriesPut - Update an authorization category.
     *
     * No Documentation Found.
    **/
    authorizationCategoriesPut(req: operations.AuthorizationCategoriesPutRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCategoriesPutResponse>;
    /**
     * authorizationCategoriesRemoveUser - Deletes a category a user could see.
     *
     * No Documentation Found.
    **/
    authorizationCategoriesRemoveUser(req: operations.AuthorizationCategoriesRemoveUserRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCategoriesRemoveUserResponse>;
    /**
     * authorizationCodeDefinitionsAddCategoryToDefinition - Add a category to an authorizationCodeDefintion.
     *
     * No Documentation Found.
    **/
    authorizationCodeDefinitionsAddCategoryToDefinition(req: operations.AuthorizationCodeDefinitionsAddCategoryToDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCodeDefinitionsAddCategoryToDefinitionResponse>;
    /**
     * authorizationCodeDefinitionsDeleteAuthorizationCodeDefinition - Disable an authorization code definition
     *
     * No Documentation Found.
    **/
    authorizationCodeDefinitionsDeleteAuthorizationCodeDefinition(req: operations.AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionResponse>;
    /**
     * authorizationCodeDefinitionsGetAuthorizationCodeDefinition - Get authorization code definitions.
     *
     * Additional searches: validationFields[Name]=true and dataFields[Name]=true. These can be used to search for authorization code definitions that have the specified data or validation fields.
    **/
    authorizationCodeDefinitionsGetAuthorizationCodeDefinition(req: operations.AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse>;
    /**
     * authorizationCodeDefinitionsRemoveCategoryFromDefinition - Deletes the category from the authorization code definition.
     *
     * No Documentation Found.
    **/
    authorizationCodeDefinitionsRemoveCategoryFromDefinition(req: operations.AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionResponse>;
    /**
     * authorizationCodesDeleteAuthorizationCode - Hide an authorization code.
     *
     * No Documentation Found.
    **/
    authorizationCodesDeleteAuthorizationCode(req: operations.AuthorizationCodesDeleteAuthorizationCodeRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCodesDeleteAuthorizationCodeResponse>;
    /**
     * authorizationCodesGetAuthorizationCode - Get an authorization code by its ID.
     *
     * No Documentation Found.
    **/
    authorizationCodesGetAuthorizationCode(req: operations.AuthorizationCodesGetAuthorizationCodeRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCodesGetAuthorizationCodeResponse>;
    /**
     * authorizationCodesGetAuthorizationCodes - Get authorization codes.
     *
     * Additional searches: validationParameters[Name]=Value and dataParameters[Name]=Value. These can be used to search for authorization codes that have been generated using specified values for data or validation parameters.
    **/
    authorizationCodesGetAuthorizationCodes(req: operations.AuthorizationCodesGetAuthorizationCodesRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCodesGetAuthorizationCodesResponse>;
    /**
     * authorizationCodesGetContactInformation - Get contact information for an authorization code.
     *
     * No Documentation Found.
    **/
    authorizationCodesGetContactInformation(req: operations.AuthorizationCodesGetContactInformationRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCodesGetContactInformationResponse>;
    /**
     * authorizationCodesValidateAuthorizationCode - No Documentation Found.
     *
     * No Documentation Found.
    **/
    authorizationCodesValidateAuthorizationCode(req: operations.AuthorizationCodesValidateAuthorizationCodeRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationCodesValidateAuthorizationCodeResponse>;
    /**
     * authorizationContactInformationGet - Get contact information for authorization codes.
     *
     * No Documentation Found.
    **/
    authorizationContactInformationGet(req: operations.AuthorizationContactInformationGetRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationContactInformationGetResponse>;
    /**
     * authorizationContactInformationPost - Add contact information for authorization code.
     *
     * No Documentation Found.
    **/
    authorizationContactInformationPost(req: operations.AuthorizationContactInformationPostRequest, config?: AxiosRequestConfig): Promise<operations.AuthorizationContactInformationPostResponse>;
    /**
     * brandsBrands - Gets a list of Brands.
     *
     * No Documentation Found.
    **/
    brandsBrands(config?: AxiosRequestConfig): Promise<operations.BrandsBrandsResponse>;
    /**
     * bundlesDeleteBundle - Delete a Bundle.
     *
     * No Documentation Found.
    **/
    bundlesDeleteBundle(req: operations.BundlesDeleteBundleRequest, config?: AxiosRequestConfig): Promise<operations.BundlesDeleteBundleResponse>;
    /**
     * bundlesGetBundle - Get a specific Bundle by ID.
     *
     * No Documentation Found.
    **/
    bundlesGetBundle(req: operations.BundlesGetBundleRequest, config?: AxiosRequestConfig): Promise<operations.BundlesGetBundleResponse>;
    /**
     * bundlesGetBundles - Get the list of bundles.
     *
     * No Documentation Found.
    **/
    bundlesGetBundles(req: operations.BundlesGetBundlesRequest, config?: AxiosRequestConfig): Promise<operations.BundlesGetBundlesResponse>;
    /**
     * bundlesPostBundle - Add a Bundle to the Update System.
     *
     * No Documentation Found.
    **/
    bundlesPostBundle(req: operations.BundlesPostBundleRequest, config?: AxiosRequestConfig): Promise<operations.BundlesPostBundleResponse>;
    /**
     * bundlesPutBundle - Modify a Bundle in the Update System.
     *
     * No Documentation Found.
    **/
    bundlesPutBundle(req: operations.BundlesPutBundleRequest, config?: AxiosRequestConfig): Promise<operations.BundlesPutBundleResponse>;
    /**
     * clientsGet - Get a List of Clients in the Update System.
     *
     * No Documentation Found.
    **/
    clientsGet(req: operations.ClientsGetRequest, config?: AxiosRequestConfig): Promise<operations.ClientsGetResponse>;
    /**
     * clientsGetAvailableSubscriptions - Get a Client's Available Update Group Subscriptions
     *
     * No Documentation Found.
    **/
    clientsGetAvailableSubscriptions(req: operations.ClientsGetAvailableSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.ClientsGetAvailableSubscriptionsResponse>;
    /**
     * clientsGetSubscriptions - Get a Client's Current Update Group Subscriptions
     *
     * No Documentation Found.
    **/
    clientsGetSubscriptions(req: operations.ClientsGetSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.ClientsGetSubscriptionsResponse>;
    /**
     * clientsPut - Update a Client.
     *
     * No Documentation Found.
    **/
    clientsPut(req: operations.ClientsPutRequest, config?: AxiosRequestConfig): Promise<operations.ClientsPutResponse>;
    /**
     * contentDefinitionsDeleteContentDefinition - Delete a ContentDefinition
     *
     * Deletes an ContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate
     *             ApiError is returned.
    **/
    contentDefinitionsDeleteContentDefinition(req: operations.ContentDefinitionsDeleteContentDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.ContentDefinitionsDeleteContentDefinitionResponse>;
    /**
     * contentDefinitionsDeleteContentDefinitionAttribute - Remove an Attribute from a ContentDefinition
     *
     * No Documentation Found.
    **/
    contentDefinitionsDeleteContentDefinitionAttribute(req: operations.ContentDefinitionsDeleteContentDefinitionAttributeRequest, config?: AxiosRequestConfig): Promise<operations.ContentDefinitionsDeleteContentDefinitionAttributeResponse>;
    /**
     * contentDefinitionsGetContentDefinition - Get a ContentDefinition by ID
     *
     * Gets a ContentDefinition by ID. When successful, the response is the requested ContentDefinition.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    contentDefinitionsGetContentDefinition(req: operations.ContentDefinitionsGetContentDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.ContentDefinitionsGetContentDefinitionResponse>;
    /**
     * contentDefinitionsGetContentDefinitionAttributes - Get Attributes for a ContentDefinition
     *
     * No Documentation Found.
    **/
    contentDefinitionsGetContentDefinitionAttributes(req: operations.ContentDefinitionsGetContentDefinitionAttributesRequest, config?: AxiosRequestConfig): Promise<operations.ContentDefinitionsGetContentDefinitionAttributesResponse>;
    /**
     * contentDefinitionsGetContentDefinitions - Get ContentDefinitions
     *
     * Gets a collection of ContentDefinitions. When successful, the response is a PagedResponse of ContentDefinitions.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    contentDefinitionsGetContentDefinitions(req: operations.ContentDefinitionsGetContentDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ContentDefinitionsGetContentDefinitionsResponse>;
    /**
     * contentDefinitionsPostContentDefinitionAttribute - Add an Attribute to a ContentDefinition
     *
     * No Documentation Found.
    **/
    contentDefinitionsPostContentDefinitionAttribute(req: operations.ContentDefinitionsPostContentDefinitionAttributeRequest, config?: AxiosRequestConfig): Promise<operations.ContentDefinitionsPostContentDefinitionAttributeResponse>;
    /**
     * contentDefinitionsPutContentDefinitionAttributeAsync - Update an Attribute for a ContentDefinition
     *
     * No Documentation Found.
    **/
    contentDefinitionsPutContentDefinitionAttributeAsync(req: operations.ContentDefinitionsPutContentDefinitionAttributeAsyncRequest, config?: AxiosRequestConfig): Promise<operations.ContentDefinitionsPutContentDefinitionAttributeAsyncResponse>;
    /**
     * contentReleaseDeleteContentReleaseVersionn - Delete a ContentReleaseVersion
     *
     * Deletes an ContentReleaseVersion. When successful, the response is empty.  If unsuccessful, an appropriate
     *             ApiError is returned.
    **/
    contentReleaseDeleteContentReleaseVersionn(req: operations.ContentReleaseDeleteContentReleaseVersionnRequest, config?: AxiosRequestConfig): Promise<operations.ContentReleaseDeleteContentReleaseVersionnResponse>;
    /**
     * contentReleaseGetContentReleaseVersion - Get ContentReleaseVersion
     *
     * Gets a collection of ContentReleaseVersion. When successful, the response is a PagedResponse of ContentReleaseVersion.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    contentReleaseGetContentReleaseVersion(req: operations.ContentReleaseGetContentReleaseVersionRequest, config?: AxiosRequestConfig): Promise<operations.ContentReleaseGetContentReleaseVersionResponse>;
    /**
     * contentReleasePostContentRelease - Create a ContentReleaseVersion
     *
     * Creates a ContentReleaseVersion.  The body of the POST is the ContentReleaseVersion to create.
     *             The ContentReleaseId will be assigned on creation of the Job.  When successful, the response
     *             is the contentReleaseId.  If unsuccessful, an appropriate ApiError is returned.
    **/
    contentReleasePostContentRelease(req: operations.ContentReleasePostContentReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ContentReleasePostContentReleaseResponse>;
    /**
     * contentReleasePutContentDefinition - Update a ContentReleaseVersion
     *
     * Updates a ContentReleaseVersion.  The body of the PUT is the updated ContentReleaseVersion.
     *             When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
    **/
    contentReleasePutContentDefinition(req: operations.ContentReleasePutContentDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.ContentReleasePutContentDefinitionResponse>;
    /**
     * contentSubmissionTypesDeleteContentSubmissionType - Remove a Content Submission Type
     *
     * No Documentation Found.
    **/
    contentSubmissionTypesDeleteContentSubmissionType(req: operations.ContentSubmissionTypesDeleteContentSubmissionTypeRequest, config?: AxiosRequestConfig): Promise<operations.ContentSubmissionTypesDeleteContentSubmissionTypeResponse>;
    /**
     * contentSubmissionTypesGetContentSubmissionType - Retrieves a Content Submission Type by its ID.
     *
     * No Documentation Found.
    **/
    contentSubmissionTypesGetContentSubmissionType(req: operations.ContentSubmissionTypesGetContentSubmissionTypeRequest, config?: AxiosRequestConfig): Promise<operations.ContentSubmissionTypesGetContentSubmissionTypeResponse>;
    /**
     * contentSubmissionTypesGetContentSubmissionTypes - Returns available Content Submission Types.
     *
     * No Documentation Found.
    **/
    contentSubmissionTypesGetContentSubmissionTypes(req: operations.ContentSubmissionTypesGetContentSubmissionTypesRequest, config?: AxiosRequestConfig): Promise<operations.ContentSubmissionTypesGetContentSubmissionTypesResponse>;
    /**
     * contentSubmissionTypesPostContentSubmissionType - Add a Content Submission Type
     *
     * No Documentation Found.
    **/
    contentSubmissionTypesPostContentSubmissionType(req: operations.ContentSubmissionTypesPostContentSubmissionTypeRequest, config?: AxiosRequestConfig): Promise<operations.ContentSubmissionTypesPostContentSubmissionTypeResponse>;
    /**
     * contentSubmissionTypesPutContentSubmissionType - Update a Content Submission Type
     *
     * No Documentation Found.
    **/
    contentSubmissionTypesPutContentSubmissionType(req: operations.ContentSubmissionTypesPutContentSubmissionTypeRequest, config?: AxiosRequestConfig): Promise<operations.ContentSubmissionTypesPutContentSubmissionTypeResponse>;
    /**
     * contentSubmissionsDeleteContentSubmission - Delete a ContentSubmission
     *
     * Deletes an ContentSubmission. When successful, the response is empty.  If unsuccessful, an appropriate
     *             ApiError is returned.
    **/
    contentSubmissionsDeleteContentSubmission(req: operations.ContentSubmissionsDeleteContentSubmissionRequest, config?: AxiosRequestConfig): Promise<operations.ContentSubmissionsDeleteContentSubmissionResponse>;
    /**
     * contentSubmissionsDeleteContentSubmissionAttribute - Remove an Attribute from a ContentSubmission
     *
     * No Documentation Found.
    **/
    contentSubmissionsDeleteContentSubmissionAttribute(req: operations.ContentSubmissionsDeleteContentSubmissionAttributeRequest, config?: AxiosRequestConfig): Promise<operations.ContentSubmissionsDeleteContentSubmissionAttributeResponse>;
    /**
     * contentSubmissionsGetContentSubmission - Get a ContentSubmission by ID
     *
     * Gets a ContentSubmission by ID. When successful, the response is the requested ContentSubmission.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    contentSubmissionsGetContentSubmission(req: operations.ContentSubmissionsGetContentSubmissionRequest, config?: AxiosRequestConfig): Promise<operations.ContentSubmissionsGetContentSubmissionResponse>;
    /**
     * contentSubmissionsGetContentSubmissionAttributes - Get Attributes for a ContentSubmission
     *
     * No Documentation Found.
    **/
    contentSubmissionsGetContentSubmissionAttributes(req: operations.ContentSubmissionsGetContentSubmissionAttributesRequest, config?: AxiosRequestConfig): Promise<operations.ContentSubmissionsGetContentSubmissionAttributesResponse>;
    /**
     * contentSubmissionsGetContentSubmissions - Get ContentSubmissions
     *
     * Gets a collection of ContentSubmissions. When successful, the response is a PagedResponse of ContentSubmissions. Additional searches: attributes[Name]=Value. This can be used to search for submissions that have the specified values for attributes. Beginning and ending wildcard (*) supported for value.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    contentSubmissionsGetContentSubmissions(req: operations.ContentSubmissionsGetContentSubmissionsRequest, config?: AxiosRequestConfig): Promise<operations.ContentSubmissionsGetContentSubmissionsResponse>;
    /**
     * contentSubmissionsPostContentSubmissionAttribute - Add an Attribute to a ContentSubmission
     *
     * No Documentation Found.
    **/
    contentSubmissionsPostContentSubmissionAttribute(req: operations.ContentSubmissionsPostContentSubmissionAttributeRequest, config?: AxiosRequestConfig): Promise<operations.ContentSubmissionsPostContentSubmissionAttributeResponse>;
    /**
     * contentSubmissionsPutContentSubmissionAttributeAsync - Update an Attribute for a ContentSubmission
     *
     * No Documentation Found.
    **/
    contentSubmissionsPutContentSubmissionAttributeAsync(req: operations.ContentSubmissionsPutContentSubmissionAttributeAsyncRequest, config?: AxiosRequestConfig): Promise<operations.ContentSubmissionsPutContentSubmissionAttributeAsyncResponse>;
    /**
     * dealerByCountryGetCountries - Get a total count of dealers per country
     *
     * No Documentation Found.
    **/
    dealerByCountryGetCountries(req: operations.DealerByCountryGetCountriesRequest, config?: AxiosRequestConfig): Promise<operations.DealerByCountryGetCountriesResponse>;
    /**
     * dealersGetDealerbyDealerCode - Lookup a dealer using a dealer code.
     *
     * No Documentation Found.
    **/
    dealersGetDealerbyDealerCode(req: operations.DealersGetDealerbyDealerCodeRequest, config?: AxiosRequestConfig): Promise<operations.DealersGetDealerbyDealerCodeResponse>;
    /**
     * dealersGetDealers - Get a list of dealers.
     *
     * No Documentation Found.
    **/
    dealersGetDealers(req: operations.DealersGetDealersRequest, config?: AxiosRequestConfig): Promise<operations.DealersGetDealersResponse>;
    /**
     * filesDeleteFile - Mark a file as 'Removed'. Disables download of the file and hides metadata from GET all method
     *
     * No Documentation Found.
    **/
    filesDeleteFile(req: operations.FilesDeleteFileRequest, config?: AxiosRequestConfig): Promise<operations.FilesDeleteFileResponse>;
    /**
     * filesGetFile - Gets a file's metadata.
     *
     * No Documentation Found.
    **/
    filesGetFile(req: operations.FilesGetFileRequest, config?: AxiosRequestConfig): Promise<operations.FilesGetFileResponse>;
    /**
     * filesGetFileContents - Download the contents of a file. The current State of the File should be 'Available'.
     *
     * No Documentation Found.
    **/
    filesGetFileContents(req: operations.FilesGetFileContentsRequest, config?: AxiosRequestConfig): Promise<operations.FilesGetFileContentsResponse>;
    /**
     * filesGetFiles - Get a paged response of file metadata.
     *
     * No Documentation Found.
    **/
    filesGetFiles(req: operations.FilesGetFilesRequest, config?: AxiosRequestConfig): Promise<operations.FilesGetFilesResponse>;
    /**
     * filesPostFile - Create the metadata for a file before uploading. The State of the File should be 'Created'.
     *
     * No Documentation Found.
    **/
    filesPostFile(req: operations.FilesPostFileRequest, config?: AxiosRequestConfig): Promise<operations.FilesPostFileResponse>;
    /**
     * filesPutFile - Update the metadata for a file. Size may not be modified by the client.
     *
     * Update the metadata for a file. Size may not be modified by the client.
     *                 Set status to 'Available' to publish a file. The file must be uploaded.
     *                 Set status to 'Created' to reset a file's contents and re-upload.
     *                 A file may only be 'Removed' by the DELETE method.
    **/
    filesPutFile(req: operations.FilesPutFileRequest, config?: AxiosRequestConfig): Promise<operations.FilesPutFileResponse>;
    /**
     * filesPutFileContents - Upload the contents of a file. The current State of the File should be 'Created'.
     *
     * No Documentation Found.
    **/
    filesPutFileContents(req: operations.FilesPutFileContentsRequest, config?: AxiosRequestConfig): Promise<operations.FilesPutFileContentsResponse>;
    /**
     * getApiV2AuthorizationCodeDefinitionsId - Get an authorization code definition by its ID
     *
     * No Documentation Found.
    **/
    getApiV2AuthorizationCodeDefinitionsId(req: operations.GetApiV2AuthorizationCodeDefinitionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2AuthorizationCodeDefinitionsIdResponse>;
    /**
     * getApiV2ClientsId - Get a Client in the Update System.
     *
     * No Documentation Found.
    **/
    getApiV2ClientsId(req: operations.GetApiV2ClientsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2ClientsIdResponse>;
    /**
     * getApiV2ContentReleasesContentReleaseId - Get a Content Release Version by ID
     *
     * Gets a ContentReleaseVersion by ID. When successful, the response is the requested ContentReleaseVersion.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    getApiV2ContentReleasesContentReleaseId(req: operations.GetApiV2ContentReleasesContentReleaseIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2ContentReleasesContentReleaseIdResponse>;
    /**
     * getApiV2LicensesId - Get a license.
     *
     * No Documentation Found.
    **/
    getApiV2LicensesId(req: operations.GetApiV2LicensesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2LicensesIdResponse>;
    /**
     * getApiV2PackageTypesId - Get a specific Package Type.
     *
     * No Documentation Found.
    **/
    getApiV2PackageTypesId(req: operations.GetApiV2PackageTypesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2PackageTypesIdResponse>;
    /**
     * getApiV2UpdateGroupsId - Get a specific Update Group by ID.
     *
     * No Documentation Found.
    **/
    getApiV2UpdateGroupsId(req: operations.GetApiV2UpdateGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2UpdateGroupsIdResponse>;
    /**
     * getApiV2UsersCurrentPermissions - Get a user's permissions
     *
     * No Documentation Found.
    **/
    getApiV2UsersCurrentPermissions(req: operations.GetApiV2UsersCurrentPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2UsersCurrentPermissionsResponse>;
    /**
     * getApiV2UsersId - Get a specific user
     *
     * No Documentation Found.
    **/
    getApiV2UsersId(req: operations.GetApiV2UsersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2UsersIdResponse>;
    /**
     * getApiV2VouchersVoucherCode - Get a voucher
     *
     * No Documentation Found.
    **/
    getApiV2VouchersVoucherCode(req: operations.GetApiV2VouchersVoucherCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV2VouchersVoucherCodeResponse>;
    /**
     * globalImageCategoriesGetFile - Gets a file's metadata.
     *
     * No Documentation Found.
    **/
    globalImageCategoriesGetFile(req: operations.GlobalImageCategoriesGetFileRequest, config?: AxiosRequestConfig): Promise<operations.GlobalImageCategoriesGetFileResponse>;
    /**
     * globalImageCategoriesGetFiles - Get a paged response of file metadata.
     *
     * No Documentation Found.
    **/
    globalImageCategoriesGetFiles(req: operations.GlobalImageCategoriesGetFilesRequest, config?: AxiosRequestConfig): Promise<operations.GlobalImageCategoriesGetFilesResponse>;
    /**
     * globalImageCategoriesPostFile - Create the metadata for a file before uploading. The State should be 'Created'.
     *
     * No Documentation Found.
    **/
    globalImageCategoriesPostFile(req: operations.GlobalImageCategoriesPostFileRequest, config?: AxiosRequestConfig): Promise<operations.GlobalImageCategoriesPostFileResponse>;
    /**
     * globalImagesDeleteFile - Mark a file as 'Removed'. Disables download of the image and hides metadata from GET all method
     *
     * No Documentation Found.
    **/
    globalImagesDeleteFile(req: operations.GlobalImagesDeleteFileRequest, config?: AxiosRequestConfig): Promise<operations.GlobalImagesDeleteFileResponse>;
    /**
     * globalImagesGetGlobalImage - Gets a GlobalImage's metadata.
     *
     * No Documentation Found.
    **/
    globalImagesGetGlobalImage(req: operations.GlobalImagesGetGlobalImageRequest, config?: AxiosRequestConfig): Promise<operations.GlobalImagesGetGlobalImageResponse>;
    /**
     * globalImagesGetGlobalImageContents - Download the contents of a GlobalImage. The current State of the GlobalImage should be 'Available'.
     *
     * No Documentation Found.
    **/
    globalImagesGetGlobalImageContents(req: operations.GlobalImagesGetGlobalImageContentsRequest, config?: AxiosRequestConfig): Promise<operations.GlobalImagesGetGlobalImageContentsResponse>;
    /**
     * globalImagesGetGlobalImages - Get a paged response of GlobalImage.
     *
     * No Documentation Found.
    **/
    globalImagesGetGlobalImages(req: operations.GlobalImagesGetGlobalImagesRequest, config?: AxiosRequestConfig): Promise<operations.GlobalImagesGetGlobalImagesResponse>;
    /**
     * globalImagesPutGlobalImageContents - Upload the contents of a GlobalImage. The current State of the File for the GlobalImage should be 'Created'.
     *
     * Both the image and thumbnail must be uploaded.
     *                 Set isFullImage = 'True' for Full Image, isFullImage = 'False' for Thumbnail
    **/
    globalImagesPutGlobalImageContents(req: operations.GlobalImagesPutGlobalImageContentsRequest, config?: AxiosRequestConfig): Promise<operations.GlobalImagesPutGlobalImageContentsResponse>;
    /**
     * jobRunsDeleteJobRun - Delete a JobRun
     *
     * Deletes a JobRun. When successful, the response is empty.  If unsuccessful, an appropriate
     *             ApiError is returned.
    **/
    jobRunsDeleteJobRun(req: operations.JobRunsDeleteJobRunRequest, config?: AxiosRequestConfig): Promise<operations.JobRunsDeleteJobRunResponse>;
    /**
     * jobRunsGetJobRun - Get a JobRun by ID
     *
     * Gets a JobRun by ID. When successful, the response is the requested JobRun.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    jobRunsGetJobRun(req: operations.JobRunsGetJobRunRequest, config?: AxiosRequestConfig): Promise<operations.JobRunsGetJobRunResponse>;
    /**
     * jobRunsGetJobRuns - Get JobRuns
     *
     * Gets a collection of JobRuns. When successful, the response is a PagedResponse of JobRuns.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    jobRunsGetJobRuns(req: operations.JobRunsGetJobRunsRequest, config?: AxiosRequestConfig): Promise<operations.JobRunsGetJobRunsResponse>;
    /**
     * jobRunsPostJobRun - Create a JobRun
     *
     * Creates a JobRun.  The body of the POST is the JobRun to create.  The JobRunID will be assigned on
     *             creation of the JobRun.  When successful, the response is the JobRunID.  If unsuccessful, an
     *             appropriate ApiError is returned.
    **/
    jobRunsPostJobRun(req: operations.JobRunsPostJobRunRequest, config?: AxiosRequestConfig): Promise<operations.JobRunsPostJobRunResponse>;
    /**
     * jobRunsPutJobRun - Update a JobRun
     *
     * ///
     *             Updates a JobRun.  The body of the PUT is the updated JobRun.
     *             When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
    **/
    jobRunsPutJobRun(req: operations.JobRunsPutJobRunRequest, config?: AxiosRequestConfig): Promise<operations.JobRunsPutJobRunResponse>;
    /**
     * jobsDeleteJob - Mark the delete flag for the Job
     *
     * Deletes a Job. When successful, the response is empty.  If unsuccessful, an appropriate
     *             ApiError is returned.
    **/
    jobsDeleteJob(req: operations.JobsDeleteJobRequest, config?: AxiosRequestConfig): Promise<operations.JobsDeleteJobResponse>;
    /**
     * jobsGetJob - Get a Job by ID
     *
     * Gets a Job by ID. When successful, the response is the requested Job.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    jobsGetJob(req: operations.JobsGetJobRequest, config?: AxiosRequestConfig): Promise<operations.JobsGetJobResponse>;
    /**
     * jobsGetJobs - Get Jobs
     *
     * Gets a collection of Jobs. When successful, the response is a PagedResponse of Jobs.
     *             If unsuccessful, an appropriate ApiError is returned.
     *             ///
    **/
    jobsGetJobs(req: operations.JobsGetJobsRequest, config?: AxiosRequestConfig): Promise<operations.JobsGetJobsResponse>;
    /**
     * jobsPostJob - Create a Job
     *
     * Creates a Job.  The body of the POST is the Job to create.  The JobID will be assigned on
     *             creation of the Job.  When successful, the response is the JobID.  If unsuccessful, an
     *             appropriate ApiError is returned.
    **/
    jobsPostJob(req: operations.JobsPostJobRequest, config?: AxiosRequestConfig): Promise<operations.JobsPostJobResponse>;
    /**
     * jobsPutJob - Update a Job
     *
     * Updates a Job.  The body of the PUT is the updated Job.  When successful, the response is empty.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    jobsPutJob(req: operations.JobsPutJobRequest, config?: AxiosRequestConfig): Promise<operations.JobsPutJobResponse>;
    /**
     * languagesCreateLanguage - Add a Language to support for translations. Accepts a Language object. Returns the Id of the created object.
     *
     * No Documentation Found.
    **/
    languagesCreateLanguage(req: operations.LanguagesCreateLanguageRequest, config?: AxiosRequestConfig): Promise<operations.LanguagesCreateLanguageResponse>;
    /**
     * languagesDeleteLanguage - Remove a Language from those supported for translations. Marks language as deleted.
     *
     * No Documentation Found.
    **/
    languagesDeleteLanguage(req: operations.LanguagesDeleteLanguageRequest, config?: AxiosRequestConfig): Promise<operations.LanguagesDeleteLanguageResponse>;
    /**
     * languagesGetLanguage - Get a language by its id. Returns a Language object
     *
     * No Documentation Found.
    **/
    languagesGetLanguage(req: operations.LanguagesGetLanguageRequest, config?: AxiosRequestConfig): Promise<operations.LanguagesGetLanguageResponse>;
    /**
     * languagesGetLanguages - Get a list of the languages for which translations are supported. Returns a PagedResponse of Language objects.
     *
     * No Documentation Found.
    **/
    languagesGetLanguages(req: operations.LanguagesGetLanguagesRequest, config?: AxiosRequestConfig): Promise<operations.LanguagesGetLanguagesResponse>;
    /**
     * languagesUpdateLanguage - Update a language’s description. Accepts a Language object.
     *
     * No Documentation Found.
    **/
    languagesUpdateLanguage(req: operations.LanguagesUpdateLanguageRequest, config?: AxiosRequestConfig): Promise<operations.LanguagesUpdateLanguageResponse>;
    /**
     * licenseActivationsPost - Create a license activation.
     *
     * No Documentation Found.
    **/
    licenseActivationsPost(req: operations.LicenseActivationsPostRequest, config?: AxiosRequestConfig): Promise<operations.LicenseActivationsPostResponse>;
    /**
     * licenseActivationsPostRegisterEdtLite - Register an EDT Lite with the Server
     *
     * No Documentation Found.
    **/
    licenseActivationsPostRegisterEdtLite(req: operations.LicenseActivationsPostRegisterEdtLiteRequest, config?: AxiosRequestConfig): Promise<operations.LicenseActivationsPostRegisterEdtLiteResponse>;
    /**
     * licenseActivationsPut - Update a license activiation.
     *
     * No Documentation Found.
    **/
    licenseActivationsPut(req: operations.LicenseActivationsPutRequest, config?: AxiosRequestConfig): Promise<operations.LicenseActivationsPutResponse>;
    /**
     * licenseActivationsPutConfirm - Confirm that the client has applied the updated license.
     *
     * No Documentation Found.
    **/
    licenseActivationsPutConfirm(req: operations.LicenseActivationsPutConfirmRequest, config?: AxiosRequestConfig): Promise<operations.LicenseActivationsPutConfirmResponse>;
    /**
     * licensesGet - Gets a list of licenses with the specified criteria.
     *
     * No Documentation Found.
    **/
    licensesGet(req: operations.LicensesGetRequest, config?: AxiosRequestConfig): Promise<operations.LicensesGetResponse>;
    /**
     * logsGetLog - Get a log by ID
     *
     * No Documentation Found.
    **/
    logsGetLog(req: operations.LogsGetLogRequest, config?: AxiosRequestConfig): Promise<operations.LogsGetLogResponse>;
    /**
     * logsGetLogs - Get the API System logs, most recent first.
     *
     * No Documentation Found.
    **/
    logsGetLogs(req: operations.LogsGetLogsRequest, config?: AxiosRequestConfig): Promise<operations.LogsGetLogsResponse>;
    /**
     * logsPostLog - Add a Log entry
     *
     * No Documentation Found.
    **/
    logsPostLog(req: operations.LogsPostLogRequest, config?: AxiosRequestConfig): Promise<operations.LogsPostLogResponse>;
    /**
     * notificationsPostMail - Sends an email message.
     *
     * No Documentation Found.
    **/
    notificationsPostMail(req: operations.NotificationsPostMailRequest, config?: AxiosRequestConfig): Promise<operations.NotificationsPostMailResponse>;
    /**
     * packageReportsDefault - Get the package reports for a client.
     *
     * No Documentation Found.
    **/
    packageReportsDefault(req: operations.PackageReportsDefaultRequest, config?: AxiosRequestConfig): Promise<operations.PackageReportsDefaultResponse>;
    /**
     * packageTypesAddPackageTypeUser - Add a package type that a user can see.
     *
     * No Documentation Found.
    **/
    packageTypesAddPackageTypeUser(req: operations.PackageTypesAddPackageTypeUserRequest, config?: AxiosRequestConfig): Promise<operations.PackageTypesAddPackageTypeUserResponse>;
    /**
     * packageTypesDelete - Delete a Package Type.
     *
     * No Documentation Found.
    **/
    packageTypesDelete(req: operations.PackageTypesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PackageTypesDeleteResponse>;
    /**
     * packageTypesGet - Get all of the Package Types.
     *
     * No Documentation Found.
    **/
    packageTypesGet(req: operations.PackageTypesGetRequest, config?: AxiosRequestConfig): Promise<operations.PackageTypesGetResponse>;
    /**
     * packageTypesPost - Add a Package Type.
     *
     * No Documentation Found.
    **/
    packageTypesPost(req: operations.PackageTypesPostRequest, config?: AxiosRequestConfig): Promise<operations.PackageTypesPostResponse>;
    /**
     * packageTypesPut - Modify a Package Type.
     *
     * No Documentation Found.
    **/
    packageTypesPut(req: operations.PackageTypesPutRequest, config?: AxiosRequestConfig): Promise<operations.PackageTypesPutResponse>;
    /**
     * packageTypesRemovePackageTypeUser - Deletes a package type a user could see.
     *
     * No Documentation Found.
    **/
    packageTypesRemovePackageTypeUser(req: operations.PackageTypesRemovePackageTypeUserRequest, config?: AxiosRequestConfig): Promise<operations.PackageTypesRemovePackageTypeUserResponse>;
    /**
     * packageTypetoBundlesDelete - Delete a Package Type to Bundle Relationship.
     *
     * No Documentation Found.
    **/
    packageTypetoBundlesDelete(req: operations.PackageTypetoBundlesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PackageTypetoBundlesDeleteResponse>;
    /**
     * packageTypetoBundlesGet - Get all of the Package Type to Bundle Relationships.
     *
     * No Documentation Found.
    **/
    packageTypetoBundlesGet(req: operations.PackageTypetoBundlesGetRequest, config?: AxiosRequestConfig): Promise<operations.PackageTypetoBundlesGetResponse>;
    /**
     * packageTypetoBundlesPost - Add a new Package Type ID to Bundle Relationship.
     *
     * No Documentation Found.
    **/
    packageTypetoBundlesPost(req: operations.PackageTypetoBundlesPostRequest, config?: AxiosRequestConfig): Promise<operations.PackageTypetoBundlesPostResponse>;
    /**
     * packageTypetoBundlesPut - Update a Package Type ID to Bundle Relationship.
     *
     * No Documentation Found.
    **/
    packageTypetoBundlesPut(req: operations.PackageTypetoBundlesPutRequest, config?: AxiosRequestConfig): Promise<operations.PackageTypetoBundlesPutResponse>;
    /**
     * packagesDeletePackage - Delete a Package.
     *
     * No Documentation Found.
    **/
    packagesDeletePackage(req: operations.PackagesDeletePackageRequest, config?: AxiosRequestConfig): Promise<operations.PackagesDeletePackageResponse>;
    /**
     * packagesGetPackage - Find a Package.
     *
     * No Documentation Found.
    **/
    packagesGetPackage(req: operations.PackagesGetPackageRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageResponse>;
    /**
     * packagesGetPackages - List Packages.
     *
     * No Documentation Found.
    **/
    packagesGetPackages(req: operations.PackagesGetPackagesRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackagesResponse>;
    /**
     * packagesPostPackage - Add a Package to the Update System.
     *
     * No Documentation Found.
    **/
    packagesPostPackage(req: operations.PackagesPostPackageRequest, config?: AxiosRequestConfig): Promise<operations.PackagesPostPackageResponse>;
    /**
     * packagesPutPackage - Modify a Packge to the Update System.
     *
     * No Documentation Found.
    **/
    packagesPutPackage(req: operations.PackagesPutPackageRequest, config?: AxiosRequestConfig): Promise<operations.PackagesPutPackageResponse>;
    /**
     * permissionsDeletePermission - Deletes a Permission
     *
     * No Documentation Found.
    **/
    permissionsDeletePermission(req: operations.PermissionsDeletePermissionRequest, config?: AxiosRequestConfig): Promise<operations.PermissionsDeletePermissionResponse>;
    /**
     * permissionsGetPermission - Gets a Permission
     *
     * No Documentation Found.
    **/
    permissionsGetPermission(req: operations.PermissionsGetPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PermissionsGetPermissionResponse>;
    /**
     * permissionsGetPermissions - List Permissions
     *
     * No Documentation Found.
    **/
    permissionsGetPermissions(req: operations.PermissionsGetPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PermissionsGetPermissionsResponse>;
    /**
     * permissionsPostPermission - Adds a Permission
     *
     * No Documentation Found.
    **/
    permissionsPostPermission(req: operations.PermissionsPostPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PermissionsPostPermissionResponse>;
    /**
     * permissionsPutPermission - Updates a Permission
     *
     * No Documentation Found.
    **/
    permissionsPutPermission(req: operations.PermissionsPutPermissionRequest, config?: AxiosRequestConfig): Promise<operations.PermissionsPutPermissionResponse>;
    /**
     * priorityPackagesDeletePriorityPackages - Delete a Priority Package for a Client.
     *
     * No Documentation Found.
    **/
    priorityPackagesDeletePriorityPackages(req: operations.PriorityPackagesDeletePriorityPackagesRequest, config?: AxiosRequestConfig): Promise<operations.PriorityPackagesDeletePriorityPackagesResponse>;
    /**
     * priorityPackagesGetPriorityPackage - Get a Priority Packages for a Client.
     *
     * No Documentation Found.
    **/
    priorityPackagesGetPriorityPackage(req: operations.PriorityPackagesGetPriorityPackageRequest, config?: AxiosRequestConfig): Promise<operations.PriorityPackagesGetPriorityPackageResponse>;
    /**
     * priorityPackagesGetPriorityPackages - Get a list of Priority Packages by Client.
     *
     * No Documentation Found.
    **/
    priorityPackagesGetPriorityPackages(req: operations.PriorityPackagesGetPriorityPackagesRequest, config?: AxiosRequestConfig): Promise<operations.PriorityPackagesGetPriorityPackagesResponse>;
    /**
     * priorityPackagesPostPriorityPackages - Add a Priority Package for a Client.
     *
     * No Documentation Found.
    **/
    priorityPackagesPostPriorityPackages(req: operations.PriorityPackagesPostPriorityPackagesRequest, config?: AxiosRequestConfig): Promise<operations.PriorityPackagesPostPriorityPackagesResponse>;
    /**
     * releaseDeleteReleaseBundle - Deletes the association between a release and a bundle.
     *
     * No Documentation Found.
    **/
    releaseDeleteReleaseBundle(req: operations.ReleaseDeleteReleaseBundleRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseDeleteReleaseBundleResponse>;
    /**
     * releaseGetRelease - Get a  Release by ID
     *
     * Gets a Release by ID. When successful, the response is the requested Release.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    releaseGetRelease(req: operations.ReleaseGetReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseGetReleaseResponse>;
    /**
     * releaseGetReleases - Get Release
     *
     * Gets a collection of Release. When successful, the response is a PagedResponse of Release.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    releaseGetReleases(req: operations.ReleaseGetReleasesRequest, config?: AxiosRequestConfig): Promise<operations.ReleaseGetReleasesResponse>;
    /**
     * releasePostRelease - Create a Release
     *
     * Creates a Release.  The body of the POST is the Release to create.
     *             The ReleaseId will be assigned on creation of the Job.  When successful, the response
     *             is the Release Id.  If unsuccessful, an appropriate ApiError is returned.
    **/
    releasePostRelease(req: operations.ReleasePostReleaseRequest, config?: AxiosRequestConfig): Promise<operations.ReleasePostReleaseResponse>;
    /**
     * releasePostReleaseBundle - Associates the release with a bundle.
     *
     * No Documentation Found.
    **/
    releasePostReleaseBundle(req: operations.ReleasePostReleaseBundleRequest, config?: AxiosRequestConfig): Promise<operations.ReleasePostReleaseBundleResponse>;
    /**
     * releasePutContentDefinition - Update a Release
     *
     * Updates a Release.  The body of the PUT is the updated Release.
     *             When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
    **/
    releasePutContentDefinition(req: operations.ReleasePutContentDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.ReleasePutContentDefinitionResponse>;
    /**
     * reportingBundleStatusSummary - Get a summary of all Packages in a Bundle
     *
     * No Documentation Found.
    **/
    reportingBundleStatusSummary(req: operations.ReportingBundleStatusSummaryRequest, config?: AxiosRequestConfig): Promise<operations.ReportingBundleStatusSummaryResponse>;
    /**
     * reportingBundlesInUpdateGroup - Get a list of bundles for UpdateGroup.
     *
     * No Documentation Found.
    **/
    reportingBundlesInUpdateGroup(req: operations.ReportingBundlesInUpdateGroupRequest, config?: AxiosRequestConfig): Promise<operations.ReportingBundlesInUpdateGroupResponse>;
    /**
     * reportingClientInfo - Get Client Information
     *
     * No Documentation Found.
    **/
    reportingClientInfo(req: operations.ReportingClientInfoRequest, config?: AxiosRequestConfig): Promise<operations.ReportingClientInfoResponse>;
    /**
     * reportingCurrentPackagesInUpdateGroup - Get the current packages for an update group.
     *
     * No Documentation Found.
    **/
    reportingCurrentPackagesInUpdateGroup(req: operations.ReportingCurrentPackagesInUpdateGroupRequest, config?: AxiosRequestConfig): Promise<operations.ReportingCurrentPackagesInUpdateGroupResponse>;
    /**
     * reportingGetClient - Get a Client in the Update System.
     *
     * No Documentation Found.
    **/
    reportingGetClient(req: operations.ReportingGetClientRequest, config?: AxiosRequestConfig): Promise<operations.ReportingGetClientResponse>;
    /**
     * reportingGetSubscriptions - Get a list of current Client Subscriptions.
     *
     * No Documentation Found.
    **/
    reportingGetSubscriptions(req: operations.ReportingGetSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.ReportingGetSubscriptionsResponse>;
    /**
     * reportingPackageStatusSummary - Get a summary report for a Specific Package
     *
     * No Documentation Found.
    **/
    reportingPackageStatusSummary(req: operations.ReportingPackageStatusSummaryRequest, config?: AxiosRequestConfig): Promise<operations.ReportingPackageStatusSummaryResponse>;
    /**
     * reportingRegisteredClients - Get a list of subscribed clients
     *
     * No Documentation Found.
    **/
    reportingRegisteredClients(req: operations.ReportingRegisteredClientsRequest, config?: AxiosRequestConfig): Promise<operations.ReportingRegisteredClientsResponse>;
    /**
     * reportingUpdateGroups - Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
     *
     * No Documentation Found.
    **/
    reportingUpdateGroups(req: operations.ReportingUpdateGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ReportingUpdateGroupsResponse>;
    /**
     * reportingUpdateMetrics - Get data for pie charts in UpdateMetrics.
     *
     * No Documentation Found.
    **/
    reportingUpdateMetrics(req: operations.ReportingUpdateMetricsRequest, config?: AxiosRequestConfig): Promise<operations.ReportingUpdateMetricsResponse>;
    /**
     * rolesDeleteRole - Deletes a User Role
     *
     * No Documentation Found.
    **/
    rolesDeleteRole(req: operations.RolesDeleteRoleRequest, config?: AxiosRequestConfig): Promise<operations.RolesDeleteRoleResponse>;
    /**
     * rolesGetRole - Gets a User Role
     *
     * No Documentation Found.
    **/
    rolesGetRole(req: operations.RolesGetRoleRequest, config?: AxiosRequestConfig): Promise<operations.RolesGetRoleResponse>;
    /**
     * rolesGetRolePermissions - Get the Permissions for a Role
     *
     * No Documentation Found.
    **/
    rolesGetRolePermissions(req: operations.RolesGetRolePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.RolesGetRolePermissionsResponse>;
    /**
     * rolesGetRoles - List Roles
     *
     * No Documentation Found.
    **/
    rolesGetRoles(req: operations.RolesGetRolesRequest, config?: AxiosRequestConfig): Promise<operations.RolesGetRolesResponse>;
    /**
     * rolesPostRole - Adds a User Role
     *
     * No Documentation Found.
    **/
    rolesPostRole(req: operations.RolesPostRoleRequest, config?: AxiosRequestConfig): Promise<operations.RolesPostRoleResponse>;
    /**
     * rolesPutRole - Updates a User Role
     *
     * No Documentation Found.
    **/
    rolesPutRole(req: operations.RolesPutRoleRequest, config?: AxiosRequestConfig): Promise<operations.RolesPutRoleResponse>;
    /**
     * stepsGetStep - Get a Step by ID
     *
     * Gets a Step by ID. When successful, the response is the requested Step.
     *             If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.
    **/
    stepsGetStep(req: operations.StepsGetStepRequest, config?: AxiosRequestConfig): Promise<operations.StepsGetStepResponse>;
    /**
     * stepsGetSteps - Get Steps
     *
     * Gets a collection of Steps. When successful, the response is a PagedResponse of Steps.
     *             If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.
    **/
    stepsGetSteps(req: operations.StepsGetStepsRequest, config?: AxiosRequestConfig): Promise<operations.StepsGetStepsResponse>;
    /**
     * stepsPostStep - Create a Step
     *
     * No Documentation Found.
    **/
    stepsPostStep(req: operations.StepsPostStepRequest, config?: AxiosRequestConfig): Promise<operations.StepsPostStepResponse>;
    /**
     * stepsPutStep - Update a Step
     *
     * No Documentation Found.
    **/
    stepsPutStep(req: operations.StepsPutStepRequest, config?: AxiosRequestConfig): Promise<operations.StepsPutStepResponse>;
    /**
     * stringDefinitionsGetDefinition - Get a paged response of Global String Definitions.
     *
     * No Documentation Found.
    **/
    stringDefinitionsGetDefinition(req: operations.StringDefinitionsGetDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.StringDefinitionsGetDefinitionResponse>;
    /**
     * stringDefinitionsGetDefinitions - Get a paged response of Global String Definitions.
     *
     * No Documentation Found.
    **/
    stringDefinitionsGetDefinitions(req: operations.StringDefinitionsGetDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.StringDefinitionsGetDefinitionsResponse>;
    /**
     * stringTranslationsGetTranslation - Get a single translation based upon stringId and languageId
     *
     * No Documentation Found.
    **/
    stringTranslationsGetTranslation(req: operations.StringTranslationsGetTranslationRequest, config?: AxiosRequestConfig): Promise<operations.StringTranslationsGetTranslationResponse>;
    /**
     * stringTranslationsGetTranslations - Get a paged response of Global String Translations.
     *
     * No Documentation Found.
    **/
    stringTranslationsGetTranslations(req: operations.StringTranslationsGetTranslationsRequest, config?: AxiosRequestConfig): Promise<operations.StringTranslationsGetTranslationsResponse>;
    /**
     * stringTranslationsUpdateTranslation - Update a string value or a state for a string translation.
     *
     * No Documentation Found.
    **/
    stringTranslationsUpdateTranslation(req: operations.StringTranslationsUpdateTranslationRequest, config?: AxiosRequestConfig): Promise<operations.StringTranslationsUpdateTranslationResponse>;
    /**
     * translationKeysCreateTranslationKey - Create a translationKey object.
     *
     * No Documentation Found.
    **/
    translationKeysCreateTranslationKey(req: operations.TranslationKeysCreateTranslationKeyRequest, config?: AxiosRequestConfig): Promise<operations.TranslationKeysCreateTranslationKeyResponse>;
    /**
     * translationKeysGet - Get a paged response of TranslationKeys.
    **/
    translationKeysGet(req: operations.TranslationKeysGetRequest, config?: AxiosRequestConfig): Promise<operations.TranslationKeysGetResponse>;
    /**
     * translationKeysGetTranslationKey - Get TranslationKey by ID
     *
     * No Documentation Found.
    **/
    translationKeysGetTranslationKey(req: operations.TranslationKeysGetTranslationKeyRequest, config?: AxiosRequestConfig): Promise<operations.TranslationKeysGetTranslationKeyResponse>;
    /**
     * translationKeysUpdateTranslationKey - Update the StringID of the translationKey object.
     *
     * No Documentation Found.
    **/
    translationKeysUpdateTranslationKey(req: operations.TranslationKeysUpdateTranslationKeyRequest, config?: AxiosRequestConfig): Promise<operations.TranslationKeysUpdateTranslationKeyResponse>;
    /**
     * translationRequestsCreateTranslationRequest - Create a translation request. Accepts a TranslationRequest object. Returns the Id of the created object. The state of the TranslationRequest must be ‘NotSubmitted’.
     *
     * No Documentation Found.
    **/
    translationRequestsCreateTranslationRequest(req: operations.TranslationRequestsCreateTranslationRequestRequest, config?: AxiosRequestConfig): Promise<operations.TranslationRequestsCreateTranslationRequestResponse>;
    /**
     * translationRequestsGetTranslationRequest - Get a TranslationRequest object by id. Returns TranslationRequest object with its language ids and string ids.
     *
     * No Documentation Found.
    **/
    translationRequestsGetTranslationRequest(req: operations.TranslationRequestsGetTranslationRequestRequest, config?: AxiosRequestConfig): Promise<operations.TranslationRequestsGetTranslationRequestResponse>;
    /**
     * translationRequestsGetTranslationRequests - Get all TranslationRequest objects. Returns a PagedResponse of TranslationRequest objects with their language ids and string ids.
     *
     * No Documentation Found.
    **/
    translationRequestsGetTranslationRequests(req: operations.TranslationRequestsGetTranslationRequestsRequest, config?: AxiosRequestConfig): Promise<operations.TranslationRequestsGetTranslationRequestsResponse>;
    /**
     * translationRequestsUpdateTranslationRequest - Update a TranslationRequest object by id. Accepts a TranslationRequest object.
     *
     * No Documentation Found.
    **/
    translationRequestsUpdateTranslationRequest(req: operations.TranslationRequestsUpdateTranslationRequestRequest, config?: AxiosRequestConfig): Promise<operations.TranslationRequestsUpdateTranslationRequestResponse>;
    /**
     * translationSetsDeleteTranslationSetAttribute - Delete a set of TranslationSetAttribute object
     *
     * No Documentation Found.
    **/
    translationSetsDeleteTranslationSetAttribute(req: operations.TranslationSetsDeleteTranslationSetAttributeRequest, config?: AxiosRequestConfig): Promise<operations.TranslationSetsDeleteTranslationSetAttributeResponse>;
    /**
     * translationSetsGetSourceStrings - Gets the information needed to translate a string in a translation set
     *
     * No Documentation Found.
    **/
    translationSetsGetSourceStrings(req: operations.TranslationSetsGetSourceStringsRequest, config?: AxiosRequestConfig): Promise<operations.TranslationSetsGetSourceStringsResponse>;
    /**
     * translationSetsGetStatistics - Gets the statistics for translation sets such as the language ids and count of string definitions.
     *
     * No Documentation Found.
    **/
    translationSetsGetStatistics(req: operations.TranslationSetsGetStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.TranslationSetsGetStatisticsResponse>;
    /**
     * translationSetsGetTranslationSet - Get a TranslationSet object by its id. Related TranslationSetStrings are NOT returned.
     *
     * No Documentation Found.
    **/
    translationSetsGetTranslationSet(req: operations.TranslationSetsGetTranslationSetRequest, config?: AxiosRequestConfig): Promise<operations.TranslationSetsGetTranslationSetResponse>;
    /**
     * translationSetsGetTranslationSetAttributes - Get a PagedResponse of TranslationSetAttribute objects
     *
     * No Documentation Found.
    **/
    translationSetsGetTranslationSetAttributes(req: operations.TranslationSetsGetTranslationSetAttributesRequest, config?: AxiosRequestConfig): Promise<operations.TranslationSetsGetTranslationSetAttributesResponse>;
    /**
     * translationSetsGetTranslationSetStrings - Get a PagedResponse of TranslationSetString objects
     *
     * No Documentation Found.
    **/
    translationSetsGetTranslationSetStrings(req: operations.TranslationSetsGetTranslationSetStringsRequest, config?: AxiosRequestConfig): Promise<operations.TranslationSetsGetTranslationSetStringsResponse>;
    /**
     * translationSetsGetTranslationSets - Get a PagedResponse of TranslationSet objects. Related TranslationSetStrings are NOT returned
     *
     * No Documentation Found.
    **/
    translationSetsGetTranslationSets(req: operations.TranslationSetsGetTranslationSetsRequest, config?: AxiosRequestConfig): Promise<operations.TranslationSetsGetTranslationSetsResponse>;
    /**
     * translationSetsPostTranslationSetAttribute - Create a TranslationSetAttribute object
     *
     * No Documentation Found.
    **/
    translationSetsPostTranslationSetAttribute(req: operations.TranslationSetsPostTranslationSetAttributeRequest, config?: AxiosRequestConfig): Promise<operations.TranslationSetsPostTranslationSetAttributeResponse>;
    /**
     * translationSetsUpdateTranslationSetAttribute - Update a TranslationSetAttribute object
     *
     * No Documentation Found.
    **/
    translationSetsUpdateTranslationSetAttribute(req: operations.TranslationSetsUpdateTranslationSetAttributeRequest, config?: AxiosRequestConfig): Promise<operations.TranslationSetsUpdateTranslationSetAttributeResponse>;
    /**
     * updateGroupClientRelationshipsGetSubscription - Get a subscription by RelationshipID
     *
     * No Documentation Found.
    **/
    updateGroupClientRelationshipsGetSubscription(req: operations.UpdateGroupClientRelationshipsGetSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupClientRelationshipsGetSubscriptionResponse>;
    /**
     * updateGroupClientRelationshipsGetSubscriptions - Get a list of current Client Subscriptions.
     *
     * No Documentation Found.
    **/
    updateGroupClientRelationshipsGetSubscriptions(req: operations.UpdateGroupClientRelationshipsGetSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupClientRelationshipsGetSubscriptionsResponse>;
    /**
     * updateGroupClientRelationshipsPostSubscription - Add a subscription
     *
     * No Documentation Found.
    **/
    updateGroupClientRelationshipsPostSubscription(req: operations.UpdateGroupClientRelationshipsPostSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupClientRelationshipsPostSubscriptionResponse>;
    /**
     * updateGroupClientRelationshipsPutSubscription - Updates a Subscription
     *
     * No Documentation Found.
    **/
    updateGroupClientRelationshipsPutSubscription(req: operations.UpdateGroupClientRelationshipsPutSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupClientRelationshipsPutSubscriptionResponse>;
    /**
     * updateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupId - DEPRECATED. Set client subscription status for an update group.
     *
     * No Documentation Found.
    **/
    updateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupId(req: operations.UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdResponse>;
    /**
     * updateGroupSubscriptionsDeleteUpdateGroupSubscription - Delete an Update Group Subscription
     *
     * No Documentation Found.
    **/
    updateGroupSubscriptionsDeleteUpdateGroupSubscription(req: operations.UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionResponse>;
    /**
     * updateGroupSubscriptionsGetUpdateGroupSubscription - Get an Update Group Subscription
     *
     * No Documentation Found.
    **/
    updateGroupSubscriptionsGetUpdateGroupSubscription(req: operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionResponse>;
    /**
     * updateGroupSubscriptionsGetUpdateGroupSubscriptions - Get Update Group Subscriptions
     *
     * No Documentation Found.
    **/
    updateGroupSubscriptionsGetUpdateGroupSubscriptions(req: operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse>;
    /**
     * updateGroupSubscriptionsPostUpdateGroupSubscription - Add an Update Group Subscription
     *
     * No Documentation Found.
    **/
    updateGroupSubscriptionsPostUpdateGroupSubscription(req: operations.UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupSubscriptionsPostUpdateGroupSubscriptionResponse>;
    /**
     * updateGroupSubscriptionsPutUpdateGroupSubscription - Update an Update Group Subscription
     *
     * No Documentation Found.
    **/
    updateGroupSubscriptionsPutUpdateGroupSubscription(req: operations.UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse>;
    /**
     * updateGroupsAddUpdateGroupUser - Add an updateGroup that a user can see.
     *
     * No Documentation Found.
    **/
    updateGroupsAddUpdateGroupUser(req: operations.UpdateGroupsAddUpdateGroupUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupsAddUpdateGroupUserResponse>;
    /**
     * updateGroupsDelete - Delete an Update Group.
     *
     * No Documentation Found.
    **/
    updateGroupsDelete(req: operations.UpdateGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupsDeleteResponse>;
    /**
     * updateGroupsGet - Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
     *
     * No Documentation Found.
    **/
    updateGroupsGet(req: operations.UpdateGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupsGetResponse>;
    /**
     * updateGroupsGetUpdateGroupBundles - Get a list of bundles for UpdateGroup.
     *
     * No Documentation Found.
    **/
    updateGroupsGetUpdateGroupBundles(req: operations.UpdateGroupsGetUpdateGroupBundlesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupsGetUpdateGroupBundlesResponse>;
    /**
     * updateGroupsPost - Add a new Update Group.  The report field is a string that has a dot based request for a specific piece of submitted data.
     *
     * No Documentation Found.
    **/
    updateGroupsPost(req: operations.UpdateGroupsPostRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupsPostResponse>;
    /**
     * updateGroupsPut - Modify an Update Group.
     *
     * No Documentation Found.
    **/
    updateGroupsPut(req: operations.UpdateGroupsPutRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupsPutResponse>;
    /**
     * updateGroupsRemoveUpdateGroupUser - Deletes an update group a user could see.
     *
     * No Documentation Found.
    **/
    updateGroupsRemoveUpdateGroupUser(req: operations.UpdateGroupsRemoveUpdateGroupUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupsRemoveUpdateGroupUserResponse>;
    /**
     * updateSystemGetCachedFiles - Get a list of Cached Files installed on the client Machine.
     *
     * No Documentation Found.
    **/
    updateSystemGetCachedFiles(req: operations.UpdateSystemGetCachedFilesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSystemGetCachedFilesResponse>;
    /**
     * updateSystemGetCheckin - Checks the Client ID into the Update System.
     *
     * No Documentation Found.
    **/
    updateSystemGetCheckin(req: operations.UpdateSystemGetCheckinRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSystemGetCheckinResponse>;
    /**
     * userContentDefinitionsDeleteUserContentDefinition - Delete a UserContentDefinition
     *
     * Deletes an UserContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate
     *             ApiError is returned.
    **/
    userContentDefinitionsDeleteUserContentDefinition(req: operations.UserContentDefinitionsDeleteUserContentDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UserContentDefinitionsDeleteUserContentDefinitionResponse>;
    /**
     * userContentDefinitionsGetUserContentDefinition - Get a UserContentDefinition by ID
     *
     * Gets a UserContentDefinition by ID. When successful, the response is the requested UserContentDefinition.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    userContentDefinitionsGetUserContentDefinition(req: operations.UserContentDefinitionsGetUserContentDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UserContentDefinitionsGetUserContentDefinitionResponse>;
    /**
     * userContentDefinitionsGetUserContentDefinitions - Get UserContentDefinitions
     *
     * Gets a collection of UserContentDefinitions. When successful, the response is a PagedResponse of UserContentDefinitions.
     *             If unsuccessful, an appropriate ApiError is returned.
    **/
    userContentDefinitionsGetUserContentDefinitions(req: operations.UserContentDefinitionsGetUserContentDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.UserContentDefinitionsGetUserContentDefinitionsResponse>;
    /**
     * userContentDefinitionsPostUserContentDefinition - Create a UserContentDefinition
     *
     * Creates a UserContentDefinition.  The body of the POST is the UserContentDefinition to create.
     *             The UserContentDefinitionID will be assigned on creation of the Job.  When successful, the response
     *             is the UserContentDefinitionID.  If unsuccessful, an appropriate ApiError is returned.
    **/
    userContentDefinitionsPostUserContentDefinition(req: operations.UserContentDefinitionsPostUserContentDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UserContentDefinitionsPostUserContentDefinitionResponse>;
    /**
     * userPermissionsGetCurrentUserRoles - Gets the current user's roles
     *
     * No Documentation Found.
    **/
    userPermissionsGetCurrentUserRoles(req: operations.UserPermissionsGetCurrentUserRolesRequest, config?: AxiosRequestConfig): Promise<operations.UserPermissionsGetCurrentUserRolesResponse>;
    /**
     * userPermissionsGetPermissions - Get a user's permissions
     *
     * No Documentation Found.
    **/
    userPermissionsGetPermissions(req: operations.UserPermissionsGetPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.UserPermissionsGetPermissionsResponse>;
    /**
     * userPermissionsGetRoles - Get a user's roles
     *
     * No Documentation Found.
    **/
    userPermissionsGetRoles(req: operations.UserPermissionsGetRolesRequest, config?: AxiosRequestConfig): Promise<operations.UserPermissionsGetRolesResponse>;
    /**
     * userPermissionsGetUsers - Get all user's in a role
     *
     * No Documentation Found.
    **/
    userPermissionsGetUsers(req: operations.UserPermissionsGetUsersRequest, config?: AxiosRequestConfig): Promise<operations.UserPermissionsGetUsersResponse>;
    /**
     * usersDelete - Delete a user
     *
     * No Documentation Found.
    **/
    usersDelete(req: operations.UsersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.UsersDeleteResponse>;
    /**
     * usersGet - Get users
     *
     * No Documentation Found.
    **/
    usersGet(req: operations.UsersGetRequest, config?: AxiosRequestConfig): Promise<operations.UsersGetResponse>;
    /**
     * usersGetCurrentUser - Gets the current user
     *
     * No Documentation Found.
    **/
    usersGetCurrentUser(config?: AxiosRequestConfig): Promise<operations.UsersGetCurrentUserResponse>;
    /**
     * usersPost - Create a user
     *
     * No Documentation Found.
    **/
    usersPost(req: operations.UsersPostRequest, config?: AxiosRequestConfig): Promise<operations.UsersPostResponse>;
    /**
     * usersPut - Update a user
     *
     * No Documentation Found.
    **/
    usersPut(req: operations.UsersPutRequest, config?: AxiosRequestConfig): Promise<operations.UsersPutResponse>;
    /**
     * usersPutCurrentUser - Update a user
     *
     * No Documentation Found.
    **/
    usersPutCurrentUser(req: operations.UsersPutCurrentUserRequest, config?: AxiosRequestConfig): Promise<operations.UsersPutCurrentUserResponse>;
    /**
     * voucherHistoryGetVoucherHistory - Gets voucher history data
     *
     * No Documentation Found.
    **/
    voucherHistoryGetVoucherHistory(req: operations.VoucherHistoryGetVoucherHistoryRequest, config?: AxiosRequestConfig): Promise<operations.VoucherHistoryGetVoucherHistoryResponse>;
    /**
     * vouchersDelete - Delete a voucher
     *
     * No Documentation Found.
    **/
    vouchersDelete(req: operations.VouchersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VouchersDeleteResponse>;
    /**
     * vouchersGet - Gets a list of vouchers
     *
     * No Documentation Found.
    **/
    vouchersGet(req: operations.VouchersGetRequest, config?: AxiosRequestConfig): Promise<operations.VouchersGetResponse>;
    /**
     * vouchersGetVoucherHistory - Get a voucher's history.
     *
     * No Documentation Found.
    **/
    vouchersGetVoucherHistory(req: operations.VouchersGetVoucherHistoryRequest, config?: AxiosRequestConfig): Promise<operations.VouchersGetVoucherHistoryResponse>;
    /**
     * vouchersPost - Create a voucher
     *
     * No Documentation Found.
    **/
    vouchersPost(req: operations.VouchersPostRequest, config?: AxiosRequestConfig): Promise<operations.VouchersPostResponse>;
    /**
     * vouchersPut - Update a voucher
     *
     * No Documentation Found.
    **/
    vouchersPut(req: operations.VouchersPutRequest, config?: AxiosRequestConfig): Promise<operations.VouchersPutResponse>;
}
export {};
