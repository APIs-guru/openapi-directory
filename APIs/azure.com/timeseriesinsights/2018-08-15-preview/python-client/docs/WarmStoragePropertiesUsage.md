# WarmStoragePropertiesUsage

An object that contains the status of warm storage properties usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | This string represents the state of warm storage properties usage. It can be \&quot;Ok\&quot;, \&quot;Error\&quot;, \&quot;Unknown\&quot;. | [optional] 
**state_details** | [**WarmStoragePropertiesUsageStateDetails**](WarmStoragePropertiesUsageStateDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.warm_storage_properties_usage import WarmStoragePropertiesUsage

# TODO update the JSON string below
json = "{}"
# create an instance of WarmStoragePropertiesUsage from a JSON string
warm_storage_properties_usage_instance = WarmStoragePropertiesUsage.from_json(json)
# print the JSON string representation of the object
print(WarmStoragePropertiesUsage.to_json())

# convert the object into a dict
warm_storage_properties_usage_dict = warm_storage_properties_usage_instance.to_dict()
# create an instance of WarmStoragePropertiesUsage from a dict
warm_storage_properties_usage_from_dict = WarmStoragePropertiesUsage.from_dict(warm_storage_properties_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


