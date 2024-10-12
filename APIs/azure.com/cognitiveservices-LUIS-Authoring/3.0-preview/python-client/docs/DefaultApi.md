# openapi_client.DefaultApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apps_add**](DefaultApi.md#apps_add) | **POST** /apps/ | 
[**apps_add_custom_prebuilt_domain**](DefaultApi.md#apps_add_custom_prebuilt_domain) | **POST** /apps/customprebuiltdomains | 
[**apps_delete**](DefaultApi.md#apps_delete) | **DELETE** /apps/{appId} | 
[**apps_download_query_logs**](DefaultApi.md#apps_download_query_logs) | **GET** /apps/{appId}/querylogs | 
[**apps_get**](DefaultApi.md#apps_get) | **GET** /apps/{appId} | 
[**apps_get_publish_settings**](DefaultApi.md#apps_get_publish_settings) | **GET** /apps/{appId}/publishsettings | 
[**apps_get_settings**](DefaultApi.md#apps_get_settings) | **GET** /apps/{appId}/settings | 
[**apps_import**](DefaultApi.md#apps_import) | **POST** /apps/import | 
[**apps_list**](DefaultApi.md#apps_list) | **GET** /apps/ | 
[**apps_list_available_custom_prebuilt_domains**](DefaultApi.md#apps_list_available_custom_prebuilt_domains) | **GET** /apps/customprebuiltdomains | 
[**apps_list_available_custom_prebuilt_domains_for_culture**](DefaultApi.md#apps_list_available_custom_prebuilt_domains_for_culture) | **GET** /apps/customprebuiltdomains/{culture} | 
[**apps_list_cortana_endpoints**](DefaultApi.md#apps_list_cortana_endpoints) | **GET** /apps/assistants | 
[**apps_list_domains**](DefaultApi.md#apps_list_domains) | **GET** /apps/domains | 
[**apps_list_endpoints**](DefaultApi.md#apps_list_endpoints) | **GET** /apps/{appId}/endpoints | 
[**apps_list_supported_cultures**](DefaultApi.md#apps_list_supported_cultures) | **GET** /apps/cultures | 
[**apps_list_usage_scenarios**](DefaultApi.md#apps_list_usage_scenarios) | **GET** /apps/usagescenarios | 
[**apps_package_published_application_as_gzip**](DefaultApi.md#apps_package_published_application_as_gzip) | **GET** /package/{appId}/slot/{slotName}/gzip | package - Gets published LUIS application package in binary stream GZip format
[**apps_package_trained_application_as_gzip**](DefaultApi.md#apps_package_trained_application_as_gzip) | **GET** /package/{appId}/versions/{versionId}/gzip | package - Gets trained LUIS application package in binary stream GZip format
[**apps_publish**](DefaultApi.md#apps_publish) | **POST** /apps/{appId}/publish | 
[**apps_update**](DefaultApi.md#apps_update) | **PUT** /apps/{appId} | 
[**apps_update_publish_settings**](DefaultApi.md#apps_update_publish_settings) | **PUT** /apps/{appId}/publishsettings | 
[**apps_update_settings**](DefaultApi.md#apps_update_settings) | **PUT** /apps/{appId}/settings | 
[**azure_accounts_assign_to_app**](DefaultApi.md#azure_accounts_assign_to_app) | **POST** /apps/{appId}/azureaccounts | apps - Assign a LUIS Azure account to an application
[**azure_accounts_get_assigned**](DefaultApi.md#azure_accounts_get_assigned) | **GET** /apps/{appId}/azureaccounts | apps - Get LUIS Azure accounts assigned to the application
[**azure_accounts_list_user_luis_accounts**](DefaultApi.md#azure_accounts_list_user_luis_accounts) | **GET** /azureaccounts | user - Get LUIS Azure accounts
[**azure_accounts_remove_from_app**](DefaultApi.md#azure_accounts_remove_from_app) | **DELETE** /apps/{appId}/azureaccounts | apps - Removes an assigned LUIS Azure account from an application
[**examples_add**](DefaultApi.md#examples_add) | **POST** /apps/{appId}/versions/{versionId}/example | 
[**examples_batch**](DefaultApi.md#examples_batch) | **POST** /apps/{appId}/versions/{versionId}/examples | 
[**examples_delete**](DefaultApi.md#examples_delete) | **DELETE** /apps/{appId}/versions/{versionId}/examples/{exampleId} | 
[**examples_list**](DefaultApi.md#examples_list) | **GET** /apps/{appId}/versions/{versionId}/examples | 
[**features_add_entity_feature**](DefaultApi.md#features_add_entity_feature) | **POST** /apps/{appId}/versions/{versionId}/entities/{entityId}/features | 
[**features_add_intent_feature**](DefaultApi.md#features_add_intent_feature) | **POST** /apps/{appId}/versions/{versionId}/intents/{intentId}/features | 
[**features_add_phrase_list**](DefaultApi.md#features_add_phrase_list) | **POST** /apps/{appId}/versions/{versionId}/phraselists | 
[**features_delete_phrase_list**](DefaultApi.md#features_delete_phrase_list) | **DELETE** /apps/{appId}/versions/{versionId}/phraselists/{phraselistId} | 
[**features_get_phrase_list**](DefaultApi.md#features_get_phrase_list) | **GET** /apps/{appId}/versions/{versionId}/phraselists/{phraselistId} | 
[**features_list**](DefaultApi.md#features_list) | **GET** /apps/{appId}/versions/{versionId}/features | 
[**features_list_phrase_lists**](DefaultApi.md#features_list_phrase_lists) | **GET** /apps/{appId}/versions/{versionId}/phraselists | 
[**features_update_phrase_list**](DefaultApi.md#features_update_phrase_list) | **PUT** /apps/{appId}/versions/{versionId}/phraselists/{phraselistId} | 
[**model_add_closed_list**](DefaultApi.md#model_add_closed_list) | **POST** /apps/{appId}/versions/{versionId}/closedlists | 
[**model_add_composite_entity_child**](DefaultApi.md#model_add_composite_entity_child) | **POST** /apps/{appId}/versions/{versionId}/compositeentities/{cEntityId}/children | 
[**model_add_custom_prebuilt_domain**](DefaultApi.md#model_add_custom_prebuilt_domain) | **POST** /apps/{appId}/versions/{versionId}/customprebuiltdomains | 
[**model_add_custom_prebuilt_entity**](DefaultApi.md#model_add_custom_prebuilt_entity) | **POST** /apps/{appId}/versions/{versionId}/customprebuiltentities | 
[**model_add_custom_prebuilt_intent**](DefaultApi.md#model_add_custom_prebuilt_intent) | **POST** /apps/{appId}/versions/{versionId}/customprebuiltintents | 
[**model_add_entity**](DefaultApi.md#model_add_entity) | **POST** /apps/{appId}/versions/{versionId}/entities | 
[**model_add_entity_child**](DefaultApi.md#model_add_entity_child) | **POST** /apps/{appId}/versions/{versionId}/entities/{entityId}/children | 
[**model_add_explicit_list_item**](DefaultApi.md#model_add_explicit_list_item) | **POST** /apps/{appId}/versions/{versionId}/patternanyentities/{entityId}/explicitlist | Add a new exception to the explicit list for the Pattern.Any entity in a version of the application.
[**model_add_intent**](DefaultApi.md#model_add_intent) | **POST** /apps/{appId}/versions/{versionId}/intents | 
[**model_add_prebuilt**](DefaultApi.md#model_add_prebuilt) | **POST** /apps/{appId}/versions/{versionId}/prebuilts | 
[**model_add_sub_list**](DefaultApi.md#model_add_sub_list) | **POST** /apps/{appId}/versions/{versionId}/closedlists/{clEntityId}/sublists | 
[**model_create_closed_list_entity_role**](DefaultApi.md#model_create_closed_list_entity_role) | **POST** /apps/{appId}/versions/{versionId}/closedlists/{entityId}/roles | Create a role for a list entity in a version of the application.
[**model_create_composite_entity_role**](DefaultApi.md#model_create_composite_entity_role) | **POST** /apps/{appId}/versions/{versionId}/compositeentities/{cEntityId}/roles | Create a role for a composite entity in a version of the application.
[**model_create_custom_prebuilt_entity_role**](DefaultApi.md#model_create_custom_prebuilt_entity_role) | **POST** /apps/{appId}/versions/{versionId}/customprebuiltentities/{entityId}/roles | Create a role for a prebuilt entity in a version of the application.
[**model_create_entity_role**](DefaultApi.md#model_create_entity_role) | **POST** /apps/{appId}/versions/{versionId}/entities/{entityId}/roles | Create an entity role in a version of the application.
[**model_create_hierarchical_entity_role**](DefaultApi.md#model_create_hierarchical_entity_role) | **POST** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId}/roles | Create a role for an hierarchical entity in a version of the application.
[**model_create_pattern_any_entity_model**](DefaultApi.md#model_create_pattern_any_entity_model) | **POST** /apps/{appId}/versions/{versionId}/patternanyentities | Adds a pattern.any entity extractor to a version of the application.
[**model_create_pattern_any_entity_role**](DefaultApi.md#model_create_pattern_any_entity_role) | **POST** /apps/{appId}/versions/{versionId}/patternanyentities/{entityId}/roles | Create a role for an Pattern.any entity in a version of the application.
[**model_create_prebuilt_entity_role**](DefaultApi.md#model_create_prebuilt_entity_role) | **POST** /apps/{appId}/versions/{versionId}/prebuilts/{entityId}/roles | Create a role for a prebuilt entity in a version of the application.
[**model_create_regex_entity_model**](DefaultApi.md#model_create_regex_entity_model) | **POST** /apps/{appId}/versions/{versionId}/regexentities | Adds a regular expression entity model to a version of the application.
[**model_create_regex_entity_role**](DefaultApi.md#model_create_regex_entity_role) | **POST** /apps/{appId}/versions/{versionId}/regexentities/{entityId}/roles | Create a role for an regular expression entity in a version of the application.
[**model_delete_closed_list**](DefaultApi.md#model_delete_closed_list) | **DELETE** /apps/{appId}/versions/{versionId}/closedlists/{clEntityId} | 
[**model_delete_closed_list_entity_role**](DefaultApi.md#model_delete_closed_list_entity_role) | **DELETE** /apps/{appId}/versions/{versionId}/closedlists/{entityId}/roles/{roleId} | Delete a role for a given list entity in a version of the application.
[**model_delete_composite_entity**](DefaultApi.md#model_delete_composite_entity) | **DELETE** /apps/{appId}/versions/{versionId}/compositeentities/{cEntityId} | 
[**model_delete_composite_entity_child**](DefaultApi.md#model_delete_composite_entity_child) | **DELETE** /apps/{appId}/versions/{versionId}/compositeentities/{cEntityId}/children/{cChildId} | 
[**model_delete_composite_entity_role**](DefaultApi.md#model_delete_composite_entity_role) | **DELETE** /apps/{appId}/versions/{versionId}/compositeentities/{cEntityId}/roles/{roleId} | Delete a role for a given composite entity in a version of the application.
[**model_delete_custom_entity_role**](DefaultApi.md#model_delete_custom_entity_role) | **DELETE** /apps/{appId}/versions/{versionId}/customprebuiltentities/{entityId}/roles/{roleId} | Delete a role for a given prebuilt entity in a version of the application.
[**model_delete_custom_prebuilt_domain**](DefaultApi.md#model_delete_custom_prebuilt_domain) | **DELETE** /apps/{appId}/versions/{versionId}/customprebuiltdomains/{domainName} | 
[**model_delete_entity**](DefaultApi.md#model_delete_entity) | **DELETE** /apps/{appId}/versions/{versionId}/entities/{entityId} | 
[**model_delete_entity_feature**](DefaultApi.md#model_delete_entity_feature) | **DELETE** /apps/{appId}/versions/{versionId}/entities/{entityId}/features | 
[**model_delete_entity_role**](DefaultApi.md#model_delete_entity_role) | **DELETE** /apps/{appId}/versions/{versionId}/entities/{entityId}/roles/{roleId} | Delete an entity role in a version of the application.
[**model_delete_explicit_list_item**](DefaultApi.md#model_delete_explicit_list_item) | **DELETE** /apps/{appId}/versions/{versionId}/patternanyentities/{entityId}/explicitlist/{itemId} | Delete an item from the explicit (exception) list for a Pattern.any entity in a version of the application.
[**model_delete_hierarchical_entity**](DefaultApi.md#model_delete_hierarchical_entity) | **DELETE** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId} | 
[**model_delete_hierarchical_entity_child**](DefaultApi.md#model_delete_hierarchical_entity_child) | **DELETE** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId}/children/{hChildId} | 
[**model_delete_hierarchical_entity_role**](DefaultApi.md#model_delete_hierarchical_entity_role) | **DELETE** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId}/roles/{roleId} | Delete a role for a given hierarchical role in a version of the application.
[**model_delete_intent**](DefaultApi.md#model_delete_intent) | **DELETE** /apps/{appId}/versions/{versionId}/intents/{intentId} | 
[**model_delete_intent_feature**](DefaultApi.md#model_delete_intent_feature) | **DELETE** /apps/{appId}/versions/{versionId}/intents/{intentId}/features | 
[**model_delete_pattern_any_entity_model**](DefaultApi.md#model_delete_pattern_any_entity_model) | **DELETE** /apps/{appId}/versions/{versionId}/patternanyentities/{entityId} | Deletes a Pattern.Any entity extractor from a version of the application.
[**model_delete_pattern_any_entity_role**](DefaultApi.md#model_delete_pattern_any_entity_role) | **DELETE** /apps/{appId}/versions/{versionId}/patternanyentities/{entityId}/roles/{roleId} | Delete a role for a given Pattern.any entity in a version of the application.
[**model_delete_prebuilt**](DefaultApi.md#model_delete_prebuilt) | **DELETE** /apps/{appId}/versions/{versionId}/prebuilts/{prebuiltId} | 
[**model_delete_prebuilt_entity_role**](DefaultApi.md#model_delete_prebuilt_entity_role) | **DELETE** /apps/{appId}/versions/{versionId}/prebuilts/{entityId}/roles/{roleId} | Delete a role in a prebuilt entity in a version of the application.
[**model_delete_regex_entity_model**](DefaultApi.md#model_delete_regex_entity_model) | **DELETE** /apps/{appId}/versions/{versionId}/regexentities/{regexEntityId} | Deletes a regular expression entity from a version of the application.
[**model_delete_regex_entity_role**](DefaultApi.md#model_delete_regex_entity_role) | **DELETE** /apps/{appId}/versions/{versionId}/regexentities/{entityId}/roles/{roleId} | Delete a role for a given regular expression in a version of the application.
[**model_delete_sub_list**](DefaultApi.md#model_delete_sub_list) | **DELETE** /apps/{appId}/versions/{versionId}/closedlists/{clEntityId}/sublists/{subListId} | 
[**model_examples**](DefaultApi.md#model_examples) | **GET** /apps/{appId}/versions/{versionId}/models/{modelId}/examples | 
[**model_get_closed_list**](DefaultApi.md#model_get_closed_list) | **GET** /apps/{appId}/versions/{versionId}/closedlists/{clEntityId} | 
[**model_get_closed_list_entity_role**](DefaultApi.md#model_get_closed_list_entity_role) | **GET** /apps/{appId}/versions/{versionId}/closedlists/{entityId}/roles/{roleId} | Get one role for a given list entity in a version of the application.
[**model_get_composite_entity**](DefaultApi.md#model_get_composite_entity) | **GET** /apps/{appId}/versions/{versionId}/compositeentities/{cEntityId} | 
[**model_get_composite_entity_role**](DefaultApi.md#model_get_composite_entity_role) | **GET** /apps/{appId}/versions/{versionId}/compositeentities/{cEntityId}/roles/{roleId} | Get one role for a given composite entity in a version of the application
[**model_get_custom_entity_role**](DefaultApi.md#model_get_custom_entity_role) | **GET** /apps/{appId}/versions/{versionId}/customprebuiltentities/{entityId}/roles/{roleId} | Get one role for a given prebuilt entity in a version of the application.
[**model_get_entity**](DefaultApi.md#model_get_entity) | **GET** /apps/{appId}/versions/{versionId}/entities/{entityId} | 
[**model_get_entity_features**](DefaultApi.md#model_get_entity_features) | **GET** /apps/{appId}/versions/{versionId}/entities/{entityId}/features | 
[**model_get_entity_role**](DefaultApi.md#model_get_entity_role) | **GET** /apps/{appId}/versions/{versionId}/entities/{entityId}/roles/{roleId} | Get one role for a given entity in a version of the application
[**model_get_explicit_list**](DefaultApi.md#model_get_explicit_list) | **GET** /apps/{appId}/versions/{versionId}/patternanyentities/{entityId}/explicitlist | Get the explicit (exception) list of the pattern.any entity in a version of the application.
[**model_get_explicit_list_item**](DefaultApi.md#model_get_explicit_list_item) | **GET** /apps/{appId}/versions/{versionId}/patternanyentities/{entityId}/explicitlist/{itemId} | Get the explicit (exception) list of the pattern.any entity in a version of the application.
[**model_get_hierarchical_entity**](DefaultApi.md#model_get_hierarchical_entity) | **GET** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId} | 
[**model_get_hierarchical_entity_child**](DefaultApi.md#model_get_hierarchical_entity_child) | **GET** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId}/children/{hChildId} | 
[**model_get_hierarchical_entity_role**](DefaultApi.md#model_get_hierarchical_entity_role) | **GET** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId}/roles/{roleId} | Get one role for a given hierarchical entity in a version of the application.
[**model_get_intent**](DefaultApi.md#model_get_intent) | **GET** /apps/{appId}/versions/{versionId}/intents/{intentId} | 
[**model_get_intent_features**](DefaultApi.md#model_get_intent_features) | **GET** /apps/{appId}/versions/{versionId}/intents/{intentId}/features | 
[**model_get_pattern_any_entity_info**](DefaultApi.md#model_get_pattern_any_entity_info) | **GET** /apps/{appId}/versions/{versionId}/patternanyentities/{entityId} | Gets information about the Pattern.Any model in a version of the application.
[**model_get_pattern_any_entity_role**](DefaultApi.md#model_get_pattern_any_entity_role) | **GET** /apps/{appId}/versions/{versionId}/patternanyentities/{entityId}/roles/{roleId} | Get one role for a given Pattern.any entity in a version of the application.
[**model_get_prebuilt**](DefaultApi.md#model_get_prebuilt) | **GET** /apps/{appId}/versions/{versionId}/prebuilts/{prebuiltId} | 
[**model_get_prebuilt_entity_role**](DefaultApi.md#model_get_prebuilt_entity_role) | **GET** /apps/{appId}/versions/{versionId}/prebuilts/{entityId}/roles/{roleId} | Get one role for a given prebuilt entity in a version of the application
[**model_get_regex_entity_entity_info**](DefaultApi.md#model_get_regex_entity_entity_info) | **GET** /apps/{appId}/versions/{versionId}/regexentities/{regexEntityId} | Gets information about a regular expression entity in a version of the application.
[**model_get_regex_entity_role**](DefaultApi.md#model_get_regex_entity_role) | **GET** /apps/{appId}/versions/{versionId}/regexentities/{entityId}/roles/{roleId} | Get one role for a given regular expression entity in a version of the application.
[**model_list_closed_list_entity_roles**](DefaultApi.md#model_list_closed_list_entity_roles) | **GET** /apps/{appId}/versions/{versionId}/closedlists/{entityId}/roles | Get all roles for a list entity in a version of the application.
[**model_list_closed_lists**](DefaultApi.md#model_list_closed_lists) | **GET** /apps/{appId}/versions/{versionId}/closedlists | 
[**model_list_composite_entities**](DefaultApi.md#model_list_composite_entities) | **GET** /apps/{appId}/versions/{versionId}/compositeentities | 
[**model_list_composite_entity_roles**](DefaultApi.md#model_list_composite_entity_roles) | **GET** /apps/{appId}/versions/{versionId}/compositeentities/{cEntityId}/roles | Get all roles for a composite entity in a version of the application
[**model_list_custom_prebuilt_entities**](DefaultApi.md#model_list_custom_prebuilt_entities) | **GET** /apps/{appId}/versions/{versionId}/customprebuiltentities | 
[**model_list_custom_prebuilt_entity_roles**](DefaultApi.md#model_list_custom_prebuilt_entity_roles) | **GET** /apps/{appId}/versions/{versionId}/customprebuiltentities/{entityId}/roles | Get all roles for a prebuilt entity in a version of the application
[**model_list_custom_prebuilt_intents**](DefaultApi.md#model_list_custom_prebuilt_intents) | **GET** /apps/{appId}/versions/{versionId}/customprebuiltintents | 
[**model_list_custom_prebuilt_models**](DefaultApi.md#model_list_custom_prebuilt_models) | **GET** /apps/{appId}/versions/{versionId}/customprebuiltmodels | 
[**model_list_entities**](DefaultApi.md#model_list_entities) | **GET** /apps/{appId}/versions/{versionId}/entities | 
[**model_list_entity_roles**](DefaultApi.md#model_list_entity_roles) | **GET** /apps/{appId}/versions/{versionId}/entities/{entityId}/roles | Get all roles for an entity in a version of the application
[**model_list_entity_suggestions**](DefaultApi.md#model_list_entity_suggestions) | **GET** /apps/{appId}/versions/{versionId}/entities/{entityId}/suggest | 
[**model_list_hierarchical_entities**](DefaultApi.md#model_list_hierarchical_entities) | **GET** /apps/{appId}/versions/{versionId}/hierarchicalentities | 
[**model_list_hierarchical_entity_roles**](DefaultApi.md#model_list_hierarchical_entity_roles) | **GET** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId}/roles | Get all roles for a hierarchical entity in a version of the application
[**model_list_intent_suggestions**](DefaultApi.md#model_list_intent_suggestions) | **GET** /apps/{appId}/versions/{versionId}/intents/{intentId}/suggest | 
[**model_list_intents**](DefaultApi.md#model_list_intents) | **GET** /apps/{appId}/versions/{versionId}/intents | 
[**model_list_models**](DefaultApi.md#model_list_models) | **GET** /apps/{appId}/versions/{versionId}/models | 
[**model_list_pattern_any_entity_infos**](DefaultApi.md#model_list_pattern_any_entity_infos) | **GET** /apps/{appId}/versions/{versionId}/patternanyentities | Get information about the Pattern.Any entity models in a version of the application.
[**model_list_pattern_any_entity_roles**](DefaultApi.md#model_list_pattern_any_entity_roles) | **GET** /apps/{appId}/versions/{versionId}/patternanyentities/{entityId}/roles | Get all roles for a Pattern.any entity in a version of the application
[**model_list_prebuilt_entities**](DefaultApi.md#model_list_prebuilt_entities) | **GET** /apps/{appId}/versions/{versionId}/listprebuilts | 
[**model_list_prebuilt_entity_roles**](DefaultApi.md#model_list_prebuilt_entity_roles) | **GET** /apps/{appId}/versions/{versionId}/prebuilts/{entityId}/roles | Get a prebuilt entity&#39;s roles in a version of the application.
[**model_list_prebuilts**](DefaultApi.md#model_list_prebuilts) | **GET** /apps/{appId}/versions/{versionId}/prebuilts | 
[**model_list_regex_entity_infos**](DefaultApi.md#model_list_regex_entity_infos) | **GET** /apps/{appId}/versions/{versionId}/regexentities | Gets information about the regular expression entity models in a version of the application.
[**model_list_regex_entity_roles**](DefaultApi.md#model_list_regex_entity_roles) | **GET** /apps/{appId}/versions/{versionId}/regexentities/{entityId}/roles | Get all roles for a regular expression entity in a version of the application.
[**model_patch_closed_list**](DefaultApi.md#model_patch_closed_list) | **PATCH** /apps/{appId}/versions/{versionId}/closedlists/{clEntityId} | 
[**model_replace_entity_features**](DefaultApi.md#model_replace_entity_features) | **PUT** /apps/{appId}/versions/{versionId}/entities/{entityId}/features | 
[**model_replace_intent_features**](DefaultApi.md#model_replace_intent_features) | **PUT** /apps/{appId}/versions/{versionId}/intents/{intentId}/features | 
[**model_update_closed_list**](DefaultApi.md#model_update_closed_list) | **PUT** /apps/{appId}/versions/{versionId}/closedlists/{clEntityId} | 
[**model_update_closed_list_entity_role**](DefaultApi.md#model_update_closed_list_entity_role) | **PUT** /apps/{appId}/versions/{versionId}/closedlists/{entityId}/roles/{roleId} | Update a role for a given list entity in a version of the application.
[**model_update_composite_entity**](DefaultApi.md#model_update_composite_entity) | **PUT** /apps/{appId}/versions/{versionId}/compositeentities/{cEntityId} | 
[**model_update_composite_entity_role**](DefaultApi.md#model_update_composite_entity_role) | **PUT** /apps/{appId}/versions/{versionId}/compositeentities/{cEntityId}/roles/{roleId} | Update a role for a given composite entity in a version of the application
[**model_update_custom_prebuilt_entity_role**](DefaultApi.md#model_update_custom_prebuilt_entity_role) | **PUT** /apps/{appId}/versions/{versionId}/customprebuiltentities/{entityId}/roles/{roleId} | Update a role for a given prebuilt entity in a version of the application.
[**model_update_entity_child**](DefaultApi.md#model_update_entity_child) | **PATCH** /apps/{appId}/versions/{versionId}/entities/{entityId} | 
[**model_update_entity_role**](DefaultApi.md#model_update_entity_role) | **PUT** /apps/{appId}/versions/{versionId}/entities/{entityId}/roles/{roleId} | Update a role for a given entity in a version of the application.
[**model_update_explicit_list_item**](DefaultApi.md#model_update_explicit_list_item) | **PUT** /apps/{appId}/versions/{versionId}/patternanyentities/{entityId}/explicitlist/{itemId} | Updates an explicit (exception) list item for a Pattern.Any entity in a version of the application.
[**model_update_hierarchical_entity**](DefaultApi.md#model_update_hierarchical_entity) | **PATCH** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId} | 
[**model_update_hierarchical_entity_child**](DefaultApi.md#model_update_hierarchical_entity_child) | **PATCH** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId}/children/{hChildId} | 
[**model_update_hierarchical_entity_role**](DefaultApi.md#model_update_hierarchical_entity_role) | **PUT** /apps/{appId}/versions/{versionId}/hierarchicalentities/{hEntityId}/roles/{roleId} | Update a role for a given hierarchical entity in a version of the application.
[**model_update_intent**](DefaultApi.md#model_update_intent) | **PUT** /apps/{appId}/versions/{versionId}/intents/{intentId} | 
[**model_update_pattern_any_entity_model**](DefaultApi.md#model_update_pattern_any_entity_model) | **PUT** /apps/{appId}/versions/{versionId}/patternanyentities/{entityId} | Updates the name and explicit (exception) list of a Pattern.Any entity model in a version of the application.
[**model_update_pattern_any_entity_role**](DefaultApi.md#model_update_pattern_any_entity_role) | **PUT** /apps/{appId}/versions/{versionId}/patternanyentities/{entityId}/roles/{roleId} | Update a role for a given Pattern.any entity in a version of the application.
[**model_update_prebuilt_entity_role**](DefaultApi.md#model_update_prebuilt_entity_role) | **PUT** /apps/{appId}/versions/{versionId}/prebuilts/{entityId}/roles/{roleId} | Update a role for a given prebuilt entity in a version of the application
[**model_update_regex_entity_model**](DefaultApi.md#model_update_regex_entity_model) | **PUT** /apps/{appId}/versions/{versionId}/regexentities/{regexEntityId} | Updates the regular expression entity in a version of the application.
[**model_update_regex_entity_role**](DefaultApi.md#model_update_regex_entity_role) | **PUT** /apps/{appId}/versions/{versionId}/regexentities/{entityId}/roles/{roleId} | Update a role for a given regular expression entity in a version of the application
[**model_update_sub_list**](DefaultApi.md#model_update_sub_list) | **PUT** /apps/{appId}/versions/{versionId}/closedlists/{clEntityId}/sublists/{subListId} | 
[**pattern_add_pattern**](DefaultApi.md#pattern_add_pattern) | **POST** /apps/{appId}/versions/{versionId}/patternrule | Adds a pattern to a version of the application.
[**pattern_batch_add_patterns**](DefaultApi.md#pattern_batch_add_patterns) | **POST** /apps/{appId}/versions/{versionId}/patternrules | Adds a batch of patterns in a version of the application.
[**pattern_delete_pattern**](DefaultApi.md#pattern_delete_pattern) | **DELETE** /apps/{appId}/versions/{versionId}/patternrules/{patternId} | Deletes the pattern with the specified ID from a version of the application..
[**pattern_delete_patterns**](DefaultApi.md#pattern_delete_patterns) | **DELETE** /apps/{appId}/versions/{versionId}/patternrules | Deletes a list of patterns in a version of the application.
[**pattern_list_intent_patterns**](DefaultApi.md#pattern_list_intent_patterns) | **GET** /apps/{appId}/versions/{versionId}/intents/{intentId}/patternrules | Returns patterns for the specific intent in a version of the application.
[**pattern_list_patterns**](DefaultApi.md#pattern_list_patterns) | **GET** /apps/{appId}/versions/{versionId}/patternrules | Gets patterns in a version of the application.
[**pattern_update_pattern**](DefaultApi.md#pattern_update_pattern) | **PUT** /apps/{appId}/versions/{versionId}/patternrules/{patternId} | Updates a pattern in a version of the application.
[**pattern_update_patterns**](DefaultApi.md#pattern_update_patterns) | **PUT** /apps/{appId}/versions/{versionId}/patternrules | Updates patterns in a version of the application.
[**permissions_add**](DefaultApi.md#permissions_add) | **POST** /apps/{appId}/permissions | 
[**permissions_delete**](DefaultApi.md#permissions_delete) | **DELETE** /apps/{appId}/permissions | 
[**permissions_list**](DefaultApi.md#permissions_list) | **GET** /apps/{appId}/permissions | 
[**permissions_update**](DefaultApi.md#permissions_update) | **PUT** /apps/{appId}/permissions | 
[**settings_list**](DefaultApi.md#settings_list) | **GET** /apps/{appId}/versions/{versionId}/settings | 
[**settings_update**](DefaultApi.md#settings_update) | **PUT** /apps/{appId}/versions/{versionId}/settings | 
[**train_get_status**](DefaultApi.md#train_get_status) | **GET** /apps/{appId}/versions/{versionId}/train | 
[**train_train_version**](DefaultApi.md#train_train_version) | **POST** /apps/{appId}/versions/{versionId}/train | 
[**versions_clone**](DefaultApi.md#versions_clone) | **POST** /apps/{appId}/versions/{versionId}/clone | 
[**versions_delete**](DefaultApi.md#versions_delete) | **DELETE** /apps/{appId}/versions/{versionId}/ | 
[**versions_delete_unlabelled_utterance**](DefaultApi.md#versions_delete_unlabelled_utterance) | **DELETE** /apps/{appId}/versions/{versionId}/suggest | 
[**versions_export**](DefaultApi.md#versions_export) | **GET** /apps/{appId}/versions/{versionId}/export | 
[**versions_get**](DefaultApi.md#versions_get) | **GET** /apps/{appId}/versions/{versionId}/ | 
[**versions_import**](DefaultApi.md#versions_import) | **POST** /apps/{appId}/versions/import | 
[**versions_list**](DefaultApi.md#versions_list) | **GET** /apps/{appId}/versions | 
[**versions_update**](DefaultApi.md#versions_update) | **PUT** /apps/{appId}/versions/{versionId}/ | 


# **apps_add**
> str apps_add(application_create_object)



Creates a new LUIS app.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.application_create_object import ApplicationCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_create_object = openapi_client.ApplicationCreateObject() # ApplicationCreateObject | An application containing Name, Description (optional), Culture, Usage Scenario (optional), Domain (optional) and initial version ID (optional) of the application. Default value for the version ID is \"0.1\". Note: the culture cannot be changed after the app is created.

    try:
        api_response = api_instance.apps_add(application_create_object)
        print("The response of DefaultApi->apps_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_create_object** | [**ApplicationCreateObject**](ApplicationCreateObject.md)| An application containing Name, Description (optional), Culture, Usage Scenario (optional), Domain (optional) and initial version ID (optional) of the application. Default value for the version ID is \&quot;0.1\&quot;. Note: the culture cannot be changed after the app is created. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created application. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_add_custom_prebuilt_domain**
> str apps_add_custom_prebuilt_domain(prebuilt_domain_create_object)



Adds a prebuilt domain along with its intent and entity models as a new application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_domain_create_object import PrebuiltDomainCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    prebuilt_domain_create_object = openapi_client.PrebuiltDomainCreateObject() # PrebuiltDomainCreateObject | A prebuilt domain create object containing the name and culture of the domain.

    try:
        api_response = api_instance.apps_add_custom_prebuilt_domain(prebuilt_domain_create_object)
        print("The response of DefaultApi->apps_add_custom_prebuilt_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_add_custom_prebuilt_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prebuilt_domain_create_object** | [**PrebuiltDomainCreateObject**](PrebuiltDomainCreateObject.md)| A prebuilt domain create object containing the name and culture of the domain. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created application. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_delete**
> OperationStatus apps_delete(app_id, force=force)



Deletes an application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    force = False # bool | A flag to indicate whether to force an operation. (optional) (default to False)

    try:
        api_response = api_instance.apps_delete(app_id, force=force)
        print("The response of DefaultApi->apps_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **force** | **bool**| A flag to indicate whether to force an operation. | [optional] [default to False]

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted application. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_download_query_logs**
> object apps_download_query_logs(app_id)



Gets the logs of the past month's endpoint queries for the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.

    try:
        api_response = api_instance.apps_download_query_logs(app_id)
        print("The response of DefaultApi->apps_download_query_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_download_query_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 

### Return type

**object**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A CSV file containing the query logs for the past month. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_get**
> ApplicationInfoResponse apps_get(app_id)



Gets the application info.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.application_info_response import ApplicationInfoResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.

    try:
        api_response = api_instance.apps_get(app_id)
        print("The response of DefaultApi->apps_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 

### Return type

[**ApplicationInfoResponse**](ApplicationInfoResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_get_publish_settings**
> PublishSettings apps_get_publish_settings(app_id)



Get the application publish settings including 'UseAllTrainingData'.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.publish_settings import PublishSettings
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.

    try:
        api_response = api_instance.apps_get_publish_settings(app_id)
        print("The response of DefaultApi->apps_get_publish_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_get_publish_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 

### Return type

[**PublishSettings**](PublishSettings.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application publish settings. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_get_settings**
> ApplicationSettings apps_get_settings(app_id)



Get the application settings including 'UseAllTrainingData'.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.application_settings import ApplicationSettings
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.

    try:
        api_response = api_instance.apps_get_settings(app_id)
        print("The response of DefaultApi->apps_get_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_get_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 

### Return type

[**ApplicationSettings**](ApplicationSettings.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application settings. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_import**
> str apps_import(luis_app, app_name=app_name)



Imports an application to LUIS, the application's structure is included in the request body.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.luis_app import LuisApp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    luis_app = openapi_client.LuisApp() # LuisApp | A LUIS application structure.
    app_name = 'app_name_example' # str | The application name to create. If not specified, the application name will be read from the imported object. If the application name already exists, an error is returned. (optional)

    try:
        api_response = api_instance.apps_import(luis_app, app_name=app_name)
        print("The response of DefaultApi->apps_import:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_import: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **luis_app** | [**LuisApp**](LuisApp.md)| A LUIS application structure. | 
 **app_name** | **str**| The application name to create. If not specified, the application name will be read from the imported object. If the application name already exists, an error is returned. | [optional] 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the imported application. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list**
> List[ApplicationInfoResponse] apps_list(skip=skip, take=take)



Lists all of the user's applications.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.application_info_response import ApplicationInfoResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.apps_list(skip=skip, take=take)
        print("The response of DefaultApi->apps_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[ApplicationInfoResponse]**](ApplicationInfoResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the user applications. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_available_custom_prebuilt_domains**
> List[PrebuiltDomain] apps_list_available_custom_prebuilt_domains()



Gets all the available custom prebuilt domains for all cultures.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_domain import PrebuiltDomain
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.apps_list_available_custom_prebuilt_domains()
        print("The response of DefaultApi->apps_list_available_custom_prebuilt_domains:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list_available_custom_prebuilt_domains: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[PrebuiltDomain]**](PrebuiltDomain.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of all custom prebuilt domains and their intents/entities representation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_available_custom_prebuilt_domains_for_culture**
> List[PrebuiltDomain] apps_list_available_custom_prebuilt_domains_for_culture(culture)



Gets all the available prebuilt domains for a specific culture.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_domain import PrebuiltDomain
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    culture = 'culture_example' # str | Culture.

    try:
        api_response = api_instance.apps_list_available_custom_prebuilt_domains_for_culture(culture)
        print("The response of DefaultApi->apps_list_available_custom_prebuilt_domains_for_culture:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list_available_custom_prebuilt_domains_for_culture: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **culture** | **str**| Culture. | 

### Return type

[**List[PrebuiltDomain]**](PrebuiltDomain.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of all domains and their intents and entities for a specific culture. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_cortana_endpoints**
> PersonalAssistantsResponse apps_list_cortana_endpoints()



Gets the endpoint URLs for the prebuilt Cortana applications.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.personal_assistants_response import PersonalAssistantsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.apps_list_cortana_endpoints()
        print("The response of DefaultApi->apps_list_cortana_endpoints:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list_cortana_endpoints: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**PersonalAssistantsResponse**](PersonalAssistantsResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A personal assistant apps JSON object containing the endpoint URLs for Cortana applications and the user&#39;s endpoint keys. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_domains**
> List[str] apps_list_domains()



Gets the available application domains.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.apps_list_domains()
        print("The response of DefaultApi->apps_list_domains:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list_domains: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list object containing the available application domains. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_endpoints**
> Dict[str, str] apps_list_endpoints(app_id)



Returns the available endpoint deployment regions and URLs.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.

    try:
        api_response = api_instance.apps_list_endpoints(app_id)
        print("The response of DefaultApi->apps_list_endpoints:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list_endpoints: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 

### Return type

**Dict[str, str]**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of endpoints regions and their corresponding endpoint URL. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_supported_cultures**
> List[AvailableCulture] apps_list_supported_cultures()



Gets a list of supported cultures. Cultures are equivalent to the written language and locale. For example,\"en-us\" represents the U.S. variation of English.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.available_culture import AvailableCulture
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.apps_list_supported_cultures()
        print("The response of DefaultApi->apps_list_supported_cultures:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list_supported_cultures: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[AvailableCulture]**](AvailableCulture.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list object containing the supported application cultures. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list_usage_scenarios**
> List[str] apps_list_usage_scenarios()



Gets the application available usage scenarios.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.apps_list_usage_scenarios()
        print("The response of DefaultApi->apps_list_usage_scenarios:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_list_usage_scenarios: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list object containing the available application usage scenarios. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_package_published_application_as_gzip**
> bytearray apps_package_published_application_as_gzip(app_id, slot_name)

package - Gets published LUIS application package in binary stream GZip format

Packages a published LUIS application as a GZip file to be used in the LUIS container.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    slot_name = 'slot_name_example' # str | The publishing slot name.

    try:
        # package - Gets published LUIS application package in binary stream GZip format
        api_response = api_instance.apps_package_published_application_as_gzip(app_id, slot_name)
        print("The response of DefaultApi->apps_package_published_application_as_gzip:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_package_published_application_as_gzip: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **slot_name** | **str**| The publishing slot name. | 

### Return type

**bytearray**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The GZip binary stream of the published application package. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_package_trained_application_as_gzip**
> bytearray apps_package_trained_application_as_gzip(app_id, version_id)

package - Gets trained LUIS application package in binary stream GZip format

Packages trained LUIS application as GZip file to be used in the LUIS container.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        # package - Gets trained LUIS application package in binary stream GZip format
        api_response = api_instance.apps_package_trained_application_as_gzip(app_id, version_id)
        print("The response of DefaultApi->apps_package_trained_application_as_gzip:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_package_trained_application_as_gzip: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

**bytearray**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The GZip binary stream of the trained application package. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_publish**
> ProductionOrStagingEndpointInfo apps_publish(app_id, application_publish_object)



Publishes a specific version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.application_publish_object import ApplicationPublishObject
from openapi_client.models.production_or_staging_endpoint_info import ProductionOrStagingEndpointInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    application_publish_object = openapi_client.ApplicationPublishObject() # ApplicationPublishObject | The application publish object. The region is the target region that the application is published to.

    try:
        api_response = api_instance.apps_publish(app_id, application_publish_object)
        print("The response of DefaultApi->apps_publish:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_publish: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **application_publish_object** | [**ApplicationPublishObject**](ApplicationPublishObject.md)| The application publish object. The region is the target region that the application is published to. | 

### Return type

[**ProductionOrStagingEndpointInfo**](ProductionOrStagingEndpointInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | An object containing the application endpoint URL, its assigned endpoint key and publishing status. |  -  |
**207** | An object containing the application endpoint URL, its assigned endpoint key and publishing status in case that publishing one or more regions failed. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_update**
> OperationStatus apps_update(app_id, application_update_object)



Updates the name or description of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.application_update_object import ApplicationUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    application_update_object = openapi_client.ApplicationUpdateObject() # ApplicationUpdateObject | A model containing Name and Description of the application.

    try:
        api_response = api_instance.apps_update(app_id, application_update_object)
        print("The response of DefaultApi->apps_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **application_update_object** | [**ApplicationUpdateObject**](ApplicationUpdateObject.md)| A model containing Name and Description of the application. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated application name and description. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_update_publish_settings**
> OperationStatus apps_update_publish_settings(app_id, publish_setting_update_object)



Updates the application publish settings including 'UseAllTrainingData'.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.models.publish_setting_update_object import PublishSettingUpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    publish_setting_update_object = openapi_client.PublishSettingUpdateObject() # PublishSettingUpdateObject | An object containing the new publish application settings.

    try:
        api_response = api_instance.apps_update_publish_settings(app_id, publish_setting_update_object)
        print("The response of DefaultApi->apps_update_publish_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_update_publish_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **publish_setting_update_object** | [**PublishSettingUpdateObject**](PublishSettingUpdateObject.md)| An object containing the new publish application settings. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated application settings. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_update_settings**
> OperationStatus apps_update_settings(app_id, application_setting_update_object)



Updates the application settings including 'UseAllTrainingData'.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.application_setting_update_object import ApplicationSettingUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    application_setting_update_object = openapi_client.ApplicationSettingUpdateObject() # ApplicationSettingUpdateObject | An object containing the new application settings.

    try:
        api_response = api_instance.apps_update_settings(app_id, application_setting_update_object)
        print("The response of DefaultApi->apps_update_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->apps_update_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **application_setting_update_object** | [**ApplicationSettingUpdateObject**](ApplicationSettingUpdateObject.md)| An object containing the new application settings. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated application settings. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **azure_accounts_assign_to_app**
> OperationStatus azure_accounts_assign_to_app(app_id, authorization, azure_account_info_object=azure_account_info_object)

apps - Assign a LUIS Azure account to an application

Assigns an Azure account to the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.azure_account_info_object import AzureAccountInfoObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    authorization = 'authorization_example' # str | The bearer authorization header to use; containing the user's ARM token used to validate Azure accounts information.
    azure_account_info_object = openapi_client.AzureAccountInfoObject() # AzureAccountInfoObject | The Azure account information object. (optional)

    try:
        # apps - Assign a LUIS Azure account to an application
        api_response = api_instance.azure_accounts_assign_to_app(app_id, authorization, azure_account_info_object=azure_account_info_object)
        print("The response of DefaultApi->azure_accounts_assign_to_app:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->azure_accounts_assign_to_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **authorization** | **str**| The bearer authorization header to use; containing the user&#39;s ARM token used to validate Azure accounts information. | 
 **azure_account_info_object** | [**AzureAccountInfoObject**](AzureAccountInfoObject.md)| The Azure account information object. | [optional] 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **azure_accounts_get_assigned**
> List[AzureAccountInfoObject] azure_accounts_get_assigned(app_id, authorization)

apps - Get LUIS Azure accounts assigned to the application

Gets the LUIS Azure accounts assigned to the application for the user using his ARM token.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.azure_account_info_object import AzureAccountInfoObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    authorization = 'authorization_example' # str | The bearer authorization header to use; containing the user's ARM token used to validate Azure accounts information.

    try:
        # apps - Get LUIS Azure accounts assigned to the application
        api_response = api_instance.azure_accounts_get_assigned(app_id, authorization)
        print("The response of DefaultApi->azure_accounts_get_assigned:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->azure_accounts_get_assigned: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **authorization** | **str**| The bearer authorization header to use; containing the user&#39;s ARM token used to validate Azure accounts information. | 

### Return type

[**List[AzureAccountInfoObject]**](AzureAccountInfoObject.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of azure account information objects. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **azure_accounts_list_user_luis_accounts**
> List[AzureAccountInfoObject] azure_accounts_list_user_luis_accounts(authorization)

user - Get LUIS Azure accounts

Gets the LUIS Azure accounts for the user using his ARM token.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.azure_account_info_object import AzureAccountInfoObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    authorization = 'authorization_example' # str | The bearer authorization header to use; containing the user's ARM token used to validate Azure accounts information.

    try:
        # user - Get LUIS Azure accounts
        api_response = api_instance.azure_accounts_list_user_luis_accounts(authorization)
        print("The response of DefaultApi->azure_accounts_list_user_luis_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->azure_accounts_list_user_luis_accounts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| The bearer authorization header to use; containing the user&#39;s ARM token used to validate Azure accounts information. | 

### Return type

[**List[AzureAccountInfoObject]**](AzureAccountInfoObject.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Azure account information objects. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **azure_accounts_remove_from_app**
> OperationStatus azure_accounts_remove_from_app(app_id, authorization, azure_account_info_object=azure_account_info_object)

apps - Removes an assigned LUIS Azure account from an application

Removes assigned Azure account from the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.azure_account_info_object import AzureAccountInfoObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    authorization = 'authorization_example' # str | The bearer authorization header to use; containing the user's ARM token used to validate Azure accounts information.
    azure_account_info_object = openapi_client.AzureAccountInfoObject() # AzureAccountInfoObject | The Azure account information object. (optional)

    try:
        # apps - Removes an assigned LUIS Azure account from an application
        api_response = api_instance.azure_accounts_remove_from_app(app_id, authorization, azure_account_info_object=azure_account_info_object)
        print("The response of DefaultApi->azure_accounts_remove_from_app:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->azure_accounts_remove_from_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **authorization** | **str**| The bearer authorization header to use; containing the user&#39;s ARM token used to validate Azure accounts information. | 
 **azure_account_info_object** | [**AzureAccountInfoObject**](AzureAccountInfoObject.md)| The Azure account information object. | [optional] 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **examples_add**
> LabelExampleResponse examples_add(app_id, version_id, example_label_object)



Adds a labeled example utterance in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.example_label_object import ExampleLabelObject
from openapi_client.models.label_example_response import LabelExampleResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    example_label_object = openapi_client.ExampleLabelObject() # ExampleLabelObject | A labeled example utterance with the expected intent and entities.

    try:
        api_response = api_instance.examples_add(app_id, version_id, example_label_object)
        print("The response of DefaultApi->examples_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->examples_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **example_label_object** | [**ExampleLabelObject**](ExampleLabelObject.md)| A labeled example utterance with the expected intent and entities. | 

### Return type

[**LabelExampleResponse**](LabelExampleResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created example utterance. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **examples_batch**
> List[BatchLabelExample] examples_batch(app_id, version_id, example_label_object_array)



Adds a batch of labeled example utterances to a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.batch_label_example import BatchLabelExample
from openapi_client.models.example_label_object import ExampleLabelObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    example_label_object_array = [openapi_client.ExampleLabelObject()] # List[ExampleLabelObject] | Array of example utterances.

    try:
        api_response = api_instance.examples_batch(app_id, version_id, example_label_object_array)
        print("The response of DefaultApi->examples_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->examples_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **example_label_object_array** | [**List[ExampleLabelObject]**](ExampleLabelObject.md)| Array of example utterances. | 

### Return type

[**List[BatchLabelExample]**](BatchLabelExample.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A string array determining which labeled example utterances were added successfully. |  -  |
**207** | Indicates that the request was partially successful. The response contains a string array indicating the status of each of the added labeled example utterances. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **examples_delete**
> OperationStatus examples_delete(app_id, version_id, example_id)



Deletes the labeled example utterances with the specified ID from a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    example_id = 56 # int | The example ID.

    try:
        api_response = api_instance.examples_delete(app_id, version_id, example_id)
        print("The response of DefaultApi->examples_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->examples_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **example_id** | **int**| The example ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted example utterance. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **examples_list**
> List[LabeledUtterance] examples_list(app_id, version_id, skip=skip, take=take)



Returns example utterances to be reviewed from a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.labeled_utterance import LabeledUtterance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.examples_list(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->examples_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->examples_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[LabeledUtterance]**](LabeledUtterance.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of predictions and label pairs for every example utterance in the application. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_add_entity_feature**
> OperationStatus features_add_entity_feature(app_id, version_id, entity_id, feature_relation_create_object)



Adds a new feature relation to be used by the entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_feature_information import ModelFeatureInformation
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity extractor ID.
    feature_relation_create_object = openapi_client.ModelFeatureInformation() # ModelFeatureInformation | A Feature relation information object.

    try:
        api_response = api_instance.features_add_entity_feature(app_id, version_id, entity_id, feature_relation_create_object)
        print("The response of DefaultApi->features_add_entity_feature:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_add_entity_feature: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity extractor ID. | 
 **feature_relation_create_object** | [**ModelFeatureInformation**](ModelFeatureInformation.md)| A Feature relation information object. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_add_intent_feature**
> OperationStatus features_add_intent_feature(app_id, version_id, intent_id, feature_relation_create_object)



Adds a new feature relation to be used by the intent in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_feature_information import ModelFeatureInformation
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    intent_id = 'intent_id_example' # str | The intent classifier ID.
    feature_relation_create_object = openapi_client.ModelFeatureInformation() # ModelFeatureInformation | A Feature relation information object.

    try:
        api_response = api_instance.features_add_intent_feature(app_id, version_id, intent_id, feature_relation_create_object)
        print("The response of DefaultApi->features_add_intent_feature:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_add_intent_feature: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **intent_id** | **str**| The intent classifier ID. | 
 **feature_relation_create_object** | [**ModelFeatureInformation**](ModelFeatureInformation.md)| A Feature relation information object. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_add_phrase_list**
> int features_add_phrase_list(app_id, version_id, phraselist_create_object)



Creates a new phraselist feature in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.phraselist_create_object import PhraselistCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    phraselist_create_object = openapi_client.PhraselistCreateObject() # PhraselistCreateObject | A Phraselist object containing Name, comma-separated Phrases and the isExchangeable boolean. Default value for isExchangeable is true.

    try:
        api_response = api_instance.features_add_phrase_list(app_id, version_id, phraselist_create_object)
        print("The response of DefaultApi->features_add_phrase_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_add_phrase_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **phraselist_create_object** | [**PhraselistCreateObject**](PhraselistCreateObject.md)| A Phraselist object containing Name, comma-separated Phrases and the isExchangeable boolean. Default value for isExchangeable is true. | 

### Return type

**int**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created feature. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_delete_phrase_list**
> OperationStatus features_delete_phrase_list(app_id, version_id, phraselist_id)



Deletes a phraselist feature from a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    phraselist_id = 56 # int | The ID of the feature to be deleted.

    try:
        api_response = api_instance.features_delete_phrase_list(app_id, version_id, phraselist_id)
        print("The response of DefaultApi->features_delete_phrase_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_delete_phrase_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **phraselist_id** | **int**| The ID of the feature to be deleted. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted phraselist. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_get_phrase_list**
> PhraseListFeatureInfo features_get_phrase_list(app_id, version_id, phraselist_id)



Gets phraselist feature info in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.phrase_list_feature_info import PhraseListFeatureInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    phraselist_id = 56 # int | The ID of the feature to be retrieved.

    try:
        api_response = api_instance.features_get_phrase_list(app_id, version_id, phraselist_id)
        print("The response of DefaultApi->features_get_phrase_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_get_phrase_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **phraselist_id** | **int**| The ID of the feature to be retrieved. | 

### Return type

[**PhraseListFeatureInfo**](PhraseListFeatureInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A phraselist feature info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_list**
> FeaturesResponseObject features_list(app_id, version_id, skip=skip, take=take)



Gets all the extraction phraselist and pattern features in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.features_response_object import FeaturesResponseObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.features_list(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->features_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**FeaturesResponseObject**](FeaturesResponseObject.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all phraselist features and a list of all pattern features. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_list_phrase_lists**
> List[PhraseListFeatureInfo] features_list_phrase_lists(app_id, version_id, skip=skip, take=take)



Gets all the phraselist features in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.phrase_list_feature_info import PhraseListFeatureInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.features_list_phrase_lists(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->features_list_phrase_lists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_list_phrase_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[PhraseListFeatureInfo]**](PhraseListFeatureInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all phraselist features. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_update_phrase_list**
> OperationStatus features_update_phrase_list(app_id, version_id, phraselist_id, phraselist_update_object=phraselist_update_object)



Updates the phrases, the state and the name of the phraselist feature in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.models.phraselist_update_object import PhraselistUpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    phraselist_id = 56 # int | The ID of the feature to be updated.
    phraselist_update_object = openapi_client.PhraselistUpdateObject() # PhraselistUpdateObject | The new values for: - Just a boolean called IsActive, in which case the status of the feature will be changed. - Name, Pattern, Mode, and a boolean called IsActive to update the feature. (optional)

    try:
        api_response = api_instance.features_update_phrase_list(app_id, version_id, phraselist_id, phraselist_update_object=phraselist_update_object)
        print("The response of DefaultApi->features_update_phrase_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->features_update_phrase_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **phraselist_id** | **int**| The ID of the feature to be updated. | 
 **phraselist_update_object** | [**PhraselistUpdateObject**](PhraselistUpdateObject.md)| The new values for: - Just a boolean called IsActive, in which case the status of the feature will be changed. - Name, Pattern, Mode, and a boolean called IsActive to update the feature. | [optional] 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated phraselist. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_closed_list**
> str model_add_closed_list(app_id, version_id, closed_list_model_create_object)



Adds a list entity model to a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.closed_list_model_create_object import ClosedListModelCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    closed_list_model_create_object = openapi_client.ClosedListModelCreateObject() # ClosedListModelCreateObject | A model containing the name and words for the new list entity extractor.

    try:
        api_response = api_instance.model_add_closed_list(app_id, version_id, closed_list_model_create_object)
        print("The response of DefaultApi->model_add_closed_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_closed_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **closed_list_model_create_object** | [**ClosedListModelCreateObject**](ClosedListModelCreateObject.md)| A model containing the name and words for the new list entity extractor. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_composite_entity_child**
> str model_add_composite_entity_child(app_id, version_id, c_entity_id, composite_child_model_create_object)



Creates a single child in an existing composite entity model in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_add_composite_entity_child_request import ModelAddCompositeEntityChildRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    c_entity_id = 'c_entity_id_example' # str | The composite entity extractor ID.
    composite_child_model_create_object = openapi_client.ModelAddCompositeEntityChildRequest() # ModelAddCompositeEntityChildRequest | A model object containing the name of the new composite child model.

    try:
        api_response = api_instance.model_add_composite_entity_child(app_id, version_id, c_entity_id, composite_child_model_create_object)
        print("The response of DefaultApi->model_add_composite_entity_child:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_composite_entity_child: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **c_entity_id** | **str**| The composite entity extractor ID. | 
 **composite_child_model_create_object** | [**ModelAddCompositeEntityChildRequest**](ModelAddCompositeEntityChildRequest.md)| A model object containing the name of the new composite child model. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_custom_prebuilt_domain**
> List[str] model_add_custom_prebuilt_domain(app_id, version_id, prebuilt_domain_object)



Adds a customizable prebuilt domain along with all of its intent and entity models in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_domain_create_base_object import PrebuiltDomainCreateBaseObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    prebuilt_domain_object = openapi_client.PrebuiltDomainCreateBaseObject() # PrebuiltDomainCreateBaseObject | A prebuilt domain create object containing the name of the domain.

    try:
        api_response = api_instance.model_add_custom_prebuilt_domain(app_id, version_id, prebuilt_domain_object)
        print("The response of DefaultApi->model_add_custom_prebuilt_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_custom_prebuilt_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **prebuilt_domain_object** | [**PrebuiltDomainCreateBaseObject**](PrebuiltDomainCreateBaseObject.md)| A prebuilt domain create object containing the name of the domain. | 

### Return type

**List[str]**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | An array of the created customizable prebuilt domain intent and entity model Ids. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_custom_prebuilt_entity**
> str model_add_custom_prebuilt_entity(app_id, version_id, prebuilt_domain_model_create_object)



Adds a prebuilt entity model to a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_domain_model_create_object import PrebuiltDomainModelCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    prebuilt_domain_model_create_object = openapi_client.PrebuiltDomainModelCreateObject() # PrebuiltDomainModelCreateObject | A model object containing the name of the prebuilt entity and the name of the domain to which this model belongs.

    try:
        api_response = api_instance.model_add_custom_prebuilt_entity(app_id, version_id, prebuilt_domain_model_create_object)
        print("The response of DefaultApi->model_add_custom_prebuilt_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_custom_prebuilt_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **prebuilt_domain_model_create_object** | [**PrebuiltDomainModelCreateObject**](PrebuiltDomainModelCreateObject.md)| A model object containing the name of the prebuilt entity and the name of the domain to which this model belongs. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created prebuilt model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_custom_prebuilt_intent**
> str model_add_custom_prebuilt_intent(app_id, version_id, prebuilt_domain_model_create_object)



Adds a customizable prebuilt intent model to a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_domain_model_create_object import PrebuiltDomainModelCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    prebuilt_domain_model_create_object = openapi_client.PrebuiltDomainModelCreateObject() # PrebuiltDomainModelCreateObject | A model object containing the name of the customizable prebuilt intent and the name of the domain to which this model belongs.

    try:
        api_response = api_instance.model_add_custom_prebuilt_intent(app_id, version_id, prebuilt_domain_model_create_object)
        print("The response of DefaultApi->model_add_custom_prebuilt_intent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_custom_prebuilt_intent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **prebuilt_domain_model_create_object** | [**PrebuiltDomainModelCreateObject**](PrebuiltDomainModelCreateObject.md)| A model object containing the name of the customizable prebuilt intent and the name of the domain to which this model belongs. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created intent model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_entity**
> str model_add_entity(app_id, version_id, entity_model_create_object)



Adds an entity extractor to a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_model_create_object import EntityModelCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_model_create_object = openapi_client.EntityModelCreateObject() # EntityModelCreateObject | A model object containing the name of the new entity extractor and its children.

    try:
        api_response = api_instance.model_add_entity(app_id, version_id, entity_model_create_object)
        print("The response of DefaultApi->model_add_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_model_create_object** | [**EntityModelCreateObject**](EntityModelCreateObject.md)| A model object containing the name of the new entity extractor and its children. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_entity_child**
> str model_add_entity_child(app_id, version_id, entity_id, child_entity_model_create_object)



Creates a single child in an existing entity model hierarchy in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.child_entity_model_create_object import ChildEntityModelCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity extractor ID.
    child_entity_model_create_object = openapi_client.ChildEntityModelCreateObject() # ChildEntityModelCreateObject | A model object containing the name of the new child model and its children.

    try:
        api_response = api_instance.model_add_entity_child(app_id, version_id, entity_id, child_entity_model_create_object)
        print("The response of DefaultApi->model_add_entity_child:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_entity_child: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity extractor ID. | 
 **child_entity_model_create_object** | [**ChildEntityModelCreateObject**](ChildEntityModelCreateObject.md)| A model object containing the name of the new child model and its children. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_explicit_list_item**
> int model_add_explicit_list_item(app_id, version_id, entity_id, item)

Add a new exception to the explicit list for the Pattern.Any entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.explicit_list_item_create_object import ExplicitListItemCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The Pattern.Any entity extractor ID.
    item = openapi_client.ExplicitListItemCreateObject() # ExplicitListItemCreateObject | The new explicit list item.

    try:
        # Add a new exception to the explicit list for the Pattern.Any entity in a version of the application.
        api_response = api_instance.model_add_explicit_list_item(app_id, version_id, entity_id, item)
        print("The response of DefaultApi->model_add_explicit_list_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_explicit_list_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The Pattern.Any entity extractor ID. | 
 **item** | [**ExplicitListItemCreateObject**](ExplicitListItemCreateObject.md)| The new explicit list item. | 

### Return type

**int**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created explicit list item. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_intent**
> str model_add_intent(app_id, version_id, intent_create_object)



Adds an intent to a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_create_object import ModelCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    intent_create_object = openapi_client.ModelCreateObject() # ModelCreateObject | A model object containing the name of the new intent.

    try:
        api_response = api_instance.model_add_intent(app_id, version_id, intent_create_object)
        print("The response of DefaultApi->model_add_intent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_intent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **intent_create_object** | [**ModelCreateObject**](ModelCreateObject.md)| A model object containing the name of the new intent. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created intent model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_prebuilt**
> List[PrebuiltEntityExtractor] model_add_prebuilt(app_id, version_id, prebuilt_extractor_names)



Adds a list of prebuilt entities to a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_entity_extractor import PrebuiltEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    prebuilt_extractor_names = ['prebuilt_extractor_names_example'] # List[str] | An array of prebuilt entity extractor names.

    try:
        api_response = api_instance.model_add_prebuilt(app_id, version_id, prebuilt_extractor_names)
        print("The response of DefaultApi->model_add_prebuilt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_prebuilt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **prebuilt_extractor_names** | [**List[str]**](str.md)| An array of prebuilt entity extractor names. | 

### Return type

[**List[PrebuiltEntityExtractor]**](PrebuiltEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | An array of the created prebuilt extractor infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_add_sub_list**
> int model_add_sub_list(app_id, version_id, cl_entity_id, word_list_create_object)



Adds a sublist to an existing list entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.word_list_object import WordListObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    cl_entity_id = 'cl_entity_id_example' # str | The list entity extractor ID.
    word_list_create_object = openapi_client.WordListObject() # WordListObject | Words list.

    try:
        api_response = api_instance.model_add_sub_list(app_id, version_id, cl_entity_id, word_list_create_object)
        print("The response of DefaultApi->model_add_sub_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_add_sub_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **cl_entity_id** | **str**| The list entity extractor ID. | 
 **word_list_create_object** | [**WordListObject**](WordListObject.md)| Words list. | 

### Return type

**int**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the newly created sublist. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_create_closed_list_entity_role**
> str model_create_closed_list_entity_role(app_id, version_id, entity_id, entity_role_create_object)

Create a role for a list entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_create_object import EntityRoleCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity model ID.
    entity_role_create_object = openapi_client.EntityRoleCreateObject() # EntityRoleCreateObject | An entity role object containing the name of role.

    try:
        # Create a role for a list entity in a version of the application.
        api_response = api_instance.model_create_closed_list_entity_role(app_id, version_id, entity_id, entity_role_create_object)
        print("The response of DefaultApi->model_create_closed_list_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_create_closed_list_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity model ID. | 
 **entity_role_create_object** | [**EntityRoleCreateObject**](EntityRoleCreateObject.md)| An entity role object containing the name of role. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_create_composite_entity_role**
> str model_create_composite_entity_role(app_id, version_id, c_entity_id, entity_role_create_object)

Create a role for a composite entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_create_object import EntityRoleCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    c_entity_id = 'c_entity_id_example' # str | The composite entity extractor ID.
    entity_role_create_object = openapi_client.EntityRoleCreateObject() # EntityRoleCreateObject | An entity role object containing the name of role.

    try:
        # Create a role for a composite entity in a version of the application.
        api_response = api_instance.model_create_composite_entity_role(app_id, version_id, c_entity_id, entity_role_create_object)
        print("The response of DefaultApi->model_create_composite_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_create_composite_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **c_entity_id** | **str**| The composite entity extractor ID. | 
 **entity_role_create_object** | [**EntityRoleCreateObject**](EntityRoleCreateObject.md)| An entity role object containing the name of role. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_create_custom_prebuilt_entity_role**
> str model_create_custom_prebuilt_entity_role(app_id, version_id, entity_id, entity_role_create_object)

Create a role for a prebuilt entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_create_object import EntityRoleCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity model ID.
    entity_role_create_object = openapi_client.EntityRoleCreateObject() # EntityRoleCreateObject | An entity role object containing the name of role.

    try:
        # Create a role for a prebuilt entity in a version of the application.
        api_response = api_instance.model_create_custom_prebuilt_entity_role(app_id, version_id, entity_id, entity_role_create_object)
        print("The response of DefaultApi->model_create_custom_prebuilt_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_create_custom_prebuilt_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity model ID. | 
 **entity_role_create_object** | [**EntityRoleCreateObject**](EntityRoleCreateObject.md)| An entity role object containing the name of role. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_create_entity_role**
> str model_create_entity_role(app_id, version_id, entity_id, entity_role_create_object)

Create an entity role in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_create_object import EntityRoleCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity model ID.
    entity_role_create_object = openapi_client.EntityRoleCreateObject() # EntityRoleCreateObject | An entity role object containing the name of role.

    try:
        # Create an entity role in a version of the application.
        api_response = api_instance.model_create_entity_role(app_id, version_id, entity_id, entity_role_create_object)
        print("The response of DefaultApi->model_create_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_create_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity model ID. | 
 **entity_role_create_object** | [**EntityRoleCreateObject**](EntityRoleCreateObject.md)| An entity role object containing the name of role. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_create_hierarchical_entity_role**
> str model_create_hierarchical_entity_role(app_id, version_id, h_entity_id, entity_role_create_object)

Create a role for an hierarchical entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_create_object import EntityRoleCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.
    entity_role_create_object = openapi_client.EntityRoleCreateObject() # EntityRoleCreateObject | An entity role object containing the name of role.

    try:
        # Create a role for an hierarchical entity in a version of the application.
        api_response = api_instance.model_create_hierarchical_entity_role(app_id, version_id, h_entity_id, entity_role_create_object)
        print("The response of DefaultApi->model_create_hierarchical_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_create_hierarchical_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 
 **entity_role_create_object** | [**EntityRoleCreateObject**](EntityRoleCreateObject.md)| An entity role object containing the name of role. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_create_pattern_any_entity_model**
> str model_create_pattern_any_entity_model(app_id, version_id, extractor_create_object)

Adds a pattern.any entity extractor to a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.pattern_any_model_create_object import PatternAnyModelCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    extractor_create_object = openapi_client.PatternAnyModelCreateObject() # PatternAnyModelCreateObject | A model object containing the name and explicit list for the new Pattern.Any entity extractor.

    try:
        # Adds a pattern.any entity extractor to a version of the application.
        api_response = api_instance.model_create_pattern_any_entity_model(app_id, version_id, extractor_create_object)
        print("The response of DefaultApi->model_create_pattern_any_entity_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_create_pattern_any_entity_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **extractor_create_object** | [**PatternAnyModelCreateObject**](PatternAnyModelCreateObject.md)| A model object containing the name and explicit list for the new Pattern.Any entity extractor. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created Pattern.Any entity model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_create_pattern_any_entity_role**
> str model_create_pattern_any_entity_role(app_id, version_id, entity_id, entity_role_create_object)

Create a role for an Pattern.any entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_create_object import EntityRoleCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity model ID.
    entity_role_create_object = openapi_client.EntityRoleCreateObject() # EntityRoleCreateObject | An entity role object containing the name of role.

    try:
        # Create a role for an Pattern.any entity in a version of the application.
        api_response = api_instance.model_create_pattern_any_entity_role(app_id, version_id, entity_id, entity_role_create_object)
        print("The response of DefaultApi->model_create_pattern_any_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_create_pattern_any_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity model ID. | 
 **entity_role_create_object** | [**EntityRoleCreateObject**](EntityRoleCreateObject.md)| An entity role object containing the name of role. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_create_prebuilt_entity_role**
> str model_create_prebuilt_entity_role(app_id, version_id, entity_id, entity_role_create_object)

Create a role for a prebuilt entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_create_object import EntityRoleCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity model ID.
    entity_role_create_object = openapi_client.EntityRoleCreateObject() # EntityRoleCreateObject | An entity role object containing the name of role.

    try:
        # Create a role for a prebuilt entity in a version of the application.
        api_response = api_instance.model_create_prebuilt_entity_role(app_id, version_id, entity_id, entity_role_create_object)
        print("The response of DefaultApi->model_create_prebuilt_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_create_prebuilt_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity model ID. | 
 **entity_role_create_object** | [**EntityRoleCreateObject**](EntityRoleCreateObject.md)| An entity role object containing the name of role. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_create_regex_entity_model**
> str model_create_regex_entity_model(app_id, version_id, regex_entity_extractor_create_obj)

Adds a regular expression entity model to a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.regex_model_create_object import RegexModelCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    regex_entity_extractor_create_obj = openapi_client.RegexModelCreateObject() # RegexModelCreateObject | A model object containing the name and regex pattern for the new regular expression entity extractor.

    try:
        # Adds a regular expression entity model to a version of the application.
        api_response = api_instance.model_create_regex_entity_model(app_id, version_id, regex_entity_extractor_create_obj)
        print("The response of DefaultApi->model_create_regex_entity_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_create_regex_entity_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **regex_entity_extractor_create_obj** | [**RegexModelCreateObject**](RegexModelCreateObject.md)| A model object containing the name and regex pattern for the new regular expression entity extractor. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_create_regex_entity_role**
> str model_create_regex_entity_role(app_id, version_id, entity_id, entity_role_create_object)

Create a role for an regular expression entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_create_object import EntityRoleCreateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity model ID.
    entity_role_create_object = openapi_client.EntityRoleCreateObject() # EntityRoleCreateObject | An entity role object containing the name of role.

    try:
        # Create a role for an regular expression entity in a version of the application.
        api_response = api_instance.model_create_regex_entity_role(app_id, version_id, entity_id, entity_role_create_object)
        print("The response of DefaultApi->model_create_regex_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_create_regex_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity model ID. | 
 **entity_role_create_object** | [**EntityRoleCreateObject**](EntityRoleCreateObject.md)| An entity role object containing the name of role. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The ID of the created entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_closed_list**
> OperationStatus model_delete_closed_list(app_id, version_id, cl_entity_id)



Deletes a list entity model from a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    cl_entity_id = 'cl_entity_id_example' # str | The list entity model ID.

    try:
        api_response = api_instance.model_delete_closed_list(app_id, version_id, cl_entity_id)
        print("The response of DefaultApi->model_delete_closed_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_closed_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **cl_entity_id** | **str**| The list entity model ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully delete list entity from a version of application. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_closed_list_entity_role**
> OperationStatus model_delete_closed_list_entity_role(app_id, version_id, entity_id, role_id)

Delete a role for a given list entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity ID.
    role_id = 'role_id_example' # str | The entity role Id.

    try:
        # Delete a role for a given list entity in a version of the application.
        api_response = api_instance.model_delete_closed_list_entity_role(app_id, version_id, entity_id, role_id)
        print("The response of DefaultApi->model_delete_closed_list_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_closed_list_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity ID. | 
 **role_id** | **str**| The entity role Id. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_composite_entity**
> OperationStatus model_delete_composite_entity(app_id, version_id, c_entity_id)



Deletes a composite entity from a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    c_entity_id = 'c_entity_id_example' # str | The composite entity extractor ID.

    try:
        api_response = api_instance.model_delete_composite_entity(app_id, version_id, c_entity_id)
        print("The response of DefaultApi->model_delete_composite_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_composite_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **c_entity_id** | **str**| The composite entity extractor ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted composite entity. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_composite_entity_child**
> OperationStatus model_delete_composite_entity_child(app_id, version_id, c_entity_id, c_child_id)



Deletes a composite entity extractor child from a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    c_entity_id = 'c_entity_id_example' # str | The composite entity extractor ID.
    c_child_id = 'c_child_id_example' # str | The hierarchical entity extractor child ID.

    try:
        api_response = api_instance.model_delete_composite_entity_child(app_id, version_id, c_entity_id, c_child_id)
        print("The response of DefaultApi->model_delete_composite_entity_child:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_composite_entity_child: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **c_entity_id** | **str**| The composite entity extractor ID. | 
 **c_child_id** | **str**| The hierarchical entity extractor child ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted entity. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_composite_entity_role**
> OperationStatus model_delete_composite_entity_role(app_id, version_id, c_entity_id, role_id)

Delete a role for a given composite entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    c_entity_id = 'c_entity_id_example' # str | The composite entity extractor ID.
    role_id = 'role_id_example' # str | The entity role Id.

    try:
        # Delete a role for a given composite entity in a version of the application.
        api_response = api_instance.model_delete_composite_entity_role(app_id, version_id, c_entity_id, role_id)
        print("The response of DefaultApi->model_delete_composite_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_composite_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **c_entity_id** | **str**| The composite entity extractor ID. | 
 **role_id** | **str**| The entity role Id. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_custom_entity_role**
> OperationStatus model_delete_custom_entity_role(app_id, version_id, entity_id, role_id)

Delete a role for a given prebuilt entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity ID.
    role_id = 'role_id_example' # str | The entity role Id.

    try:
        # Delete a role for a given prebuilt entity in a version of the application.
        api_response = api_instance.model_delete_custom_entity_role(app_id, version_id, entity_id, role_id)
        print("The response of DefaultApi->model_delete_custom_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_custom_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity ID. | 
 **role_id** | **str**| The entity role Id. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_custom_prebuilt_domain**
> OperationStatus model_delete_custom_prebuilt_domain(app_id, version_id, domain_name)



Deletes a prebuilt domain's models in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    domain_name = 'domain_name_example' # str | Domain name.

    try:
        api_response = api_instance.model_delete_custom_prebuilt_domain(app_id, version_id, domain_name)
        print("The response of DefaultApi->model_delete_custom_prebuilt_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_custom_prebuilt_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **domain_name** | **str**| Domain name. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_entity**
> OperationStatus model_delete_entity(app_id, version_id, entity_id)



Deletes an entity or a child from a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity extractor or the child entity extractor ID.

    try:
        api_response = api_instance.model_delete_entity(app_id, version_id, entity_id)
        print("The response of DefaultApi->model_delete_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity extractor or the child entity extractor ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted entity. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_entity_feature**
> OperationStatus model_delete_entity_feature(app_id, version_id, entity_id, feature_relation_delete_object)



Deletes a relation from the feature relations used by the entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_feature_information import ModelFeatureInformation
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity extractor ID.
    feature_relation_delete_object = openapi_client.ModelFeatureInformation() # ModelFeatureInformation | A feature information object containing the feature relation to delete.

    try:
        api_response = api_instance.model_delete_entity_feature(app_id, version_id, entity_id, feature_relation_delete_object)
        print("The response of DefaultApi->model_delete_entity_feature:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_entity_feature: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity extractor ID. | 
 **feature_relation_delete_object** | [**ModelFeatureInformation**](ModelFeatureInformation.md)| A feature information object containing the feature relation to delete. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_entity_role**
> OperationStatus model_delete_entity_role(app_id, version_id, entity_id, role_id)

Delete an entity role in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity ID.
    role_id = 'role_id_example' # str | The entity role Id.

    try:
        # Delete an entity role in a version of the application.
        api_response = api_instance.model_delete_entity_role(app_id, version_id, entity_id, role_id)
        print("The response of DefaultApi->model_delete_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity ID. | 
 **role_id** | **str**| The entity role Id. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_explicit_list_item**
> OperationStatus model_delete_explicit_list_item(app_id, version_id, entity_id, item_id)

Delete an item from the explicit (exception) list for a Pattern.any entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The pattern.any entity id.
    item_id = 56 # int | The explicit list item which will be deleted.

    try:
        # Delete an item from the explicit (exception) list for a Pattern.any entity in a version of the application.
        api_response = api_instance.model_delete_explicit_list_item(app_id, version_id, entity_id, item_id)
        print("The response of DefaultApi->model_delete_explicit_list_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_explicit_list_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The pattern.any entity id. | 
 **item_id** | **int**| The explicit list item which will be deleted. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_hierarchical_entity**
> OperationStatus model_delete_hierarchical_entity(app_id, version_id, h_entity_id)



Deletes a hierarchical entity from a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.

    try:
        api_response = api_instance.model_delete_hierarchical_entity(app_id, version_id, h_entity_id)
        print("The response of DefaultApi->model_delete_hierarchical_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_hierarchical_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted entity. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_hierarchical_entity_child**
> OperationStatus model_delete_hierarchical_entity_child(app_id, version_id, h_entity_id, h_child_id)



Deletes a hierarchical entity extractor child in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.
    h_child_id = 'h_child_id_example' # str | The hierarchical entity extractor child ID.

    try:
        api_response = api_instance.model_delete_hierarchical_entity_child(app_id, version_id, h_entity_id, h_child_id)
        print("The response of DefaultApi->model_delete_hierarchical_entity_child:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_hierarchical_entity_child: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 
 **h_child_id** | **str**| The hierarchical entity extractor child ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted entity. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_hierarchical_entity_role**
> OperationStatus model_delete_hierarchical_entity_role(app_id, version_id, h_entity_id, role_id)

Delete a role for a given hierarchical role in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.
    role_id = 'role_id_example' # str | The entity role Id.

    try:
        # Delete a role for a given hierarchical role in a version of the application.
        api_response = api_instance.model_delete_hierarchical_entity_role(app_id, version_id, h_entity_id, role_id)
        print("The response of DefaultApi->model_delete_hierarchical_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_hierarchical_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 
 **role_id** | **str**| The entity role Id. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_intent**
> OperationStatus model_delete_intent(app_id, version_id, intent_id, delete_utterances=delete_utterances)



Deletes an intent from a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    intent_id = 'intent_id_example' # str | The intent classifier ID.
    delete_utterances = False # bool | If true, deletes the intent's example utterances. If false, moves the example utterances to the None intent. The default value is false. (optional) (default to False)

    try:
        api_response = api_instance.model_delete_intent(app_id, version_id, intent_id, delete_utterances=delete_utterances)
        print("The response of DefaultApi->model_delete_intent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_intent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **intent_id** | **str**| The intent classifier ID. | 
 **delete_utterances** | **bool**| If true, deletes the intent&#39;s example utterances. If false, moves the example utterances to the None intent. The default value is false. | [optional] [default to False]

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_intent_feature**
> OperationStatus model_delete_intent_feature(app_id, version_id, intent_id, feature_relation_delete_object)



Deletes a relation from the feature relations used by the intent in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_feature_information import ModelFeatureInformation
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    intent_id = 'intent_id_example' # str | The intent classifier ID.
    feature_relation_delete_object = openapi_client.ModelFeatureInformation() # ModelFeatureInformation | A feature information object containing the feature relation to delete.

    try:
        api_response = api_instance.model_delete_intent_feature(app_id, version_id, intent_id, feature_relation_delete_object)
        print("The response of DefaultApi->model_delete_intent_feature:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_intent_feature: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **intent_id** | **str**| The intent classifier ID. | 
 **feature_relation_delete_object** | [**ModelFeatureInformation**](ModelFeatureInformation.md)| A feature information object containing the feature relation to delete. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_pattern_any_entity_model**
> OperationStatus model_delete_pattern_any_entity_model(app_id, version_id, entity_id)

Deletes a Pattern.Any entity extractor from a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The Pattern.Any entity extractor ID.

    try:
        # Deletes a Pattern.Any entity extractor from a version of the application.
        api_response = api_instance.model_delete_pattern_any_entity_model(app_id, version_id, entity_id)
        print("The response of DefaultApi->model_delete_pattern_any_entity_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_pattern_any_entity_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The Pattern.Any entity extractor ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_pattern_any_entity_role**
> OperationStatus model_delete_pattern_any_entity_role(app_id, version_id, entity_id, role_id)

Delete a role for a given Pattern.any entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity ID.
    role_id = 'role_id_example' # str | The entity role Id.

    try:
        # Delete a role for a given Pattern.any entity in a version of the application.
        api_response = api_instance.model_delete_pattern_any_entity_role(app_id, version_id, entity_id, role_id)
        print("The response of DefaultApi->model_delete_pattern_any_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_pattern_any_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity ID. | 
 **role_id** | **str**| The entity role Id. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_prebuilt**
> OperationStatus model_delete_prebuilt(app_id, version_id, prebuilt_id)



Deletes a prebuilt entity extractor from a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    prebuilt_id = 'prebuilt_id_example' # str | The prebuilt entity extractor ID.

    try:
        api_response = api_instance.model_delete_prebuilt(app_id, version_id, prebuilt_id)
        print("The response of DefaultApi->model_delete_prebuilt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_prebuilt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **prebuilt_id** | **str**| The prebuilt entity extractor ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_prebuilt_entity_role**
> OperationStatus model_delete_prebuilt_entity_role(app_id, version_id, entity_id, role_id)

Delete a role in a prebuilt entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity ID.
    role_id = 'role_id_example' # str | The entity role Id.

    try:
        # Delete a role in a prebuilt entity in a version of the application.
        api_response = api_instance.model_delete_prebuilt_entity_role(app_id, version_id, entity_id, role_id)
        print("The response of DefaultApi->model_delete_prebuilt_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_prebuilt_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity ID. | 
 **role_id** | **str**| The entity role Id. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_regex_entity_model**
> OperationStatus model_delete_regex_entity_model(app_id, version_id, regex_entity_id)

Deletes a regular expression entity from a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    regex_entity_id = 'regex_entity_id_example' # str | The regular expression entity extractor ID.

    try:
        # Deletes a regular expression entity from a version of the application.
        api_response = api_instance.model_delete_regex_entity_model(app_id, version_id, regex_entity_id)
        print("The response of DefaultApi->model_delete_regex_entity_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_regex_entity_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **regex_entity_id** | **str**| The regular expression entity extractor ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_regex_entity_role**
> OperationStatus model_delete_regex_entity_role(app_id, version_id, entity_id, role_id)

Delete a role for a given regular expression in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity ID.
    role_id = 'role_id_example' # str | The entity role Id.

    try:
        # Delete a role for a given regular expression in a version of the application.
        api_response = api_instance.model_delete_regex_entity_role(app_id, version_id, entity_id, role_id)
        print("The response of DefaultApi->model_delete_regex_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_regex_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity ID. | 
 **role_id** | **str**| The entity role Id. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_delete_sub_list**
> OperationStatus model_delete_sub_list(app_id, version_id, cl_entity_id, sub_list_id)



Deletes a sublist of a specific list entity model from a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    cl_entity_id = 'cl_entity_id_example' # str | The list entity extractor ID.
    sub_list_id = 56 # int | The sublist ID.

    try:
        api_response = api_instance.model_delete_sub_list(app_id, version_id, cl_entity_id, sub_list_id)
        print("The response of DefaultApi->model_delete_sub_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_delete_sub_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **cl_entity_id** | **str**| The list entity extractor ID. | 
 **sub_list_id** | **int**| The sublist ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted sublist. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_examples**
> List[LabelTextObject] model_examples(app_id, version_id, model_id, skip=skip, take=take)



Gets the example utterances for the given intent or entity model in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.label_text_object import LabelTextObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    model_id = 'model_id_example' # str | The ID (GUID) of the model.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_examples(app_id, version_id, model_id, skip=skip, take=take)
        print("The response of DefaultApi->model_examples:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_examples: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **model_id** | **str**| The ID (GUID) of the model. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[LabelTextObject]**](LabelTextObject.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of example utterances for the model. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_closed_list**
> ClosedListEntityExtractor model_get_closed_list(app_id, version_id, cl_entity_id)



Gets information about a list entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.closed_list_entity_extractor import ClosedListEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    cl_entity_id = 'cl_entity_id_example' # str | The list model ID.

    try:
        api_response = api_instance.model_get_closed_list(app_id, version_id, cl_entity_id)
        print("The response of DefaultApi->model_get_closed_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_closed_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **cl_entity_id** | **str**| The list model ID. | 

### Return type

[**ClosedListEntityExtractor**](ClosedListEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list model info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_closed_list_entity_role**
> EntityRole model_get_closed_list_entity_role(app_id, version_id, entity_id, role_id)

Get one role for a given list entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | entity ID.
    role_id = 'role_id_example' # str | entity role ID.

    try:
        # Get one role for a given list entity in a version of the application.
        api_response = api_instance.model_get_closed_list_entity_role(app_id, version_id, entity_id, role_id)
        print("The response of DefaultApi->model_get_closed_list_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_closed_list_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| entity ID. | 
 **role_id** | **str**| entity role ID. | 

### Return type

[**EntityRole**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_composite_entity**
> CompositeEntityExtractor model_get_composite_entity(app_id, version_id, c_entity_id)



Gets information about a composite entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.composite_entity_extractor import CompositeEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    c_entity_id = 'c_entity_id_example' # str | The composite entity extractor ID.

    try:
        api_response = api_instance.model_get_composite_entity(app_id, version_id, c_entity_id)
        print("The response of DefaultApi->model_get_composite_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_composite_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **c_entity_id** | **str**| The composite entity extractor ID. | 

### Return type

[**CompositeEntityExtractor**](CompositeEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The composite entity model info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_composite_entity_role**
> EntityRole model_get_composite_entity_role(app_id, version_id, c_entity_id, role_id)

Get one role for a given composite entity in a version of the application

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    c_entity_id = 'c_entity_id_example' # str | The composite entity extractor ID.
    role_id = 'role_id_example' # str | entity role ID.

    try:
        # Get one role for a given composite entity in a version of the application
        api_response = api_instance.model_get_composite_entity_role(app_id, version_id, c_entity_id, role_id)
        print("The response of DefaultApi->model_get_composite_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_composite_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **c_entity_id** | **str**| The composite entity extractor ID. | 
 **role_id** | **str**| entity role ID. | 

### Return type

[**EntityRole**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_custom_entity_role**
> EntityRole model_get_custom_entity_role(app_id, version_id, entity_id, role_id)

Get one role for a given prebuilt entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | entity ID.
    role_id = 'role_id_example' # str | entity role ID.

    try:
        # Get one role for a given prebuilt entity in a version of the application.
        api_response = api_instance.model_get_custom_entity_role(app_id, version_id, entity_id, role_id)
        print("The response of DefaultApi->model_get_custom_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_custom_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| entity ID. | 
 **role_id** | **str**| entity role ID. | 

### Return type

[**EntityRole**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_entity**
> NDepthEntityExtractor model_get_entity(app_id, version_id, entity_id)



Gets information about an entity model in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.n_depth_entity_extractor import NDepthEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity extractor ID.

    try:
        api_response = api_instance.model_get_entity(app_id, version_id, entity_id)
        print("The response of DefaultApi->model_get_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity extractor ID. | 

### Return type

[**NDepthEntityExtractor**](NDepthEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An entity model info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_entity_features**
> List[ModelFeatureInformation] model_get_entity_features(app_id, version_id, entity_id)



Gets the information of the features used by the entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_feature_information import ModelFeatureInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity extractor ID.

    try:
        api_response = api_instance.model_get_entity_features(app_id, version_id, entity_id)
        print("The response of DefaultApi->model_get_entity_features:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_entity_features: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity extractor ID. | 

### Return type

[**List[ModelFeatureInformation]**](ModelFeatureInformation.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of feature information objects for the entity. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_entity_role**
> EntityRole model_get_entity_role(app_id, version_id, entity_id, role_id)

Get one role for a given entity in a version of the application

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | entity ID.
    role_id = 'role_id_example' # str | entity role ID.

    try:
        # Get one role for a given entity in a version of the application
        api_response = api_instance.model_get_entity_role(app_id, version_id, entity_id, role_id)
        print("The response of DefaultApi->model_get_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| entity ID. | 
 **role_id** | **str**| entity role ID. | 

### Return type

[**EntityRole**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_explicit_list**
> List[ExplicitListItem] model_get_explicit_list(app_id, version_id, entity_id)

Get the explicit (exception) list of the pattern.any entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.explicit_list_item import ExplicitListItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The Pattern.Any entity id.

    try:
        # Get the explicit (exception) list of the pattern.any entity in a version of the application.
        api_response = api_instance.model_get_explicit_list(app_id, version_id, entity_id)
        print("The response of DefaultApi->model_get_explicit_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_explicit_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The Pattern.Any entity id. | 

### Return type

[**List[ExplicitListItem]**](ExplicitListItem.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the explicit list items |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_explicit_list_item**
> ExplicitListItem model_get_explicit_list_item(app_id, version_id, entity_id, item_id)

Get the explicit (exception) list of the pattern.any entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.explicit_list_item import ExplicitListItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The Pattern.Any entity Id.
    item_id = 56 # int | The explicit list item Id.

    try:
        # Get the explicit (exception) list of the pattern.any entity in a version of the application.
        api_response = api_instance.model_get_explicit_list_item(app_id, version_id, entity_id, item_id)
        print("The response of DefaultApi->model_get_explicit_list_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_explicit_list_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The Pattern.Any entity Id. | 
 **item_id** | **int**| The explicit list item Id. | 

### Return type

[**ExplicitListItem**](ExplicitListItem.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An explicit list item info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_hierarchical_entity**
> HierarchicalEntityExtractor model_get_hierarchical_entity(app_id, version_id, h_entity_id)



Gets information about a hierarchical entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.hierarchical_entity_extractor import HierarchicalEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.

    try:
        api_response = api_instance.model_get_hierarchical_entity(app_id, version_id, h_entity_id)
        print("The response of DefaultApi->model_get_hierarchical_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_hierarchical_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 

### Return type

[**HierarchicalEntityExtractor**](HierarchicalEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A hierarchical entity model info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_hierarchical_entity_child**
> HierarchicalChildEntity model_get_hierarchical_entity_child(app_id, version_id, h_entity_id, h_child_id)



Gets information about the child's model contained in an hierarchical entity child model in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.hierarchical_child_entity import HierarchicalChildEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.
    h_child_id = 'h_child_id_example' # str | The hierarchical entity extractor child ID.

    try:
        api_response = api_instance.model_get_hierarchical_entity_child(app_id, version_id, h_entity_id, h_child_id)
        print("The response of DefaultApi->model_get_hierarchical_entity_child:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_hierarchical_entity_child: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 
 **h_child_id** | **str**| The hierarchical entity extractor child ID. | 

### Return type

[**HierarchicalChildEntity**](HierarchicalChildEntity.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The hierarchical entity child model info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_hierarchical_entity_role**
> EntityRole model_get_hierarchical_entity_role(app_id, version_id, h_entity_id, role_id)

Get one role for a given hierarchical entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.
    role_id = 'role_id_example' # str | entity role ID.

    try:
        # Get one role for a given hierarchical entity in a version of the application.
        api_response = api_instance.model_get_hierarchical_entity_role(app_id, version_id, h_entity_id, role_id)
        print("The response of DefaultApi->model_get_hierarchical_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_hierarchical_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 
 **role_id** | **str**| entity role ID. | 

### Return type

[**EntityRole**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_intent**
> IntentClassifier model_get_intent(app_id, version_id, intent_id)



Gets information about the intent model in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.intent_classifier import IntentClassifier
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    intent_id = 'intent_id_example' # str | The intent classifier ID.

    try:
        api_response = api_instance.model_get_intent(app_id, version_id, intent_id)
        print("The response of DefaultApi->model_get_intent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_intent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **intent_id** | **str**| The intent classifier ID. | 

### Return type

[**IntentClassifier**](IntentClassifier.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An intent model info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_intent_features**
> List[ModelFeatureInformation] model_get_intent_features(app_id, version_id, intent_id)



Gets the information of the features used by the intent in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_feature_information import ModelFeatureInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    intent_id = 'intent_id_example' # str | The intent classifier ID.

    try:
        api_response = api_instance.model_get_intent_features(app_id, version_id, intent_id)
        print("The response of DefaultApi->model_get_intent_features:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_intent_features: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **intent_id** | **str**| The intent classifier ID. | 

### Return type

[**List[ModelFeatureInformation]**](ModelFeatureInformation.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of feature information objects for the intent. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_pattern_any_entity_info**
> PatternAnyEntityExtractor model_get_pattern_any_entity_info(app_id, version_id, entity_id)

Gets information about the Pattern.Any model in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.pattern_any_entity_extractor import PatternAnyEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity extractor ID.

    try:
        # Gets information about the Pattern.Any model in a version of the application.
        api_response = api_instance.model_get_pattern_any_entity_info(app_id, version_id, entity_id)
        print("The response of DefaultApi->model_get_pattern_any_entity_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_pattern_any_entity_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity extractor ID. | 

### Return type

[**PatternAnyEntityExtractor**](PatternAnyEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A regular expression entity model info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_pattern_any_entity_role**
> EntityRole model_get_pattern_any_entity_role(app_id, version_id, entity_id, role_id)

Get one role for a given Pattern.any entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | entity ID.
    role_id = 'role_id_example' # str | entity role ID.

    try:
        # Get one role for a given Pattern.any entity in a version of the application.
        api_response = api_instance.model_get_pattern_any_entity_role(app_id, version_id, entity_id, role_id)
        print("The response of DefaultApi->model_get_pattern_any_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_pattern_any_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| entity ID. | 
 **role_id** | **str**| entity role ID. | 

### Return type

[**EntityRole**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_prebuilt**
> PrebuiltEntityExtractor model_get_prebuilt(app_id, version_id, prebuilt_id)



Gets information about a prebuilt entity model in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_entity_extractor import PrebuiltEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    prebuilt_id = 'prebuilt_id_example' # str | The prebuilt entity extractor ID.

    try:
        api_response = api_instance.model_get_prebuilt(app_id, version_id, prebuilt_id)
        print("The response of DefaultApi->model_get_prebuilt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_prebuilt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **prebuilt_id** | **str**| The prebuilt entity extractor ID. | 

### Return type

[**PrebuiltEntityExtractor**](PrebuiltEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A prebuilt entity models info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_prebuilt_entity_role**
> EntityRole model_get_prebuilt_entity_role(app_id, version_id, entity_id, role_id)

Get one role for a given prebuilt entity in a version of the application

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | entity ID.
    role_id = 'role_id_example' # str | entity role ID.

    try:
        # Get one role for a given prebuilt entity in a version of the application
        api_response = api_instance.model_get_prebuilt_entity_role(app_id, version_id, entity_id, role_id)
        print("The response of DefaultApi->model_get_prebuilt_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_prebuilt_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| entity ID. | 
 **role_id** | **str**| entity role ID. | 

### Return type

[**EntityRole**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_regex_entity_entity_info**
> RegexEntityExtractor model_get_regex_entity_entity_info(app_id, version_id, regex_entity_id)

Gets information about a regular expression entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.regex_entity_extractor import RegexEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    regex_entity_id = 'regex_entity_id_example' # str | The regular expression entity model ID.

    try:
        # Gets information about a regular expression entity in a version of the application.
        api_response = api_instance.model_get_regex_entity_entity_info(app_id, version_id, regex_entity_id)
        print("The response of DefaultApi->model_get_regex_entity_entity_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_regex_entity_entity_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **regex_entity_id** | **str**| The regular expression entity model ID. | 

### Return type

[**RegexEntityExtractor**](RegexEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A regular expression entity model info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_get_regex_entity_role**
> EntityRole model_get_regex_entity_role(app_id, version_id, entity_id, role_id)

Get one role for a given regular expression entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | entity ID.
    role_id = 'role_id_example' # str | entity role ID.

    try:
        # Get one role for a given regular expression entity in a version of the application.
        api_response = api_instance.model_get_regex_entity_role(app_id, version_id, entity_id, role_id)
        print("The response of DefaultApi->model_get_regex_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_get_regex_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| entity ID. | 
 **role_id** | **str**| entity role ID. | 

### Return type

[**EntityRole**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An entity role |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_closed_list_entity_roles**
> List[EntityRole] model_list_closed_list_entity_roles(app_id, version_id, entity_id)

Get all roles for a list entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | entity Id

    try:
        # Get all roles for a list entity in a version of the application.
        api_response = api_instance.model_list_closed_list_entity_roles(app_id, version_id, entity_id)
        print("The response of DefaultApi->model_list_closed_list_entity_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_closed_list_entity_roles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| entity Id | 

### Return type

[**List[EntityRole]**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the entity roles |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_closed_lists**
> List[ClosedListEntityExtractor] model_list_closed_lists(app_id, version_id, skip=skip, take=take)



Gets information about all the list entity models in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.closed_list_entity_extractor import ClosedListEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_closed_lists(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_closed_lists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_closed_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[ClosedListEntityExtractor]**](ClosedListEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of list entity model infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_composite_entities**
> List[CompositeEntityExtractor] model_list_composite_entities(app_id, version_id, skip=skip, take=take)



Gets information about all the composite entity models in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.composite_entity_extractor import CompositeEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_composite_entities(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_composite_entities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_composite_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[CompositeEntityExtractor]**](CompositeEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of composite entity model infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_composite_entity_roles**
> List[EntityRole] model_list_composite_entity_roles(app_id, version_id, c_entity_id)

Get all roles for a composite entity in a version of the application

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    c_entity_id = 'c_entity_id_example' # str | The composite entity extractor ID.

    try:
        # Get all roles for a composite entity in a version of the application
        api_response = api_instance.model_list_composite_entity_roles(app_id, version_id, c_entity_id)
        print("The response of DefaultApi->model_list_composite_entity_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_composite_entity_roles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **c_entity_id** | **str**| The composite entity extractor ID. | 

### Return type

[**List[EntityRole]**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the entity roles |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_custom_prebuilt_entities**
> List[EntityExtractor] model_list_custom_prebuilt_entities(app_id, version_id)



Gets all prebuilt entities used in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_extractor import EntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.model_list_custom_prebuilt_entities(app_id, version_id)
        print("The response of DefaultApi->model_list_custom_prebuilt_entities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_custom_prebuilt_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**List[EntityExtractor]**](EntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of all prebuilt entities and their representations. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_custom_prebuilt_entity_roles**
> List[EntityRole] model_list_custom_prebuilt_entity_roles(app_id, version_id, entity_id)

Get all roles for a prebuilt entity in a version of the application

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | entity Id

    try:
        # Get all roles for a prebuilt entity in a version of the application
        api_response = api_instance.model_list_custom_prebuilt_entity_roles(app_id, version_id, entity_id)
        print("The response of DefaultApi->model_list_custom_prebuilt_entity_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_custom_prebuilt_entity_roles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| entity Id | 

### Return type

[**List[EntityRole]**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the entity roles |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_custom_prebuilt_intents**
> List[IntentClassifier] model_list_custom_prebuilt_intents(app_id, version_id)



Gets information about customizable prebuilt intents added to a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.intent_classifier import IntentClassifier
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.model_list_custom_prebuilt_intents(app_id, version_id)
        print("The response of DefaultApi->model_list_custom_prebuilt_intents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_custom_prebuilt_intents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**List[IntentClassifier]**](IntentClassifier.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of all customizable prebuilt intents and their representations in a version of the application. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_custom_prebuilt_models**
> List[CustomPrebuiltModel] model_list_custom_prebuilt_models(app_id, version_id)



Gets all prebuilt intent and entity model information used in a version of this application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.custom_prebuilt_model import CustomPrebuiltModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.model_list_custom_prebuilt_models(app_id, version_id)
        print("The response of DefaultApi->model_list_custom_prebuilt_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_custom_prebuilt_models: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**List[CustomPrebuiltModel]**](CustomPrebuiltModel.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of all prebuilt models and their representations. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_entities**
> List[NDepthEntityExtractor] model_list_entities(app_id, version_id, skip=skip, take=take)



Gets information about all the simple entity models in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.n_depth_entity_extractor import NDepthEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_entities(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_entities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[NDepthEntityExtractor]**](NDepthEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of entity model infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_entity_roles**
> List[EntityRole] model_list_entity_roles(app_id, version_id, entity_id)

Get all roles for an entity in a version of the application

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | entity Id

    try:
        # Get all roles for an entity in a version of the application
        api_response = api_instance.model_list_entity_roles(app_id, version_id, entity_id)
        print("The response of DefaultApi->model_list_entity_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_entity_roles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| entity Id | 

### Return type

[**List[EntityRole]**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the entity roles |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_entity_suggestions**
> List[EntitiesSuggestionExample] model_list_entity_suggestions(app_id, version_id, entity_id, take=take)



Get suggested example utterances that would improve the accuracy of the entity model in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entities_suggestion_example import EntitiesSuggestionExample
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The target entity extractor model to enhance.
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_entity_suggestions(app_id, version_id, entity_id, take=take)
        print("The response of DefaultApi->model_list_entity_suggestions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_entity_suggestions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The target entity extractor model to enhance. | 
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[EntitiesSuggestionExample]**](EntitiesSuggestionExample.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If there&#39;s no trained entity model, nothing is returned in the response. If there&#39;s a trained model and active learning finds any relevant queries, they are returned with the entity model predictions. If there&#39;s a trained model but active learning didn&#39;t find any relevant queries, an empty list is returned in the response. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_hierarchical_entities**
> List[HierarchicalEntityExtractor] model_list_hierarchical_entities(app_id, version_id, skip=skip, take=take)



Gets information about all the hierarchical entity models in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.hierarchical_entity_extractor import HierarchicalEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_hierarchical_entities(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_hierarchical_entities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_hierarchical_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[HierarchicalEntityExtractor]**](HierarchicalEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of hierarchical entity model infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_hierarchical_entity_roles**
> List[EntityRole] model_list_hierarchical_entity_roles(app_id, version_id, h_entity_id)

Get all roles for a hierarchical entity in a version of the application

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.

    try:
        # Get all roles for a hierarchical entity in a version of the application
        api_response = api_instance.model_list_hierarchical_entity_roles(app_id, version_id, h_entity_id)
        print("The response of DefaultApi->model_list_hierarchical_entity_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_hierarchical_entity_roles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 

### Return type

[**List[EntityRole]**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the entity roles |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_intent_suggestions**
> List[IntentsSuggestionExample] model_list_intent_suggestions(app_id, version_id, intent_id, take=take)



Suggests example utterances that would improve the accuracy of the intent model in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.intents_suggestion_example import IntentsSuggestionExample
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    intent_id = 'intent_id_example' # str | The intent classifier ID.
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_intent_suggestions(app_id, version_id, intent_id, take=take)
        print("The response of DefaultApi->model_list_intent_suggestions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_intent_suggestions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **intent_id** | **str**| The intent classifier ID. | 
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[IntentsSuggestionExample]**](IntentsSuggestionExample.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If there&#39;s no trained intent model, nothing is returned in the response. If there&#39;s a trained model and active learning finds any relevant queries, they are returned with the intent model predictions. If there&#39;s a trained model but active learning didn&#39;t find any relevant queries, an empty list is returned in the response. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_intents**
> List[IntentClassifier] model_list_intents(app_id, version_id, skip=skip, take=take)



Gets information about the intent models in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.intent_classifier import IntentClassifier
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_intents(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_intents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_intents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[IntentClassifier]**](IntentClassifier.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of intent model infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_models**
> List[ModelInfoResponse] model_list_models(app_id, version_id, skip=skip, take=take)



Gets information about all the intent and entity models in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_info_response import ModelInfoResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_models(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_models: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[ModelInfoResponse]**](ModelInfoResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of application model infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_pattern_any_entity_infos**
> List[PatternAnyEntityExtractor] model_list_pattern_any_entity_infos(app_id, version_id, skip=skip, take=take)

Get information about the Pattern.Any entity models in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.pattern_any_entity_extractor import PatternAnyEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        # Get information about the Pattern.Any entity models in a version of the application.
        api_response = api_instance.model_list_pattern_any_entity_infos(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_pattern_any_entity_infos:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_pattern_any_entity_infos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[PatternAnyEntityExtractor]**](PatternAnyEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Pattern.Any entity model infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_pattern_any_entity_roles**
> List[EntityRole] model_list_pattern_any_entity_roles(app_id, version_id, entity_id)

Get all roles for a Pattern.any entity in a version of the application

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | entity Id

    try:
        # Get all roles for a Pattern.any entity in a version of the application
        api_response = api_instance.model_list_pattern_any_entity_roles(app_id, version_id, entity_id)
        print("The response of DefaultApi->model_list_pattern_any_entity_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_pattern_any_entity_roles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| entity Id | 

### Return type

[**List[EntityRole]**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the entity roles |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_prebuilt_entities**
> List[AvailablePrebuiltEntityModel] model_list_prebuilt_entities(app_id, version_id)



Gets all the available prebuilt entities in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.available_prebuilt_entity_model import AvailablePrebuiltEntityModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.model_list_prebuilt_entities(app_id, version_id)
        print("The response of DefaultApi->model_list_prebuilt_entities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_prebuilt_entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**List[AvailablePrebuiltEntityModel]**](AvailablePrebuiltEntityModel.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the possible prebuilt entity extractors. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_prebuilt_entity_roles**
> List[EntityRole] model_list_prebuilt_entity_roles(app_id, version_id, entity_id)

Get a prebuilt entity's roles in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | entity Id

    try:
        # Get a prebuilt entity's roles in a version of the application.
        api_response = api_instance.model_list_prebuilt_entity_roles(app_id, version_id, entity_id)
        print("The response of DefaultApi->model_list_prebuilt_entity_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_prebuilt_entity_roles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| entity Id | 

### Return type

[**List[EntityRole]**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the entity roles |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_prebuilts**
> List[PrebuiltEntityExtractor] model_list_prebuilts(app_id, version_id, skip=skip, take=take)



Gets information about all the prebuilt entities in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prebuilt_entity_extractor import PrebuiltEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.model_list_prebuilts(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_prebuilts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_prebuilts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[PrebuiltEntityExtractor]**](PrebuiltEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of prebuilt entity models infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_regex_entity_infos**
> List[RegexEntityExtractor] model_list_regex_entity_infos(app_id, version_id, skip=skip, take=take)

Gets information about the regular expression entity models in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.regex_entity_extractor import RegexEntityExtractor
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        # Gets information about the regular expression entity models in a version of the application.
        api_response = api_instance.model_list_regex_entity_infos(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->model_list_regex_entity_infos:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_regex_entity_infos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[RegexEntityExtractor]**](RegexEntityExtractor.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of regular expression entity model infos. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_list_regex_entity_roles**
> List[EntityRole] model_list_regex_entity_roles(app_id, version_id, entity_id)

Get all roles for a regular expression entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role import EntityRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | entity Id

    try:
        # Get all roles for a regular expression entity in a version of the application.
        api_response = api_instance.model_list_regex_entity_roles(app_id, version_id, entity_id)
        print("The response of DefaultApi->model_list_regex_entity_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_list_regex_entity_roles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| entity Id | 

### Return type

[**List[EntityRole]**](EntityRole.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the entity roles |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_patch_closed_list**
> OperationStatus model_patch_closed_list(app_id, version_id, cl_entity_id, closed_list_model_patch_object)



Adds a batch of sublists to an existing list entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.closed_list_model_patch_object import ClosedListModelPatchObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    cl_entity_id = 'cl_entity_id_example' # str | The list entity model ID.
    closed_list_model_patch_object = openapi_client.ClosedListModelPatchObject() # ClosedListModelPatchObject | A words list batch.

    try:
        api_response = api_instance.model_patch_closed_list(app_id, version_id, cl_entity_id, closed_list_model_patch_object)
        print("The response of DefaultApi->model_patch_closed_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_patch_closed_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **cl_entity_id** | **str**| The list entity model ID. | 
 **closed_list_model_patch_object** | [**ClosedListModelPatchObject**](ClosedListModelPatchObject.md)| A words list batch. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully added sublists to the list entity. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_replace_entity_features**
> OperationStatus model_replace_entity_features(app_id, version_id, entity_id, feature_relations_update_object)



Updates the information of the features used by the entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_feature_information import ModelFeatureInformation
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity extractor ID.
    feature_relations_update_object = [openapi_client.ModelFeatureInformation()] # List[ModelFeatureInformation] | A list of feature information objects containing the new feature relations.

    try:
        api_response = api_instance.model_replace_entity_features(app_id, version_id, entity_id, feature_relations_update_object)
        print("The response of DefaultApi->model_replace_entity_features:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_replace_entity_features: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity extractor ID. | 
 **feature_relations_update_object** | [**List[ModelFeatureInformation]**](ModelFeatureInformation.md)| A list of feature information objects containing the new feature relations. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_replace_intent_features**
> OperationStatus model_replace_intent_features(app_id, version_id, intent_id, feature_relations_update_object)



Updates the information of the features used by the intent in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_feature_information import ModelFeatureInformation
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    intent_id = 'intent_id_example' # str | The intent classifier ID.
    feature_relations_update_object = [openapi_client.ModelFeatureInformation()] # List[ModelFeatureInformation] | A list of feature information objects containing the new feature relations.

    try:
        api_response = api_instance.model_replace_intent_features(app_id, version_id, intent_id, feature_relations_update_object)
        print("The response of DefaultApi->model_replace_intent_features:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_replace_intent_features: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **intent_id** | **str**| The intent classifier ID. | 
 **feature_relations_update_object** | [**List[ModelFeatureInformation]**](ModelFeatureInformation.md)| A list of feature information objects containing the new feature relations. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_closed_list**
> OperationStatus model_update_closed_list(app_id, version_id, cl_entity_id, closed_list_model_update_object)



Updates the list entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.closed_list_model_update_object import ClosedListModelUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    cl_entity_id = 'cl_entity_id_example' # str | The list model ID.
    closed_list_model_update_object = openapi_client.ClosedListModelUpdateObject() # ClosedListModelUpdateObject | The new list entity name and words list.

    try:
        api_response = api_instance.model_update_closed_list(app_id, version_id, cl_entity_id, closed_list_model_update_object)
        print("The response of DefaultApi->model_update_closed_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_closed_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **cl_entity_id** | **str**| The list model ID. | 
 **closed_list_model_update_object** | [**ClosedListModelUpdateObject**](ClosedListModelUpdateObject.md)| The new list entity name and words list. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated list entity name and words list. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_closed_list_entity_role**
> OperationStatus model_update_closed_list_entity_role(app_id, version_id, entity_id, role_id, entity_role_update_object)

Update a role for a given list entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_update_object import EntityRoleUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity ID.
    role_id = 'role_id_example' # str | The entity role ID.
    entity_role_update_object = openapi_client.EntityRoleUpdateObject() # EntityRoleUpdateObject | The new entity role.

    try:
        # Update a role for a given list entity in a version of the application.
        api_response = api_instance.model_update_closed_list_entity_role(app_id, version_id, entity_id, role_id, entity_role_update_object)
        print("The response of DefaultApi->model_update_closed_list_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_closed_list_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity ID. | 
 **role_id** | **str**| The entity role ID. | 
 **entity_role_update_object** | [**EntityRoleUpdateObject**](EntityRoleUpdateObject.md)| The new entity role. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the entity role. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_composite_entity**
> OperationStatus model_update_composite_entity(app_id, version_id, c_entity_id, composite_model_update_object)



Updates a composite entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.composite_entity_model import CompositeEntityModel
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    c_entity_id = 'c_entity_id_example' # str | The composite entity extractor ID.
    composite_model_update_object = openapi_client.CompositeEntityModel() # CompositeEntityModel | A model object containing the new entity extractor name and children.

    try:
        api_response = api_instance.model_update_composite_entity(app_id, version_id, c_entity_id, composite_model_update_object)
        print("The response of DefaultApi->model_update_composite_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_composite_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **c_entity_id** | **str**| The composite entity extractor ID. | 
 **composite_model_update_object** | [**CompositeEntityModel**](CompositeEntityModel.md)| A model object containing the new entity extractor name and children. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated composite entity. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_composite_entity_role**
> OperationStatus model_update_composite_entity_role(app_id, version_id, c_entity_id, role_id, entity_role_update_object)

Update a role for a given composite entity in a version of the application

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_update_object import EntityRoleUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    c_entity_id = 'c_entity_id_example' # str | The composite entity extractor ID.
    role_id = 'role_id_example' # str | The entity role ID.
    entity_role_update_object = openapi_client.EntityRoleUpdateObject() # EntityRoleUpdateObject | The new entity role.

    try:
        # Update a role for a given composite entity in a version of the application
        api_response = api_instance.model_update_composite_entity_role(app_id, version_id, c_entity_id, role_id, entity_role_update_object)
        print("The response of DefaultApi->model_update_composite_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_composite_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **c_entity_id** | **str**| The composite entity extractor ID. | 
 **role_id** | **str**| The entity role ID. | 
 **entity_role_update_object** | [**EntityRoleUpdateObject**](EntityRoleUpdateObject.md)| The new entity role. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the entity role. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_custom_prebuilt_entity_role**
> OperationStatus model_update_custom_prebuilt_entity_role(app_id, version_id, entity_id, role_id, entity_role_update_object)

Update a role for a given prebuilt entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_update_object import EntityRoleUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity ID.
    role_id = 'role_id_example' # str | The entity role ID.
    entity_role_update_object = openapi_client.EntityRoleUpdateObject() # EntityRoleUpdateObject | The new entity role.

    try:
        # Update a role for a given prebuilt entity in a version of the application.
        api_response = api_instance.model_update_custom_prebuilt_entity_role(app_id, version_id, entity_id, role_id, entity_role_update_object)
        print("The response of DefaultApi->model_update_custom_prebuilt_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_custom_prebuilt_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity ID. | 
 **role_id** | **str**| The entity role ID. | 
 **entity_role_update_object** | [**EntityRoleUpdateObject**](EntityRoleUpdateObject.md)| The new entity role. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the entity role. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_entity_child**
> OperationStatus model_update_entity_child(app_id, version_id, entity_id, entity_model_update_object)



Updates the name of an entity extractor or the name and instanceOf model of a child entity extractor.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_model_update_object import EntityModelUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity extractor or the child entity extractor ID.
    entity_model_update_object = openapi_client.EntityModelUpdateObject() # EntityModelUpdateObject | A model object containing the name new entity extractor or the name and instance of model of a child entity extractor 

    try:
        api_response = api_instance.model_update_entity_child(app_id, version_id, entity_id, entity_model_update_object)
        print("The response of DefaultApi->model_update_entity_child:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_entity_child: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity extractor or the child entity extractor ID. | 
 **entity_model_update_object** | [**EntityModelUpdateObject**](EntityModelUpdateObject.md)| A model object containing the name new entity extractor or the name and instance of model of a child entity extractor  | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_entity_role**
> OperationStatus model_update_entity_role(app_id, version_id, entity_id, role_id, entity_role_update_object)

Update a role for a given entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_update_object import EntityRoleUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity ID.
    role_id = 'role_id_example' # str | The entity role ID.
    entity_role_update_object = openapi_client.EntityRoleUpdateObject() # EntityRoleUpdateObject | The new entity role.

    try:
        # Update a role for a given entity in a version of the application.
        api_response = api_instance.model_update_entity_role(app_id, version_id, entity_id, role_id, entity_role_update_object)
        print("The response of DefaultApi->model_update_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity ID. | 
 **role_id** | **str**| The entity role ID. | 
 **entity_role_update_object** | [**EntityRoleUpdateObject**](EntityRoleUpdateObject.md)| The new entity role. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the entity role. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_explicit_list_item**
> OperationStatus model_update_explicit_list_item(app_id, version_id, entity_id, item_id, item)

Updates an explicit (exception) list item for a Pattern.Any entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.explicit_list_item_update_object import ExplicitListItemUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The Pattern.Any entity extractor ID.
    item_id = 56 # int | The explicit list item ID.
    item = openapi_client.ExplicitListItemUpdateObject() # ExplicitListItemUpdateObject | The new explicit list item.

    try:
        # Updates an explicit (exception) list item for a Pattern.Any entity in a version of the application.
        api_response = api_instance.model_update_explicit_list_item(app_id, version_id, entity_id, item_id, item)
        print("The response of DefaultApi->model_update_explicit_list_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_explicit_list_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The Pattern.Any entity extractor ID. | 
 **item_id** | **int**| The explicit list item ID. | 
 **item** | [**ExplicitListItemUpdateObject**](ExplicitListItemUpdateObject.md)| The new explicit list item. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the explicit list item. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_hierarchical_entity**
> OperationStatus model_update_hierarchical_entity(app_id, version_id, h_entity_id, model_update_object)



Updates the name of a hierarchical entity model in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_update_object import ModelUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.
    model_update_object = openapi_client.ModelUpdateObject() # ModelUpdateObject | Model containing names of the hierarchical entity.

    try:
        api_response = api_instance.model_update_hierarchical_entity(app_id, version_id, h_entity_id, model_update_object)
        print("The response of DefaultApi->model_update_hierarchical_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_hierarchical_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 
 **model_update_object** | [**ModelUpdateObject**](ModelUpdateObject.md)| Model containing names of the hierarchical entity. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_hierarchical_entity_child**
> OperationStatus model_update_hierarchical_entity_child(app_id, version_id, h_entity_id, h_child_id, hierarchical_child_model_update_object)



Renames a single child in an existing hierarchical entity model in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_add_composite_entity_child_request import ModelAddCompositeEntityChildRequest
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.
    h_child_id = 'h_child_id_example' # str | The hierarchical entity extractor child ID.
    hierarchical_child_model_update_object = openapi_client.ModelAddCompositeEntityChildRequest() # ModelAddCompositeEntityChildRequest | Model object containing new name of the hierarchical entity child.

    try:
        api_response = api_instance.model_update_hierarchical_entity_child(app_id, version_id, h_entity_id, h_child_id, hierarchical_child_model_update_object)
        print("The response of DefaultApi->model_update_hierarchical_entity_child:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_hierarchical_entity_child: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 
 **h_child_id** | **str**| The hierarchical entity extractor child ID. | 
 **hierarchical_child_model_update_object** | [**ModelAddCompositeEntityChildRequest**](ModelAddCompositeEntityChildRequest.md)| Model object containing new name of the hierarchical entity child. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated entity child. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_hierarchical_entity_role**
> OperationStatus model_update_hierarchical_entity_role(app_id, version_id, h_entity_id, role_id, entity_role_update_object)

Update a role for a given hierarchical entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_update_object import EntityRoleUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    h_entity_id = 'h_entity_id_example' # str | The hierarchical entity extractor ID.
    role_id = 'role_id_example' # str | The entity role ID.
    entity_role_update_object = openapi_client.EntityRoleUpdateObject() # EntityRoleUpdateObject | The new entity role.

    try:
        # Update a role for a given hierarchical entity in a version of the application.
        api_response = api_instance.model_update_hierarchical_entity_role(app_id, version_id, h_entity_id, role_id, entity_role_update_object)
        print("The response of DefaultApi->model_update_hierarchical_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_hierarchical_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **h_entity_id** | **str**| The hierarchical entity extractor ID. | 
 **role_id** | **str**| The entity role ID. | 
 **entity_role_update_object** | [**EntityRoleUpdateObject**](EntityRoleUpdateObject.md)| The new entity role. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the entity role. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_intent**
> OperationStatus model_update_intent(app_id, version_id, intent_id, model_update_object)



Updates the name of an intent in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_update_object import ModelUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    intent_id = 'intent_id_example' # str | The intent classifier ID.
    model_update_object = openapi_client.ModelUpdateObject() # ModelUpdateObject | A model object containing the new intent name.

    try:
        api_response = api_instance.model_update_intent(app_id, version_id, intent_id, model_update_object)
        print("The response of DefaultApi->model_update_intent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_intent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **intent_id** | **str**| The intent classifier ID. | 
 **model_update_object** | [**ModelUpdateObject**](ModelUpdateObject.md)| A model object containing the new intent name. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_pattern_any_entity_model**
> OperationStatus model_update_pattern_any_entity_model(app_id, version_id, entity_id, pattern_any_update_object)

Updates the name and explicit (exception) list of a Pattern.Any entity model in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.models.pattern_any_model_update_object import PatternAnyModelUpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The Pattern.Any entity extractor ID.
    pattern_any_update_object = openapi_client.PatternAnyModelUpdateObject() # PatternAnyModelUpdateObject | An object containing the explicit list of the Pattern.Any entity.

    try:
        # Updates the name and explicit (exception) list of a Pattern.Any entity model in a version of the application.
        api_response = api_instance.model_update_pattern_any_entity_model(app_id, version_id, entity_id, pattern_any_update_object)
        print("The response of DefaultApi->model_update_pattern_any_entity_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_pattern_any_entity_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The Pattern.Any entity extractor ID. | 
 **pattern_any_update_object** | [**PatternAnyModelUpdateObject**](PatternAnyModelUpdateObject.md)| An object containing the explicit list of the Pattern.Any entity. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the Pattern.Any entity extractor. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_pattern_any_entity_role**
> OperationStatus model_update_pattern_any_entity_role(app_id, version_id, entity_id, role_id, entity_role_update_object)

Update a role for a given Pattern.any entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_update_object import EntityRoleUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity ID.
    role_id = 'role_id_example' # str | The entity role ID.
    entity_role_update_object = openapi_client.EntityRoleUpdateObject() # EntityRoleUpdateObject | The new entity role.

    try:
        # Update a role for a given Pattern.any entity in a version of the application.
        api_response = api_instance.model_update_pattern_any_entity_role(app_id, version_id, entity_id, role_id, entity_role_update_object)
        print("The response of DefaultApi->model_update_pattern_any_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_pattern_any_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity ID. | 
 **role_id** | **str**| The entity role ID. | 
 **entity_role_update_object** | [**EntityRoleUpdateObject**](EntityRoleUpdateObject.md)| The new entity role. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the entity role. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_prebuilt_entity_role**
> OperationStatus model_update_prebuilt_entity_role(app_id, version_id, entity_id, role_id, entity_role_update_object)

Update a role for a given prebuilt entity in a version of the application

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_update_object import EntityRoleUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity ID.
    role_id = 'role_id_example' # str | The entity role ID.
    entity_role_update_object = openapi_client.EntityRoleUpdateObject() # EntityRoleUpdateObject | The new entity role.

    try:
        # Update a role for a given prebuilt entity in a version of the application
        api_response = api_instance.model_update_prebuilt_entity_role(app_id, version_id, entity_id, role_id, entity_role_update_object)
        print("The response of DefaultApi->model_update_prebuilt_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_prebuilt_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity ID. | 
 **role_id** | **str**| The entity role ID. | 
 **entity_role_update_object** | [**EntityRoleUpdateObject**](EntityRoleUpdateObject.md)| The new entity role. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the entity role. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_regex_entity_model**
> OperationStatus model_update_regex_entity_model(app_id, version_id, regex_entity_id, regex_entity_update_object)

Updates the regular expression entity in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.models.regex_model_update_object import RegexModelUpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    regex_entity_id = 'regex_entity_id_example' # str | The regular expression entity extractor ID.
    regex_entity_update_object = openapi_client.RegexModelUpdateObject() # RegexModelUpdateObject | An object containing the new entity name and regex pattern.

    try:
        # Updates the regular expression entity in a version of the application.
        api_response = api_instance.model_update_regex_entity_model(app_id, version_id, regex_entity_id, regex_entity_update_object)
        print("The response of DefaultApi->model_update_regex_entity_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_regex_entity_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **regex_entity_id** | **str**| The regular expression entity extractor ID. | 
 **regex_entity_update_object** | [**RegexModelUpdateObject**](RegexModelUpdateObject.md)| An object containing the new entity name and regex pattern. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the regular expression entity extractor. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_regex_entity_role**
> OperationStatus model_update_regex_entity_role(app_id, version_id, entity_id, role_id, entity_role_update_object)

Update a role for a given regular expression entity in a version of the application

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entity_role_update_object import EntityRoleUpdateObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    entity_id = 'entity_id_example' # str | The entity ID.
    role_id = 'role_id_example' # str | The entity role ID.
    entity_role_update_object = openapi_client.EntityRoleUpdateObject() # EntityRoleUpdateObject | The new entity role.

    try:
        # Update a role for a given regular expression entity in a version of the application
        api_response = api_instance.model_update_regex_entity_role(app_id, version_id, entity_id, role_id, entity_role_update_object)
        print("The response of DefaultApi->model_update_regex_entity_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_regex_entity_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **entity_id** | **str**| The entity ID. | 
 **role_id** | **str**| The entity role ID. | 
 **entity_role_update_object** | [**EntityRoleUpdateObject**](EntityRoleUpdateObject.md)| The new entity role. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the entity role. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_update_sub_list**
> OperationStatus model_update_sub_list(app_id, version_id, cl_entity_id, sub_list_id, word_list_base_update_object)



Updates one of the list entity's sublists in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.models.word_list_base_update_object import WordListBaseUpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    cl_entity_id = 'cl_entity_id_example' # str | The list entity extractor ID.
    sub_list_id = 56 # int | The sublist ID.
    word_list_base_update_object = openapi_client.WordListBaseUpdateObject() # WordListBaseUpdateObject | A sublist update object containing the new canonical form and the list of words.

    try:
        api_response = api_instance.model_update_sub_list(app_id, version_id, cl_entity_id, sub_list_id, word_list_base_update_object)
        print("The response of DefaultApi->model_update_sub_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->model_update_sub_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **cl_entity_id** | **str**| The list entity extractor ID. | 
 **sub_list_id** | **int**| The sublist ID. | 
 **word_list_base_update_object** | [**WordListBaseUpdateObject**](WordListBaseUpdateObject.md)| A sublist update object containing the new canonical form and the list of words. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated sublist. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pattern_add_pattern**
> PatternRuleInfo pattern_add_pattern(app_id, version_id, pattern)

Adds a pattern to a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.pattern_rule_create_object import PatternRuleCreateObject
from openapi_client.models.pattern_rule_info import PatternRuleInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    pattern = openapi_client.PatternRuleCreateObject() # PatternRuleCreateObject | The input pattern.

    try:
        # Adds a pattern to a version of the application.
        api_response = api_instance.pattern_add_pattern(app_id, version_id, pattern)
        print("The response of DefaultApi->pattern_add_pattern:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->pattern_add_pattern: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **pattern** | [**PatternRuleCreateObject**](PatternRuleCreateObject.md)| The input pattern. | 

### Return type

[**PatternRuleInfo**](PatternRuleInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created pattern |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pattern_batch_add_patterns**
> List[PatternRuleInfo] pattern_batch_add_patterns(app_id, version_id, patterns)

Adds a batch of patterns in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.pattern_rule_create_object import PatternRuleCreateObject
from openapi_client.models.pattern_rule_info import PatternRuleInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    patterns = [openapi_client.PatternRuleCreateObject()] # List[PatternRuleCreateObject] | A JSON array containing patterns.

    try:
        # Adds a batch of patterns in a version of the application.
        api_response = api_instance.pattern_batch_add_patterns(app_id, version_id, patterns)
        print("The response of DefaultApi->pattern_batch_add_patterns:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->pattern_batch_add_patterns: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **patterns** | [**List[PatternRuleCreateObject]**](PatternRuleCreateObject.md)| A JSON array containing patterns. | 

### Return type

[**List[PatternRuleInfo]**](PatternRuleInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created patterns |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pattern_delete_pattern**
> OperationStatus pattern_delete_pattern(app_id, version_id, pattern_id)

Deletes the pattern with the specified ID from a version of the application..

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    pattern_id = 'pattern_id_example' # str | The pattern ID.

    try:
        # Deletes the pattern with the specified ID from a version of the application..
        api_response = api_instance.pattern_delete_pattern(app_id, version_id, pattern_id)
        print("The response of DefaultApi->pattern_delete_pattern:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->pattern_delete_pattern: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **pattern_id** | **str**| The pattern ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pattern_delete_patterns**
> OperationStatus pattern_delete_patterns(app_id, version_id, pattern_ids)

Deletes a list of patterns in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    pattern_ids = ['pattern_ids_example'] # List[str] | The patterns IDs.

    try:
        # Deletes a list of patterns in a version of the application.
        api_response = api_instance.pattern_delete_patterns(app_id, version_id, pattern_ids)
        print("The response of DefaultApi->pattern_delete_patterns:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->pattern_delete_patterns: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **pattern_ids** | [**List[str]**](str.md)| The patterns IDs. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pattern_list_intent_patterns**
> List[PatternRuleInfo] pattern_list_intent_patterns(app_id, version_id, intent_id, skip=skip, take=take)

Returns patterns for the specific intent in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.pattern_rule_info import PatternRuleInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    intent_id = 'intent_id_example' # str | The intent classifier ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        # Returns patterns for the specific intent in a version of the application.
        api_response = api_instance.pattern_list_intent_patterns(app_id, version_id, intent_id, skip=skip, take=take)
        print("The response of DefaultApi->pattern_list_intent_patterns:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->pattern_list_intent_patterns: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **intent_id** | **str**| The intent classifier ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[PatternRuleInfo]**](PatternRuleInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved patterns |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pattern_list_patterns**
> List[PatternRuleInfo] pattern_list_patterns(app_id, version_id, skip=skip, take=take)

Gets patterns in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.pattern_rule_info import PatternRuleInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        # Gets patterns in a version of the application.
        api_response = api_instance.pattern_list_patterns(app_id, version_id, skip=skip, take=take)
        print("The response of DefaultApi->pattern_list_patterns:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->pattern_list_patterns: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[PatternRuleInfo]**](PatternRuleInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The retrieved patterns |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pattern_update_pattern**
> PatternRuleInfo pattern_update_pattern(app_id, version_id, pattern_id, pattern)

Updates a pattern in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.pattern_rule_info import PatternRuleInfo
from openapi_client.models.pattern_rule_update_object import PatternRuleUpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    pattern_id = 'pattern_id_example' # str | The pattern ID.
    pattern = openapi_client.PatternRuleUpdateObject() # PatternRuleUpdateObject | An object representing a pattern.

    try:
        # Updates a pattern in a version of the application.
        api_response = api_instance.pattern_update_pattern(app_id, version_id, pattern_id, pattern)
        print("The response of DefaultApi->pattern_update_pattern:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->pattern_update_pattern: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **pattern_id** | **str**| The pattern ID. | 
 **pattern** | [**PatternRuleUpdateObject**](PatternRuleUpdateObject.md)| An object representing a pattern. | 

### Return type

[**PatternRuleInfo**](PatternRuleInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated pattern |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pattern_update_patterns**
> List[PatternRuleInfo] pattern_update_patterns(app_id, version_id, patterns)

Updates patterns in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.pattern_rule_info import PatternRuleInfo
from openapi_client.models.pattern_rule_update_object import PatternRuleUpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    patterns = [openapi_client.PatternRuleUpdateObject()] # List[PatternRuleUpdateObject] | An array represents the patterns.

    try:
        # Updates patterns in a version of the application.
        api_response = api_instance.pattern_update_patterns(app_id, version_id, patterns)
        print("The response of DefaultApi->pattern_update_patterns:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->pattern_update_patterns: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **patterns** | [**List[PatternRuleUpdateObject]**](PatternRuleUpdateObject.md)| An array represents the patterns. | 

### Return type

[**List[PatternRuleInfo]**](PatternRuleInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated patterns |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permissions_add**
> OperationStatus permissions_add(app_id, user_to_add)



Adds a user to the allowed list of users to access this LUIS application. Users are added using their email address.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.models.user_collaborator import UserCollaborator
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    user_to_add = openapi_client.UserCollaborator() # UserCollaborator | A model containing the user's email address.

    try:
        api_response = api_instance.permissions_add(app_id, user_to_add)
        print("The response of DefaultApi->permissions_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->permissions_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **user_to_add** | [**UserCollaborator**](UserCollaborator.md)| A model containing the user&#39;s email address. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permissions_delete**
> OperationStatus permissions_delete(app_id, user_to_delete)



Removes a user from the allowed list of users to access this LUIS application. Users are removed using their email address.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.models.user_collaborator import UserCollaborator
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    user_to_delete = openapi_client.UserCollaborator() # UserCollaborator | A model containing the user's email address.

    try:
        api_response = api_instance.permissions_delete(app_id, user_to_delete)
        print("The response of DefaultApi->permissions_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->permissions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **user_to_delete** | [**UserCollaborator**](UserCollaborator.md)| A model containing the user&#39;s email address. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permissions_list**
> UserAccessList permissions_list(app_id)



Gets the list of user emails that have permissions to access your application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.user_access_list import UserAccessList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.

    try:
        api_response = api_instance.permissions_list(app_id)
        print("The response of DefaultApi->permissions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->permissions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 

### Return type

[**UserAccessList**](UserAccessList.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list includes a single owner. All collaborators are listed in the emails array. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **permissions_update**
> OperationStatus permissions_update(app_id, collaborators)



Replaces the current user access list with the new list sent in the body. If an empty list is sent, all access to other users will be removed.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.collaborators_array import CollaboratorsArray
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    collaborators = openapi_client.CollaboratorsArray() # CollaboratorsArray | A model containing a list of user email addresses.

    try:
        api_response = api_instance.permissions_update(app_id, collaborators)
        print("The response of DefaultApi->permissions_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->permissions_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **collaborators** | [**CollaboratorsArray**](CollaboratorsArray.md)| A model containing a list of user email addresses. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **settings_list**
> List[AppVersionSettingObject] settings_list(app_id, version_id)



Gets the settings in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.app_version_setting_object import AppVersionSettingObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.settings_list(app_id, version_id)
        print("The response of DefaultApi->settings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->settings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**List[AppVersionSettingObject]**](AppVersionSettingObject.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the application version settings. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **settings_update**
> OperationStatus settings_update(app_id, version_id, list_of_app_version_setting_object)



Updates the settings in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.app_version_setting_object import AppVersionSettingObject
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    list_of_app_version_setting_object = [openapi_client.AppVersionSettingObject()] # List[AppVersionSettingObject] | A list of the updated application version settings.

    try:
        api_response = api_instance.settings_update(app_id, version_id, list_of_app_version_setting_object)
        print("The response of DefaultApi->settings_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->settings_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **list_of_app_version_setting_object** | [**List[AppVersionSettingObject]**](AppVersionSettingObject.md)| A list of the updated application version settings. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **train_get_status**
> List[ModelTrainingInfo] train_get_status(app_id, version_id)



Gets the training status of all models (intents and entities) for the specified LUIS app. You must call the train API to train the LUIS app before you call this API to get training status. \"appID\" specifies the LUIS app ID. \"versionId\" specifies the version number of the LUIS app. For example, \"0.1\".

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.model_training_info import ModelTrainingInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.train_get_status(app_id, version_id)
        print("The response of DefaultApi->train_get_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->train_get_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**List[ModelTrainingInfo]**](ModelTrainingInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, JSON

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response provides an array of training status details for a LUIS app that you submitted for training. Each element in the response array provides training status for a model (intent or entity) in the LUIS app. Note: Training status is not provided for prebuilt entities because they are pretrained. The \&quot;modelId\&quot; property identifies which intent or entity the training status corresponds to. To get the name and type of each model, use the models API which has a request URL in this format: https://westus.api.cognitive.microsoft.com/luis/api/v3.0-preview/apps/{appId}/versions/{versionId}/models The details property for each model can contain the following fields: \&quot;statusId\&quot;: An integer from 0 to 3 that corresponds to the value of the status field. \&quot;status\&quot;: A string with one of the following values: \&quot;Success\&quot;, \&quot;UpToDate\&quot;, \&quot;InProgress\&quot;, \&quot;Fail\&quot;. If the status is \&quot;Fail\&quot;, the \&quot;failureReason\&quot; property provides the reason for failure. \&quot;exampleCount\&quot;: The number of examples used for training. In the case of the None intent or prebuilt domain intents and entities, this number includes example provided internally by the system as well as examples you added to your LUIS app. \&quot;failureReason\&quot;: A string that indicates the reason training failed.  The value \&quot;FewLabels\&quot; means that no labeled example utterances were provided for training. \&quot;trainingDateTime\&quot;: A string indicating the time the model was last trained. The value uses the ISO 8601 format for representing times in UTC (Coordinated Universal Time) with a UTC designator (\&quot;Z\&quot;), for example: \&quot;2017-08-10T01:08:34Z\&quot;. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **train_train_version**
> EnqueueTrainingResponse train_train_version(app_id, version_id)



Sends a training request for a version of a specified LUIS app. This POST request initiates a request asynchronously. To determine whether the training request is successful, submit a GET request to get training status. Note: The application version is not fully trained unless all the models (intents and entities) are trained successfully or are up to date. To verify training success, get the training status at least once after training is complete.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.enqueue_training_response import EnqueueTrainingResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.train_train_version(app_id, version_id)
        print("The response of DefaultApi->train_train_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->train_train_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**EnqueueTrainingResponse**](EnqueueTrainingResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | This response indicates the initial training status. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_clone**
> str versions_clone(app_id, version_id, version_clone_object)



Creates a new version from the selected version.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.task_update_object import TaskUpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    version_clone_object = openapi_client.TaskUpdateObject() # TaskUpdateObject | A model containing the new version ID.

    try:
        api_response = api_instance.versions_clone(app_id, version_id, version_clone_object)
        print("The response of DefaultApi->versions_clone:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_clone: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **version_clone_object** | [**TaskUpdateObject**](TaskUpdateObject.md)| A model containing the new version ID. | 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The new version ID. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_delete**
> OperationStatus versions_delete(app_id, version_id)



Deletes an application version.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.versions_delete(app_id, version_id)
        print("The response of DefaultApi->versions_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_delete_unlabelled_utterance**
> OperationStatus versions_delete_unlabelled_utterance(app_id, version_id, utterance)



Deleted an unlabelled utterance in a version of the application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    utterance = 'utterance_example' # str | The utterance text to delete.

    try:
        api_response = api_instance.versions_delete_unlabelled_utterance(app_id, version_id, utterance)
        print("The response of DefaultApi->versions_delete_unlabelled_utterance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_delete_unlabelled_utterance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **utterance** | **str**| The utterance text to delete. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_export**
> LuisApp versions_export(app_id, version_id)



Exports a LUIS application to JSON format.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.luis_app import LuisApp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.versions_export(app_id, version_id)
        print("The response of DefaultApi->versions_export:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_export: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**LuisApp**](LuisApp.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The LUIS application structure in JSON format. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_get**
> VersionInfo versions_get(app_id, version_id)



Gets the version information such as date created, last modified date, endpoint URL, count of intents and entities, training and publishing status.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.version_info import VersionInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.

    try:
        api_response = api_instance.versions_get(app_id, version_id)
        print("The response of DefaultApi->versions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 

### Return type

[**VersionInfo**](VersionInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A model containing the version info. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_import**
> str versions_import(app_id, luis_app, version_id=version_id)



Imports a new version into a LUIS application.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.luis_app import LuisApp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    luis_app = openapi_client.LuisApp() # LuisApp | A LUIS application structure.
    version_id = 'version_id_example' # str | The new versionId to import. If not specified, the versionId will be read from the imported object. (optional)

    try:
        api_response = api_instance.versions_import(app_id, luis_app, version_id=version_id)
        print("The response of DefaultApi->versions_import:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_import: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **luis_app** | [**LuisApp**](LuisApp.md)| A LUIS application structure. | 
 **version_id** | **str**| The new versionId to import. If not specified, the versionId will be read from the imported object. | [optional] 

### Return type

**str**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created application version. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_list**
> List[VersionInfo] versions_list(app_id, skip=skip, take=take)



Gets a list of versions for this application ID.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.version_info import VersionInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    skip = 0 # int | The number of entries to skip. Default value is 0. (optional) (default to 0)
    take = 100 # int | The number of entries to return. Maximum page size is 500. Default is 100. (optional) (default to 100)

    try:
        api_response = api_instance.versions_list(app_id, skip=skip, take=take)
        print("The response of DefaultApi->versions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **skip** | **int**| The number of entries to skip. Default value is 0. | [optional] [default to 0]
 **take** | **int**| The number of entries to return. Maximum page size is 500. Default is 100. | [optional] [default to 100]

### Return type

[**List[VersionInfo]**](VersionInfo.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all versions of the application. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **versions_update**
> OperationStatus versions_update(app_id, version_id, version_update_object)



Updates the name or description of the application version.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.models.task_update_object import TaskUpdateObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The version ID.
    version_update_object = openapi_client.TaskUpdateObject() # TaskUpdateObject | A model containing Name and Description of the application.

    try:
        api_response = api_instance.versions_update(app_id, version_id, version_update_object)
        print("The response of DefaultApi->versions_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->versions_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The version ID. | 
 **version_update_object** | [**TaskUpdateObject**](TaskUpdateObject.md)| A model containing Name and Description of the application. | 

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error Response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

