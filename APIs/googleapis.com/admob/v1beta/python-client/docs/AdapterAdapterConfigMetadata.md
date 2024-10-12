# AdapterAdapterConfigMetadata

Configuration metadata associated with this adapter. They are used to define the ad_unit_configurations associated with AdUnitMappings for the this adapter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adapter_config_metadata_id** | **str** | This is used to fill the key of the [ad_unit_configurations](#AdUnitMapping.ad_unit_configurations). | [optional] 
**adapter_config_metadata_label** | **str** | Name of the adapter configuration metadata. | [optional] 
**is_required** | **bool** | Whether this metadata is required for configuring the AdUnitMappings. | [optional] 

## Example

```python
from openapi_client.models.adapter_adapter_config_metadata import AdapterAdapterConfigMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AdapterAdapterConfigMetadata from a JSON string
adapter_adapter_config_metadata_instance = AdapterAdapterConfigMetadata.from_json(json)
# print the JSON string representation of the object
print(AdapterAdapterConfigMetadata.to_json())

# convert the object into a dict
adapter_adapter_config_metadata_dict = adapter_adapter_config_metadata_instance.to_dict()
# create an instance of AdapterAdapterConfigMetadata from a dict
adapter_adapter_config_metadata_from_dict = AdapterAdapterConfigMetadata.from_dict(adapter_adapter_config_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


