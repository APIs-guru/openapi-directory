# openapi_client.NetworksApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bind_network**](NetworksApi.md#bind_network) | **POST** /networks/{networkId}/bind | Bind a network to a template.
[**claim_network_devices**](NetworksApi.md#claim_network_devices) | **POST** /networks/{networkId}/devices/claim | Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
[**combine_organization_networks_1**](NetworksApi.md#combine_organization_networks_1) | **POST** /organizations/{organizationId}/networks/combine | Combine multiple networks into a single network
[**create_network_firmware_upgrades_rollback**](NetworksApi.md#create_network_firmware_upgrades_rollback) | **POST** /networks/{networkId}/firmwareUpgrades/rollbacks | Rollback a Firmware Upgrade For A Network
[**create_network_firmware_upgrades_staged_event**](NetworksApi.md#create_network_firmware_upgrades_staged_event) | **POST** /networks/{networkId}/firmwareUpgrades/staged/events | Create a Staged Upgrade Event for a network
[**create_network_firmware_upgrades_staged_group**](NetworksApi.md#create_network_firmware_upgrades_staged_group) | **POST** /networks/{networkId}/firmwareUpgrades/staged/groups | Create a Staged Upgrade Group for a network
[**create_network_floor_plan**](NetworksApi.md#create_network_floor_plan) | **POST** /networks/{networkId}/floorPlans | Upload a floor plan
[**create_network_group_policy**](NetworksApi.md#create_network_group_policy) | **POST** /networks/{networkId}/groupPolicies | Create a group policy
[**create_network_meraki_auth_user**](NetworksApi.md#create_network_meraki_auth_user) | **POST** /networks/{networkId}/merakiAuthUsers | Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
[**create_network_mqtt_broker**](NetworksApi.md#create_network_mqtt_broker) | **POST** /networks/{networkId}/mqttBrokers | Add an MQTT broker
[**create_network_pii_request**](NetworksApi.md#create_network_pii_request) | **POST** /networks/{networkId}/pii/requests | Submit a new delete or restrict processing PII request
[**create_network_webhooks_http_server**](NetworksApi.md#create_network_webhooks_http_server) | **POST** /networks/{networkId}/webhooks/httpServers | Add an HTTP server to a network
[**create_network_webhooks_payload_template**](NetworksApi.md#create_network_webhooks_payload_template) | **POST** /networks/{networkId}/webhooks/payloadTemplates | Create a webhook payload template for a network
[**create_network_webhooks_webhook_test**](NetworksApi.md#create_network_webhooks_webhook_test) | **POST** /networks/{networkId}/webhooks/webhookTests | Send a test webhook for a network
[**create_organization_network_1**](NetworksApi.md#create_organization_network_1) | **POST** /organizations/{organizationId}/networks | Create a network
[**defer_network_firmware_upgrades_staged_events**](NetworksApi.md#defer_network_firmware_upgrades_staged_events) | **POST** /networks/{networkId}/firmwareUpgrades/staged/events/defer | Postpone by 1 week all pending staged upgrade stages for a network
[**delete_network**](NetworksApi.md#delete_network) | **DELETE** /networks/{networkId} | Delete a network
[**delete_network_firmware_upgrades_staged_group**](NetworksApi.md#delete_network_firmware_upgrades_staged_group) | **DELETE** /networks/{networkId}/firmwareUpgrades/staged/groups/{groupId} | Delete a Staged Upgrade Group
[**delete_network_floor_plan**](NetworksApi.md#delete_network_floor_plan) | **DELETE** /networks/{networkId}/floorPlans/{floorPlanId} | Destroy a floor plan
[**delete_network_group_policy**](NetworksApi.md#delete_network_group_policy) | **DELETE** /networks/{networkId}/groupPolicies/{groupPolicyId} | Delete a group policy
[**delete_network_meraki_auth_user**](NetworksApi.md#delete_network_meraki_auth_user) | **DELETE** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Deauthorize a user
[**delete_network_mqtt_broker**](NetworksApi.md#delete_network_mqtt_broker) | **DELETE** /networks/{networkId}/mqttBrokers/{mqttBrokerId} | Delete an MQTT broker
[**delete_network_pii_request**](NetworksApi.md#delete_network_pii_request) | **DELETE** /networks/{networkId}/pii/requests/{requestId} | Delete a restrict processing PII request
[**delete_network_webhooks_http_server**](NetworksApi.md#delete_network_webhooks_http_server) | **DELETE** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Delete an HTTP server from a network
[**delete_network_webhooks_payload_template**](NetworksApi.md#delete_network_webhooks_payload_template) | **DELETE** /networks/{networkId}/webhooks/payloadTemplates/{payloadTemplateId} | Destroy a webhook payload template for a network
[**get_network**](NetworksApi.md#get_network) | **GET** /networks/{networkId} | Return a network
[**get_network_alerts_history**](NetworksApi.md#get_network_alerts_history) | **GET** /networks/{networkId}/alerts/history | Return the alert history for this network
[**get_network_alerts_settings**](NetworksApi.md#get_network_alerts_settings) | **GET** /networks/{networkId}/alerts/settings | Return the alert configuration for this network
[**get_network_bluetooth_client**](NetworksApi.md#get_network_bluetooth_client) | **GET** /networks/{networkId}/bluetoothClients/{bluetoothClientId} | Return a Bluetooth client
[**get_network_bluetooth_clients**](NetworksApi.md#get_network_bluetooth_clients) | **GET** /networks/{networkId}/bluetoothClients | List the Bluetooth clients seen by APs in this network
[**get_network_client**](NetworksApi.md#get_network_client) | **GET** /networks/{networkId}/clients/{clientId} | Return the client associated with the given identifier
[**get_network_client_policy**](NetworksApi.md#get_network_client_policy) | **GET** /networks/{networkId}/clients/{clientId}/policy | Return the policy assigned to a client on the network
[**get_network_client_splash_authorization_status**](NetworksApi.md#get_network_client_splash_authorization_status) | **GET** /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus | Return the splash authorization for a client, for each SSID they&#39;ve associated with through splash
[**get_network_client_traffic_history**](NetworksApi.md#get_network_client_traffic_history) | **GET** /networks/{networkId}/clients/{clientId}/trafficHistory | Return the client&#39;s network traffic data over time
[**get_network_client_usage_history**](NetworksApi.md#get_network_client_usage_history) | **GET** /networks/{networkId}/clients/{clientId}/usageHistory | Return the client&#39;s daily usage history
[**get_network_clients**](NetworksApi.md#get_network_clients) | **GET** /networks/{networkId}/clients | List the clients that have used this network in the timespan
[**get_network_clients_application_usage**](NetworksApi.md#get_network_clients_application_usage) | **GET** /networks/{networkId}/clients/applicationUsage | Return the application usage data for clients
[**get_network_clients_bandwidth_usage_history**](NetworksApi.md#get_network_clients_bandwidth_usage_history) | **GET** /networks/{networkId}/clients/bandwidthUsageHistory | Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
[**get_network_clients_overview**](NetworksApi.md#get_network_clients_overview) | **GET** /networks/{networkId}/clients/overview | Return overview statistics for network clients
[**get_network_clients_usage_histories**](NetworksApi.md#get_network_clients_usage_histories) | **GET** /networks/{networkId}/clients/usageHistories | Return the usage histories for clients
[**get_network_devices**](NetworksApi.md#get_network_devices) | **GET** /networks/{networkId}/devices | List the devices in a network
[**get_network_events**](NetworksApi.md#get_network_events) | **GET** /networks/{networkId}/events | List the events for the network
[**get_network_events_event_types**](NetworksApi.md#get_network_events_event_types) | **GET** /networks/{networkId}/events/eventTypes | List the event type to human-readable description
[**get_network_firmware_upgrades**](NetworksApi.md#get_network_firmware_upgrades) | **GET** /networks/{networkId}/firmwareUpgrades | Get firmware upgrade information for a network
[**get_network_firmware_upgrades_staged_events**](NetworksApi.md#get_network_firmware_upgrades_staged_events) | **GET** /networks/{networkId}/firmwareUpgrades/staged/events | Get the Staged Upgrade Event from a network
[**get_network_firmware_upgrades_staged_group**](NetworksApi.md#get_network_firmware_upgrades_staged_group) | **GET** /networks/{networkId}/firmwareUpgrades/staged/groups/{groupId} | Get a Staged Upgrade Group from a network
[**get_network_firmware_upgrades_staged_groups**](NetworksApi.md#get_network_firmware_upgrades_staged_groups) | **GET** /networks/{networkId}/firmwareUpgrades/staged/groups | List of Staged Upgrade Groups in a network
[**get_network_firmware_upgrades_staged_stages**](NetworksApi.md#get_network_firmware_upgrades_staged_stages) | **GET** /networks/{networkId}/firmwareUpgrades/staged/stages | Order of Staged Upgrade Groups in a network
[**get_network_floor_plan**](NetworksApi.md#get_network_floor_plan) | **GET** /networks/{networkId}/floorPlans/{floorPlanId} | Find a floor plan by ID
[**get_network_floor_plans**](NetworksApi.md#get_network_floor_plans) | **GET** /networks/{networkId}/floorPlans | List the floor plans that belong to your network
[**get_network_group_policies**](NetworksApi.md#get_network_group_policies) | **GET** /networks/{networkId}/groupPolicies | List the group policies in a network
[**get_network_group_policy**](NetworksApi.md#get_network_group_policy) | **GET** /networks/{networkId}/groupPolicies/{groupPolicyId} | Display a group policy
[**get_network_health_alerts**](NetworksApi.md#get_network_health_alerts) | **GET** /networks/{networkId}/health/alerts | Return all global alerts on this network
[**get_network_meraki_auth_user**](NetworksApi.md#get_network_meraki_auth_user) | **GET** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Return the Meraki Auth splash guest, RADIUS, or client VPN user
[**get_network_meraki_auth_users**](NetworksApi.md#get_network_meraki_auth_users) | **GET** /networks/{networkId}/merakiAuthUsers | List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
[**get_network_mqtt_broker**](NetworksApi.md#get_network_mqtt_broker) | **GET** /networks/{networkId}/mqttBrokers/{mqttBrokerId} | Return an MQTT broker
[**get_network_mqtt_brokers**](NetworksApi.md#get_network_mqtt_brokers) | **GET** /networks/{networkId}/mqttBrokers | List the MQTT brokers for this network
[**get_network_netflow**](NetworksApi.md#get_network_netflow) | **GET** /networks/{networkId}/netflow | Return the NetFlow traffic reporting settings for a network
[**get_network_network_health_channel_utilization**](NetworksApi.md#get_network_network_health_channel_utilization) | **GET** /networks/{networkId}/networkHealth/channelUtilization | Get the channel utilization over each radio for all APs in a network.
[**get_network_pii_pii_keys**](NetworksApi.md#get_network_pii_pii_keys) | **GET** /networks/{networkId}/pii/piiKeys | List the keys required to access Personally Identifiable Information (PII) for a given identifier
[**get_network_pii_request**](NetworksApi.md#get_network_pii_request) | **GET** /networks/{networkId}/pii/requests/{requestId} | Return a PII request
[**get_network_pii_requests**](NetworksApi.md#get_network_pii_requests) | **GET** /networks/{networkId}/pii/requests | List the PII requests for this network or organization
[**get_network_pii_sm_devices_for_key**](NetworksApi.md#get_network_pii_sm_devices_for_key) | **GET** /networks/{networkId}/pii/smDevicesForKey | Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
[**get_network_pii_sm_owners_for_key**](NetworksApi.md#get_network_pii_sm_owners_for_key) | **GET** /networks/{networkId}/pii/smOwnersForKey | Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
[**get_network_policies_by_client**](NetworksApi.md#get_network_policies_by_client) | **GET** /networks/{networkId}/policies/byClient | Get policies for all clients with policies
[**get_network_settings**](NetworksApi.md#get_network_settings) | **GET** /networks/{networkId}/settings | Return the settings for a network
[**get_network_snmp**](NetworksApi.md#get_network_snmp) | **GET** /networks/{networkId}/snmp | Return the SNMP settings for a network
[**get_network_splash_login_attempts**](NetworksApi.md#get_network_splash_login_attempts) | **GET** /networks/{networkId}/splashLoginAttempts | List the splash login attempts for a network
[**get_network_syslog_servers**](NetworksApi.md#get_network_syslog_servers) | **GET** /networks/{networkId}/syslogServers | List the syslog servers for a network
[**get_network_topology_link_layer**](NetworksApi.md#get_network_topology_link_layer) | **GET** /networks/{networkId}/topology/linkLayer | List the LLDP and CDP information for all discovered devices and connections in a network.
[**get_network_traffic**](NetworksApi.md#get_network_traffic) | **GET** /networks/{networkId}/traffic | Return the traffic analysis data for this network
[**get_network_traffic_analysis**](NetworksApi.md#get_network_traffic_analysis) | **GET** /networks/{networkId}/trafficAnalysis | Return the traffic analysis settings for a network
[**get_network_traffic_shaping_application_categories**](NetworksApi.md#get_network_traffic_shaping_application_categories) | **GET** /networks/{networkId}/trafficShaping/applicationCategories | Returns the application categories for traffic shaping rules.
[**get_network_traffic_shaping_dscp_tagging_options**](NetworksApi.md#get_network_traffic_shaping_dscp_tagging_options) | **GET** /networks/{networkId}/trafficShaping/dscpTaggingOptions | Returns the available DSCP tagging options for your traffic shaping rules.
[**get_network_webhooks_http_server**](NetworksApi.md#get_network_webhooks_http_server) | **GET** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Return an HTTP server for a network
[**get_network_webhooks_http_servers**](NetworksApi.md#get_network_webhooks_http_servers) | **GET** /networks/{networkId}/webhooks/httpServers | List the HTTP servers for a network
[**get_network_webhooks_payload_template**](NetworksApi.md#get_network_webhooks_payload_template) | **GET** /networks/{networkId}/webhooks/payloadTemplates/{payloadTemplateId} | Get the webhook payload template for a network
[**get_network_webhooks_payload_templates**](NetworksApi.md#get_network_webhooks_payload_templates) | **GET** /networks/{networkId}/webhooks/payloadTemplates | List the webhook payload templates for a network
[**get_network_webhooks_webhook_test**](NetworksApi.md#get_network_webhooks_webhook_test) | **GET** /networks/{networkId}/webhooks/webhookTests/{webhookTestId} | Return the status of a webhook test for a network
[**get_organization_inventory_onboarding_cloud_monitoring_networks_4**](NetworksApi.md#get_organization_inventory_onboarding_cloud_monitoring_networks_4) | **GET** /organizations/{organizationId}/inventory/onboarding/cloudMonitoring/networks | Returns list of networks eligible for adding cloud monitored device
[**get_organization_networks_1**](NetworksApi.md#get_organization_networks_1) | **GET** /organizations/{organizationId}/networks | List the networks that the user has privileges on in an organization
[**provision_network_clients**](NetworksApi.md#provision_network_clients) | **POST** /networks/{networkId}/clients/provision | Provisions a client with a name and policy
[**remove_network_devices**](NetworksApi.md#remove_network_devices) | **POST** /networks/{networkId}/devices/remove | Remove a single device
[**rollbacks_network_firmware_upgrades_staged_events**](NetworksApi.md#rollbacks_network_firmware_upgrades_staged_events) | **POST** /networks/{networkId}/firmwareUpgrades/staged/events/rollbacks | Rollback a Staged Upgrade Event for a network
[**split_network**](NetworksApi.md#split_network) | **POST** /networks/{networkId}/split | Split a combined network into individual networks for each type of device
[**unbind_network**](NetworksApi.md#unbind_network) | **POST** /networks/{networkId}/unbind | Unbind a network from a template.
[**update_network**](NetworksApi.md#update_network) | **PUT** /networks/{networkId} | Update a network
[**update_network_alerts_settings**](NetworksApi.md#update_network_alerts_settings) | **PUT** /networks/{networkId}/alerts/settings | Update the alert configuration for this network
[**update_network_client_policy**](NetworksApi.md#update_network_client_policy) | **PUT** /networks/{networkId}/clients/{clientId}/policy | Update the policy assigned to a client on the network
[**update_network_client_splash_authorization_status**](NetworksApi.md#update_network_client_splash_authorization_status) | **PUT** /networks/{networkId}/clients/{clientId}/splashAuthorizationStatus | Update a client&#39;s splash authorization
[**update_network_firmware_upgrades**](NetworksApi.md#update_network_firmware_upgrades) | **PUT** /networks/{networkId}/firmwareUpgrades | Update firmware upgrade information for a network
[**update_network_firmware_upgrades_staged_events**](NetworksApi.md#update_network_firmware_upgrades_staged_events) | **PUT** /networks/{networkId}/firmwareUpgrades/staged/events | Update the Staged Upgrade Event for a network
[**update_network_firmware_upgrades_staged_group**](NetworksApi.md#update_network_firmware_upgrades_staged_group) | **PUT** /networks/{networkId}/firmwareUpgrades/staged/groups/{groupId} | Update a Staged Upgrade Group for a network
[**update_network_firmware_upgrades_staged_stages**](NetworksApi.md#update_network_firmware_upgrades_staged_stages) | **PUT** /networks/{networkId}/firmwareUpgrades/staged/stages | Assign Staged Upgrade Group order in the sequence.
[**update_network_floor_plan**](NetworksApi.md#update_network_floor_plan) | **PUT** /networks/{networkId}/floorPlans/{floorPlanId} | Update a floor plan&#39;s geolocation and other meta data
[**update_network_group_policy**](NetworksApi.md#update_network_group_policy) | **PUT** /networks/{networkId}/groupPolicies/{groupPolicyId} | Update a group policy
[**update_network_meraki_auth_user**](NetworksApi.md#update_network_meraki_auth_user) | **PUT** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
[**update_network_mqtt_broker**](NetworksApi.md#update_network_mqtt_broker) | **PUT** /networks/{networkId}/mqttBrokers/{mqttBrokerId} | Update an MQTT broker
[**update_network_netflow**](NetworksApi.md#update_network_netflow) | **PUT** /networks/{networkId}/netflow | Update the NetFlow traffic reporting settings for a network
[**update_network_settings**](NetworksApi.md#update_network_settings) | **PUT** /networks/{networkId}/settings | Update the settings for a network
[**update_network_snmp**](NetworksApi.md#update_network_snmp) | **PUT** /networks/{networkId}/snmp | Update the SNMP settings for a network
[**update_network_syslog_servers**](NetworksApi.md#update_network_syslog_servers) | **PUT** /networks/{networkId}/syslogServers | Update the syslog servers for a network
[**update_network_traffic_analysis**](NetworksApi.md#update_network_traffic_analysis) | **PUT** /networks/{networkId}/trafficAnalysis | Update the traffic analysis settings for a network
[**update_network_webhooks_http_server**](NetworksApi.md#update_network_webhooks_http_server) | **PUT** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Update an HTTP server
[**update_network_webhooks_payload_template**](NetworksApi.md#update_network_webhooks_payload_template) | **PUT** /networks/{networkId}/webhooks/payloadTemplates/{payloadTemplateId} | Update a webhook payload template for a network
[**vmx_network_devices_claim**](NetworksApi.md#vmx_network_devices_claim) | **POST** /networks/{networkId}/devices/claim/vmx | Claim a vMX into a network


# **bind_network**
> object bind_network(network_id, bind_network_request)

Bind a network to a template.

Bind a network to a template.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.bind_network_request import BindNetworkRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    bind_network_request = openapi_client.BindNetworkRequest() # BindNetworkRequest | 

    try:
        # Bind a network to a template.
        api_response = api_instance.bind_network(network_id, bind_network_request)
        print("The response of NetworksApi->bind_network:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->bind_network: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **bind_network_request** | [**BindNetworkRequest**](BindNetworkRequest.md)|  | 

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

# **claim_network_devices**
> claim_network_devices(network_id, claim_network_devices_request)

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)

Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.claim_network_devices_request import ClaimNetworkDevicesRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    claim_network_devices_request = openapi_client.ClaimNetworkDevicesRequest() # ClaimNetworkDevicesRequest | 

    try:
        # Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
        api_instance.claim_network_devices(network_id, claim_network_devices_request)
    except Exception as e:
        print("Exception when calling NetworksApi->claim_network_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **claim_network_devices_request** | [**ClaimNetworkDevicesRequest**](ClaimNetworkDevicesRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **combine_organization_networks_1**
> CombineOrganizationNetworks200Response combine_organization_networks_1(organization_id, combine_organization_networks_request)

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
    api_instance = openapi_client.NetworksApi(api_client)
    organization_id = 'organization_id_example' # str | 
    combine_organization_networks_request = openapi_client.CombineOrganizationNetworksRequest() # CombineOrganizationNetworksRequest | 

    try:
        # Combine multiple networks into a single network
        api_response = api_instance.combine_organization_networks_1(organization_id, combine_organization_networks_request)
        print("The response of NetworksApi->combine_organization_networks_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->combine_organization_networks_1: %s\n" % e)
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

# **create_network_firmware_upgrades_rollback**
> CreateNetworkFirmwareUpgradesRollback200Response create_network_firmware_upgrades_rollback(network_id, create_network_firmware_upgrades_rollback_request)

Rollback a Firmware Upgrade For A Network

Rollback a Firmware Upgrade For A Network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_firmware_upgrades_rollback200_response import CreateNetworkFirmwareUpgradesRollback200Response
from openapi_client.models.create_network_firmware_upgrades_rollback_request import CreateNetworkFirmwareUpgradesRollbackRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_firmware_upgrades_rollback_request = openapi_client.CreateNetworkFirmwareUpgradesRollbackRequest() # CreateNetworkFirmwareUpgradesRollbackRequest | 

    try:
        # Rollback a Firmware Upgrade For A Network
        api_response = api_instance.create_network_firmware_upgrades_rollback(network_id, create_network_firmware_upgrades_rollback_request)
        print("The response of NetworksApi->create_network_firmware_upgrades_rollback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->create_network_firmware_upgrades_rollback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_firmware_upgrades_rollback_request** | [**CreateNetworkFirmwareUpgradesRollbackRequest**](CreateNetworkFirmwareUpgradesRollbackRequest.md)|  | 

### Return type

[**CreateNetworkFirmwareUpgradesRollback200Response**](CreateNetworkFirmwareUpgradesRollback200Response.md)

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

# **create_network_firmware_upgrades_staged_event**
> GetNetworkFirmwareUpgradesStagedEvents200Response create_network_firmware_upgrades_staged_event(network_id, create_network_firmware_upgrades_staged_event_request)

Create a Staged Upgrade Event for a network

Create a Staged Upgrade Event for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_firmware_upgrades_staged_event_request import CreateNetworkFirmwareUpgradesStagedEventRequest
from openapi_client.models.get_network_firmware_upgrades_staged_events200_response import GetNetworkFirmwareUpgradesStagedEvents200Response
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_firmware_upgrades_staged_event_request = openapi_client.CreateNetworkFirmwareUpgradesStagedEventRequest() # CreateNetworkFirmwareUpgradesStagedEventRequest | 

    try:
        # Create a Staged Upgrade Event for a network
        api_response = api_instance.create_network_firmware_upgrades_staged_event(network_id, create_network_firmware_upgrades_staged_event_request)
        print("The response of NetworksApi->create_network_firmware_upgrades_staged_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->create_network_firmware_upgrades_staged_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_firmware_upgrades_staged_event_request** | [**CreateNetworkFirmwareUpgradesStagedEventRequest**](CreateNetworkFirmwareUpgradesStagedEventRequest.md)|  | 

### Return type

[**GetNetworkFirmwareUpgradesStagedEvents200Response**](GetNetworkFirmwareUpgradesStagedEvents200Response.md)

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

# **create_network_firmware_upgrades_staged_group**
> object create_network_firmware_upgrades_staged_group(network_id, create_network_firmware_upgrades_staged_group_request)

Create a Staged Upgrade Group for a network

Create a Staged Upgrade Group for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_firmware_upgrades_staged_group_request import CreateNetworkFirmwareUpgradesStagedGroupRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_firmware_upgrades_staged_group_request = openapi_client.CreateNetworkFirmwareUpgradesStagedGroupRequest() # CreateNetworkFirmwareUpgradesStagedGroupRequest | 

    try:
        # Create a Staged Upgrade Group for a network
        api_response = api_instance.create_network_firmware_upgrades_staged_group(network_id, create_network_firmware_upgrades_staged_group_request)
        print("The response of NetworksApi->create_network_firmware_upgrades_staged_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->create_network_firmware_upgrades_staged_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_firmware_upgrades_staged_group_request** | [**CreateNetworkFirmwareUpgradesStagedGroupRequest**](CreateNetworkFirmwareUpgradesStagedGroupRequest.md)|  | 

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

# **create_network_floor_plan**
> object create_network_floor_plan(network_id, create_network_floor_plan_request)

Upload a floor plan

Upload a floor plan

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_floor_plan_request import CreateNetworkFloorPlanRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_floor_plan_request = openapi_client.CreateNetworkFloorPlanRequest() # CreateNetworkFloorPlanRequest | 

    try:
        # Upload a floor plan
        api_response = api_instance.create_network_floor_plan(network_id, create_network_floor_plan_request)
        print("The response of NetworksApi->create_network_floor_plan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->create_network_floor_plan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_floor_plan_request** | [**CreateNetworkFloorPlanRequest**](CreateNetworkFloorPlanRequest.md)|  | 

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

# **create_network_group_policy**
> object create_network_group_policy(network_id, create_network_group_policy_request)

Create a group policy

Create a group policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_group_policy_request import CreateNetworkGroupPolicyRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_group_policy_request = openapi_client.CreateNetworkGroupPolicyRequest() # CreateNetworkGroupPolicyRequest | 

    try:
        # Create a group policy
        api_response = api_instance.create_network_group_policy(network_id, create_network_group_policy_request)
        print("The response of NetworksApi->create_network_group_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->create_network_group_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_group_policy_request** | [**CreateNetworkGroupPolicyRequest**](CreateNetworkGroupPolicyRequest.md)|  | 

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

# **create_network_meraki_auth_user**
> GetNetworkMerakiAuthUsers200ResponseInner create_network_meraki_auth_user(network_id, create_network_meraki_auth_user_request)

Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)

Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_meraki_auth_user_request import CreateNetworkMerakiAuthUserRequest
from openapi_client.models.get_network_meraki_auth_users200_response_inner import GetNetworkMerakiAuthUsers200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_meraki_auth_user_request = openapi_client.CreateNetworkMerakiAuthUserRequest() # CreateNetworkMerakiAuthUserRequest | 

    try:
        # Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)
        api_response = api_instance.create_network_meraki_auth_user(network_id, create_network_meraki_auth_user_request)
        print("The response of NetworksApi->create_network_meraki_auth_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->create_network_meraki_auth_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_meraki_auth_user_request** | [**CreateNetworkMerakiAuthUserRequest**](CreateNetworkMerakiAuthUserRequest.md)|  | 

### Return type

[**GetNetworkMerakiAuthUsers200ResponseInner**](GetNetworkMerakiAuthUsers200ResponseInner.md)

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

# **create_network_mqtt_broker**
> object create_network_mqtt_broker(network_id, create_network_mqtt_broker_request)

Add an MQTT broker

Add an MQTT broker

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_mqtt_broker_request import CreateNetworkMqttBrokerRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_mqtt_broker_request = openapi_client.CreateNetworkMqttBrokerRequest() # CreateNetworkMqttBrokerRequest | 

    try:
        # Add an MQTT broker
        api_response = api_instance.create_network_mqtt_broker(network_id, create_network_mqtt_broker_request)
        print("The response of NetworksApi->create_network_mqtt_broker:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->create_network_mqtt_broker: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_mqtt_broker_request** | [**CreateNetworkMqttBrokerRequest**](CreateNetworkMqttBrokerRequest.md)|  | 

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

# **create_network_pii_request**
> object create_network_pii_request(network_id, create_network_pii_request_request=create_network_pii_request_request)

Submit a new delete or restrict processing PII request

Submit a new delete or restrict processing PII request  ## ALTERNATE PATH  ``` /organizations/{organizationId}/pii/requests ```

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_pii_request_request import CreateNetworkPiiRequestRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_pii_request_request = openapi_client.CreateNetworkPiiRequestRequest() # CreateNetworkPiiRequestRequest |  (optional)

    try:
        # Submit a new delete or restrict processing PII request
        api_response = api_instance.create_network_pii_request(network_id, create_network_pii_request_request=create_network_pii_request_request)
        print("The response of NetworksApi->create_network_pii_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->create_network_pii_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_pii_request_request** | [**CreateNetworkPiiRequestRequest**](CreateNetworkPiiRequestRequest.md)|  | [optional] 

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

# **create_network_webhooks_http_server**
> GetNetworkWebhooksHttpServers200ResponseInner create_network_webhooks_http_server(network_id, create_network_webhooks_http_server_request)

Add an HTTP server to a network

Add an HTTP server to a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_webhooks_http_server_request import CreateNetworkWebhooksHttpServerRequest
from openapi_client.models.get_network_webhooks_http_servers200_response_inner import GetNetworkWebhooksHttpServers200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_webhooks_http_server_request = openapi_client.CreateNetworkWebhooksHttpServerRequest() # CreateNetworkWebhooksHttpServerRequest | 

    try:
        # Add an HTTP server to a network
        api_response = api_instance.create_network_webhooks_http_server(network_id, create_network_webhooks_http_server_request)
        print("The response of NetworksApi->create_network_webhooks_http_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->create_network_webhooks_http_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_webhooks_http_server_request** | [**CreateNetworkWebhooksHttpServerRequest**](CreateNetworkWebhooksHttpServerRequest.md)|  | 

### Return type

[**GetNetworkWebhooksHttpServers200ResponseInner**](GetNetworkWebhooksHttpServers200ResponseInner.md)

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

# **create_network_webhooks_payload_template**
> GetNetworkWebhooksPayloadTemplates200ResponseInner create_network_webhooks_payload_template(network_id, create_network_webhooks_payload_template_request)

Create a webhook payload template for a network

Create a webhook payload template for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_webhooks_payload_template_request import CreateNetworkWebhooksPayloadTemplateRequest
from openapi_client.models.get_network_webhooks_payload_templates200_response_inner import GetNetworkWebhooksPayloadTemplates200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_webhooks_payload_template_request = openapi_client.CreateNetworkWebhooksPayloadTemplateRequest() # CreateNetworkWebhooksPayloadTemplateRequest | 

    try:
        # Create a webhook payload template for a network
        api_response = api_instance.create_network_webhooks_payload_template(network_id, create_network_webhooks_payload_template_request)
        print("The response of NetworksApi->create_network_webhooks_payload_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->create_network_webhooks_payload_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_webhooks_payload_template_request** | [**CreateNetworkWebhooksPayloadTemplateRequest**](CreateNetworkWebhooksPayloadTemplateRequest.md)|  | 

### Return type

[**GetNetworkWebhooksPayloadTemplates200ResponseInner**](GetNetworkWebhooksPayloadTemplates200ResponseInner.md)

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

# **create_network_webhooks_webhook_test**
> CreateNetworkWebhooksWebhookTest201Response create_network_webhooks_webhook_test(network_id, create_network_webhooks_webhook_test_request)

Send a test webhook for a network

Send a test webhook for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_webhooks_webhook_test201_response import CreateNetworkWebhooksWebhookTest201Response
from openapi_client.models.create_network_webhooks_webhook_test_request import CreateNetworkWebhooksWebhookTestRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_webhooks_webhook_test_request = openapi_client.CreateNetworkWebhooksWebhookTestRequest() # CreateNetworkWebhooksWebhookTestRequest | 

    try:
        # Send a test webhook for a network
        api_response = api_instance.create_network_webhooks_webhook_test(network_id, create_network_webhooks_webhook_test_request)
        print("The response of NetworksApi->create_network_webhooks_webhook_test:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->create_network_webhooks_webhook_test: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_webhooks_webhook_test_request** | [**CreateNetworkWebhooksWebhookTestRequest**](CreateNetworkWebhooksWebhookTestRequest.md)|  | 

### Return type

[**CreateNetworkWebhooksWebhookTest201Response**](CreateNetworkWebhooksWebhookTest201Response.md)

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

# **create_organization_network_1**
> GetNetwork200Response create_organization_network_1(organization_id, create_organization_network_request)

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
    api_instance = openapi_client.NetworksApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_network_request = openapi_client.CreateOrganizationNetworkRequest() # CreateOrganizationNetworkRequest | 

    try:
        # Create a network
        api_response = api_instance.create_organization_network_1(organization_id, create_organization_network_request)
        print("The response of NetworksApi->create_organization_network_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->create_organization_network_1: %s\n" % e)
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

# **defer_network_firmware_upgrades_staged_events**
> GetNetworkFirmwareUpgradesStagedEvents200Response defer_network_firmware_upgrades_staged_events(network_id)

Postpone by 1 week all pending staged upgrade stages for a network

Postpone by 1 week all pending staged upgrade stages for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_events200_response import GetNetworkFirmwareUpgradesStagedEvents200Response
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Postpone by 1 week all pending staged upgrade stages for a network
        api_response = api_instance.defer_network_firmware_upgrades_staged_events(network_id)
        print("The response of NetworksApi->defer_network_firmware_upgrades_staged_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->defer_network_firmware_upgrades_staged_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkFirmwareUpgradesStagedEvents200Response**](GetNetworkFirmwareUpgradesStagedEvents200Response.md)

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

# **delete_network**
> delete_network(network_id)

Delete a network

Delete a network

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Delete a network
        api_instance.delete_network(network_id)
    except Exception as e:
        print("Exception when calling NetworksApi->delete_network: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **delete_network_firmware_upgrades_staged_group**
> delete_network_firmware_upgrades_staged_group(network_id, group_id)

Delete a Staged Upgrade Group

Delete a Staged Upgrade Group

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    group_id = 'group_id_example' # str | 

    try:
        # Delete a Staged Upgrade Group
        api_instance.delete_network_firmware_upgrades_staged_group(network_id, group_id)
    except Exception as e:
        print("Exception when calling NetworksApi->delete_network_firmware_upgrades_staged_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **group_id** | **str**|  | 

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

# **delete_network_floor_plan**
> delete_network_floor_plan(network_id, floor_plan_id)

Destroy a floor plan

Destroy a floor plan

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    floor_plan_id = 'floor_plan_id_example' # str | 

    try:
        # Destroy a floor plan
        api_instance.delete_network_floor_plan(network_id, floor_plan_id)
    except Exception as e:
        print("Exception when calling NetworksApi->delete_network_floor_plan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **floor_plan_id** | **str**|  | 

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

# **delete_network_group_policy**
> delete_network_group_policy(network_id, group_policy_id)

Delete a group policy

Delete a group policy

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    group_policy_id = 'group_policy_id_example' # str | 

    try:
        # Delete a group policy
        api_instance.delete_network_group_policy(network_id, group_policy_id)
    except Exception as e:
        print("Exception when calling NetworksApi->delete_network_group_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **group_policy_id** | **str**|  | 

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

# **delete_network_meraki_auth_user**
> delete_network_meraki_auth_user(network_id, meraki_auth_user_id)

Deauthorize a user

Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    meraki_auth_user_id = 'meraki_auth_user_id_example' # str | 

    try:
        # Deauthorize a user
        api_instance.delete_network_meraki_auth_user(network_id, meraki_auth_user_id)
    except Exception as e:
        print("Exception when calling NetworksApi->delete_network_meraki_auth_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **meraki_auth_user_id** | **str**|  | 

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

# **delete_network_mqtt_broker**
> delete_network_mqtt_broker(network_id, mqtt_broker_id)

Delete an MQTT broker

Delete an MQTT broker

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    mqtt_broker_id = 'mqtt_broker_id_example' # str | 

    try:
        # Delete an MQTT broker
        api_instance.delete_network_mqtt_broker(network_id, mqtt_broker_id)
    except Exception as e:
        print("Exception when calling NetworksApi->delete_network_mqtt_broker: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **mqtt_broker_id** | **str**|  | 

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

# **delete_network_pii_request**
> delete_network_pii_request(network_id, request_id)

Delete a restrict processing PII request

Delete a restrict processing PII request  ## ALTERNATE PATH  ``` /organizations/{organizationId}/pii/requests/{requestId} ```

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    request_id = 'request_id_example' # str | 

    try:
        # Delete a restrict processing PII request
        api_instance.delete_network_pii_request(network_id, request_id)
    except Exception as e:
        print("Exception when calling NetworksApi->delete_network_pii_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **request_id** | **str**|  | 

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

# **delete_network_webhooks_http_server**
> delete_network_webhooks_http_server(network_id, http_server_id)

Delete an HTTP server from a network

Delete an HTTP server from a network

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    http_server_id = 'http_server_id_example' # str | 

    try:
        # Delete an HTTP server from a network
        api_instance.delete_network_webhooks_http_server(network_id, http_server_id)
    except Exception as e:
        print("Exception when calling NetworksApi->delete_network_webhooks_http_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **http_server_id** | **str**|  | 

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

# **delete_network_webhooks_payload_template**
> delete_network_webhooks_payload_template(network_id, payload_template_id)

Destroy a webhook payload template for a network

Destroy a webhook payload template for a network. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    payload_template_id = 'payload_template_id_example' # str | 

    try:
        # Destroy a webhook payload template for a network
        api_instance.delete_network_webhooks_payload_template(network_id, payload_template_id)
    except Exception as e:
        print("Exception when calling NetworksApi->delete_network_webhooks_payload_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **payload_template_id** | **str**|  | 

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

# **get_network**
> GetNetwork200Response get_network(network_id)

Return a network

Return a network

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return a network
        api_response = api_instance.get_network(network_id)
        print("The response of NetworksApi->get_network:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetwork200Response**](GetNetwork200Response.md)

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

# **get_network_alerts_history**
> List[GetNetworkAlertsHistory200ResponseInner] get_network_alerts_history(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return the alert history for this network

Return the alert history for this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_alerts_history200_response_inner import GetNetworkAlertsHistory200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return the alert history for this network
        api_response = api_instance.get_network_alerts_history(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of NetworksApi->get_network_alerts_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_alerts_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**List[GetNetworkAlertsHistory200ResponseInner]**](GetNetworkAlertsHistory200ResponseInner.md)

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

# **get_network_alerts_settings**
> object get_network_alerts_settings(network_id)

Return the alert configuration for this network

Return the alert configuration for this network

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the alert configuration for this network
        api_response = api_instance.get_network_alerts_settings(network_id)
        print("The response of NetworksApi->get_network_alerts_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_alerts_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_bluetooth_client**
> object get_network_bluetooth_client(network_id, bluetooth_client_id, include_connectivity_history=include_connectivity_history, connectivity_history_timespan=connectivity_history_timespan)

Return a Bluetooth client

Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    bluetooth_client_id = 'bluetooth_client_id_example' # str | 
    include_connectivity_history = True # bool | Include the connectivity history for this client (optional)
    connectivity_history_timespan = 56 # int | The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used. (optional)

    try:
        # Return a Bluetooth client
        api_response = api_instance.get_network_bluetooth_client(network_id, bluetooth_client_id, include_connectivity_history=include_connectivity_history, connectivity_history_timespan=connectivity_history_timespan)
        print("The response of NetworksApi->get_network_bluetooth_client:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_bluetooth_client: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **bluetooth_client_id** | **str**|  | 
 **include_connectivity_history** | **bool**| Include the connectivity history for this client | [optional] 
 **connectivity_history_timespan** | **int**| The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used. | [optional] 

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

# **get_network_bluetooth_clients**
> List[object] get_network_bluetooth_clients(network_id, t0=t0, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, include_connectivity_history=include_connectivity_history)

List the Bluetooth clients seen by APs in this network

List the Bluetooth clients seen by APs in this network

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 7 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    include_connectivity_history = True # bool | Include the connectivity history for this client (optional)

    try:
        # List the Bluetooth clients seen by APs in this network
        api_response = api_instance.get_network_bluetooth_clients(network_id, t0=t0, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, include_connectivity_history=include_connectivity_history)
        print("The response of NetworksApi->get_network_bluetooth_clients:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_bluetooth_clients: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 7 days from today. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **include_connectivity_history** | **bool**| Include the connectivity history for this client | [optional] 

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

# **get_network_client**
> GetNetworkClient200Response get_network_client(network_id, client_id)

Return the client associated with the given identifier

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_client200_response import GetNetworkClient200Response
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 

    try:
        # Return the client associated with the given identifier
        api_response = api_instance.get_network_client(network_id, client_id)
        print("The response of NetworksApi->get_network_client:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_client: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 

### Return type

[**GetNetworkClient200Response**](GetNetworkClient200Response.md)

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

# **get_network_client_policy**
> object get_network_client_policy(network_id, client_id)

Return the policy assigned to a client on the network

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 

    try:
        # Return the policy assigned to a client on the network
        api_response = api_instance.get_network_client_policy(network_id, client_id)
        print("The response of NetworksApi->get_network_client_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_client_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 

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

# **get_network_client_splash_authorization_status**
> object get_network_client_splash_authorization_status(network_id, client_id)

Return the splash authorization for a client, for each SSID they've associated with through splash

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 

    try:
        # Return the splash authorization for a client, for each SSID they've associated with through splash
        api_response = api_instance.get_network_client_splash_authorization_status(network_id, client_id)
        print("The response of NetworksApi->get_network_client_splash_authorization_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_client_splash_authorization_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 

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

# **get_network_client_traffic_history**
> List[object] get_network_client_traffic_history(network_id, client_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Return the client's network traffic data over time

Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Return the client's network traffic data over time
        api_response = api_instance.get_network_client_traffic_history(network_id, client_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of NetworksApi->get_network_client_traffic_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_client_traffic_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. | [optional] 
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

# **get_network_client_usage_history**
> List[object] get_network_client_usage_history(network_id, client_id)

Return the client's daily usage history

Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 

    try:
        # Return the client's daily usage history
        api_response = api_instance.get_network_client_usage_history(network_id, client_id)
        print("The response of NetworksApi->get_network_client_usage_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_client_usage_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 

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

# **get_network_clients**
> GetNetworkClients200Response get_network_clients(network_id, t0=t0, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, statuses=statuses, ip=ip, ip6=ip6, ip6_local=ip6_local, mac=mac, os=os, description=description, vlan=vlan, recent_device_connections=recent_device_connections)

List the clients that have used this network in the timespan

List the clients that have used this network in the timespan

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_clients200_response import GetNetworkClients200Response
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    statuses = ['statuses_example'] # List[str] | Filters clients based on status. Can be one of 'Online' or 'Offline'. (optional)
    ip = 'ip_example' # str | Filters clients based on a partial or full match for the ip address field. (optional)
    ip6 = 'ip6_example' # str | Filters clients based on a partial or full match for the ip6 address field. (optional)
    ip6_local = 'ip6_local_example' # str | Filters clients based on a partial or full match for the ip6Local address field. (optional)
    mac = 'mac_example' # str | Filters clients based on a partial or full match for the mac address field. (optional)
    os = 'os_example' # str | Filters clients based on a partial or full match for the os (operating system) field. (optional)
    description = 'description_example' # str | Filters clients based on a partial or full match for the description field. (optional)
    vlan = 'vlan_example' # str | Filters clients based on the full match for the VLAN field. (optional)
    recent_device_connections = ['recent_device_connections_example'] # List[str] | Filters clients based on recent connection type. Can be one of 'Wired' or 'Wireless'. (optional)

    try:
        # List the clients that have used this network in the timespan
        api_response = api_instance.get_network_clients(network_id, t0=t0, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, statuses=statuses, ip=ip, ip6=ip6, ip6_local=ip6_local, mac=mac, os=os, description=description, vlan=vlan, recent_device_connections=recent_device_connections)
        print("The response of NetworksApi->get_network_clients:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_clients: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **statuses** | [**List[str]**](str.md)| Filters clients based on status. Can be one of &#39;Online&#39; or &#39;Offline&#39;. | [optional] 
 **ip** | **str**| Filters clients based on a partial or full match for the ip address field. | [optional] 
 **ip6** | **str**| Filters clients based on a partial or full match for the ip6 address field. | [optional] 
 **ip6_local** | **str**| Filters clients based on a partial or full match for the ip6Local address field. | [optional] 
 **mac** | **str**| Filters clients based on a partial or full match for the mac address field. | [optional] 
 **os** | **str**| Filters clients based on a partial or full match for the os (operating system) field. | [optional] 
 **description** | **str**| Filters clients based on a partial or full match for the description field. | [optional] 
 **vlan** | **str**| Filters clients based on the full match for the VLAN field. | [optional] 
 **recent_device_connections** | [**List[str]**](str.md)| Filters clients based on recent connection type. Can be one of &#39;Wired&#39; or &#39;Wireless&#39;. | [optional] 

### Return type

[**GetNetworkClients200Response**](GetNetworkClients200Response.md)

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

# **get_network_clients_application_usage**
> List[object] get_network_clients_application_usage(network_id, clients, ssid_number=ssid_number, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan)

Return the application usage data for clients

Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    clients = 'clients_example' # str | A list of client keys, MACs or IPs separated by comma.
    ssid_number = 56 # int | An SSID number to include. If not specified, eveusage histories application usagents for all SSIDs will be returned. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return the application usage data for clients
        api_response = api_instance.get_network_clients_application_usage(network_id, clients, ssid_number=ssid_number, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan)
        print("The response of NetworksApi->get_network_clients_application_usage:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_clients_application_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **clients** | **str**| A list of client keys, MACs or IPs separated by comma. | 
 **ssid_number** | **int**| An SSID number to include. If not specified, eveusage histories application usagents for all SSIDs will be returned. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

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

# **get_network_clients_bandwidth_usage_history**
> List[object] get_network_clients_bandwidth_usage_history(network_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.

Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 30 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
        api_response = api_instance.get_network_clients_bandwidth_usage_history(network_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of NetworksApi->get_network_clients_bandwidth_usage_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_clients_bandwidth_usage_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 30 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
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

# **get_network_clients_overview**
> object get_network_clients_overview(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)

Return overview statistics for network clients

Return overview statistics for network clients

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 7200, 86400, 604800, 2592000. The default is 604800. (optional)

    try:
        # Return overview statistics for network clients
        api_response = api_instance.get_network_clients_overview(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution)
        print("The response of NetworksApi->get_network_clients_overview:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_clients_overview: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 7200, 86400, 604800, 2592000. The default is 604800. | [optional] 

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

# **get_network_clients_usage_histories**
> List[object] get_network_clients_usage_histories(network_id, clients, ssid_number=ssid_number, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan)

Return the usage histories for clients

Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    clients = 'clients_example' # str | A list of client keys, MACs or IPs separated by comma.
    ssid_number = 56 # int | An SSID number to include. If not specified, events for all SSIDs will be returned. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return the usage histories for clients
        api_response = api_instance.get_network_clients_usage_histories(network_id, clients, ssid_number=ssid_number, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan)
        print("The response of NetworksApi->get_network_clients_usage_histories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_clients_usage_histories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **clients** | **str**| A list of client keys, MACs or IPs separated by comma. | 
 **ssid_number** | **int**| An SSID number to include. If not specified, events for all SSIDs will be returned. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

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

# **get_network_devices**
> List[object] get_network_devices(network_id)

List the devices in a network

List the devices in a network

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the devices in a network
        api_response = api_instance.get_network_devices(network_id)
        print("The response of NetworksApi->get_network_devices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_events**
> GetNetworkEvents200Response get_network_events(network_id, product_type=product_type, included_event_types=included_event_types, excluded_event_types=excluded_event_types, device_mac=device_mac, device_serial=device_serial, device_name=device_name, client_ip=client_ip, client_mac=client_mac, client_name=client_name, sm_device_mac=sm_device_mac, sm_device_name=sm_device_name, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

List the events for the network

List the events for the network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_events200_response import GetNetworkEvents200Response
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    product_type = 'product_type_example' # str | The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, and cellularGateway (optional)
    included_event_types = ['included_event_types_example'] # List[str] | A list of event types. The returned events will be filtered to only include events with these types. (optional)
    excluded_event_types = ['excluded_event_types_example'] # List[str] | A list of event types. The returned events will be filtered to exclude events with these types. (optional)
    device_mac = 'device_mac_example' # str | The MAC address of the Meraki device which the list of events will be filtered with (optional)
    device_serial = 'device_serial_example' # str | The serial of the Meraki device which the list of events will be filtered with (optional)
    device_name = 'device_name_example' # str | The name of the Meraki device which the list of events will be filtered with (optional)
    client_ip = 'client_ip_example' # str | The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks. (optional)
    client_mac = 'client_mac_example' # str | The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks. (optional)
    client_name = 'client_name_example' # str | The name, or partial name, of the client which the list of events will be filtered with (optional)
    sm_device_mac = 'sm_device_mac_example' # str | The MAC address of the Systems Manager device which the list of events will be filtered with (optional)
    sm_device_name = 'sm_device_name_example' # str | The name of the Systems Manager device which the list of events will be filtered with (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # List the events for the network
        api_response = api_instance.get_network_events(network_id, product_type=product_type, included_event_types=included_event_types, excluded_event_types=excluded_event_types, device_mac=device_mac, device_serial=device_serial, device_name=device_name, client_ip=client_ip, client_mac=client_mac, client_name=client_name, sm_device_mac=sm_device_mac, sm_device_name=sm_device_name, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of NetworksApi->get_network_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **product_type** | **str**| The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, and cellularGateway | [optional] 
 **included_event_types** | [**List[str]**](str.md)| A list of event types. The returned events will be filtered to only include events with these types. | [optional] 
 **excluded_event_types** | [**List[str]**](str.md)| A list of event types. The returned events will be filtered to exclude events with these types. | [optional] 
 **device_mac** | **str**| The MAC address of the Meraki device which the list of events will be filtered with | [optional] 
 **device_serial** | **str**| The serial of the Meraki device which the list of events will be filtered with | [optional] 
 **device_name** | **str**| The name of the Meraki device which the list of events will be filtered with | [optional] 
 **client_ip** | **str**| The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks. | [optional] 
 **client_mac** | **str**| The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks. | [optional] 
 **client_name** | **str**| The name, or partial name, of the client which the list of events will be filtered with | [optional] 
 **sm_device_mac** | **str**| The MAC address of the Systems Manager device which the list of events will be filtered with | [optional] 
 **sm_device_name** | **str**| The name of the Systems Manager device which the list of events will be filtered with | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

[**GetNetworkEvents200Response**](GetNetworkEvents200Response.md)

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

# **get_network_events_event_types**
> List[GetNetworkEventsEventTypes200ResponseInner] get_network_events_event_types(network_id)

List the event type to human-readable description

List the event type to human-readable description

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_events_event_types200_response_inner import GetNetworkEventsEventTypes200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the event type to human-readable description
        api_response = api_instance.get_network_events_event_types(network_id)
        print("The response of NetworksApi->get_network_events_event_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_events_event_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkEventsEventTypes200ResponseInner]**](GetNetworkEventsEventTypes200ResponseInner.md)

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

# **get_network_firmware_upgrades**
> GetNetworkFirmwareUpgrades200Response get_network_firmware_upgrades(network_id)

Get firmware upgrade information for a network

Get firmware upgrade information for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades200_response import GetNetworkFirmwareUpgrades200Response
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Get firmware upgrade information for a network
        api_response = api_instance.get_network_firmware_upgrades(network_id)
        print("The response of NetworksApi->get_network_firmware_upgrades:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_firmware_upgrades: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkFirmwareUpgrades200Response**](GetNetworkFirmwareUpgrades200Response.md)

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

# **get_network_firmware_upgrades_staged_events**
> GetNetworkFirmwareUpgradesStagedEvents200Response get_network_firmware_upgrades_staged_events(network_id)

Get the Staged Upgrade Event from a network

Get the Staged Upgrade Event from a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_events200_response import GetNetworkFirmwareUpgradesStagedEvents200Response
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Get the Staged Upgrade Event from a network
        api_response = api_instance.get_network_firmware_upgrades_staged_events(network_id)
        print("The response of NetworksApi->get_network_firmware_upgrades_staged_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_firmware_upgrades_staged_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkFirmwareUpgradesStagedEvents200Response**](GetNetworkFirmwareUpgradesStagedEvents200Response.md)

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

# **get_network_firmware_upgrades_staged_group**
> GetNetworkFirmwareUpgradesStagedGroups200ResponseInner get_network_firmware_upgrades_staged_group(network_id, group_id)

Get a Staged Upgrade Group from a network

Get a Staged Upgrade Group from a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_groups200_response_inner import GetNetworkFirmwareUpgradesStagedGroups200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    group_id = 'group_id_example' # str | 

    try:
        # Get a Staged Upgrade Group from a network
        api_response = api_instance.get_network_firmware_upgrades_staged_group(network_id, group_id)
        print("The response of NetworksApi->get_network_firmware_upgrades_staged_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_firmware_upgrades_staged_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **group_id** | **str**|  | 

### Return type

[**GetNetworkFirmwareUpgradesStagedGroups200ResponseInner**](GetNetworkFirmwareUpgradesStagedGroups200ResponseInner.md)

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

# **get_network_firmware_upgrades_staged_groups**
> List[GetNetworkFirmwareUpgradesStagedGroups200ResponseInner] get_network_firmware_upgrades_staged_groups(network_id)

List of Staged Upgrade Groups in a network

List of Staged Upgrade Groups in a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_groups200_response_inner import GetNetworkFirmwareUpgradesStagedGroups200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List of Staged Upgrade Groups in a network
        api_response = api_instance.get_network_firmware_upgrades_staged_groups(network_id)
        print("The response of NetworksApi->get_network_firmware_upgrades_staged_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_firmware_upgrades_staged_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkFirmwareUpgradesStagedGroups200ResponseInner]**](GetNetworkFirmwareUpgradesStagedGroups200ResponseInner.md)

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

# **get_network_firmware_upgrades_staged_stages**
> List[GetNetworkFirmwareUpgradesStagedStages200ResponseInner] get_network_firmware_upgrades_staged_stages(network_id)

Order of Staged Upgrade Groups in a network

Order of Staged Upgrade Groups in a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_stages200_response_inner import GetNetworkFirmwareUpgradesStagedStages200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Order of Staged Upgrade Groups in a network
        api_response = api_instance.get_network_firmware_upgrades_staged_stages(network_id)
        print("The response of NetworksApi->get_network_firmware_upgrades_staged_stages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_firmware_upgrades_staged_stages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkFirmwareUpgradesStagedStages200ResponseInner]**](GetNetworkFirmwareUpgradesStagedStages200ResponseInner.md)

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

# **get_network_floor_plan**
> object get_network_floor_plan(network_id, floor_plan_id)

Find a floor plan by ID

Find a floor plan by ID

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    floor_plan_id = 'floor_plan_id_example' # str | 

    try:
        # Find a floor plan by ID
        api_response = api_instance.get_network_floor_plan(network_id, floor_plan_id)
        print("The response of NetworksApi->get_network_floor_plan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_floor_plan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **floor_plan_id** | **str**|  | 

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

# **get_network_floor_plans**
> List[object] get_network_floor_plans(network_id)

List the floor plans that belong to your network

List the floor plans that belong to your network

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the floor plans that belong to your network
        api_response = api_instance.get_network_floor_plans(network_id)
        print("The response of NetworksApi->get_network_floor_plans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_floor_plans: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_group_policies**
> List[object] get_network_group_policies(network_id)

List the group policies in a network

List the group policies in a network

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the group policies in a network
        api_response = api_instance.get_network_group_policies(network_id)
        print("The response of NetworksApi->get_network_group_policies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_group_policies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_group_policy**
> object get_network_group_policy(network_id, group_policy_id)

Display a group policy

Display a group policy

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    group_policy_id = 'group_policy_id_example' # str | 

    try:
        # Display a group policy
        api_response = api_instance.get_network_group_policy(network_id, group_policy_id)
        print("The response of NetworksApi->get_network_group_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_group_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **group_policy_id** | **str**|  | 

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

# **get_network_health_alerts**
> List[GetNetworkHealthAlerts200ResponseInner] get_network_health_alerts(network_id)

Return all global alerts on this network

Return all global alerts on this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_health_alerts200_response_inner import GetNetworkHealthAlerts200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return all global alerts on this network
        api_response = api_instance.get_network_health_alerts(network_id)
        print("The response of NetworksApi->get_network_health_alerts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_health_alerts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkHealthAlerts200ResponseInner]**](GetNetworkHealthAlerts200ResponseInner.md)

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

# **get_network_meraki_auth_user**
> GetNetworkMerakiAuthUsers200ResponseInner get_network_meraki_auth_user(network_id, meraki_auth_user_id)

Return the Meraki Auth splash guest, RADIUS, or client VPN user

Return the Meraki Auth splash guest, RADIUS, or client VPN user

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_meraki_auth_users200_response_inner import GetNetworkMerakiAuthUsers200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    meraki_auth_user_id = 'meraki_auth_user_id_example' # str | 

    try:
        # Return the Meraki Auth splash guest, RADIUS, or client VPN user
        api_response = api_instance.get_network_meraki_auth_user(network_id, meraki_auth_user_id)
        print("The response of NetworksApi->get_network_meraki_auth_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_meraki_auth_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **meraki_auth_user_id** | **str**|  | 

### Return type

[**GetNetworkMerakiAuthUsers200ResponseInner**](GetNetworkMerakiAuthUsers200ResponseInner.md)

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

# **get_network_meraki_auth_users**
> List[GetNetworkMerakiAuthUsers200ResponseInner] get_network_meraki_auth_users(network_id)

List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)

List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_meraki_auth_users200_response_inner import GetNetworkMerakiAuthUsers200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)
        api_response = api_instance.get_network_meraki_auth_users(network_id)
        print("The response of NetworksApi->get_network_meraki_auth_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_meraki_auth_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkMerakiAuthUsers200ResponseInner]**](GetNetworkMerakiAuthUsers200ResponseInner.md)

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

# **get_network_mqtt_broker**
> object get_network_mqtt_broker(network_id, mqtt_broker_id)

Return an MQTT broker

Return an MQTT broker

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    mqtt_broker_id = 'mqtt_broker_id_example' # str | 

    try:
        # Return an MQTT broker
        api_response = api_instance.get_network_mqtt_broker(network_id, mqtt_broker_id)
        print("The response of NetworksApi->get_network_mqtt_broker:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_mqtt_broker: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **mqtt_broker_id** | **str**|  | 

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

# **get_network_mqtt_brokers**
> List[object] get_network_mqtt_brokers(network_id)

List the MQTT brokers for this network

List the MQTT brokers for this network

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the MQTT brokers for this network
        api_response = api_instance.get_network_mqtt_brokers(network_id)
        print("The response of NetworksApi->get_network_mqtt_brokers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_mqtt_brokers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_netflow**
> object get_network_netflow(network_id)

Return the NetFlow traffic reporting settings for a network

Return the NetFlow traffic reporting settings for a network

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the NetFlow traffic reporting settings for a network
        api_response = api_instance.get_network_netflow(network_id)
        print("The response of NetworksApi->get_network_netflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_netflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_network_health_channel_utilization**
> List[object] get_network_network_health_channel_utilization(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Get the channel utilization over each radio for all APs in a network.

Get the channel utilization over each radio for all APs in a network.

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 600. The default is 600. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 100. Default is 10. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Get the channel utilization over each radio for all APs in a network.
        api_response = api_instance.get_network_network_health_channel_utilization(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of NetworksApi->get_network_network_health_channel_utilization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_network_health_channel_utilization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 600. The default is 600. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 100. Default is 10. | [optional] 
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

# **get_network_pii_pii_keys**
> object get_network_pii_pii_keys(network_id, username=username, email=email, mac=mac, serial=serial, imei=imei, bluetooth_mac=bluetooth_mac)

List the keys required to access Personally Identifiable Information (PII) for a given identifier

List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key \"0\" containing the applicable keys.  ## ALTERNATE PATH  ``` /organizations/{organizationId}/pii/piiKeys ```

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    username = 'username_example' # str | The username of a Systems Manager user (optional)
    email = 'email_example' # str | The email of a network user account or a Systems Manager device (optional)
    mac = 'mac_example' # str | The MAC of a network client device or a Systems Manager device (optional)
    serial = 'serial_example' # str | The serial of a Systems Manager device (optional)
    imei = 'imei_example' # str | The IMEI of a Systems Manager device (optional)
    bluetooth_mac = 'bluetooth_mac_example' # str | The MAC of a Bluetooth client (optional)

    try:
        # List the keys required to access Personally Identifiable Information (PII) for a given identifier
        api_response = api_instance.get_network_pii_pii_keys(network_id, username=username, email=email, mac=mac, serial=serial, imei=imei, bluetooth_mac=bluetooth_mac)
        print("The response of NetworksApi->get_network_pii_pii_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_pii_pii_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **username** | **str**| The username of a Systems Manager user | [optional] 
 **email** | **str**| The email of a network user account or a Systems Manager device | [optional] 
 **mac** | **str**| The MAC of a network client device or a Systems Manager device | [optional] 
 **serial** | **str**| The serial of a Systems Manager device | [optional] 
 **imei** | **str**| The IMEI of a Systems Manager device | [optional] 
 **bluetooth_mac** | **str**| The MAC of a Bluetooth client | [optional] 

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

# **get_network_pii_request**
> object get_network_pii_request(network_id, request_id)

Return a PII request

Return a PII request  ## ALTERNATE PATH  ``` /organizations/{organizationId}/pii/requests/{requestId} ```

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    request_id = 'request_id_example' # str | 

    try:
        # Return a PII request
        api_response = api_instance.get_network_pii_request(network_id, request_id)
        print("The response of NetworksApi->get_network_pii_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_pii_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **request_id** | **str**|  | 

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

# **get_network_pii_requests**
> List[object] get_network_pii_requests(network_id)

List the PII requests for this network or organization

List the PII requests for this network or organization  ## ALTERNATE PATH  ``` /organizations/{organizationId}/pii/requests ```

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the PII requests for this network or organization
        api_response = api_instance.get_network_pii_requests(network_id)
        print("The response of NetworksApi->get_network_pii_requests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_pii_requests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_pii_sm_devices_for_key**
> object get_network_pii_sm_devices_for_key(network_id, username=username, email=email, mac=mac, serial=serial, imei=imei, bluetooth_mac=bluetooth_mac)

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier

Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.  ## ALTERNATE PATH  ``` /organizations/{organizationId}/pii/smDevicesForKey ```

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    username = 'username_example' # str | The username of a Systems Manager user (optional)
    email = 'email_example' # str | The email of a network user account or a Systems Manager device (optional)
    mac = 'mac_example' # str | The MAC of a network client device or a Systems Manager device (optional)
    serial = 'serial_example' # str | The serial of a Systems Manager device (optional)
    imei = 'imei_example' # str | The IMEI of a Systems Manager device (optional)
    bluetooth_mac = 'bluetooth_mac_example' # str | The MAC of a Bluetooth client (optional)

    try:
        # Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier
        api_response = api_instance.get_network_pii_sm_devices_for_key(network_id, username=username, email=email, mac=mac, serial=serial, imei=imei, bluetooth_mac=bluetooth_mac)
        print("The response of NetworksApi->get_network_pii_sm_devices_for_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_pii_sm_devices_for_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **username** | **str**| The username of a Systems Manager user | [optional] 
 **email** | **str**| The email of a network user account or a Systems Manager device | [optional] 
 **mac** | **str**| The MAC of a network client device or a Systems Manager device | [optional] 
 **serial** | **str**| The serial of a Systems Manager device | [optional] 
 **imei** | **str**| The IMEI of a Systems Manager device | [optional] 
 **bluetooth_mac** | **str**| The MAC of a Bluetooth client | [optional] 

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

# **get_network_pii_sm_owners_for_key**
> object get_network_pii_sm_owners_for_key(network_id, username=username, email=email, mac=mac, serial=serial, imei=imei, bluetooth_mac=bluetooth_mac)

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.  ## ALTERNATE PATH  ``` /organizations/{organizationId}/pii/smOwnersForKey ```

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    username = 'username_example' # str | The username of a Systems Manager user (optional)
    email = 'email_example' # str | The email of a network user account or a Systems Manager device (optional)
    mac = 'mac_example' # str | The MAC of a network client device or a Systems Manager device (optional)
    serial = 'serial_example' # str | The serial of a Systems Manager device (optional)
    imei = 'imei_example' # str | The IMEI of a Systems Manager device (optional)
    bluetooth_mac = 'bluetooth_mac_example' # str | The MAC of a Bluetooth client (optional)

    try:
        # Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
        api_response = api_instance.get_network_pii_sm_owners_for_key(network_id, username=username, email=email, mac=mac, serial=serial, imei=imei, bluetooth_mac=bluetooth_mac)
        print("The response of NetworksApi->get_network_pii_sm_owners_for_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_pii_sm_owners_for_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **username** | **str**| The username of a Systems Manager user | [optional] 
 **email** | **str**| The email of a network user account or a Systems Manager device | [optional] 
 **mac** | **str**| The MAC of a network client device or a Systems Manager device | [optional] 
 **serial** | **str**| The serial of a Systems Manager device | [optional] 
 **imei** | **str**| The IMEI of a Systems Manager device | [optional] 
 **bluetooth_mac** | **str**| The MAC of a Bluetooth client | [optional] 

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

# **get_network_policies_by_client**
> List[GetNetworkPoliciesByClient200ResponseInner] get_network_policies_by_client(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, timespan=timespan)

Get policies for all clients with policies

Get policies for all clients with policies

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_policies_by_client200_response_inner import GetNetworkPoliciesByClient200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Get policies for all clients with policies
        api_response = api_instance.get_network_policies_by_client(network_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, timespan=timespan)
        print("The response of NetworksApi->get_network_policies_by_client:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_policies_by_client: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetNetworkPoliciesByClient200ResponseInner]**](GetNetworkPoliciesByClient200ResponseInner.md)

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

# **get_network_settings**
> GetNetworkSettings200Response get_network_settings(network_id)

Return the settings for a network

Return the settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_settings200_response import GetNetworkSettings200Response
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the settings for a network
        api_response = api_instance.get_network_settings(network_id)
        print("The response of NetworksApi->get_network_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkSettings200Response**](GetNetworkSettings200Response.md)

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

# **get_network_snmp**
> object get_network_snmp(network_id)

Return the SNMP settings for a network

Return the SNMP settings for a network

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the SNMP settings for a network
        api_response = api_instance.get_network_snmp(network_id)
        print("The response of NetworksApi->get_network_snmp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_snmp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_splash_login_attempts**
> List[object] get_network_splash_login_attempts(network_id, ssid_number=ssid_number, login_identifier=login_identifier, timespan=timespan)

List the splash login attempts for a network

List the splash login attempts for a network

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    ssid_number = 56 # int | Only return the login attempts for the specified SSID (optional)
    login_identifier = 'login_identifier_example' # str | The username, email, or phone number used during login (optional)
    timespan = 56 # int | The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months (optional)

    try:
        # List the splash login attempts for a network
        api_response = api_instance.get_network_splash_login_attempts(network_id, ssid_number=ssid_number, login_identifier=login_identifier, timespan=timespan)
        print("The response of NetworksApi->get_network_splash_login_attempts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_splash_login_attempts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **ssid_number** | **int**| Only return the login attempts for the specified SSID | [optional] 
 **login_identifier** | **str**| The username, email, or phone number used during login | [optional] 
 **timespan** | **int**| The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months | [optional] 

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

# **get_network_syslog_servers**
> GetNetworkSyslogServers200Response get_network_syslog_servers(network_id)

List the syslog servers for a network

List the syslog servers for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_syslog_servers200_response import GetNetworkSyslogServers200Response
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the syslog servers for a network
        api_response = api_instance.get_network_syslog_servers(network_id)
        print("The response of NetworksApi->get_network_syslog_servers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_syslog_servers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkSyslogServers200Response**](GetNetworkSyslogServers200Response.md)

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

# **get_network_topology_link_layer**
> object get_network_topology_link_layer(network_id)

List the LLDP and CDP information for all discovered devices and connections in a network.

List the LLDP and CDP information for all discovered devices and connections in a network.

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the LLDP and CDP information for all discovered devices and connections in a network.
        api_response = api_instance.get_network_topology_link_layer(network_id)
        print("The response of NetworksApi->get_network_topology_link_layer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_topology_link_layer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_traffic**
> List[object] get_network_traffic(network_id, t0=t0, timespan=timespan, device_type=device_type)

Return the traffic analysis data for this network

Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 30 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days. (optional)
    device_type = 'device_type_example' # str | Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'. When using 'combined', for each rule the data will come from the device type with the most usage. (optional)

    try:
        # Return the traffic analysis data for this network
        api_response = api_instance.get_network_traffic(network_id, t0=t0, timespan=timespan, device_type=device_type)
        print("The response of NetworksApi->get_network_traffic:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_traffic: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 30 days from today. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days. | [optional] 
 **device_type** | **str**| Filter the data by device type: &#39;combined&#39;, &#39;wireless&#39;, &#39;switch&#39; or &#39;appliance&#39;. Defaults to &#39;combined&#39;. When using &#39;combined&#39;, for each rule the data will come from the device type with the most usage. | [optional] 

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

# **get_network_traffic_analysis**
> object get_network_traffic_analysis(network_id)

Return the traffic analysis settings for a network

Return the traffic analysis settings for a network

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the traffic analysis settings for a network
        api_response = api_instance.get_network_traffic_analysis(network_id)
        print("The response of NetworksApi->get_network_traffic_analysis:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_traffic_analysis: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_traffic_shaping_application_categories**
> object get_network_traffic_shaping_application_categories(network_id)

Returns the application categories for traffic shaping rules.

Returns the application categories for traffic shaping rules.

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the application categories for traffic shaping rules.
        api_response = api_instance.get_network_traffic_shaping_application_categories(network_id)
        print("The response of NetworksApi->get_network_traffic_shaping_application_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_traffic_shaping_application_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_traffic_shaping_dscp_tagging_options**
> List[object] get_network_traffic_shaping_dscp_tagging_options(network_id)

Returns the available DSCP tagging options for your traffic shaping rules.

Returns the available DSCP tagging options for your traffic shaping rules.

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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the available DSCP tagging options for your traffic shaping rules.
        api_response = api_instance.get_network_traffic_shaping_dscp_tagging_options(network_id)
        print("The response of NetworksApi->get_network_traffic_shaping_dscp_tagging_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_traffic_shaping_dscp_tagging_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_webhooks_http_server**
> GetNetworkWebhooksHttpServers200ResponseInner get_network_webhooks_http_server(network_id, http_server_id)

Return an HTTP server for a network

Return an HTTP server for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_webhooks_http_servers200_response_inner import GetNetworkWebhooksHttpServers200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    http_server_id = 'http_server_id_example' # str | 

    try:
        # Return an HTTP server for a network
        api_response = api_instance.get_network_webhooks_http_server(network_id, http_server_id)
        print("The response of NetworksApi->get_network_webhooks_http_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_webhooks_http_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **http_server_id** | **str**|  | 

### Return type

[**GetNetworkWebhooksHttpServers200ResponseInner**](GetNetworkWebhooksHttpServers200ResponseInner.md)

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

# **get_network_webhooks_http_servers**
> List[GetNetworkWebhooksHttpServers200ResponseInner] get_network_webhooks_http_servers(network_id)

List the HTTP servers for a network

List the HTTP servers for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_webhooks_http_servers200_response_inner import GetNetworkWebhooksHttpServers200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the HTTP servers for a network
        api_response = api_instance.get_network_webhooks_http_servers(network_id)
        print("The response of NetworksApi->get_network_webhooks_http_servers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_webhooks_http_servers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkWebhooksHttpServers200ResponseInner]**](GetNetworkWebhooksHttpServers200ResponseInner.md)

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

# **get_network_webhooks_payload_template**
> GetNetworkWebhooksPayloadTemplates200ResponseInner get_network_webhooks_payload_template(network_id, payload_template_id)

Get the webhook payload template for a network

Get the webhook payload template for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_webhooks_payload_templates200_response_inner import GetNetworkWebhooksPayloadTemplates200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    payload_template_id = 'payload_template_id_example' # str | 

    try:
        # Get the webhook payload template for a network
        api_response = api_instance.get_network_webhooks_payload_template(network_id, payload_template_id)
        print("The response of NetworksApi->get_network_webhooks_payload_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_webhooks_payload_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **payload_template_id** | **str**|  | 

### Return type

[**GetNetworkWebhooksPayloadTemplates200ResponseInner**](GetNetworkWebhooksPayloadTemplates200ResponseInner.md)

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

# **get_network_webhooks_payload_templates**
> List[GetNetworkWebhooksPayloadTemplates200ResponseInner] get_network_webhooks_payload_templates(network_id)

List the webhook payload templates for a network

List the webhook payload templates for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_webhooks_payload_templates200_response_inner import GetNetworkWebhooksPayloadTemplates200ResponseInner
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the webhook payload templates for a network
        api_response = api_instance.get_network_webhooks_payload_templates(network_id)
        print("The response of NetworksApi->get_network_webhooks_payload_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_webhooks_payload_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkWebhooksPayloadTemplates200ResponseInner]**](GetNetworkWebhooksPayloadTemplates200ResponseInner.md)

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

# **get_network_webhooks_webhook_test**
> CreateNetworkWebhooksWebhookTest201Response get_network_webhooks_webhook_test(network_id, webhook_test_id)

Return the status of a webhook test for a network

Return the status of a webhook test for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_webhooks_webhook_test201_response import CreateNetworkWebhooksWebhookTest201Response
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    webhook_test_id = 'webhook_test_id_example' # str | 

    try:
        # Return the status of a webhook test for a network
        api_response = api_instance.get_network_webhooks_webhook_test(network_id, webhook_test_id)
        print("The response of NetworksApi->get_network_webhooks_webhook_test:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_network_webhooks_webhook_test: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **webhook_test_id** | **str**|  | 

### Return type

[**CreateNetworkWebhooksWebhookTest201Response**](CreateNetworkWebhooksWebhookTest201Response.md)

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

# **get_organization_inventory_onboarding_cloud_monitoring_networks_4**
> List[GetNetwork200Response] get_organization_inventory_onboarding_cloud_monitoring_networks_4(organization_id, device_type, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

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
    api_instance = openapi_client.NetworksApi(api_client)
    organization_id = 'organization_id_example' # str | 
    device_type = 'device_type_example' # str | Device Type switch or wireless controller
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Returns list of networks eligible for adding cloud monitored device
        api_response = api_instance.get_organization_inventory_onboarding_cloud_monitoring_networks_4(organization_id, device_type, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of NetworksApi->get_organization_inventory_onboarding_cloud_monitoring_networks_4:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_organization_inventory_onboarding_cloud_monitoring_networks_4: %s\n" % e)
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

# **get_organization_networks_1**
> List[GetNetwork200Response] get_organization_networks_1(organization_id, config_template_id=config_template_id, is_bound_to_config_template=is_bound_to_config_template, tags=tags, tags_filter_type=tags_filter_type, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

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
    api_instance = openapi_client.NetworksApi(api_client)
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
        api_response = api_instance.get_organization_networks_1(organization_id, config_template_id=config_template_id, is_bound_to_config_template=is_bound_to_config_template, tags=tags, tags_filter_type=tags_filter_type, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of NetworksApi->get_organization_networks_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->get_organization_networks_1: %s\n" % e)
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

# **provision_network_clients**
> object provision_network_clients(network_id, provision_network_clients_request)

Provisions a client with a name and policy

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.provision_network_clients_request import ProvisionNetworkClientsRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    provision_network_clients_request = openapi_client.ProvisionNetworkClientsRequest() # ProvisionNetworkClientsRequest | 

    try:
        # Provisions a client with a name and policy
        api_response = api_instance.provision_network_clients(network_id, provision_network_clients_request)
        print("The response of NetworksApi->provision_network_clients:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->provision_network_clients: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **provision_network_clients_request** | [**ProvisionNetworkClientsRequest**](ProvisionNetworkClientsRequest.md)|  | 

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

# **remove_network_devices**
> remove_network_devices(network_id, remove_network_devices_request)

Remove a single device

Remove a single device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.remove_network_devices_request import RemoveNetworkDevicesRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    remove_network_devices_request = openapi_client.RemoveNetworkDevicesRequest() # RemoveNetworkDevicesRequest | 

    try:
        # Remove a single device
        api_instance.remove_network_devices(network_id, remove_network_devices_request)
    except Exception as e:
        print("Exception when calling NetworksApi->remove_network_devices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **remove_network_devices_request** | [**RemoveNetworkDevicesRequest**](RemoveNetworkDevicesRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rollbacks_network_firmware_upgrades_staged_events**
> GetNetworkFirmwareUpgradesStagedEvents200Response rollbacks_network_firmware_upgrades_staged_events(network_id, rollbacks_network_firmware_upgrades_staged_events_request)

Rollback a Staged Upgrade Event for a network

Rollback a Staged Upgrade Event for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_events200_response import GetNetworkFirmwareUpgradesStagedEvents200Response
from openapi_client.models.rollbacks_network_firmware_upgrades_staged_events_request import RollbacksNetworkFirmwareUpgradesStagedEventsRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    rollbacks_network_firmware_upgrades_staged_events_request = openapi_client.RollbacksNetworkFirmwareUpgradesStagedEventsRequest() # RollbacksNetworkFirmwareUpgradesStagedEventsRequest | 

    try:
        # Rollback a Staged Upgrade Event for a network
        api_response = api_instance.rollbacks_network_firmware_upgrades_staged_events(network_id, rollbacks_network_firmware_upgrades_staged_events_request)
        print("The response of NetworksApi->rollbacks_network_firmware_upgrades_staged_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->rollbacks_network_firmware_upgrades_staged_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **rollbacks_network_firmware_upgrades_staged_events_request** | [**RollbacksNetworkFirmwareUpgradesStagedEventsRequest**](RollbacksNetworkFirmwareUpgradesStagedEventsRequest.md)|  | 

### Return type

[**GetNetworkFirmwareUpgradesStagedEvents200Response**](GetNetworkFirmwareUpgradesStagedEvents200Response.md)

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

# **split_network**
> SplitNetwork200Response split_network(network_id)

Split a combined network into individual networks for each type of device

Split a combined network into individual networks for each type of device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.split_network200_response import SplitNetwork200Response
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Split a combined network into individual networks for each type of device
        api_response = api_instance.split_network(network_id)
        print("The response of NetworksApi->split_network:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->split_network: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**SplitNetwork200Response**](SplitNetwork200Response.md)

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

# **unbind_network**
> GetNetwork200Response unbind_network(network_id, unbind_network_request=unbind_network_request)

Unbind a network from a template.

Unbind a network from a template.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network200_response import GetNetwork200Response
from openapi_client.models.unbind_network_request import UnbindNetworkRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    unbind_network_request = openapi_client.UnbindNetworkRequest() # UnbindNetworkRequest |  (optional)

    try:
        # Unbind a network from a template.
        api_response = api_instance.unbind_network(network_id, unbind_network_request=unbind_network_request)
        print("The response of NetworksApi->unbind_network:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->unbind_network: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **unbind_network_request** | [**UnbindNetworkRequest**](UnbindNetworkRequest.md)|  | [optional] 

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
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network**
> GetNetwork200Response update_network(network_id, update_network_request=update_network_request)

Update a network

Update a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network200_response import GetNetwork200Response
from openapi_client.models.update_network_request import UpdateNetworkRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_request = openapi_client.UpdateNetworkRequest() # UpdateNetworkRequest |  (optional)

    try:
        # Update a network
        api_response = api_instance.update_network(network_id, update_network_request=update_network_request)
        print("The response of NetworksApi->update_network:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_request** | [**UpdateNetworkRequest**](UpdateNetworkRequest.md)|  | [optional] 

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
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_alerts_settings**
> object update_network_alerts_settings(network_id, update_network_alerts_settings_request=update_network_alerts_settings_request)

Update the alert configuration for this network

Update the alert configuration for this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_alerts_settings_request import UpdateNetworkAlertsSettingsRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_alerts_settings_request = openapi_client.UpdateNetworkAlertsSettingsRequest() # UpdateNetworkAlertsSettingsRequest |  (optional)

    try:
        # Update the alert configuration for this network
        api_response = api_instance.update_network_alerts_settings(network_id, update_network_alerts_settings_request=update_network_alerts_settings_request)
        print("The response of NetworksApi->update_network_alerts_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_alerts_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_alerts_settings_request** | [**UpdateNetworkAlertsSettingsRequest**](UpdateNetworkAlertsSettingsRequest.md)|  | [optional] 

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

# **update_network_client_policy**
> object update_network_client_policy(network_id, client_id, update_network_client_policy_request)

Update the policy assigned to a client on the network

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_client_policy_request import UpdateNetworkClientPolicyRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 
    update_network_client_policy_request = openapi_client.UpdateNetworkClientPolicyRequest() # UpdateNetworkClientPolicyRequest | 

    try:
        # Update the policy assigned to a client on the network
        api_response = api_instance.update_network_client_policy(network_id, client_id, update_network_client_policy_request)
        print("The response of NetworksApi->update_network_client_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_client_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 
 **update_network_client_policy_request** | [**UpdateNetworkClientPolicyRequest**](UpdateNetworkClientPolicyRequest.md)|  | 

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

# **update_network_client_splash_authorization_status**
> object update_network_client_splash_authorization_status(network_id, client_id, update_network_client_splash_authorization_status_request)

Update a client's splash authorization

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_client_splash_authorization_status_request import UpdateNetworkClientSplashAuthorizationStatusRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 
    update_network_client_splash_authorization_status_request = openapi_client.UpdateNetworkClientSplashAuthorizationStatusRequest() # UpdateNetworkClientSplashAuthorizationStatusRequest | 

    try:
        # Update a client's splash authorization
        api_response = api_instance.update_network_client_splash_authorization_status(network_id, client_id, update_network_client_splash_authorization_status_request)
        print("The response of NetworksApi->update_network_client_splash_authorization_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_client_splash_authorization_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 
 **update_network_client_splash_authorization_status_request** | [**UpdateNetworkClientSplashAuthorizationStatusRequest**](UpdateNetworkClientSplashAuthorizationStatusRequest.md)|  | 

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

# **update_network_firmware_upgrades**
> GetNetworkFirmwareUpgrades200Response update_network_firmware_upgrades(network_id, update_network_firmware_upgrades_request=update_network_firmware_upgrades_request)

Update firmware upgrade information for a network

Update firmware upgrade information for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades200_response import GetNetworkFirmwareUpgrades200Response
from openapi_client.models.update_network_firmware_upgrades_request import UpdateNetworkFirmwareUpgradesRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_firmware_upgrades_request = openapi_client.UpdateNetworkFirmwareUpgradesRequest() # UpdateNetworkFirmwareUpgradesRequest |  (optional)

    try:
        # Update firmware upgrade information for a network
        api_response = api_instance.update_network_firmware_upgrades(network_id, update_network_firmware_upgrades_request=update_network_firmware_upgrades_request)
        print("The response of NetworksApi->update_network_firmware_upgrades:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_firmware_upgrades: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_firmware_upgrades_request** | [**UpdateNetworkFirmwareUpgradesRequest**](UpdateNetworkFirmwareUpgradesRequest.md)|  | [optional] 

### Return type

[**GetNetworkFirmwareUpgrades200Response**](GetNetworkFirmwareUpgrades200Response.md)

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

# **update_network_firmware_upgrades_staged_events**
> GetNetworkFirmwareUpgradesStagedEvents200Response update_network_firmware_upgrades_staged_events(network_id, update_network_firmware_upgrades_staged_events_request)

Update the Staged Upgrade Event for a network

Update the Staged Upgrade Event for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_events200_response import GetNetworkFirmwareUpgradesStagedEvents200Response
from openapi_client.models.update_network_firmware_upgrades_staged_events_request import UpdateNetworkFirmwareUpgradesStagedEventsRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_firmware_upgrades_staged_events_request = openapi_client.UpdateNetworkFirmwareUpgradesStagedEventsRequest() # UpdateNetworkFirmwareUpgradesStagedEventsRequest | 

    try:
        # Update the Staged Upgrade Event for a network
        api_response = api_instance.update_network_firmware_upgrades_staged_events(network_id, update_network_firmware_upgrades_staged_events_request)
        print("The response of NetworksApi->update_network_firmware_upgrades_staged_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_firmware_upgrades_staged_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_firmware_upgrades_staged_events_request** | [**UpdateNetworkFirmwareUpgradesStagedEventsRequest**](UpdateNetworkFirmwareUpgradesStagedEventsRequest.md)|  | 

### Return type

[**GetNetworkFirmwareUpgradesStagedEvents200Response**](GetNetworkFirmwareUpgradesStagedEvents200Response.md)

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

# **update_network_firmware_upgrades_staged_group**
> object update_network_firmware_upgrades_staged_group(network_id, group_id, create_network_firmware_upgrades_staged_group_request)

Update a Staged Upgrade Group for a network

Update a Staged Upgrade Group for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_firmware_upgrades_staged_group_request import CreateNetworkFirmwareUpgradesStagedGroupRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    group_id = 'group_id_example' # str | 
    create_network_firmware_upgrades_staged_group_request = openapi_client.CreateNetworkFirmwareUpgradesStagedGroupRequest() # CreateNetworkFirmwareUpgradesStagedGroupRequest | 

    try:
        # Update a Staged Upgrade Group for a network
        api_response = api_instance.update_network_firmware_upgrades_staged_group(network_id, group_id, create_network_firmware_upgrades_staged_group_request)
        print("The response of NetworksApi->update_network_firmware_upgrades_staged_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_firmware_upgrades_staged_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **group_id** | **str**|  | 
 **create_network_firmware_upgrades_staged_group_request** | [**CreateNetworkFirmwareUpgradesStagedGroupRequest**](CreateNetworkFirmwareUpgradesStagedGroupRequest.md)|  | 

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

# **update_network_firmware_upgrades_staged_stages**
> List[GetNetworkFirmwareUpgradesStagedStages200ResponseInner] update_network_firmware_upgrades_staged_stages(network_id, update_network_firmware_upgrades_staged_stages_request=update_network_firmware_upgrades_staged_stages_request)

Assign Staged Upgrade Group order in the sequence.

Assign Staged Upgrade Group order in the sequence.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_stages200_response_inner import GetNetworkFirmwareUpgradesStagedStages200ResponseInner
from openapi_client.models.update_network_firmware_upgrades_staged_stages_request import UpdateNetworkFirmwareUpgradesStagedStagesRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_firmware_upgrades_staged_stages_request = openapi_client.UpdateNetworkFirmwareUpgradesStagedStagesRequest() # UpdateNetworkFirmwareUpgradesStagedStagesRequest |  (optional)

    try:
        # Assign Staged Upgrade Group order in the sequence.
        api_response = api_instance.update_network_firmware_upgrades_staged_stages(network_id, update_network_firmware_upgrades_staged_stages_request=update_network_firmware_upgrades_staged_stages_request)
        print("The response of NetworksApi->update_network_firmware_upgrades_staged_stages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_firmware_upgrades_staged_stages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_firmware_upgrades_staged_stages_request** | [**UpdateNetworkFirmwareUpgradesStagedStagesRequest**](UpdateNetworkFirmwareUpgradesStagedStagesRequest.md)|  | [optional] 

### Return type

[**List[GetNetworkFirmwareUpgradesStagedStages200ResponseInner]**](GetNetworkFirmwareUpgradesStagedStages200ResponseInner.md)

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

# **update_network_floor_plan**
> object update_network_floor_plan(network_id, floor_plan_id, update_network_floor_plan_request=update_network_floor_plan_request)

Update a floor plan's geolocation and other meta data

Update a floor plan's geolocation and other meta data

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_floor_plan_request import UpdateNetworkFloorPlanRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    floor_plan_id = 'floor_plan_id_example' # str | 
    update_network_floor_plan_request = openapi_client.UpdateNetworkFloorPlanRequest() # UpdateNetworkFloorPlanRequest |  (optional)

    try:
        # Update a floor plan's geolocation and other meta data
        api_response = api_instance.update_network_floor_plan(network_id, floor_plan_id, update_network_floor_plan_request=update_network_floor_plan_request)
        print("The response of NetworksApi->update_network_floor_plan:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_floor_plan: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **floor_plan_id** | **str**|  | 
 **update_network_floor_plan_request** | [**UpdateNetworkFloorPlanRequest**](UpdateNetworkFloorPlanRequest.md)|  | [optional] 

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

# **update_network_group_policy**
> object update_network_group_policy(network_id, group_policy_id, update_network_group_policy_request=update_network_group_policy_request)

Update a group policy

Update a group policy

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_group_policy_request import UpdateNetworkGroupPolicyRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    group_policy_id = 'group_policy_id_example' # str | 
    update_network_group_policy_request = openapi_client.UpdateNetworkGroupPolicyRequest() # UpdateNetworkGroupPolicyRequest |  (optional)

    try:
        # Update a group policy
        api_response = api_instance.update_network_group_policy(network_id, group_policy_id, update_network_group_policy_request=update_network_group_policy_request)
        print("The response of NetworksApi->update_network_group_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_group_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **group_policy_id** | **str**|  | 
 **update_network_group_policy_request** | [**UpdateNetworkGroupPolicyRequest**](UpdateNetworkGroupPolicyRequest.md)|  | [optional] 

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

# **update_network_meraki_auth_user**
> GetNetworkMerakiAuthUsers200ResponseInner update_network_meraki_auth_user(network_id, meraki_auth_user_id, update_network_meraki_auth_user_request=update_network_meraki_auth_user_request)

Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_meraki_auth_users200_response_inner import GetNetworkMerakiAuthUsers200ResponseInner
from openapi_client.models.update_network_meraki_auth_user_request import UpdateNetworkMerakiAuthUserRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    meraki_auth_user_id = 'meraki_auth_user_id_example' # str | 
    update_network_meraki_auth_user_request = openapi_client.UpdateNetworkMerakiAuthUserRequest() # UpdateNetworkMerakiAuthUserRequest |  (optional)

    try:
        # Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)
        api_response = api_instance.update_network_meraki_auth_user(network_id, meraki_auth_user_id, update_network_meraki_auth_user_request=update_network_meraki_auth_user_request)
        print("The response of NetworksApi->update_network_meraki_auth_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_meraki_auth_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **meraki_auth_user_id** | **str**|  | 
 **update_network_meraki_auth_user_request** | [**UpdateNetworkMerakiAuthUserRequest**](UpdateNetworkMerakiAuthUserRequest.md)|  | [optional] 

### Return type

[**GetNetworkMerakiAuthUsers200ResponseInner**](GetNetworkMerakiAuthUsers200ResponseInner.md)

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

# **update_network_mqtt_broker**
> object update_network_mqtt_broker(network_id, mqtt_broker_id, update_network_mqtt_broker_request=update_network_mqtt_broker_request)

Update an MQTT broker

Update an MQTT broker

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_mqtt_broker_request import UpdateNetworkMqttBrokerRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    mqtt_broker_id = 'mqtt_broker_id_example' # str | 
    update_network_mqtt_broker_request = openapi_client.UpdateNetworkMqttBrokerRequest() # UpdateNetworkMqttBrokerRequest |  (optional)

    try:
        # Update an MQTT broker
        api_response = api_instance.update_network_mqtt_broker(network_id, mqtt_broker_id, update_network_mqtt_broker_request=update_network_mqtt_broker_request)
        print("The response of NetworksApi->update_network_mqtt_broker:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_mqtt_broker: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **mqtt_broker_id** | **str**|  | 
 **update_network_mqtt_broker_request** | [**UpdateNetworkMqttBrokerRequest**](UpdateNetworkMqttBrokerRequest.md)|  | [optional] 

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

# **update_network_netflow**
> object update_network_netflow(network_id, update_network_netflow_request=update_network_netflow_request)

Update the NetFlow traffic reporting settings for a network

Update the NetFlow traffic reporting settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_netflow_request import UpdateNetworkNetflowRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_netflow_request = openapi_client.UpdateNetworkNetflowRequest() # UpdateNetworkNetflowRequest |  (optional)

    try:
        # Update the NetFlow traffic reporting settings for a network
        api_response = api_instance.update_network_netflow(network_id, update_network_netflow_request=update_network_netflow_request)
        print("The response of NetworksApi->update_network_netflow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_netflow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_netflow_request** | [**UpdateNetworkNetflowRequest**](UpdateNetworkNetflowRequest.md)|  | [optional] 

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

# **update_network_settings**
> GetNetworkSettings200Response update_network_settings(network_id, update_network_settings_request=update_network_settings_request)

Update the settings for a network

Update the settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_settings200_response import GetNetworkSettings200Response
from openapi_client.models.update_network_settings_request import UpdateNetworkSettingsRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_settings_request = openapi_client.UpdateNetworkSettingsRequest() # UpdateNetworkSettingsRequest |  (optional)

    try:
        # Update the settings for a network
        api_response = api_instance.update_network_settings(network_id, update_network_settings_request=update_network_settings_request)
        print("The response of NetworksApi->update_network_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_settings_request** | [**UpdateNetworkSettingsRequest**](UpdateNetworkSettingsRequest.md)|  | [optional] 

### Return type

[**GetNetworkSettings200Response**](GetNetworkSettings200Response.md)

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

# **update_network_snmp**
> object update_network_snmp(network_id, update_network_snmp_request=update_network_snmp_request)

Update the SNMP settings for a network

Update the SNMP settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_snmp_request import UpdateNetworkSnmpRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_snmp_request = openapi_client.UpdateNetworkSnmpRequest() # UpdateNetworkSnmpRequest |  (optional)

    try:
        # Update the SNMP settings for a network
        api_response = api_instance.update_network_snmp(network_id, update_network_snmp_request=update_network_snmp_request)
        print("The response of NetworksApi->update_network_snmp:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_snmp: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_snmp_request** | [**UpdateNetworkSnmpRequest**](UpdateNetworkSnmpRequest.md)|  | [optional] 

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

# **update_network_syslog_servers**
> GetNetworkSyslogServers200Response update_network_syslog_servers(network_id, update_network_syslog_servers_request)

Update the syslog servers for a network

Update the syslog servers for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_syslog_servers200_response import GetNetworkSyslogServers200Response
from openapi_client.models.update_network_syslog_servers_request import UpdateNetworkSyslogServersRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_syslog_servers_request = openapi_client.UpdateNetworkSyslogServersRequest() # UpdateNetworkSyslogServersRequest | 

    try:
        # Update the syslog servers for a network
        api_response = api_instance.update_network_syslog_servers(network_id, update_network_syslog_servers_request)
        print("The response of NetworksApi->update_network_syslog_servers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_syslog_servers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_syslog_servers_request** | [**UpdateNetworkSyslogServersRequest**](UpdateNetworkSyslogServersRequest.md)|  | 

### Return type

[**GetNetworkSyslogServers200Response**](GetNetworkSyslogServers200Response.md)

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

# **update_network_traffic_analysis**
> object update_network_traffic_analysis(network_id, update_network_traffic_analysis_request=update_network_traffic_analysis_request)

Update the traffic analysis settings for a network

Update the traffic analysis settings for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_traffic_analysis_request import UpdateNetworkTrafficAnalysisRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_traffic_analysis_request = openapi_client.UpdateNetworkTrafficAnalysisRequest() # UpdateNetworkTrafficAnalysisRequest |  (optional)

    try:
        # Update the traffic analysis settings for a network
        api_response = api_instance.update_network_traffic_analysis(network_id, update_network_traffic_analysis_request=update_network_traffic_analysis_request)
        print("The response of NetworksApi->update_network_traffic_analysis:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_traffic_analysis: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_traffic_analysis_request** | [**UpdateNetworkTrafficAnalysisRequest**](UpdateNetworkTrafficAnalysisRequest.md)|  | [optional] 

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

# **update_network_webhooks_http_server**
> GetNetworkWebhooksHttpServers200ResponseInner update_network_webhooks_http_server(network_id, http_server_id, update_network_webhooks_http_server_request=update_network_webhooks_http_server_request)

Update an HTTP server

Update an HTTP server. To change a URL, create a new HTTP server.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_webhooks_http_servers200_response_inner import GetNetworkWebhooksHttpServers200ResponseInner
from openapi_client.models.update_network_webhooks_http_server_request import UpdateNetworkWebhooksHttpServerRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    http_server_id = 'http_server_id_example' # str | 
    update_network_webhooks_http_server_request = openapi_client.UpdateNetworkWebhooksHttpServerRequest() # UpdateNetworkWebhooksHttpServerRequest |  (optional)

    try:
        # Update an HTTP server
        api_response = api_instance.update_network_webhooks_http_server(network_id, http_server_id, update_network_webhooks_http_server_request=update_network_webhooks_http_server_request)
        print("The response of NetworksApi->update_network_webhooks_http_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_webhooks_http_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **http_server_id** | **str**|  | 
 **update_network_webhooks_http_server_request** | [**UpdateNetworkWebhooksHttpServerRequest**](UpdateNetworkWebhooksHttpServerRequest.md)|  | [optional] 

### Return type

[**GetNetworkWebhooksHttpServers200ResponseInner**](GetNetworkWebhooksHttpServers200ResponseInner.md)

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

# **update_network_webhooks_payload_template**
> GetNetworkWebhooksPayloadTemplates200ResponseInner update_network_webhooks_payload_template(network_id, payload_template_id, update_network_webhooks_payload_template_request=update_network_webhooks_payload_template_request)

Update a webhook payload template for a network

Update a webhook payload template for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_webhooks_payload_templates200_response_inner import GetNetworkWebhooksPayloadTemplates200ResponseInner
from openapi_client.models.update_network_webhooks_payload_template_request import UpdateNetworkWebhooksPayloadTemplateRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    payload_template_id = 'payload_template_id_example' # str | 
    update_network_webhooks_payload_template_request = openapi_client.UpdateNetworkWebhooksPayloadTemplateRequest() # UpdateNetworkWebhooksPayloadTemplateRequest |  (optional)

    try:
        # Update a webhook payload template for a network
        api_response = api_instance.update_network_webhooks_payload_template(network_id, payload_template_id, update_network_webhooks_payload_template_request=update_network_webhooks_payload_template_request)
        print("The response of NetworksApi->update_network_webhooks_payload_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->update_network_webhooks_payload_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **payload_template_id** | **str**|  | 
 **update_network_webhooks_payload_template_request** | [**UpdateNetworkWebhooksPayloadTemplateRequest**](UpdateNetworkWebhooksPayloadTemplateRequest.md)|  | [optional] 

### Return type

[**GetNetworkWebhooksPayloadTemplates200ResponseInner**](GetNetworkWebhooksPayloadTemplates200ResponseInner.md)

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

# **vmx_network_devices_claim**
> object vmx_network_devices_claim(network_id, vmx_network_devices_claim_request)

Claim a vMX into a network

Claim a vMX into a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.vmx_network_devices_claim_request import VmxNetworkDevicesClaimRequest
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
    api_instance = openapi_client.NetworksApi(api_client)
    network_id = 'network_id_example' # str | 
    vmx_network_devices_claim_request = openapi_client.VmxNetworkDevicesClaimRequest() # VmxNetworkDevicesClaimRequest | 

    try:
        # Claim a vMX into a network
        api_response = api_instance.vmx_network_devices_claim(network_id, vmx_network_devices_claim_request)
        print("The response of NetworksApi->vmx_network_devices_claim:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworksApi->vmx_network_devices_claim: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **vmx_network_devices_claim_request** | [**VmxNetworkDevicesClaimRequest**](VmxNetworkDevicesClaimRequest.md)|  | 

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

