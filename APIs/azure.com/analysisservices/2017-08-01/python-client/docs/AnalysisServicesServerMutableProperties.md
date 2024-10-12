# AnalysisServicesServerMutableProperties

An object that represents a set of mutable Analysis Services resource properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**as_administrators** | [**ServerAdministrators**](ServerAdministrators.md) |  | [optional] 
**backup_blob_container_uri** | **str** | The SAS container URI to the backup container. | [optional] 
**gateway_details** | [**GatewayDetails**](GatewayDetails.md) |  | [optional] 
**ip_v4_firewall_settings** | [**IPv4FirewallSettings**](IPv4FirewallSettings.md) |  | [optional] 
**querypool_connection_mode** | **str** | How the read-write server&#39;s participation in the query pool is controlled.&lt;br/&gt;It can have the following values: &lt;ul&gt;&lt;li&gt;readOnly - indicates that the read-write server is intended not to participate in query operations&lt;/li&gt;&lt;li&gt;all - indicates that the read-write server can participate in query operations&lt;/li&gt;&lt;/ul&gt;Specifying readOnly when capacity is 1 results in error. | [optional] [default to 'All']

## Example

```python
from openapi_client.models.analysis_services_server_mutable_properties import AnalysisServicesServerMutableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisServicesServerMutableProperties from a JSON string
analysis_services_server_mutable_properties_instance = AnalysisServicesServerMutableProperties.from_json(json)
# print the JSON string representation of the object
print(AnalysisServicesServerMutableProperties.to_json())

# convert the object into a dict
analysis_services_server_mutable_properties_dict = analysis_services_server_mutable_properties_instance.to_dict()
# create an instance of AnalysisServicesServerMutableProperties from a dict
analysis_services_server_mutable_properties_from_dict = AnalysisServicesServerMutableProperties.from_dict(analysis_services_server_mutable_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


