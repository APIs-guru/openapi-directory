# openapi_client.OrganisationsApi

All URIs are relative to *https://api.clever-cloud.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_group_0**](OrganisationsApi.md#create_network_group_0) | **POST** /v4/networkgroups/organisations/{ownerId}/networkgroups | Create Network Group
[**create_network_group_external_peer_0**](OrganisationsApi.md#create_network_group_external_peer_0) | **POST** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/external-peers | Add external peer
[**create_network_group_member_0**](OrganisationsApi.md#create_network_group_member_0) | **POST** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members | Add member
[**delete_network_group_0**](OrganisationsApi.md#delete_network_group_0) | **DELETE** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId} | Delete Network Group
[**delete_network_group_external_peer_0**](OrganisationsApi.md#delete_network_group_external_peer_0) | **DELETE** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/external-peers/{peerId} | Remove external peer
[**delete_network_group_member_0**](OrganisationsApi.md#delete_network_group_member_0) | **DELETE** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members/{memberId} | Remove member
[**delete_network_group_peer_0**](OrganisationsApi.md#delete_network_group_peer_0) | **DELETE** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId} | Remove peer
[**delete_organisations_id_0**](OrganisationsApi.md#delete_organisations_id_0) | **DELETE** /organisations/{id} | 
[**delete_organisations_id_addonproviders_provider_id_features_feature_id_0**](OrganisationsApi.md#delete_organisations_id_addonproviders_provider_id_features_feature_id_0) | **DELETE** /organisations/{id}/addonproviders/{providerId}/features/{featureId} | 
[**delete_organisations_id_addonproviders_provider_id_plans_plan_id_0**](OrganisationsApi.md#delete_organisations_id_addonproviders_provider_id_plans_plan_id_0) | **DELETE** /organisations/{id}/addonproviders/{providerId}/plans/{planId} | 
[**delete_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name_0**](OrganisationsApi.md#delete_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name_0) | **DELETE** /organisations/{id}/addonproviders/{providerId}/plans/{planId}/features/{featureName} | 
[**delete_organisations_id_addons_addon_id_1**](OrganisationsApi.md#delete_organisations_id_addons_addon_id_1) | **DELETE** /organisations/{id}/addons/{addonId} | 
[**delete_organisations_id_addons_addon_id_tags_tag_1**](OrganisationsApi.md#delete_organisations_id_addons_addon_id_tags_tag_1) | **DELETE** /organisations/{id}/addons/{addonId}/tags/{tag} | 
[**delete_organisations_id_applications_app_id_1**](OrganisationsApi.md#delete_organisations_id_applications_app_id_1) | **DELETE** /organisations/{id}/applications/{appId} | 
[**delete_organisations_id_applications_app_id_addons_addon_id_2**](OrganisationsApi.md#delete_organisations_id_applications_app_id_addons_addon_id_2) | **DELETE** /organisations/{id}/applications/{appId}/addons/{addonId} | 
[**delete_organisations_id_applications_app_id_dependencies_dependency_id_1**](OrganisationsApi.md#delete_organisations_id_applications_app_id_dependencies_dependency_id_1) | **DELETE** /organisations/{id}/applications/{appId}/dependencies/{dependencyId} | 
[**delete_organisations_id_applications_app_id_deployments_deployment_id_instances_1**](OrganisationsApi.md#delete_organisations_id_applications_app_id_deployments_deployment_id_instances_1) | **DELETE** /organisations/{id}/applications/{appId}/deployments/{deploymentId}/instances | 
[**delete_organisations_id_applications_app_id_env_env_name_1**](OrganisationsApi.md#delete_organisations_id_applications_app_id_env_env_name_1) | **DELETE** /organisations/{id}/applications/{appId}/env/{envName} | 
[**delete_organisations_id_applications_app_id_instances_1**](OrganisationsApi.md#delete_organisations_id_applications_app_id_instances_1) | **DELETE** /organisations/{id}/applications/{appId}/instances | 
[**delete_organisations_id_applications_app_id_tags_tag_1**](OrganisationsApi.md#delete_organisations_id_applications_app_id_tags_tag_1) | **DELETE** /organisations/{id}/applications/{appId}/tags/{tag} | 
[**delete_organisations_id_applications_app_id_vhosts_domain_1**](OrganisationsApi.md#delete_organisations_id_applications_app_id_vhosts_domain_1) | **DELETE** /organisations/{id}/applications/{appId}/vhosts/{domain} | 
[**delete_organisations_id_applications_app_id_vhosts_favourite_1**](OrganisationsApi.md#delete_organisations_id_applications_app_id_vhosts_favourite_1) | **DELETE** /organisations/{id}/applications/{appId}/vhosts/favourite | 
[**delete_organisations_id_consumers_key_0**](OrganisationsApi.md#delete_organisations_id_consumers_key_0) | **DELETE** /organisations/{id}/consumers/{key} | 
[**delete_organisations_id_members_user_id_0**](OrganisationsApi.md#delete_organisations_id_members_user_id_0) | **DELETE** /organisations/{id}/members/{userId} | 
[**delete_organisations_id_payments_billings_bid_0**](OrganisationsApi.md#delete_organisations_id_payments_billings_bid_0) | **DELETE** /organisations/{id}/payments/billings/{bid} | 
[**delete_organisations_id_payments_recurring_0**](OrganisationsApi.md#delete_organisations_id_payments_recurring_0) | **DELETE** /organisations/{id}/payments/recurring | 
[**get_network_group_0**](OrganisationsApi.md#get_network_group_0) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId} | Get Network Group
[**get_network_group_member_0**](OrganisationsApi.md#get_network_group_member_0) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members/{memberId} | Get member
[**get_network_group_peer_0**](OrganisationsApi.md#get_network_group_peer_0) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId} | Get peer
[**get_network_group_stream_0**](OrganisationsApi.md#get_network_group_stream_0) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/stream | Network Group SSE
[**get_network_group_wire_guard_configuration_0**](OrganisationsApi.md#get_network_group_wire_guard_configuration_0) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}/wireguard/configuration | Get WireGuard® configuration
[**get_network_group_wire_guard_configuration_stream_0**](OrganisationsApi.md#get_network_group_wire_guard_configuration_stream_0) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}/wireguard/configuration/stream | Get WireGuard® configuration
[**get_organisations_0**](OrganisationsApi.md#get_organisations_0) | **GET** /organisations | 
[**get_organisations_id_0**](OrganisationsApi.md#get_organisations_id_0) | **GET** /organisations/{id} | 
[**get_organisations_id_addonproviders_0**](OrganisationsApi.md#get_organisations_id_addonproviders_0) | **GET** /organisations/{id}/addonproviders | 
[**get_organisations_id_addonproviders_provider_id_0**](OrganisationsApi.md#get_organisations_id_addonproviders_provider_id_0) | **GET** /organisations/{id}/addonproviders/{providerId} | 
[**get_organisations_id_addonproviders_provider_id_features_0**](OrganisationsApi.md#get_organisations_id_addonproviders_provider_id_features_0) | **GET** /organisations/{id}/addonproviders/{providerId}/features | 
[**get_organisations_id_addonproviders_provider_id_plans_0**](OrganisationsApi.md#get_organisations_id_addonproviders_provider_id_plans_0) | **GET** /organisations/{id}/addonproviders/{providerId}/plans | 
[**get_organisations_id_addonproviders_provider_id_plans_plan_id_0**](OrganisationsApi.md#get_organisations_id_addonproviders_provider_id_plans_plan_id_0) | **GET** /organisations/{id}/addonproviders/{providerId}/plans/{planId} | 
[**get_organisations_id_addonproviders_provider_id_tags_0**](OrganisationsApi.md#get_organisations_id_addonproviders_provider_id_tags_0) | **GET** /organisations/{id}/addonproviders/{providerId}/tags | 
[**get_organisations_id_addons_1**](OrganisationsApi.md#get_organisations_id_addons_1) | **GET** /organisations/{id}/addons | 
[**get_organisations_id_addons_addon_id_1**](OrganisationsApi.md#get_organisations_id_addons_addon_id_1) | **GET** /organisations/{id}/addons/{addonId} | 
[**get_organisations_id_addons_addon_id_applications_2**](OrganisationsApi.md#get_organisations_id_addons_addon_id_applications_2) | **GET** /organisations/{id}/addons/{addonId}/applications | 
[**get_organisations_id_addons_addon_id_env_1**](OrganisationsApi.md#get_organisations_id_addons_addon_id_env_1) | **GET** /organisations/{id}/addons/{addonId}/env | 
[**get_organisations_id_addons_addon_id_sso_0**](OrganisationsApi.md#get_organisations_id_addons_addon_id_sso_0) | **GET** /organisations/{id}/addonproviders/{providerId}/sso | 
[**get_organisations_id_addons_addon_id_tags_1**](OrganisationsApi.md#get_organisations_id_addons_addon_id_tags_1) | **GET** /organisations/{id}/addons/{addonId}/tags | 
[**get_organisations_id_applications_1**](OrganisationsApi.md#get_organisations_id_applications_1) | **GET** /organisations/{id}/applications | 
[**get_organisations_id_applications_app_id_1**](OrganisationsApi.md#get_organisations_id_applications_app_id_1) | **GET** /organisations/{id}/applications/{appId} | 
[**get_organisations_id_applications_app_id_addons_2**](OrganisationsApi.md#get_organisations_id_applications_app_id_addons_2) | **GET** /organisations/{id}/applications/{appId}/addons | 
[**get_organisations_id_applications_app_id_addons_env_2**](OrganisationsApi.md#get_organisations_id_applications_app_id_addons_env_2) | **GET** /organisations/{id}/applications/{appId}/addons/env | 
[**get_organisations_id_applications_app_id_dependencies_1**](OrganisationsApi.md#get_organisations_id_applications_app_id_dependencies_1) | **GET** /organisations/{id}/applications/{appId}/dependencies | 
[**get_organisations_id_applications_app_id_dependents_1**](OrganisationsApi.md#get_organisations_id_applications_app_id_dependents_1) | **GET** /organisations/{id}/applications/{appId}/dependents | 
[**get_organisations_id_applications_app_id_deployments_1**](OrganisationsApi.md#get_organisations_id_applications_app_id_deployments_1) | **GET** /organisations/{id}/applications/{appId}/deployments | 
[**get_organisations_id_applications_app_id_env_1**](OrganisationsApi.md#get_organisations_id_applications_app_id_env_1) | **GET** /organisations/{id}/applications/{appId}/env | 
[**get_organisations_id_applications_app_id_instances_1**](OrganisationsApi.md#get_organisations_id_applications_app_id_instances_1) | **GET** /organisations/{id}/applications/{appId}/instances | 
[**get_organisations_id_applications_app_id_tags_1**](OrganisationsApi.md#get_organisations_id_applications_app_id_tags_1) | **GET** /organisations/{id}/applications/{appId}/tags | 
[**get_organisations_id_applications_app_id_vhosts_1**](OrganisationsApi.md#get_organisations_id_applications_app_id_vhosts_1) | **GET** /organisations/{id}/applications/{appId}/vhosts | 
[**get_organisations_id_applications_app_id_vhosts_favourite_1**](OrganisationsApi.md#get_organisations_id_applications_app_id_vhosts_favourite_1) | **GET** /organisations/{id}/applications/{appId}/vhosts/favourite | 
[**get_organisations_id_consumers_0**](OrganisationsApi.md#get_organisations_id_consumers_0) | **GET** /organisations/{id}/consumers | 
[**get_organisations_id_consumers_key_0**](OrganisationsApi.md#get_organisations_id_consumers_key_0) | **GET** /organisations/{id}/consumers/{key} | 
[**get_organisations_id_consumers_key_secret_0**](OrganisationsApi.md#get_organisations_id_consumers_key_secret_0) | **GET** /organisations/{id}/consumers/{key}/secret | 
[**get_organisations_id_consumptions_0**](OrganisationsApi.md#get_organisations_id_consumptions_0) | **GET** /organisations/{id}/consumptions | 
[**get_organisations_id_credits_0**](OrganisationsApi.md#get_organisations_id_credits_0) | **GET** /organisations/{id}/credits | 
[**get_organisations_id_deployments_0**](OrganisationsApi.md#get_organisations_id_deployments_0) | **GET** /organisations/{id}/deployments | 
[**get_organisations_id_instances_0**](OrganisationsApi.md#get_organisations_id_instances_0) | **GET** /organisations/{id}/instances | 
[**get_organisations_id_members_0**](OrganisationsApi.md#get_organisations_id_members_0) | **GET** /organisations/{id}/members | 
[**get_organisations_id_payment_info_0**](OrganisationsApi.md#get_organisations_id_payment_info_0) | **GET** /organisations/{id}/payment-info | 
[**get_organisations_id_payments_billings_0**](OrganisationsApi.md#get_organisations_id_payments_billings_0) | **GET** /organisations/{id}/payments/billings | 
[**get_organisations_id_payments_billings_bid_0**](OrganisationsApi.md#get_organisations_id_payments_billings_bid_0) | **GET** /organisations/{id}/payments/billings/{bid} | 
[**get_organisations_id_payments_billings_bid_pdf_0**](OrganisationsApi.md#get_organisations_id_payments_billings_bid_pdf_0) | **GET** /organisations/{id}/payments/billings/{bid}.pdf | 
[**get_organisations_id_payments_full_price_price_0**](OrganisationsApi.md#get_organisations_id_payments_full_price_price_0) | **GET** /organisations/{id}/payments/fullprice/{price} | 
[**list_network_group_members_0**](OrganisationsApi.md#list_network_group_members_0) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members | List members
[**list_network_group_peers_0**](OrganisationsApi.md#list_network_group_peers_0) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers | List peers
[**list_network_groups_0**](OrganisationsApi.md#list_network_groups_0) | **GET** /v4/networkgroups/organisations/{ownerId}/networkgroups | List Network Groups
[**organisations_id_addonproviders_provider_id_delete_0**](OrganisationsApi.md#organisations_id_addonproviders_provider_id_delete_0) | **DELETE** /organisations/{id}/addonproviders/{providerId} | Remove an add-on provider
[**organisations_id_addons_addon_id_instances_get_1**](OrganisationsApi.md#organisations_id_addons_addon_id_instances_get_1) | **GET** /organisations/{id}/addons/{addonId}/instances | List instances for this add-on.
[**organisations_id_addons_addon_id_instances_instance_id_get_1**](OrganisationsApi.md#organisations_id_addons_addon_id_instances_instance_id_get_1) | **GET** /organisations/{id}/addons/{addonId}/instances/{instanceId} | Get a specific instance for {addonId}
[**organisations_id_addons_addon_id_migrations_get_1**](OrganisationsApi.md#organisations_id_addons_addon_id_migrations_get_1) | **GET** /organisations/{id}/addons/{addonId}/migrations | Get past migrations from add-on.
[**organisations_id_addons_addon_id_migrations_migration_id_get_1**](OrganisationsApi.md#organisations_id_addons_addon_id_migrations_migration_id_get_1) | **GET** /organisations/{id}/addons/{addonId}/migrations/{migrationId} | Get a given migration
[**organisations_id_addons_addon_id_migrations_post_1**](OrganisationsApi.md#organisations_id_addons_addon_id_migrations_post_1) | **POST** /organisations/{id}/addons/{addonId}/migrations | Start a new add-on migration
[**organisations_id_addons_addon_id_sso_get_1**](OrganisationsApi.md#organisations_id_addons_addon_id_sso_get_1) | **GET** /organisations/{id}/addons/{addonId}/sso | 
[**organisations_id_addons_preorders_post_1**](OrganisationsApi.md#organisations_id_addons_preorders_post_1) | **POST** /organisations/{id}/addons/preorders | 
[**organisations_id_applications_app_id_branch_put_1**](OrganisationsApi.md#organisations_id_applications_app_id_branch_put_1) | **PUT** /organisations/{id}/applications/{appId}/branch | 
[**organisations_id_applications_app_id_branches_get_1**](OrganisationsApi.md#organisations_id_applications_app_id_branches_get_1) | **GET** /organisations/{id}/applications/{appId}/branches | 
[**organisations_id_applications_app_id_buildflavor_put_1**](OrganisationsApi.md#organisations_id_applications_app_id_buildflavor_put_1) | **PUT** /organisations/{id}/applications/{appId}/buildflavor | 
[**organisations_id_applications_app_id_dependencies_env_get_1**](OrganisationsApi.md#organisations_id_applications_app_id_dependencies_env_get_1) | **GET** /organisations/{id}/applications/{appId}/dependencies/env | 
[**organisations_id_applications_app_id_deployments_deployment_id_get_1**](OrganisationsApi.md#organisations_id_applications_app_id_deployments_deployment_id_get_1) | **GET** /organisations/{id}/applications/{appId}/deployments/{deploymentId} | 
[**organisations_id_applications_app_id_exposed_env_get_1**](OrganisationsApi.md#organisations_id_applications_app_id_exposed_env_get_1) | **GET** /organisations/{id}/applications/{appId}/exposed_env | 
[**organisations_id_applications_app_id_exposed_env_put_1**](OrganisationsApi.md#organisations_id_applications_app_id_exposed_env_put_1) | **PUT** /organisations/{id}/applications/{appId}/exposed_env | 
[**organisations_id_applications_app_id_instances_instance_id_get_1**](OrganisationsApi.md#organisations_id_applications_app_id_instances_instance_id_get_1) | **GET** /organisations/{id}/applications/{appId}/instances/{instanceId} | 
[**organisations_id_payments_billings_unpaid_get_0**](OrganisationsApi.md#organisations_id_payments_billings_unpaid_get_0) | **GET** /organisations/{id}/payments/billings/unpaid | 
[**organisations_id_payments_methods_default_get_0**](OrganisationsApi.md#organisations_id_payments_methods_default_get_0) | **GET** /organisations/{id}/payments/methods/default | 
[**organisations_id_payments_methods_default_put_0**](OrganisationsApi.md#organisations_id_payments_methods_default_put_0) | **PUT** /organisations/{id}/payments/methods/default | 
[**organisations_id_payments_methods_get_0**](OrganisationsApi.md#organisations_id_payments_methods_get_0) | **GET** /organisations/{id}/payments/methods | 
[**organisations_id_payments_methods_mid_delete_0**](OrganisationsApi.md#organisations_id_payments_methods_mid_delete_0) | **DELETE** /organisations/{id}/payments/methods/{mId} | 
[**organisations_id_payments_methods_post_0**](OrganisationsApi.md#organisations_id_payments_methods_post_0) | **POST** /organisations/{id}/payments/methods | 
[**organisations_id_payments_monthlyinvoice_get_0**](OrganisationsApi.md#organisations_id_payments_monthlyinvoice_get_0) | **GET** /organisations/{id}/payments/monthlyinvoice | 
[**organisations_id_payments_monthlyinvoice_maxcredit_put_0**](OrganisationsApi.md#organisations_id_payments_monthlyinvoice_maxcredit_put_0) | **PUT** /organisations/{id}/payments/monthlyinvoice/maxcredit | 
[**organisations_id_payments_recurring_get_0**](OrganisationsApi.md#organisations_id_payments_recurring_get_0) | **GET** /organisations/{id}/payments/recurring | 
[**post_organisations_0**](OrganisationsApi.md#post_organisations_0) | **POST** /organisations | 
[**post_organisations_id_addonproviders_0**](OrganisationsApi.md#post_organisations_id_addonproviders_0) | **POST** /organisations/{id}/addonproviders | 
[**post_organisations_id_addonproviders_provider_id_features_0**](OrganisationsApi.md#post_organisations_id_addonproviders_provider_id_features_0) | **POST** /organisations/{id}/addonproviders/{providerId}/features | 
[**post_organisations_id_addonproviders_provider_id_plans_0**](OrganisationsApi.md#post_organisations_id_addonproviders_provider_id_plans_0) | **POST** /organisations/{id}/addonproviders/{providerId}/plans | 
[**post_organisations_id_addonproviders_provider_id_testers_0**](OrganisationsApi.md#post_organisations_id_addonproviders_provider_id_testers_0) | **POST** /organisations/{id}/addonproviders/{providerId}/testers | 
[**post_organisations_id_addons_1**](OrganisationsApi.md#post_organisations_id_addons_1) | **POST** /organisations/{id}/addons | 
[**post_organisations_id_applications_1**](OrganisationsApi.md#post_organisations_id_applications_1) | **POST** /organisations/{id}/applications | 
[**post_organisations_id_applications_app_id_addons_2**](OrganisationsApi.md#post_organisations_id_applications_app_id_addons_2) | **POST** /organisations/{id}/applications/{appId}/addons | 
[**post_organisations_id_applications_app_id_instances_1**](OrganisationsApi.md#post_organisations_id_applications_app_id_instances_1) | **POST** /organisations/{id}/applications/{appId}/instances | 
[**post_organisations_id_consumers_0**](OrganisationsApi.md#post_organisations_id_consumers_0) | **POST** /organisations/{id}/consumers | 
[**post_organisations_id_members_0**](OrganisationsApi.md#post_organisations_id_members_0) | **POST** /organisations/{id}/members | 
[**post_organisations_id_payments_billings_0**](OrganisationsApi.md#post_organisations_id_payments_billings_0) | **POST** /organisations/{id}/payments/billings | 
[**put_organisations_id_0**](OrganisationsApi.md#put_organisations_id_0) | **PUT** /organisations/{id} | 
[**put_organisations_id_addonproviders_provider_id_0**](OrganisationsApi.md#put_organisations_id_addonproviders_provider_id_0) | **PUT** /organisations/{id}/addonproviders/{providerId} | 
[**put_organisations_id_addonproviders_provider_id_plans_plan_id_0**](OrganisationsApi.md#put_organisations_id_addonproviders_provider_id_plans_plan_id_0) | **PUT** /organisations/{id}/addonproviders/{providerId}/plans/{planId} | 
[**put_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name_0**](OrganisationsApi.md#put_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name_0) | **PUT** /organisations/{id}/addonproviders/{providerId}/plans/{planId}/features/{featureName} | 
[**put_organisations_id_addons_addon_id_1**](OrganisationsApi.md#put_organisations_id_addons_addon_id_1) | **PUT** /organisations/{id}/addons/{addonId} | 
[**put_organisations_id_addons_addon_id_tags_tag_1**](OrganisationsApi.md#put_organisations_id_addons_addon_id_tags_tag_1) | **PUT** /organisations/{id}/addons/{addonId}/tags/{tag} | 
[**put_organisations_id_applications_app_id_1**](OrganisationsApi.md#put_organisations_id_applications_app_id_1) | **PUT** /organisations/{id}/applications/{appId} | 
[**put_organisations_id_applications_app_id_dependencies_dependency_id_1**](OrganisationsApi.md#put_organisations_id_applications_app_id_dependencies_dependency_id_1) | **PUT** /organisations/{id}/applications/{appId}/dependencies/{dependencyId} | 
[**put_organisations_id_applications_app_id_env_1**](OrganisationsApi.md#put_organisations_id_applications_app_id_env_1) | **PUT** /organisations/{id}/applications/{appId}/env | 
[**put_organisations_id_applications_app_id_env_env_name_1**](OrganisationsApi.md#put_organisations_id_applications_app_id_env_env_name_1) | **PUT** /organisations/{id}/applications/{appId}/env/{envName} | 
[**put_organisations_id_applications_app_id_tags_tag_1**](OrganisationsApi.md#put_organisations_id_applications_app_id_tags_tag_1) | **PUT** /organisations/{id}/applications/{appId}/tags/{tag} | 
[**put_organisations_id_applications_app_id_vhosts_domain_1**](OrganisationsApi.md#put_organisations_id_applications_app_id_vhosts_domain_1) | **PUT** /organisations/{id}/applications/{appId}/vhosts/{domain} | 
[**put_organisations_id_applications_app_id_vhosts_favourite_1**](OrganisationsApi.md#put_organisations_id_applications_app_id_vhosts_favourite_1) | **PUT** /organisations/{id}/applications/{appId}/vhosts/favourite | 
[**put_organisations_id_avatar_0**](OrganisationsApi.md#put_organisations_id_avatar_0) | **PUT** /organisations/{id}/avatar | 
[**put_organisations_id_consumers_key_0**](OrganisationsApi.md#put_organisations_id_consumers_key_0) | **PUT** /organisations/{id}/consumers/{key} | 
[**put_organisations_id_members_user_id_0**](OrganisationsApi.md#put_organisations_id_members_user_id_0) | **PUT** /organisations/{id}/members/{userId} | 
[**put_organisations_id_payments_billings_bid_0**](OrganisationsApi.md#put_organisations_id_payments_billings_bid_0) | **PUT** /organisations/{id}/payments/billings/{bid} | 


# **create_network_group_0**
> object create_network_group_0(owner_id, body=body)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Create Network Group
        api_response = api_instance.create_network_group_0(owner_id, body=body)
        print("The response of OrganisationsApi->create_network_group_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->create_network_group_0: %s\n" % e)
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

# **create_network_group_external_peer_0**
> object create_network_group_external_peer_0(owner_id, network_group_id, body=body)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Add external peer
        api_response = api_instance.create_network_group_external_peer_0(owner_id, network_group_id, body=body)
        print("The response of OrganisationsApi->create_network_group_external_peer_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->create_network_group_external_peer_0: %s\n" % e)
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

# **create_network_group_member_0**
> create_network_group_member_0(owner_id, network_group_id, schema2=schema2)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    schema2 = openapi_client.Schema2() # Schema2 |  (optional)

    try:
        # Add member
        api_instance.create_network_group_member_0(owner_id, network_group_id, schema2=schema2)
    except Exception as e:
        print("Exception when calling OrganisationsApi->create_network_group_member_0: %s\n" % e)
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

# **delete_network_group_0**
> delete_network_group_0(owner_id, network_group_id, body=body)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Delete Network Group
        api_instance.delete_network_group_0(owner_id, network_group_id, body=body)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_network_group_0: %s\n" % e)
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

# **delete_network_group_external_peer_0**
> delete_network_group_external_peer_0(owner_id, network_group_id, peer_id, body=body)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    peer_id = 'peer_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Remove external peer
        api_instance.delete_network_group_external_peer_0(owner_id, network_group_id, peer_id, body=body)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_network_group_external_peer_0: %s\n" % e)
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

# **delete_network_group_member_0**
> delete_network_group_member_0(owner_id, network_group_id, member_id, body=body)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    member_id = 'member_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Remove member
        api_instance.delete_network_group_member_0(owner_id, network_group_id, member_id, body=body)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_network_group_member_0: %s\n" % e)
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

# **delete_network_group_peer_0**
> delete_network_group_peer_0(owner_id, network_group_id, peer_id, body=body)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    peer_id = 'peer_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Remove peer
        api_instance.delete_network_group_peer_0(owner_id, network_group_id, peer_id, body=body)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_network_group_peer_0: %s\n" % e)
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

# **delete_organisations_id_0**
> delete_organisations_id_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.delete_organisations_id_0(id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_0: %s\n" % e)
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

# **delete_organisations_id_addonproviders_provider_id_features_feature_id_0**
> delete_organisations_id_addonproviders_provider_id_features_feature_id_0(id, feature_id, provider_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    feature_id = 'feature_id_example' # str | 
    provider_id = 'provider_id_example' # str | 

    try:
        api_instance.delete_organisations_id_addonproviders_provider_id_features_feature_id_0(id, feature_id, provider_id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_addonproviders_provider_id_features_feature_id_0: %s\n" % e)
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

# **delete_organisations_id_addonproviders_provider_id_plans_plan_id_0**
> delete_organisations_id_addonproviders_provider_id_plans_plan_id_0(id, provider_id, plan_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 
    plan_id = 'plan_id_example' # str | 

    try:
        api_instance.delete_organisations_id_addonproviders_provider_id_plans_plan_id_0(id, provider_id, plan_id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_addonproviders_provider_id_plans_plan_id_0: %s\n" % e)
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

# **delete_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name_0**
> delete_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name_0(id, feature_name, provider_id, plan_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    feature_name = 'feature_name_example' # str | 
    provider_id = 'provider_id_example' # str | 
    plan_id = 'plan_id_example' # str | 

    try:
        api_instance.delete_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name_0(id, feature_name, provider_id, plan_id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name_0: %s\n" % e)
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

# **delete_organisations_id_addons_addon_id_1**
> delete_organisations_id_addons_addon_id_1(id, addon_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.delete_organisations_id_addons_addon_id_1(id, addon_id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_addons_addon_id_1: %s\n" % e)
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

# **delete_organisations_id_addons_addon_id_tags_tag_1**
> delete_organisations_id_addons_addon_id_tags_tag_1(id, tag, addon_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    tag = 'tag_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.delete_organisations_id_addons_addon_id_tags_tag_1(id, tag, addon_id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_addons_addon_id_tags_tag_1: %s\n" % e)
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

# **delete_organisations_id_applications_app_id_1**
> delete_organisations_id_applications_app_id_1(id, app_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_1(id, app_id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_applications_app_id_1: %s\n" % e)
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

# **delete_organisations_id_applications_app_id_addons_addon_id_2**
> delete_organisations_id_applications_app_id_addons_addon_id_2(id, app_id, addon_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_addons_addon_id_2(id, app_id, addon_id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_applications_app_id_addons_addon_id_2: %s\n" % e)
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

# **delete_organisations_id_applications_app_id_dependencies_dependency_id_1**
> delete_organisations_id_applications_app_id_dependencies_dependency_id_1(dependency_id, app_id, id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    dependency_id = 'dependency_id_example' # str | 
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_dependencies_dependency_id_1(dependency_id, app_id, id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_applications_app_id_dependencies_dependency_id_1: %s\n" % e)
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

# **delete_organisations_id_applications_app_id_deployments_deployment_id_instances_1**
> delete_organisations_id_applications_app_id_deployments_deployment_id_instances_1(id, app_id, deployment_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    deployment_id = 'deployment_id_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_deployments_deployment_id_instances_1(id, app_id, deployment_id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_applications_app_id_deployments_deployment_id_instances_1: %s\n" % e)
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

# **delete_organisations_id_applications_app_id_env_env_name_1**
> delete_organisations_id_applications_app_id_env_env_name_1(id, app_id, env_name)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    env_name = 'env_name_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_env_env_name_1(id, app_id, env_name)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_applications_app_id_env_env_name_1: %s\n" % e)
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

# **delete_organisations_id_applications_app_id_instances_1**
> delete_organisations_id_applications_app_id_instances_1(id, app_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_instances_1(id, app_id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_applications_app_id_instances_1: %s\n" % e)
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

# **delete_organisations_id_applications_app_id_tags_tag_1**
> delete_organisations_id_applications_app_id_tags_tag_1(id, app_id, tag)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    tag = 'tag_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_tags_tag_1(id, app_id, tag)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_applications_app_id_tags_tag_1: %s\n" % e)
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

# **delete_organisations_id_applications_app_id_vhosts_domain_1**
> delete_organisations_id_applications_app_id_vhosts_domain_1(id, app_id, domain)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    domain = 'domain_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_vhosts_domain_1(id, app_id, domain)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_applications_app_id_vhosts_domain_1: %s\n" % e)
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

# **delete_organisations_id_applications_app_id_vhosts_favourite_1**
> delete_organisations_id_applications_app_id_vhosts_favourite_1(id, app_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_instance.delete_organisations_id_applications_app_id_vhosts_favourite_1(id, app_id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_applications_app_id_vhosts_favourite_1: %s\n" % e)
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

# **delete_organisations_id_consumers_key_0**
> delete_organisations_id_consumers_key_0(id, key)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    key = 'key_example' # str | 

    try:
        api_instance.delete_organisations_id_consumers_key_0(id, key)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_consumers_key_0: %s\n" % e)
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

# **delete_organisations_id_members_user_id_0**
> delete_organisations_id_members_user_id_0(id, user_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    user_id = 'user_id_example' # str | 

    try:
        api_instance.delete_organisations_id_members_user_id_0(id, user_id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_members_user_id_0: %s\n" % e)
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

# **delete_organisations_id_payments_billings_bid_0**
> delete_organisations_id_payments_billings_bid_0(id, bid)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    bid = 'bid_example' # str | 

    try:
        api_instance.delete_organisations_id_payments_billings_bid_0(id, bid)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_payments_billings_bid_0: %s\n" % e)
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

# **delete_organisations_id_payments_recurring_0**
> delete_organisations_id_payments_recurring_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.delete_organisations_id_payments_recurring_0(id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->delete_organisations_id_payments_recurring_0: %s\n" % e)
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

# **get_network_group_0**
> object get_network_group_0(owner_id, network_group_id, body=body)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Get Network Group
        api_response = api_instance.get_network_group_0(owner_id, network_group_id, body=body)
        print("The response of OrganisationsApi->get_network_group_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_network_group_0: %s\n" % e)
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

# **get_network_group_member_0**
> Schema1 get_network_group_member_0(owner_id, network_group_id, member_id, body=body)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    member_id = 'member_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Get member
        api_response = api_instance.get_network_group_member_0(owner_id, network_group_id, member_id, body=body)
        print("The response of OrganisationsApi->get_network_group_member_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_network_group_member_0: %s\n" % e)
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

# **get_network_group_peer_0**
> object get_network_group_peer_0(owner_id, network_group_id, peer_id, body=body)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    peer_id = 'peer_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Get peer
        api_response = api_instance.get_network_group_peer_0(owner_id, network_group_id, peer_id, body=body)
        print("The response of OrganisationsApi->get_network_group_peer_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_network_group_peer_0: %s\n" % e)
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

# **get_network_group_stream_0**
> object get_network_group_stream_0(owner_id, network_group_id, body=body)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Network Group SSE
        api_response = api_instance.get_network_group_stream_0(owner_id, network_group_id, body=body)
        print("The response of OrganisationsApi->get_network_group_stream_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_network_group_stream_0: %s\n" % e)
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

# **get_network_group_wire_guard_configuration_0**
> object get_network_group_wire_guard_configuration_0(owner_id, network_group_id, peer_id, body=body)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    peer_id = 'peer_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Get WireGuard® configuration
        api_response = api_instance.get_network_group_wire_guard_configuration_0(owner_id, network_group_id, peer_id, body=body)
        print("The response of OrganisationsApi->get_network_group_wire_guard_configuration_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_network_group_wire_guard_configuration_0: %s\n" % e)
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

# **get_network_group_wire_guard_configuration_stream_0**
> object get_network_group_wire_guard_configuration_stream_0(owner_id, network_group_id, peer_id, body=body)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    peer_id = 'peer_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # Get WireGuard® configuration
        api_response = api_instance.get_network_group_wire_guard_configuration_stream_0(owner_id, network_group_id, peer_id, body=body)
        print("The response of OrganisationsApi->get_network_group_wire_guard_configuration_stream_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_network_group_wire_guard_configuration_stream_0: %s\n" % e)
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

# **get_organisations_0**
> List[Organisation] get_organisations_0(user=user)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    user = 'user_example' # str |  (optional)

    try:
        api_response = api_instance.get_organisations_0(user=user)
        print("The response of OrganisationsApi->get_organisations_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_0: %s\n" % e)
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

# **get_organisations_id_0**
> Organisation get_organisations_id_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_0(id)
        print("The response of OrganisationsApi->get_organisations_id_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_0: %s\n" % e)
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

# **get_organisations_id_addonproviders_0**
> List[Provider] get_organisations_id_addonproviders_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addonproviders_0(id)
        print("The response of OrganisationsApi->get_organisations_id_addonproviders_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_addonproviders_0: %s\n" % e)
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

# **get_organisations_id_addonproviders_provider_id_0**
> Provider get_organisations_id_addonproviders_provider_id_0(id, provider_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addonproviders_provider_id_0(id, provider_id)
        print("The response of OrganisationsApi->get_organisations_id_addonproviders_provider_id_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_addonproviders_provider_id_0: %s\n" % e)
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

# **get_organisations_id_addonproviders_provider_id_features_0**
> List[Feature] get_organisations_id_addonproviders_provider_id_features_0(id, provider_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addonproviders_provider_id_features_0(id, provider_id)
        print("The response of OrganisationsApi->get_organisations_id_addonproviders_provider_id_features_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_addonproviders_provider_id_features_0: %s\n" % e)
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

# **get_organisations_id_addonproviders_provider_id_plans_0**
> List[Plan] get_organisations_id_addonproviders_provider_id_plans_0(id, provider_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addonproviders_provider_id_plans_0(id, provider_id)
        print("The response of OrganisationsApi->get_organisations_id_addonproviders_provider_id_plans_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_addonproviders_provider_id_plans_0: %s\n" % e)
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

# **get_organisations_id_addonproviders_provider_id_plans_plan_id_0**
> Plan get_organisations_id_addonproviders_provider_id_plans_plan_id_0(id, provider_id, plan_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 
    plan_id = 'plan_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addonproviders_provider_id_plans_plan_id_0(id, provider_id, plan_id)
        print("The response of OrganisationsApi->get_organisations_id_addonproviders_provider_id_plans_plan_id_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_addonproviders_provider_id_plans_plan_id_0: %s\n" % e)
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

# **get_organisations_id_addonproviders_provider_id_tags_0**
> List[str] get_organisations_id_addonproviders_provider_id_tags_0(id, provider_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addonproviders_provider_id_tags_0(id, provider_id)
        print("The response of OrganisationsApi->get_organisations_id_addonproviders_provider_id_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_addonproviders_provider_id_tags_0: %s\n" % e)
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

# **get_organisations_id_addons_1**
> List[Addon] get_organisations_id_addons_1(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_1(id)
        print("The response of OrganisationsApi->get_organisations_id_addons_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_addons_1: %s\n" % e)
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

# **get_organisations_id_addons_addon_id_1**
> Addon get_organisations_id_addons_addon_id_1(id, addon_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_addon_id_1(id, addon_id)
        print("The response of OrganisationsApi->get_organisations_id_addons_addon_id_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_addons_addon_id_1: %s\n" % e)
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

# **get_organisations_id_addons_addon_id_applications_2**
> List[Application] get_organisations_id_addons_addon_id_applications_2(id, addon_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_addon_id_applications_2(id, addon_id)
        print("The response of OrganisationsApi->get_organisations_id_addons_addon_id_applications_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_addons_addon_id_applications_2: %s\n" % e)
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

# **get_organisations_id_addons_addon_id_env_1**
> List[ListEnv] get_organisations_id_addons_addon_id_env_1(id, addon_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_addon_id_env_1(id, addon_id)
        print("The response of OrganisationsApi->get_organisations_id_addons_addon_id_env_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_addons_addon_id_env_1: %s\n" % e)
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

# **get_organisations_id_addons_addon_id_sso_0**
> AddonProviderSso get_organisations_id_addons_addon_id_sso_0(provider_id, id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    provider_id = 'provider_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_addon_id_sso_0(provider_id, id)
        print("The response of OrganisationsApi->get_organisations_id_addons_addon_id_sso_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_addons_addon_id_sso_0: %s\n" % e)
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

# **get_organisations_id_addons_addon_id_tags_1**
> List[str] get_organisations_id_addons_addon_id_tags_1(id, addon_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_addons_addon_id_tags_1(id, addon_id)
        print("The response of OrganisationsApi->get_organisations_id_addons_addon_id_tags_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_addons_addon_id_tags_1: %s\n" % e)
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

# **get_organisations_id_applications_1**
> List[Application] get_organisations_id_applications_1(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_1(id)
        print("The response of OrganisationsApi->get_organisations_id_applications_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_applications_1: %s\n" % e)
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

# **get_organisations_id_applications_app_id_1**
> Application get_organisations_id_applications_app_id_1(id, app_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_1(id, app_id)
        print("The response of OrganisationsApi->get_organisations_id_applications_app_id_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_applications_app_id_1: %s\n" % e)
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

# **get_organisations_id_applications_app_id_addons_2**
> List[Addon] get_organisations_id_applications_app_id_addons_2(id, app_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_addons_2(id, app_id)
        print("The response of OrganisationsApi->get_organisations_id_applications_app_id_addons_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_applications_app_id_addons_2: %s\n" % e)
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

# **get_organisations_id_applications_app_id_addons_env_2**
> List[Env] get_organisations_id_applications_app_id_addons_env_2(id, app_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_addons_env_2(id, app_id)
        print("The response of OrganisationsApi->get_organisations_id_applications_app_id_addons_env_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_applications_app_id_addons_env_2: %s\n" % e)
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

# **get_organisations_id_applications_app_id_dependencies_1**
> List[Application] get_organisations_id_applications_app_id_dependencies_1(app_id, id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_dependencies_1(app_id, id)
        print("The response of OrganisationsApi->get_organisations_id_applications_app_id_dependencies_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_applications_app_id_dependencies_1: %s\n" % e)
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

# **get_organisations_id_applications_app_id_dependents_1**
> List[Application] get_organisations_id_applications_app_id_dependents_1(app_id, id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_dependents_1(app_id, id)
        print("The response of OrganisationsApi->get_organisations_id_applications_app_id_dependents_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_applications_app_id_dependents_1: %s\n" % e)
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

# **get_organisations_id_applications_app_id_deployments_1**
> List[Deployment] get_organisations_id_applications_app_id_deployments_1(id, app_id, limit=limit, offset=offset, action=action)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    limit = 'limit_example' # str |  (optional)
    offset = 'offset_example' # str |  (optional)
    action = 'action_example' # str |  (optional)

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_deployments_1(id, app_id, limit=limit, offset=offset, action=action)
        print("The response of OrganisationsApi->get_organisations_id_applications_app_id_deployments_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_applications_app_id_deployments_1: %s\n" % e)
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

# **get_organisations_id_applications_app_id_env_1**
> List[ListEnv] get_organisations_id_applications_app_id_env_1(id, app_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_env_1(id, app_id)
        print("The response of OrganisationsApi->get_organisations_id_applications_app_id_env_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_applications_app_id_env_1: %s\n" % e)
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

# **get_organisations_id_applications_app_id_instances_1**
> List[AppInstance] get_organisations_id_applications_app_id_instances_1(id, app_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_instances_1(id, app_id)
        print("The response of OrganisationsApi->get_organisations_id_applications_app_id_instances_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_applications_app_id_instances_1: %s\n" % e)
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

# **get_organisations_id_applications_app_id_tags_1**
> List[str] get_organisations_id_applications_app_id_tags_1(id, app_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_tags_1(id, app_id)
        print("The response of OrganisationsApi->get_organisations_id_applications_app_id_tags_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_applications_app_id_tags_1: %s\n" % e)
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

# **get_organisations_id_applications_app_id_vhosts_1**
> List[Vhost] get_organisations_id_applications_app_id_vhosts_1(id, app_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_vhosts_1(id, app_id)
        print("The response of OrganisationsApi->get_organisations_id_applications_app_id_vhosts_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_applications_app_id_vhosts_1: %s\n" % e)
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

# **get_organisations_id_applications_app_id_vhosts_favourite_1**
> Vhost get_organisations_id_applications_app_id_vhosts_favourite_1(id, app_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_applications_app_id_vhosts_favourite_1(id, app_id)
        print("The response of OrganisationsApi->get_organisations_id_applications_app_id_vhosts_favourite_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_applications_app_id_vhosts_favourite_1: %s\n" % e)
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

# **get_organisations_id_consumers_0**
> List[Consumer] get_organisations_id_consumers_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_consumers_0(id)
        print("The response of OrganisationsApi->get_organisations_id_consumers_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_consumers_0: %s\n" % e)
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

# **get_organisations_id_consumers_key_0**
> Consumer get_organisations_id_consumers_key_0(id, key)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    key = 'key_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_consumers_key_0(id, key)
        print("The response of OrganisationsApi->get_organisations_id_consumers_key_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_consumers_key_0: %s\n" % e)
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

# **get_organisations_id_consumers_key_secret_0**
> Secret get_organisations_id_consumers_key_secret_0(id, key)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    key = 'key_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_consumers_key_secret_0(id, key)
        print("The response of OrganisationsApi->get_organisations_id_consumers_key_secret_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_consumers_key_secret_0: %s\n" % e)
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

# **get_organisations_id_consumptions_0**
> Conso get_organisations_id_consumptions_0(id, app_id=app_id, var_from=var_from, to=to)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str |  (optional)
    var_from = 'var_from_example' # str |  (optional)
    to = 'to_example' # str |  (optional)

    try:
        api_response = api_instance.get_organisations_id_consumptions_0(id, app_id=app_id, var_from=var_from, to=to)
        print("The response of OrganisationsApi->get_organisations_id_consumptions_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_consumptions_0: %s\n" % e)
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

# **get_organisations_id_credits_0**
> Credits get_organisations_id_credits_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_credits_0(id)
        print("The response of OrganisationsApi->get_organisations_id_credits_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_credits_0: %s\n" % e)
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

# **get_organisations_id_deployments_0**
> DeploymentSummary get_organisations_id_deployments_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_deployments_0(id)
        print("The response of OrganisationsApi->get_organisations_id_deployments_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_deployments_0: %s\n" % e)
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

# **get_organisations_id_instances_0**
> object get_organisations_id_instances_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_instances_0(id)
        print("The response of OrganisationsApi->get_organisations_id_instances_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_instances_0: %s\n" % e)
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

# **get_organisations_id_members_0**
> List[Schema1] get_organisations_id_members_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_organisations_id_members_0(id)
        print("The response of OrganisationsApi->get_organisations_id_members_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_members_0: %s\n" % e)
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

# **get_organisations_id_payment_info_0**
> get_organisations_id_payment_info_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.get_organisations_id_payment_info_0(id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_payment_info_0: %s\n" % e)
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

# **get_organisations_id_payments_billings_0**
> get_organisations_id_payments_billings_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.get_organisations_id_payments_billings_0(id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_payments_billings_0: %s\n" % e)
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

# **get_organisations_id_payments_billings_bid_0**
> get_organisations_id_payments_billings_bid_0(id, bid)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    bid = 'bid_example' # str | 

    try:
        api_instance.get_organisations_id_payments_billings_bid_0(id, bid)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_payments_billings_bid_0: %s\n" % e)
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

# **get_organisations_id_payments_billings_bid_pdf_0**
> get_organisations_id_payments_billings_bid_pdf_0(id, bid, token=token)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    bid = 'bid_example' # str | 
    token = 'token_example' # str |  (optional)

    try:
        api_instance.get_organisations_id_payments_billings_bid_pdf_0(id, bid, token=token)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_payments_billings_bid_pdf_0: %s\n" % e)
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

# **get_organisations_id_payments_full_price_price_0**
> get_organisations_id_payments_full_price_price_0(id, price)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    price = 'price_example' # str | 

    try:
        api_instance.get_organisations_id_payments_full_price_price_0(id, price)
    except Exception as e:
        print("Exception when calling OrganisationsApi->get_organisations_id_payments_full_price_price_0: %s\n" % e)
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

# **list_network_group_members_0**
> List[Schema1] list_network_group_members_0(owner_id, network_group_id, body=body)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # List members
        api_response = api_instance.list_network_group_members_0(owner_id, network_group_id, body=body)
        print("The response of OrganisationsApi->list_network_group_members_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->list_network_group_members_0: %s\n" % e)
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

# **list_network_group_peers_0**
> List[object] list_network_group_peers_0(owner_id, network_group_id, body=body)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    network_group_id = 'network_group_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # List peers
        api_response = api_instance.list_network_group_peers_0(owner_id, network_group_id, body=body)
        print("The response of OrganisationsApi->list_network_group_peers_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->list_network_group_peers_0: %s\n" % e)
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

# **list_network_groups_0**
> List[object] list_network_groups_0(owner_id, body=body)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    owner_id = 'owner_id_example' # str | Automatically added
    body = None # object |  (optional)

    try:
        # List Network Groups
        api_response = api_instance.list_network_groups_0(owner_id, body=body)
        print("The response of OrganisationsApi->list_network_groups_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->list_network_groups_0: %s\n" % e)
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

# **organisations_id_addonproviders_provider_id_delete_0**
> organisations_id_addonproviders_provider_id_delete_0(id, provider_id)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 

    try:
        # Remove an add-on provider
        api_instance.organisations_id_addonproviders_provider_id_delete_0(id, provider_id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_addonproviders_provider_id_delete_0: %s\n" % e)
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

# **organisations_id_addons_addon_id_instances_get_1**
> List[SupernovaInstanceView] organisations_id_addons_addon_id_instances_get_1(id, addon_id, deployment_id=deployment_id, with_deleted=with_deleted)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 
    deployment_id = 'deployment_id_example' # str |  (optional)
    with_deleted = 'with_deleted_example' # str |  (optional)

    try:
        # List instances for this add-on.
        api_response = api_instance.organisations_id_addons_addon_id_instances_get_1(id, addon_id, deployment_id=deployment_id, with_deleted=with_deleted)
        print("The response of OrganisationsApi->organisations_id_addons_addon_id_instances_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_addons_addon_id_instances_get_1: %s\n" % e)
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

# **organisations_id_addons_addon_id_instances_instance_id_get_1**
> SupernovaInstanceView organisations_id_addons_addon_id_instances_instance_id_get_1(instance_id, id, addon_id)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    instance_id = 'instance_id_example' # str | 
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        # Get a specific instance for {addonId}
        api_response = api_instance.organisations_id_addons_addon_id_instances_instance_id_get_1(instance_id, id, addon_id)
        print("The response of OrganisationsApi->organisations_id_addons_addon_id_instances_instance_id_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_addons_addon_id_instances_instance_id_get_1: %s\n" % e)
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

# **organisations_id_addons_addon_id_migrations_get_1**
> List[AddonMigration] organisations_id_addons_addon_id_migrations_get_1(id, addon_id)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        # Get past migrations from add-on.
        api_response = api_instance.organisations_id_addons_addon_id_migrations_get_1(id, addon_id)
        print("The response of OrganisationsApi->organisations_id_addons_addon_id_migrations_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_addons_addon_id_migrations_get_1: %s\n" % e)
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

# **organisations_id_addons_addon_id_migrations_migration_id_get_1**
> AddonMigration organisations_id_addons_addon_id_migrations_migration_id_get_1(migration_id, id, addon_id)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    migration_id = 'migration_id_example' # str | 
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        # Get a given migration
        api_response = api_instance.organisations_id_addons_addon_id_migrations_migration_id_get_1(migration_id, id, addon_id)
        print("The response of OrganisationsApi->organisations_id_addons_addon_id_migrations_migration_id_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_addons_addon_id_migrations_migration_id_get_1: %s\n" % e)
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

# **organisations_id_addons_addon_id_migrations_post_1**
> object organisations_id_addons_addon_id_migrations_post_1(id, addon_id, organisations_id_addons_addon_id_migrations_post_request)

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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 
    organisations_id_addons_addon_id_migrations_post_request = openapi_client.OrganisationsIdAddonsAddonIdMigrationsPostRequest() # OrganisationsIdAddonsAddonIdMigrationsPostRequest | 

    try:
        # Start a new add-on migration
        api_response = api_instance.organisations_id_addons_addon_id_migrations_post_1(id, addon_id, organisations_id_addons_addon_id_migrations_post_request)
        print("The response of OrganisationsApi->organisations_id_addons_addon_id_migrations_post_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_addons_addon_id_migrations_post_1: %s\n" % e)
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

# **organisations_id_addons_addon_id_sso_get_1**
> Sso organisations_id_addons_addon_id_sso_get_1(id, addon_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 

    try:
        api_response = api_instance.organisations_id_addons_addon_id_sso_get_1(id, addon_id)
        print("The response of OrganisationsApi->organisations_id_addons_addon_id_sso_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_addons_addon_id_sso_get_1: %s\n" % e)
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

# **organisations_id_addons_preorders_post_1**
> organisations_id_addons_preorders_post_1(id, wannabe_addon)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    wannabe_addon = openapi_client.WannabeAddon() # WannabeAddon | 

    try:
        api_instance.organisations_id_addons_preorders_post_1(id, wannabe_addon)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_addons_preorders_post_1: %s\n" % e)
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

# **organisations_id_applications_app_id_branch_put_1**
> organisations_id_applications_app_id_branch_put_1(app_id, id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_applications_app_id_branch_put_1(app_id, id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_applications_app_id_branch_put_1: %s\n" % e)
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

# **organisations_id_applications_app_id_branches_get_1**
> organisations_id_applications_app_id_branches_get_1(app_id, id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_applications_app_id_branches_get_1(app_id, id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_applications_app_id_branches_get_1: %s\n" % e)
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

# **organisations_id_applications_app_id_buildflavor_put_1**
> organisations_id_applications_app_id_buildflavor_put_1(app_id, id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_applications_app_id_buildflavor_put_1(app_id, id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_applications_app_id_buildflavor_put_1: %s\n" % e)
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

# **organisations_id_applications_app_id_dependencies_env_get_1**
> List[LinkedAppEnv] organisations_id_applications_app_id_dependencies_env_get_1(app_id, id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_response = api_instance.organisations_id_applications_app_id_dependencies_env_get_1(app_id, id)
        print("The response of OrganisationsApi->organisations_id_applications_app_id_dependencies_env_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_applications_app_id_dependencies_env_get_1: %s\n" % e)
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

# **organisations_id_applications_app_id_deployments_deployment_id_get_1**
> organisations_id_applications_app_id_deployments_deployment_id_get_1(app_id, deployment_id, id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    app_id = 'app_id_example' # str | 
    deployment_id = 'deployment_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_applications_app_id_deployments_deployment_id_get_1(app_id, deployment_id, id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_applications_app_id_deployments_deployment_id_get_1: %s\n" % e)
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

# **organisations_id_applications_app_id_exposed_env_get_1**
> organisations_id_applications_app_id_exposed_env_get_1(app_id, id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_applications_app_id_exposed_env_get_1(app_id, id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_applications_app_id_exposed_env_get_1: %s\n" % e)
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

# **organisations_id_applications_app_id_exposed_env_put_1**
> organisations_id_applications_app_id_exposed_env_put_1(app_id, id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_applications_app_id_exposed_env_put_1(app_id, id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_applications_app_id_exposed_env_put_1: %s\n" % e)
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

# **organisations_id_applications_app_id_instances_instance_id_get_1**
> organisations_id_applications_app_id_instances_instance_id_get_1(instance_id, app_id, id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    instance_id = 'instance_id_example' # str | 
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_applications_app_id_instances_instance_id_get_1(instance_id, app_id, id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_applications_app_id_instances_instance_id_get_1: %s\n" % e)
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

# **organisations_id_payments_billings_unpaid_get_0**
> organisations_id_payments_billings_unpaid_get_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_billings_unpaid_get_0(id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_payments_billings_unpaid_get_0: %s\n" % e)
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

# **organisations_id_payments_methods_default_get_0**
> organisations_id_payments_methods_default_get_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_methods_default_get_0(id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_payments_methods_default_get_0: %s\n" % e)
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

# **organisations_id_payments_methods_default_put_0**
> organisations_id_payments_methods_default_put_0(id, payment_data)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    payment_data = openapi_client.PaymentData() # PaymentData | 

    try:
        api_instance.organisations_id_payments_methods_default_put_0(id, payment_data)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_payments_methods_default_put_0: %s\n" % e)
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

# **organisations_id_payments_methods_get_0**
> organisations_id_payments_methods_get_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_methods_get_0(id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_payments_methods_get_0: %s\n" % e)
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

# **organisations_id_payments_methods_mid_delete_0**
> organisations_id_payments_methods_mid_delete_0(m_id, id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    m_id = 'm_id_example' # str | 
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_methods_mid_delete_0(m_id, id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_payments_methods_mid_delete_0: %s\n" % e)
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

# **organisations_id_payments_methods_post_0**
> organisations_id_payments_methods_post_0(id, body)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.organisations_id_payments_methods_post_0(id, body)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_payments_methods_post_0: %s\n" % e)
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

# **organisations_id_payments_monthlyinvoice_get_0**
> organisations_id_payments_monthlyinvoice_get_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_monthlyinvoice_get_0(id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_payments_monthlyinvoice_get_0: %s\n" % e)
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

# **organisations_id_payments_monthlyinvoice_maxcredit_put_0**
> organisations_id_payments_monthlyinvoice_maxcredit_put_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_monthlyinvoice_maxcredit_put_0(id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_payments_monthlyinvoice_maxcredit_put_0: %s\n" % e)
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

# **organisations_id_payments_recurring_get_0**
> organisations_id_payments_recurring_get_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.organisations_id_payments_recurring_get_0(id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->organisations_id_payments_recurring_get_0: %s\n" % e)
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

# **post_organisations_0**
> Organisation post_organisations_0(wannabe_organisation)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    wannabe_organisation = openapi_client.WannabeOrganisation() # WannabeOrganisation | 

    try:
        api_response = api_instance.post_organisations_0(wannabe_organisation)
        print("The response of OrganisationsApi->post_organisations_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->post_organisations_0: %s\n" % e)
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

# **post_organisations_id_addonproviders_0**
> Provider post_organisations_id_addonproviders_0(id, wannabe_addon_provider)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    wannabe_addon_provider = openapi_client.WannabeAddonProvider() # WannabeAddonProvider | 

    try:
        api_response = api_instance.post_organisations_id_addonproviders_0(id, wannabe_addon_provider)
        print("The response of OrganisationsApi->post_organisations_id_addonproviders_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->post_organisations_id_addonproviders_0: %s\n" % e)
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

# **post_organisations_id_addonproviders_provider_id_features_0**
> Feature post_organisations_id_addonproviders_provider_id_features_0(id, provider_id, wannabe_feature)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 
    wannabe_feature = openapi_client.WannabeFeature() # WannabeFeature | 

    try:
        api_response = api_instance.post_organisations_id_addonproviders_provider_id_features_0(id, provider_id, wannabe_feature)
        print("The response of OrganisationsApi->post_organisations_id_addonproviders_provider_id_features_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->post_organisations_id_addonproviders_provider_id_features_0: %s\n" % e)
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

# **post_organisations_id_addonproviders_provider_id_plans_0**
> Plan post_organisations_id_addonproviders_provider_id_plans_0(id, provider_id, wannabe_plan)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 
    wannabe_plan = openapi_client.WannabePlan() # WannabePlan | 

    try:
        api_response = api_instance.post_organisations_id_addonproviders_provider_id_plans_0(id, provider_id, wannabe_plan)
        print("The response of OrganisationsApi->post_organisations_id_addonproviders_provider_id_plans_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->post_organisations_id_addonproviders_provider_id_plans_0: %s\n" % e)
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

# **post_organisations_id_addonproviders_provider_id_testers_0**
> post_organisations_id_addonproviders_provider_id_testers_0(id, provider_id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 

    try:
        api_instance.post_organisations_id_addonproviders_provider_id_testers_0(id, provider_id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->post_organisations_id_addonproviders_provider_id_testers_0: %s\n" % e)
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

# **post_organisations_id_addons_1**
> Addon post_organisations_id_addons_1(id, wannabe_addon)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    wannabe_addon = openapi_client.WannabeAddon() # WannabeAddon | 

    try:
        api_response = api_instance.post_organisations_id_addons_1(id, wannabe_addon)
        print("The response of OrganisationsApi->post_organisations_id_addons_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->post_organisations_id_addons_1: %s\n" % e)
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

# **post_organisations_id_applications_1**
> Application post_organisations_id_applications_1(id, wannabe_application)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    wannabe_application = openapi_client.WannabeApplication() # WannabeApplication | 

    try:
        api_response = api_instance.post_organisations_id_applications_1(id, wannabe_application)
        print("The response of OrganisationsApi->post_organisations_id_applications_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->post_organisations_id_applications_1: %s\n" % e)
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

# **post_organisations_id_applications_app_id_addons_2**
> post_organisations_id_applications_app_id_addons_2(id, app_id, body)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.post_organisations_id_applications_app_id_addons_2(id, app_id, body)
    except Exception as e:
        print("Exception when calling OrganisationsApi->post_organisations_id_applications_app_id_addons_2: %s\n" % e)
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

# **post_organisations_id_applications_app_id_instances_1**
> post_organisations_id_applications_app_id_instances_1(id, app_id, commit=commit)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    commit = 'commit_example' # str |  (optional)

    try:
        api_instance.post_organisations_id_applications_app_id_instances_1(id, app_id, commit=commit)
    except Exception as e:
        print("Exception when calling OrganisationsApi->post_organisations_id_applications_app_id_instances_1: %s\n" % e)
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

# **post_organisations_id_consumers_0**
> post_organisations_id_consumers_0(id, wannabe_consumer)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    wannabe_consumer = openapi_client.WannabeConsumer() # WannabeConsumer | 

    try:
        api_instance.post_organisations_id_consumers_0(id, wannabe_consumer)
    except Exception as e:
        print("Exception when calling OrganisationsApi->post_organisations_id_consumers_0: %s\n" % e)
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

# **post_organisations_id_members_0**
> post_organisations_id_members_0(id, body, invitation_key=invitation_key)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    body = openapi_client.Schema2() # Schema2 | 
    invitation_key = 'invitation_key_example' # str |  (optional)

    try:
        api_instance.post_organisations_id_members_0(id, body, invitation_key=invitation_key)
    except Exception as e:
        print("Exception when calling OrganisationsApi->post_organisations_id_members_0: %s\n" % e)
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

# **post_organisations_id_payments_billings_0**
> post_organisations_id_payments_billings_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.post_organisations_id_payments_billings_0(id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->post_organisations_id_payments_billings_0: %s\n" % e)
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

# **put_organisations_id_0**
> Organisation put_organisations_id_0(id, wannabe_organisation)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    wannabe_organisation = openapi_client.WannabeOrganisation() # WannabeOrganisation | 

    try:
        api_response = api_instance.put_organisations_id_0(id, wannabe_organisation)
        print("The response of OrganisationsApi->put_organisations_id_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_0: %s\n" % e)
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

# **put_organisations_id_addonproviders_provider_id_0**
> Provider put_organisations_id_addonproviders_provider_id_0(id, provider_id, wannabe_addon_provider)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 
    wannabe_addon_provider = openapi_client.WannabeAddonProvider() # WannabeAddonProvider | 

    try:
        api_response = api_instance.put_organisations_id_addonproviders_provider_id_0(id, provider_id, wannabe_addon_provider)
        print("The response of OrganisationsApi->put_organisations_id_addonproviders_provider_id_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_addonproviders_provider_id_0: %s\n" % e)
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

# **put_organisations_id_addonproviders_provider_id_plans_plan_id_0**
> Plan put_organisations_id_addonproviders_provider_id_plans_plan_id_0(id, provider_id, plan_id, wannabe_plan)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    provider_id = 'provider_id_example' # str | 
    plan_id = 'plan_id_example' # str | 
    wannabe_plan = openapi_client.WannabePlan() # WannabePlan | 

    try:
        api_response = api_instance.put_organisations_id_addonproviders_provider_id_plans_plan_id_0(id, provider_id, plan_id, wannabe_plan)
        print("The response of OrganisationsApi->put_organisations_id_addonproviders_provider_id_plans_plan_id_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_addonproviders_provider_id_plans_plan_id_0: %s\n" % e)
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

# **put_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name_0**
> put_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name_0(id, feature_name, provider_id, plan_id, wannabe_plan_feature)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    feature_name = 'feature_name_example' # str | 
    provider_id = 'provider_id_example' # str | 
    plan_id = 'plan_id_example' # str | 
    wannabe_plan_feature = openapi_client.WannabePlanFeature() # WannabePlanFeature | 

    try:
        api_instance.put_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name_0(id, feature_name, provider_id, plan_id, wannabe_plan_feature)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_addonproviders_provider_id_plans_plan_id_features_feature_name_0: %s\n" % e)
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

# **put_organisations_id_addons_addon_id_1**
> Addon put_organisations_id_addons_addon_id_1(id, addon_id, wannabe_addon)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    addon_id = 'addon_id_example' # str | 
    wannabe_addon = openapi_client.WannabeAddon() # WannabeAddon | 

    try:
        api_response = api_instance.put_organisations_id_addons_addon_id_1(id, addon_id, wannabe_addon)
        print("The response of OrganisationsApi->put_organisations_id_addons_addon_id_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_addons_addon_id_1: %s\n" % e)
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

# **put_organisations_id_addons_addon_id_tags_tag_1**
> put_organisations_id_addons_addon_id_tags_tag_1(id, tag, addon_id, body)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    tag = 'tag_example' # str | 
    addon_id = 'addon_id_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.put_organisations_id_addons_addon_id_tags_tag_1(id, tag, addon_id, body)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_addons_addon_id_tags_tag_1: %s\n" % e)
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

# **put_organisations_id_applications_app_id_1**
> Application put_organisations_id_applications_app_id_1(id, app_id, wannabe_application)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    wannabe_application = openapi_client.WannabeApplication() # WannabeApplication | 

    try:
        api_response = api_instance.put_organisations_id_applications_app_id_1(id, app_id, wannabe_application)
        print("The response of OrganisationsApi->put_organisations_id_applications_app_id_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_applications_app_id_1: %s\n" % e)
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

# **put_organisations_id_applications_app_id_dependencies_dependency_id_1**
> put_organisations_id_applications_app_id_dependencies_dependency_id_1(dependency_id, app_id, id, body)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    dependency_id = 'dependency_id_example' # str | 
    app_id = 'app_id_example' # str | 
    id = 'id_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.put_organisations_id_applications_app_id_dependencies_dependency_id_1(dependency_id, app_id, id, body)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_applications_app_id_dependencies_dependency_id_1: %s\n" % e)
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

# **put_organisations_id_applications_app_id_env_1**
> ListEnv put_organisations_id_applications_app_id_env_1(id, app_id, wannabe_env)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    wannabe_env = openapi_client.WannabeEnv() # WannabeEnv | 

    try:
        api_response = api_instance.put_organisations_id_applications_app_id_env_1(id, app_id, wannabe_env)
        print("The response of OrganisationsApi->put_organisations_id_applications_app_id_env_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_applications_app_id_env_1: %s\n" % e)
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

# **put_organisations_id_applications_app_id_env_env_name_1**
> ListEnv put_organisations_id_applications_app_id_env_env_name_1(id, app_id, env_name, wannabe_env)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    env_name = 'env_name_example' # str | 
    wannabe_env = openapi_client.WannabeEnv() # WannabeEnv | 

    try:
        api_response = api_instance.put_organisations_id_applications_app_id_env_env_name_1(id, app_id, env_name, wannabe_env)
        print("The response of OrganisationsApi->put_organisations_id_applications_app_id_env_env_name_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_applications_app_id_env_env_name_1: %s\n" % e)
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

# **put_organisations_id_applications_app_id_tags_tag_1**
> put_organisations_id_applications_app_id_tags_tag_1(id, app_id, tag, body)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    tag = 'tag_example' # str | 
    body = openapi_client.Body() # Body | 

    try:
        api_instance.put_organisations_id_applications_app_id_tags_tag_1(id, app_id, tag, body)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_applications_app_id_tags_tag_1: %s\n" % e)
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

# **put_organisations_id_applications_app_id_vhosts_domain_1**
> put_organisations_id_applications_app_id_vhosts_domain_1(id, app_id, domain, vhost)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    domain = 'domain_example' # str | 
    vhost = openapi_client.Vhost() # Vhost | 

    try:
        api_instance.put_organisations_id_applications_app_id_vhosts_domain_1(id, app_id, domain, vhost)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_applications_app_id_vhosts_domain_1: %s\n" % e)
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

# **put_organisations_id_applications_app_id_vhosts_favourite_1**
> put_organisations_id_applications_app_id_vhosts_favourite_1(id, app_id, vhost)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    app_id = 'app_id_example' # str | 
    vhost = openapi_client.Vhost() # Vhost | 

    try:
        api_instance.put_organisations_id_applications_app_id_vhosts_favourite_1(id, app_id, vhost)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_applications_app_id_vhosts_favourite_1: %s\n" % e)
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

# **put_organisations_id_avatar_0**
> put_organisations_id_avatar_0(id)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.put_organisations_id_avatar_0(id)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_avatar_0: %s\n" % e)
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

# **put_organisations_id_consumers_key_0**
> put_organisations_id_consumers_key_0(id, key, wannabe_consumer)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    key = 'key_example' # str | 
    wannabe_consumer = openapi_client.WannabeConsumer() # WannabeConsumer | 

    try:
        api_instance.put_organisations_id_consumers_key_0(id, key, wannabe_consumer)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_consumers_key_0: %s\n" % e)
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

# **put_organisations_id_members_user_id_0**
> put_organisations_id_members_user_id_0(id, user_id, body)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    user_id = 'user_id_example' # str | 
    body = openapi_client.Schema2() # Schema2 | 

    try:
        api_instance.put_organisations_id_members_user_id_0(id, user_id, body)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_members_user_id_0: %s\n" % e)
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

# **put_organisations_id_payments_billings_bid_0**
> put_organisations_id_payments_billings_bid_0(id, bid)



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
    api_instance = openapi_client.OrganisationsApi(api_client)
    id = 'id_example' # str | 
    bid = 'bid_example' # str | 

    try:
        api_instance.put_organisations_id_payments_billings_bid_0(id, bid)
    except Exception as e:
        print("Exception when calling OrganisationsApi->put_organisations_id_payments_billings_bid_0: %s\n" % e)
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

