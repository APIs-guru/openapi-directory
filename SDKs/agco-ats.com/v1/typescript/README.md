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
import { ActivitiesDeleteActivityRequest, ActivitiesDeleteActivityResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ActivitiesDeleteActivityRequest = {
  pathParams: {
    activityId: 2682844416202521633,
  },
};

sdk.sdk.activitiesDeleteActivity(req).then((res: ActivitiesDeleteActivityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `activitiesDeleteActivity` - Mark the delete flag for the Activity
* `activitiesGetActivities` - Get Activities
* `activitiesGetActivity` - Get an Activity by ID
* `activitiesPostActivity` - Create an Activity
* `activitiesPutActivity` - Update an Activity
* `activityRunsGetActivityRun` - Get an ActivityRun by ID
* `activityRunsGetActivityRunStatus` - Get the ActivityRunStatus of an ActivityRun
* `activityRunsGetActivityRuns` - Get ActivityRuns
* `activityRunsPutActivityRun` - Update an ActivityRun
* `activityRunsPutActivityRunStatus` - Update the ActivityRunStatus of an ActivityRun
* `aftermarketServicesGetCerts` - No Documentation Found.
* `aftermarketServicesGetConnectionStatus` - Check whether there is connectivity to AGCO Power Web Services
* `aftermarketServicesGetEngineIqaCodes` - Get injector codes given engine.
* `aftermarketServicesGetProductionData` - Get production calibration data for given engine.
* `aftermarketServicesGetUserStatus` - Retrieve the status of an EDT Kit Registration with AGCO Power Web Services
* `aftermarketServicesPutEcu` - Activate or Deactivate an ECU, or Report an ECU as Damaged.
* `aftermarketServicesUpdateUserStatus` - Update the status of an EDT Kit Registration with AGCO Power Web Services
* `agentsDeleteAgent` - Delete an Agent
* `agentsGetAgentActivityRun` - Get an Agent's ActivityRun
* `agentsGetAgentAsync` - Get Agent
* `agentsGetAgents` - Get Agents
* `agentsGetCurrentAgentActivityRun` - Get the ActivityRun of Agent associated with the current user
* `agentsGetCurrentAgentAsync` - Get Agent associated with the current user
* `agentsPostAgent` - Create an Agent
* `agentsPutAgent` - Update an Agent
* `agentsPutAgentActivityRun` - Update the ActivityRun assigned to the Agent.
* `agentsPutAgentStatus` - Update an Agent
* `authenticationDefault` - Authenticate a user.
* `authenticationIsAlive` - Acknowledges the connection to the API
* `authenticationPutManageTokens` - Manage API tokens.
* `authenticationRequestPasswordReset` - Request a password reset.
* `authenticationResetPasword` - Reset a password
* `authorizationCategoriesAddUser` - Add a category that a user can see.
* `authorizationCategoriesDelete` - Remove an authorization category.
* `authorizationCategoriesGet` - Get authorization categories.
* `authorizationCategoriesGetUsers` - Returns a report of access that users have to Authorization Categories.
* `authorizationCategoriesPost` - Add an authorization category.
* `authorizationCategoriesPut` - Update an authorization category.
* `authorizationCategoriesRemoveUser` - Deletes a category a user could see.
* `authorizationCodeDefinitionsAddCategoryToDefinition` - Add a category to an authorizationCodeDefintion.
* `authorizationCodeDefinitionsDeleteAuthorizationCodeDefinition` - Disable an authorization code definition
* `authorizationCodeDefinitionsGetAuthorizationCodeDefinition` - Get authorization code definitions.
* `authorizationCodeDefinitionsRemoveCategoryFromDefinition` - Deletes the category from the authorization code definition.
* `authorizationCodesDeleteAuthorizationCode` - Hide an authorization code.
* `authorizationCodesGetAuthorizationCode` - Get an authorization code by its ID.
* `authorizationCodesGetAuthorizationCodes` - Get authorization codes.
* `authorizationCodesGetContactInformation` - Get contact information for an authorization code.
* `authorizationCodesValidateAuthorizationCode` - No Documentation Found.
* `authorizationContactInformationGet` - Get contact information for authorization codes.
* `authorizationContactInformationPost` - Add contact information for authorization code.
* `brandsBrands` - Gets a list of Brands.
* `bundlesDeleteBundle` - Delete a Bundle.
* `bundlesGetBundle` - Get a specific Bundle by ID.
* `bundlesGetBundles` - Get the list of bundles.
* `bundlesPostBundle` - Add a Bundle to the Update System.
* `bundlesPutBundle` - Modify a Bundle in the Update System.
* `clientsGet` - Get a List of Clients in the Update System.
* `clientsGetAvailableSubscriptions` - Get a Client's Available Update Group Subscriptions
* `clientsGetSubscriptions` - Get a Client's Current Update Group Subscriptions
* `clientsPut` - Update a Client.
* `contentDefinitionsDeleteContentDefinition` - Delete a ContentDefinition
* `contentDefinitionsDeleteContentDefinitionAttribute` - Remove an Attribute from a ContentDefinition
* `contentDefinitionsGetContentDefinition` - Get a ContentDefinition by ID
* `contentDefinitionsGetContentDefinitionAttributes` - Get Attributes for a ContentDefinition
* `contentDefinitionsGetContentDefinitions` - Get ContentDefinitions
* `contentDefinitionsPostContentDefinitionAttribute` - Add an Attribute to a ContentDefinition
* `contentDefinitionsPutContentDefinitionAttributeAsync` - Update an Attribute for a ContentDefinition
* `contentReleaseDeleteContentReleaseVersionn` - Delete a ContentReleaseVersion
* `contentReleaseGetContentReleaseVersion` - Get ContentReleaseVersion
* `contentReleasePostContentRelease` - Create a ContentReleaseVersion
* `contentReleasePutContentDefinition` - Update a ContentReleaseVersion
* `contentSubmissionTypesDeleteContentSubmissionType` - Remove a Content Submission Type
* `contentSubmissionTypesGetContentSubmissionType` - Retrieves a Content Submission Type by its ID.
* `contentSubmissionTypesGetContentSubmissionTypes` - Returns available Content Submission Types.
* `contentSubmissionTypesPostContentSubmissionType` - Add a Content Submission Type
* `contentSubmissionTypesPutContentSubmissionType` - Update a Content Submission Type
* `contentSubmissionsDeleteContentSubmission` - Delete a ContentSubmission
* `contentSubmissionsDeleteContentSubmissionAttribute` - Remove an Attribute from a ContentSubmission
* `contentSubmissionsGetContentSubmission` - Get a ContentSubmission by ID
* `contentSubmissionsGetContentSubmissionAttributes` - Get Attributes for a ContentSubmission
* `contentSubmissionsGetContentSubmissions` - Get ContentSubmissions
* `contentSubmissionsPostContentSubmissionAttribute` - Add an Attribute to a ContentSubmission
* `contentSubmissionsPutContentSubmissionAttributeAsync` - Update an Attribute for a ContentSubmission
* `dealerByCountryGetCountries` - Get a total count of dealers per country
* `dealersGetDealerbyDealerCode` - Lookup a dealer using a dealer code.
* `dealersGetDealers` - Get a list of dealers.
* `filesDeleteFile` - Mark a file as 'Removed'. Disables download of the file and hides metadata from GET all method
* `filesGetFile` - Gets a file's metadata.
* `filesGetFileContents` - Download the contents of a file. The current State of the File should be 'Available'.
* `filesGetFiles` - Get a paged response of file metadata.
* `filesPostFile` - Create the metadata for a file before uploading. The State of the File should be 'Created'.
* `filesPutFile` - Update the metadata for a file. Size may not be modified by the client.
* `filesPutFileContents` - Upload the contents of a file. The current State of the File should be 'Created'.
* `getApiV2AuthorizationCodeDefinitionsId` - Get an authorization code definition by its ID
* `getApiV2ClientsId` - Get a Client in the Update System.
* `getApiV2ContentReleasesContentReleaseId` - Get a Content Release Version by ID
* `getApiV2LicensesId` - Get a license.
* `getApiV2PackageTypesId` - Get a specific Package Type.
* `getApiV2UpdateGroupsId` - Get a specific Update Group by ID.
* `getApiV2UsersCurrentPermissions` - Get a user's permissions
* `getApiV2UsersId` - Get a specific user
* `getApiV2VouchersVoucherCode` - Get a voucher
* `globalImageCategoriesGetFile` - Gets a file's metadata.
* `globalImageCategoriesGetFiles` - Get a paged response of file metadata.
* `globalImageCategoriesPostFile` - Create the metadata for a file before uploading. The State should be 'Created'.
* `globalImagesDeleteFile` - Mark a file as 'Removed'. Disables download of the image and hides metadata from GET all method
* `globalImagesGetGlobalImage` - Gets a GlobalImage's metadata.
* `globalImagesGetGlobalImageContents` - Download the contents of a GlobalImage. The current State of the GlobalImage should be 'Available'.
* `globalImagesGetGlobalImages` - Get a paged response of GlobalImage.
* `globalImagesPutGlobalImageContents` - Upload the contents of a GlobalImage. The current State of the File for the GlobalImage should be 'Created'.
* `jobRunsDeleteJobRun` - Delete a JobRun
* `jobRunsGetJobRun` - Get a JobRun by ID
* `jobRunsGetJobRuns` - Get JobRuns
* `jobRunsPostJobRun` - Create a JobRun
* `jobRunsPutJobRun` - Update a JobRun
* `jobsDeleteJob` - Mark the delete flag for the Job
* `jobsGetJob` - Get a Job by ID
* `jobsGetJobs` - Get Jobs
* `jobsPostJob` - Create a Job
* `jobsPutJob` - Update a Job
* `languagesCreateLanguage` - Add a Language to support for translations. Accepts a Language object. Returns the Id of the created object.
* `languagesDeleteLanguage` - Remove a Language from those supported for translations. Marks language as deleted.
* `languagesGetLanguage` - Get a language by its id. Returns a Language object
* `languagesGetLanguages` - Get a list of the languages for which translations are supported. Returns a PagedResponse of Language objects.
* `languagesUpdateLanguage` - Update a language’s description. Accepts a Language object.
* `licenseActivationsPost` - Create a license activation.
* `licenseActivationsPostRegisterEdtLite` - Register an EDT Lite with the Server
* `licenseActivationsPut` - Update a license activiation.
* `licenseActivationsPutConfirm` - Confirm that the client has applied the updated license.
* `licensesGet` - Gets a list of licenses with the specified criteria.
* `logsGetLog` - Get a log by ID
* `logsGetLogs` - Get the API System logs, most recent first.
* `logsPostLog` - Add a Log entry
* `notificationsPostMail` - Sends an email message.
* `packageReportsDefault` - Get the package reports for a client.
* `packageTypesAddPackageTypeUser` - Add a package type that a user can see.
* `packageTypesDelete` - Delete a Package Type.
* `packageTypesGet` - Get all of the Package Types.
* `packageTypesPost` - Add a Package Type.
* `packageTypesPut` - Modify a Package Type.
* `packageTypesRemovePackageTypeUser` - Deletes a package type a user could see.
* `packageTypetoBundlesDelete` - Delete a Package Type to Bundle Relationship.
* `packageTypetoBundlesGet` - Get all of the Package Type to Bundle Relationships.
* `packageTypetoBundlesPost` - Add a new Package Type ID to Bundle Relationship.
* `packageTypetoBundlesPut` - Update a Package Type ID to Bundle Relationship.
* `packagesDeletePackage` - Delete a Package.
* `packagesGetPackage` - Find a Package.
* `packagesGetPackages` - List Packages.
* `packagesPostPackage` - Add a Package to the Update System.
* `packagesPutPackage` - Modify a Packge to the Update System.
* `permissionsDeletePermission` - Deletes a Permission
* `permissionsGetPermission` - Gets a Permission
* `permissionsGetPermissions` - List Permissions
* `permissionsPostPermission` - Adds a Permission
* `permissionsPutPermission` - Updates a Permission
* `priorityPackagesDeletePriorityPackages` - Delete a Priority Package for a Client.
* `priorityPackagesGetPriorityPackage` - Get a Priority Packages for a Client.
* `priorityPackagesGetPriorityPackages` - Get a list of Priority Packages by Client.
* `priorityPackagesPostPriorityPackages` - Add a Priority Package for a Client.
* `releaseDeleteReleaseBundle` - Deletes the association between a release and a bundle.
* `releaseGetRelease` - Get a  Release by ID
* `releaseGetReleases` - Get Release
* `releasePostRelease` - Create a Release
* `releasePostReleaseBundle` - Associates the release with a bundle.
* `releasePutContentDefinition` - Update a Release
* `reportingBundleStatusSummary` - Get a summary of all Packages in a Bundle
* `reportingBundlesInUpdateGroup` - Get a list of bundles for UpdateGroup.
* `reportingClientInfo` - Get Client Information
* `reportingCurrentPackagesInUpdateGroup` - Get the current packages for an update group.
* `reportingGetClient` - Get a Client in the Update System.
* `reportingGetSubscriptions` - Get a list of current Client Subscriptions.
* `reportingPackageStatusSummary` - Get a summary report for a Specific Package
* `reportingRegisteredClients` - Get a list of subscribed clients
* `reportingUpdateGroups` - Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
* `reportingUpdateMetrics` - Get data for pie charts in UpdateMetrics.
* `rolesDeleteRole` - Deletes a User Role
* `rolesGetRole` - Gets a User Role
* `rolesGetRolePermissions` - Get the Permissions for a Role
* `rolesGetRoles` - List Roles
* `rolesPostRole` - Adds a User Role
* `rolesPutRole` - Updates a User Role
* `stepsGetStep` - Get a Step by ID
* `stepsGetSteps` - Get Steps
* `stepsPostStep` - Create a Step
* `stepsPutStep` - Update a Step
* `stringDefinitionsGetDefinition` - Get a paged response of Global String Definitions.
* `stringDefinitionsGetDefinitions` - Get a paged response of Global String Definitions.
* `stringTranslationsGetTranslation` - Get a single translation based upon stringId and languageId
* `stringTranslationsGetTranslations` - Get a paged response of Global String Translations.
* `stringTranslationsUpdateTranslation` - Update a string value or a state for a string translation.
* `translationKeysCreateTranslationKey` - Create a translationKey object.
* `translationKeysGet` - Get a paged response of TranslationKeys.
* `translationKeysGetTranslationKey` - Get TranslationKey by ID
* `translationKeysUpdateTranslationKey` - Update the StringID of the translationKey object.
* `translationRequestsCreateTranslationRequest` - Create a translation request. Accepts a TranslationRequest object. Returns the Id of the created object. The state of the TranslationRequest must be ‘NotSubmitted’.
* `translationRequestsGetTranslationRequest` - Get a TranslationRequest object by id. Returns TranslationRequest object with its language ids and string ids.
* `translationRequestsGetTranslationRequests` - Get all TranslationRequest objects. Returns a PagedResponse of TranslationRequest objects with their language ids and string ids.
* `translationRequestsUpdateTranslationRequest` - Update a TranslationRequest object by id. Accepts a TranslationRequest object.
* `translationSetsDeleteTranslationSetAttribute` - Delete a set of TranslationSetAttribute object
* `translationSetsGetSourceStrings` - Gets the information needed to translate a string in a translation set
* `translationSetsGetStatistics` - Gets the statistics for translation sets such as the language ids and count of string definitions.
* `translationSetsGetTranslationSet` - Get a TranslationSet object by its id. Related TranslationSetStrings are NOT returned.
* `translationSetsGetTranslationSetAttributes` - Get a PagedResponse of TranslationSetAttribute objects
* `translationSetsGetTranslationSetStrings` - Get a PagedResponse of TranslationSetString objects
* `translationSetsGetTranslationSets` - Get a PagedResponse of TranslationSet objects. Related TranslationSetStrings are NOT returned
* `translationSetsPostTranslationSetAttribute` - Create a TranslationSetAttribute object
* `translationSetsUpdateTranslationSetAttribute` - Update a TranslationSetAttribute object
* `updateGroupClientRelationshipsGetSubscription` - Get a subscription by RelationshipID
* `updateGroupClientRelationshipsGetSubscriptions` - Get a list of current Client Subscriptions.
* `updateGroupClientRelationshipsPostSubscription` - Add a subscription
* `updateGroupClientRelationshipsPutSubscription` - Updates a Subscription
* `updateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupId` - DEPRECATED. Set client subscription status for an update group.
* `updateGroupSubscriptionsDeleteUpdateGroupSubscription` - Delete an Update Group Subscription
* `updateGroupSubscriptionsGetUpdateGroupSubscription` - Get an Update Group Subscription
* `updateGroupSubscriptionsGetUpdateGroupSubscriptions` - Get Update Group Subscriptions
* `updateGroupSubscriptionsPostUpdateGroupSubscription` - Add an Update Group Subscription
* `updateGroupSubscriptionsPutUpdateGroupSubscription` - Update an Update Group Subscription
* `updateGroupsAddUpdateGroupUser` - Add an updateGroup that a user can see.
* `updateGroupsDelete` - Delete an Update Group.
* `updateGroupsGet` - Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
* `updateGroupsGetUpdateGroupBundles` - Get a list of bundles for UpdateGroup.
* `updateGroupsPost` - Add a new Update Group.  The report field is a string that has a dot based request for a specific piece of submitted data.
* `updateGroupsPut` - Modify an Update Group.
* `updateGroupsRemoveUpdateGroupUser` - Deletes an update group a user could see.
* `updateSystemGetCachedFiles` - Get a list of Cached Files installed on the client Machine.
* `updateSystemGetCheckin` - Checks the Client ID into the Update System.
* `userContentDefinitionsDeleteUserContentDefinition` - Delete a UserContentDefinition
* `userContentDefinitionsGetUserContentDefinition` - Get a UserContentDefinition by ID
* `userContentDefinitionsGetUserContentDefinitions` - Get UserContentDefinitions
* `userContentDefinitionsPostUserContentDefinition` - Create a UserContentDefinition
* `userPermissionsGetCurrentUserRoles` - Gets the current user's roles
* `userPermissionsGetPermissions` - Get a user's permissions
* `userPermissionsGetRoles` - Get a user's roles
* `userPermissionsGetUsers` - Get all user's in a role
* `usersDelete` - Delete a user
* `usersGet` - Get users
* `usersGetCurrentUser` - Gets the current user
* `usersPost` - Create a user
* `usersPut` - Update a user
* `usersPutCurrentUser` - Update a user
* `voucherHistoryGetVoucherHistory` - Gets voucher history data
* `vouchersDelete` - Delete a voucher
* `vouchersGet` - Gets a list of vouchers
* `vouchersGetVoucherHistory` - Get a voucher's history.
* `vouchersPost` - Create a voucher
* `vouchersPut` - Update a voucher

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
