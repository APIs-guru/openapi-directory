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
    
req = operations.ActivitiesDeleteActivityRequest(
    path_params=operations.ActivitiesDeleteActivityPathParams(
        activity_id=2682844416202521633,
    ),
)
    
res = s.sdk.activities_delete_activity(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `activities_delete_activity` - Mark the delete flag for the Activity
* `activities_get_activities` - Get Activities
* `activities_get_activity` - Get an Activity by ID
* `activities_post_activity` - Create an Activity
* `activities_put_activity` - Update an Activity
* `activity_runs_get_activity_run` - Get an ActivityRun by ID
* `activity_runs_get_activity_run_status` - Get the ActivityRunStatus of an ActivityRun
* `activity_runs_get_activity_runs` - Get ActivityRuns
* `activity_runs_put_activity_run` - Update an ActivityRun
* `activity_runs_put_activity_run_status` - Update the ActivityRunStatus of an ActivityRun
* `aftermarket_services_get_certs` - No Documentation Found.
* `aftermarket_services_get_connection_status` - Check whether there is connectivity to AGCO Power Web Services
* `aftermarket_services_get_engine_iqa_codes` - Get injector codes given engine.
* `aftermarket_services_get_production_data` - Get production calibration data for given engine.
* `aftermarket_services_get_user_status` - Retrieve the status of an EDT Kit Registration with AGCO Power Web Services
* `aftermarket_services_put_ecu` - Activate or Deactivate an ECU, or Report an ECU as Damaged.
* `aftermarket_services_update_user_status` - Update the status of an EDT Kit Registration with AGCO Power Web Services
* `agents_delete_agent` - Delete an Agent
* `agents_get_agent_activity_run` - Get an Agent's ActivityRun
* `agents_get_agent_async` - Get Agent
* `agents_get_agents` - Get Agents
* `agents_get_current_agent_activity_run` - Get the ActivityRun of Agent associated with the current user
* `agents_get_current_agent_async` - Get Agent associated with the current user
* `agents_post_agent` - Create an Agent
* `agents_put_agent` - Update an Agent
* `agents_put_agent_activity_run` - Update the ActivityRun assigned to the Agent.
* `agents_put_agent_status` - Update an Agent
* `authentication_default` - Authenticate a user.
* `authentication_is_alive` - Acknowledges the connection to the API
* `authentication_put_manage_tokens` - Manage API tokens.
* `authentication_request_password_reset` - Request a password reset.
* `authentication_reset_pasword` - Reset a password
* `authorization_categories_add_user` - Add a category that a user can see.
* `authorization_categories_delete` - Remove an authorization category.
* `authorization_categories_get` - Get authorization categories.
* `authorization_categories_get_users` - Returns a report of access that users have to Authorization Categories.
* `authorization_categories_post` - Add an authorization category.
* `authorization_categories_put` - Update an authorization category.
* `authorization_categories_remove_user` - Deletes a category a user could see.
* `authorization_code_definitions_add_category_to_definition` - Add a category to an authorizationCodeDefintion.
* `authorization_code_definitions_delete_authorization_code_definition` - Disable an authorization code definition
* `authorization_code_definitions_get_authorization_code_definition` - Get authorization code definitions.
* `authorization_code_definitions_remove_category_from_definition` - Deletes the category from the authorization code definition.
* `authorization_codes_delete_authorization_code` - Hide an authorization code.
* `authorization_codes_get_authorization_code` - Get an authorization code by its ID.
* `authorization_codes_get_authorization_codes` - Get authorization codes.
* `authorization_codes_get_contact_information` - Get contact information for an authorization code.
* `authorization_codes_validate_authorization_code` - No Documentation Found.
* `authorization_contact_information_get` - Get contact information for authorization codes.
* `authorization_contact_information_post` - Add contact information for authorization code.
* `brands_brands` - Gets a list of Brands.
* `bundles_delete_bundle` - Delete a Bundle.
* `bundles_get_bundle` - Get a specific Bundle by ID.
* `bundles_get_bundles` - Get the list of bundles.
* `bundles_post_bundle` - Add a Bundle to the Update System.
* `bundles_put_bundle` - Modify a Bundle in the Update System.
* `clients_get` - Get a List of Clients in the Update System.
* `clients_get_available_subscriptions` - Get a Client's Available Update Group Subscriptions
* `clients_get_subscriptions` - Get a Client's Current Update Group Subscriptions
* `clients_put` - Update a Client.
* `content_definitions_delete_content_definition` - Delete a ContentDefinition
* `content_definitions_delete_content_definition_attribute` - Remove an Attribute from a ContentDefinition
* `content_definitions_get_content_definition` - Get a ContentDefinition by ID
* `content_definitions_get_content_definition_attributes` - Get Attributes for a ContentDefinition
* `content_definitions_get_content_definitions` - Get ContentDefinitions
* `content_definitions_post_content_definition_attribute` - Add an Attribute to a ContentDefinition
* `content_definitions_put_content_definition_attribute_async` - Update an Attribute for a ContentDefinition
* `content_release_delete_content_release_versionn` - Delete a ContentReleaseVersion
* `content_release_get_content_release_version` - Get ContentReleaseVersion
* `content_release_post_content_release` - Create a ContentReleaseVersion
* `content_release_put_content_definition` - Update a ContentReleaseVersion
* `content_submission_types_delete_content_submission_type` - Remove a Content Submission Type
* `content_submission_types_get_content_submission_type` - Retrieves a Content Submission Type by its ID.
* `content_submission_types_get_content_submission_types` - Returns available Content Submission Types.
* `content_submission_types_post_content_submission_type` - Add a Content Submission Type
* `content_submission_types_put_content_submission_type` - Update a Content Submission Type
* `content_submissions_delete_content_submission` - Delete a ContentSubmission
* `content_submissions_delete_content_submission_attribute` - Remove an Attribute from a ContentSubmission
* `content_submissions_get_content_submission` - Get a ContentSubmission by ID
* `content_submissions_get_content_submission_attributes` - Get Attributes for a ContentSubmission
* `content_submissions_get_content_submissions` - Get ContentSubmissions
* `content_submissions_post_content_submission_attribute` - Add an Attribute to a ContentSubmission
* `content_submissions_put_content_submission_attribute_async` - Update an Attribute for a ContentSubmission
* `dealer_by_country_get_countries` - Get a total count of dealers per country
* `dealers_get_dealerby_dealer_code` - Lookup a dealer using a dealer code.
* `dealers_get_dealers` - Get a list of dealers.
* `files_delete_file` - Mark a file as 'Removed'. Disables download of the file and hides metadata from GET all method
* `files_get_file` - Gets a file's metadata.
* `files_get_file_contents` - Download the contents of a file. The current State of the File should be 'Available'.
* `files_get_files` - Get a paged response of file metadata.
* `files_post_file` - Create the metadata for a file before uploading. The State of the File should be 'Created'.
* `files_put_file` - Update the metadata for a file. Size may not be modified by the client.
* `files_put_file_contents` - Upload the contents of a file. The current State of the File should be 'Created'.
* `get_api_v2_authorization_code_definitions_id_` - Get an authorization code definition by its ID
* `get_api_v2_clients_id_` - Get a Client in the Update System.
* `get_api_v2_content_releases_content_release_id_` - Get a Content Release Version by ID
* `get_api_v2_licenses_id_` - Get a license.
* `get_api_v2_package_types_id_` - Get a specific Package Type.
* `get_api_v2_update_groups_id_` - Get a specific Update Group by ID.
* `get_api_v2_users_current_permissions` - Get a user's permissions
* `get_api_v2_users_id_` - Get a specific user
* `get_api_v2_vouchers_voucher_code_` - Get a voucher
* `global_image_categories_get_file` - Gets a file's metadata.
* `global_image_categories_get_files` - Get a paged response of file metadata.
* `global_image_categories_post_file` - Create the metadata for a file before uploading. The State should be 'Created'.
* `global_images_delete_file` - Mark a file as 'Removed'. Disables download of the image and hides metadata from GET all method
* `global_images_get_global_image` - Gets a GlobalImage's metadata.
* `global_images_get_global_image_contents` - Download the contents of a GlobalImage. The current State of the GlobalImage should be 'Available'.
* `global_images_get_global_images` - Get a paged response of GlobalImage.
* `global_images_put_global_image_contents` - Upload the contents of a GlobalImage. The current State of the File for the GlobalImage should be 'Created'.
* `job_runs_delete_job_run` - Delete a JobRun
* `job_runs_get_job_run` - Get a JobRun by ID
* `job_runs_get_job_runs` - Get JobRuns
* `job_runs_post_job_run` - Create a JobRun
* `job_runs_put_job_run` - Update a JobRun
* `jobs_delete_job` - Mark the delete flag for the Job
* `jobs_get_job` - Get a Job by ID
* `jobs_get_jobs` - Get Jobs
* `jobs_post_job` - Create a Job
* `jobs_put_job` - Update a Job
* `languages_create_language` - Add a Language to support for translations. Accepts a Language object. Returns the Id of the created object.
* `languages_delete_language` - Remove a Language from those supported for translations. Marks language as deleted.
* `languages_get_language` - Get a language by its id. Returns a Language object
* `languages_get_languages` - Get a list of the languages for which translations are supported. Returns a PagedResponse of Language objects.
* `languages_update_language` - Update a language’s description. Accepts a Language object.
* `license_activations_post` - Create a license activation.
* `license_activations_post_register_edt_lite` - Register an EDT Lite with the Server
* `license_activations_put` - Update a license activiation.
* `license_activations_put_confirm` - Confirm that the client has applied the updated license.
* `licenses_get` - Gets a list of licenses with the specified criteria.
* `logs_get_log` - Get a log by ID
* `logs_get_logs` - Get the API System logs, most recent first.
* `logs_post_log` - Add a Log entry
* `notifications_post_mail` - Sends an email message.
* `package_reports_default` - Get the package reports for a client.
* `package_types_add_package_type_user` - Add a package type that a user can see.
* `package_types_delete` - Delete a Package Type.
* `package_types_get` - Get all of the Package Types.
* `package_types_post` - Add a Package Type.
* `package_types_put` - Modify a Package Type.
* `package_types_remove_package_type_user` - Deletes a package type a user could see.
* `package_typeto_bundles_delete` - Delete a Package Type to Bundle Relationship.
* `package_typeto_bundles_get` - Get all of the Package Type to Bundle Relationships.
* `package_typeto_bundles_post` - Add a new Package Type ID to Bundle Relationship.
* `package_typeto_bundles_put` - Update a Package Type ID to Bundle Relationship.
* `packages_delete_package` - Delete a Package.
* `packages_get_package` - Find a Package.
* `packages_get_packages` - List Packages.
* `packages_post_package` - Add a Package to the Update System.
* `packages_put_package` - Modify a Packge to the Update System.
* `permissions_delete_permission` - Deletes a Permission
* `permissions_get_permission` - Gets a Permission
* `permissions_get_permissions` - List Permissions
* `permissions_post_permission` - Adds a Permission
* `permissions_put_permission` - Updates a Permission
* `priority_packages_delete_priority_packages` - Delete a Priority Package for a Client.
* `priority_packages_get_priority_package` - Get a Priority Packages for a Client.
* `priority_packages_get_priority_packages` - Get a list of Priority Packages by Client.
* `priority_packages_post_priority_packages` - Add a Priority Package for a Client.
* `release_delete_release_bundle` - Deletes the association between a release and a bundle.
* `release_get_release` - Get a  Release by ID
* `release_get_releases` - Get Release
* `release_post_release` - Create a Release
* `release_post_release_bundle` - Associates the release with a bundle.
* `release_put_content_definition` - Update a Release
* `reporting_bundle_status_summary` - Get a summary of all Packages in a Bundle
* `reporting_bundles_in_update_group` - Get a list of bundles for UpdateGroup.
* `reporting_client_info` - Get Client Information
* `reporting_current_packages_in_update_group` - Get the current packages for an update group.
* `reporting_get_client` - Get a Client in the Update System.
* `reporting_get_subscriptions` - Get a list of current Client Subscriptions.
* `reporting_package_status_summary` - Get a summary report for a Specific Package
* `reporting_registered_clients` - Get a list of subscribed clients
* `reporting_update_groups` - Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
* `reporting_update_metrics` - Get data for pie charts in UpdateMetrics.
* `roles_delete_role` - Deletes a User Role
* `roles_get_role` - Gets a User Role
* `roles_get_role_permissions` - Get the Permissions for a Role
* `roles_get_roles` - List Roles
* `roles_post_role` - Adds a User Role
* `roles_put_role` - Updates a User Role
* `steps_get_step` - Get a Step by ID
* `steps_get_steps` - Get Steps
* `steps_post_step` - Create a Step
* `steps_put_step` - Update a Step
* `string_definitions_get_definition` - Get a paged response of Global String Definitions.
* `string_definitions_get_definitions` - Get a paged response of Global String Definitions.
* `string_translations_get_translation` - Get a single translation based upon stringId and languageId
* `string_translations_get_translations` - Get a paged response of Global String Translations.
* `string_translations_update_translation` - Update a string value or a state for a string translation.
* `translation_keys_create_translation_key` - Create a translationKey object.
* `translation_keys_get` - Get a paged response of TranslationKeys.
* `translation_keys_get_translation_key` - Get TranslationKey by ID
* `translation_keys_update_translation_key` - Update the StringID of the translationKey object.
* `translation_requests_create_translation_request` - Create a translation request. Accepts a TranslationRequest object. Returns the Id of the created object. The state of the TranslationRequest must be ‘NotSubmitted’.
* `translation_requests_get_translation_request` - Get a TranslationRequest object by id. Returns TranslationRequest object with its language ids and string ids.
* `translation_requests_get_translation_requests` - Get all TranslationRequest objects. Returns a PagedResponse of TranslationRequest objects with their language ids and string ids.
* `translation_requests_update_translation_request` - Update a TranslationRequest object by id. Accepts a TranslationRequest object.
* `translation_sets_delete_translation_set_attribute` - Delete a set of TranslationSetAttribute object
* `translation_sets_get_source_strings` - Gets the information needed to translate a string in a translation set
* `translation_sets_get_statistics` - Gets the statistics for translation sets such as the language ids and count of string definitions.
* `translation_sets_get_translation_set` - Get a TranslationSet object by its id. Related TranslationSetStrings are NOT returned.
* `translation_sets_get_translation_set_attributes` - Get a PagedResponse of TranslationSetAttribute objects
* `translation_sets_get_translation_set_strings` - Get a PagedResponse of TranslationSetString objects
* `translation_sets_get_translation_sets` - Get a PagedResponse of TranslationSet objects. Related TranslationSetStrings are NOT returned
* `translation_sets_post_translation_set_attribute` - Create a TranslationSetAttribute object
* `translation_sets_update_translation_set_attribute` - Update a TranslationSetAttribute object
* `update_group_client_relationships_get_subscription` - Get a subscription by RelationshipID
* `update_group_client_relationships_get_subscriptions` - Get a list of current Client Subscriptions.
* `update_group_client_relationships_post_subscription` - Add a subscription
* `update_group_client_relationships_put_subscription` - Updates a Subscription
* `update_group_client_relationships_put_subscription_by_client_id_update_group_id` - DEPRECATED. Set client subscription status for an update group.
* `update_group_subscriptions_delete_update_group_subscription` - Delete an Update Group Subscription
* `update_group_subscriptions_get_update_group_subscription` - Get an Update Group Subscription
* `update_group_subscriptions_get_update_group_subscriptions` - Get Update Group Subscriptions
* `update_group_subscriptions_post_update_group_subscription` - Add an Update Group Subscription
* `update_group_subscriptions_put_update_group_subscription` - Update an Update Group Subscription
* `update_groups_add_update_group_user` - Add an updateGroup that a user can see.
* `update_groups_delete` - Delete an Update Group.
* `update_groups_get` - Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
* `update_groups_get_update_group_bundles` - Get a list of bundles for UpdateGroup.
* `update_groups_post` - Add a new Update Group.  The report field is a string that has a dot based request for a specific piece of submitted data.
* `update_groups_put` - Modify an Update Group.
* `update_groups_remove_update_group_user` - Deletes an update group a user could see.
* `update_system_get_cached_files` - Get a list of Cached Files installed on the client Machine.
* `update_system_get_checkin` - Checks the Client ID into the Update System.
* `user_content_definitions_delete_user_content_definition` - Delete a UserContentDefinition
* `user_content_definitions_get_user_content_definition` - Get a UserContentDefinition by ID
* `user_content_definitions_get_user_content_definitions` - Get UserContentDefinitions
* `user_content_definitions_post_user_content_definition` - Create a UserContentDefinition
* `user_permissions_get_current_user_roles` - Gets the current user's roles
* `user_permissions_get_permissions` - Get a user's permissions
* `user_permissions_get_roles` - Get a user's roles
* `user_permissions_get_users` - Get all user's in a role
* `users_delete` - Delete a user
* `users_get` - Get users
* `users_get_current_user` - Gets the current user
* `users_post` - Create a user
* `users_put` - Update a user
* `users_put_current_user` - Update a user
* `voucher_history_get_voucher_history` - Gets voucher history data
* `vouchers_delete` - Delete a voucher
* `vouchers_get` - Gets a list of vouchers
* `vouchers_get_voucher_history` - Get a voucher's history.
* `vouchers_post` - Create a voucher
* `vouchers_put` - Update a voucher

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
