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
    s := sdk.New()
    
    req := operations.ActivitiesDeleteActivityRequest{
        PathParams: operations.ActivitiesDeleteActivityPathParams{
            ActivityID: 2682844416202521633,
        },
    }
    
    res, err := s.Sdk.ActivitiesDeleteActivity(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `ActivitiesDeleteActivity` - Mark the delete flag for the Activity
* `ActivitiesGetActivities` - Get Activities
* `ActivitiesGetActivity` - Get an Activity by ID
* `ActivitiesPostActivity` - Create an Activity
* `ActivitiesPutActivity` - Update an Activity
* `ActivityRunsGetActivityRun` - Get an ActivityRun by ID
* `ActivityRunsGetActivityRunStatus` - Get the ActivityRunStatus of an ActivityRun
* `ActivityRunsGetActivityRuns` - Get ActivityRuns
* `ActivityRunsPutActivityRun` - Update an ActivityRun
* `ActivityRunsPutActivityRunStatus` - Update the ActivityRunStatus of an ActivityRun
* `AftermarketServicesGetCerts` - No Documentation Found.
* `AftermarketServicesGetConnectionStatus` - Check whether there is connectivity to AGCO Power Web Services
* `AftermarketServicesGetEngineIqaCodes` - Get injector codes given engine.
* `AftermarketServicesGetProductionData` - Get production calibration data for given engine.
* `AftermarketServicesGetUserStatus` - Retrieve the status of an EDT Kit Registration with AGCO Power Web Services
* `AftermarketServicesPutEcu` - Activate or Deactivate an ECU, or Report an ECU as Damaged.
* `AftermarketServicesUpdateUserStatus` - Update the status of an EDT Kit Registration with AGCO Power Web Services
* `AgentsDeleteAgent` - Delete an Agent
* `AgentsGetAgentActivityRun` - Get an Agent's ActivityRun
* `AgentsGetAgentAsync` - Get Agent
* `AgentsGetAgents` - Get Agents
* `AgentsGetCurrentAgentActivityRun` - Get the ActivityRun of Agent associated with the current user
* `AgentsGetCurrentAgentAsync` - Get Agent associated with the current user
* `AgentsPostAgent` - Create an Agent
* `AgentsPutAgent` - Update an Agent
* `AgentsPutAgentActivityRun` - Update the ActivityRun assigned to the Agent.
* `AgentsPutAgentStatus` - Update an Agent
* `AuthenticationDefault` - Authenticate a user.
* `AuthenticationIsAlive` - Acknowledges the connection to the API
* `AuthenticationPutManageTokens` - Manage API tokens.
* `AuthenticationRequestPasswordReset` - Request a password reset.
* `AuthenticationResetPasword` - Reset a password
* `AuthorizationCategoriesAddUser` - Add a category that a user can see.
* `AuthorizationCategoriesDelete` - Remove an authorization category.
* `AuthorizationCategoriesGet` - Get authorization categories.
* `AuthorizationCategoriesGetUsers` - Returns a report of access that users have to Authorization Categories.
* `AuthorizationCategoriesPost` - Add an authorization category.
* `AuthorizationCategoriesPut` - Update an authorization category.
* `AuthorizationCategoriesRemoveUser` - Deletes a category a user could see.
* `AuthorizationCodeDefinitionsAddCategoryToDefinition` - Add a category to an authorizationCodeDefintion.
* `AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinition` - Disable an authorization code definition
* `AuthorizationCodeDefinitionsGetAuthorizationCodeDefinition` - Get authorization code definitions.
* `AuthorizationCodeDefinitionsRemoveCategoryFromDefinition` - Deletes the category from the authorization code definition.
* `AuthorizationCodesDeleteAuthorizationCode` - Hide an authorization code.
* `AuthorizationCodesGetAuthorizationCode` - Get an authorization code by its ID.
* `AuthorizationCodesGetAuthorizationCodes` - Get authorization codes.
* `AuthorizationCodesGetContactInformation` - Get contact information for an authorization code.
* `AuthorizationCodesValidateAuthorizationCode` - No Documentation Found.
* `AuthorizationContactInformationGet` - Get contact information for authorization codes.
* `AuthorizationContactInformationPost` - Add contact information for authorization code.
* `BrandsBrands` - Gets a list of Brands.
* `BundlesDeleteBundle` - Delete a Bundle.
* `BundlesGetBundle` - Get a specific Bundle by ID.
* `BundlesGetBundles` - Get the list of bundles.
* `BundlesPostBundle` - Add a Bundle to the Update System.
* `BundlesPutBundle` - Modify a Bundle in the Update System.
* `ClientsGet` - Get a List of Clients in the Update System.
* `ClientsGetAvailableSubscriptions` - Get a Client's Available Update Group Subscriptions
* `ClientsGetSubscriptions` - Get a Client's Current Update Group Subscriptions
* `ClientsPut` - Update a Client.
* `ContentDefinitionsDeleteContentDefinition` - Delete a ContentDefinition
* `ContentDefinitionsDeleteContentDefinitionAttribute` - Remove an Attribute from a ContentDefinition
* `ContentDefinitionsGetContentDefinition` - Get a ContentDefinition by ID
* `ContentDefinitionsGetContentDefinitionAttributes` - Get Attributes for a ContentDefinition
* `ContentDefinitionsGetContentDefinitions` - Get ContentDefinitions
* `ContentDefinitionsPostContentDefinitionAttribute` - Add an Attribute to a ContentDefinition
* `ContentDefinitionsPutContentDefinitionAttributeAsync` - Update an Attribute for a ContentDefinition
* `ContentReleaseDeleteContentReleaseVersionn` - Delete a ContentReleaseVersion
* `ContentReleaseGetContentReleaseVersion` - Get ContentReleaseVersion
* `ContentReleasePostContentRelease` - Create a ContentReleaseVersion
* `ContentReleasePutContentDefinition` - Update a ContentReleaseVersion
* `ContentSubmissionTypesDeleteContentSubmissionType` - Remove a Content Submission Type
* `ContentSubmissionTypesGetContentSubmissionType` - Retrieves a Content Submission Type by its ID.
* `ContentSubmissionTypesGetContentSubmissionTypes` - Returns available Content Submission Types.
* `ContentSubmissionTypesPostContentSubmissionType` - Add a Content Submission Type
* `ContentSubmissionTypesPutContentSubmissionType` - Update a Content Submission Type
* `ContentSubmissionsDeleteContentSubmission` - Delete a ContentSubmission
* `ContentSubmissionsDeleteContentSubmissionAttribute` - Remove an Attribute from a ContentSubmission
* `ContentSubmissionsGetContentSubmission` - Get a ContentSubmission by ID
* `ContentSubmissionsGetContentSubmissionAttributes` - Get Attributes for a ContentSubmission
* `ContentSubmissionsGetContentSubmissions` - Get ContentSubmissions
* `ContentSubmissionsPostContentSubmissionAttribute` - Add an Attribute to a ContentSubmission
* `ContentSubmissionsPutContentSubmissionAttributeAsync` - Update an Attribute for a ContentSubmission
* `DealerByCountryGetCountries` - Get a total count of dealers per country
* `DealersGetDealerbyDealerCode` - Lookup a dealer using a dealer code.
* `DealersGetDealers` - Get a list of dealers.
* `FilesDeleteFile` - Mark a file as 'Removed'. Disables download of the file and hides metadata from GET all method
* `FilesGetFile` - Gets a file's metadata.
* `FilesGetFileContents` - Download the contents of a file. The current State of the File should be 'Available'.
* `FilesGetFiles` - Get a paged response of file metadata.
* `FilesPostFile` - Create the metadata for a file before uploading. The State of the File should be 'Created'.
* `FilesPutFile` - Update the metadata for a file. Size may not be modified by the client.
* `FilesPutFileContents` - Upload the contents of a file. The current State of the File should be 'Created'.
* `GetAPIV2AuthorizationCodeDefinitionsID` - Get an authorization code definition by its ID
* `GetAPIV2ClientsID` - Get a Client in the Update System.
* `GetAPIV2ContentReleasesContentReleaseID` - Get a Content Release Version by ID
* `GetAPIV2LicensesID` - Get a license.
* `GetAPIV2PackageTypesID` - Get a specific Package Type.
* `GetAPIV2UpdateGroupsID` - Get a specific Update Group by ID.
* `GetAPIV2UsersCurrentPermissions` - Get a user's permissions
* `GetAPIV2UsersID` - Get a specific user
* `GetAPIV2VouchersVoucherCode` - Get a voucher
* `GlobalImageCategoriesGetFile` - Gets a file's metadata.
* `GlobalImageCategoriesGetFiles` - Get a paged response of file metadata.
* `GlobalImageCategoriesPostFile` - Create the metadata for a file before uploading. The State should be 'Created'.
* `GlobalImagesDeleteFile` - Mark a file as 'Removed'. Disables download of the image and hides metadata from GET all method
* `GlobalImagesGetGlobalImage` - Gets a GlobalImage's metadata.
* `GlobalImagesGetGlobalImageContents` - Download the contents of a GlobalImage. The current State of the GlobalImage should be 'Available'.
* `GlobalImagesGetGlobalImages` - Get a paged response of GlobalImage.
* `GlobalImagesPutGlobalImageContents` - Upload the contents of a GlobalImage. The current State of the File for the GlobalImage should be 'Created'.
* `JobRunsDeleteJobRun` - Delete a JobRun
* `JobRunsGetJobRun` - Get a JobRun by ID
* `JobRunsGetJobRuns` - Get JobRuns
* `JobRunsPostJobRun` - Create a JobRun
* `JobRunsPutJobRun` - Update a JobRun
* `JobsDeleteJob` - Mark the delete flag for the Job
* `JobsGetJob` - Get a Job by ID
* `JobsGetJobs` - Get Jobs
* `JobsPostJob` - Create a Job
* `JobsPutJob` - Update a Job
* `LanguagesCreateLanguage` - Add a Language to support for translations. Accepts a Language object. Returns the Id of the created object.
* `LanguagesDeleteLanguage` - Remove a Language from those supported for translations. Marks language as deleted.
* `LanguagesGetLanguage` - Get a language by its id. Returns a Language object
* `LanguagesGetLanguages` - Get a list of the languages for which translations are supported. Returns a PagedResponse of Language objects.
* `LanguagesUpdateLanguage` - Update a language’s description. Accepts a Language object.
* `LicenseActivationsPost` - Create a license activation.
* `LicenseActivationsPostRegisterEdtLite` - Register an EDT Lite with the Server
* `LicenseActivationsPut` - Update a license activiation.
* `LicenseActivationsPutConfirm` - Confirm that the client has applied the updated license.
* `LicensesGet` - Gets a list of licenses with the specified criteria.
* `LogsGetLog` - Get a log by ID
* `LogsGetLogs` - Get the API System logs, most recent first.
* `LogsPostLog` - Add a Log entry
* `NotificationsPostMail` - Sends an email message.
* `PackageReportsDefault` - Get the package reports for a client.
* `PackageTypesAddPackageTypeUser` - Add a package type that a user can see.
* `PackageTypesDelete` - Delete a Package Type.
* `PackageTypesGet` - Get all of the Package Types.
* `PackageTypesPost` - Add a Package Type.
* `PackageTypesPut` - Modify a Package Type.
* `PackageTypesRemovePackageTypeUser` - Deletes a package type a user could see.
* `PackageTypetoBundlesDelete` - Delete a Package Type to Bundle Relationship.
* `PackageTypetoBundlesGet` - Get all of the Package Type to Bundle Relationships.
* `PackageTypetoBundlesPost` - Add a new Package Type ID to Bundle Relationship.
* `PackageTypetoBundlesPut` - Update a Package Type ID to Bundle Relationship.
* `PackagesDeletePackage` - Delete a Package.
* `PackagesGetPackage` - Find a Package.
* `PackagesGetPackages` - List Packages.
* `PackagesPostPackage` - Add a Package to the Update System.
* `PackagesPutPackage` - Modify a Packge to the Update System.
* `PermissionsDeletePermission` - Deletes a Permission
* `PermissionsGetPermission` - Gets a Permission
* `PermissionsGetPermissions` - List Permissions
* `PermissionsPostPermission` - Adds a Permission
* `PermissionsPutPermission` - Updates a Permission
* `PriorityPackagesDeletePriorityPackages` - Delete a Priority Package for a Client.
* `PriorityPackagesGetPriorityPackage` - Get a Priority Packages for a Client.
* `PriorityPackagesGetPriorityPackages` - Get a list of Priority Packages by Client.
* `PriorityPackagesPostPriorityPackages` - Add a Priority Package for a Client.
* `ReleaseDeleteReleaseBundle` - Deletes the association between a release and a bundle.
* `ReleaseGetRelease` - Get a  Release by ID
* `ReleaseGetReleases` - Get Release
* `ReleasePostRelease` - Create a Release
* `ReleasePostReleaseBundle` - Associates the release with a bundle.
* `ReleasePutContentDefinition` - Update a Release
* `ReportingBundleStatusSummary` - Get a summary of all Packages in a Bundle
* `ReportingBundlesInUpdateGroup` - Get a list of bundles for UpdateGroup.
* `ReportingClientInfo` - Get Client Information
* `ReportingCurrentPackagesInUpdateGroup` - Get the current packages for an update group.
* `ReportingGetClient` - Get a Client in the Update System.
* `ReportingGetSubscriptions` - Get a list of current Client Subscriptions.
* `ReportingPackageStatusSummary` - Get a summary report for a Specific Package
* `ReportingRegisteredClients` - Get a list of subscribed clients
* `ReportingUpdateGroups` - Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
* `ReportingUpdateMetrics` - Get data for pie charts in UpdateMetrics.
* `RolesDeleteRole` - Deletes a User Role
* `RolesGetRole` - Gets a User Role
* `RolesGetRolePermissions` - Get the Permissions for a Role
* `RolesGetRoles` - List Roles
* `RolesPostRole` - Adds a User Role
* `RolesPutRole` - Updates a User Role
* `StepsGetStep` - Get a Step by ID
* `StepsGetSteps` - Get Steps
* `StepsPostStep` - Create a Step
* `StepsPutStep` - Update a Step
* `StringDefinitionsGetDefinition` - Get a paged response of Global String Definitions.
* `StringDefinitionsGetDefinitions` - Get a paged response of Global String Definitions.
* `StringTranslationsGetTranslation` - Get a single translation based upon stringId and languageId
* `StringTranslationsGetTranslations` - Get a paged response of Global String Translations.
* `StringTranslationsUpdateTranslation` - Update a string value or a state for a string translation.
* `TranslationKeysCreateTranslationKey` - Create a translationKey object.
* `TranslationKeysGet` - Get a paged response of TranslationKeys.
* `TranslationKeysGetTranslationKey` - Get TranslationKey by ID
* `TranslationKeysUpdateTranslationKey` - Update the StringID of the translationKey object.
* `TranslationRequestsCreateTranslationRequest` - Create a translation request. Accepts a TranslationRequest object. Returns the Id of the created object. The state of the TranslationRequest must be ‘NotSubmitted’.
* `TranslationRequestsGetTranslationRequest` - Get a TranslationRequest object by id. Returns TranslationRequest object with its language ids and string ids.
* `TranslationRequestsGetTranslationRequests` - Get all TranslationRequest objects. Returns a PagedResponse of TranslationRequest objects with their language ids and string ids.
* `TranslationRequestsUpdateTranslationRequest` - Update a TranslationRequest object by id. Accepts a TranslationRequest object.
* `TranslationSetsDeleteTranslationSetAttribute` - Delete a set of TranslationSetAttribute object
* `TranslationSetsGetSourceStrings` - Gets the information needed to translate a string in a translation set
* `TranslationSetsGetStatistics` - Gets the statistics for translation sets such as the language ids and count of string definitions.
* `TranslationSetsGetTranslationSet` - Get a TranslationSet object by its id. Related TranslationSetStrings are NOT returned.
* `TranslationSetsGetTranslationSetAttributes` - Get a PagedResponse of TranslationSetAttribute objects
* `TranslationSetsGetTranslationSetStrings` - Get a PagedResponse of TranslationSetString objects
* `TranslationSetsGetTranslationSets` - Get a PagedResponse of TranslationSet objects. Related TranslationSetStrings are NOT returned
* `TranslationSetsPostTranslationSetAttribute` - Create a TranslationSetAttribute object
* `TranslationSetsUpdateTranslationSetAttribute` - Update a TranslationSetAttribute object
* `UpdateGroupClientRelationshipsGetSubscription` - Get a subscription by RelationshipID
* `UpdateGroupClientRelationshipsGetSubscriptions` - Get a list of current Client Subscriptions.
* `UpdateGroupClientRelationshipsPostSubscription` - Add a subscription
* `UpdateGroupClientRelationshipsPutSubscription` - Updates a Subscription
* `UpdateGroupClientRelationshipsPutSubscriptionByClientIDUpdateGroupID` - DEPRECATED. Set client subscription status for an update group.
* `UpdateGroupSubscriptionsDeleteUpdateGroupSubscription` - Delete an Update Group Subscription
* `UpdateGroupSubscriptionsGetUpdateGroupSubscription` - Get an Update Group Subscription
* `UpdateGroupSubscriptionsGetUpdateGroupSubscriptions` - Get Update Group Subscriptions
* `UpdateGroupSubscriptionsPostUpdateGroupSubscription` - Add an Update Group Subscription
* `UpdateGroupSubscriptionsPutUpdateGroupSubscription` - Update an Update Group Subscription
* `UpdateGroupsAddUpdateGroupUser` - Add an updateGroup that a user can see.
* `UpdateGroupsDelete` - Delete an Update Group.
* `UpdateGroupsGet` - Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
* `UpdateGroupsGetUpdateGroupBundles` - Get a list of bundles for UpdateGroup.
* `UpdateGroupsPost` - Add a new Update Group.  The report field is a string that has a dot based request for a specific piece of submitted data.
* `UpdateGroupsPut` - Modify an Update Group.
* `UpdateGroupsRemoveUpdateGroupUser` - Deletes an update group a user could see.
* `UpdateSystemGetCachedFiles` - Get a list of Cached Files installed on the client Machine.
* `UpdateSystemGetCheckin` - Checks the Client ID into the Update System.
* `UserContentDefinitionsDeleteUserContentDefinition` - Delete a UserContentDefinition
* `UserContentDefinitionsGetUserContentDefinition` - Get a UserContentDefinition by ID
* `UserContentDefinitionsGetUserContentDefinitions` - Get UserContentDefinitions
* `UserContentDefinitionsPostUserContentDefinition` - Create a UserContentDefinition
* `UserPermissionsGetCurrentUserRoles` - Gets the current user's roles
* `UserPermissionsGetPermissions` - Get a user's permissions
* `UserPermissionsGetRoles` - Get a user's roles
* `UserPermissionsGetUsers` - Get all user's in a role
* `UsersDelete` - Delete a user
* `UsersGet` - Get users
* `UsersGetCurrentUser` - Gets the current user
* `UsersPost` - Create a user
* `UsersPut` - Update a user
* `UsersPutCurrentUser` - Update a user
* `VoucherHistoryGetVoucherHistory` - Gets voucher history data
* `VouchersDelete` - Delete a voucher
* `VouchersGet` - Gets a list of vouchers
* `VouchersGetVoucherHistory` - Get a voucher's history.
* `VouchersPost` - Create a voucher
* `VouchersPut` - Update a voucher

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
