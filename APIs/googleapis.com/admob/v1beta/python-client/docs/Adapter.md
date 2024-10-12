# Adapter

Describes adapters supported by each mediation ad source. Adapters correspond to a specific SDK implementation of the ad source, and are each associated with a single platform and a list of supported ad unit formats. Adapters may also require setting some configurations to perform ad requests. Configurations can be specified in the AdUnitMapping by setting the [ad_unit_configurations](#AdUnitMapping.ad_unit_configurations) key/value pairs. For example, the ad_unit_configurations can be used to pass various IDs to the adapter's third-party SDK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adapter_config_metadata** | [**List[AdapterAdapterConfigMetadata]**](AdapterAdapterConfigMetadata.md) | Output only. Configuration metadata associated with this adapter. | [optional] [readonly] 
**adapter_id** | **str** | Output only. ID of this adapter. It is used to set [adapter_id](#AdUnitMapping.adapter_id). | [optional] [readonly] 
**formats** | **List[str]** | Output only. Indicates the formats of the ad units supported by this adapter. | [optional] [readonly] 
**name** | **str** | Output only. Resource name of the adapter. Format is: accounts/{publisher_id}/adSources/{ad_source_id}/adapters/{adapter_id}. | [optional] [readonly] 
**platform** | **str** | Output only. Mobile application platform supported by this adapter. Supported values are: IOS, ANDROID, WINDOWS_PHONE | [optional] [readonly] 
**title** | **str** | Output only. The display name of this adapter. | [optional] [readonly] 

## Example

```python
from openapi_client.models.adapter import Adapter

# TODO update the JSON string below
json = "{}"
# create an instance of Adapter from a JSON string
adapter_instance = Adapter.from_json(json)
# print the JSON string representation of the object
print(Adapter.to_json())

# convert the object into a dict
adapter_dict = adapter_instance.to_dict()
# create an instance of Adapter from a dict
adapter_from_dict = Adapter.from_dict(adapter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


