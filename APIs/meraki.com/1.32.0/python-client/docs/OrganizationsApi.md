# openapi_client.OrganizationsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assign_organization_licenses_seats**](OrganizationsApi.md#assign_organization_licenses_seats) | **POST** /organizations/{organizationId}/licenses/assignSeats | Assign SM seats to a network
[**claim_into_organization**](OrganizationsApi.md#claim_into_organization) | **POST** /organizations/{organizationId}/claim | Claim a list of devices, licenses, and/or orders into an organization
[**claim_into_organization_inventory**](OrganizationsApi.md#claim_into_organization_inventory) | **POST** /organizations/{organizationId}/inventory/claim | Claim a list of devices, licenses, and/or orders into an organization inventory
[**clone_organization**](OrganizationsApi.md#clone_organization) | **POST** /organizations/{organizationId}/clone | Create a new organization by cloning the addressed organization
[**combine_organization_networks**](OrganizationsApi.md#combine_organization_networks) | **POST** /organizations/{organizationId}/networks/combine | Combine multiple networks into a single network
[**create_organization**](OrganizationsApi.md#create_organization) | **POST** /organizations | Create a new organization
[**create_organization_action_batch**](OrganizationsApi.md#create_organization_action_batch) | **POST** /organizations/{organizationId}/actionBatches | Create an action batch
[**create_organization_adaptive_policy_acl**](OrganizationsApi.md#create_organization_adaptive_policy_acl) | **POST** /organizations/{organizationId}/adaptivePolicy/acls | Creates new adaptive policy ACL
[**create_organization_adaptive_policy_group**](OrganizationsApi.md#create_organization_adaptive_policy_group) | **POST** /organizations/{organizationId}/adaptivePolicy/groups | Creates a new adaptive policy group
[**create_organization_adaptive_policy_policy**](OrganizationsApi.md#create_organization_adaptive_policy_policy) | **POST** /organizations/{organizationId}/adaptivePolicy/policies | Add an Adaptive Policy
[**create_organization_admin**](OrganizationsApi.md#create_organization_admin) | **POST** /organizations/{organizationId}/admins | Create a new dashboard administrator
[**create_organization_alerts_profile**](OrganizationsApi.md#create_organization_alerts_profile) | **POST** /organizations/{organizationId}/alerts/profiles | Create an organization-wide alert configuration
[**create_organization_branding_policy**](OrganizationsApi.md#create_organization_branding_policy) | **POST** /organizations/{organizationId}/brandingPolicies | Add a new branding policy to an organization
[**create_organization_config_template**](OrganizationsApi.md#create_organization_config_template) | **POST** /organizations/{organizationId}/configTemplates | Create a new configuration template
[**create_organization_early_access_features_opt_in**](OrganizationsApi.md#create_organization_early_access_features_opt_in) | **POST** /organizations/{organizationId}/earlyAccess/features/optIns | Create a new early access feature opt-in for an organization
[**create_organization_inventory_onboarding_cloud_monitoring_export_event**](OrganizationsApi.md#create_organization_inventory_onboarding_cloud_monitoring_export_event) | **POST** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/exportEvents | Imports event logs related to the onboarding app into elastisearch
[**create_organization_inventory_onboarding_cloud_monitoring_import**](OrganizationsApi.md#create_organization_inventory_onboarding_cloud_monitoring_import) | **POST** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/imports | Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
[**create_organization_inventory_onboarding_cloud_monitoring_prepare**](OrganizationsApi.md#create_organization_inventory_onboarding_cloud_monitoring_prepare) | **POST** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/prepare | Initiates or updates an import session
[**create_organization_network**](OrganizationsApi.md#create_organization_network) | **POST** /organizations/{organizationId}/networks | Create a network
[**create_organization_policy_object**](OrganizationsApi.md#create_organization_policy_object) | **POST** /organizations/{organizationId}/policyObjects | Creates a new Policy Object.
[**create_organization_policy_objects_group**](OrganizationsApi.md#create_organization_policy_objects_group) | **POST** /organizations/{organizationId}/policyObjects/groups | Creates a new Policy Object Group.
[**create_organization_saml_idp**](OrganizationsApi.md#create_organization_saml_idp) | **POST** /organizations/{organizationId}/saml/idps | Create a SAML IdP for your organization.
[**create_organization_saml_role**](OrganizationsApi.md#create_organization_saml_role) | **POST** /organizations/{organizationId}/samlRoles | Create a SAML role
[**delete_organization**](OrganizationsApi.md#delete_organization) | **DELETE** /organizations/{organizationId} | Delete an organization
[**delete_organization_action_batch**](OrganizationsApi.md#delete_organization_action_batch) | **DELETE** /organizations/{organizationId}/actionBatches/{actionBatchId} | Delete an action batch
[**delete_organization_adaptive_policy_acl**](OrganizationsApi.md#delete_organization_adaptive_policy_acl) | **DELETE** /organizations/{organizationId}/adaptivePolicy/acls/{aclId} | Deletes the specified adaptive policy ACL
[**delete_organization_adaptive_policy_group**](OrganizationsApi.md#delete_organization_adaptive_policy_group) | **DELETE** /organizations/{organizationId}/adaptivePolicy/groups/{id} | Deletes the specified adaptive policy group and any associated policies and references
[**delete_organization_adaptive_policy_policy**](OrganizationsApi.md#delete_organization_adaptive_policy_policy) | **DELETE** /organizations/{organizationId}/adaptivePolicy/policies/{id} | Delete an Adaptive Policy
[**delete_organization_admin**](OrganizationsApi.md#delete_organization_admin) | **DELETE** /organizations/{organizationId}/admins/{adminId} | Revoke all access for a dashboard administrator within this organization
[**delete_organization_alerts_profile**](OrganizationsApi.md#delete_organization_alerts_profile) | **DELETE** /organizations/{organizationId}/alerts/profiles/{alertConfigId} | Removes an organization-wide alert config
[**delete_organization_branding_policy**](OrganizationsApi.md#delete_organization_branding_policy) | **DELETE** /organizations/{organizationId}/brandingPolicies/{brandingPolicyId} | Delete a branding policy
[**delete_organization_config_template**](OrganizationsApi.md#delete_organization_config_template) | **DELETE** /organizations/{organizationId}/configTemplates/{configTemplateId} | Remove a configuration template
[**delete_organization_early_access_features_opt_in**](OrganizationsApi.md#delete_organization_early_access_features_opt_in) | **DELETE** /organizations/{organizationId}/earlyAccess/features/optIns/{optInId} | Delete an early access feature opt-in
[**delete_organization_policy_object**](OrganizationsApi.md#delete_organization_policy_object) | **DELETE** /organizations/{organizationId}/policyObjects/{policyObjectId} | Deletes a Policy Object.
[**delete_organization_policy_objects_group**](OrganizationsApi.md#delete_organization_policy_objects_group) | **DELETE** /organizations/{organizationId}/policyObjects/groups/{policyObjectGroupId} | Deletes a Policy Object Group.
[**delete_organization_saml_idp**](OrganizationsApi.md#delete_organization_saml_idp) | **DELETE** /organizations/{organizationId}/saml/idps/{idpId} | Remove a SAML IdP in your organization.
[**delete_organization_saml_role**](OrganizationsApi.md#delete_organization_saml_role) | **DELETE** /organizations/{organizationId}/samlRoles/{samlRoleId} | Remove a SAML role
[**delete_organization_user**](OrganizationsApi.md#delete_organization_user) | **DELETE** /organizations/{organizationId}/users/{userId} | Delete a user and all of its authentication methods.
[**get_organization**](OrganizationsApi.md#get_organization) | **GET** /organizations/{organizationId} | Return an organization
[**get_organization_action_batch**](OrganizationsApi.md#get_organization_action_batch) | **GET** /organizations/{organizationId}/actionBatches/{actionBatchId} | Return an action batch
[**get_organization_action_batches**](OrganizationsApi.md#get_organization_action_batches) | **GET** /organizations/{organizationId}/actionBatches | Return the list of action batches in the organization
[**get_organization_adaptive_policy_acl**](OrganizationsApi.md#get_organization_adaptive_policy_acl) | **GET** /organizations/{organizationId}/adaptivePolicy/acls/{aclId} | Returns the adaptive policy ACL information
[**get_organization_adaptive_policy_acls**](OrganizationsApi.md#get_organization_adaptive_policy_acls) | **GET** /organizations/{organizationId}/adaptivePolicy/acls | List adaptive policy ACLs in a organization
[**get_organization_adaptive_policy_group**](OrganizationsApi.md#get_organization_adaptive_policy_group) | **GET** /organizations/{organizationId}/adaptivePolicy/groups/{id} | Returns an adaptive policy group
[**get_organization_adaptive_policy_groups**](OrganizationsApi.md#get_organization_adaptive_policy_groups) | **GET** /organizations/{organizationId}/adaptivePolicy/groups | List adaptive policy groups in a organization
[**get_organization_adaptive_policy_overview**](OrganizationsApi.md#get_organization_adaptive_policy_overview) | **GET** /organizations/{organizationId}/adaptivePolicy/overview | Returns adaptive policy aggregate statistics for an organization
[**get_organization_adaptive_policy_policies**](OrganizationsApi.md#get_organization_adaptive_policy_policies) | **GET** /organizations/{organizationId}/adaptivePolicy/policies | List adaptive policies in an organization
[**get_organization_adaptive_policy_policy**](OrganizationsApi.md#get_organization_adaptive_policy_policy) | **GET** /organizations/{organizationId}/adaptivePolicy/policies/{id} | Return an adaptive policy
[**get_organization_adaptive_policy_settings**](OrganizationsApi.md#get_organization_adaptive_policy_settings) | **GET** /organizations/{organizationId}/adaptivePolicy/settings | Returns global adaptive policy settings in an organization
[**get_organization_admins**](OrganizationsApi.md#get_organization_admins) | **GET** /organizations/{organizationId}/admins | List the dashboard administrators in this organization
[**get_organization_alerts_profiles**](OrganizationsApi.md#get_organization_alerts_profiles) | **GET** /organizations/{organizationId}/alerts/profiles | List all organization-wide alert configurations
[**get_organization_api_requests**](OrganizationsApi.md#get_organization_api_requests) | **GET** /organizations/{organizationId}/apiRequests | List the API requests made by an organization
[**get_organization_api_requests_overview**](OrganizationsApi.md#get_organization_api_requests_overview) | **GET** /organizations/{organizationId}/apiRequests/overview | Return an aggregated overview of API requests data
[**get_organization_api_requests_overview_response_codes_by_interval**](OrganizationsApi.md#get_organization_api_requests_overview_response_codes_by_interval) | **GET** /organizations/{organizationId}/apiRequests/overview/responseCodes/byInterval | Tracks organizations&#39; API requests by response code across a given time period
[**get_organization_branding_policies**](OrganizationsApi.md#get_organization_branding_policies) | **GET** /organizations/{organizationId}/brandingPolicies | List the branding policies of an organization
[**get_organization_branding_policies_priorities**](OrganizationsApi.md#get_organization_branding_policies_priorities) | **GET** /organizations/{organizationId}/brandingPolicies/priorities | Return the branding policy IDs of an organization in priority order
[**get_organization_branding_policy**](OrganizationsApi.md#get_organization_branding_policy) | **GET** /organizations/{organizationId}/brandingPolicies/{brandingPolicyId} | Return a branding policy
[**get_organization_clients_bandwidth_usage_history**](OrganizationsApi.md#get_organization_clients_bandwidth_usage_history) | **GET** /organizations/{organizationId}/clients/bandwidthUsageHistory | Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
[**get_organization_clients_overview**](OrganizationsApi.md#get_organization_clients_overview) | **GET** /organizations/{organizationId}/clients/overview | Return summary information around client data usage (in mb) across the given organization.
[**get_organization_clients_search**](OrganizationsApi.md#get_organization_clients_search) | **GET** /organizations/{organizationId}/clients/search | Return the client details in an organization
[**get_organization_config_template**](OrganizationsApi.md#get_organization_config_template) | **GET** /organizations/{organizationId}/configTemplates/{configTemplateId} | Return a single configuration template
[**get_organization_config_templates**](OrganizationsApi.md#get_organization_config_templates) | **GET** /organizations/{organizationId}/configTemplates | List the configuration templates for this organization
[**get_organization_configuration_changes**](OrganizationsApi.md#get_organization_configuration_changes) | **GET** /organizations/{organizationId}/configurationChanges | View the Change Log for your organization
[**get_organization_devices**](OrganizationsApi.md#get_organization_devices) | **GET** /organizations/{organizationId}/devices | List the devices in an organization
[**get_organization_devices_availabilities**](OrganizationsApi.md#get_organization_devices_availabilities) | **GET** /organizations/{organizationId}/devices/availabilities | List the availability information for devices in an organization
[**get_organization_devices_power_modules_statuses_by_device**](OrganizationsApi.md#get_organization_devices_power_modules_statuses_by_device) | **GET** /organizations/{organizationId}/devices/powerModules/statuses/byDevice | List the power status information for devices in an organization
[**get_organization_devices_statuses**](OrganizationsApi.md#get_organization_devices_statuses) | **GET** /organizations/{organizationId}/devices/statuses | List the status of every Meraki device in the organization
[**get_organization_devices_statuses_overview**](OrganizationsApi.md#get_organization_devices_statuses_overview) | **GET** /organizations/{organizationId}/devices/statuses/overview | Return an overview of current device statuses
[**get_organization_devices_uplinks_addresses_by_device**](OrganizationsApi.md#get_organization_devices_uplinks_addresses_by_device) | **GET** /organizations/{organizationId}/devices/uplinks/addresses/byDevice | List the current uplink addresses for devices in an organization.
[**get_organization_devices_uplinks_loss_and_latency**](OrganizationsApi.md#get_organization_devices_uplinks_loss_and_latency) | **GET** /organizations/{organizationId}/devices/uplinksLossAndLatency | Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
[**get_organization_early_access_features**](OrganizationsApi.md#get_organization_early_access_features) | **GET** /organizations/{organizationId}/earlyAccess/features | List the available early access features for organization
[**get_organization_early_access_features_opt_in**](OrganizationsApi.md#get_organization_early_access_features_opt_in) | **GET** /organizations/{organizationId}/earlyAccess/features/optIns/{optInId} | Show an early access feature opt-in for an organization
[**get_organization_early_access_features_opt_ins**](OrganizationsApi.md#get_organization_early_access_features_opt_ins) | **GET** /organizations/{organizationId}/earlyAccess/features/optIns | List the early access feature opt-ins for an organization
[**get_organization_firmware_upgrades**](OrganizationsApi.md#get_organization_firmware_upgrades) | **GET** /organizations/{organizationId}/firmware/upgrades | Get firmware upgrade information for an organization
[**get_organization_firmware_upgrades_by_device**](OrganizationsApi.md#get_organization_firmware_upgrades_by_device) | **GET** /organizations/{organizationId}/firmware/upgrades/byDevice | Get firmware upgrade status for the filtered devices
[**get_organization_inventory_device**](OrganizationsApi.md#get_organization_inventory_device) | **GET** /organizations/{organizationId}/inventory/devices/{serial} | Return a single device from the inventory of an organization
[**get_organization_inventory_devices**](OrganizationsApi.md#get_organization_inventory_devices) | **GET** /organizations/{organizationId}/inventory/devices | Return the device inventory for an organization
[**get_organization_inventory_onboarding_cloud_monitoring_imports**](OrganizationsApi.md#get_organization_inventory_onboarding_cloud_monitoring_imports) | **GET** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/imports | Check the status of a committed Import operation
[**get_organization_inventory_onboarding_cloud_monitoring_networks**](OrganizationsApi.md#get_organization_inventory_onboarding_cloud_monitoring_networks) | **GET** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/networks | Returns list of networks eligible for adding cloud monitored device
[**get_organization_license**](OrganizationsApi.md#get_organization_license) | **GET** /organizations/{organizationId}/licenses/{licenseId} | Display a license
[**get_organization_licenses**](OrganizationsApi.md#get_organization_licenses) | **GET** /organizations/{organizationId}/licenses | List the licenses for an organization
[**get_organization_licenses_overview**](OrganizationsApi.md#get_organization_licenses_overview) | **GET** /organizations/{organizationId}/licenses/overview | Return an overview of the license state for an organization
[**get_organization_login_security**](OrganizationsApi.md#get_organization_login_security) | **GET** /organizations/{organizationId}/loginSecurity | Returns the login security settings for an organization.
[**get_organization_networks**](OrganizationsApi.md#get_organization_networks) | **GET** /organizations/{organizationId}/networks | List the networks that the user has privileges on in an organization
[**get_organization_openapi_spec**](OrganizationsApi.md#get_organization_openapi_spec) | **GET** /organizations/{organizationId}/openapiSpec | Return the OpenAPI 2.0 Specification of the organization&#39;s API documentation in JSON
[**get_organization_policy_object**](OrganizationsApi.md#get_organization_policy_object) | **GET** /organizations/{organizationId}/policyObjects/{policyObjectId} | Shows details of a Policy Object.
[**get_organization_policy_objects**](OrganizationsApi.md#get_organization_policy_objects) | **GET** /organizations/{organizationId}/policyObjects | Lists Policy Objects belonging to the organization.
[**get_organization_policy_objects_group**](OrganizationsApi.md#get_organization_policy_objects_group) | **GET** /organizations/{organizationId}/policyObjects/groups/{policyObjectGroupId} | Shows details of a Policy Object Group.
[**get_organization_policy_objects_groups**](OrganizationsApi.md#get_organization_policy_objects_groups) | **GET** /organizations/{organizationId}/policyObjects/groups | Lists Policy Object Groups belonging to the organization.
[**get_organization_saml**](OrganizationsApi.md#get_organization_saml) | **GET** /organizations/{organizationId}/saml | Returns the SAML SSO enabled settings for an organization.
[**get_organization_saml_idp**](OrganizationsApi.md#get_organization_saml_idp) | **GET** /organizations/{organizationId}/saml/idps/{idpId} | Get a SAML IdP from your organization.
[**get_organization_saml_idps**](OrganizationsApi.md#get_organization_saml_idps) | **GET** /organizations/{organizationId}/saml/idps | List the SAML IdPs in your organization.
[**get_organization_saml_role**](OrganizationsApi.md#get_organization_saml_role) | **GET** /organizations/{organizationId}/samlRoles/{samlRoleId} | Return a SAML role
[**get_organization_saml_roles**](OrganizationsApi.md#get_organization_saml_roles) | **GET** /organizations/{organizationId}/samlRoles | List the SAML roles for this organization
[**get_organization_snmp**](OrganizationsApi.md#get_organization_snmp) | **GET** /organizations/{organizationId}/snmp | Return the SNMP settings for an organization
[**get_organization_summary_top_appliances_by_utilization**](OrganizationsApi.md#get_organization_summary_top_appliances_by_utilization) | **GET** /organizations/{organizationId}/summary/top/appliances/byUtilization | Return the top 10 appliances sorted by utilization over given time range.
[**get_organization_summary_top_clients_by_usage**](OrganizationsApi.md#get_organization_summary_top_clients_by_usage) | **GET** /organizations/{organizationId}/summary/top/clients/byUsage | Return metrics for organization&#39;s top 10 clients by data usage (in mb) over given time range.
[**get_organization_summary_top_clients_manufacturers_by_usage**](OrganizationsApi.md#get_organization_summary_top_clients_manufacturers_by_usage) | **GET** /organizations/{organizationId}/summary/top/clients/manufacturers/byUsage | Return metrics for organization&#39;s top clients by data usage (in mb) over given time range, grouped by manufacturer.
[**get_organization_summary_top_devices_by_usage**](OrganizationsApi.md#get_organization_summary_top_devices_by_usage) | **GET** /organizations/{organizationId}/summary/top/devices/byUsage | Return metrics for organization&#39;s top 10 devices sorted by data usage over given time range
[**get_organization_summary_top_devices_models_by_usage**](OrganizationsApi.md#get_organization_summary_top_devices_models_by_usage) | **GET** /organizations/{organizationId}/summary/top/devices/models/byUsage | Return metrics for organization&#39;s top 10 device models sorted by data usage over given time range
[**get_organization_summary_top_ssids_by_usage**](OrganizationsApi.md#get_organization_summary_top_ssids_by_usage) | **GET** /organizations/{organizationId}/summary/top/ssids/byUsage | Return metrics for organization&#39;s top 10 ssids by data usage over given time range
[**get_organization_summary_top_switches_by_energy_usage**](OrganizationsApi.md#get_organization_summary_top_switches_by_energy_usage) | **GET** /organizations/{organizationId}/summary/top/switches/byEnergyUsage | Return metrics for organization&#39;s top 10 switches by energy usage over given time range
[**get_organization_uplinks_statuses**](OrganizationsApi.md#get_organization_uplinks_statuses) | **GET** /organizations/{organizationId}/uplinks/statuses | List the uplink status of every Meraki MX, MG and Z series devices in the organization
[**get_organization_webhooks_alert_types**](OrganizationsApi.md#get_organization_webhooks_alert_types) | **GET** /organizations/{organizationId}/webhooks/alertTypes | Return a list of alert types to be used with managing webhook alerts
[**get_organization_webhooks_logs**](OrganizationsApi.md#get_organization_webhooks_logs) | **GET** /organizations/{organizationId}/webhooks/logs | Return the log of webhook POSTs sent
[**get_organizations**](OrganizationsApi.md#get_organizations) | **GET** /organizations | List the organizations that the user has privileges on
[**move_organization_licenses**](OrganizationsApi.md#move_organization_licenses) | **POST** /organizations/{organizationId}/licenses/move | Move licenses to another organization
[**move_organization_licenses_seats**](OrganizationsApi.md#move_organization_licenses_seats) | **POST** /organizations/{organizationId}/licenses/moveSeats | Move SM seats to another organization
[**release_from_organization_inventory**](OrganizationsApi.md#release_from_organization_inventory) | **POST** /organizations/{organizationId}/inventory/release | Release a list of claimed devices from an organization.
[**renew_organization_licenses_seats**](OrganizationsApi.md#renew_organization_licenses_seats) | **POST** /organizations/{organizationId}/licenses/renewSeats | Renew SM seats of a license
[**update_organization**](OrganizationsApi.md#update_organization) | **PUT** /organizations/{organizationId} | Update an organization
[**update_organization_action_batch**](OrganizationsApi.md#update_organization_action_batch) | **PUT** /organizations/{organizationId}/actionBatches/{actionBatchId} | Update an action batch
[**update_organization_adaptive_policy_acl**](OrganizationsApi.md#update_organization_adaptive_policy_acl) | **PUT** /organizations/{organizationId}/adaptivePolicy/acls/{aclId} | Updates an adaptive policy ACL
[**update_organization_adaptive_policy_group**](OrganizationsApi.md#update_organization_adaptive_policy_group) | **PUT** /organizations/{organizationId}/adaptivePolicy/groups/{id} | Updates an adaptive policy group
[**update_organization_adaptive_policy_policy**](OrganizationsApi.md#update_organization_adaptive_policy_policy) | **PUT** /organizations/{organizationId}/adaptivePolicy/policies/{id} | Update an Adaptive Policy
[**update_organization_adaptive_policy_settings**](OrganizationsApi.md#update_organization_adaptive_policy_settings) | **PUT** /organizations/{organizationId}/adaptivePolicy/settings | Update global adaptive policy settings
[**update_organization_admin**](OrganizationsApi.md#update_organization_admin) | **PUT** /organizations/{organizationId}/admins/{adminId} | Update an administrator
[**update_organization_alerts_profile**](OrganizationsApi.md#update_organization_alerts_profile) | **PUT** /organizations/{organizationId}/alerts/profiles/{alertConfigId} | Update an organization-wide alert config
[**update_organization_branding_policies_priorities**](OrganizationsApi.md#update_organization_branding_policies_priorities) | **PUT** /organizations/{organizationId}/brandingPolicies/priorities | Update the priority ordering of an organization&#39;s branding policies.
[**update_organization_branding_policy**](OrganizationsApi.md#update_organization_branding_policy) | **PUT** /organizations/{organizationId}/brandingPolicies/{brandingPolicyId} | Update a branding policy
[**update_organization_config_template**](OrganizationsApi.md#update_organization_config_template) | **PUT** /organizations/{organizationId}/configTemplates/{configTemplateId} | Update a configuration template
[**update_organization_early_access_features_opt_in**](OrganizationsApi.md#update_organization_early_access_features_opt_in) | **PUT** /organizations/{organizationId}/earlyAccess/features/optIns/{optInId} | Update an early access feature opt-in for an organization
[**update_organization_license**](OrganizationsApi.md#update_organization_license) | **PUT** /organizations/{organizationId}/licenses/{licenseId} | Update a license
[**update_organization_login_security**](OrganizationsApi.md#update_organization_login_security) | **PUT** /organizations/{organizationId}/loginSecurity | Update the login security settings for an organization
[**update_organization_policy_object**](OrganizationsApi.md#update_organization_policy_object) | **PUT** /organizations/{organizationId}/policyObjects/{policyObjectId} | Updates a Policy Object.
[**update_organization_policy_objects_group**](OrganizationsApi.md#update_organization_policy_objects_group) | **PUT** /organizations/{organizationId}/policyObjects/groups/{policyObjectGroupId} | Updates a Policy Object Group.
[**update_organization_saml**](OrganizationsApi.md#update_organization_saml) | **PUT** /organizations/{organizationId}/saml | Updates the SAML SSO enabled settings for an organization.
[**update_organization_saml_idp**](OrganizationsApi.md#update_organization_saml_idp) | **PUT** /organizations/{organizationId}/saml/idps/{idpId} | Update a SAML IdP in your organization
[**update_organization_saml_role**](OrganizationsApi.md#update_organization_saml_role) | **PUT** /organizations/{organizationId}/samlRoles/{samlRoleId} | Update a SAML role
[**update_organization_snmp**](OrganizationsApi.md#update_organization_snmp) | **PUT** /organizations/{organizationId}/snmp | Update the SNMP settings for an organization


# **assign_organization_licenses_seats**
> AssignOrganizationLicensesSeats200Response assign_organization_licenses_seats(organization_id, assign_organization_licenses_seats_request)

Assign SM seats to a network

Assign SM seats to a network. This will increase the managed SM device limit of the network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.assign_organization_licenses_seats200_response import AssignOrganizationLicensesSeats200Response
from openapi_client.models.assign_organization_licenses_seats_request import AssignOrganizationLicensesSeatsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    assign_organization_licenses_seats_request = openapi_client.AssignOrganizationLicensesSeatsRequest() # AssignOrganizationLicensesSeatsRequest | 

    try:
        # Assign SM seats to a network
        api_response = api_instance.assign_organization_licenses_seats(organization_id, assign_organization_licenses_seats_request)
        print("The response of OrganizationsApi->assign_organization_licenses_seats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->assign_organization_licenses_seats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **assign_organization_licenses_seats_request** | [**AssignOrganizationLicensesSeatsRequest**](AssignOrganizationLicensesSeatsRequest.md)|  | 

### Return type

[**AssignOrganizationLicensesSeats200Response**](AssignOrganizationLicensesSeats200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **claim_into_organization**
> object claim_into_organization(organization_id, claim_into_organization_request=claim_into_organization_request)

Claim a list of devices, licenses, and/or orders into an organization

Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.claim_into_organization_request import ClaimIntoOrganizationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    claim_into_organization_request = openapi_client.ClaimIntoOrganizationRequest() # ClaimIntoOrganizationRequest |  (optional)

    try:
        # Claim a list of devices, licenses, and/or orders into an organization
        api_response = api_instance.claim_into_organization(organization_id, claim_into_organization_request=claim_into_organization_request)
        print("The response of OrganizationsApi->claim_into_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->claim_into_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **claim_into_organization_request** | [**ClaimIntoOrganizationRequest**](ClaimIntoOrganizationRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **claim_into_organization_inventory**
> object claim_into_organization_inventory(organization_id, claim_into_organization_inventory_request=claim_into_organization_inventory_request)

Claim a list of devices, licenses, and/or orders into an organization inventory

Claim a list of devices, licenses, and/or orders into an organization inventory. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory. Use /organizations/{organizationId}/inventory/release to release devices from an organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.claim_into_organization_inventory_request import ClaimIntoOrganizationInventoryRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    claim_into_organization_inventory_request = openapi_client.ClaimIntoOrganizationInventoryRequest() # ClaimIntoOrganizationInventoryRequest |  (optional)

    try:
        # Claim a list of devices, licenses, and/or orders into an organization inventory
        api_response = api_instance.claim_into_organization_inventory(organization_id, claim_into_organization_inventory_request=claim_into_organization_inventory_request)
        print("The response of OrganizationsApi->claim_into_organization_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->claim_into_organization_inventory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **claim_into_organization_inventory_request** | [**ClaimIntoOrganizationInventoryRequest**](ClaimIntoOrganizationInventoryRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clone_organization**
> GetOrganizations200ResponseInner clone_organization(organization_id, clone_organization_request)

Create a new organization by cloning the addressed organization

Create a new organization by cloning the addressed organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.clone_organization_request import CloneOrganizationRequest
from openapi_client.models.get_organizations200_response_inner import GetOrganizations200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    clone_organization_request = openapi_client.CloneOrganizationRequest() # CloneOrganizationRequest | 

    try:
        # Create a new organization by cloning the addressed organization
        api_response = api_instance.clone_organization(organization_id, clone_organization_request)
        print("The response of OrganizationsApi->clone_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->clone_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **clone_organization_request** | [**CloneOrganizationRequest**](CloneOrganizationRequest.md)|  | 

### Return type

[**GetOrganizations200ResponseInner**](GetOrganizations200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **combine_organization_networks**
> CombineOrganizationNetworks200Response combine_organization_networks(organization_id, combine_organization_networks_request)

Combine multiple networks into a single network

Combine multiple networks into a single network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.combine_organization_networks200_response import CombineOrganizationNetworks200Response
from openapi_client.models.combine_organization_networks_request import CombineOrganizationNetworksRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    combine_organization_networks_request = openapi_client.CombineOrganizationNetworksRequest() # CombineOrganizationNetworksRequest | 

    try:
        # Combine multiple networks into a single network
        api_response = api_instance.combine_organization_networks(organization_id, combine_organization_networks_request)
        print("The response of OrganizationsApi->combine_organization_networks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->combine_organization_networks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **combine_organization_networks_request** | [**CombineOrganizationNetworksRequest**](CombineOrganizationNetworksRequest.md)|  | 

### Return type

[**CombineOrganizationNetworks200Response**](CombineOrganizationNetworks200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization**
> GetOrganizations200ResponseInner create_organization(create_organization_request)

Create a new organization

Create a new organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_request import CreateOrganizationRequest
from openapi_client.models.get_organizations200_response_inner import GetOrganizations200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    create_organization_request = openapi_client.CreateOrganizationRequest() # CreateOrganizationRequest | 

    try:
        # Create a new organization
        api_response = api_instance.create_organization(create_organization_request)
        print("The response of OrganizationsApi->create_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_organization_request** | [**CreateOrganizationRequest**](CreateOrganizationRequest.md)|  | 

### Return type

[**GetOrganizations200ResponseInner**](GetOrganizations200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_action_batch**
> CreateOrganizationActionBatch201Response create_organization_action_batch(organization_id, create_organization_action_batch_request)

Create an action batch

Create an action batch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_action_batch201_response import CreateOrganizationActionBatch201Response
from openapi_client.models.create_organization_action_batch_request import CreateOrganizationActionBatchRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_action_batch_request = openapi_client.CreateOrganizationActionBatchRequest() # CreateOrganizationActionBatchRequest | 

    try:
        # Create an action batch
        api_response = api_instance.create_organization_action_batch(organization_id, create_organization_action_batch_request)
        print("The response of OrganizationsApi->create_organization_action_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_action_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_action_batch_request** | [**CreateOrganizationActionBatchRequest**](CreateOrganizationActionBatchRequest.md)|  | 

### Return type

[**CreateOrganizationActionBatch201Response**](CreateOrganizationActionBatch201Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_adaptive_policy_acl**
> object create_organization_adaptive_policy_acl(organization_id, create_organization_adaptive_policy_acl_request)

Creates new adaptive policy ACL

Creates new adaptive policy ACL

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_adaptive_policy_acl_request import CreateOrganizationAdaptivePolicyAclRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_adaptive_policy_acl_request = openapi_client.CreateOrganizationAdaptivePolicyAclRequest() # CreateOrganizationAdaptivePolicyAclRequest | 

    try:
        # Creates new adaptive policy ACL
        api_response = api_instance.create_organization_adaptive_policy_acl(organization_id, create_organization_adaptive_policy_acl_request)
        print("The response of OrganizationsApi->create_organization_adaptive_policy_acl:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_adaptive_policy_acl: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_adaptive_policy_acl_request** | [**CreateOrganizationAdaptivePolicyAclRequest**](CreateOrganizationAdaptivePolicyAclRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_adaptive_policy_group**
> object create_organization_adaptive_policy_group(organization_id, create_organization_adaptive_policy_group_request)

Creates a new adaptive policy group

Creates a new adaptive policy group

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_adaptive_policy_group_request import CreateOrganizationAdaptivePolicyGroupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_adaptive_policy_group_request = openapi_client.CreateOrganizationAdaptivePolicyGroupRequest() # CreateOrganizationAdaptivePolicyGroupRequest | 

    try:
        # Creates a new adaptive policy group
        api_response = api_instance.create_organization_adaptive_policy_group(organization_id, create_organization_adaptive_policy_group_request)
        print("The response of OrganizationsApi->create_organization_adaptive_policy_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_adaptive_policy_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_adaptive_policy_group_request** | [**CreateOrganizationAdaptivePolicyGroupRequest**](CreateOrganizationAdaptivePolicyGroupRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_adaptive_policy_policy**
> object create_organization_adaptive_policy_policy(organization_id, create_organization_adaptive_policy_policy_request)

Add an Adaptive Policy

Add an Adaptive Policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_adaptive_policy_policy_request import CreateOrganizationAdaptivePolicyPolicyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_adaptive_policy_policy_request = openapi_client.CreateOrganizationAdaptivePolicyPolicyRequest() # CreateOrganizationAdaptivePolicyPolicyRequest | 

    try:
        # Add an Adaptive Policy
        api_response = api_instance.create_organization_adaptive_policy_policy(organization_id, create_organization_adaptive_policy_policy_request)
        print("The response of OrganizationsApi->create_organization_adaptive_policy_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_adaptive_policy_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_adaptive_policy_policy_request** | [**CreateOrganizationAdaptivePolicyPolicyRequest**](CreateOrganizationAdaptivePolicyPolicyRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_admin**
> object create_organization_admin(organization_id, create_organization_admin_request)

Create a new dashboard administrator

Create a new dashboard administrator

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_admin_request import CreateOrganizationAdminRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_admin_request = openapi_client.CreateOrganizationAdminRequest() # CreateOrganizationAdminRequest | 

    try:
        # Create a new dashboard administrator
        api_response = api_instance.create_organization_admin(organization_id, create_organization_admin_request)
        print("The response of OrganizationsApi->create_organization_admin:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_admin: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_admin_request** | [**CreateOrganizationAdminRequest**](CreateOrganizationAdminRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_alerts_profile**
> object create_organization_alerts_profile(organization_id, create_organization_alerts_profile_request)

Create an organization-wide alert configuration

Create an organization-wide alert configuration

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_alerts_profile_request import CreateOrganizationAlertsProfileRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_alerts_profile_request = openapi_client.CreateOrganizationAlertsProfileRequest() # CreateOrganizationAlertsProfileRequest | 

    try:
        # Create an organization-wide alert configuration
        api_response = api_instance.create_organization_alerts_profile(organization_id, create_organization_alerts_profile_request)
        print("The response of OrganizationsApi->create_organization_alerts_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_alerts_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_alerts_profile_request** | [**CreateOrganizationAlertsProfileRequest**](CreateOrganizationAlertsProfileRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_branding_policy**
> CreateOrganizationBrandingPolicy201Response create_organization_branding_policy(organization_id, create_organization_branding_policy_request=create_organization_branding_policy_request)

Add a new branding policy to an organization

Add a new branding policy to an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_branding_policy201_response import CreateOrganizationBrandingPolicy201Response
from openapi_client.models.create_organization_branding_policy_request import CreateOrganizationBrandingPolicyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_branding_policy_request = openapi_client.CreateOrganizationBrandingPolicyRequest() # CreateOrganizationBrandingPolicyRequest |  (optional)

    try:
        # Add a new branding policy to an organization
        api_response = api_instance.create_organization_branding_policy(organization_id, create_organization_branding_policy_request=create_organization_branding_policy_request)
        print("The response of OrganizationsApi->create_organization_branding_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_branding_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_branding_policy_request** | [**CreateOrganizationBrandingPolicyRequest**](CreateOrganizationBrandingPolicyRequest.md)|  | [optional] 

### Return type

[**CreateOrganizationBrandingPolicy201Response**](CreateOrganizationBrandingPolicy201Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_config_template**
> object create_organization_config_template(organization_id, create_organization_config_template_request)

Create a new configuration template

Create a new configuration template

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_config_template_request import CreateOrganizationConfigTemplateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_config_template_request = openapi_client.CreateOrganizationConfigTemplateRequest() # CreateOrganizationConfigTemplateRequest | 

    try:
        # Create a new configuration template
        api_response = api_instance.create_organization_config_template(organization_id, create_organization_config_template_request)
        print("The response of OrganizationsApi->create_organization_config_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_config_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_config_template_request** | [**CreateOrganizationConfigTemplateRequest**](CreateOrganizationConfigTemplateRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_early_access_features_opt_in**
> object create_organization_early_access_features_opt_in(organization_id, create_organization_early_access_features_opt_in_request)

Create a new early access feature opt-in for an organization

Create a new early access feature opt-in for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_early_access_features_opt_in_request import CreateOrganizationEarlyAccessFeaturesOptInRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_early_access_features_opt_in_request = openapi_client.CreateOrganizationEarlyAccessFeaturesOptInRequest() # CreateOrganizationEarlyAccessFeaturesOptInRequest | 

    try:
        # Create a new early access feature opt-in for an organization
        api_response = api_instance.create_organization_early_access_features_opt_in(organization_id, create_organization_early_access_features_opt_in_request)
        print("The response of OrganizationsApi->create_organization_early_access_features_opt_in:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_early_access_features_opt_in: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_early_access_features_opt_in_request** | [**CreateOrganizationEarlyAccessFeaturesOptInRequest**](CreateOrganizationEarlyAccessFeaturesOptInRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_inventory_onboarding_cloud_monitoring_export_event**
> object create_organization_inventory_onboarding_cloud_monitoring_export_event(organization_id, create_organization_inventory_onboarding_cloud_monitoring_export_event_request)

Imports event logs related to the onboarding app into elastisearch

Imports event logs related to the onboarding app into elastisearch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_export_event_request import CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_inventory_onboarding_cloud_monitoring_export_event_request = openapi_client.CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest() # CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest | 

    try:
        # Imports event logs related to the onboarding app into elastisearch
        api_response = api_instance.create_organization_inventory_onboarding_cloud_monitoring_export_event(organization_id, create_organization_inventory_onboarding_cloud_monitoring_export_event_request)
        print("The response of OrganizationsApi->create_organization_inventory_onboarding_cloud_monitoring_export_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_inventory_onboarding_cloud_monitoring_export_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_inventory_onboarding_cloud_monitoring_export_event_request** | [**CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest**](CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_inventory_onboarding_cloud_monitoring_import**
> List[CreateOrganizationInventoryOnboardingCloudMonitoringImport201ResponseInner] create_organization_inventory_onboarding_cloud_monitoring_import(organization_id, create_organization_inventory_onboarding_cloud_monitoring_import_request)

Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.

Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_import201_response_inner import CreateOrganizationInventoryOnboardingCloudMonitoringImport201ResponseInner
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_import_request import CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_inventory_onboarding_cloud_monitoring_import_request = openapi_client.CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest() # CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest | 

    try:
        # Commits the import operation to complete the onboarding of a device into Dashboard for monitoring.
        api_response = api_instance.create_organization_inventory_onboarding_cloud_monitoring_import(organization_id, create_organization_inventory_onboarding_cloud_monitoring_import_request)
        print("The response of OrganizationsApi->create_organization_inventory_onboarding_cloud_monitoring_import:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_inventory_onboarding_cloud_monitoring_import: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_inventory_onboarding_cloud_monitoring_import_request** | [**CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest**](CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest.md)|  | 

### Return type

[**List[CreateOrganizationInventoryOnboardingCloudMonitoringImport201ResponseInner]**](CreateOrganizationInventoryOnboardingCloudMonitoringImport201ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_inventory_onboarding_cloud_monitoring_prepare**
> List[CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner] create_organization_inventory_onboarding_cloud_monitoring_prepare(organization_id, create_organization_inventory_onboarding_cloud_monitoring_prepare_request)

Initiates or updates an import session

Initiates or updates an import session. An import ID will be generated and used when you are ready to commit the import.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner import CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_prepare_request import CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_inventory_onboarding_cloud_monitoring_prepare_request = openapi_client.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest() # CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest | 

    try:
        # Initiates or updates an import session
        api_response = api_instance.create_organization_inventory_onboarding_cloud_monitoring_prepare(organization_id, create_organization_inventory_onboarding_cloud_monitoring_prepare_request)
        print("The response of OrganizationsApi->create_organization_inventory_onboarding_cloud_monitoring_prepare:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_inventory_onboarding_cloud_monitoring_prepare: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_inventory_onboarding_cloud_monitoring_prepare_request** | [**CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest.md)|  | 

### Return type

[**List[CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner]**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_network**
> GetNetwork200Response create_organization_network(organization_id, create_organization_network_request)

Create a network

Create a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_network_request import CreateOrganizationNetworkRequest
from openapi_client.models.get_network200_response import GetNetwork200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_network_request = openapi_client.CreateOrganizationNetworkRequest() # CreateOrganizationNetworkRequest | 

    try:
        # Create a network
        api_response = api_instance.create_organization_network(organization_id, create_organization_network_request)
        print("The response of OrganizationsApi->create_organization_network:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_network: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_network_request** | [**CreateOrganizationNetworkRequest**](CreateOrganizationNetworkRequest.md)|  | 

### Return type

[**GetNetwork200Response**](GetNetwork200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_policy_object**
> object create_organization_policy_object(organization_id, create_organization_policy_object_request)

Creates a new Policy Object.

Creates a new Policy Object.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_policy_object_request import CreateOrganizationPolicyObjectRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_policy_object_request = openapi_client.CreateOrganizationPolicyObjectRequest() # CreateOrganizationPolicyObjectRequest | 

    try:
        # Creates a new Policy Object.
        api_response = api_instance.create_organization_policy_object(organization_id, create_organization_policy_object_request)
        print("The response of OrganizationsApi->create_organization_policy_object:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_policy_object: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_policy_object_request** | [**CreateOrganizationPolicyObjectRequest**](CreateOrganizationPolicyObjectRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_policy_objects_group**
> object create_organization_policy_objects_group(organization_id, create_organization_policy_objects_group_request)

Creates a new Policy Object Group.

Creates a new Policy Object Group.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_policy_objects_group_request import CreateOrganizationPolicyObjectsGroupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_policy_objects_group_request = openapi_client.CreateOrganizationPolicyObjectsGroupRequest() # CreateOrganizationPolicyObjectsGroupRequest | 

    try:
        # Creates a new Policy Object Group.
        api_response = api_instance.create_organization_policy_objects_group(organization_id, create_organization_policy_objects_group_request)
        print("The response of OrganizationsApi->create_organization_policy_objects_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_policy_objects_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_policy_objects_group_request** | [**CreateOrganizationPolicyObjectsGroupRequest**](CreateOrganizationPolicyObjectsGroupRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_saml_idp**
> List[GetOrganizationSamlIdps200ResponseInner] create_organization_saml_idp(organization_id, create_organization_saml_idp_request)

Create a SAML IdP for your organization.

Create a SAML IdP for your organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_saml_idp_request import CreateOrganizationSamlIdpRequest
from openapi_client.models.get_organization_saml_idps200_response_inner import GetOrganizationSamlIdps200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_saml_idp_request = openapi_client.CreateOrganizationSamlIdpRequest() # CreateOrganizationSamlIdpRequest | 

    try:
        # Create a SAML IdP for your organization.
        api_response = api_instance.create_organization_saml_idp(organization_id, create_organization_saml_idp_request)
        print("The response of OrganizationsApi->create_organization_saml_idp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_saml_idp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_saml_idp_request** | [**CreateOrganizationSamlIdpRequest**](CreateOrganizationSamlIdpRequest.md)|  | 

### Return type

[**List[GetOrganizationSamlIdps200ResponseInner]**](GetOrganizationSamlIdps200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_saml_role**
> object create_organization_saml_role(organization_id, create_organization_saml_role_request)

Create a SAML role

Create a SAML role

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_saml_role_request import CreateOrganizationSamlRoleRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_saml_role_request = openapi_client.CreateOrganizationSamlRoleRequest() # CreateOrganizationSamlRoleRequest | 

    try:
        # Create a SAML role
        api_response = api_instance.create_organization_saml_role(organization_id, create_organization_saml_role_request)
        print("The response of OrganizationsApi->create_organization_saml_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->create_organization_saml_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_saml_role_request** | [**CreateOrganizationSamlRoleRequest**](CreateOrganizationSamlRoleRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization**
> delete_organization(organization_id)

Delete an organization

Delete an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Delete an organization
        api_instance.delete_organization(organization_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_action_batch**
> delete_organization_action_batch(organization_id, action_batch_id)

Delete an action batch

Delete an action batch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    action_batch_id = 'action_batch_id_example' # str | 

    try:
        # Delete an action batch
        api_instance.delete_organization_action_batch(organization_id, action_batch_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization_action_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **action_batch_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_adaptive_policy_acl**
> delete_organization_adaptive_policy_acl(organization_id, acl_id)

Deletes the specified adaptive policy ACL

Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    acl_id = 'acl_id_example' # str | 

    try:
        # Deletes the specified adaptive policy ACL
        api_instance.delete_organization_adaptive_policy_acl(organization_id, acl_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization_adaptive_policy_acl: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **acl_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_adaptive_policy_group**
> delete_organization_adaptive_policy_group(organization_id, id)

Deletes the specified adaptive policy group and any associated policies and references

Deletes the specified adaptive policy group and any associated policies and references

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Deletes the specified adaptive policy group and any associated policies and references
        api_instance.delete_organization_adaptive_policy_group(organization_id, id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization_adaptive_policy_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_adaptive_policy_policy**
> delete_organization_adaptive_policy_policy(organization_id, id)

Delete an Adaptive Policy

Delete an Adaptive Policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Delete an Adaptive Policy
        api_instance.delete_organization_adaptive_policy_policy(organization_id, id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization_adaptive_policy_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_admin**
> delete_organization_admin(organization_id, admin_id)

Revoke all access for a dashboard administrator within this organization

Revoke all access for a dashboard administrator within this organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    admin_id = 'admin_id_example' # str | 

    try:
        # Revoke all access for a dashboard administrator within this organization
        api_instance.delete_organization_admin(organization_id, admin_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization_admin: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **admin_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_alerts_profile**
> delete_organization_alerts_profile(organization_id, alert_config_id)

Removes an organization-wide alert config

Removes an organization-wide alert config

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    alert_config_id = 'alert_config_id_example' # str | 

    try:
        # Removes an organization-wide alert config
        api_instance.delete_organization_alerts_profile(organization_id, alert_config_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization_alerts_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **alert_config_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_branding_policy**
> delete_organization_branding_policy(organization_id, branding_policy_id)

Delete a branding policy

Delete a branding policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    branding_policy_id = 'branding_policy_id_example' # str | 

    try:
        # Delete a branding policy
        api_instance.delete_organization_branding_policy(organization_id, branding_policy_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization_branding_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **branding_policy_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_config_template**
> delete_organization_config_template(organization_id, config_template_id)

Remove a configuration template

Remove a configuration template

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 

    try:
        # Remove a configuration template
        api_instance.delete_organization_config_template(organization_id, config_template_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization_config_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **config_template_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_early_access_features_opt_in**
> delete_organization_early_access_features_opt_in(organization_id, opt_in_id)

Delete an early access feature opt-in

Delete an early access feature opt-in

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    opt_in_id = 'opt_in_id_example' # str | 

    try:
        # Delete an early access feature opt-in
        api_instance.delete_organization_early_access_features_opt_in(organization_id, opt_in_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization_early_access_features_opt_in: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **opt_in_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_policy_object**
> delete_organization_policy_object(organization_id, policy_object_id)

Deletes a Policy Object.

Deletes a Policy Object.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    policy_object_id = 'policy_object_id_example' # str | 

    try:
        # Deletes a Policy Object.
        api_instance.delete_organization_policy_object(organization_id, policy_object_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization_policy_object: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **policy_object_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_policy_objects_group**
> delete_organization_policy_objects_group(organization_id, policy_object_group_id)

Deletes a Policy Object Group.

Deletes a Policy Object Group.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    policy_object_group_id = 'policy_object_group_id_example' # str | 

    try:
        # Deletes a Policy Object Group.
        api_instance.delete_organization_policy_objects_group(organization_id, policy_object_group_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization_policy_objects_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **policy_object_group_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_saml_idp**
> delete_organization_saml_idp(organization_id, idp_id)

Remove a SAML IdP in your organization.

Remove a SAML IdP in your organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    idp_id = 'idp_id_example' # str | 

    try:
        # Remove a SAML IdP in your organization.
        api_instance.delete_organization_saml_idp(organization_id, idp_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization_saml_idp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **idp_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_saml_role**
> delete_organization_saml_role(organization_id, saml_role_id)

Remove a SAML role

Remove a SAML role

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    saml_role_id = 'saml_role_id_example' # str | 

    try:
        # Remove a SAML role
        api_instance.delete_organization_saml_role(organization_id, saml_role_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization_saml_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **saml_role_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_user**
> delete_organization_user(organization_id, user_id)

Delete a user and all of its authentication methods.

Delete a user and all of its authentication methods.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    user_id = 'user_id_example' # str | 

    try:
        # Delete a user and all of its authentication methods.
        api_instance.delete_organization_user(organization_id, user_id)
    except Exception as e:
        print("Exception when calling OrganizationsApi->delete_organization_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **user_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization**
> GetOrganizations200ResponseInner get_organization(organization_id)

Return an organization

Return an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organizations200_response_inner import GetOrganizations200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return an organization
        api_response = api_instance.get_organization(organization_id)
        print("The response of OrganizationsApi->get_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizations200ResponseInner**](GetOrganizations200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_action_batch**
> CreateOrganizationActionBatch201Response get_organization_action_batch(organization_id, action_batch_id)

Return an action batch

Return an action batch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_action_batch201_response import CreateOrganizationActionBatch201Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    action_batch_id = 'action_batch_id_example' # str | 

    try:
        # Return an action batch
        api_response = api_instance.get_organization_action_batch(organization_id, action_batch_id)
        print("The response of OrganizationsApi->get_organization_action_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_action_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **action_batch_id** | **str**|  | 

### Return type

[**CreateOrganizationActionBatch201Response**](CreateOrganizationActionBatch201Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_action_batches**
> List[object] get_organization_action_batches(organization_id, status=status)

Return the list of action batches in the organization

Return the list of action batches in the organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    status = 'status_example' # str | Filter batches by status. Valid types are pending, completed, and failed. (optional)

    try:
        # Return the list of action batches in the organization
        api_response = api_instance.get_organization_action_batches(organization_id, status=status)
        print("The response of OrganizationsApi->get_organization_action_batches:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_action_batches: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **status** | **str**| Filter batches by status. Valid types are pending, completed, and failed. | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_adaptive_policy_acl**
> object get_organization_adaptive_policy_acl(organization_id, acl_id)

Returns the adaptive policy ACL information

Returns the adaptive policy ACL information

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    acl_id = 'acl_id_example' # str | 

    try:
        # Returns the adaptive policy ACL information
        api_response = api_instance.get_organization_adaptive_policy_acl(organization_id, acl_id)
        print("The response of OrganizationsApi->get_organization_adaptive_policy_acl:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_adaptive_policy_acl: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **acl_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_adaptive_policy_acls**
> List[object] get_organization_adaptive_policy_acls(organization_id)

List adaptive policy ACLs in a organization

List adaptive policy ACLs in a organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List adaptive policy ACLs in a organization
        api_response = api_instance.get_organization_adaptive_policy_acls(organization_id)
        print("The response of OrganizationsApi->get_organization_adaptive_policy_acls:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_adaptive_policy_acls: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_adaptive_policy_group**
> object get_organization_adaptive_policy_group(organization_id, id)

Returns an adaptive policy group

Returns an adaptive policy group

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Returns an adaptive policy group
        api_response = api_instance.get_organization_adaptive_policy_group(organization_id, id)
        print("The response of OrganizationsApi->get_organization_adaptive_policy_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_adaptive_policy_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_adaptive_policy_groups**
> List[object] get_organization_adaptive_policy_groups(organization_id)

List adaptive policy groups in a organization

List adaptive policy groups in a organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List adaptive policy groups in a organization
        api_response = api_instance.get_organization_adaptive_policy_groups(organization_id)
        print("The response of OrganizationsApi->get_organization_adaptive_policy_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_adaptive_policy_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_adaptive_policy_overview**
> GetOrganizationAdaptivePolicyOverview200Response get_organization_adaptive_policy_overview(organization_id)

Returns adaptive policy aggregate statistics for an organization

Returns adaptive policy aggregate statistics for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_adaptive_policy_overview200_response import GetOrganizationAdaptivePolicyOverview200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Returns adaptive policy aggregate statistics for an organization
        api_response = api_instance.get_organization_adaptive_policy_overview(organization_id)
        print("The response of OrganizationsApi->get_organization_adaptive_policy_overview:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_adaptive_policy_overview: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationAdaptivePolicyOverview200Response**](GetOrganizationAdaptivePolicyOverview200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_adaptive_policy_policies**
> List[object] get_organization_adaptive_policy_policies(organization_id)

List adaptive policies in an organization

List adaptive policies in an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List adaptive policies in an organization
        api_response = api_instance.get_organization_adaptive_policy_policies(organization_id)
        print("The response of OrganizationsApi->get_organization_adaptive_policy_policies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_adaptive_policy_policies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_adaptive_policy_policy**
> object get_organization_adaptive_policy_policy(organization_id, id)

Return an adaptive policy

Return an adaptive policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Return an adaptive policy
        api_response = api_instance.get_organization_adaptive_policy_policy(organization_id, id)
        print("The response of OrganizationsApi->get_organization_adaptive_policy_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_adaptive_policy_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_adaptive_policy_settings**
> object get_organization_adaptive_policy_settings(organization_id)

Returns global adaptive policy settings in an organization

Returns global adaptive policy settings in an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Returns global adaptive policy settings in an organization
        api_response = api_instance.get_organization_adaptive_policy_settings(organization_id)
        print("The response of OrganizationsApi->get_organization_adaptive_policy_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_adaptive_policy_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_admins**
> List[object] get_organization_admins(organization_id)

List the dashboard administrators in this organization

List the dashboard administrators in this organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the dashboard administrators in this organization
        api_response = api_instance.get_organization_admins(organization_id)
        print("The response of OrganizationsApi->get_organization_admins:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_admins: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_alerts_profiles**
> List[object] get_organization_alerts_profiles(organization_id)

List all organization-wide alert configurations

List all organization-wide alert configurations

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List all organization-wide alert configurations
        api_response = api_instance.get_organization_alerts_profiles(organization_id)
        print("The response of OrganizationsApi->get_organization_alerts_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_alerts_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_api_requests**
> List[GetOrganizationApiRequests200ResponseInner] get_organization_api_requests(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, admin_id=admin_id, path=path, method=method, response_code=response_code, source_ip=source_ip, user_agent=user_agent, version=version, operation_ids=operation_ids)

List the API requests made by an organization

List the API requests made by an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_api_requests200_response_inner import GetOrganizationApiRequests200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    admin_id = 'admin_id_example' # str | Filter the results by the ID of the admin who made the API requests (optional)
    path = 'path_example' # str | Filter the results by the path of the API requests (optional)
    method = 'method_example' # str | Filter the results by the method of the API requests (must be 'GET', 'PUT', 'POST' or 'DELETE') (optional)
    response_code = 56 # int | Filter the results by the response code of the API requests (optional)
    source_ip = 'source_ip_example' # str | Filter the results by the IP address of the originating API request (optional)
    user_agent = 'user_agent_example' # str | Filter the results by the user agent string of the API request (optional)
    version = 56 # int | Filter the results by the API version of the API request (optional)
    operation_ids = ['operation_ids_example'] # List[str] | Filter the results by one or more operation IDs for the API request (optional)

    try:
        # List the API requests made by an organization
        api_response = api_instance.get_organization_api_requests(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, admin_id=admin_id, path=path, method=method, response_code=response_code, source_ip=source_ip, user_agent=user_agent, version=version, operation_ids=operation_ids)
        print("The response of OrganizationsApi->get_organization_api_requests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_api_requests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **admin_id** | **str**| Filter the results by the ID of the admin who made the API requests | [optional] 
 **path** | **str**| Filter the results by the path of the API requests | [optional] 
 **method** | **str**| Filter the results by the method of the API requests (must be &#39;GET&#39;, &#39;PUT&#39;, &#39;POST&#39; or &#39;DELETE&#39;) | [optional] 
 **response_code** | **int**| Filter the results by the response code of the API requests | [optional] 
 **source_ip** | **str**| Filter the results by the IP address of the originating API request | [optional] 
 **user_agent** | **str**| Filter the results by the user agent string of the API request | [optional] 
 **version** | **int**| Filter the results by the API version of the API request | [optional] 
 **operation_ids** | [**List[str]**](str.md)| Filter the results by one or more operation IDs for the API request | [optional] 

### Return type

[**List[GetOrganizationApiRequests200ResponseInner]**](GetOrganizationApiRequests200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_api_requests_overview**
> object get_organization_api_requests_overview(organization_id, t0=t0, t1=t1, timespan=timespan)

Return an aggregated overview of API requests data

Return an aggregated overview of API requests data

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. (optional)

    try:
        # Return an aggregated overview of API requests data
        api_response = api_instance.get_organization_api_requests_overview(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of OrganizationsApi->get_organization_api_requests_overview:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_api_requests_overview: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_api_requests_overview_response_codes_by_interval**
> List[GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner] get_organization_api_requests_overview_response_codes_by_interval(organization_id, t0=t0, t1=t1, timespan=timespan, interval=interval, version=version, operation_ids=operation_ids, source_ips=source_ips, admin_ids=admin_ids, user_agent=user_agent)

Tracks organizations' API requests by response code across a given time period

Tracks organizations' API requests by response code across a given time period

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_api_requests_overview_response_codes_by_interval200_response_inner import GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. If interval is provided, the timespan will be autocalculated. (optional)
    interval = 56 # int | The time interval in seconds for returned data. The valid intervals are: 120, 3600, 14400, 21600. The default is 21600. Interval is calculated if time params are provided. (optional)
    version = 56 # int | Filter by API version of the endpoint. Allowable values are: [0, 1] (optional)
    operation_ids = ['operation_ids_example'] # List[str] | Filter by operation ID of the endpoint (optional)
    source_ips = ['source_ips_example'] # List[str] | Filter by source IP that made the API request (optional)
    admin_ids = ['admin_ids_example'] # List[str] | Filter by admin ID of user that made the API request (optional)
    user_agent = 'user_agent_example' # str | Filter by user agent string for API request. This will filter by a complete or partial match. (optional)

    try:
        # Tracks organizations' API requests by response code across a given time period
        api_response = api_instance.get_organization_api_requests_overview_response_codes_by_interval(organization_id, t0=t0, t1=t1, timespan=timespan, interval=interval, version=version, operation_ids=operation_ids, source_ips=source_ips, admin_ids=admin_ids, user_agent=user_agent)
        print("The response of OrganizationsApi->get_organization_api_requests_overview_response_codes_by_interval:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_api_requests_overview_response_codes_by_interval: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. If interval is provided, the timespan will be autocalculated. | [optional] 
 **interval** | **int**| The time interval in seconds for returned data. The valid intervals are: 120, 3600, 14400, 21600. The default is 21600. Interval is calculated if time params are provided. | [optional] 
 **version** | **int**| Filter by API version of the endpoint. Allowable values are: [0, 1] | [optional] 
 **operation_ids** | [**List[str]**](str.md)| Filter by operation ID of the endpoint | [optional] 
 **source_ips** | [**List[str]**](str.md)| Filter by source IP that made the API request | [optional] 
 **admin_ids** | [**List[str]**](str.md)| Filter by admin ID of user that made the API request | [optional] 
 **user_agent** | **str**| Filter by user agent string for API request. This will filter by a complete or partial match. | [optional] 

### Return type

[**List[GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner]**](GetOrganizationApiRequestsOverviewResponseCodesByInterval200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_branding_policies**
> List[GetOrganizationBrandingPolicies200ResponseInner] get_organization_branding_policies(organization_id)

List the branding policies of an organization

List the branding policies of an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_branding_policies200_response_inner import GetOrganizationBrandingPolicies200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the branding policies of an organization
        api_response = api_instance.get_organization_branding_policies(organization_id)
        print("The response of OrganizationsApi->get_organization_branding_policies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_branding_policies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**List[GetOrganizationBrandingPolicies200ResponseInner]**](GetOrganizationBrandingPolicies200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_branding_policies_priorities**
> GetOrganizationBrandingPoliciesPriorities200Response get_organization_branding_policies_priorities(organization_id)

Return the branding policy IDs of an organization in priority order

Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_branding_policies_priorities200_response import GetOrganizationBrandingPoliciesPriorities200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return the branding policy IDs of an organization in priority order
        api_response = api_instance.get_organization_branding_policies_priorities(organization_id)
        print("The response of OrganizationsApi->get_organization_branding_policies_priorities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_branding_policies_priorities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationBrandingPoliciesPriorities200Response**](GetOrganizationBrandingPoliciesPriorities200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_branding_policy**
> GetOrganizationBrandingPolicies200ResponseInner get_organization_branding_policy(organization_id, branding_policy_id)

Return a branding policy

Return a branding policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_branding_policies200_response_inner import GetOrganizationBrandingPolicies200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    branding_policy_id = 'branding_policy_id_example' # str | 

    try:
        # Return a branding policy
        api_response = api_instance.get_organization_branding_policy(organization_id, branding_policy_id)
        print("The response of OrganizationsApi->get_organization_branding_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_branding_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **branding_policy_id** | **str**|  | 

### Return type

[**GetOrganizationBrandingPolicies200ResponseInner**](GetOrganizationBrandingPolicies200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_clients_bandwidth_usage_history**
> List[GetOrganizationClientsBandwidthUsageHistory200ResponseInner] get_organization_clients_bandwidth_usage_history(organization_id, t0=t0, t1=t1, timespan=timespan)

Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_clients_bandwidth_usage_history200_response_inner import GetOrganizationClientsBandwidthUsageHistory200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
        api_response = api_instance.get_organization_clients_bandwidth_usage_history(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of OrganizationsApi->get_organization_clients_bandwidth_usage_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_clients_bandwidth_usage_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationClientsBandwidthUsageHistory200ResponseInner]**](GetOrganizationClientsBandwidthUsageHistory200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_clients_overview**
> GetOrganizationClientsOverview200Response get_organization_clients_overview(organization_id, t0=t0, t1=t1, timespan=timespan)

Return summary information around client data usage (in mb) across the given organization.

Return summary information around client data usage (in mb) across the given organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_clients_overview200_response import GetOrganizationClientsOverview200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return summary information around client data usage (in mb) across the given organization.
        api_response = api_instance.get_organization_clients_overview(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of OrganizationsApi->get_organization_clients_overview:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_clients_overview: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**GetOrganizationClientsOverview200Response**](GetOrganizationClientsOverview200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_clients_search**
> object get_organization_clients_search(organization_id, mac, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return the client details in an organization

Return the client details in an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    mac = 'mac_example' # str | The MAC address of the client. Required.
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 5. Default is 5. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return the client details in an organization
        api_response = api_instance.get_organization_clients_search(organization_id, mac, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of OrganizationsApi->get_organization_clients_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_clients_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **mac** | **str**| The MAC address of the client. Required. | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 5. Default is 5. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_config_template**
> object get_organization_config_template(organization_id, config_template_id)

Return a single configuration template

Return a single configuration template

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 

    try:
        # Return a single configuration template
        api_response = api_instance.get_organization_config_template(organization_id, config_template_id)
        print("The response of OrganizationsApi->get_organization_config_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_config_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **config_template_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_config_templates**
> List[object] get_organization_config_templates(organization_id)

List the configuration templates for this organization

List the configuration templates for this organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the configuration templates for this organization
        api_response = api_instance.get_organization_config_templates(organization_id)
        print("The response of OrganizationsApi->get_organization_config_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_config_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_configuration_changes**
> List[object] get_organization_configuration_changes(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_id=network_id, admin_id=admin_id)

View the Change Log for your organization

View the Change Log for your organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 365 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_id = 'network_id_example' # str | Filters on the given network (optional)
    admin_id = 'admin_id_example' # str | Filters on the given Admin (optional)

    try:
        # View the Change Log for your organization
        api_response = api_instance.get_organization_configuration_changes(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_id=network_id, admin_id=admin_id)
        print("The response of OrganizationsApi->get_organization_configuration_changes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_configuration_changes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 365 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_id** | **str**| Filters on the given network | [optional] 
 **admin_id** | **str**| Filters on the given Admin | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_devices**
> List[GetOrganizationDevices200ResponseInner] get_organization_devices(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, configuration_updated_after=configuration_updated_after, network_ids=network_ids, product_types=product_types, tags=tags, tags_filter_type=tags_filter_type, name=name, mac=mac, serial=serial, model=model, macs=macs, serials=serials, sensor_metrics=sensor_metrics, sensor_alert_profile_ids=sensor_alert_profile_ids, models=models)

List the devices in an organization

List the devices in an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices200_response_inner import GetOrganizationDevices200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    configuration_updated_after = 'configuration_updated_after_example' # str | Filter results by whether or not the device's configuration has been updated after the given timestamp (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter devices by network. (optional)
    product_types = ['product_types_example'] # List[str] | Optional parameter to filter devices by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor. (optional)
    tags = ['tags_example'] # List[str] | Optional parameter to filter devices by tags. (optional)
    tags_filter_type = 'tags_filter_type_example' # str | Optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected. (optional)
    name = 'name_example' # str | Optional parameter to filter devices by name. All returned devices will have a name that contains the search term or is an exact match. (optional)
    mac = 'mac_example' # str | Optional parameter to filter devices by MAC address. All returned devices will have a MAC address that contains the search term or is an exact match. (optional)
    serial = 'serial_example' # str | Optional parameter to filter devices by serial number. All returned devices will have a serial number that contains the search term or is an exact match. (optional)
    model = 'model_example' # str | Optional parameter to filter devices by model. All returned devices will have a model that contains the search term or is an exact match. (optional)
    macs = ['macs_example'] # List[str] | Optional parameter to filter devices by one or more MAC addresses. All returned devices will have a MAC address that is an exact match. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter devices by one or more serial numbers. All returned devices will have a serial number that is an exact match. (optional)
    sensor_metrics = ['sensor_metrics_example'] # List[str] | Optional parameter to filter devices by the metrics that they provide. Only applies to sensor devices. (optional)
    sensor_alert_profile_ids = ['sensor_alert_profile_ids_example'] # List[str] | Optional parameter to filter devices by the alert profiles that are bound to them. Only applies to sensor devices. (optional)
    models = ['models_example'] # List[str] | Optional parameter to filter devices by one or more models. All returned devices will have a model that is an exact match. (optional)

    try:
        # List the devices in an organization
        api_response = api_instance.get_organization_devices(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, configuration_updated_after=configuration_updated_after, network_ids=network_ids, product_types=product_types, tags=tags, tags_filter_type=tags_filter_type, name=name, mac=mac, serial=serial, model=model, macs=macs, serials=serials, sensor_metrics=sensor_metrics, sensor_alert_profile_ids=sensor_alert_profile_ids, models=models)
        print("The response of OrganizationsApi->get_organization_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **configuration_updated_after** | **str**| Filter results by whether or not the device&#39;s configuration has been updated after the given timestamp | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter devices by network. | [optional] 
 **product_types** | [**List[str]**](str.md)| Optional parameter to filter devices by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor. | [optional] 
 **tags** | [**List[str]**](str.md)| Optional parameter to filter devices by tags. | [optional] 
 **tags_filter_type** | **str**| Optional parameter of value &#39;withAnyTags&#39; or &#39;withAllTags&#39; to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, &#39;withAnyTags&#39; will be selected. | [optional] 
 **name** | **str**| Optional parameter to filter devices by name. All returned devices will have a name that contains the search term or is an exact match. | [optional] 
 **mac** | **str**| Optional parameter to filter devices by MAC address. All returned devices will have a MAC address that contains the search term or is an exact match. | [optional] 
 **serial** | **str**| Optional parameter to filter devices by serial number. All returned devices will have a serial number that contains the search term or is an exact match. | [optional] 
 **model** | **str**| Optional parameter to filter devices by model. All returned devices will have a model that contains the search term or is an exact match. | [optional] 
 **macs** | [**List[str]**](str.md)| Optional parameter to filter devices by one or more MAC addresses. All returned devices will have a MAC address that is an exact match. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter devices by one or more serial numbers. All returned devices will have a serial number that is an exact match. | [optional] 
 **sensor_metrics** | [**List[str]**](str.md)| Optional parameter to filter devices by the metrics that they provide. Only applies to sensor devices. | [optional] 
 **sensor_alert_profile_ids** | [**List[str]**](str.md)| Optional parameter to filter devices by the alert profiles that are bound to them. Only applies to sensor devices. | [optional] 
 **models** | [**List[str]**](str.md)| Optional parameter to filter devices by one or more models. All returned devices will have a model that is an exact match. | [optional] 

### Return type

[**List[GetOrganizationDevices200ResponseInner]**](GetOrganizationDevices200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_devices_availabilities**
> List[GetOrganizationDevicesAvailabilities200ResponseInner] get_organization_devices_availabilities(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)

List the availability information for devices in an organization

List the availability information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices_availabilities200_response_inner import GetOrganizationDevicesAvailabilities200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter device availabilities by network ID. This filter uses multiple exact matches. (optional)
    product_types = ['product_types_example'] # List[str] | Optional parameter to filter device availabilities by device product types. This filter uses multiple exact matches. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches. (optional)
    tags = ['tags_example'] # List[str] | An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). This filter uses multiple exact matches. (optional)
    tags_filter_type = 'tags_filter_type_example' # str | An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected. (optional)

    try:
        # List the availability information for devices in an organization
        api_response = api_instance.get_organization_devices_availabilities(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)
        print("The response of OrganizationsApi->get_organization_devices_availabilities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_devices_availabilities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter device availabilities by network ID. This filter uses multiple exact matches. | [optional] 
 **product_types** | [**List[str]**](str.md)| Optional parameter to filter device availabilities by device product types. This filter uses multiple exact matches. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches. | [optional] 
 **tags** | [**List[str]**](str.md)| An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, &#39;tagsFilterType&#39; should also be included (see below). This filter uses multiple exact matches. | [optional] 
 **tags_filter_type** | **str**| An optional parameter of value &#39;withAnyTags&#39; or &#39;withAllTags&#39; to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, &#39;withAnyTags&#39; will be selected. | [optional] 

### Return type

[**List[GetOrganizationDevicesAvailabilities200ResponseInner]**](GetOrganizationDevicesAvailabilities200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_devices_power_modules_statuses_by_device**
> List[GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner] get_organization_devices_power_modules_statuses_by_device(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)

List the power status information for devices in an organization

List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices_power_modules_statuses_by_device200_response_inner import GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter device availabilities by network ID. This filter uses multiple exact matches. (optional)
    product_types = ['product_types_example'] # List[str] | Optional parameter to filter device availabilities by device product types. This filter uses multiple exact matches. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches. (optional)
    tags = ['tags_example'] # List[str] | An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). This filter uses multiple exact matches. (optional)
    tags_filter_type = 'tags_filter_type_example' # str | An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected. (optional)

    try:
        # List the power status information for devices in an organization
        api_response = api_instance.get_organization_devices_power_modules_statuses_by_device(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)
        print("The response of OrganizationsApi->get_organization_devices_power_modules_statuses_by_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_devices_power_modules_statuses_by_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter device availabilities by network ID. This filter uses multiple exact matches. | [optional] 
 **product_types** | [**List[str]**](str.md)| Optional parameter to filter device availabilities by device product types. This filter uses multiple exact matches. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches. | [optional] 
 **tags** | [**List[str]**](str.md)| An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, &#39;tagsFilterType&#39; should also be included (see below). This filter uses multiple exact matches. | [optional] 
 **tags_filter_type** | **str**| An optional parameter of value &#39;withAnyTags&#39; or &#39;withAllTags&#39; to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, &#39;withAnyTags&#39; will be selected. | [optional] 

### Return type

[**List[GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner]**](GetOrganizationDevicesPowerModulesStatusesByDevice200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_devices_statuses**
> GetOrganizationDevicesStatuses200Response get_organization_devices_statuses(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, statuses=statuses, product_types=product_types, models=models, tags=tags, tags_filter_type=tags_filter_type)

List the status of every Meraki device in the organization

List the status of every Meraki device in the organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices_statuses200_response import GetOrganizationDevicesStatuses200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter devices by network ids. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter devices by serials. (optional)
    statuses = ['statuses_example'] # List[str] | Optional parameter to filter devices by statuses. Valid statuses are [\"online\", \"alerting\", \"offline\", \"dormant\"]. (optional)
    product_types = ['product_types_example'] # List[str] | An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor. (optional)
    models = ['models_example'] # List[str] | Optional parameter to filter devices by models. (optional)
    tags = ['tags_example'] # List[str] | An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). (optional)
    tags_filter_type = 'tags_filter_type_example' # str | An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected. (optional)

    try:
        # List the status of every Meraki device in the organization
        api_response = api_instance.get_organization_devices_statuses(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, statuses=statuses, product_types=product_types, models=models, tags=tags, tags_filter_type=tags_filter_type)
        print("The response of OrganizationsApi->get_organization_devices_statuses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_devices_statuses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter devices by network ids. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter devices by serials. | [optional] 
 **statuses** | [**List[str]**](str.md)| Optional parameter to filter devices by statuses. Valid statuses are [\&quot;online\&quot;, \&quot;alerting\&quot;, \&quot;offline\&quot;, \&quot;dormant\&quot;]. | [optional] 
 **product_types** | [**List[str]**](str.md)| An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor. | [optional] 
 **models** | [**List[str]**](str.md)| Optional parameter to filter devices by models. | [optional] 
 **tags** | [**List[str]**](str.md)| An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, &#39;tagsFilterType&#39; should also be included (see below). | [optional] 
 **tags_filter_type** | **str**| An optional parameter of value &#39;withAnyTags&#39; or &#39;withAllTags&#39; to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, &#39;withAnyTags&#39; will be selected. | [optional] 

### Return type

[**GetOrganizationDevicesStatuses200Response**](GetOrganizationDevicesStatuses200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_devices_statuses_overview**
> GetOrganizationDevicesStatusesOverview200Response get_organization_devices_statuses_overview(organization_id, product_types=product_types, network_ids=network_ids)

Return an overview of current device statuses

Return an overview of current device statuses

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices_statuses_overview200_response import GetOrganizationDevicesStatusesOverview200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    product_types = ['product_types_example'] # List[str] | An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor. (optional)
    network_ids = ['network_ids_example'] # List[str] | An optional parameter to filter device statuses by network. (optional)

    try:
        # Return an overview of current device statuses
        api_response = api_instance.get_organization_devices_statuses_overview(organization_id, product_types=product_types, network_ids=network_ids)
        print("The response of OrganizationsApi->get_organization_devices_statuses_overview:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_devices_statuses_overview: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **product_types** | [**List[str]**](str.md)| An optional parameter to filter device statuses by product type. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and sensor. | [optional] 
 **network_ids** | [**List[str]**](str.md)| An optional parameter to filter device statuses by network. | [optional] 

### Return type

[**GetOrganizationDevicesStatusesOverview200Response**](GetOrganizationDevicesStatusesOverview200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_devices_uplinks_addresses_by_device**
> List[GetOrganizationDevicesUplinksAddressesByDevice200ResponseInner] get_organization_devices_uplinks_addresses_by_device(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)

List the current uplink addresses for devices in an organization.

List the current uplink addresses for devices in an organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices_uplinks_addresses_by_device200_response_inner import GetOrganizationDevicesUplinksAddressesByDevice200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter device uplinks by network ID. This filter uses multiple exact matches. (optional)
    product_types = ['product_types_example'] # List[str] | Optional parameter to filter device uplinks by device product types. This filter uses multiple exact matches. (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches. (optional)
    tags = ['tags_example'] # List[str] | An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). This filter uses multiple exact matches. (optional)
    tags_filter_type = 'tags_filter_type_example' # str | An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected. (optional)

    try:
        # List the current uplink addresses for devices in an organization.
        api_response = api_instance.get_organization_devices_uplinks_addresses_by_device(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, product_types=product_types, serials=serials, tags=tags, tags_filter_type=tags_filter_type)
        print("The response of OrganizationsApi->get_organization_devices_uplinks_addresses_by_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_devices_uplinks_addresses_by_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter device uplinks by network ID. This filter uses multiple exact matches. | [optional] 
 **product_types** | [**List[str]**](str.md)| Optional parameter to filter device uplinks by device product types. This filter uses multiple exact matches. | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter device availabilities by device serial numbers. This filter uses multiple exact matches. | [optional] 
 **tags** | [**List[str]**](str.md)| An optional parameter to filter devices by tags. The filtering is case-sensitive. If tags are included, &#39;tagsFilterType&#39; should also be included (see below). This filter uses multiple exact matches. | [optional] 
 **tags_filter_type** | **str**| An optional parameter of value &#39;withAnyTags&#39; or &#39;withAllTags&#39; to indicate whether to return devices which contain ANY or ALL of the included tags. If no type is included, &#39;withAnyTags&#39; will be selected. | [optional] 

### Return type

[**List[GetOrganizationDevicesUplinksAddressesByDevice200ResponseInner]**](GetOrganizationDevicesUplinksAddressesByDevice200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_devices_uplinks_loss_and_latency**
> List[GetOrganizationDevicesUplinksLossAndLatency200ResponseInner] get_organization_devices_uplinks_loss_and_latency(organization_id, t0=t0, t1=t1, timespan=timespan, uplink=uplink, ip=ip)

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_devices_uplinks_loss_and_latency200_response_inner import GetOrganizationDevicesUplinksLossAndLatency200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 60 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes. (optional)
    uplink = 'uplink_example' # str | Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks. (optional)
    ip = 'ip_example' # str | Optional filter for a specific destination IP. Default will return all destination IPs. (optional)

    try:
        # Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
        api_response = api_instance.get_organization_devices_uplinks_loss_and_latency(organization_id, t0=t0, t1=t1, timespan=timespan, uplink=uplink, ip=ip)
        print("The response of OrganizationsApi->get_organization_devices_uplinks_loss_and_latency:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_devices_uplinks_loss_and_latency: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 60 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes. | [optional] 
 **uplink** | **str**| Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks. | [optional] 
 **ip** | **str**| Optional filter for a specific destination IP. Default will return all destination IPs. | [optional] 

### Return type

[**List[GetOrganizationDevicesUplinksLossAndLatency200ResponseInner]**](GetOrganizationDevicesUplinksLossAndLatency200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_early_access_features**
> List[object] get_organization_early_access_features(organization_id)

List the available early access features for organization

List the available early access features for organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the available early access features for organization
        api_response = api_instance.get_organization_early_access_features(organization_id)
        print("The response of OrganizationsApi->get_organization_early_access_features:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_early_access_features: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_early_access_features_opt_in**
> object get_organization_early_access_features_opt_in(organization_id, opt_in_id)

Show an early access feature opt-in for an organization

Show an early access feature opt-in for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    opt_in_id = 'opt_in_id_example' # str | 

    try:
        # Show an early access feature opt-in for an organization
        api_response = api_instance.get_organization_early_access_features_opt_in(organization_id, opt_in_id)
        print("The response of OrganizationsApi->get_organization_early_access_features_opt_in:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_early_access_features_opt_in: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **opt_in_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_early_access_features_opt_ins**
> List[object] get_organization_early_access_features_opt_ins(organization_id)

List the early access feature opt-ins for an organization

List the early access feature opt-ins for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the early access feature opt-ins for an organization
        api_response = api_instance.get_organization_early_access_features_opt_ins(organization_id)
        print("The response of OrganizationsApi->get_organization_early_access_features_opt_ins:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_early_access_features_opt_ins: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_firmware_upgrades**
> List[GetOrganizationFirmwareUpgrades200ResponseInner] get_organization_firmware_upgrades(organization_id, status=status, product_type=product_type)

Get firmware upgrade information for an organization

Get firmware upgrade information for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_firmware_upgrades200_response_inner import GetOrganizationFirmwareUpgrades200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    status = ['status_example'] # List[str] | The status of an upgrade  (optional)
    product_type = ['product_type_example'] # List[str] | The product type in a given upgrade ID (optional)

    try:
        # Get firmware upgrade information for an organization
        api_response = api_instance.get_organization_firmware_upgrades(organization_id, status=status, product_type=product_type)
        print("The response of OrganizationsApi->get_organization_firmware_upgrades:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_firmware_upgrades: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **status** | [**List[str]**](str.md)| The status of an upgrade  | [optional] 
 **product_type** | [**List[str]**](str.md)| The product type in a given upgrade ID | [optional] 

### Return type

[**List[GetOrganizationFirmwareUpgrades200ResponseInner]**](GetOrganizationFirmwareUpgrades200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_firmware_upgrades_by_device**
> List[GetOrganizationFirmwareUpgradesByDevice200ResponseInner] get_organization_firmware_upgrades_by_device(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, macs=macs, firmware_upgrade_ids=firmware_upgrade_ids, firmware_upgrade_batch_ids=firmware_upgrade_batch_ids)

Get firmware upgrade status for the filtered devices

Get firmware upgrade status for the filtered devices

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_firmware_upgrades_by_device200_response_inner import GetOrganizationFirmwareUpgradesByDevice200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 50. Default is 50. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | Optional parameter to filter by network (optional)
    serials = ['serials_example'] # List[str] | Optional parameter to filter by serial number.  All returned devices will have a serial number that is an exact match. (optional)
    macs = ['macs_example'] # List[str] | Optional parameter to filter by one or more MAC addresses belonging to devices. All devices returned belong to MAC addresses that are an exact match. (optional)
    firmware_upgrade_ids = ['firmware_upgrade_ids_example'] # List[str] | Optional parameter to filter by firmware upgrade ids. (optional)
    firmware_upgrade_batch_ids = ['firmware_upgrade_batch_ids_example'] # List[str] | Optional parameter to filter by firmware upgrade batch ids. (optional)

    try:
        # Get firmware upgrade status for the filtered devices
        api_response = api_instance.get_organization_firmware_upgrades_by_device(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, macs=macs, firmware_upgrade_ids=firmware_upgrade_ids, firmware_upgrade_batch_ids=firmware_upgrade_batch_ids)
        print("The response of OrganizationsApi->get_organization_firmware_upgrades_by_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_firmware_upgrades_by_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 50. Default is 50. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Optional parameter to filter by network | [optional] 
 **serials** | [**List[str]**](str.md)| Optional parameter to filter by serial number.  All returned devices will have a serial number that is an exact match. | [optional] 
 **macs** | [**List[str]**](str.md)| Optional parameter to filter by one or more MAC addresses belonging to devices. All devices returned belong to MAC addresses that are an exact match. | [optional] 
 **firmware_upgrade_ids** | [**List[str]**](str.md)| Optional parameter to filter by firmware upgrade ids. | [optional] 
 **firmware_upgrade_batch_ids** | [**List[str]**](str.md)| Optional parameter to filter by firmware upgrade batch ids. | [optional] 

### Return type

[**List[GetOrganizationFirmwareUpgradesByDevice200ResponseInner]**](GetOrganizationFirmwareUpgradesByDevice200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_inventory_device**
> GetOrganizationInventoryDevices200ResponseInner get_organization_inventory_device(organization_id, serial)

Return a single device from the inventory of an organization

Return a single device from the inventory of an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_inventory_devices200_response_inner import GetOrganizationInventoryDevices200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    serial = 'serial_example' # str | 

    try:
        # Return a single device from the inventory of an organization
        api_response = api_instance.get_organization_inventory_device(organization_id, serial)
        print("The response of OrganizationsApi->get_organization_inventory_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_inventory_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **serial** | **str**|  | 

### Return type

[**GetOrganizationInventoryDevices200ResponseInner**](GetOrganizationInventoryDevices200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_inventory_devices**
> List[GetOrganizationInventoryDevices200ResponseInner] get_organization_inventory_devices(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, used_state=used_state, search=search, macs=macs, network_ids=network_ids, serials=serials, models=models, order_numbers=order_numbers, tags=tags, tags_filter_type=tags_filter_type, product_types=product_types)

Return the device inventory for an organization

Return the device inventory for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_inventory_devices200_response_inner import GetOrganizationInventoryDevices200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    used_state = 'used_state_example' # str | Filter results by used or unused inventory. Accepted values are 'used' or 'unused'. (optional)
    search = 'search_example' # str | Search for devices in inventory based on serial number, mac address, or model. (optional)
    macs = ['macs_example'] # List[str] | Search for devices in inventory based on mac addresses. (optional)
    network_ids = ['network_ids_example'] # List[str] | Search for devices in inventory based on network ids. (optional)
    serials = ['serials_example'] # List[str] | Search for devices in inventory based on serials. (optional)
    models = ['models_example'] # List[str] | Search for devices in inventory based on model. (optional)
    order_numbers = ['order_numbers_example'] # List[str] | Search for devices in inventory based on order numbers. (optional)
    tags = ['tags_example'] # List[str] | Filter devices by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). (optional)
    tags_filter_type = 'tags_filter_type_example' # str | To use with 'tags' parameter, to filter devices which contain ANY or ALL given tags. Accepted values are 'withAnyTags' or 'withAllTags', default is 'withAnyTags'. (optional)
    product_types = ['product_types_example'] # List[str] | Filter devices by product type. Accepted values are appliance, camera, cellularGateway, sensor, switch, systemsManager, and wireless. (optional)

    try:
        # Return the device inventory for an organization
        api_response = api_instance.get_organization_inventory_devices(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, used_state=used_state, search=search, macs=macs, network_ids=network_ids, serials=serials, models=models, order_numbers=order_numbers, tags=tags, tags_filter_type=tags_filter_type, product_types=product_types)
        print("The response of OrganizationsApi->get_organization_inventory_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_inventory_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **used_state** | **str**| Filter results by used or unused inventory. Accepted values are &#39;used&#39; or &#39;unused&#39;. | [optional] 
 **search** | **str**| Search for devices in inventory based on serial number, mac address, or model. | [optional] 
 **macs** | [**List[str]**](str.md)| Search for devices in inventory based on mac addresses. | [optional] 
 **network_ids** | [**List[str]**](str.md)| Search for devices in inventory based on network ids. | [optional] 
 **serials** | [**List[str]**](str.md)| Search for devices in inventory based on serials. | [optional] 
 **models** | [**List[str]**](str.md)| Search for devices in inventory based on model. | [optional] 
 **order_numbers** | [**List[str]**](str.md)| Search for devices in inventory based on order numbers. | [optional] 
 **tags** | [**List[str]**](str.md)| Filter devices by tags. The filtering is case-sensitive. If tags are included, &#39;tagsFilterType&#39; should also be included (see below). | [optional] 
 **tags_filter_type** | **str**| To use with &#39;tags&#39; parameter, to filter devices which contain ANY or ALL given tags. Accepted values are &#39;withAnyTags&#39; or &#39;withAllTags&#39;, default is &#39;withAnyTags&#39;. | [optional] 
 **product_types** | [**List[str]**](str.md)| Filter devices by product type. Accepted values are appliance, camera, cellularGateway, sensor, switch, systemsManager, and wireless. | [optional] 

### Return type

[**List[GetOrganizationInventoryDevices200ResponseInner]**](GetOrganizationInventoryDevices200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_inventory_onboarding_cloud_monitoring_imports**
> List[GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner] get_organization_inventory_onboarding_cloud_monitoring_imports(organization_id, import_ids)

Check the status of a committed Import operation

Check the status of a committed Import operation

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_inventory_onboarding_cloud_monitoring_imports200_response_inner import GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    import_ids = ['import_ids_example'] # List[str] | import ids from an imports

    try:
        # Check the status of a committed Import operation
        api_response = api_instance.get_organization_inventory_onboarding_cloud_monitoring_imports(organization_id, import_ids)
        print("The response of OrganizationsApi->get_organization_inventory_onboarding_cloud_monitoring_imports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_inventory_onboarding_cloud_monitoring_imports: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **import_ids** | [**List[str]**](str.md)| import ids from an imports | 

### Return type

[**List[GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner]**](GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_inventory_onboarding_cloud_monitoring_networks**
> List[GetNetwork200Response] get_organization_inventory_onboarding_cloud_monitoring_networks(organization_id, device_type, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Returns list of networks eligible for adding cloud monitored device

Returns list of networks eligible for adding cloud monitored device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network200_response import GetNetwork200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    device_type = 'device_type_example' # str | Device Type switch or wireless controller
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Returns list of networks eligible for adding cloud monitored device
        api_response = api_instance.get_organization_inventory_onboarding_cloud_monitoring_networks(organization_id, device_type, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of OrganizationsApi->get_organization_inventory_onboarding_cloud_monitoring_networks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_inventory_onboarding_cloud_monitoring_networks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **device_type** | **str**| Device Type switch or wireless controller | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetwork200Response]**](GetNetwork200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_license**
> GetOrganizationLicenses200ResponseInner get_organization_license(organization_id, license_id)

Display a license

Display a license

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_licenses200_response_inner import GetOrganizationLicenses200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    license_id = 'license_id_example' # str | 

    try:
        # Display a license
        api_response = api_instance.get_organization_license(organization_id, license_id)
        print("The response of OrganizationsApi->get_organization_license:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_license: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **license_id** | **str**|  | 

### Return type

[**GetOrganizationLicenses200ResponseInner**](GetOrganizationLicenses200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_licenses**
> List[GetOrganizationLicenses200ResponseInner] get_organization_licenses(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, device_serial=device_serial, network_id=network_id, state=state)

List the licenses for an organization

List the licenses for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_licenses200_response_inner import GetOrganizationLicenses200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    device_serial = 'device_serial_example' # str | Filter the licenses to those assigned to a particular device. Returned in the same order that they are queued to the device. (optional)
    network_id = 'network_id_example' # str | Filter the licenses to those assigned in a particular network (optional)
    state = 'state_example' # str | Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'recentlyQueued', 'unused' or 'unusedActive' (optional)

    try:
        # List the licenses for an organization
        api_response = api_instance.get_organization_licenses(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, device_serial=device_serial, network_id=network_id, state=state)
        print("The response of OrganizationsApi->get_organization_licenses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_licenses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **device_serial** | **str**| Filter the licenses to those assigned to a particular device. Returned in the same order that they are queued to the device. | [optional] 
 **network_id** | **str**| Filter the licenses to those assigned in a particular network | [optional] 
 **state** | **str**| Filter the licenses to those in a particular state. Can be one of &#39;active&#39;, &#39;expired&#39;, &#39;expiring&#39;, &#39;recentlyQueued&#39;, &#39;unused&#39; or &#39;unusedActive&#39; | [optional] 

### Return type

[**List[GetOrganizationLicenses200ResponseInner]**](GetOrganizationLicenses200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_licenses_overview**
> object get_organization_licenses_overview(organization_id)

Return an overview of the license state for an organization

Return an overview of the license state for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return an overview of the license state for an organization
        api_response = api_instance.get_organization_licenses_overview(organization_id)
        print("The response of OrganizationsApi->get_organization_licenses_overview:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_licenses_overview: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_login_security**
> GetOrganizationLoginSecurity200Response get_organization_login_security(organization_id)

Returns the login security settings for an organization.

Returns the login security settings for an organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_login_security200_response import GetOrganizationLoginSecurity200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Returns the login security settings for an organization.
        api_response = api_instance.get_organization_login_security(organization_id)
        print("The response of OrganizationsApi->get_organization_login_security:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_login_security: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationLoginSecurity200Response**](GetOrganizationLoginSecurity200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_networks**
> List[GetNetwork200Response] get_organization_networks(organization_id, config_template_id=config_template_id, is_bound_to_config_template=is_bound_to_config_template, tags=tags, tags_filter_type=tags_filter_type, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

List the networks that the user has privileges on in an organization

List the networks that the user has privileges on in an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network200_response import GetNetwork200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | An optional parameter that is the ID of a config template. Will return all networks bound to that template. (optional)
    is_bound_to_config_template = True # bool | An optional parameter to filter config template bound networks. If configTemplateId is set, this cannot be false. (optional)
    tags = ['tags_example'] # List[str] | An optional parameter to filter networks by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). (optional)
    tags_filter_type = 'tags_filter_type_example' # str | An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # List the networks that the user has privileges on in an organization
        api_response = api_instance.get_organization_networks(organization_id, config_template_id=config_template_id, is_bound_to_config_template=is_bound_to_config_template, tags=tags, tags_filter_type=tags_filter_type, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of OrganizationsApi->get_organization_networks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_networks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **config_template_id** | **str**| An optional parameter that is the ID of a config template. Will return all networks bound to that template. | [optional] 
 **is_bound_to_config_template** | **bool**| An optional parameter to filter config template bound networks. If configTemplateId is set, this cannot be false. | [optional] 
 **tags** | [**List[str]**](str.md)| An optional parameter to filter networks by tags. The filtering is case-sensitive. If tags are included, &#39;tagsFilterType&#39; should also be included (see below). | [optional] 
 **tags_filter_type** | **str**| An optional parameter of value &#39;withAnyTags&#39; or &#39;withAllTags&#39; to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, &#39;withAnyTags&#39; will be selected. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetwork200Response]**](GetNetwork200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_openapi_spec**
> object get_organization_openapi_spec(organization_id)

Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
        api_response = api_instance.get_organization_openapi_spec(organization_id)
        print("The response of OrganizationsApi->get_organization_openapi_spec:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_openapi_spec: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_policy_object**
> object get_organization_policy_object(organization_id, policy_object_id)

Shows details of a Policy Object.

Shows details of a Policy Object.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    policy_object_id = 'policy_object_id_example' # str | 

    try:
        # Shows details of a Policy Object.
        api_response = api_instance.get_organization_policy_object(organization_id, policy_object_id)
        print("The response of OrganizationsApi->get_organization_policy_object:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_policy_object: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **policy_object_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_policy_objects**
> List[object] get_organization_policy_objects(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Lists Policy Objects belonging to the organization.

Lists Policy Objects belonging to the organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 10 - 5000. Default is 5000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Lists Policy Objects belonging to the organization.
        api_response = api_instance.get_organization_policy_objects(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of OrganizationsApi->get_organization_policy_objects:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_policy_objects: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 10 - 5000. Default is 5000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_policy_objects_group**
> object get_organization_policy_objects_group(organization_id, policy_object_group_id)

Shows details of a Policy Object Group.

Shows details of a Policy Object Group.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    policy_object_group_id = 'policy_object_group_id_example' # str | 

    try:
        # Shows details of a Policy Object Group.
        api_response = api_instance.get_organization_policy_objects_group(organization_id, policy_object_group_id)
        print("The response of OrganizationsApi->get_organization_policy_objects_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_policy_objects_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **policy_object_group_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_policy_objects_groups**
> List[object] get_organization_policy_objects_groups(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Lists Policy Object Groups belonging to the organization.

Lists Policy Object Groups belonging to the organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 10 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Lists Policy Object Groups belonging to the organization.
        api_response = api_instance.get_organization_policy_objects_groups(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of OrganizationsApi->get_organization_policy_objects_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_policy_objects_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 10 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_saml**
> GetOrganizationSaml200Response get_organization_saml(organization_id)

Returns the SAML SSO enabled settings for an organization.

Returns the SAML SSO enabled settings for an organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_saml200_response import GetOrganizationSaml200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Returns the SAML SSO enabled settings for an organization.
        api_response = api_instance.get_organization_saml(organization_id)
        print("The response of OrganizationsApi->get_organization_saml:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_saml: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationSaml200Response**](GetOrganizationSaml200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_saml_idp**
> GetOrganizationSamlIdps200ResponseInner get_organization_saml_idp(organization_id, idp_id)

Get a SAML IdP from your organization.

Get a SAML IdP from your organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_saml_idps200_response_inner import GetOrganizationSamlIdps200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    idp_id = 'idp_id_example' # str | 

    try:
        # Get a SAML IdP from your organization.
        api_response = api_instance.get_organization_saml_idp(organization_id, idp_id)
        print("The response of OrganizationsApi->get_organization_saml_idp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_saml_idp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **idp_id** | **str**|  | 

### Return type

[**GetOrganizationSamlIdps200ResponseInner**](GetOrganizationSamlIdps200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_saml_idps**
> List[GetOrganizationSamlIdps200ResponseInner] get_organization_saml_idps(organization_id)

List the SAML IdPs in your organization.

List the SAML IdPs in your organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_saml_idps200_response_inner import GetOrganizationSamlIdps200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the SAML IdPs in your organization.
        api_response = api_instance.get_organization_saml_idps(organization_id)
        print("The response of OrganizationsApi->get_organization_saml_idps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_saml_idps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**List[GetOrganizationSamlIdps200ResponseInner]**](GetOrganizationSamlIdps200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_saml_role**
> object get_organization_saml_role(organization_id, saml_role_id)

Return a SAML role

Return a SAML role

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    saml_role_id = 'saml_role_id_example' # str | 

    try:
        # Return a SAML role
        api_response = api_instance.get_organization_saml_role(organization_id, saml_role_id)
        print("The response of OrganizationsApi->get_organization_saml_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_saml_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **saml_role_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_saml_roles**
> List[object] get_organization_saml_roles(organization_id)

List the SAML roles for this organization

List the SAML roles for this organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the SAML roles for this organization
        api_response = api_instance.get_organization_saml_roles(organization_id)
        print("The response of OrganizationsApi->get_organization_saml_roles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_saml_roles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_snmp**
> object get_organization_snmp(organization_id)

Return the SNMP settings for an organization

Return the SNMP settings for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return the SNMP settings for an organization
        api_response = api_instance.get_organization_snmp(organization_id)
        print("The response of OrganizationsApi->get_organization_snmp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_snmp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_summary_top_appliances_by_utilization**
> List[GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner] get_organization_summary_top_appliances_by_utilization(organization_id, t0=t0, t1=t1, timespan=timespan)

Return the top 10 appliances sorted by utilization over given time range.

Return the top 10 appliances sorted by utilization over given time range.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_appliances_by_utilization200_response_inner import GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return the top 10 appliances sorted by utilization over given time range.
        api_response = api_instance.get_organization_summary_top_appliances_by_utilization(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of OrganizationsApi->get_organization_summary_top_appliances_by_utilization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_summary_top_appliances_by_utilization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner]**](GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_summary_top_clients_by_usage**
> List[GetOrganizationSummaryTopClientsByUsage200ResponseInner] get_organization_summary_top_clients_by_usage(organization_id, t0=t0, t1=t1, timespan=timespan)

Return metrics for organization's top 10 clients by data usage (in mb) over given time range.

Return metrics for organization's top 10 clients by data usage (in mb) over given time range.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_clients_by_usage200_response_inner import GetOrganizationSummaryTopClientsByUsage200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
        api_response = api_instance.get_organization_summary_top_clients_by_usage(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of OrganizationsApi->get_organization_summary_top_clients_by_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_summary_top_clients_by_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopClientsByUsage200ResponseInner]**](GetOrganizationSummaryTopClientsByUsage200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_summary_top_clients_manufacturers_by_usage**
> List[GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInner] get_organization_summary_top_clients_manufacturers_by_usage(organization_id, t0=t0, t1=t1, timespan=timespan)

Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_clients_manufacturers_by_usage200_response_inner import GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
        api_response = api_instance.get_organization_summary_top_clients_manufacturers_by_usage(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of OrganizationsApi->get_organization_summary_top_clients_manufacturers_by_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_summary_top_clients_manufacturers_by_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInner]**](GetOrganizationSummaryTopClientsManufacturersByUsage200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_summary_top_devices_by_usage**
> List[GetOrganizationSummaryTopDevicesByUsage200ResponseInner] get_organization_summary_top_devices_by_usage(organization_id, t0=t0, t1=t1, timespan=timespan)

Return metrics for organization's top 10 devices sorted by data usage over given time range

Return metrics for organization's top 10 devices sorted by data usage over given time range. Default unit is megabytes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_devices_by_usage200_response_inner import GetOrganizationSummaryTopDevicesByUsage200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return metrics for organization's top 10 devices sorted by data usage over given time range
        api_response = api_instance.get_organization_summary_top_devices_by_usage(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of OrganizationsApi->get_organization_summary_top_devices_by_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_summary_top_devices_by_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopDevicesByUsage200ResponseInner]**](GetOrganizationSummaryTopDevicesByUsage200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_summary_top_devices_models_by_usage**
> List[GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner] get_organization_summary_top_devices_models_by_usage(organization_id, t0=t0, t1=t1, timespan=timespan)

Return metrics for organization's top 10 device models sorted by data usage over given time range

Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_devices_models_by_usage200_response_inner import GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return metrics for organization's top 10 device models sorted by data usage over given time range
        api_response = api_instance.get_organization_summary_top_devices_models_by_usage(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of OrganizationsApi->get_organization_summary_top_devices_models_by_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_summary_top_devices_models_by_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner]**](GetOrganizationSummaryTopDevicesModelsByUsage200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_summary_top_ssids_by_usage**
> List[GetOrganizationSummaryTopSsidsByUsage200ResponseInner] get_organization_summary_top_ssids_by_usage(organization_id, t0=t0, t1=t1, timespan=timespan)

Return metrics for organization's top 10 ssids by data usage over given time range

Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_ssids_by_usage200_response_inner import GetOrganizationSummaryTopSsidsByUsage200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return metrics for organization's top 10 ssids by data usage over given time range
        api_response = api_instance.get_organization_summary_top_ssids_by_usage(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of OrganizationsApi->get_organization_summary_top_ssids_by_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_summary_top_ssids_by_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopSsidsByUsage200ResponseInner]**](GetOrganizationSummaryTopSsidsByUsage200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_summary_top_switches_by_energy_usage**
> List[GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInner] get_organization_summary_top_switches_by_energy_usage(organization_id, t0=t0, t1=t1, timespan=timespan)

Return metrics for organization's top 10 switches by energy usage over given time range

Return metrics for organization's top 10 switches by energy usage over given time range. Default unit is joules.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_switches_by_energy_usage200_response_inner import GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return metrics for organization's top 10 switches by energy usage over given time range
        api_response = api_instance.get_organization_summary_top_switches_by_energy_usage(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of OrganizationsApi->get_organization_summary_top_switches_by_energy_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_summary_top_switches_by_energy_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInner]**](GetOrganizationSummaryTopSwitchesByEnergyUsage200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_uplinks_statuses**
> List[GetOrganizationUplinksStatuses200ResponseInner] get_organization_uplinks_statuses(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, iccids=iccids)

List the uplink status of every Meraki MX, MG and Z series devices in the organization

List the uplink status of every Meraki MX, MG and Z series devices in the organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_uplinks_statuses200_response_inner import GetOrganizationUplinksStatuses200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | A list of network IDs. The returned devices will be filtered to only include these networks. (optional)
    serials = ['serials_example'] # List[str] | A list of serial numbers. The returned devices will be filtered to only include these serials. (optional)
    iccids = ['iccids_example'] # List[str] | A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs. (optional)

    try:
        # List the uplink status of every Meraki MX, MG and Z series devices in the organization
        api_response = api_instance.get_organization_uplinks_statuses(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, iccids=iccids)
        print("The response of OrganizationsApi->get_organization_uplinks_statuses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_uplinks_statuses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| A list of network IDs. The returned devices will be filtered to only include these networks. | [optional] 
 **serials** | [**List[str]**](str.md)| A list of serial numbers. The returned devices will be filtered to only include these serials. | [optional] 
 **iccids** | [**List[str]**](str.md)| A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs. | [optional] 

### Return type

[**List[GetOrganizationUplinksStatuses200ResponseInner]**](GetOrganizationUplinksStatuses200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_webhooks_alert_types**
> List[object] get_organization_webhooks_alert_types(organization_id, product_type=product_type)

Return a list of alert types to be used with managing webhook alerts

Return a list of alert types to be used with managing webhook alerts

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    product_type = 'product_type_example' # str | Filter sample alerts to a specific product type (optional)

    try:
        # Return a list of alert types to be used with managing webhook alerts
        api_response = api_instance.get_organization_webhooks_alert_types(organization_id, product_type=product_type)
        print("The response of OrganizationsApi->get_organization_webhooks_alert_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_webhooks_alert_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **product_type** | **str**| Filter sample alerts to a specific product type | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_webhooks_logs**
> List[GetOrganizationWebhooksLogs200ResponseInner] get_organization_webhooks_logs(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, url=url)

Return the log of webhook POSTs sent

Return the log of webhook POSTs sent

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_webhooks_logs200_response_inner import GetOrganizationWebhooksLogs200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 90 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    url = 'url_example' # str | The URL the webhook was sent to (optional)

    try:
        # Return the log of webhook POSTs sent
        api_response = api_instance.get_organization_webhooks_logs(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, url=url)
        print("The response of OrganizationsApi->get_organization_webhooks_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_webhooks_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 90 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **url** | **str**| The URL the webhook was sent to | [optional] 

### Return type

[**List[GetOrganizationWebhooksLogs200ResponseInner]**](GetOrganizationWebhooksLogs200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organizations**
> List[GetOrganizations200ResponseInner] get_organizations()

List the organizations that the user has privileges on

List the organizations that the user has privileges on

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organizations200_response_inner import GetOrganizations200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)

    try:
        # List the organizations that the user has privileges on
        api_response = api_instance.get_organizations()
        print("The response of OrganizationsApi->get_organizations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organizations: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[GetOrganizations200ResponseInner]**](GetOrganizations200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **move_organization_licenses**
> MoveOrganizationLicenses200Response move_organization_licenses(organization_id, move_organization_licenses_request)

Move licenses to another organization

Move licenses to another organization. This will also move any devices that the licenses are assigned to

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.move_organization_licenses200_response import MoveOrganizationLicenses200Response
from openapi_client.models.move_organization_licenses_request import MoveOrganizationLicensesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    move_organization_licenses_request = openapi_client.MoveOrganizationLicensesRequest() # MoveOrganizationLicensesRequest | 

    try:
        # Move licenses to another organization
        api_response = api_instance.move_organization_licenses(organization_id, move_organization_licenses_request)
        print("The response of OrganizationsApi->move_organization_licenses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->move_organization_licenses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **move_organization_licenses_request** | [**MoveOrganizationLicensesRequest**](MoveOrganizationLicensesRequest.md)|  | 

### Return type

[**MoveOrganizationLicenses200Response**](MoveOrganizationLicenses200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **move_organization_licenses_seats**
> MoveOrganizationLicensesSeats200Response move_organization_licenses_seats(organization_id, move_organization_licenses_seats_request)

Move SM seats to another organization

Move SM seats to another organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.move_organization_licenses_seats200_response import MoveOrganizationLicensesSeats200Response
from openapi_client.models.move_organization_licenses_seats_request import MoveOrganizationLicensesSeatsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    move_organization_licenses_seats_request = openapi_client.MoveOrganizationLicensesSeatsRequest() # MoveOrganizationLicensesSeatsRequest | 

    try:
        # Move SM seats to another organization
        api_response = api_instance.move_organization_licenses_seats(organization_id, move_organization_licenses_seats_request)
        print("The response of OrganizationsApi->move_organization_licenses_seats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->move_organization_licenses_seats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **move_organization_licenses_seats_request** | [**MoveOrganizationLicensesSeatsRequest**](MoveOrganizationLicensesSeatsRequest.md)|  | 

### Return type

[**MoveOrganizationLicensesSeats200Response**](MoveOrganizationLicensesSeats200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **release_from_organization_inventory**
> object release_from_organization_inventory(organization_id, release_from_organization_inventory_request=release_from_organization_inventory_request)

Release a list of claimed devices from an organization.

Release a list of claimed devices from an organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.release_from_organization_inventory_request import ReleaseFromOrganizationInventoryRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    release_from_organization_inventory_request = openapi_client.ReleaseFromOrganizationInventoryRequest() # ReleaseFromOrganizationInventoryRequest |  (optional)

    try:
        # Release a list of claimed devices from an organization.
        api_response = api_instance.release_from_organization_inventory(organization_id, release_from_organization_inventory_request=release_from_organization_inventory_request)
        print("The response of OrganizationsApi->release_from_organization_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->release_from_organization_inventory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **release_from_organization_inventory_request** | [**ReleaseFromOrganizationInventoryRequest**](ReleaseFromOrganizationInventoryRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **renew_organization_licenses_seats**
> AssignOrganizationLicensesSeats200Response renew_organization_licenses_seats(organization_id, renew_organization_licenses_seats_request)

Renew SM seats of a license

Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.assign_organization_licenses_seats200_response import AssignOrganizationLicensesSeats200Response
from openapi_client.models.renew_organization_licenses_seats_request import RenewOrganizationLicensesSeatsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    renew_organization_licenses_seats_request = openapi_client.RenewOrganizationLicensesSeatsRequest() # RenewOrganizationLicensesSeatsRequest | 

    try:
        # Renew SM seats of a license
        api_response = api_instance.renew_organization_licenses_seats(organization_id, renew_organization_licenses_seats_request)
        print("The response of OrganizationsApi->renew_organization_licenses_seats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->renew_organization_licenses_seats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **renew_organization_licenses_seats_request** | [**RenewOrganizationLicensesSeatsRequest**](RenewOrganizationLicensesSeatsRequest.md)|  | 

### Return type

[**AssignOrganizationLicensesSeats200Response**](AssignOrganizationLicensesSeats200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization**
> GetOrganizations200ResponseInner update_organization(organization_id, update_organization_request=update_organization_request)

Update an organization

Update an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organizations200_response_inner import GetOrganizations200ResponseInner
from openapi_client.models.update_organization_request import UpdateOrganizationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_request = openapi_client.UpdateOrganizationRequest() # UpdateOrganizationRequest |  (optional)

    try:
        # Update an organization
        api_response = api_instance.update_organization(organization_id, update_organization_request=update_organization_request)
        print("The response of OrganizationsApi->update_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_request** | [**UpdateOrganizationRequest**](UpdateOrganizationRequest.md)|  | [optional] 

### Return type

[**GetOrganizations200ResponseInner**](GetOrganizations200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_action_batch**
> object update_organization_action_batch(organization_id, action_batch_id, update_organization_action_batch_request=update_organization_action_batch_request)

Update an action batch

Update an action batch

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_action_batch_request import UpdateOrganizationActionBatchRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    action_batch_id = 'action_batch_id_example' # str | 
    update_organization_action_batch_request = openapi_client.UpdateOrganizationActionBatchRequest() # UpdateOrganizationActionBatchRequest |  (optional)

    try:
        # Update an action batch
        api_response = api_instance.update_organization_action_batch(organization_id, action_batch_id, update_organization_action_batch_request=update_organization_action_batch_request)
        print("The response of OrganizationsApi->update_organization_action_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_action_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **action_batch_id** | **str**|  | 
 **update_organization_action_batch_request** | [**UpdateOrganizationActionBatchRequest**](UpdateOrganizationActionBatchRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_adaptive_policy_acl**
> object update_organization_adaptive_policy_acl(organization_id, acl_id, update_organization_adaptive_policy_acl_request=update_organization_adaptive_policy_acl_request)

Updates an adaptive policy ACL

Updates an adaptive policy ACL

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_adaptive_policy_acl_request import UpdateOrganizationAdaptivePolicyAclRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    acl_id = 'acl_id_example' # str | 
    update_organization_adaptive_policy_acl_request = openapi_client.UpdateOrganizationAdaptivePolicyAclRequest() # UpdateOrganizationAdaptivePolicyAclRequest |  (optional)

    try:
        # Updates an adaptive policy ACL
        api_response = api_instance.update_organization_adaptive_policy_acl(organization_id, acl_id, update_organization_adaptive_policy_acl_request=update_organization_adaptive_policy_acl_request)
        print("The response of OrganizationsApi->update_organization_adaptive_policy_acl:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_adaptive_policy_acl: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **acl_id** | **str**|  | 
 **update_organization_adaptive_policy_acl_request** | [**UpdateOrganizationAdaptivePolicyAclRequest**](UpdateOrganizationAdaptivePolicyAclRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_adaptive_policy_group**
> object update_organization_adaptive_policy_group(organization_id, id, update_organization_adaptive_policy_group_request=update_organization_adaptive_policy_group_request)

Updates an adaptive policy group

Updates an adaptive policy group. If updating \"Infrastructure\", only the SGT is allowed. Cannot update \"Unknown\".

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_adaptive_policy_group_request import UpdateOrganizationAdaptivePolicyGroupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    id = 'id_example' # str | 
    update_organization_adaptive_policy_group_request = openapi_client.UpdateOrganizationAdaptivePolicyGroupRequest() # UpdateOrganizationAdaptivePolicyGroupRequest |  (optional)

    try:
        # Updates an adaptive policy group
        api_response = api_instance.update_organization_adaptive_policy_group(organization_id, id, update_organization_adaptive_policy_group_request=update_organization_adaptive_policy_group_request)
        print("The response of OrganizationsApi->update_organization_adaptive_policy_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_adaptive_policy_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **id** | **str**|  | 
 **update_organization_adaptive_policy_group_request** | [**UpdateOrganizationAdaptivePolicyGroupRequest**](UpdateOrganizationAdaptivePolicyGroupRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_adaptive_policy_policy**
> object update_organization_adaptive_policy_policy(organization_id, id, update_organization_adaptive_policy_policy_request=update_organization_adaptive_policy_policy_request)

Update an Adaptive Policy

Update an Adaptive Policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_adaptive_policy_policy_request import UpdateOrganizationAdaptivePolicyPolicyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    id = 'id_example' # str | 
    update_organization_adaptive_policy_policy_request = openapi_client.UpdateOrganizationAdaptivePolicyPolicyRequest() # UpdateOrganizationAdaptivePolicyPolicyRequest |  (optional)

    try:
        # Update an Adaptive Policy
        api_response = api_instance.update_organization_adaptive_policy_policy(organization_id, id, update_organization_adaptive_policy_policy_request=update_organization_adaptive_policy_policy_request)
        print("The response of OrganizationsApi->update_organization_adaptive_policy_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_adaptive_policy_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **id** | **str**|  | 
 **update_organization_adaptive_policy_policy_request** | [**UpdateOrganizationAdaptivePolicyPolicyRequest**](UpdateOrganizationAdaptivePolicyPolicyRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_adaptive_policy_settings**
> object update_organization_adaptive_policy_settings(organization_id, update_organization_adaptive_policy_settings_request=update_organization_adaptive_policy_settings_request)

Update global adaptive policy settings

Update global adaptive policy settings

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_adaptive_policy_settings_request import UpdateOrganizationAdaptivePolicySettingsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_adaptive_policy_settings_request = openapi_client.UpdateOrganizationAdaptivePolicySettingsRequest() # UpdateOrganizationAdaptivePolicySettingsRequest |  (optional)

    try:
        # Update global adaptive policy settings
        api_response = api_instance.update_organization_adaptive_policy_settings(organization_id, update_organization_adaptive_policy_settings_request=update_organization_adaptive_policy_settings_request)
        print("The response of OrganizationsApi->update_organization_adaptive_policy_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_adaptive_policy_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_adaptive_policy_settings_request** | [**UpdateOrganizationAdaptivePolicySettingsRequest**](UpdateOrganizationAdaptivePolicySettingsRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_admin**
> object update_organization_admin(organization_id, admin_id, update_organization_admin_request=update_organization_admin_request)

Update an administrator

Update an administrator

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_admin_request import UpdateOrganizationAdminRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    admin_id = 'admin_id_example' # str | 
    update_organization_admin_request = openapi_client.UpdateOrganizationAdminRequest() # UpdateOrganizationAdminRequest |  (optional)

    try:
        # Update an administrator
        api_response = api_instance.update_organization_admin(organization_id, admin_id, update_organization_admin_request=update_organization_admin_request)
        print("The response of OrganizationsApi->update_organization_admin:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_admin: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **admin_id** | **str**|  | 
 **update_organization_admin_request** | [**UpdateOrganizationAdminRequest**](UpdateOrganizationAdminRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_alerts_profile**
> object update_organization_alerts_profile(organization_id, alert_config_id, update_organization_alerts_profile_request=update_organization_alerts_profile_request)

Update an organization-wide alert config

Update an organization-wide alert config

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_alerts_profile_request import UpdateOrganizationAlertsProfileRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    alert_config_id = 'alert_config_id_example' # str | 
    update_organization_alerts_profile_request = openapi_client.UpdateOrganizationAlertsProfileRequest() # UpdateOrganizationAlertsProfileRequest |  (optional)

    try:
        # Update an organization-wide alert config
        api_response = api_instance.update_organization_alerts_profile(organization_id, alert_config_id, update_organization_alerts_profile_request=update_organization_alerts_profile_request)
        print("The response of OrganizationsApi->update_organization_alerts_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_alerts_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **alert_config_id** | **str**|  | 
 **update_organization_alerts_profile_request** | [**UpdateOrganizationAlertsProfileRequest**](UpdateOrganizationAlertsProfileRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_branding_policies_priorities**
> GetOrganizationBrandingPoliciesPriorities200Response update_organization_branding_policies_priorities(organization_id, update_organization_branding_policies_priorities_request=update_organization_branding_policies_priorities_request)

Update the priority ordering of an organization's branding policies.

Update the priority ordering of an organization's branding policies.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_branding_policies_priorities200_response import GetOrganizationBrandingPoliciesPriorities200Response
from openapi_client.models.update_organization_branding_policies_priorities_request import UpdateOrganizationBrandingPoliciesPrioritiesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_branding_policies_priorities_request = openapi_client.UpdateOrganizationBrandingPoliciesPrioritiesRequest() # UpdateOrganizationBrandingPoliciesPrioritiesRequest |  (optional)

    try:
        # Update the priority ordering of an organization's branding policies.
        api_response = api_instance.update_organization_branding_policies_priorities(organization_id, update_organization_branding_policies_priorities_request=update_organization_branding_policies_priorities_request)
        print("The response of OrganizationsApi->update_organization_branding_policies_priorities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_branding_policies_priorities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_branding_policies_priorities_request** | [**UpdateOrganizationBrandingPoliciesPrioritiesRequest**](UpdateOrganizationBrandingPoliciesPrioritiesRequest.md)|  | [optional] 

### Return type

[**GetOrganizationBrandingPoliciesPriorities200Response**](GetOrganizationBrandingPoliciesPriorities200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_branding_policy**
> GetOrganizationBrandingPolicies200ResponseInner update_organization_branding_policy(organization_id, branding_policy_id, update_organization_branding_policy_request=update_organization_branding_policy_request)

Update a branding policy

Update a branding policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_branding_policies200_response_inner import GetOrganizationBrandingPolicies200ResponseInner
from openapi_client.models.update_organization_branding_policy_request import UpdateOrganizationBrandingPolicyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    branding_policy_id = 'branding_policy_id_example' # str | 
    update_organization_branding_policy_request = openapi_client.UpdateOrganizationBrandingPolicyRequest() # UpdateOrganizationBrandingPolicyRequest |  (optional)

    try:
        # Update a branding policy
        api_response = api_instance.update_organization_branding_policy(organization_id, branding_policy_id, update_organization_branding_policy_request=update_organization_branding_policy_request)
        print("The response of OrganizationsApi->update_organization_branding_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_branding_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **branding_policy_id** | **str**|  | 
 **update_organization_branding_policy_request** | [**UpdateOrganizationBrandingPolicyRequest**](UpdateOrganizationBrandingPolicyRequest.md)|  | [optional] 

### Return type

[**GetOrganizationBrandingPolicies200ResponseInner**](GetOrganizationBrandingPolicies200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_config_template**
> object update_organization_config_template(organization_id, config_template_id, update_organization_config_template_request=update_organization_config_template_request)

Update a configuration template

Update a configuration template

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_config_template_request import UpdateOrganizationConfigTemplateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    config_template_id = 'config_template_id_example' # str | 
    update_organization_config_template_request = openapi_client.UpdateOrganizationConfigTemplateRequest() # UpdateOrganizationConfigTemplateRequest |  (optional)

    try:
        # Update a configuration template
        api_response = api_instance.update_organization_config_template(organization_id, config_template_id, update_organization_config_template_request=update_organization_config_template_request)
        print("The response of OrganizationsApi->update_organization_config_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_config_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **config_template_id** | **str**|  | 
 **update_organization_config_template_request** | [**UpdateOrganizationConfigTemplateRequest**](UpdateOrganizationConfigTemplateRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_early_access_features_opt_in**
> object update_organization_early_access_features_opt_in(organization_id, opt_in_id, update_organization_early_access_features_opt_in_request=update_organization_early_access_features_opt_in_request)

Update an early access feature opt-in for an organization

Update an early access feature opt-in for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_early_access_features_opt_in_request import UpdateOrganizationEarlyAccessFeaturesOptInRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    opt_in_id = 'opt_in_id_example' # str | 
    update_organization_early_access_features_opt_in_request = openapi_client.UpdateOrganizationEarlyAccessFeaturesOptInRequest() # UpdateOrganizationEarlyAccessFeaturesOptInRequest |  (optional)

    try:
        # Update an early access feature opt-in for an organization
        api_response = api_instance.update_organization_early_access_features_opt_in(organization_id, opt_in_id, update_organization_early_access_features_opt_in_request=update_organization_early_access_features_opt_in_request)
        print("The response of OrganizationsApi->update_organization_early_access_features_opt_in:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_early_access_features_opt_in: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **opt_in_id** | **str**|  | 
 **update_organization_early_access_features_opt_in_request** | [**UpdateOrganizationEarlyAccessFeaturesOptInRequest**](UpdateOrganizationEarlyAccessFeaturesOptInRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_license**
> GetOrganizationLicenses200ResponseInner update_organization_license(organization_id, license_id, update_organization_license_request=update_organization_license_request)

Update a license

Update a license

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_licenses200_response_inner import GetOrganizationLicenses200ResponseInner
from openapi_client.models.update_organization_license_request import UpdateOrganizationLicenseRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    license_id = 'license_id_example' # str | 
    update_organization_license_request = openapi_client.UpdateOrganizationLicenseRequest() # UpdateOrganizationLicenseRequest |  (optional)

    try:
        # Update a license
        api_response = api_instance.update_organization_license(organization_id, license_id, update_organization_license_request=update_organization_license_request)
        print("The response of OrganizationsApi->update_organization_license:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_license: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **license_id** | **str**|  | 
 **update_organization_license_request** | [**UpdateOrganizationLicenseRequest**](UpdateOrganizationLicenseRequest.md)|  | [optional] 

### Return type

[**GetOrganizationLicenses200ResponseInner**](GetOrganizationLicenses200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_login_security**
> GetOrganizationLoginSecurity200Response update_organization_login_security(organization_id, update_organization_login_security_request=update_organization_login_security_request)

Update the login security settings for an organization

Update the login security settings for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_login_security200_response import GetOrganizationLoginSecurity200Response
from openapi_client.models.update_organization_login_security_request import UpdateOrganizationLoginSecurityRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_login_security_request = openapi_client.UpdateOrganizationLoginSecurityRequest() # UpdateOrganizationLoginSecurityRequest |  (optional)

    try:
        # Update the login security settings for an organization
        api_response = api_instance.update_organization_login_security(organization_id, update_organization_login_security_request=update_organization_login_security_request)
        print("The response of OrganizationsApi->update_organization_login_security:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_login_security: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_login_security_request** | [**UpdateOrganizationLoginSecurityRequest**](UpdateOrganizationLoginSecurityRequest.md)|  | [optional] 

### Return type

[**GetOrganizationLoginSecurity200Response**](GetOrganizationLoginSecurity200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_policy_object**
> object update_organization_policy_object(organization_id, policy_object_id, update_organization_policy_object_request=update_organization_policy_object_request)

Updates a Policy Object.

Updates a Policy Object.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_policy_object_request import UpdateOrganizationPolicyObjectRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    policy_object_id = 'policy_object_id_example' # str | 
    update_organization_policy_object_request = openapi_client.UpdateOrganizationPolicyObjectRequest() # UpdateOrganizationPolicyObjectRequest |  (optional)

    try:
        # Updates a Policy Object.
        api_response = api_instance.update_organization_policy_object(organization_id, policy_object_id, update_organization_policy_object_request=update_organization_policy_object_request)
        print("The response of OrganizationsApi->update_organization_policy_object:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_policy_object: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **policy_object_id** | **str**|  | 
 **update_organization_policy_object_request** | [**UpdateOrganizationPolicyObjectRequest**](UpdateOrganizationPolicyObjectRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_policy_objects_group**
> object update_organization_policy_objects_group(organization_id, policy_object_group_id, update_organization_policy_objects_group_request=update_organization_policy_objects_group_request)

Updates a Policy Object Group.

Updates a Policy Object Group.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_policy_objects_group_request import UpdateOrganizationPolicyObjectsGroupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    policy_object_group_id = 'policy_object_group_id_example' # str | 
    update_organization_policy_objects_group_request = openapi_client.UpdateOrganizationPolicyObjectsGroupRequest() # UpdateOrganizationPolicyObjectsGroupRequest |  (optional)

    try:
        # Updates a Policy Object Group.
        api_response = api_instance.update_organization_policy_objects_group(organization_id, policy_object_group_id, update_organization_policy_objects_group_request=update_organization_policy_objects_group_request)
        print("The response of OrganizationsApi->update_organization_policy_objects_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_policy_objects_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **policy_object_group_id** | **str**|  | 
 **update_organization_policy_objects_group_request** | [**UpdateOrganizationPolicyObjectsGroupRequest**](UpdateOrganizationPolicyObjectsGroupRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_saml**
> GetOrganizationSaml200Response update_organization_saml(organization_id, update_organization_saml_request=update_organization_saml_request)

Updates the SAML SSO enabled settings for an organization.

Updates the SAML SSO enabled settings for an organization.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_saml200_response import GetOrganizationSaml200Response
from openapi_client.models.update_organization_saml_request import UpdateOrganizationSamlRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_saml_request = openapi_client.UpdateOrganizationSamlRequest() # UpdateOrganizationSamlRequest |  (optional)

    try:
        # Updates the SAML SSO enabled settings for an organization.
        api_response = api_instance.update_organization_saml(organization_id, update_organization_saml_request=update_organization_saml_request)
        print("The response of OrganizationsApi->update_organization_saml:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_saml: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_saml_request** | [**UpdateOrganizationSamlRequest**](UpdateOrganizationSamlRequest.md)|  | [optional] 

### Return type

[**GetOrganizationSaml200Response**](GetOrganizationSaml200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_saml_idp**
> List[GetOrganizationSamlIdps200ResponseInner] update_organization_saml_idp(organization_id, idp_id, update_organization_saml_idp_request=update_organization_saml_idp_request)

Update a SAML IdP in your organization

Update a SAML IdP in your organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_saml_idps200_response_inner import GetOrganizationSamlIdps200ResponseInner
from openapi_client.models.update_organization_saml_idp_request import UpdateOrganizationSamlIdpRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    idp_id = 'idp_id_example' # str | 
    update_organization_saml_idp_request = openapi_client.UpdateOrganizationSamlIdpRequest() # UpdateOrganizationSamlIdpRequest |  (optional)

    try:
        # Update a SAML IdP in your organization
        api_response = api_instance.update_organization_saml_idp(organization_id, idp_id, update_organization_saml_idp_request=update_organization_saml_idp_request)
        print("The response of OrganizationsApi->update_organization_saml_idp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_saml_idp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **idp_id** | **str**|  | 
 **update_organization_saml_idp_request** | [**UpdateOrganizationSamlIdpRequest**](UpdateOrganizationSamlIdpRequest.md)|  | [optional] 

### Return type

[**List[GetOrganizationSamlIdps200ResponseInner]**](GetOrganizationSamlIdps200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_saml_role**
> UpdateOrganizationSamlRole200Response update_organization_saml_role(organization_id, saml_role_id, update_organization_saml_role_request=update_organization_saml_role_request)

Update a SAML role

Update a SAML role

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_saml_role200_response import UpdateOrganizationSamlRole200Response
from openapi_client.models.update_organization_saml_role_request import UpdateOrganizationSamlRoleRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    saml_role_id = 'saml_role_id_example' # str | 
    update_organization_saml_role_request = openapi_client.UpdateOrganizationSamlRoleRequest() # UpdateOrganizationSamlRoleRequest |  (optional)

    try:
        # Update a SAML role
        api_response = api_instance.update_organization_saml_role(organization_id, saml_role_id, update_organization_saml_role_request=update_organization_saml_role_request)
        print("The response of OrganizationsApi->update_organization_saml_role:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_saml_role: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **saml_role_id** | **str**|  | 
 **update_organization_saml_role_request** | [**UpdateOrganizationSamlRoleRequest**](UpdateOrganizationSamlRoleRequest.md)|  | [optional] 

### Return type

[**UpdateOrganizationSamlRole200Response**](UpdateOrganizationSamlRole200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_snmp**
> object update_organization_snmp(organization_id, update_organization_snmp_request=update_organization_snmp_request)

Update the SNMP settings for an organization

Update the SNMP settings for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_snmp_request import UpdateOrganizationSnmpRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_snmp_request = openapi_client.UpdateOrganizationSnmpRequest() # UpdateOrganizationSnmpRequest |  (optional)

    try:
        # Update the SNMP settings for an organization
        api_response = api_instance.update_organization_snmp(organization_id, update_organization_snmp_request=update_organization_snmp_request)
        print("The response of OrganizationsApi->update_organization_snmp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_snmp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_snmp_request** | [**UpdateOrganizationSnmpRequest**](UpdateOrganizationSnmpRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

