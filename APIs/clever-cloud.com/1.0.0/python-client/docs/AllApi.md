# openapi_client.AllApi

All URIs are relative to *https://api.clever-cloud.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**application_app_id_environment_get**](AllApi.md#application_app_id_environment_get) | **GET** /application/{appId}/environment | 
[**application_app_id_environment_put**](AllApi.md#application_app_id_environment_put) | **PUT** /application/{appId}/environment | 
[**create_matomo**](AllApi.md#create_matomo) | **POST** /v2/providers/addon-matomo/resources | Create Matomo addon
[**create_network_group**](AllApi.md#create_network_group) | **POST** /v4/networkgroups/organisations/{ownerId}/networkgroups | Create Network Group
[**create_network_group_external_peer**](AllApi.md#create_network_group_external_peer) | **POST** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/external-peers | Add external peer
[**create_network_group_member**](AllApi.md#create_network_group_member) | **POST** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members | Add member
[**delete_github_link**](AllApi.md#delete_github_link) | **DELETE** /github/link | 
[**delete_matomo**](AllApi.md#delete_matomo) | **DELETE** /v2/providers/addon-matomo/resources/{matomoId} | Delete Matomo addon
[**delete_network_group**](AllApi.md#delete_network_group) | **DELETE** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId} | Delete Network Group
[**delete_network_group_external_peer**](AllApi.md#delete_network_group_external_peer) | **DELETE** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/external-peers/{peerId} | Remove external peer
[**delete_network_group_member**](AllApi.md#delete_network_group_member) | **DELETE** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members/{memberId} | Remove member
[**delete_network_group_peer**](AllApi.md#delete_network_group_peer) | **DELETE** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId} | Remove peer
[**delete_organisations_id**](AllApi.md#delete_organisations_id) | **DELETE** /organisations/{id} | 
[**delete_organisations_id_addonproviders_provider_id_features_feature_id**](AllApi.md#delete_organisations_id_addonproviders_provider_id_features_feature_id) | **DELETE** /organisations/{id}/addonproviders/{providerId}/features/{featureId} | 
[**delete_organisations_id_addonproviders_provider_id_plans_plan_id**](AllApi.md#delete_organisations_id_addonproviders_provider_id_plans_plan_id) | **DELETE** /organisations/{id}/addonproviders/{providerId}/plans/{planId} | 
[**delete_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name**](AllApi.md#delete_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name) | **DELETE** /organisations/{id}/addonproviders/{providerId}/plans/{planId}/features/{featureName} | 
[**delete_organisations_id_addons_addon_id**](AllApi.md#delete_organisations_id_addons_addon_id) | **DELETE** /organisations/{id}/addons/{addonId} | 
[**delete_organisations_id_addons_addon_id_tags_tag**](AllApi.md#delete_organisations_id_addons_addon_id_tags_tag) | **DELETE** /organisations/{id}/addons/{addonId}/tags/{tag} | 
[**delete_organisations_id_applications_app_id**](AllApi.md#delete_organisations_id_applications_app_id) | **DELETE** /organisations/{id}/applications/{appId} | 
[**delete_organisations_id_applications_app_id_addons_addon_id**](AllApi.md#delete_organisations_id_applications_app_id_addons_addon_id) | **DELETE** /organisations/{id}/applications/{appId}/addons/{addonId} | 
[**delete_organisations_id_applications_app_id_dependencies_dependency_id**](AllApi.md#delete_organisations_id_applications_app_id_dependencies_dependency_id) | **DELETE** /organisations/{id}/applications/{appId}/dependencies/{dependencyId} | 
[**delete_organisations_id_applications_app_id_deployments_deployment_id_instances**](AllApi.md#delete_organisations_id_applications_app_id_deployments_deployment_id_instances) | **DELETE** /organisations/{id}/applications/{appId}/deployments/{deploymentId}/instances | 
[**delete_organisations_id_applications_app_id_env_env_name**](AllApi.md#delete_organisations_id_applications_app_id_env_env_name) | **DELETE** /organisations/{id}/applications/{appId}/env/{envName} | 
[**delete_organisations_id_applications_app_id_instances**](AllApi.md#delete_organisations_id_applications_app_id_instances) | **DELETE** /organisations/{id}/applications/{appId}/instances | 
[**delete_organisations_id_applications_app_id_tags_tag**](AllApi.md#delete_organisations_id_applications_app_id_tags_tag) | **DELETE** /organisations/{id}/applications/{appId}/tags/{tag} | 
[**delete_organisations_id_applications_app_id_vhosts_domain**](AllApi.md#delete_organisations_id_applications_app_id_vhosts_domain) | **DELETE** /organisations/{id}/applications/{appId}/vhosts/{domain} | 
[**delete_organisations_id_applications_app_id_vhosts_favourite**](AllApi.md#delete_organisations_id_applications_app_id_vhosts_favourite) | **DELETE** /organisations/{id}/applications/{appId}/vhosts/favourite | 
[**delete_organisations_id_consumers_key**](AllApi.md#delete_organisations_id_consumers_key) | **DELETE** /organisations/{id}/consumers/{key} | 
[**delete_organisations_id_members_user_id**](AllApi.md#delete_organisations_id_members_user_id) | **DELETE** /organisations/{id}/members/{userId} | 
[**delete_organisations_id_payments_billings_bid**](AllApi.md#delete_organisations_id_payments_billings_bid) | **DELETE** /organisations/{id}/payments/billings/{bid} | 
[**delete_organisations_id_payments_recurring**](AllApi.md#delete_organisations_id_payments_recurring) | **DELETE** /organisations/{id}/payments/recurring | 
[**delete_self**](AllApi.md#delete_self) | **DELETE** /self | 
[**delete_self_addons_addon_id**](AllApi.md#delete_self_addons_addon_id) | **DELETE** /self/addons/{addonId} | 
[**delete_self_addons_addon_id_tags_tag**](AllApi.md#delete_self_addons_addon_id_tags_tag) | **DELETE** /self/addons/{addonId}/tags/{tag} | 
[**delete_self_applications_app_id**](AllApi.md#delete_self_applications_app_id) | **DELETE** /self/applications/{appId} | 
[**delete_self_applications_app_id_addons_addon_id**](AllApi.md#delete_self_applications_app_id_addons_addon_id) | **DELETE** /self/applications/{appId}/addons/{addonId} | 
[**delete_self_applications_app_id_dependencies_dependency_id**](AllApi.md#delete_self_applications_app_id_dependencies_dependency_id) | **DELETE** /self/applications/{appId}/dependencies/{dependencyId} | 
[**delete_self_applications_app_id_deployments_deployment_id_instances**](AllApi.md#delete_self_applications_app_id_deployments_deployment_id_instances) | **DELETE** /self/applications/{appId}/deployments/{deploymentId}/instances | 
[**delete_self_applications_app_id_env_env_name**](AllApi.md#delete_self_applications_app_id_env_env_name) | **DELETE** /self/applications/{appId}/env/{envName} | 
[**delete_self_applications_app_id_instances**](AllApi.md#delete_self_applications_app_id_instances) | **DELETE** /self/applications/{appId}/instances | 
[**delete_self_applications_app_id_tags_tag**](AllApi.md#delete_self_applications_app_id_tags_tag) | **DELETE** /self/applications/{appId}/tags/{tag} | 
[**delete_self_applications_app_id_vhosts_domain**](AllApi.md#delete_self_applications_app_id_vhosts_domain) | **DELETE** /self/applications/{appId}/vhosts/{domain} | 
[**delete_self_applications_app_id_vhosts_favourite**](AllApi.md#delete_self_applications_app_id_vhosts_favourite) | **DELETE** /self/applications/{appId}/vhosts/favourite | 
[**delete_self_consumers_key**](AllApi.md#delete_self_consumers_key) | **DELETE** /self/consumers/{key} | 
[**delete_self_emails_email**](AllApi.md#delete_self_emails_email) | **DELETE** /self/emails/{email} | 
[**delete_self_keys_key**](AllApi.md#delete_self_keys_key) | **DELETE** /self/keys/{key} | 
[**delete_self_payments_billings_bid**](AllApi.md#delete_self_payments_billings_bid) | **DELETE** /self/payments/billings/{bid} | 
[**delete_self_payments_methods_mid**](AllApi.md#delete_self_payments_methods_mid) | **DELETE** /self/payments/methods/{mId} | 
[**delete_self_payments_recurring**](AllApi.md#delete_self_payments_recurring) | **DELETE** /self/payments/recurring | 
[**delete_self_tokens**](AllApi.md#delete_self_tokens) | **DELETE** /self/tokens | 
[**delete_self_tokens_token**](AllApi.md#delete_self_tokens_token) | **DELETE** /self/tokens/{token} | 
[**events_event_socket_get**](AllApi.md#events_event_socket_get) | **GET** /events/event-socket | 
[**get_config_provider**](AllApi.md#get_config_provider) | **GET** /v4/addon-providers/config-provider/addons/{configurationProviderId} | Get Addon provider configuration
[**get_config_provider_env**](AllApi.md#get_config_provider_env) | **GET** /v4/addon-providers/config-provider/addons/{configurationProviderId}/env | Get provider&#39;s addon environment
[**get_github**](AllApi.md#get_github) | **GET** /github | 
[**get_github_applications**](AllApi.md#get_github_applications) | **GET** /github/applications | 
[**get_github_callback**](AllApi.md#get_github_callback) | **GET** /github/callback | 
[**get_github_emails**](AllApi.md#get_github_emails) | **GET** /github/emails | 
[**get_github_keys**](AllApi.md#get_github_keys) | **GET** /github/keys | 
[**get_github_link**](AllApi.md#get_github_link) | **GET** /github/link | 
[**get_github_login**](AllApi.md#get_github_login) | **GET** /github/login | 
[**get_github_signup**](AllApi.md#get_github_signup) | **GET** /github/signup | 
[**get_github_username**](AllApi.md#get_github_username) | **GET** /github/username | 
[**get_matomo**](AllApi.md#get_matomo) | **GET** /v4/addon-providers/addon-matomo/addons/{matomoId} | Get Matomo addon
[**get_matomo_k_token_validation**](AllApi.md#get_matomo_k_token_validation) | **GET** /v4/addon-providers/addon-matomo/token/validate | Validate a keycloak token
[**get_network_group**](AllApi.md#get_network_group) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId} | Get Network Group
[**get_network_group_member**](AllApi.md#get_network_group_member) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members/{memberId} | Get member
[**get_network_group_peer**](AllApi.md#get_network_group_peer) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId} | Get peer
[**get_network_group_stream**](AllApi.md#get_network_group_stream) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/stream | Network Group SSE
[**get_network_group_wire_guard_configuration**](AllApi.md#get_network_group_wire_guard_configuration) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}/wireguard/configuration | Get WireGuard® configuration
[**get_network_group_wire_guard_configuration_stream**](AllApi.md#get_network_group_wire_guard_configuration_stream) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}/wireguard/configuration/stream | Get WireGuard® configuration
[**get_newsfeed_engineering**](AllApi.md#get_newsfeed_engineering) | **GET** /newsfeeds/engineering | 
[**get_newsfeeds_blog**](AllApi.md#get_newsfeeds_blog) | **GET** /newsfeeds/blog | 
[**get_oauth_authorize**](AllApi.md#get_oauth_authorize) | **GET** /oauth/authorize | 
[**get_oauth_rights**](AllApi.md#get_oauth_rights) | **GET** /oauth/rights | 
[**get_organisations**](AllApi.md#get_organisations) | **GET** /organisations | 
[**get_organisations_id**](AllApi.md#get_organisations_id) | **GET** /organisations/{id} | 
[**get_organisations_id_addonproviders**](AllApi.md#get_organisations_id_addonproviders) | **GET** /organisations/{id}/addonproviders | 
[**get_organisations_id_addonproviders_provider_id**](AllApi.md#get_organisations_id_addonproviders_provider_id) | **GET** /organisations/{id}/addonproviders/{providerId} | 
[**get_organisations_id_addonproviders_provider_id_features**](AllApi.md#get_organisations_id_addonproviders_provider_id_features) | **GET** /organisations/{id}/addonproviders/{providerId}/features | 
[**get_organisations_id_addonproviders_provider_id_plans**](AllApi.md#get_organisations_id_addonproviders_provider_id_plans) | **GET** /organisations/{id}/addonproviders/{providerId}/plans | 
[**get_organisations_id_addonproviders_provider_id_plans_plan_id**](AllApi.md#get_organisations_id_addonproviders_provider_id_plans_plan_id) | **GET** /organisations/{id}/addonproviders/{providerId}/plans/{planId} | 
[**get_organisations_id_addonproviders_provider_id_tags**](AllApi.md#get_organisations_id_addonproviders_provider_id_tags) | **GET** /organisations/{id}/addonproviders/{providerId}/tags | 
[**get_organisations_id_addons**](AllApi.md#get_organisations_id_addons) | **GET** /organisations/{id}/addons | 
[**get_organisations_id_addons_addon_id**](AllApi.md#get_organisations_id_addons_addon_id) | **GET** /organisations/{id}/addons/{addonId} | 
[**get_organisations_id_addons_addon_id_applications**](AllApi.md#get_organisations_id_addons_addon_id_applications) | **GET** /organisations/{id}/addons/{addonId}/applications | 
[**get_organisations_id_addons_addon_id_env**](AllApi.md#get_organisations_id_addons_addon_id_env) | **GET** /organisations/{id}/addons/{addonId}/env | 
[**get_organisations_id_addons_addon_id_sso**](AllApi.md#get_organisations_id_addons_addon_id_sso) | **GET** /organisations/{id}/addonproviders/{providerId}/sso | 
[**get_organisations_id_addons_addon_id_tags**](AllApi.md#get_organisations_id_addons_addon_id_tags) | **GET** /organisations/{id}/addons/{addonId}/tags | 
[**get_organisations_id_applications**](AllApi.md#get_organisations_id_applications) | **GET** /organisations/{id}/applications | 
[**get_organisations_id_applications_app_id**](AllApi.md#get_organisations_id_applications_app_id) | **GET** /organisations/{id}/applications/{appId} | 
[**get_organisations_id_applications_app_id_addons**](AllApi.md#get_organisations_id_applications_app_id_addons) | **GET** /organisations/{id}/applications/{appId}/addons | 
[**get_organisations_id_applications_app_id_addons_env**](AllApi.md#get_organisations_id_applications_app_id_addons_env) | **GET** /organisations/{id}/applications/{appId}/addons/env | 
[**get_organisations_id_applications_app_id_dependencies**](AllApi.md#get_organisations_id_applications_app_id_dependencies) | **GET** /organisations/{id}/applications/{appId}/dependencies | 
[**get_organisations_id_applications_app_id_dependents**](AllApi.md#get_organisations_id_applications_app_id_dependents) | **GET** /organisations/{id}/applications/{appId}/dependents | 
[**get_organisations_id_applications_app_id_deployments**](AllApi.md#get_organisations_id_applications_app_id_deployments) | **GET** /organisations/{id}/applications/{appId}/deployments | 
[**get_organisations_id_applications_app_id_env**](AllApi.md#get_organisations_id_applications_app_id_env) | **GET** /organisations/{id}/applications/{appId}/env | 
[**get_organisations_id_applications_app_id_instances**](AllApi.md#get_organisations_id_applications_app_id_instances) | **GET** /organisations/{id}/applications/{appId}/instances | 
[**get_organisations_id_applications_app_id_tags**](AllApi.md#get_organisations_id_applications_app_id_tags) | **GET** /organisations/{id}/applications/{appId}/tags | 
[**get_organisations_id_applications_app_id_vhosts**](AllApi.md#get_organisations_id_applications_app_id_vhosts) | **GET** /organisations/{id}/applications/{appId}/vhosts | 
[**get_organisations_id_applications_app_id_vhosts_favourite**](AllApi.md#get_organisations_id_applications_app_id_vhosts_favourite) | **GET** /organisations/{id}/applications/{appId}/vhosts/favourite | 
[**get_organisations_id_consumers**](AllApi.md#get_organisations_id_consumers) | **GET** /organisations/{id}/consumers | 
[**get_organisations_id_consumers_key**](AllApi.md#get_organisations_id_consumers_key) | **GET** /organisations/{id}/consumers/{key} | 
[**get_organisations_id_consumers_key_secret**](AllApi.md#get_organisations_id_consumers_key_secret) | **GET** /organisations/{id}/consumers/{key}/secret | 
[**get_organisations_id_consumptions**](AllApi.md#get_organisations_id_consumptions) | **GET** /organisations/{id}/consumptions | 
[**get_organisations_id_credits**](AllApi.md#get_organisations_id_credits) | **GET** /organisations/{id}/credits | 
[**get_organisations_id_deployments**](AllApi.md#get_organisations_id_deployments) | **GET** /organisations/{id}/deployments | 
[**get_organisations_id_instances**](AllApi.md#get_organisations_id_instances) | **GET** /organisations/{id}/instances | 
[**get_organisations_id_members**](AllApi.md#get_organisations_id_members) | **GET** /organisations/{id}/members | 
[**get_organisations_id_payment_info**](AllApi.md#get_organisations_id_payment_info) | **GET** /organisations/{id}/payment-info | 
[**get_organisations_id_payments_billings**](AllApi.md#get_organisations_id_payments_billings) | **GET** /organisations/{id}/payments/billings | 
[**get_organisations_id_payments_billings_bid**](AllApi.md#get_organisations_id_payments_billings_bid) | **GET** /organisations/{id}/payments/billings/{bid} | 
[**get_organisations_id_payments_billings_bid_pdf**](AllApi.md#get_organisations_id_payments_billings_bid_pdf) | **GET** /organisations/{id}/payments/billings/{bid}.pdf | 
[**get_organisations_id_payments_full_price_price**](AllApi.md#get_organisations_id_payments_full_price_price) | **GET** /organisations/{id}/payments/fullprice/{price} | 
[**get_password_forgotten**](AllApi.md#get_password_forgotten) | **GET** /password_forgotten | 
[**get_password_forgotten_key**](AllApi.md#get_password_forgotten_key) | **GET** /password_forgotten/{key} | 
[**get_payments_coupons_name**](AllApi.md#get_payments_coupons_name) | **GET** /payments/coupons/{name} | 
[**get_payments_providers**](AllApi.md#get_payments_providers) | **GET** /payments/providers | 
[**get_payments_tokens_stripe**](AllApi.md#get_payments_tokens_stripe) | **GET** /payments/tokens/stripe | 
[**get_products_addon_providers**](AllApi.md#get_products_addon_providers) | **GET** /products/addonproviders | 
[**get_products_addon_providers_provider_id**](AllApi.md#get_products_addon_providers_provider_id) | **GET** /products/addonproviders/{provider_id} | 
[**get_products_countries**](AllApi.md#get_products_countries) | **GET** /products/countries | 
[**get_products_countrycodes**](AllApi.md#get_products_countrycodes) | **GET** /products/countrycodes | 
[**get_products_instances**](AllApi.md#get_products_instances) | **GET** /products/instances | 
[**get_products_instances_type_version**](AllApi.md#get_products_instances_type_version) | **GET** /products/instances/{type}-{version} | 
[**get_products_packages**](AllApi.md#get_products_packages) | **GET** /products/packages | 
[**get_products_prices**](AllApi.md#get_products_prices) | **GET** /products/prices | 
[**get_products_zones**](AllApi.md#get_products_zones) | **GET** /products/zones | 
[**get_self**](AllApi.md#get_self) | **GET** /self | 
[**get_self_addons**](AllApi.md#get_self_addons) | **GET** /self/addons | Addon
[**get_self_addons_addon_id**](AllApi.md#get_self_addons_addon_id) | **GET** /self/addons/{addonId} | Specific addon
[**get_self_addons_addon_id_applications**](AllApi.md#get_self_addons_addon_id_applications) | **GET** /self/addons/{addonId}/applications | 
[**get_self_addons_addon_id_env**](AllApi.md#get_self_addons_addon_id_env) | **GET** /self/addons/{addonId}/env | 
[**get_self_addons_addon_id_sso**](AllApi.md#get_self_addons_addon_id_sso) | **GET** /self/addons/{addonId}/sso | 
[**get_self_addons_addon_id_tags**](AllApi.md#get_self_addons_addon_id_tags) | **GET** /self/addons/{addonId}/tags | 
[**get_self_applications**](AllApi.md#get_self_applications) | **GET** /self/applications | 
[**get_self_applications_app_id**](AllApi.md#get_self_applications_app_id) | **GET** /self/applications/{appId} | 
[**get_self_applications_app_id_addons**](AllApi.md#get_self_applications_app_id_addons) | **GET** /self/applications/{appId}/addons | 
[**get_self_applications_app_id_addons_env**](AllApi.md#get_self_applications_app_id_addons_env) | **GET** /self/applications/{appId}/addons/env | 
[**get_self_applications_app_id_dependencies**](AllApi.md#get_self_applications_app_id_dependencies) | **GET** /self/applications/{appId}/dependencies | 
[**get_self_applications_app_id_dependencies_dependency_id**](AllApi.md#get_self_applications_app_id_dependencies_dependency_id) | **PUT** /self/applications/{appId}/dependencies/{dependencyId} | 
[**get_self_applications_app_id_dependents**](AllApi.md#get_self_applications_app_id_dependents) | **GET** /self/applications/{appId}/dependents | 
[**get_self_applications_app_id_deployments**](AllApi.md#get_self_applications_app_id_deployments) | **GET** /self/applications/{appId}/deployments | 
[**get_self_applications_app_id_env**](AllApi.md#get_self_applications_app_id_env) | **GET** /self/applications/{appId}/env | 
[**get_self_applications_app_id_instances**](AllApi.md#get_self_applications_app_id_instances) | **GET** /self/applications/{appId}/instances | 
[**get_self_applications_app_id_tags**](AllApi.md#get_self_applications_app_id_tags) | **GET** /self/applications/{appId}/tags | 
[**get_self_applications_app_id_vhosts**](AllApi.md#get_self_applications_app_id_vhosts) | **GET** /self/applications/{appId}/vhosts | 
[**get_self_applications_app_id_vhosts_favourite**](AllApi.md#get_self_applications_app_id_vhosts_favourite) | **GET** /self/applications/{appId}/vhosts/favourite | 
[**get_self_confirmation_email**](AllApi.md#get_self_confirmation_email) | **GET** /self/confirmation_email | 
[**get_self_consumers**](AllApi.md#get_self_consumers) | **GET** /self/consumers | 
[**get_self_consumers_key**](AllApi.md#get_self_consumers_key) | **GET** /self/consumers/{key} | 
[**get_self_consumers_key_secret**](AllApi.md#get_self_consumers_key_secret) | **GET** /self/consumers/{key}/secret | 
[**get_self_consumptions**](AllApi.md#get_self_consumptions) | **GET** /self/consumptions | 
[**get_self_credits**](AllApi.md#get_self_credits) | **GET** /self/credits | 
[**get_self_emails**](AllApi.md#get_self_emails) | **GET** /self/emails | 
[**get_self_id**](AllApi.md#get_self_id) | **GET** /self/id | 
[**get_self_instances**](AllApi.md#get_self_instances) | **GET** /self/instances | 
[**get_self_keys**](AllApi.md#get_self_keys) | **GET** /self/keys | 
[**get_self_payment_info**](AllApi.md#get_self_payment_info) | **GET** /self/payment-info | 
[**get_self_payments_billings**](AllApi.md#get_self_payments_billings) | **GET** /self/payments/billings | 
[**get_self_payments_billings_bid**](AllApi.md#get_self_payments_billings_bid) | **GET** /self/payments/billings/{bid} | 
[**get_self_payments_billings_bid_pdf**](AllApi.md#get_self_payments_billings_bid_pdf) | **GET** /self/payments/billings/{bid}.pdf | 
[**get_self_payments_fullprice_price**](AllApi.md#get_self_payments_fullprice_price) | **GET** /self/payments/fullprice/{price} | 
[**get_self_payments_methods**](AllApi.md#get_self_payments_methods) | **GET** /self/payments/methods | 
[**get_self_tokens**](AllApi.md#get_self_tokens) | **GET** /self/tokens | 
[**get_self_validate_email**](AllApi.md#get_self_validate_email) | **GET** /self/validate_email | 
[**get_summary**](AllApi.md#get_summary) | **GET** /summary | 
[**get_users_id**](AllApi.md#get_users_id) | **GET** /users/{id} | 
[**get_users_id_applications**](AllApi.md#get_users_id_applications) | **GET** /users/{id}/applications | 
[**get_users_user_id_git_info**](AllApi.md#get_users_user_id_git_info) | **GET** /users/{userId}/git-info | 
[**get_vendor_apps**](AllApi.md#get_vendor_apps) | **GET** /vendor/apps | 
[**get_vendor_apps_addon_id**](AllApi.md#get_vendor_apps_addon_id) | **GET** /vendor/apps/{addonId} | 
[**list_network_group_members**](AllApi.md#list_network_group_members) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members | List members
[**list_network_group_peers**](AllApi.md#list_network_group_peers) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers | List peers
[**list_network_groups**](AllApi.md#list_network_groups) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups | List Network Groups
[**logs_app_id_drains_get**](AllApi.md#logs_app_id_drains_get) | **GET** /logs/{appId}/drains | 
[**logs_app_id_drains_id_or_url_delete**](AllApi.md#logs_app_id_drains_id_or_url_delete) | **DELETE** /logs/{appId}/drains/:idOrUrl | 
[**logs_app_id_drains_id_or_url_get**](AllApi.md#logs_app_id_drains_id_or_url_get) | **GET** /logs/{appId}/drains/:idOrUrl | 
[**logs_app_id_drains_post**](AllApi.md#logs_app_id_drains_post) | **POST** /logs/{appId}/drains | 
[**logs_app_id_get**](AllApi.md#logs_app_id_get) | **GET** /logs/{appId} | 
[**logs_app_id_sse_get**](AllApi.md#logs_app_id_sse_get) | **GET** /logs/{appId}/sse | 
[**logs_drains_drain_id_put**](AllApi.md#logs_drains_drain_id_put) | **PUT** /logs/drains/{drainId} | 
[**logs_drains_get**](AllApi.md#logs_drains_get) | **GET** /logs/drains | 
[**logs_logs_chunked_app_id_get**](AllApi.md#logs_logs_chunked_app_id_get) | **GET** /logs/logs-chunked/{appId} | 
[**logs_logs_socket_app_id_get**](AllApi.md#logs_logs_socket_app_id_get) | **GET** /logs/logs-socket/{appId} | 
[**logs_socket_app_id_get**](AllApi.md#logs_socket_app_id_get) | **GET** /logs-socket/{appId} | 
[**notifications_emailhooks_owner_id_get**](AllApi.md#notifications_emailhooks_owner_id_get) | **GET** /notifications/emailhooks/{ownerId} | 
[**notifications_emailhooks_owner_id_id_delete**](AllApi.md#notifications_emailhooks_owner_id_id_delete) | **DELETE** /notifications/emailhooks/{ownerId}/:id | 
[**notifications_emailhooks_owner_id_id_put**](AllApi.md#notifications_emailhooks_owner_id_id_put) | **PUT** /notifications/emailhooks/{ownerId}/:id | 
[**notifications_emailhooks_owner_id_post**](AllApi.md#notifications_emailhooks_owner_id_post) | **POST** /notifications/emailhooks/{ownerId} | 
[**notifications_info_events_get**](AllApi.md#notifications_info_events_get) | **GET** /notifications/info/events | 
[**notifications_info_webhookformats_get**](AllApi.md#notifications_info_webhookformats_get) | **GET** /notifications/info/webhookformats | 
[**notifications_webhooks_owner_id_get**](AllApi.md#notifications_webhooks_owner_id_get) | **GET** /notifications/webhooks/{ownerId} | 
[**notifications_webhooks_owner_id_id_delete**](AllApi.md#notifications_webhooks_owner_id_id_delete) | **DELETE** /notifications/webhooks/{ownerId}/:id | 
[**notifications_webhooks_owner_id_id_put**](AllApi.md#notifications_webhooks_owner_id_id_put) | **PUT** /notifications/webhooks/{ownerId}/:id | 
[**notifications_webhooks_owner_id_post**](AllApi.md#notifications_webhooks_owner_id_post) | **POST** /notifications/webhooks/{ownerId} | 
[**oauth_access_token_query_post**](AllApi.md#oauth_access_token_query_post) | **POST** /oauth/access_token_query | 
[**oauth_request_token_query_post**](AllApi.md#oauth_request_token_query_post) | **POST** /oauth/request_token_query | 
[**openapi_get**](AllApi.md#openapi_get) | **GET** //openapi | 
[**openapi_type_get**](AllApi.md#openapi_type_get) | **GET** /openapi.{type} | Get the swagger for this API as {type}
[**organisations_id_addonproviders_provider_id_delete**](AllApi.md#organisations_id_addonproviders_provider_id_delete) | **DELETE** /organisations/{id}/addonproviders/{providerId} | Remove an add-on provider
[**organisations_id_addons_addon_id_instances_get**](AllApi.md#organisations_id_addons_addon_id_instances_get) | **GET** /organisations/{id}/addons/{addonId}/instances | List instances for this add-on.
[**organisations_id_addons_addon_id_instances_instance_id_get**](AllApi.md#organisations_id_addons_addon_id_instances_instance_id_get) | **GET** /organisations/{id}/addons/{addonId}/instances/{instanceId} | Get a specific instance for {addonId}
[**organisations_id_addons_addon_id_migrations_get**](AllApi.md#organisations_id_addons_addon_id_migrations_get) | **GET** /organisations/{id}/addons/{addonId}/migrations | Get past migrations from add-on.
[**organisations_id_addons_addon_id_migrations_migration_id_get**](AllApi.md#organisations_id_addons_addon_id_migrations_migration_id_get) | **GET** /organisations/{id}/addons/{addonId}/migrations/{migrationId} | Get a given migration
[**organisations_id_addons_addon_id_migrations_post**](AllApi.md#organisations_id_addons_addon_id_migrations_post) | **POST** /organisations/{id}/addons/{addonId}/migrations | Start a new add-on migration
[**organisations_id_addons_addon_id_sso_get**](AllApi.md#organisations_id_addons_addon_id_sso_get) | **GET** /organisations/{id}/addons/{addonId}/sso | 
[**organisations_id_addons_preorders_post**](AllApi.md#organisations_id_addons_preorders_post) | **POST** /organisations/{id}/addons/preorders | 
[**organisations_id_applications_app_id_branch_put**](AllApi.md#organisations_id_applications_app_id_branch_put) | **PUT** /organisations/{id}/applications/{appId}/branch | 
[**organisations_id_applications_app_id_branches_get**](AllApi.md#organisations_id_applications_app_id_branches_get) | **GET** /organisations/{id}/applications/{appId}/branches | 
[**organisations_id_applications_app_id_buildflavor_put**](AllApi.md#organisations_id_applications_app_id_buildflavor_put) | **PUT** /organisations/{id}/applications/{appId}/buildflavor | 
[**organisations_id_applications_app_id_dependencies_env_get**](AllApi.md#organisations_id_applications_app_id_dependencies_env_get) | **GET** /organisations/{id}/applications/{appId}/dependencies/env | 
[**organisations_id_applications_app_id_deployments_deployment_id_get**](AllApi.md#organisations_id_applications_app_id_deployments_deployment_id_get) | **GET** /organisations/{id}/applications/{appId}/deployments/{deploymentId} | 
[**organisations_id_applications_app_id_exposed_env_get**](AllApi.md#organisations_id_applications_app_id_exposed_env_get) | **GET** /organisations/{id}/applications/{appId}/exposed_env | 
[**organisations_id_applications_app_id_exposed_env_put**](AllApi.md#organisations_id_applications_app_id_exposed_env_put) | **PUT** /organisations/{id}/applications/{appId}/exposed_env | 
[**organisations_id_applications_app_id_instances_instance_id_get**](AllApi.md#organisations_id_applications_app_id_instances_instance_id_get) | **GET** /organisations/{id}/applications/{appId}/instances/{instanceId} | 
[**organisations_id_payments_billings_unpaid_get**](AllApi.md#organisations_id_payments_billings_unpaid_get) | **GET** /organisations/{id}/payments/billings/unpaid | 
[**organisations_id_payments_methods_default_get**](AllApi.md#organisations_id_payments_methods_default_get) | **GET** /organisations/{id}/payments/methods/default | 
[**organisations_id_payments_methods_default_put**](AllApi.md#organisations_id_payments_methods_default_put) | **PUT** /organisations/{id}/payments/methods/default | 
[**organisations_id_payments_methods_get**](AllApi.md#organisations_id_payments_methods_get) | **GET** /organisations/{id}/payments/methods | 
[**organisations_id_payments_methods_mid_delete**](AllApi.md#organisations_id_payments_methods_mid_delete) | **DELETE** /organisations/{id}/payments/methods/{mId} | 
[**organisations_id_payments_methods_post**](AllApi.md#organisations_id_payments_methods_post) | **POST** /organisations/{id}/payments/methods | 
[**organisations_id_payments_monthlyinvoice_get**](AllApi.md#organisations_id_payments_monthlyinvoice_get) | **GET** /organisations/{id}/payments/monthlyinvoice | 
[**organisations_id_payments_monthlyinvoice_maxcredit_put**](AllApi.md#organisations_id_payments_monthlyinvoice_maxcredit_put) | **PUT** /organisations/{id}/payments/monthlyinvoice/maxcredit | 
[**organisations_id_payments_recurring_get**](AllApi.md#organisations_id_payments_recurring_get) | **GET** /organisations/{id}/payments/recurring | 
[**payments_assets_pay_button_token_button_png_get**](AllApi.md#payments_assets_pay_button_token_button_png_get) | **GET** /payments/assets/pay_button/{token}/button.png | 
[**payments_bid_end_stripe_post**](AllApi.md#payments_bid_end_stripe_post) | **POST** /payments/{bid}/end/stripe | 
[**post_authorize**](AllApi.md#post_authorize) | **POST** /authorize | 
[**post_github_redeploy**](AllApi.md#post_github_redeploy) | **POST** /github/redeploy | 
[**post_github_signup**](AllApi.md#post_github_signup) | **POST** /github/signup | 
[**post_oauth_access_token**](AllApi.md#post_oauth_access_token) | **POST** /oauth/access_token | 
[**post_oauth_authorize**](AllApi.md#post_oauth_authorize) | **POST** /oauth/authorize | 
[**post_oauth_request_token**](AllApi.md#post_oauth_request_token) | **POST** /oauth/request_token | 
[**post_organisations**](AllApi.md#post_organisations) | **POST** /organisations | 
[**post_organisations_id_addonproviders**](AllApi.md#post_organisations_id_addonproviders) | **POST** /organisations/{id}/addonproviders | 
[**post_organisations_id_addonproviders_provider_id_features**](AllApi.md#post_organisations_id_addonproviders_provider_id_features) | **POST** /organisations/{id}/addonproviders/{providerId}/features | 
[**post_organisations_id_addonproviders_provider_id_plans**](AllApi.md#post_organisations_id_addonproviders_provider_id_plans) | **POST** /organisations/{id}/addonproviders/{providerId}/plans | 
[**post_organisations_id_addonproviders_provider_id_testers**](AllApi.md#post_organisations_id_addonproviders_provider_id_testers) | **POST** /organisations/{id}/addonproviders/{providerId}/testers | 
[**post_organisations_id_addons**](AllApi.md#post_organisations_id_addons) | **POST** /organisations/{id}/addons | 
[**post_organisations_id_applications**](AllApi.md#post_organisations_id_applications) | **POST** /organisations/{id}/applications | 
[**post_organisations_id_applications_app_id_addons**](AllApi.md#post_organisations_id_applications_app_id_addons) | **POST** /organisations/{id}/applications/{appId}/addons | 
[**post_organisations_id_applications_app_id_instances**](AllApi.md#post_organisations_id_applications_app_id_instances) | **POST** /organisations/{id}/applications/{appId}/instances | 
[**post_organisations_id_consumers**](AllApi.md#post_organisations_id_consumers) | **POST** /organisations/{id}/consumers | 
[**post_organisations_id_members**](AllApi.md#post_organisations_id_members) | **POST** /organisations/{id}/members | 
[**post_organisations_id_payments_billings**](AllApi.md#post_organisations_id_payments_billings) | **POST** /organisations/{id}/payments/billings | 
[**post_password_forgotten**](AllApi.md#post_password_forgotten) | **POST** /password_forgotten | 
[**post_password_forgotten_key**](AllApi.md#post_password_forgotten_key) | **POST** /password_forgotten/{key} | 
[**post_self_addons**](AllApi.md#post_self_addons) | **POST** /self/addons | 
[**post_self_applications**](AllApi.md#post_self_applications) | **POST** /self/applications | 
[**post_self_applications_app_id_addons**](AllApi.md#post_self_applications_app_id_addons) | **POST** /self/applications/{appId}/addons | 
[**post_self_applications_app_id_instances**](AllApi.md#post_self_applications_app_id_instances) | **POST** /self/applications/{appId}/instances | 
[**post_self_consumers**](AllApi.md#post_self_consumers) | **POST** /self/consumers | 
[**post_self_payments_billings**](AllApi.md#post_self_payments_billings) | **POST** /self/payments/billings | 
[**post_self_payments_methods**](AllApi.md#post_self_payments_methods) | **POST** /self/payments/methods | 
[**post_users**](AllApi.md#post_users) | **POST** /users | 
[**post_vendor_billing_owner_id**](AllApi.md#post_vendor_billing_owner_id) | **POST** /vendor/apps/{addonId}/consumptions | 
[**products_addonproviders_provider_id_versions_get**](AllApi.md#products_addonproviders_provider_id_versions_get) | **GET** /products/addonproviders/{provider_id}/versions | 
[**products_mfa_kinds_get**](AllApi.md#products_mfa_kinds_get) | **GET** /products/mfa_kinds | 
[**put_organisations_id**](AllApi.md#put_organisations_id) | **PUT** /organisations/{id} | 
[**put_organisations_id_addonproviders_provider_id**](AllApi.md#put_organisations_id_addonproviders_provider_id) | **PUT** /organisations/{id}/addonproviders/{providerId} | 
[**put_organisations_id_addonproviders_provider_id_plans_plan_id**](AllApi.md#put_organisations_id_addonproviders_provider_id_plans_plan_id) | **PUT** /organisations/{id}/addonproviders/{providerId}/plans/{planId} | 
[**put_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name**](AllApi.md#put_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name) | **PUT** /organisations/{id}/addonproviders/{providerId}/plans/{planId}/features/{featureName} | 
[**put_organisations_id_addons_addon_id**](AllApi.md#put_organisations_id_addons_addon_id) | **PUT** /organisations/{id}/addons/{addonId} | 
[**put_organisations_id_addons_addon_id_tags_tag**](AllApi.md#put_organisations_id_addons_addon_id_tags_tag) | **PUT** /organisations/{id}/addons/{addonId}/tags/{tag} | 
[**put_organisations_id_applications_app_id**](AllApi.md#put_organisations_id_applications_app_id) | **PUT** /organisations/{id}/applications/{appId} | 
[**put_organisations_id_applications_app_id_dependencies_dependency_id**](AllApi.md#put_organisations_id_applications_app_id_dependencies_dependency_id) | **PUT** /organisations/{id}/applications/{appId}/dependencies/{dependencyId} | 
[**put_organisations_id_applications_app_id_env**](AllApi.md#put_organisations_id_applications_app_id_env) | **PUT** /organisations/{id}/applications/{appId}/env | 
[**put_organisations_id_applications_app_id_env_env_name**](AllApi.md#put_organisations_id_applications_app_id_env_env_name) | **PUT** /organisations/{id}/applications/{appId}/env/{envName} | 
[**put_organisations_id_applications_app_id_tags_tag**](AllApi.md#put_organisations_id_applications_app_id_tags_tag) | **PUT** /organisations/{id}/applications/{appId}/tags/{tag} | 
[**put_organisations_id_applications_app_id_vhosts_domain**](AllApi.md#put_organisations_id_applications_app_id_vhosts_domain) | **PUT** /organisations/{id}/applications/{appId}/vhosts/{domain} | 
[**put_organisations_id_applications_app_id_vhosts_favourite**](AllApi.md#put_organisations_id_applications_app_id_vhosts_favourite) | **PUT** /organisations/{id}/applications/{appId}/vhosts/favourite | 
[**put_organisations_id_avatar**](AllApi.md#put_organisations_id_avatar) | **PUT** /organisations/{id}/avatar | 
[**put_organisations_id_consumers_key**](AllApi.md#put_organisations_id_consumers_key) | **PUT** /organisations/{id}/consumers/{key} | 
[**put_organisations_id_members_user_id**](AllApi.md#put_organisations_id_members_user_id) | **PUT** /organisations/{id}/members/{userId} | 
[**put_organisations_id_payments_billings_bid**](AllApi.md#put_organisations_id_payments_billings_bid) | **PUT** /organisations/{id}/payments/billings/{bid} | 
[**put_self**](AllApi.md#put_self) | **PUT** /self | 
[**put_self_addons_addon_id**](AllApi.md#put_self_addons_addon_id) | **PUT** /self/addons/{addonId} | 
[**put_self_addons_addon_id_plan**](AllApi.md#put_self_addons_addon_id_plan) | **PUT** /self/addons/{addonId}/plan | 
[**put_self_addons_addon_id_tags_tag**](AllApi.md#put_self_addons_addon_id_tags_tag) | **PUT** /self/addons/{addonId}/tags/{tag} | 
[**put_self_applications_app_id**](AllApi.md#put_self_applications_app_id) | **PUT** /self/applications/{appId} | 
[**put_self_applications_app_id_env**](AllApi.md#put_self_applications_app_id_env) | **PUT** /self/applications/{appId}/env | 
[**put_self_applications_app_id_env_env_name**](AllApi.md#put_self_applications_app_id_env_env_name) | **PUT** /self/applications/{appId}/env/{envName} | 
[**put_self_applications_app_id_tags_tag**](AllApi.md#put_self_applications_app_id_tags_tag) | **PUT** /self/applications/{appId}/tags/{tag} | 
[**put_self_applications_app_id_vhosts_domain**](AllApi.md#put_self_applications_app_id_vhosts_domain) | **PUT** /self/applications/{appId}/vhosts/{domain} | 
[**put_self_applications_app_id_vhosts_favourite**](AllApi.md#put_self_applications_app_id_vhosts_favourite) | **PUT** /self/applications/{appId}/vhosts/favourite | 
[**put_self_avatar**](AllApi.md#put_self_avatar) | **PUT** /self/avatar | 
[**put_self_change_password**](AllApi.md#put_self_change_password) | **PUT** /self/change_password | 
[**put_self_consumers_key**](AllApi.md#put_self_consumers_key) | **PUT** /self/consumers/{key} | 
[**put_self_emails_email**](AllApi.md#put_self_emails_email) | **PUT** /self/emails/{email} | 
[**put_self_keys_key**](AllApi.md#put_self_keys_key) | **PUT** /self/keys/{key} | 
[**put_self_payments_billings_bid**](AllApi.md#put_self_payments_billings_bid) | **PUT** /self/payments/billings/{bid} | 
[**put_vendor_apps_addon_id**](AllApi.md#put_vendor_apps_addon_id) | **PUT** /vendor/apps/{addonId} | 
[**self_addons_preorders_post**](AllApi.md#self_addons_preorders_post) | **POST** /self/addons/preorders | 
[**self_applications_app_id_branch_put**](AllApi.md#self_applications_app_id_branch_put) | **PUT** /self/applications/{appId}/branch | 
[**self_applications_app_id_branches_get**](AllApi.md#self_applications_app_id_branches_get) | **GET** /self/applications/{appId}/branches | 
[**self_applications_app_id_buildflavor_put**](AllApi.md#self_applications_app_id_buildflavor_put) | **PUT** /self/applications/{appId}/buildflavor | 
[**self_applications_app_id_dependencies_env_get**](AllApi.md#self_applications_app_id_dependencies_env_get) | **GET** /self/applications/{appId}/dependencies/env | 
[**self_applications_app_id_deployments_deployment_id_get**](AllApi.md#self_applications_app_id_deployments_deployment_id_get) | **GET** /self/applications/{appId}/deployments/{deploymentId} | 
[**self_applications_app_id_exposed_env_get**](AllApi.md#self_applications_app_id_exposed_env_get) | **GET** /self/applications/{appId}/exposed_env | 
[**self_applications_app_id_exposed_env_put**](AllApi.md#self_applications_app_id_exposed_env_put) | **PUT** /self/applications/{appId}/exposed_env | 
[**self_applications_app_id_instances_instance_id_get**](AllApi.md#self_applications_app_id_instances_instance_id_get) | **GET** /self/applications/{appId}/instances/{instanceId} | 
[**self_cli_tokens_get**](AllApi.md#self_cli_tokens_get) | **GET** /self/cli_tokens | 
[**self_mfa_kind_backupcodes_get**](AllApi.md#self_mfa_kind_backupcodes_get) | **GET** /self/mfa/{kind}/backupcodes | 
[**self_mfa_kind_confirmation_post**](AllApi.md#self_mfa_kind_confirmation_post) | **POST** /self/mfa/{kind}/confirmation | 
[**self_mfa_kind_delete**](AllApi.md#self_mfa_kind_delete) | **DELETE** /self/mfa/{kind} | 
[**self_mfa_kind_post**](AllApi.md#self_mfa_kind_post) | **POST** /self/mfa/{kind} | 
[**self_mfa_kind_put**](AllApi.md#self_mfa_kind_put) | **PUT** /self/mfa/{kind} | 
[**self_payments_methods_default_get**](AllApi.md#self_payments_methods_default_get) | **GET** /self/payments/methods/default | 
[**self_payments_methods_default_put**](AllApi.md#self_payments_methods_default_put) | **PUT** /self/payments/methods/default | 
[**self_payments_monthlyinvoice_get**](AllApi.md#self_payments_monthlyinvoice_get) | **GET** /self/payments/monthlyinvoice | 
[**self_payments_monthlyinvoice_maxcredit_put**](AllApi.md#self_payments_monthlyinvoice_maxcredit_put) | **PUT** /self/payments/monthlyinvoice/maxcredit | 
[**self_payments_recurring_get**](AllApi.md#self_payments_recurring_get) | **GET** /self/payments/recurring | 
[**self_payments_tokens_stripe_get**](AllApi.md#self_payments_tokens_stripe_get) | **GET** /self/payments/tokens/stripe | 
[**update_config_provider_env**](AllApi.md#update_config_provider_env) | **PUT** /v4/addon-providers/config-provider/addons/{configurationProviderId}/env | Update provider&#39;s addon environment
[**v3_logs_app_id_drains_get**](AllApi.md#v3_logs_app_id_drains_get) | **GET** /v3/logs/{appId}/drains | 
[**v3_logs_app_id_drains_id_or_url_delete**](AllApi.md#v3_logs_app_id_drains_id_or_url_delete) | **DELETE** /v3/logs/{appId}/drains/:idOrUrl | 
[**v3_logs_app_id_drains_id_or_url_get**](AllApi.md#v3_logs_app_id_drains_id_or_url_get) | **GET** /v3/logs/{appId}/drains/:idOrUrl | 
[**v3_logs_app_id_drains_post**](AllApi.md#v3_logs_app_id_drains_post) | **POST** /v3/logs/{appId}/drains | 
[**v3_logs_app_id_get**](AllApi.md#v3_logs_app_id_get) | **GET** /v3/logs/{appId} | 
[**v3_logs_app_id_logs_chunked_get**](AllApi.md#v3_logs_app_id_logs_chunked_get) | **GET** /v3/logs/{appId}/logs-chunked | 
[**v3_logs_app_id_logs_socket_get**](AllApi.md#v3_logs_app_id_logs_socket_get) | **GET** /v3/logs/{appId}/logs-socket | 
[**vendor_addons_post**](AllApi.md#vendor_addons_post) | **POST** /vendor//addons | 
[**vendor_apps_addon_id_logscollector_get**](AllApi.md#vendor_apps_addon_id_logscollector_get) | **GET** /vendor//apps/{addonId}/logscollector | 
[**vendor_apps_addon_id_migration_callback_put**](AllApi.md#vendor_apps_addon_id_migration_callback_put) | **PUT** /vendor/apps/{addonId}/migration_callback | 


# **application_app_id_environment_get**
> application_app_id_environment_get(app_id, token=token)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    token = 'token_example' # str |  (optional)

    try:
        api_instance.application_app_id_environment_get(app_id, token=token)
    except Exception as e:
        print("Exception when calling AllApi->application_app_id_environment_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **token** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_app_id_environment_put**
> application_app_id_environment_put(app_id, token=token)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    token = 'token_example' # str |  (optional)

    try:
        api_instance.application_app_id_environment_put(app_id, token=token)
    except Exception as e:
        print("Exception when calling AllApi->application_app_id_environment_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **token** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_matomo**
> object create_matomo(body=body)

Create Matomo addon

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    body = None # object |  (optional)

    try:
        # Create Matomo addon
        api_response = api_instance.create_matomo(body=body)
        print("The response of AllApi->create_matomo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->create_matomo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_network_group**
> object create_network_group(owner_id, body=body)

Create Network Group

Creates a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Create Network Group
        api_response = api_instance.create_network_group(owner_id, body=body)
        print("The response of AllApi->create_network_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->create_network_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain; charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**400** |  |  -  |
**401** |  |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_network_group_external_peer**
> object create_network_group_external_peer(owner_id, network_group_id, body=body)

Add external peer

Adds an external peer to a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Add external peer
        api_response = api_instance.create_network_group_external_peer(owner_id, network_group_id, body=body)
        print("The response of AllApi->create_network_group_external_peer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->create_network_group_external_peer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain; charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_network_group_member**
> create_network_group_member(owner_id, network_group_id, schema2=schema2)

Add member

Adds a member to a Network Group.

### Example


```python
import openapi_client
from openapi_client.models.schema2 import Schema2
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    schema2 = openapi_client.Schema2() # Schema2 |  (optional)

    try:
        # Add member
        api_instance.create_network_group_member(owner_id, network_group_id, schema2=schema2)
    except Exception as e:
        print("Exception when calling AllApi->create_network_group_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **schema2** | [**Schema2**](Schema2.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**400** |  |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_github_link**
> delete_github_link()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.delete_github_link()
    except Exception as e:
        print("Exception when calling AllApi->delete_github_link: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | unlinkGithub |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_matomo**
> object delete_matomo(matomo_id, body=body)

Delete Matomo addon

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    matomo_id = 'matomo_id_example' # str | Automatically added
    body = 'body_example' # str |  (optional)

    try:
        # Delete Matomo addon
        api_response = api_instance.delete_matomo(matomo_id, body=body)
        print("The response of AllApi->delete_matomo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->delete_matomo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **matomo_id** | **str**| Automatically added | 
 **body** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_group**
> delete_network_group(owner_id, network_group_id, body=body)

Delete Network Group

Deletes a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Delete Network Group
        api_instance.delete_network_group(owner_id, network_group_id, body=body)
    except Exception as e:
        print("Exception when calling AllApi->delete_network_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_group_external_peer**
> delete_network_group_external_peer(owner_id, network_group_id, peer_id, body=body)

Remove external peer

Removes an external peer from a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    peer_id = 'peer_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Remove external peer
        api_instance.delete_network_group_external_peer(owner_id, network_group_id, peer_id, body=body)
    except Exception as e:
        print("Exception when calling AllApi->delete_network_group_external_peer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **peer_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_group_member**
> delete_network_group_member(owner_id, network_group_id, member_id, body=body)

Remove member

Removes a member from a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    member_id = 'member_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Remove member
        api_instance.delete_network_group_member(owner_id, network_group_id, member_id, body=body)
    except Exception as e:
        print("Exception when calling AllApi->delete_network_group_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **member_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_group_peer**
> delete_network_group_peer(owner_id, network_group_id, peer_id, body=body)

Remove peer

Removes a peer from a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    peer_id = 'peer_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Remove peer
        api_instance.delete_network_group_peer(owner_id, network_group_id, peer_id, body=body)
    except Exception as e:
        print("Exception when calling AllApi->delete_network_group_peer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **peer_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id**
> delete_organisations_id(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.delete_organisations_id(id)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteOrganisation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_addonproviders_provider_id_features_feature_id**
> delete_organisations_id_addonproviders_provider_id_features_feature_id(id, feature_id, provider_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    feature_id = 'feature_id_example' # str | 
    provider_id = 'provider_id_example' # str | 

    try:
        api_instance.delete_organisations_id_addonproviders_provider_id_features_feature_id(id, feature_id, provider_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_addonproviders_provider_id_features_feature_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **feature_id** | **str**|  | 
 **provider_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteProviderFeature |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_addonproviders_provider_id_plans_plan_id**
> delete_organisations_id_addonproviders_provider_id_plans_plan_id(id, provider_id, plan_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 
    plan_id = 'plan_id_example' # str | 

    try:
        api_instance.delete_organisations_id_addonproviders_provider_id_plans_plan_id(id, provider_id, plan_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_addonproviders_provider_id_plans_plan_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **provider_id** | **str**|  | 
 **plan_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteProviderPlan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name**
> delete_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name(id, feature_name, provider_id, plan_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    feature_name = 'feature_name_example' # str | 
    provider_id = 'provider_id_example' # str | 
    plan_id = 'plan_id_example' # str | 

    try:
        api_instance.delete_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name(id, feature_name, provider_id, plan_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **feature_name** | **str**|  | 
 **provider_id** | **str**|  | 
 **plan_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteProviderPlanFeature |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_addons_addon_id**
> delete_organisations_id_addons_addon_id(id, addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.delete_organisations_id_addons_addon_id(id, addon_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_addons_addon_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deprovisionAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_addons_addon_id_tags_tag**
> delete_organisations_id_addons_addon_id_tags_tag(id, tag, addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    tag = 'tag_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.delete_organisations_id_addons_addon_id_tags_tag(id, tag, addon_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_addons_addon_id_tags_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **tag** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteAddonTag |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_applications_app_id**
> delete_organisations_id_applications_app_id(id, app_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id(id, app_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_applications_app_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_applications_app_id_addons_addon_id**
> delete_organisations_id_applications_app_id_addons_addon_id(id, app_id, addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_addons_addon_id(id, app_id, addon_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_applications_app_id_addons_addon_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | unlinkAddonFromApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_applications_app_id_dependencies_dependency_id**
> delete_organisations_id_applications_app_id_dependencies_dependency_id(dependency_id, app_id, id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    dependency_id = 'dependency_id_example' # str | 
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_dependencies_dependency_id(dependency_id, app_id, id)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_applications_app_id_dependencies_dependency_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dependency_id** | **str**|  | 
 **app_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteApplicationDependency |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_applications_app_id_deployments_deployment_id_instances**
> delete_organisations_id_applications_app_id_deployments_deployment_id_instances(id, app_id, deployment_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    deployment_id = 'deployment_id_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_deployments_deployment_id_instances(id, app_id, deployment_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_applications_app_id_deployments_deployment_id_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **deployment_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationDeploymentsForOrga |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_applications_app_id_env_env_name**
> delete_organisations_id_applications_app_id_env_env_name(id, app_id, env_name)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    env_name = 'env_name_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_env_env_name(id, app_id, env_name)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_applications_app_id_env_env_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **env_name** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | removeApplicationEnv |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_applications_app_id_instances**
> delete_organisations_id_applications_app_id_instances(id, app_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_instances(id, app_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_applications_app_id_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | undeployApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_applications_app_id_tags_tag**
> delete_organisations_id_applications_app_id_tags_tag(id, app_id, tag)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    tag = 'tag_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_tags_tag(id, app_id, tag)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_applications_app_id_tags_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **tag** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteApplicationTag |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_applications_app_id_vhosts_domain**
> delete_organisations_id_applications_app_id_vhosts_domain(id, app_id, domain)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    domain = 'domain_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_vhosts_domain(id, app_id, domain)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_applications_app_id_vhosts_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **domain** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | removeVhost |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_applications_app_id_vhosts_favourite**
> delete_organisations_id_applications_app_id_vhosts_favourite(id, app_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_vhosts_favourite(id, app_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_applications_app_id_vhosts_favourite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | unmarkFavouriteVhost |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_consumers_key**
> delete_organisations_id_consumers_key(id, key)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    key = 'key_example' # str | 

    try:
        api_instance.delete_organisations_id_consumers_key(id, key)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_consumers_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **key** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteConsumer |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_members_user_id**
> delete_organisations_id_members_user_id(id, user_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    user_id = 'user_id_example' # str | 

    try:
        api_instance.delete_organisations_id_members_user_id(id, user_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_members_user_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **user_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | removeOrganisationMember |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_payments_billings_bid**
> delete_organisations_id_payments_billings_bid(id, bid)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    bid = 'bid_example' # str | 

    try:
        api_instance.delete_organisations_id_payments_billings_bid(id, bid)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_payments_billings_bid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **bid** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deletePurchaseOrder |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organisations_id_payments_recurring**
> delete_organisations_id_payments_recurring(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.delete_organisations_id_payments_recurring(id)
    except Exception as e:
        print("Exception when calling AllApi->delete_organisations_id_payments_recurring: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteRecurrentPayment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self**
> delete_self()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.delete_self()
    except Exception as e:
        print("Exception when calling AllApi->delete_self: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteUser |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_addons_addon_id**
> delete_self_addons_addon_id(addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.delete_self_addons_addon_id(addon_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_addons_addon_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deprovisionAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_addons_addon_id_tags_tag**
> delete_self_addons_addon_id_tags_tag(tag, addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    tag = 'tag_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.delete_self_addons_addon_id_tags_tag(tag, addon_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_addons_addon_id_tags_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteAddonTag |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_applications_app_id**
> delete_self_applications_app_id(app_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_instance.delete_self_applications_app_id(app_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_applications_app_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_applications_app_id_addons_addon_id**
> delete_self_applications_app_id_addons_addon_id(app_id, addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.delete_self_applications_app_id_addons_addon_id(app_id, addon_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_applications_app_id_addons_addon_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | unlinkAddonFromApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_applications_app_id_dependencies_dependency_id**
> delete_self_applications_app_id_dependencies_dependency_id(dependency_id, app_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    dependency_id = 'dependency_id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_instance.delete_self_applications_app_id_dependencies_dependency_id(dependency_id, app_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_applications_app_id_dependencies_dependency_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dependency_id** | **str**|  | 
 **app_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteApplicationDependency |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_applications_app_id_deployments_deployment_id_instances**
> delete_self_applications_app_id_deployments_deployment_id_instances(app_id, deployment_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    deployment_id = 'deployment_id_example' # str | 

    try:
        api_instance.delete_self_applications_app_id_deployments_deployment_id_instances(app_id, deployment_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_applications_app_id_deployments_deployment_id_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **deployment_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | cancelDeploy |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_applications_app_id_env_env_name**
> delete_self_applications_app_id_env_env_name(app_id, env_name)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    env_name = 'env_name_example' # str | 

    try:
        api_instance.delete_self_applications_app_id_env_env_name(app_id, env_name)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_applications_app_id_env_env_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **env_name** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | removeApplicationEnv |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_applications_app_id_instances**
> delete_self_applications_app_id_instances(app_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_instance.delete_self_applications_app_id_instances(app_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_applications_app_id_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | undeployApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_applications_app_id_tags_tag**
> delete_self_applications_app_id_tags_tag(app_id, tag)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    tag = 'tag_example' # str | 

    try:
        api_instance.delete_self_applications_app_id_tags_tag(app_id, tag)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_applications_app_id_tags_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **tag** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteApplicationTag |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_applications_app_id_vhosts_domain**
> delete_self_applications_app_id_vhosts_domain(app_id, domain)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    domain = 'domain_example' # str | 

    try:
        api_instance.delete_self_applications_app_id_vhosts_domain(app_id, domain)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_applications_app_id_vhosts_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **domain** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | removeVhost |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_applications_app_id_vhosts_favourite**
> delete_self_applications_app_id_vhosts_favourite(app_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_instance.delete_self_applications_app_id_vhosts_favourite(app_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_applications_app_id_vhosts_favourite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | unmarkFavouriteVhost |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_consumers_key**
> delete_self_consumers_key(key)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    key = 'key_example' # str | 

    try:
        api_instance.delete_self_consumers_key(key)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_consumers_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteConsumer |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_emails_email**
> delete_self_emails_email(email)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    email = 'email_example' # str | 

    try:
        api_instance.delete_self_emails_email(email)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_emails_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | removeEmailAddress |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_keys_key**
> delete_self_keys_key(key)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    key = 'key_example' # str | 

    try:
        api_instance.delete_self_keys_key(key)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_keys_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | removeSshKey |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_payments_billings_bid**
> delete_self_payments_billings_bid(bid)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    bid = 'bid_example' # str | 

    try:
        api_instance.delete_self_payments_billings_bid(bid)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_payments_billings_bid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bid** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deletePurchaseOrder |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_payments_methods_mid**
> delete_self_payments_methods_mid(m_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    m_id = 'm_id_example' # str | 

    try:
        api_instance.delete_self_payments_methods_mid(m_id)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_payments_methods_mid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **m_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteUserCard |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_payments_recurring**
> delete_self_payments_recurring()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.delete_self_payments_recurring()
    except Exception as e:
        print("Exception when calling AllApi->delete_self_payments_recurring: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | deleteRecurrentPayment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_tokens**
> delete_self_tokens()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.delete_self_tokens()
    except Exception as e:
        print("Exception when calling AllApi->delete_self_tokens: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | revokeAllTokens |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_self_tokens_token**
> delete_self_tokens_token(token)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    token = 'token_example' # str | 

    try:
        api_instance.delete_self_tokens_token(token)
    except Exception as e:
        print("Exception when calling AllApi->delete_self_tokens_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | revokeToken |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **events_event_socket_get**
> events_event_socket_get()



Retrieve events as they come through a websocket connection. To have authorization, you have to send a `{ \"message_type\": \"oauth\", \"authorization\": \"oauth authorization string\" }` message

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.events_event_socket_get()
    except Exception as e:
        print("Exception when calling AllApi->events_event_socket_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_config_provider**
> object get_config_provider(configuration_provider_id, body=body)

Get Addon provider configuration

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    configuration_provider_id = 'configuration_provider_id_example' # str | Automatically added
    body = 'body_example' # str |  (optional)

    try:
        # Get Addon provider configuration
        api_response = api_instance.get_config_provider(configuration_provider_id, body=body)
        print("The response of AllApi->get_config_provider:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_config_provider: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configuration_provider_id** | **str**| Automatically added | 
 **body** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | requested config provider object |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_config_provider_env**
> List[object] get_config_provider_env(configuration_provider_id, body=body)

Get provider's addon environment

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    configuration_provider_id = 'configuration_provider_id_example' # str | Automatically added
    body = 'body_example' # str |  (optional)

    try:
        # Get provider's addon environment
        api_response = api_instance.get_config_provider_env(configuration_provider_id, body=body)
        print("The response of AllApi->get_config_provider_env:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_config_provider_env: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configuration_provider_id** | **str**| Automatically added | 
 **body** | **str**|  | [optional] 

### Return type

**List[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | config provider environment variables |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github**
> TransactionId get_github()



### Example


```python
import openapi_client
from openapi_client.models.transaction_id import TransactionId
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_github()
        print("The response of AllApi->get_github:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_github: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**TransactionId**](TransactionId.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | startGithub |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_applications**
> List[Application] get_github_applications()



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_github_applications()
        print("The response of AllApi->get_github_applications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_github_applications: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getGithubApplications |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_callback**
> get_github_callback(code=code, state=state, error=error, error_description=error_description, error_uri=error_uri, cookie=cookie)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    code = 'code_example' # str |  (optional)
    state = 'state_example' # str |  (optional)
    error = 'error_example' # str |  (optional)
    error_description = 'error_description_example' # str |  (optional)
    error_uri = 'error_uri_example' # str |  (optional)
    cookie = 'cookie_example' # str |  (optional)

    try:
        api_instance.get_github_callback(code=code, state=state, error=error, error_description=error_description, error_uri=error_uri, cookie=cookie)
    except Exception as e:
        print("Exception when calling AllApi->get_github_callback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**|  | [optional] 
 **state** | **str**|  | [optional] 
 **error** | **str**|  | [optional] 
 **error_description** | **str**|  | [optional] 
 **error_uri** | **str**|  | [optional] 
 **cookie** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | githubCallback |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_emails**
> List[str] get_github_emails()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_github_emails()
        print("The response of AllApi->get_github_emails:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_github_emails: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getGithubEmails |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_keys**
> List[Key] get_github_keys()



### Example


```python
import openapi_client
from openapi_client.models.key import Key
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_github_keys()
        print("The response of AllApi->get_github_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_github_keys: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Key]**](Key.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getGithubKeys |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_link**
> get_github_link(transaction_id=transaction_id, redirect_url=redirect_url)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    transaction_id = 'transaction_id_example' # str | From GET /github (optional)
    redirect_url = 'redirect_url_example' # str |  (optional)

    try:
        api_instance.get_github_link(transaction_id=transaction_id, redirect_url=redirect_url)
    except Exception as e:
        print("Exception when calling AllApi->get_github_link: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| From GET /github | [optional] 
 **redirect_url** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | linkGithub |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_login**
> get_github_login(redirect_url=redirect_url, from_authorize=from_authorize)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    redirect_url = 'redirect_url_example' # str |  (optional)
    from_authorize = 'from_authorize_example' # str |  (optional)

    try:
        api_instance.get_github_login(redirect_url=redirect_url, from_authorize=from_authorize)
    except Exception as e:
        print("Exception when calling AllApi->get_github_login: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirect_url** | **str**|  | [optional] 
 **from_authorize** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | githubLogin |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_signup**
> get_github_signup(redirect_url=redirect_url, from_authorize=from_authorize)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    redirect_url = 'redirect_url_example' # str |  (optional)
    from_authorize = 'from_authorize_example' # str |  (optional)

    try:
        api_instance.get_github_signup(redirect_url=redirect_url, from_authorize=from_authorize)
    except Exception as e:
        print("Exception when calling AllApi->get_github_signup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirect_url** | **str**|  | [optional] 
 **from_authorize** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | githubSignup |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_github_username**
> str get_github_username()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_github_username()
        print("The response of AllApi->get_github_username:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_github_username: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getGithubUsername |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_matomo**
> object get_matomo(matomo_id, body=body)

Get Matomo addon

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    matomo_id = 'matomo_id_example' # str | Automatically added
    body = 'body_example' # str |  (optional)

    try:
        # Get Matomo addon
        api_response = api_instance.get_matomo(matomo_id, body=body)
        print("The response of AllApi->get_matomo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_matomo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **matomo_id** | **str**| Automatically added | 
 **body** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_matomo_k_token_validation**
> object get_matomo_k_token_validation(keycloak_token=keycloak_token, body=body)

Validate a keycloak token

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    keycloak_token = 'keycloak_token_example' # str | Environment variable injected on the app with 'KEYCLOAK_TOKEN' name (optional)
    body = 'body_example' # str |  (optional)

    try:
        # Validate a keycloak token
        api_response = api_instance.get_matomo_k_token_validation(keycloak_token=keycloak_token, body=body)
        print("The response of AllApi->get_matomo_k_token_validation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_matomo_k_token_validation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keycloak_token** | **str**| Environment variable injected on the app with &#39;KEYCLOAK_TOKEN&#39; name | [optional] 
 **body** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_group**
> object get_network_group(owner_id, network_group_id, body=body)

Get Network Group

Gets details of a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Get Network Group
        api_response = api_instance.get_network_group(owner_id, network_group_id, body=body)
        print("The response of AllApi->get_network_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_network_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_group_member**
> Schema1 get_network_group_member(owner_id, network_group_id, member_id, body=body)

Get member

Gets details of a Network Group member.

### Example


```python
import openapi_client
from openapi_client.models.schema1 import Schema1
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    member_id = 'member_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Get member
        api_response = api_instance.get_network_group_member(owner_id, network_group_id, member_id, body=body)
        print("The response of AllApi->get_network_group_member:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_network_group_member: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **member_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

[**Schema1**](Schema1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_group_peer**
> object get_network_group_peer(owner_id, network_group_id, peer_id, body=body)

Get peer

Gets details of a Network Group peer.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    peer_id = 'peer_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Get peer
        api_response = api_instance.get_network_group_peer(owner_id, network_group_id, peer_id, body=body)
        print("The response of AllApi->get_network_group_peer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_network_group_peer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **peer_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_group_stream**
> object get_network_group_stream(owner_id, network_group_id, body=body)

Network Group SSE

Retrieves the current Network Group details as a Server Sent Event.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Network Group SSE
        api_response = api_instance.get_network_group_stream(owner_id, network_group_id, body=body)
        print("The response of AllApi->get_network_group_stream:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_network_group_stream: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_group_wire_guard_configuration**
> object get_network_group_wire_guard_configuration(owner_id, network_group_id, peer_id, body=body)

Get WireGuard® configuration

Gets the current WireGuard® tunnel configuration file for a Network Group peer.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    peer_id = 'peer_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Get WireGuard® configuration
        api_response = api_instance.get_network_group_wire_guard_configuration(owner_id, network_group_id, peer_id, body=body)
        print("The response of AllApi->get_network_group_wire_guard_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_network_group_wire_guard_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **peer_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_group_wire_guard_configuration_stream**
> object get_network_group_wire_guard_configuration_stream(owner_id, network_group_id, peer_id, body=body)

Get WireGuard® configuration

Gets the current WireGuard® tunnel configuration file for a Network Group peer as a Server Sent Event.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    peer_id = 'peer_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Get WireGuard® configuration
        api_response = api_instance.get_network_group_wire_guard_configuration_stream(owner_id, network_group_id, peer_id, body=body)
        print("The response of AllApi->get_network_group_wire_guard_configuration_stream:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_network_group_wire_guard_configuration_stream: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **peer_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/event-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_newsfeed_engineering**
> get_newsfeed_engineering()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.get_newsfeed_engineering()
    except Exception as e:
        print("Exception when calling AllApi->get_newsfeed_engineering: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getEngineeringFeed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_newsfeeds_blog**
> get_newsfeeds_blog()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.get_newsfeeds_blog()
    except Exception as e:
        print("Exception when calling AllApi->get_newsfeeds_blog: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getBlogFeed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_oauth_authorize**
> get_oauth_authorize(oauth_token=oauth_token, cookie=cookie)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    oauth_token = 'oauth_token_example' # str |  (optional)
    cookie = 'cookie_example' # str |  (optional)

    try:
        api_instance.get_oauth_authorize(oauth_token=oauth_token, cookie=cookie)
    except Exception as e:
        print("Exception when calling AllApi->get_oauth_authorize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_token** | **str**|  | [optional] 
 **cookie** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | authorizeForm |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_oauth_rights**
> Rights get_oauth_rights()



### Example


```python
import openapi_client
from openapi_client.models.rights import Rights
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_oauth_rights()
        print("The response of AllApi->get_oauth_rights:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_oauth_rights: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Rights**](Rights.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAvailableRights |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations**
> List[Organisation] get_organisations(user=user)



### Example


```python
import openapi_client
from openapi_client.models.organisation import Organisation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    user = 'user_example' # str |  (optional)

    try:
        api_response = api_instance.get_organisations(user=user)
        print("The response of AllApi->get_organisations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **str**|  | [optional] 

### Return type

[**List[Organisation]**](Organisation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getUserOrganisations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id**
> Organisation get_organisations_id(id)



### Example


```python
import openapi_client
from openapi_client.models.organisation import Organisation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id(id)
        print("The response of AllApi->get_organisations_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**Organisation**](Organisation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getOrganisation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addonproviders**
> List[Provider] get_organisations_id_addonproviders(id)



### Example


```python
import openapi_client
from openapi_client.models.provider import Provider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addonproviders(id)
        print("The response of AllApi->get_organisations_id_addonproviders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_addonproviders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**List[Provider]**](Provider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get all informations about all providers. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addonproviders_provider_id**
> Provider get_organisations_id_addonproviders_provider_id(id, provider_id)



### Example


```python
import openapi_client
from openapi_client.models.provider import Provider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addonproviders_provider_id(id, provider_id)
        print("The response of AllApi->get_organisations_id_addonproviders_provider_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_addonproviders_provider_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **provider_id** | **str**|  | 

### Return type

[**Provider**](Provider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get all informations about given provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addonproviders_provider_id_features**
> List[Feature] get_organisations_id_addonproviders_provider_id_features(id, provider_id)



### Example


```python
import openapi_client
from openapi_client.models.feature import Feature
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addonproviders_provider_id_features(id, provider_id)
        print("The response of AllApi->get_organisations_id_addonproviders_provider_id_features:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_addonproviders_provider_id_features: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **provider_id** | **str**|  | 

### Return type

[**List[Feature]**](Feature.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getProviderFeatures |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addonproviders_provider_id_plans**
> List[Plan] get_organisations_id_addonproviders_provider_id_plans(id, provider_id)



### Example


```python
import openapi_client
from openapi_client.models.plan import Plan
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addonproviders_provider_id_plans(id, provider_id)
        print("The response of AllApi->get_organisations_id_addonproviders_provider_id_plans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_addonproviders_provider_id_plans: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **provider_id** | **str**|  | 

### Return type

[**List[Plan]**](Plan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getProviderPlans |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addonproviders_provider_id_plans_plan_id**
> Plan get_organisations_id_addonproviders_provider_id_plans_plan_id(id, provider_id, plan_id)



### Example


```python
import openapi_client
from openapi_client.models.plan import Plan
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 
    plan_id = 'plan_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addonproviders_provider_id_plans_plan_id(id, provider_id, plan_id)
        print("The response of AllApi->get_organisations_id_addonproviders_provider_id_plans_plan_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_addonproviders_provider_id_plans_plan_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **provider_id** | **str**|  | 
 **plan_id** | **str**|  | 

### Return type

[**Plan**](Plan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getProviderPlan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addonproviders_provider_id_tags**
> List[str] get_organisations_id_addonproviders_provider_id_tags(id, provider_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addonproviders_provider_id_tags(id, provider_id)
        print("The response of AllApi->get_organisations_id_addonproviders_provider_id_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_addonproviders_provider_id_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **provider_id** | **str**|  | 

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getProviderTags |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addons**
> List[Addon] get_organisations_id_addons(id)



### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons(id)
        print("The response of AllApi->get_organisations_id_addons:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_addons: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**List[Addon]**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddons |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addons_addon_id**
> Addon get_organisations_id_addons_addon_id(id, addon_id)



### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_addon_id(id, addon_id)
        print("The response of AllApi->get_organisations_id_addons_addon_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_addons_addon_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

[**Addon**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addons_addon_id_applications**
> List[Application] get_organisations_id_addons_addon_id_applications(id, addon_id)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_addon_id_applications(id, addon_id)
        print("The response of AllApi->get_organisations_id_addons_addon_id_applications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_addons_addon_id_applications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationsLinkedToAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addons_addon_id_env**
> List[ListEnv] get_organisations_id_addons_addon_id_env(id, addon_id)



### Example


```python
import openapi_client
from openapi_client.models.list_env import ListEnv
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_addon_id_env(id, addon_id)
        print("The response of AllApi->get_organisations_id_addons_addon_id_env:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_addons_addon_id_env: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

[**List[ListEnv]**](ListEnv.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonEnv |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addons_addon_id_sso**
> AddonProviderSso get_organisations_id_addons_addon_id_sso(provider_id, id)



### Example


```python
import openapi_client
from openapi_client.models.addon_provider_sso import AddonProviderSso
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    provider_id = 'provider_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_addon_id_sso(provider_id, id)
        print("The response of AllApi->get_organisations_id_addons_addon_id_sso:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_addons_addon_id_sso: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

[**AddonProviderSso**](AddonProviderSso.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getSSOData |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_addons_addon_id_tags**
> List[str] get_organisations_id_addons_addon_id_tags(id, addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_addon_id_tags(id, addon_id)
        print("The response of AllApi->get_organisations_id_addons_addon_id_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_addons_addon_id_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonTags |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_applications**
> List[Application] get_organisations_id_applications(id)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications(id)
        print("The response of AllApi->get_organisations_id_applications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_applications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAllApplications |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_applications_app_id**
> Application get_organisations_id_applications_app_id(id, app_id)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id(id, app_id)
        print("The response of AllApi->get_organisations_id_applications_app_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_applications_app_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 

### Return type

[**Application**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_applications_app_id_addons**
> List[Addon] get_organisations_id_applications_app_id_addons(id, app_id)



### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_addons(id, app_id)
        print("The response of AllApi->get_organisations_id_applications_app_id_addons:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_applications_app_id_addons: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 

### Return type

[**List[Addon]**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonsLinkedToApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_applications_app_id_addons_env**
> List[Env] get_organisations_id_applications_app_id_addons_env(id, app_id)



### Example


```python
import openapi_client
from openapi_client.models.env import Env
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_addons_env(id, app_id)
        print("The response of AllApi->get_organisations_id_applications_app_id_addons_env:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_applications_app_id_addons_env: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 

### Return type

[**List[Env]**](Env.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getEnvOfAddonsLinkedToApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_applications_app_id_dependencies**
> List[Application] get_organisations_id_applications_app_id_dependencies(app_id, id)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_dependencies(app_id, id)
        print("The response of AllApi->get_organisations_id_applications_app_id_dependencies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_applications_app_id_dependencies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationDependencies |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_applications_app_id_dependents**
> List[Application] get_organisations_id_applications_app_id_dependents(app_id, id)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_dependents(app_id, id)
        print("The response of AllApi->get_organisations_id_applications_app_id_dependents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_applications_app_id_dependents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationDependents |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_applications_app_id_deployments**
> List[Deployment] get_organisations_id_applications_app_id_deployments(id, app_id, limit=limit, offset=offset, action=action)



### Example


```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    limit = 'limit_example' # str |  (optional)
    offset = 'offset_example' # str |  (optional)
    action = 'action_example' # str |  (optional)

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_deployments(id, app_id, limit=limit, offset=offset, action=action)
        print("The response of AllApi->get_organisations_id_applications_app_id_deployments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_applications_app_id_deployments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **limit** | **str**|  | [optional] 
 **offset** | **str**|  | [optional] 
 **action** | **str**|  | [optional] 

### Return type

[**List[Deployment]**](Deployment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationDeploymentsForOrga |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_applications_app_id_env**
> List[ListEnv] get_organisations_id_applications_app_id_env(id, app_id)



### Example


```python
import openapi_client
from openapi_client.models.list_env import ListEnv
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_env(id, app_id)
        print("The response of AllApi->get_organisations_id_applications_app_id_env:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_applications_app_id_env: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 

### Return type

[**List[ListEnv]**](ListEnv.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationEnv |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_applications_app_id_instances**
> List[AppInstance] get_organisations_id_applications_app_id_instances(id, app_id)



### Example


```python
import openapi_client
from openapi_client.models.app_instance import AppInstance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_instances(id, app_id)
        print("The response of AllApi->get_organisations_id_applications_app_id_instances:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_applications_app_id_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 

### Return type

[**List[AppInstance]**](AppInstance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationInstances |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_applications_app_id_tags**
> List[str] get_organisations_id_applications_app_id_tags(id, app_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_tags(id, app_id)
        print("The response of AllApi->get_organisations_id_applications_app_id_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_applications_app_id_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationTags |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_applications_app_id_vhosts**
> List[Vhost] get_organisations_id_applications_app_id_vhosts(id, app_id)



### Example


```python
import openapi_client
from openapi_client.models.vhost import Vhost
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_vhosts(id, app_id)
        print("The response of AllApi->get_organisations_id_applications_app_id_vhosts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_applications_app_id_vhosts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 

### Return type

[**List[Vhost]**](Vhost.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getVhosts |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_applications_app_id_vhosts_favourite**
> Vhost get_organisations_id_applications_app_id_vhosts_favourite(id, app_id)



### Example


```python
import openapi_client
from openapi_client.models.vhost import Vhost
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_vhosts_favourite(id, app_id)
        print("The response of AllApi->get_organisations_id_applications_app_id_vhosts_favourite:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_applications_app_id_vhosts_favourite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 

### Return type

[**Vhost**](Vhost.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getFavouriteVhost |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_consumers**
> List[Consumer] get_organisations_id_consumers(id)



### Example


```python
import openapi_client
from openapi_client.models.consumer import Consumer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_consumers(id)
        print("The response of AllApi->get_organisations_id_consumers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_consumers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**List[Consumer]**](Consumer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getConsumers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_consumers_key**
> Consumer get_organisations_id_consumers_key(id, key)



### Example


```python
import openapi_client
from openapi_client.models.consumer import Consumer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    key = 'key_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_consumers_key(id, key)
        print("The response of AllApi->get_organisations_id_consumers_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_consumers_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **key** | **str**|  | 

### Return type

[**Consumer**](Consumer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getConsumer |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_consumers_key_secret**
> Secret get_organisations_id_consumers_key_secret(id, key)



### Example


```python
import openapi_client
from openapi_client.models.secret import Secret
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    key = 'key_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_consumers_key_secret(id, key)
        print("The response of AllApi->get_organisations_id_consumers_key_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_consumers_key_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **key** | **str**|  | 

### Return type

[**Secret**](Secret.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getConsumerSecret |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_consumptions**
> Conso get_organisations_id_consumptions(id, app_id=app_id, var_from=var_from, to=to)



### Example


```python
import openapi_client
from openapi_client.models.conso import Conso
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str |  (optional)
    var_from = 'var_from_example' # str |  (optional)
    to = 'to_example' # str |  (optional)

    try:
        api_response = api_instance.get_organisations_id_consumptions(id, app_id=app_id, var_from=var_from, to=to)
        print("The response of AllApi->get_organisations_id_consumptions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_consumptions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | [optional] 
 **var_from** | **str**|  | [optional] 
 **to** | **str**|  | [optional] 

### Return type

[**Conso**](Conso.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAmount |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_credits**
> Credits get_organisations_id_credits(id)



### Example


```python
import openapi_client
from openapi_client.models.credits import Credits
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_credits(id)
        print("The response of AllApi->get_organisations_id_credits:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_credits: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**Credits**](Credits.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAmount |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_deployments**
> DeploymentSummary get_organisations_id_deployments(id)



### Example


```python
import openapi_client
from openapi_client.models.deployment_summary import DeploymentSummary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_deployments(id)
        print("The response of AllApi->get_organisations_id_deployments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_deployments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DeploymentSummary**](DeploymentSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getDeploymentsForAllApps |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_instances**
> object get_organisations_id_instances(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_instances(id)
        print("The response of AllApi->get_organisations_id_instances:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getInstancesForAllApps |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_members**
> List[Schema1] get_organisations_id_members(id)



### Example


```python
import openapi_client
from openapi_client.models.schema1 import Schema1
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_members(id)
        print("The response of AllApi->get_organisations_id_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**List[Schema1]**](Schema1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getOrganisationMembers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_payment_info**
> get_organisations_id_payment_info(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.get_organisations_id_payment_info(id)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_payment_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getPaymentInfo |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_payments_billings**
> get_organisations_id_payments_billings(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.get_organisations_id_payments_billings(id)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_payments_billings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getInvoices |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_payments_billings_bid**
> get_organisations_id_payments_billings_bid(id, bid)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    bid = 'bid_example' # str | 

    try:
        api_instance.get_organisations_id_payments_billings_bid(id, bid)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_payments_billings_bid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **bid** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getInvoice |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_payments_billings_bid_pdf**
> get_organisations_id_payments_billings_bid_pdf(id, bid, token=token)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    bid = 'bid_example' # str | 
    token = 'token_example' # str |  (optional)

    try:
        api_instance.get_organisations_id_payments_billings_bid_pdf(id, bid, token=token)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_payments_billings_bid_pdf: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **bid** | **str**|  | 
 **token** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getPdfInvoice |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organisations_id_payments_full_price_price**
> get_organisations_id_payments_full_price_price(id, price)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    price = 'price_example' # str | 

    try:
        api_instance.get_organisations_id_payments_full_price_price(id, price)
    except Exception as e:
        print("Exception when calling AllApi->get_organisations_id_payments_full_price_price: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **price** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | priceWithTax |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_password_forgotten**
> get_password_forgotten()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.get_password_forgotten()
    except Exception as e:
        print("Exception when calling AllApi->get_password_forgotten: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getPasswordForgottenForm |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_password_forgotten_key**
> get_password_forgotten_key(key)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    key = 'key_example' # str | 

    try:
        api_instance.get_password_forgotten_key(key)
    except Exception as e:
        print("Exception when calling AllApi->get_password_forgotten_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | confirmPasswordResetRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_payments_coupons_name**
> get_payments_coupons_name(name)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    name = 'name_example' # str | 

    try:
        api_instance.get_payments_coupons_name(name)
    except Exception as e:
        print("Exception when calling AllApi->get_payments_coupons_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getCoupon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_payments_providers**
> List[PaymentProvider] get_payments_providers()



### Example


```python
import openapi_client
from openapi_client.models.payment_provider import PaymentProvider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_payments_providers()
        print("The response of AllApi->get_payments_providers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_payments_providers: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[PaymentProvider]**](PaymentProvider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAvailablePaymentProviders |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_payments_tokens_stripe**
> get_payments_tokens_stripe()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.get_payments_tokens_stripe()
    except Exception as e:
        print("Exception when calling AllApi->get_payments_tokens_stripe: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getStripeToken |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_addon_providers**
> List[Provider] get_products_addon_providers()



### Example


```python
import openapi_client
from openapi_client.models.provider import Provider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_products_addon_providers()
        print("The response of AllApi->get_products_addon_providers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_products_addon_providers: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Provider]**](Provider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonProviders |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_addon_providers_provider_id**
> Provider get_products_addon_providers_provider_id(provider_id)



### Example


```python
import openapi_client
from openapi_client.models.provider import Provider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    provider_id = 'provider_id_example' # str | 

    try:
        api_response = api_instance.get_products_addon_providers_provider_id(provider_id)
        print("The response of AllApi->get_products_addon_providers_provider_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_products_addon_providers_provider_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider_id** | **str**|  | 

### Return type

[**Provider**](Provider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonProvider |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_countries**
> Country get_products_countries()



### Example


```python
import openapi_client
from openapi_client.models.country import Country
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_products_countries()
        print("The response of AllApi->get_products_countries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_products_countries: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Country**](Country.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getCountries |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_countrycodes**
> Country get_products_countrycodes()



### Example


```python
import openapi_client
from openapi_client.models.country import Country
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_products_countrycodes()
        print("The response of AllApi->get_products_countrycodes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_products_countrycodes: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Country**](Country.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getCountryCodes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_instances**
> List[Instance] get_products_instances(var_for=var_for)



### Example


```python
import openapi_client
from openapi_client.models.instance import Instance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    var_for = 'var_for_example' # str |  (optional)

    try:
        api_response = api_instance.get_products_instances(var_for=var_for)
        print("The response of AllApi->get_products_instances:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_products_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_for** | **str**|  | [optional] 

### Return type

[**List[Instance]**](Instance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAvailableInstances |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_instances_type_version**
> Instance get_products_instances_type_version(type, version, var_for=var_for, app=app)



### Example


```python
import openapi_client
from openapi_client.models.instance import Instance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    type = 'type_example' # str | 
    version = 'version_example' # str | 
    var_for = 'var_for_example' # str |  (optional)
    app = 'app_example' # str |  (optional)

    try:
        api_response = api_instance.get_products_instances_type_version(type, version, var_for=var_for, app=app)
        print("The response of AllApi->get_products_instances_type_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_products_instances_type_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**|  | 
 **version** | **str**|  | 
 **var_for** | **str**|  | [optional] 
 **app** | **str**|  | [optional] 

### Return type

[**Instance**](Instance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAvailableInstance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_packages**
> get_products_packages(coupon=coupon, orga_id=orga_id, currency=currency)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    coupon = 'coupon_example' # str |  (optional)
    orga_id = 'orga_id_example' # str |  (optional)
    currency = 'currency_example' # str |  (optional)

    try:
        api_instance.get_products_packages(coupon=coupon, orga_id=orga_id, currency=currency)
    except Exception as e:
        print("Exception when calling AllApi->get_products_packages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coupon** | **str**|  | [optional] 
 **orga_id** | **str**|  | [optional] 
 **currency** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAvailablePackages |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_prices**
> get_products_prices()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.get_products_prices()
    except Exception as e:
        print("Exception when calling AllApi->get_products_prices: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getExchangeRates |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_products_zones**
> List[Zone] get_products_zones()



### Example


```python
import openapi_client
from openapi_client.models.zone import Zone
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_products_zones()
        print("The response of AllApi->get_products_zones:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_products_zones: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Zone]**](Zone.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getZones |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self**
> User get_self()



Get information about yourself

### Example


```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        # 
        api_response = api_instance.get_self()
        print("The response of AllApi->get_self:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getUser |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_addons**
> List[Addon] get_self_addons()

Addon

Get all the addons

### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        # Addon
        api_response = api_instance.get_self_addons()
        print("The response of AllApi->get_self_addons:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_addons: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Addon]**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddons |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_addons_addon_id**
> Addon get_self_addons_addon_id(addon_id)

Specific addon

Get a specific addon

### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        # Specific addon
        api_response = api_instance.get_self_addons_addon_id(addon_id)
        print("The response of AllApi->get_self_addons_addon_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_addons_addon_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

### Return type

[**Addon**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_addons_addon_id_applications**
> List[Application] get_self_addons_addon_id_applications(addon_id)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_self_addons_addon_id_applications(addon_id)
        print("The response of AllApi->get_self_addons_addon_id_applications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_addons_addon_id_applications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationsLinkedToAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_addons_addon_id_env**
> List[ListEnv] get_self_addons_addon_id_env(addon_id)



### Example


```python
import openapi_client
from openapi_client.models.list_env import ListEnv
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_self_addons_addon_id_env(addon_id)
        print("The response of AllApi->get_self_addons_addon_id_env:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_addons_addon_id_env: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

### Return type

[**List[ListEnv]**](ListEnv.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonEnv |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_addons_addon_id_sso**
> Sso get_self_addons_addon_id_sso(addon_id)



### Example


```python
import openapi_client
from openapi_client.models.sso import Sso
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_self_addons_addon_id_sso(addon_id)
        print("The response of AllApi->get_self_addons_addon_id_sso:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_addons_addon_id_sso: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

### Return type

[**Sso**](Sso.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getSSOData |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_addons_addon_id_tags**
> List[str] get_self_addons_addon_id_tags(addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_self_addons_addon_id_tags(addon_id)
        print("The response of AllApi->get_self_addons_addon_id_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_addons_addon_id_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonTags |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_applications**
> List[Application] get_self_applications()



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_self_applications()
        print("The response of AllApi->get_self_applications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_applications: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplications |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_applications_app_id**
> Application get_self_applications_app_id(app_id)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_self_applications_app_id(app_id)
        print("The response of AllApi->get_self_applications_app_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_applications_app_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

[**Application**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_applications_app_id_addons**
> List[Addon] get_self_applications_app_id_addons(app_id)



### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_self_applications_app_id_addons(app_id)
        print("The response of AllApi->get_self_applications_app_id_addons:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_applications_app_id_addons: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

[**List[Addon]**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAddonsLinkedToApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_applications_app_id_addons_env**
> List[Env] get_self_applications_app_id_addons_env(app_id)



### Example


```python
import openapi_client
from openapi_client.models.env import Env
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_self_applications_app_id_addons_env(app_id)
        print("The response of AllApi->get_self_applications_app_id_addons_env:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_applications_app_id_addons_env: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

[**List[Env]**](Env.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getEnvOfAddonsLinkedToApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_applications_app_id_dependencies**
> List[Application] get_self_applications_app_id_dependencies(app_id)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_self_applications_app_id_dependencies(app_id)
        print("The response of AllApi->get_self_applications_app_id_dependencies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_applications_app_id_dependencies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationDependencies |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_applications_app_id_dependencies_dependency_id**
> get_self_applications_app_id_dependencies_dependency_id(dependency_id, app_id, wannabe_application)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_application import WannabeApplication
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    dependency_id = 'dependency_id_example' # str | 
    app_id = 'app_id_example' # str | 
    wannabe_application = openapi_client.WannabeApplication() # WannabeApplication | 

    try:
        api_instance.get_self_applications_app_id_dependencies_dependency_id(dependency_id, app_id, wannabe_application)
    except Exception as e:
        print("Exception when calling AllApi->get_self_applications_app_id_dependencies_dependency_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dependency_id** | **str**|  | 
 **app_id** | **str**|  | 
 **wannabe_application** | [**WannabeApplication**](WannabeApplication.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addApplicationDependency |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_applications_app_id_dependents**
> List[Application] get_self_applications_app_id_dependents(app_id)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_self_applications_app_id_dependents(app_id)
        print("The response of AllApi->get_self_applications_app_id_dependents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_applications_app_id_dependents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationDependents |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_applications_app_id_deployments**
> List[Deployment] get_self_applications_app_id_deployments(app_id, limit=limit, offset=offset, action=action)



### Example


```python
import openapi_client
from openapi_client.models.deployment import Deployment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    limit = 'limit_example' # str |  (optional)
    offset = 'offset_example' # str |  (optional)
    action = 'action_example' # str |  (optional)

    try:
        api_response = api_instance.get_self_applications_app_id_deployments(app_id, limit=limit, offset=offset, action=action)
        print("The response of AllApi->get_self_applications_app_id_deployments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_applications_app_id_deployments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **limit** | **str**|  | [optional] 
 **offset** | **str**|  | [optional] 
 **action** | **str**|  | [optional] 

### Return type

[**List[Deployment]**](Deployment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationDeployments |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_applications_app_id_env**
> List[ListEnv] get_self_applications_app_id_env(app_id)



### Example


```python
import openapi_client
from openapi_client.models.list_env import ListEnv
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_self_applications_app_id_env(app_id)
        print("The response of AllApi->get_self_applications_app_id_env:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_applications_app_id_env: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

[**List[ListEnv]**](ListEnv.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | editApplicationEnv |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_applications_app_id_instances**
> List[Instance] get_self_applications_app_id_instances(app_id)



### Example


```python
import openapi_client
from openapi_client.models.instance import Instance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_self_applications_app_id_instances(app_id)
        print("The response of AllApi->get_self_applications_app_id_instances:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_applications_app_id_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

[**List[Instance]**](Instance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationInstances |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_applications_app_id_tags**
> List[str] get_self_applications_app_id_tags(app_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_self_applications_app_id_tags(app_id)
        print("The response of AllApi->get_self_applications_app_id_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_applications_app_id_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationTags |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_applications_app_id_vhosts**
> List[Vhost] get_self_applications_app_id_vhosts(app_id)



### Example


```python
import openapi_client
from openapi_client.models.vhost import Vhost
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_self_applications_app_id_vhosts(app_id)
        print("The response of AllApi->get_self_applications_app_id_vhosts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_applications_app_id_vhosts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

[**List[Vhost]**](Vhost.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getVhosts |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_applications_app_id_vhosts_favourite**
> Vhost get_self_applications_app_id_vhosts_favourite(app_id)



### Example


```python
import openapi_client
from openapi_client.models.vhost import Vhost
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_self_applications_app_id_vhosts_favourite(app_id)
        print("The response of AllApi->get_self_applications_app_id_vhosts_favourite:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_applications_app_id_vhosts_favourite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

[**Vhost**](Vhost.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getFavouriteVhost |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_confirmation_email**
> get_self_confirmation_email()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.get_self_confirmation_email()
    except Exception as e:
        print("Exception when calling AllApi->get_self_confirmation_email: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getConfirmationEmail |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_consumers**
> List[Consumer] get_self_consumers()



### Example


```python
import openapi_client
from openapi_client.models.consumer import Consumer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_self_consumers()
        print("The response of AllApi->get_self_consumers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_consumers: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Consumer]**](Consumer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getConsumers |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_consumers_key**
> Consumer get_self_consumers_key(key)



### Example


```python
import openapi_client
from openapi_client.models.consumer import Consumer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    key = 'key_example' # str | 

    try:
        api_response = api_instance.get_self_consumers_key(key)
        print("The response of AllApi->get_self_consumers_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_consumers_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 

### Return type

[**Consumer**](Consumer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getConsumer |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_consumers_key_secret**
> Secret get_self_consumers_key_secret(key)



### Example


```python
import openapi_client
from openapi_client.models.secret import Secret
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    key = 'key_example' # str | 

    try:
        api_response = api_instance.get_self_consumers_key_secret(key)
        print("The response of AllApi->get_self_consumers_key_secret:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_consumers_key_secret: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 

### Return type

[**Secret**](Secret.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getConsumerSecret |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_consumptions**
> Conso get_self_consumptions(app_id=app_id, var_from=var_from, to=to)



### Example


```python
import openapi_client
from openapi_client.models.conso import Conso
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str |  (optional)
    var_from = 'var_from_example' # str |  (optional)
    to = 'to_example' # str |  (optional)

    try:
        api_response = api_instance.get_self_consumptions(app_id=app_id, var_from=var_from, to=to)
        print("The response of AllApi->get_self_consumptions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_consumptions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | [optional] 
 **var_from** | **str**|  | [optional] 
 **to** | **str**|  | [optional] 

### Return type

[**Conso**](Conso.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getConsumptions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_credits**
> Credits get_self_credits()



### Example


```python
import openapi_client
from openapi_client.models.credits import Credits
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_self_credits()
        print("The response of AllApi->get_self_credits:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_credits: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Credits**](Credits.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getAmount |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_emails**
> List[str] get_self_emails()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_self_emails()
        print("The response of AllApi->get_self_emails:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_emails: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getEmailAddresses |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_id**
> str get_self_id()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_self_id()
        print("The response of AllApi->get_self_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_id: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getId |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_instances**
> List[Instance] get_self_instances()



### Example


```python
import openapi_client
from openapi_client.models.instance import Instance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_self_instances()
        print("The response of AllApi->get_self_instances:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_instances: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Instance]**](Instance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getInstancesForAllApps |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_keys**
> List[Key] get_self_keys()



### Example


```python
import openapi_client
from openapi_client.models.key import Key
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_self_keys()
        print("The response of AllApi->get_self_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_keys: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Key]**](Key.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getSshKeys |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_payment_info**
> get_self_payment_info()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.get_self_payment_info()
    except Exception as e:
        print("Exception when calling AllApi->get_self_payment_info: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getPaymentInfo |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_payments_billings**
> get_self_payments_billings()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.get_self_payments_billings()
    except Exception as e:
        print("Exception when calling AllApi->get_self_payments_billings: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getInvoices |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_payments_billings_bid**
> get_self_payments_billings_bid(bid)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    bid = 'bid_example' # str | 

    try:
        api_instance.get_self_payments_billings_bid(bid)
    except Exception as e:
        print("Exception when calling AllApi->get_self_payments_billings_bid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bid** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getInvoice |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_payments_billings_bid_pdf**
> get_self_payments_billings_bid_pdf(bid, token=token)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    bid = 'bid_example' # str | 
    token = 'token_example' # str |  (optional)

    try:
        api_instance.get_self_payments_billings_bid_pdf(bid, token=token)
    except Exception as e:
        print("Exception when calling AllApi->get_self_payments_billings_bid_pdf: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bid** | **str**|  | 
 **token** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getPdfInvoice |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_payments_fullprice_price**
> get_self_payments_fullprice_price(price)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    price = 'price_example' # str | 

    try:
        api_instance.get_self_payments_fullprice_price(price)
    except Exception as e:
        print("Exception when calling AllApi->get_self_payments_fullprice_price: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **price** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | priceWithTax |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_payments_methods**
> get_self_payments_methods()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.get_self_payments_methods()
    except Exception as e:
        print("Exception when calling AllApi->get_self_payments_methods: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getUserPaymentMethods |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_tokens**
> List[Token] get_self_tokens()



### Example


```python
import openapi_client
from openapi_client.models.token import Token
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_self_tokens()
        print("The response of AllApi->get_self_tokens:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_self_tokens: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Token]**](Token.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getSelfTokens |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_self_validate_email**
> get_self_validate_email(validation_key=validation_key)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    validation_key = 'validation_key_example' # str |  (optional)

    try:
        api_instance.get_self_validate_email(validation_key=validation_key)
    except Exception as e:
        print("Exception when calling AllApi->get_self_validate_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validation_key** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | validateEmail |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_summary**
> Summary get_summary()



### Example


```python
import openapi_client
from openapi_client.models.summary import Summary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.get_summary()
        print("The response of AllApi->get_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_summary: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Summary**](Summary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getSummary |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_users_id**
> User get_users_id(id)



### Example


```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_users_id(id)
        print("The response of AllApi->get_users_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_users_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getUser |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_users_id_applications**
> List[Application] get_users_id_applications(id)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_users_id_applications(id)
        print("The response of AllApi->get_users_id_applications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_users_id_applications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplications |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_users_user_id_git_info**
> get_users_user_id_git_info(user_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    user_id = 'user_id_example' # str | 

    try:
        api_instance.get_users_user_id_git_info(user_id)
    except Exception as e:
        print("Exception when calling AllApi->get_users_user_id_git_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getGitInfo |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_vendor_apps**
> List[Application] get_vendor_apps(offset=offset)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    offset = 56 # int |  (optional)

    try:
        api_response = api_instance.get_vendor_apps(offset=offset)
        print("The response of AllApi->get_vendor_apps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->get_vendor_apps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int**|  | [optional] 

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | listApps |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_vendor_apps_addon_id**
> get_vendor_apps_addon_id(addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.get_vendor_apps_addon_id(addon_id)
    except Exception as e:
        print("Exception when calling AllApi->get_vendor_apps_addon_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplicationInfo |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_network_group_members**
> List[Schema1] list_network_group_members(owner_id, network_group_id, body=body)

List members

Lists members in a Network Group.

### Example


```python
import openapi_client
from openapi_client.models.schema1 import Schema1
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # List members
        api_response = api_instance.list_network_group_members(owner_id, network_group_id, body=body)
        print("The response of AllApi->list_network_group_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->list_network_group_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

[**List[Schema1]**](Schema1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_network_group_peers**
> List[object] list_network_group_peers(owner_id, network_group_id, body=body)

List peers

Lists peers in a Network Group.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # List peers
        api_response = api_instance.list_network_group_peers(owner_id, network_group_id, body=body)
        print("The response of AllApi->list_network_group_peers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->list_network_group_peers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **network_group_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**List[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |
**404** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_network_groups**
> List[object] list_network_groups(owner_id, body=body)

List Network Groups

Lists Network Groups from an owner.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # List Network Groups
        api_response = api_instance.list_network_groups(owner_id, body=body)
        print("The response of AllApi->list_network_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->list_network_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 
 **body** | **object**|  | [optional] 

### Return type

**List[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_app_id_drains_get**
> logs_app_id_drains_get(app_id)



Fetch the logs drains for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.logs_app_id_drains_get(app_id)
    except Exception as e:
        print("Exception when calling AllApi->logs_app_id_drains_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_app_id_drains_id_or_url_delete**
> logs_app_id_drains_id_or_url_delete(app_id)



Delete the logs drain by id or url for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.logs_app_id_drains_id_or_url_delete(app_id)
    except Exception as e:
        print("Exception when calling AllApi->logs_app_id_drains_id_or_url_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_app_id_drains_id_or_url_get**
> logs_app_id_drains_id_or_url_get(app_id)



Fetch the logs drain by id or url for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.logs_app_id_drains_id_or_url_get(app_id)
    except Exception as e:
        print("Exception when calling AllApi->logs_app_id_drains_id_or_url_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_app_id_drains_post**
> logs_app_id_drains_post(app_id)



Add a log drain for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.logs_app_id_drains_post(app_id)
    except Exception as e:
        print("Exception when calling AllApi->logs_app_id_drains_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_app_id_get**
> logs_app_id_get(app_id, limit=limit, order=order, after=after, before=before, filter=filter, deployment_id=deployment_id)



Fetch the logs for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Application Id
    limit = 56 # int | Number of lines to return (optional)
    order = desc # str | Logs order (optional) (default to desc)
    after = '2013-10-20T19:20:30+01:00' # datetime | Lowest bound for logs date, ISO 8601 (optional)
    before = '2013-10-20T19:20:30+01:00' # datetime | Highest bounds for logs date, ISO 8601 (optional)
    filter = 'filter_example' # str | A pattern to filter with (optional)
    deployment_id = 'deployment_id_example' # str | Only fetch logs emitted by this deployment (optional)

    try:
        api_instance.logs_app_id_get(app_id, limit=limit, order=order, after=after, before=before, filter=filter, deployment_id=deployment_id)
    except Exception as e:
        print("Exception when calling AllApi->logs_app_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Application Id | 
 **limit** | **int**| Number of lines to return | [optional] 
 **order** | **str**| Logs order | [optional] [default to desc]
 **after** | **datetime**| Lowest bound for logs date, ISO 8601 | [optional] 
 **before** | **datetime**| Highest bounds for logs date, ISO 8601 | [optional] 
 **filter** | **str**| A pattern to filter with | [optional] 
 **deployment_id** | **str**| Only fetch logs emitted by this deployment | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_app_id_sse_get**
> logs_app_id_sse_get(app_id)



Retrieve logs as they come through a sse connection. To have authorization, you have to add `authorization=oAuthAuthorizationString` as query param.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.logs_app_id_sse_get(app_id)
    except Exception as e:
        print("Exception when calling AllApi->logs_app_id_sse_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_drains_drain_id_put**
> logs_drains_drain_id_put(drain_id)



Fetch all the logs drains (ccadmin dedicated route)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    drain_id = 'drain_id_example' # str | Automatically added

    try:
        api_instance.logs_drains_drain_id_put(drain_id)
    except Exception as e:
        print("Exception when calling AllApi->logs_drains_drain_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **drain_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_drains_get**
> logs_drains_get()



Fetch all the logs drains (ccadmin dedicated route)

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.logs_drains_get()
    except Exception as e:
        print("Exception when calling AllApi->logs_drains_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_logs_chunked_app_id_get**
> logs_logs_chunked_app_id_get(app_id, download=download)



Retrieve logs as they come through a chunked, never-ending response

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Application Id
    download = True # bool | Tell the user-agent to download the body as a file (optional)

    try:
        api_instance.logs_logs_chunked_app_id_get(app_id, download=download)
    except Exception as e:
        print("Exception when calling AllApi->logs_logs_chunked_app_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Application Id | 
 **download** | **bool**| Tell the user-agent to download the body as a file | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_logs_socket_app_id_get**
> logs_logs_socket_app_id_get(app_id, since=since, filter=filter, deployment_id=deployment_id)



Retrieve logs as they come through a websocket connection. To have authorization, you have to send a `{ \"message_type\": \"oauth\", \"authorization\": \"oauth authorization string\" }` message

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Application Id
    since = '2013-10-20T19:20:30+01:00' # datetime | Only fetch logs newer than this (ISO-8601 formatted) date (optional)
    filter = 'filter_example' # str | A pattern to filter with (optional)
    deployment_id = 'deployment_id_example' # str | Only fetch logs emitted by this deployment (optional)

    try:
        api_instance.logs_logs_socket_app_id_get(app_id, since=since, filter=filter, deployment_id=deployment_id)
    except Exception as e:
        print("Exception when calling AllApi->logs_logs_socket_app_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Application Id | 
 **since** | **datetime**| Only fetch logs newer than this (ISO-8601 formatted) date | [optional] 
 **filter** | **str**| A pattern to filter with | [optional] 
 **deployment_id** | **str**| Only fetch logs emitted by this deployment | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs_socket_app_id_get**
> logs_socket_app_id_get(app_id)



WebSocket to get logs for :appID. Optional queryString arg bind_to_es=true to bind WS on log storage and not real time AMQP broker

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.logs_socket_app_id_get(app_id)
    except Exception as e:
        print("Exception when calling AllApi->logs_socket_app_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifications_emailhooks_owner_id_get**
> notifications_emailhooks_owner_id_get(owner_id)



list created e-mail hooks

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added

    try:
        api_instance.notifications_emailhooks_owner_id_get(owner_id)
    except Exception as e:
        print("Exception when calling AllApi->notifications_emailhooks_owner_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifications_emailhooks_owner_id_id_delete**
> notifications_emailhooks_owner_id_id_delete(owner_id)



delete an e-mail hook

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added

    try:
        api_instance.notifications_emailhooks_owner_id_id_delete(owner_id)
    except Exception as e:
        print("Exception when calling AllApi->notifications_emailhooks_owner_id_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifications_emailhooks_owner_id_id_put**
> notifications_emailhooks_owner_id_id_put(owner_id)



edit an e-mail hook

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added

    try:
        api_instance.notifications_emailhooks_owner_id_id_put(owner_id)
    except Exception as e:
        print("Exception when calling AllApi->notifications_emailhooks_owner_id_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifications_emailhooks_owner_id_post**
> notifications_emailhooks_owner_id_post(owner_id)



create a hook for e-mail notifications

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added

    try:
        api_instance.notifications_emailhooks_owner_id_post(owner_id)
    except Exception as e:
        print("Exception when calling AllApi->notifications_emailhooks_owner_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifications_info_events_get**
> notifications_info_events_get()



list available events

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.notifications_info_events_get()
    except Exception as e:
        print("Exception when calling AllApi->notifications_info_events_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifications_info_webhookformats_get**
> notifications_info_webhookformats_get()



list available webhook formats

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.notifications_info_webhookformats_get()
    except Exception as e:
        print("Exception when calling AllApi->notifications_info_webhookformats_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifications_webhooks_owner_id_get**
> notifications_webhooks_owner_id_get(owner_id)



list created hooks

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added

    try:
        api_instance.notifications_webhooks_owner_id_get(owner_id)
    except Exception as e:
        print("Exception when calling AllApi->notifications_webhooks_owner_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifications_webhooks_owner_id_id_delete**
> notifications_webhooks_owner_id_id_delete(owner_id)



delete a hook

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added

    try:
        api_instance.notifications_webhooks_owner_id_id_delete(owner_id)
    except Exception as e:
        print("Exception when calling AllApi->notifications_webhooks_owner_id_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifications_webhooks_owner_id_id_put**
> notifications_webhooks_owner_id_id_put(owner_id)



edit a hook

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added

    try:
        api_instance.notifications_webhooks_owner_id_id_put(owner_id)
    except Exception as e:
        print("Exception when calling AllApi->notifications_webhooks_owner_id_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifications_webhooks_owner_id_post**
> notifications_webhooks_owner_id_post(owner_id)



create a hook for notifications

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added

    try:
        api_instance.notifications_webhooks_owner_id_post(owner_id)
    except Exception as e:
        print("Exception when calling AllApi->notifications_webhooks_owner_id_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth_access_token_query_post**
> oauth_access_token_query_post(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    oauth_consumer_key = 'oauth_consumer_key_example' # str |  (optional)
    oauth_token = 'oauth_token_example' # str |  (optional)
    oauth_signature_method = 'oauth_signature_method_example' # str |  (optional)
    oauth_signature = 'oauth_signature_example' # str |  (optional)
    oauth_timestamp = 'oauth_timestamp_example' # str |  (optional)
    oauth_nonce = 'oauth_nonce_example' # str |  (optional)
    oauth_version = 'oauth_version_example' # str |  (optional)
    oauth_verifier = 'oauth_verifier_example' # str |  (optional)
    oauth_callback = 'oauth_callback_example' # str |  (optional)
    oauth_token_secret = 'oauth_token_secret_example' # str |  (optional)
    oauth_callback_confirmed = 'oauth_callback_confirmed_example' # str |  (optional)

    try:
        api_instance.oauth_access_token_query_post(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)
    except Exception as e:
        print("Exception when calling AllApi->oauth_access_token_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_consumer_key** | **str**|  | [optional] 
 **oauth_token** | **str**|  | [optional] 
 **oauth_signature_method** | **str**|  | [optional] 
 **oauth_signature** | **str**|  | [optional] 
 **oauth_timestamp** | **str**|  | [optional] 
 **oauth_nonce** | **str**|  | [optional] 
 **oauth_version** | **str**|  | [optional] 
 **oauth_verifier** | **str**|  | [optional] 
 **oauth_callback** | **str**|  | [optional] 
 **oauth_token_secret** | **str**|  | [optional] 
 **oauth_callback_confirmed** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oauth_request_token_query_post**
> oauth_request_token_query_post(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    oauth_consumer_key = 'oauth_consumer_key_example' # str |  (optional)
    oauth_token = 'oauth_token_example' # str |  (optional)
    oauth_signature_method = 'oauth_signature_method_example' # str |  (optional)
    oauth_signature = 'oauth_signature_example' # str |  (optional)
    oauth_timestamp = 'oauth_timestamp_example' # str |  (optional)
    oauth_nonce = 'oauth_nonce_example' # str |  (optional)
    oauth_version = 'oauth_version_example' # str |  (optional)
    oauth_verifier = 'oauth_verifier_example' # str |  (optional)
    oauth_callback = 'oauth_callback_example' # str |  (optional)
    oauth_token_secret = 'oauth_token_secret_example' # str |  (optional)
    oauth_callback_confirmed = 'oauth_callback_confirmed_example' # str |  (optional)

    try:
        api_instance.oauth_request_token_query_post(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)
    except Exception as e:
        print("Exception when calling AllApi->oauth_request_token_query_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_consumer_key** | **str**|  | [optional] 
 **oauth_token** | **str**|  | [optional] 
 **oauth_signature_method** | **str**|  | [optional] 
 **oauth_signature** | **str**|  | [optional] 
 **oauth_timestamp** | **str**|  | [optional] 
 **oauth_nonce** | **str**|  | [optional] 
 **oauth_version** | **str**|  | [optional] 
 **oauth_verifier** | **str**|  | [optional] 
 **oauth_callback** | **str**|  | [optional] 
 **oauth_token_secret** | **str**|  | [optional] 
 **oauth_callback_confirmed** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **openapi_get**
> openapi_get()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.openapi_get()
    except Exception as e:
        print("Exception when calling AllApi->openapi_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The swagger documenting this API in yaml format. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **openapi_type_get**
> openapi_type_get(type)

Get the swagger for this API as {type}

Get the swagger for this API as {type}. Type can be either \"yml\" or \"json\".

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    type = 'type_example' # str | 

    try:
        # Get the swagger for this API as {type}
        api_instance.openapi_type_get(type)
    except Exception as e:
        print("Exception when calling AllApi->openapi_type_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This API swagger documentation in {type} format. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_addonproviders_provider_id_delete**
> organisations_id_addonproviders_provider_id_delete(id, provider_id)

Remove an add-on provider

Remove a given add-on provider. providerId must be owned by organisation {id}.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 

    try:
        # Remove an add-on provider
        api_instance.organisations_id_addonproviders_provider_id_delete(id, provider_id)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_addonproviders_provider_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **provider_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | If the deletion was successful. |  -  |
**403** | If user has no access to organisation {id} or provider or if there still are add-ons of this provider. |  -  |
**404** | If no such organisation/provider exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_addons_addon_id_instances_get**
> List[SupernovaInstanceView] organisations_id_addons_addon_id_instances_get(id, addon_id, deployment_id=deployment_id, with_deleted=with_deleted)

List instances for this add-on.

### Example


```python
import openapi_client
from openapi_client.models.supernova_instance_view import SupernovaInstanceView
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 
    deployment_id = 'deployment_id_example' # str |  (optional)
    with_deleted = 'with_deleted_example' # str |  (optional)

    try:
        # List instances for this add-on.
        api_response = api_instance.organisations_id_addons_addon_id_instances_get(id, addon_id, deployment_id=deployment_id, with_deleted=with_deleted)
        print("The response of AllApi->organisations_id_addons_addon_id_instances_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_addons_addon_id_instances_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 
 **deployment_id** | **str**|  | [optional] 
 **with_deleted** | **str**|  | [optional] 

### Return type

[**List[SupernovaInstanceView]**](SupernovaInstanceView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The instance list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_addons_addon_id_instances_instance_id_get**
> SupernovaInstanceView organisations_id_addons_addon_id_instances_instance_id_get(instance_id, id, addon_id)

Get a specific instance for {addonId}

### Example


```python
import openapi_client
from openapi_client.models.supernova_instance_view import SupernovaInstanceView
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    instance_id = 'instance_id_example' # str | 
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        # Get a specific instance for {addonId}
        api_response = api_instance.organisations_id_addons_addon_id_instances_instance_id_get(instance_id, id, addon_id)
        print("The response of AllApi->organisations_id_addons_addon_id_instances_instance_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_addons_addon_id_instances_instance_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance_id** | **str**|  | 
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

[**SupernovaInstanceView**](SupernovaInstanceView.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An instance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_addons_addon_id_migrations_get**
> List[AddonMigration] organisations_id_addons_addon_id_migrations_get(id, addon_id)

Get past migrations from add-on.

### Example


```python
import openapi_client
from openapi_client.models.addon_migration import AddonMigration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        # Get past migrations from add-on.
        api_response = api_instance.organisations_id_addons_addon_id_migrations_get(id, addon_id)
        print("The response of AllApi->organisations_id_addons_addon_id_migrations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_addons_addon_id_migrations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

[**List[AddonMigration]**](AddonMigration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of migrations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_addons_addon_id_migrations_migration_id_get**
> AddonMigration organisations_id_addons_addon_id_migrations_migration_id_get(migration_id, id, addon_id)

Get a given migration

### Example


```python
import openapi_client
from openapi_client.models.addon_migration import AddonMigration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    migration_id = 'migration_id_example' # str | 
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        # Get a given migration
        api_response = api_instance.organisations_id_addons_addon_id_migrations_migration_id_get(migration_id, id, addon_id)
        print("The response of AllApi->organisations_id_addons_addon_id_migrations_migration_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_addons_addon_id_migrations_migration_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **migration_id** | **str**|  | 
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

[**AddonMigration**](AddonMigration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The migration object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_addons_addon_id_migrations_post**
> object organisations_id_addons_addon_id_migrations_post(id, addon_id, organisations_id_addons_addon_id_migrations_post_request)

Start a new add-on migration

### Example


```python
import openapi_client
from openapi_client.models.organisations_id_addons_addon_id_migrations_post_request import OrganisationsIdAddonsAddonIdMigrationsPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 
    organisations_id_addons_addon_id_migrations_post_request = openapi_client.OrganisationsIdAddonsAddonIdMigrationsPostRequest() # OrganisationsIdAddonsAddonIdMigrationsPostRequest | 

    try:
        # Start a new add-on migration
        api_response = api_instance.organisations_id_addons_addon_id_migrations_post(id, addon_id, organisations_id_addons_addon_id_migrations_post_request)
        print("The response of AllApi->organisations_id_addons_addon_id_migrations_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_addons_addon_id_migrations_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 
 **organisations_id_addons_addon_id_migrations_post_request** | [**OrganisationsIdAddonsAddonIdMigrationsPostRequest**](OrganisationsIdAddonsAddonIdMigrationsPostRequest.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Migration has started. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_addons_addon_id_sso_get**
> Sso organisations_id_addons_addon_id_sso_get(id, addon_id)



### Example


```python
import openapi_client
from openapi_client.models.sso import Sso
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.organisations_id_addons_addon_id_sso_get(id, addon_id)
        print("The response of AllApi->organisations_id_addons_addon_id_sso_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_addons_addon_id_sso_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 

### Return type

[**Sso**](Sso.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getSSOData |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_addons_preorders_post**
> organisations_id_addons_preorders_post(id, wannabe_addon)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_addon import WannabeAddon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    wannabe_addon = openapi_client.WannabeAddon() # WannabeAddon | 

    try:
        api_instance.organisations_id_addons_preorders_post(id, wannabe_addon)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_addons_preorders_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **wannabe_addon** | [**WannabeAddon**](WannabeAddon.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_applications_app_id_branch_put**
> organisations_id_applications_app_id_branch_put(app_id, id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_applications_app_id_branch_put(app_id, id)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_applications_app_id_branch_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_applications_app_id_branches_get**
> organisations_id_applications_app_id_branches_get(app_id, id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_applications_app_id_branches_get(app_id, id)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_applications_app_id_branches_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_applications_app_id_buildflavor_put**
> organisations_id_applications_app_id_buildflavor_put(app_id, id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_applications_app_id_buildflavor_put(app_id, id)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_applications_app_id_buildflavor_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_applications_app_id_dependencies_env_get**
> List[LinkedAppEnv] organisations_id_applications_app_id_dependencies_env_get(app_id, id)



### Example


```python
import openapi_client
from openapi_client.models.linked_app_env import LinkedAppEnv
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_response = api_instance.organisations_id_applications_app_id_dependencies_env_get(app_id, id)
        print("The response of AllApi->organisations_id_applications_app_id_dependencies_env_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_applications_app_id_dependencies_env_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

[**List[LinkedAppEnv]**](LinkedAppEnv.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get env variables defined by application dependencies |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_applications_app_id_deployments_deployment_id_get**
> organisations_id_applications_app_id_deployments_deployment_id_get(app_id, deployment_id, id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    deployment_id = 'deployment_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_applications_app_id_deployments_deployment_id_get(app_id, deployment_id, id)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_applications_app_id_deployments_deployment_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **deployment_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_applications_app_id_exposed_env_get**
> organisations_id_applications_app_id_exposed_env_get(app_id, id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_applications_app_id_exposed_env_get(app_id, id)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_applications_app_id_exposed_env_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_applications_app_id_exposed_env_put**
> organisations_id_applications_app_id_exposed_env_put(app_id, id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_applications_app_id_exposed_env_put(app_id, id)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_applications_app_id_exposed_env_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_applications_app_id_instances_instance_id_get**
> organisations_id_applications_app_id_instances_instance_id_get(instance_id, app_id, id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    instance_id = 'instance_id_example' # str | 
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_applications_app_id_instances_instance_id_get(instance_id, app_id, id)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_applications_app_id_instances_instance_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance_id** | **str**|  | 
 **app_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_billings_unpaid_get**
> organisations_id_payments_billings_unpaid_get(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_billings_unpaid_get(id)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_payments_billings_unpaid_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_methods_default_get**
> organisations_id_payments_methods_default_get(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_methods_default_get(id)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_payments_methods_default_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_methods_default_put**
> organisations_id_payments_methods_default_put(id, payment_data)



### Example


```python
import openapi_client
from openapi_client.models.payment_data import PaymentData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    payment_data = openapi_client.PaymentData() # PaymentData | 

    try:
        api_instance.organisations_id_payments_methods_default_put(id, payment_data)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_payments_methods_default_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **payment_data** | [**PaymentData**](PaymentData.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_methods_get**
> organisations_id_payments_methods_get(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_methods_get(id)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_payments_methods_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_methods_mid_delete**
> organisations_id_payments_methods_mid_delete(m_id, id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    m_id = 'm_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_methods_mid_delete(m_id, id)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_payments_methods_mid_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **m_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_methods_post**
> organisations_id_payments_methods_post(id, body)



### Example


```python
import openapi_client
from openapi_client.models.body import Body
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.organisations_id_payments_methods_post(id, body)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_payments_methods_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_monthlyinvoice_get**
> organisations_id_payments_monthlyinvoice_get(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_monthlyinvoice_get(id)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_payments_monthlyinvoice_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_monthlyinvoice_maxcredit_put**
> organisations_id_payments_monthlyinvoice_maxcredit_put(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_monthlyinvoice_maxcredit_put(id)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_payments_monthlyinvoice_maxcredit_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **organisations_id_payments_recurring_get**
> organisations_id_payments_recurring_get(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_recurring_get(id)
    except Exception as e:
        print("Exception when calling AllApi->organisations_id_payments_recurring_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payments_assets_pay_button_token_button_png_get**
> payments_assets_pay_button_token_button_png_get(token)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    token = 'token_example' # str | 

    try:
        api_instance.payments_assets_pay_button_token_button_png_get(token)
    except Exception as e:
        print("Exception when calling AllApi->payments_assets_pay_button_token_button_png_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payments_bid_end_stripe_post**
> payments_bid_end_stripe_post(bid)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    bid = 'bid_example' # str | 

    try:
        api_instance.payments_bid_end_stripe_post(bid)
    except Exception as e:
        print("Exception when calling AllApi->payments_bid_end_stripe_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bid** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | endPaymentWithStripe |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_authorize**
> post_authorize()



Handled by our API.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.post_authorize()
    except Exception as e:
        print("Exception when calling AllApi->post_authorize: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | authorize |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_github_redeploy**
> post_github_redeploy(user_agent=user_agent, x_github_event=x_github_event, x_hub_signature=x_hub_signature)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    user_agent = 'user_agent_example' # str |  (optional)
    x_github_event = 'x_github_event_example' # str |  (optional)
    x_hub_signature = 'x_hub_signature_example' # str |  (optional)

    try:
        api_instance.post_github_redeploy(user_agent=user_agent, x_github_event=x_github_event, x_hub_signature=x_hub_signature)
    except Exception as e:
        print("Exception when calling AllApi->post_github_redeploy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_agent** | **str**|  | [optional] 
 **x_github_event** | **str**|  | [optional] 
 **x_hub_signature** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | redeployApp |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_github_signup**
> post_github_signup(transaction_id=transaction_id, name=name, other_id=other_id, other_email=other_email, password=password, auto_link=auto_link, terms=terms)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    transaction_id = 'transaction_id_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    other_id = 'other_id_example' # str |  (optional)
    other_email = 'other_email_example' # str |  (optional)
    password = 'password_example' # str |  (optional)
    auto_link = 'auto_link_example' # str |  (optional)
    terms = 'terms_example' # str |  (optional)

    try:
        api_instance.post_github_signup(transaction_id=transaction_id, name=name, other_id=other_id, other_email=other_email, password=password, auto_link=auto_link, terms=terms)
    except Exception as e:
        print("Exception when calling AllApi->post_github_signup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **other_id** | **str**|  | [optional] 
 **other_email** | **str**|  | [optional] 
 **password** | **str**|  | [optional] 
 **auto_link** | **str**|  | [optional] 
 **terms** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | finsihGithubSignup |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_oauth_access_token**
> post_oauth_access_token(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    oauth_consumer_key = 'oauth_consumer_key_example' # str |  (optional)
    oauth_token = 'oauth_token_example' # str |  (optional)
    oauth_signature_method = 'oauth_signature_method_example' # str |  (optional)
    oauth_signature = 'oauth_signature_example' # str |  (optional)
    oauth_timestamp = 'oauth_timestamp_example' # str |  (optional)
    oauth_nonce = 'oauth_nonce_example' # str |  (optional)
    oauth_version = 'oauth_version_example' # str |  (optional)
    oauth_verifier = 'oauth_verifier_example' # str |  (optional)
    oauth_callback = 'oauth_callback_example' # str |  (optional)
    oauth_token_secret = 'oauth_token_secret_example' # str |  (optional)
    oauth_callback_confirmed = 'oauth_callback_confirmed_example' # str |  (optional)

    try:
        api_instance.post_oauth_access_token(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)
    except Exception as e:
        print("Exception when calling AllApi->post_oauth_access_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_consumer_key** | **str**|  | [optional] 
 **oauth_token** | **str**|  | [optional] 
 **oauth_signature_method** | **str**|  | [optional] 
 **oauth_signature** | **str**|  | [optional] 
 **oauth_timestamp** | **str**|  | [optional] 
 **oauth_nonce** | **str**|  | [optional] 
 **oauth_version** | **str**|  | [optional] 
 **oauth_verifier** | **str**|  | [optional] 
 **oauth_callback** | **str**|  | [optional] 
 **oauth_token_secret** | **str**|  | [optional] 
 **oauth_callback_confirmed** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | postAccessTokenRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_oauth_authorize**
> post_oauth_authorize(almighty=almighty, access_organisations=access_organisations, manage_organisations=manage_organisations, manage_organisations_services=manage_organisations_services, manage_organisations_applications=manage_organisations_applications, manage_organisations_members=manage_organisations_members, access_organisations_bills=access_organisations_bills, access_organisations_credit_count=access_organisations_credit_count, access_organisations_consumption_statistics=access_organisations_consumption_statistics, access_personal_information=access_personal_information, manage_personal_information=manage_personal_information, manage_ssh_keys=manage_ssh_keys, manage_services=manage_services, manage_applications=manage_applications, access_bills=access_bills, access_credit_count=access_credit_count, access_consumption_statistics=access_consumption_statistics, cookie=cookie)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    almighty = 'almighty_example' # str |  (optional)
    access_organisations = 'access_organisations_example' # str |  (optional)
    manage_organisations = 'manage_organisations_example' # str |  (optional)
    manage_organisations_services = 'manage_organisations_services_example' # str |  (optional)
    manage_organisations_applications = 'manage_organisations_applications_example' # str |  (optional)
    manage_organisations_members = 'manage_organisations_members_example' # str |  (optional)
    access_organisations_bills = 'access_organisations_bills_example' # str |  (optional)
    access_organisations_credit_count = 'access_organisations_credit_count_example' # str |  (optional)
    access_organisations_consumption_statistics = 'access_organisations_consumption_statistics_example' # str |  (optional)
    access_personal_information = 'access_personal_information_example' # str |  (optional)
    manage_personal_information = 'manage_personal_information_example' # str |  (optional)
    manage_ssh_keys = 'manage_ssh_keys_example' # str |  (optional)
    manage_services = 'manage_services_example' # str |  (optional)
    manage_applications = 'manage_applications_example' # str |  (optional)
    access_bills = 'access_bills_example' # str |  (optional)
    access_credit_count = 'access_credit_count_example' # str |  (optional)
    access_consumption_statistics = 'access_consumption_statistics_example' # str |  (optional)
    cookie = 'cookie_example' # str |  (optional)

    try:
        api_instance.post_oauth_authorize(almighty=almighty, access_organisations=access_organisations, manage_organisations=manage_organisations, manage_organisations_services=manage_organisations_services, manage_organisations_applications=manage_organisations_applications, manage_organisations_members=manage_organisations_members, access_organisations_bills=access_organisations_bills, access_organisations_credit_count=access_organisations_credit_count, access_organisations_consumption_statistics=access_organisations_consumption_statistics, access_personal_information=access_personal_information, manage_personal_information=manage_personal_information, manage_ssh_keys=manage_ssh_keys, manage_services=manage_services, manage_applications=manage_applications, access_bills=access_bills, access_credit_count=access_credit_count, access_consumption_statistics=access_consumption_statistics, cookie=cookie)
    except Exception as e:
        print("Exception when calling AllApi->post_oauth_authorize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **almighty** | **str**|  | [optional] 
 **access_organisations** | **str**|  | [optional] 
 **manage_organisations** | **str**|  | [optional] 
 **manage_organisations_services** | **str**|  | [optional] 
 **manage_organisations_applications** | **str**|  | [optional] 
 **manage_organisations_members** | **str**|  | [optional] 
 **access_organisations_bills** | **str**|  | [optional] 
 **access_organisations_credit_count** | **str**|  | [optional] 
 **access_organisations_consumption_statistics** | **str**|  | [optional] 
 **access_personal_information** | **str**|  | [optional] 
 **manage_personal_information** | **str**|  | [optional] 
 **manage_ssh_keys** | **str**|  | [optional] 
 **manage_services** | **str**|  | [optional] 
 **manage_applications** | **str**|  | [optional] 
 **access_bills** | **str**|  | [optional] 
 **access_credit_count** | **str**|  | [optional] 
 **access_consumption_statistics** | **str**|  | [optional] 
 **cookie** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | authorizeToken |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_oauth_request_token**
> post_oauth_request_token(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    oauth_consumer_key = 'oauth_consumer_key_example' # str |  (optional)
    oauth_token = 'oauth_token_example' # str |  (optional)
    oauth_signature_method = 'oauth_signature_method_example' # str |  (optional)
    oauth_signature = 'oauth_signature_example' # str |  (optional)
    oauth_timestamp = 'oauth_timestamp_example' # str |  (optional)
    oauth_nonce = 'oauth_nonce_example' # str |  (optional)
    oauth_version = 'oauth_version_example' # str |  (optional)
    oauth_verifier = 'oauth_verifier_example' # str |  (optional)
    oauth_callback = 'oauth_callback_example' # str |  (optional)
    oauth_token_secret = 'oauth_token_secret_example' # str |  (optional)
    oauth_callback_confirmed = 'oauth_callback_confirmed_example' # str |  (optional)

    try:
        api_instance.post_oauth_request_token(oauth_consumer_key=oauth_consumer_key, oauth_token=oauth_token, oauth_signature_method=oauth_signature_method, oauth_signature=oauth_signature, oauth_timestamp=oauth_timestamp, oauth_nonce=oauth_nonce, oauth_version=oauth_version, oauth_verifier=oauth_verifier, oauth_callback=oauth_callback, oauth_token_secret=oauth_token_secret, oauth_callback_confirmed=oauth_callback_confirmed)
    except Exception as e:
        print("Exception when calling AllApi->post_oauth_request_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oauth_consumer_key** | **str**|  | [optional] 
 **oauth_token** | **str**|  | [optional] 
 **oauth_signature_method** | **str**|  | [optional] 
 **oauth_signature** | **str**|  | [optional] 
 **oauth_timestamp** | **str**|  | [optional] 
 **oauth_nonce** | **str**|  | [optional] 
 **oauth_version** | **str**|  | [optional] 
 **oauth_verifier** | **str**|  | [optional] 
 **oauth_callback** | **str**|  | [optional] 
 **oauth_token_secret** | **str**|  | [optional] 
 **oauth_callback_confirmed** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | postReqTokenRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organisations**
> Organisation post_organisations(wannabe_organisation)



### Example


```python
import openapi_client
from openapi_client.models.organisation import Organisation
from openapi_client.models.wannabe_organisation import WannabeOrganisation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    wannabe_organisation = openapi_client.WannabeOrganisation() # WannabeOrganisation | 

    try:
        api_response = api_instance.post_organisations(wannabe_organisation)
        print("The response of AllApi->post_organisations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->post_organisations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wannabe_organisation** | [**WannabeOrganisation**](WannabeOrganisation.md)|  | 

### Return type

[**Organisation**](Organisation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | createOrganisation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organisations_id_addonproviders**
> Provider post_organisations_id_addonproviders(id, wannabe_addon_provider)



### Example


```python
import openapi_client
from openapi_client.models.provider import Provider
from openapi_client.models.wannabe_addon_provider import WannabeAddonProvider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    wannabe_addon_provider = openapi_client.WannabeAddonProvider() # WannabeAddonProvider | 

    try:
        api_response = api_instance.post_organisations_id_addonproviders(id, wannabe_addon_provider)
        print("The response of AllApi->post_organisations_id_addonproviders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->post_organisations_id_addonproviders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **wannabe_addon_provider** | [**WannabeAddonProvider**](WannabeAddonProvider.md)|  | 

### Return type

[**Provider**](Provider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | createProvider |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organisations_id_addonproviders_provider_id_features**
> Feature post_organisations_id_addonproviders_provider_id_features(id, provider_id, wannabe_feature)



### Example


```python
import openapi_client
from openapi_client.models.feature import Feature
from openapi_client.models.wannabe_feature import WannabeFeature
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 
    wannabe_feature = openapi_client.WannabeFeature() # WannabeFeature | 

    try:
        api_response = api_instance.post_organisations_id_addonproviders_provider_id_features(id, provider_id, wannabe_feature)
        print("The response of AllApi->post_organisations_id_addonproviders_provider_id_features:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->post_organisations_id_addonproviders_provider_id_features: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **provider_id** | **str**|  | 
 **wannabe_feature** | [**WannabeFeature**](WannabeFeature.md)|  | 

### Return type

[**Feature**](Feature.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addProviderFeature |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organisations_id_addonproviders_provider_id_plans**
> Plan post_organisations_id_addonproviders_provider_id_plans(id, provider_id, wannabe_plan)



### Example


```python
import openapi_client
from openapi_client.models.plan import Plan
from openapi_client.models.wannabe_plan import WannabePlan
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 
    wannabe_plan = openapi_client.WannabePlan() # WannabePlan | 

    try:
        api_response = api_instance.post_organisations_id_addonproviders_provider_id_plans(id, provider_id, wannabe_plan)
        print("The response of AllApi->post_organisations_id_addonproviders_provider_id_plans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->post_organisations_id_addonproviders_provider_id_plans: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **provider_id** | **str**|  | 
 **wannabe_plan** | [**WannabePlan**](WannabePlan.md)|  | 

### Return type

[**Plan**](Plan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addProviderPlan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organisations_id_addonproviders_provider_id_testers**
> post_organisations_id_addonproviders_provider_id_testers(id, provider_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 

    try:
        api_instance.post_organisations_id_addonproviders_provider_id_testers(id, provider_id)
    except Exception as e:
        print("Exception when calling AllApi->post_organisations_id_addonproviders_provider_id_testers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **provider_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addBetaTester |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organisations_id_addons**
> Addon post_organisations_id_addons(id, wannabe_addon)



### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.models.wannabe_addon import WannabeAddon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    wannabe_addon = openapi_client.WannabeAddon() # WannabeAddon | 

    try:
        api_response = api_instance.post_organisations_id_addons(id, wannabe_addon)
        print("The response of AllApi->post_organisations_id_addons:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->post_organisations_id_addons: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **wannabe_addon** | [**WannabeAddon**](WannabeAddon.md)|  | 

### Return type

[**Addon**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | provisionAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organisations_id_applications**
> Application post_organisations_id_applications(id, wannabe_application)



Creates an application. If you want to create a Github app, you need to replace the oauthApp field with what you will find here: https://github.com/CleverCloud/doc.clever-cloud.com/issues/179

### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.models.wannabe_application import WannabeApplication
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    wannabe_application = openapi_client.WannabeApplication() # WannabeApplication | 

    try:
        api_response = api_instance.post_organisations_id_applications(id, wannabe_application)
        print("The response of AllApi->post_organisations_id_applications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->post_organisations_id_applications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **wannabe_application** | [**WannabeApplication**](WannabeApplication.md)|  | 

### Return type

[**Application**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organisations_id_applications_app_id_addons**
> post_organisations_id_applications_app_id_addons(id, app_id, body)



### Example


```python
import openapi_client
from openapi_client.models.body import Body
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.post_organisations_id_applications_app_id_addons(id, app_id, body)
    except Exception as e:
        print("Exception when calling AllApi->post_organisations_id_applications_app_id_addons: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | linkAddonToApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organisations_id_applications_app_id_instances**
> post_organisations_id_applications_app_id_instances(id, app_id, commit=commit)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    commit = 'commit_example' # str |  (optional)

    try:
        api_instance.post_organisations_id_applications_app_id_instances(id, app_id, commit=commit)
    except Exception as e:
        print("Exception when calling AllApi->post_organisations_id_applications_app_id_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **commit** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | redeployApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organisations_id_consumers**
> post_organisations_id_consumers(id, wannabe_consumer)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_consumer import WannabeConsumer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    wannabe_consumer = openapi_client.WannabeConsumer() # WannabeConsumer | 

    try:
        api_instance.post_organisations_id_consumers(id, wannabe_consumer)
    except Exception as e:
        print("Exception when calling AllApi->post_organisations_id_consumers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **wannabe_consumer** | [**WannabeConsumer**](WannabeConsumer.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | createConsumer |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organisations_id_members**
> post_organisations_id_members(id, body, invitation_key=invitation_key)



### Example


```python
import openapi_client
from openapi_client.models.schema2 import Schema2
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    body = openapi_client.Schema2() # Schema2 | 
    invitation_key = 'invitation_key_example' # str |  (optional)

    try:
        api_instance.post_organisations_id_members(id, body, invitation_key=invitation_key)
    except Exception as e:
        print("Exception when calling AllApi->post_organisations_id_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **body** | **Schema2**|  | 
 **invitation_key** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addOrganisationMember |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_organisations_id_payments_billings**
> post_organisations_id_payments_billings(id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.post_organisations_id_payments_billings(id)
    except Exception as e:
        print("Exception when calling AllApi->post_organisations_id_payments_billings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | buyDrops |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_password_forgotten**
> post_password_forgotten(login=login, drop_tokens=drop_tokens, tester_pass=tester_pass)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    login = 'login_example' # str |  (optional)
    drop_tokens = 'drop_tokens_example' # str |  (optional)
    tester_pass = 'tester_pass_example' # str |  (optional)

    try:
        api_instance.post_password_forgotten(login=login, drop_tokens=drop_tokens, tester_pass=tester_pass)
    except Exception as e:
        print("Exception when calling AllApi->post_password_forgotten: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **str**|  | [optional] 
 **drop_tokens** | **str**|  | [optional] 
 **tester_pass** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | askForPasswordResetViaForm |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_password_forgotten_key**
> post_password_forgotten_key(key, var_pass=var_pass, pass2=pass2)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    key = 'key_example' # str | 
    var_pass = 'var_pass_example' # str |  (optional)
    pass2 = 'pass2_example' # str |  (optional)

    try:
        api_instance.post_password_forgotten_key(key, var_pass=var_pass, pass2=pass2)
    except Exception as e:
        print("Exception when calling AllApi->post_password_forgotten_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **var_pass** | **str**|  | [optional] 
 **pass2** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | resetPasswordForgotten |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_self_addons**
> post_self_addons(wannabe_addon)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_addon import WannabeAddon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    wannabe_addon = openapi_client.WannabeAddon() # WannabeAddon | 

    try:
        api_instance.post_self_addons(wannabe_addon)
    except Exception as e:
        print("Exception when calling AllApi->post_self_addons: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wannabe_addon** | [**WannabeAddon**](WannabeAddon.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | provisionAddon |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_self_applications**
> post_self_applications(wannabe_application)



Creates an application. If you want to create a Github app, you need to replace the oauthApp field with what you will find here: https://github.com/CleverCloud/doc.clever-cloud.com/issues/179

### Example


```python
import openapi_client
from openapi_client.models.wannabe_application import WannabeApplication
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    wannabe_application = openapi_client.WannabeApplication() # WannabeApplication | 

    try:
        api_instance.post_self_applications(wannabe_application)
    except Exception as e:
        print("Exception when calling AllApi->post_self_applications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wannabe_application** | [**WannabeApplication**](WannabeApplication.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_self_applications_app_id_addons**
> post_self_applications_app_id_addons(app_id, body)



### Example


```python
import openapi_client
from openapi_client.models.body import Body
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.post_self_applications_app_id_addons(app_id, body)
    except Exception as e:
        print("Exception when calling AllApi->post_self_applications_app_id_addons: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | linkAddonToApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_self_applications_app_id_instances**
> post_self_applications_app_id_instances(app_id, commit=commit)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    commit = 'commit_example' # str |  (optional)

    try:
        api_instance.post_self_applications_app_id_instances(app_id, commit=commit)
    except Exception as e:
        print("Exception when calling AllApi->post_self_applications_app_id_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **commit** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | redeployApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_self_consumers**
> post_self_consumers(wannabe_consumer)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_consumer import WannabeConsumer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    wannabe_consumer = openapi_client.WannabeConsumer() # WannabeConsumer | 

    try:
        api_instance.post_self_consumers(wannabe_consumer)
    except Exception as e:
        print("Exception when calling AllApi->post_self_consumers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wannabe_consumer** | [**WannabeConsumer**](WannabeConsumer.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | createConsumer |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_self_payments_billings**
> post_self_payments_billings()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.post_self_payments_billings()
    except Exception as e:
        print("Exception when calling AllApi->post_self_payments_billings: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | buyDrops |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_self_payments_methods**
> post_self_payments_methods()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.post_self_payments_methods()
    except Exception as e:
        print("Exception when calling AllApi->post_self_payments_methods: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addUserMethod |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_users**
> post_users(wannabe_user, invitation_key=invitation_key, addon_beta_invitation_key=addon_beta_invitation_key, email=email, var_pass=var_pass, url_next=url_next, terms=terms)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_user import WannabeUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    wannabe_user = openapi_client.WannabeUser() # WannabeUser | 
    invitation_key = 'invitation_key_example' # str |  (optional)
    addon_beta_invitation_key = 'addon_beta_invitation_key_example' # str |  (optional)
    email = 'email_example' # str |  (optional)
    var_pass = 'var_pass_example' # str |  (optional)
    url_next = 'url_next_example' # str |  (optional)
    terms = 'terms_example' # str |  (optional)

    try:
        api_instance.post_users(wannabe_user, invitation_key=invitation_key, addon_beta_invitation_key=addon_beta_invitation_key, email=email, var_pass=var_pass, url_next=url_next, terms=terms)
    except Exception as e:
        print("Exception when calling AllApi->post_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wannabe_user** | [**WannabeUser**](WannabeUser.md)|  | 
 **invitation_key** | **str**|  | [optional] 
 **addon_beta_invitation_key** | **str**|  | [optional] 
 **email** | **str**|  | [optional] 
 **var_pass** | **str**|  | [optional] 
 **url_next** | **str**|  | [optional] 
 **terms** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | createUser createUserFromForm |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_vendor_billing_owner_id**
> post_vendor_billing_owner_id(addon_id, wannabe_addon_billing)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_addon_billing import WannabeAddonBilling
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    addon_id = 'addon_id_example' # str | 
    wannabe_addon_billing = openapi_client.WannabeAddonBilling() # WannabeAddonBilling | 

    try:
        api_instance.post_vendor_billing_owner_id(addon_id, wannabe_addon_billing)
    except Exception as e:
        print("Exception when calling AllApi->post_vendor_billing_owner_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 
 **wannabe_addon_billing** | [**WannabeAddonBilling**](WannabeAddonBilling.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_addonproviders_provider_id_versions_get**
> products_addonproviders_provider_id_versions_get(provider_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    provider_id = 'provider_id_example' # str | 

    try:
        api_instance.products_addonproviders_provider_id_versions_get(provider_id)
    except Exception as e:
        print("Exception when calling AllApi->products_addonproviders_provider_id_versions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_mfa_kinds_get**
> products_mfa_kinds_get()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.products_mfa_kinds_get()
    except Exception as e:
        print("Exception when calling AllApi->products_mfa_kinds_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id**
> Organisation put_organisations_id(id, wannabe_organisation)



### Example


```python
import openapi_client
from openapi_client.models.organisation import Organisation
from openapi_client.models.wannabe_organisation import WannabeOrganisation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    wannabe_organisation = openapi_client.WannabeOrganisation() # WannabeOrganisation | 

    try:
        api_response = api_instance.put_organisations_id(id, wannabe_organisation)
        print("The response of AllApi->put_organisations_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **wannabe_organisation** | [**WannabeOrganisation**](WannabeOrganisation.md)|  | 

### Return type

[**Organisation**](Organisation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | editOrganisation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_addonproviders_provider_id**
> Provider put_organisations_id_addonproviders_provider_id(id, provider_id, wannabe_addon_provider)



### Example


```python
import openapi_client
from openapi_client.models.provider import Provider
from openapi_client.models.wannabe_addon_provider import WannabeAddonProvider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 
    wannabe_addon_provider = openapi_client.WannabeAddonProvider() # WannabeAddonProvider | 

    try:
        api_response = api_instance.put_organisations_id_addonproviders_provider_id(id, provider_id, wannabe_addon_provider)
        print("The response of AllApi->put_organisations_id_addonproviders_provider_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_addonproviders_provider_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **provider_id** | **str**|  | 
 **wannabe_addon_provider** | [**WannabeAddonProvider**](WannabeAddonProvider.md)|  | 

### Return type

[**Provider**](Provider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | updateProviderInfos |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_addonproviders_provider_id_plans_plan_id**
> Plan put_organisations_id_addonproviders_provider_id_plans_plan_id(id, provider_id, plan_id, wannabe_plan)



### Example


```python
import openapi_client
from openapi_client.models.plan import Plan
from openapi_client.models.wannabe_plan import WannabePlan
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 
    plan_id = 'plan_id_example' # str | 
    wannabe_plan = openapi_client.WannabePlan() # WannabePlan | 

    try:
        api_response = api_instance.put_organisations_id_addonproviders_provider_id_plans_plan_id(id, provider_id, plan_id, wannabe_plan)
        print("The response of AllApi->put_organisations_id_addonproviders_provider_id_plans_plan_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_addonproviders_provider_id_plans_plan_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **provider_id** | **str**|  | 
 **plan_id** | **str**|  | 
 **wannabe_plan** | [**WannabePlan**](WannabePlan.md)|  | 

### Return type

[**Plan**](Plan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | editProviderPlan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name**
> put_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name(id, feature_name, provider_id, plan_id, wannabe_plan_feature)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_plan_feature import WannabePlanFeature
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    feature_name = 'feature_name_example' # str | 
    provider_id = 'provider_id_example' # str | 
    plan_id = 'plan_id_example' # str | 
    wannabe_plan_feature = openapi_client.WannabePlanFeature() # WannabePlanFeature | 

    try:
        api_instance.put_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name(id, feature_name, provider_id, plan_id, wannabe_plan_feature)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **feature_name** | **str**|  | 
 **provider_id** | **str**|  | 
 **plan_id** | **str**|  | 
 **wannabe_plan_feature** | [**WannabePlanFeature**](WannabePlanFeature.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | editProviderPlanFeature |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_addons_addon_id**
> Addon put_organisations_id_addons_addon_id(id, addon_id, wannabe_addon)



### Example


```python
import openapi_client
from openapi_client.models.addon import Addon
from openapi_client.models.wannabe_addon import WannabeAddon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 
    wannabe_addon = openapi_client.WannabeAddon() # WannabeAddon | 

    try:
        api_response = api_instance.put_organisations_id_addons_addon_id(id, addon_id, wannabe_addon)
        print("The response of AllApi->put_organisations_id_addons_addon_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_addons_addon_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **addon_id** | **str**|  | 
 **wannabe_addon** | [**WannabeAddon**](WannabeAddon.md)|  | 

### Return type

[**Addon**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update addon information |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_addons_addon_id_tags_tag**
> put_organisations_id_addons_addon_id_tags_tag(id, tag, addon_id, body)



### Example


```python
import openapi_client
from openapi_client.models.body import Body
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    tag = 'tag_example' # str | 
    addon_id = 'addon_id_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.put_organisations_id_addons_addon_id_tags_tag(id, tag, addon_id, body)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_addons_addon_id_tags_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **tag** | **str**|  | 
 **addon_id** | **str**|  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addAddonTag |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_applications_app_id**
> Application put_organisations_id_applications_app_id(id, app_id, wannabe_application)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.models.wannabe_application import WannabeApplication
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    wannabe_application = openapi_client.WannabeApplication() # WannabeApplication | 

    try:
        api_response = api_instance.put_organisations_id_applications_app_id(id, app_id, wannabe_application)
        print("The response of AllApi->put_organisations_id_applications_app_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_applications_app_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **wannabe_application** | [**WannabeApplication**](WannabeApplication.md)|  | 

### Return type

[**Application**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | editApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_applications_app_id_dependencies_dependency_id**
> put_organisations_id_applications_app_id_dependencies_dependency_id(dependency_id, app_id, id, body)



### Example


```python
import openapi_client
from openapi_client.models.body import Body
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    dependency_id = 'dependency_id_example' # str | 
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.put_organisations_id_applications_app_id_dependencies_dependency_id(dependency_id, app_id, id, body)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_applications_app_id_dependencies_dependency_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dependency_id** | **str**|  | 
 **app_id** | **str**|  | 
 **id** | **str**|  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addApplicationDependency |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_applications_app_id_env**
> ListEnv put_organisations_id_applications_app_id_env(id, app_id, wannabe_env)



### Example


```python
import openapi_client
from openapi_client.models.list_env import ListEnv
from openapi_client.models.wannabe_env import WannabeEnv
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    wannabe_env = openapi_client.WannabeEnv() # WannabeEnv | 

    try:
        api_response = api_instance.put_organisations_id_applications_app_id_env(id, app_id, wannabe_env)
        print("The response of AllApi->put_organisations_id_applications_app_id_env:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_applications_app_id_env: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **wannabe_env** | [**WannabeEnv**](WannabeEnv.md)|  | 

### Return type

[**ListEnv**](ListEnv.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | editApplicationEnvironment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_applications_app_id_env_env_name**
> ListEnv put_organisations_id_applications_app_id_env_env_name(id, app_id, env_name, wannabe_env)



### Example


```python
import openapi_client
from openapi_client.models.list_env import ListEnv
from openapi_client.models.wannabe_env import WannabeEnv
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    env_name = 'env_name_example' # str | 
    wannabe_env = openapi_client.WannabeEnv() # WannabeEnv | 

    try:
        api_response = api_instance.put_organisations_id_applications_app_id_env_env_name(id, app_id, env_name, wannabe_env)
        print("The response of AllApi->put_organisations_id_applications_app_id_env_env_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_applications_app_id_env_env_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **env_name** | **str**|  | 
 **wannabe_env** | [**WannabeEnv**](WannabeEnv.md)|  | 

### Return type

[**ListEnv**](ListEnv.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | editApplicationEnv |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_applications_app_id_tags_tag**
> put_organisations_id_applications_app_id_tags_tag(id, app_id, tag, body)



### Example


```python
import openapi_client
from openapi_client.models.body import Body
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    tag = 'tag_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.put_organisations_id_applications_app_id_tags_tag(id, app_id, tag, body)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_applications_app_id_tags_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **tag** | **str**|  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addApplicationTag |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_applications_app_id_vhosts_domain**
> put_organisations_id_applications_app_id_vhosts_domain(id, app_id, domain, vhost)



### Example


```python
import openapi_client
from openapi_client.models.vhost import Vhost
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    domain = 'domain_example' # str | 
    vhost = openapi_client.Vhost() # Vhost | 

    try:
        api_instance.put_organisations_id_applications_app_id_vhosts_domain(id, app_id, domain, vhost)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_applications_app_id_vhosts_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **domain** | **str**|  | 
 **vhost** | [**Vhost**](Vhost.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addVhost |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_applications_app_id_vhosts_favourite**
> put_organisations_id_applications_app_id_vhosts_favourite(id, app_id, vhost)



### Example


```python
import openapi_client
from openapi_client.models.vhost import Vhost
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    vhost = openapi_client.Vhost() # Vhost | 

    try:
        api_instance.put_organisations_id_applications_app_id_vhosts_favourite(id, app_id, vhost)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_applications_app_id_vhosts_favourite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **app_id** | **str**|  | 
 **vhost** | [**Vhost**](Vhost.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | markFavouriteVhost |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_avatar**
> put_organisations_id_avatar(id)



If you want to upload an image from your computer, send the image in the body of the request without anything else.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.put_organisations_id_avatar(id)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_avatar: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | setOrgaAvatar setOrgaAvatarFromSource |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_consumers_key**
> put_organisations_id_consumers_key(id, key, wannabe_consumer)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_consumer import WannabeConsumer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    key = 'key_example' # str | 
    wannabe_consumer = openapi_client.WannabeConsumer() # WannabeConsumer | 

    try:
        api_instance.put_organisations_id_consumers_key(id, key, wannabe_consumer)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_consumers_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **key** | **str**|  | 
 **wannabe_consumer** | [**WannabeConsumer**](WannabeConsumer.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PUT the same data as in POST. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_members_user_id**
> put_organisations_id_members_user_id(id, user_id, body)



### Example


```python
import openapi_client
from openapi_client.models.schema2 import Schema2
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    user_id = 'user_id_example' # str | 
    body = openapi_client.Schema2() # Schema2 | 

    try:
        api_instance.put_organisations_id_members_user_id(id, user_id, body)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_members_user_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **user_id** | **str**|  | 
 **body** | **Schema2**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | editOrganisationMember |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_organisations_id_payments_billings_bid**
> put_organisations_id_payments_billings_bid(id, bid)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    id = 'id_example' # str | 
    bid = 'bid_example' # str | 

    try:
        api_instance.put_organisations_id_payments_billings_bid(id, bid)
    except Exception as e:
        print("Exception when calling AllApi->put_organisations_id_payments_billings_bid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **bid** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | choosePaymentProvider |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self**
> put_self(wannabe_user)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_user import WannabeUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    wannabe_user = openapi_client.WannabeUser() # WannabeUser | 

    try:
        api_instance.put_self(wannabe_user)
    except Exception as e:
        print("Exception when calling AllApi->put_self: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wannabe_user** | [**WannabeUser**](WannabeUser.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | editUser |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_addons_addon_id**
> put_self_addons_addon_id(addon_id, wannabe_addon)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_addon import WannabeAddon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    addon_id = 'addon_id_example' # str | 
    wannabe_addon = openapi_client.WannabeAddon() # WannabeAddon | 

    try:
        api_instance.put_self_addons_addon_id(addon_id, wannabe_addon)
    except Exception as e:
        print("Exception when calling AllApi->put_self_addons_addon_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 
 **wannabe_addon** | [**WannabeAddon**](WannabeAddon.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update addon informations |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_addons_addon_id_plan**
> put_self_addons_addon_id_plan(addon_id, wannabe_plan)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_plan import WannabePlan
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    addon_id = 'addon_id_example' # str | 
    wannabe_plan = openapi_client.WannabePlan() # WannabePlan | 

    try:
        api_instance.put_self_addons_addon_id_plan(addon_id, wannabe_plan)
    except Exception as e:
        print("Exception when calling AllApi->put_self_addons_addon_id_plan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 
 **wannabe_plan** | [**WannabePlan**](WannabePlan.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update plan of an add-on. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_addons_addon_id_tags_tag**
> put_self_addons_addon_id_tags_tag(tag, addon_id, body)



### Example


```python
import openapi_client
from openapi_client.models.body import Body
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    tag = 'tag_example' # str | 
    addon_id = 'addon_id_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.put_self_addons_addon_id_tags_tag(tag, addon_id, body)
    except Exception as e:
        print("Exception when calling AllApi->put_self_addons_addon_id_tags_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **str**|  | 
 **addon_id** | **str**|  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addAddonTag |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_applications_app_id**
> put_self_applications_app_id(app_id, wannabe_application)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_application import WannabeApplication
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    wannabe_application = openapi_client.WannabeApplication() # WannabeApplication | 

    try:
        api_instance.put_self_applications_app_id(app_id, wannabe_application)
    except Exception as e:
        print("Exception when calling AllApi->put_self_applications_app_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **wannabe_application** | [**WannabeApplication**](WannabeApplication.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | editApplication |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_applications_app_id_env**
> put_self_applications_app_id_env(app_id, wannabe_env)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_env import WannabeEnv
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    wannabe_env = openapi_client.WannabeEnv() # WannabeEnv | 

    try:
        api_instance.put_self_applications_app_id_env(app_id, wannabe_env)
    except Exception as e:
        print("Exception when calling AllApi->put_self_applications_app_id_env: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **wannabe_env** | [**WannabeEnv**](WannabeEnv.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | editApplicationEnvironment |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_applications_app_id_env_env_name**
> put_self_applications_app_id_env_env_name(app_id, env_name, wannabe_env)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_env import WannabeEnv
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    env_name = 'env_name_example' # str | 
    wannabe_env = openapi_client.WannabeEnv() # WannabeEnv | 

    try:
        api_instance.put_self_applications_app_id_env_env_name(app_id, env_name, wannabe_env)
    except Exception as e:
        print("Exception when calling AllApi->put_self_applications_app_id_env_env_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **env_name** | **str**|  | 
 **wannabe_env** | [**WannabeEnv**](WannabeEnv.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | editApplicationEnv |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_applications_app_id_tags_tag**
> put_self_applications_app_id_tags_tag(app_id, tag, body)



### Example


```python
import openapi_client
from openapi_client.models.body import Body
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    tag = 'tag_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.put_self_applications_app_id_tags_tag(app_id, tag, body)
    except Exception as e:
        print("Exception when calling AllApi->put_self_applications_app_id_tags_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **tag** | **str**|  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addApplicationTag |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_applications_app_id_vhosts_domain**
> put_self_applications_app_id_vhosts_domain(app_id, domain, vhost)



### Example


```python
import openapi_client
from openapi_client.models.vhost import Vhost
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    domain = 'domain_example' # str | 
    vhost = openapi_client.Vhost() # Vhost | 

    try:
        api_instance.put_self_applications_app_id_vhosts_domain(app_id, domain, vhost)
    except Exception as e:
        print("Exception when calling AllApi->put_self_applications_app_id_vhosts_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **domain** | **str**|  | 
 **vhost** | [**Vhost**](Vhost.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addVhost |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_applications_app_id_vhosts_favourite**
> put_self_applications_app_id_vhosts_favourite(app_id, vhost)



### Example


```python
import openapi_client
from openapi_client.models.vhost import Vhost
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    vhost = openapi_client.Vhost() # Vhost | 

    try:
        api_instance.put_self_applications_app_id_vhosts_favourite(app_id, vhost)
    except Exception as e:
        print("Exception when calling AllApi->put_self_applications_app_id_vhosts_favourite: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **vhost** | [**Vhost**](Vhost.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | markFavouriteVhost |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_avatar**
> put_self_avatar(avatar)



### Example


```python
import openapi_client
from openapi_client.models.avatar import Avatar
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    avatar = openapi_client.Avatar() # Avatar | 

    try:
        api_instance.put_self_avatar(avatar)
    except Exception as e:
        print("Exception when calling AllApi->put_self_avatar: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **avatar** | [**Avatar**](Avatar.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | setUserAvatar setUserAvatarFromSource |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_change_password**
> ChangePassword put_self_change_password()



### Example


```python
import openapi_client
from openapi_client.models.change_password import ChangePassword
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_response = api_instance.put_self_change_password()
        print("The response of AllApi->put_self_change_password:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->put_self_change_password: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ChangePassword**](ChangePassword.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | changeUserPassword |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_consumers_key**
> put_self_consumers_key(key, wannabe_consumer)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_consumer import WannabeConsumer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    key = 'key_example' # str | 
    wannabe_consumer = openapi_client.WannabeConsumer() # WannabeConsumer | 

    try:
        api_instance.put_self_consumers_key(key, wannabe_consumer)
    except Exception as e:
        print("Exception when calling AllApi->put_self_consumers_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **wannabe_consumer** | [**WannabeConsumer**](WannabeConsumer.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | PUT same consumer data as in POST. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_emails_email**
> put_self_emails_email(email, body)



### Example


```python
import openapi_client
from openapi_client.models.body import Body
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    email = 'email_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.put_self_emails_email(email, body)
    except Exception as e:
        print("Exception when calling AllApi->put_self_emails_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**|  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addEmailAddress |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_keys_key**
> put_self_keys_key(key, body)



### Example


```python
import openapi_client
from openapi_client.models.body import Body
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    key = 'key_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.put_self_keys_key(key, body)
    except Exception as e:
        print("Exception when calling AllApi->put_self_keys_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 
 **body** | [**Body**](Body.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | addSshKey |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_self_payments_billings_bid**
> put_self_payments_billings_bid(bid)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    bid = 'bid_example' # str | 

    try:
        api_instance.put_self_payments_billings_bid(bid)
    except Exception as e:
        print("Exception when calling AllApi->put_self_payments_billings_bid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bid** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | choosePaymentProvider |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_vendor_apps_addon_id**
> put_vendor_apps_addon_id(addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.put_vendor_apps_addon_id(addon_id)
    except Exception as e:
        print("Exception when calling AllApi->put_vendor_apps_addon_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | editApplicationConfiguration |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_addons_preorders_post**
> self_addons_preorders_post(wannabe_addon)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_addon import WannabeAddon
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    wannabe_addon = openapi_client.WannabeAddon() # WannabeAddon | 

    try:
        api_instance.self_addons_preorders_post(wannabe_addon)
    except Exception as e:
        print("Exception when calling AllApi->self_addons_preorders_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wannabe_addon** | [**WannabeAddon**](WannabeAddon.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_applications_app_id_branch_put**
> self_applications_app_id_branch_put(app_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_instance.self_applications_app_id_branch_put(app_id)
    except Exception as e:
        print("Exception when calling AllApi->self_applications_app_id_branch_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_applications_app_id_branches_get**
> self_applications_app_id_branches_get(app_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_instance.self_applications_app_id_branches_get(app_id)
    except Exception as e:
        print("Exception when calling AllApi->self_applications_app_id_branches_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_applications_app_id_buildflavor_put**
> self_applications_app_id_buildflavor_put(app_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_instance.self_applications_app_id_buildflavor_put(app_id)
    except Exception as e:
        print("Exception when calling AllApi->self_applications_app_id_buildflavor_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_applications_app_id_dependencies_env_get**
> List[LinkedAppEnv] self_applications_app_id_dependencies_env_get(app_id)



### Example


```python
import openapi_client
from openapi_client.models.linked_app_env import LinkedAppEnv
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.self_applications_app_id_dependencies_env_get(app_id)
        print("The response of AllApi->self_applications_app_id_dependencies_env_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->self_applications_app_id_dependencies_env_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

[**List[LinkedAppEnv]**](LinkedAppEnv.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get env variables defined by application dependencies |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_applications_app_id_deployments_deployment_id_get**
> self_applications_app_id_deployments_deployment_id_get(app_id, deployment_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 
    deployment_id = 'deployment_id_example' # str | 

    try:
        api_instance.self_applications_app_id_deployments_deployment_id_get(app_id, deployment_id)
    except Exception as e:
        print("Exception when calling AllApi->self_applications_app_id_deployments_deployment_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 
 **deployment_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_applications_app_id_exposed_env_get**
> self_applications_app_id_exposed_env_get(app_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_instance.self_applications_app_id_exposed_env_get(app_id)
    except Exception as e:
        print("Exception when calling AllApi->self_applications_app_id_exposed_env_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_applications_app_id_exposed_env_put**
> self_applications_app_id_exposed_env_put(app_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | 

    try:
        api_instance.self_applications_app_id_exposed_env_put(app_id)
    except Exception as e:
        print("Exception when calling AllApi->self_applications_app_id_exposed_env_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_applications_app_id_instances_instance_id_get**
> self_applications_app_id_instances_instance_id_get(instance_id, app_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    instance_id = 'instance_id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_instance.self_applications_app_id_instances_instance_id_get(instance_id, app_id)
    except Exception as e:
        print("Exception when calling AllApi->self_applications_app_id_instances_instance_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance_id** | **str**|  | 
 **app_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_cli_tokens_get**
> self_cli_tokens_get(cli_token=cli_token)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    cli_token = 'cli_token_example' # str |  (optional)

    try:
        api_instance.self_cli_tokens_get(cli_token=cli_token)
    except Exception as e:
        print("Exception when calling AllApi->self_cli_tokens_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cli_token** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_mfa_kind_backupcodes_get**
> self_mfa_kind_backupcodes_get(kind)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    kind = 'kind_example' # str | 

    try:
        api_instance.self_mfa_kind_backupcodes_get(kind)
    except Exception as e:
        print("Exception when calling AllApi->self_mfa_kind_backupcodes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kind** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_mfa_kind_confirmation_post**
> self_mfa_kind_confirmation_post(kind)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    kind = 'kind_example' # str | 

    try:
        api_instance.self_mfa_kind_confirmation_post(kind)
    except Exception as e:
        print("Exception when calling AllApi->self_mfa_kind_confirmation_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kind** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_mfa_kind_delete**
> self_mfa_kind_delete(kind)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    kind = 'kind_example' # str | 

    try:
        api_instance.self_mfa_kind_delete(kind)
    except Exception as e:
        print("Exception when calling AllApi->self_mfa_kind_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kind** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_mfa_kind_post**
> self_mfa_kind_post(kind)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    kind = 'kind_example' # str | 

    try:
        api_instance.self_mfa_kind_post(kind)
    except Exception as e:
        print("Exception when calling AllApi->self_mfa_kind_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kind** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_mfa_kind_put**
> self_mfa_kind_put(kind)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    kind = 'kind_example' # str | 

    try:
        api_instance.self_mfa_kind_put(kind)
    except Exception as e:
        print("Exception when calling AllApi->self_mfa_kind_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kind** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_payments_methods_default_get**
> self_payments_methods_default_get()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.self_payments_methods_default_get()
    except Exception as e:
        print("Exception when calling AllApi->self_payments_methods_default_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_payments_methods_default_put**
> self_payments_methods_default_put()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.self_payments_methods_default_put()
    except Exception as e:
        print("Exception when calling AllApi->self_payments_methods_default_put: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_payments_monthlyinvoice_get**
> self_payments_monthlyinvoice_get()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.self_payments_monthlyinvoice_get()
    except Exception as e:
        print("Exception when calling AllApi->self_payments_monthlyinvoice_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_payments_monthlyinvoice_maxcredit_put**
> self_payments_monthlyinvoice_maxcredit_put()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.self_payments_monthlyinvoice_maxcredit_put()
    except Exception as e:
        print("Exception when calling AllApi->self_payments_monthlyinvoice_maxcredit_put: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_payments_recurring_get**
> self_payments_recurring_get()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.self_payments_recurring_get()
    except Exception as e:
        print("Exception when calling AllApi->self_payments_recurring_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **self_payments_tokens_stripe_get**
> self_payments_tokens_stripe_get()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.self_payments_tokens_stripe_get()
    except Exception as e:
        print("Exception when calling AllApi->self_payments_tokens_stripe_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_config_provider_env**
> List[object] update_config_provider_env(configuration_provider_id, request_body)

Update provider's addon environment

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    configuration_provider_id = 'configuration_provider_id_example' # str | Automatically added
    request_body = None # List[object] | 

    try:
        # Update provider's addon environment
        api_response = api_instance.update_config_provider_env(configuration_provider_id, request_body)
        print("The response of AllApi->update_config_provider_env:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AllApi->update_config_provider_env: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configuration_provider_id** | **str**| Automatically added | 
 **request_body** | [**List[object]**](object.md)|  | 

### Return type

**List[object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | updated config providers environment variables |  -  |
**401** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_logs_app_id_drains_get**
> v3_logs_app_id_drains_get(app_id)



Fetch the logs drains for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.v3_logs_app_id_drains_get(app_id)
    except Exception as e:
        print("Exception when calling AllApi->v3_logs_app_id_drains_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_logs_app_id_drains_id_or_url_delete**
> v3_logs_app_id_drains_id_or_url_delete(app_id)



Delete the logs drain by id or url for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.v3_logs_app_id_drains_id_or_url_delete(app_id)
    except Exception as e:
        print("Exception when calling AllApi->v3_logs_app_id_drains_id_or_url_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_logs_app_id_drains_id_or_url_get**
> v3_logs_app_id_drains_id_or_url_get(app_id)



Fetch the logs drain by id or url for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.v3_logs_app_id_drains_id_or_url_get(app_id)
    except Exception as e:
        print("Exception when calling AllApi->v3_logs_app_id_drains_id_or_url_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_logs_app_id_drains_post**
> v3_logs_app_id_drains_post(app_id)



Add a log drain for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.v3_logs_app_id_drains_post(app_id)
    except Exception as e:
        print("Exception when calling AllApi->v3_logs_app_id_drains_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_logs_app_id_get**
> v3_logs_app_id_get(app_id)



Fetch the logs for a given application

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.v3_logs_app_id_get(app_id)
    except Exception as e:
        print("Exception when calling AllApi->v3_logs_app_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_logs_app_id_logs_chunked_get**
> v3_logs_app_id_logs_chunked_get(app_id)



Retrieve logs as they come through a chunked, never-ending response

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.v3_logs_app_id_logs_chunked_get(app_id)
    except Exception as e:
        print("Exception when calling AllApi->v3_logs_app_id_logs_chunked_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v3_logs_app_id_logs_socket_get**
> v3_logs_app_id_logs_socket_get(app_id)



Retrieve logs as they come through a websocket connection. To have authorization, you have to send a `{ \"message_type\": \"oauth\", \"authorization\": \"oauth authorization string\" }` message

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    app_id = 'app_id_example' # str | Automatically added

    try:
        api_instance.v3_logs_app_id_logs_socket_get(app_id)
    except Exception as e:
        print("Exception when calling AllApi->v3_logs_app_id_logs_socket_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Automatically added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | &lt;No description&gt; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vendor_addons_post**
> vendor_addons_post()



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)

    try:
        api_instance.vendor_addons_post()
    except Exception as e:
        print("Exception when calling AllApi->vendor_addons_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vendor_apps_addon_id_logscollector_get**
> vendor_apps_addon_id_logscollector_get(addon_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.vendor_apps_addon_id_logscollector_get(addon_id)
    except Exception as e:
        print("Exception when calling AllApi->vendor_apps_addon_id_logscollector_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vendor_apps_addon_id_migration_callback_put**
> vendor_apps_addon_id_migration_callback_put(addon_id, plan_id=plan_id, region=region)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AllApi(api_client)
    addon_id = 'addon_id_example' # str | 
    plan_id = 'plan_id_example' # str |  (optional)
    region = 'region_example' # str |  (optional)

    try:
        api_instance.vendor_apps_addon_id_migration_callback_put(addon_id, plan_id=plan_id, region=region)
    except Exception as e:
        print("Exception when calling AllApi->vendor_apps_addon_id_migration_callback_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_id** | **str**|  | 
 **plan_id** | **str**|  | [optional] 
 **region** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status 200 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

