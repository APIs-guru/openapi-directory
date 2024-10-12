# WarmStoragePropertiesUsageStateDetails

An object that contains the details about warm storage properties usage state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_count** | **int** | A value that represents the number of properties used by the environment for S1/S2 SKU and number of properties used by Warm Store for PAYG SKU | [optional] 
**max_count** | **int** | A value that represents the maximum number of properties used allowed by the environment for S1/S2 SKU and maximum number of properties allowed by Warm Store for PAYG SKU. | [optional] 

## Example

```python
from openapi_client.models.warm_storage_properties_usage_state_details import WarmStoragePropertiesUsageStateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of WarmStoragePropertiesUsageStateDetails from a JSON string
warm_storage_properties_usage_state_details_instance = WarmStoragePropertiesUsageStateDetails.from_json(json)
# print the JSON string representation of the object
print(WarmStoragePropertiesUsageStateDetails.to_json())

# convert the object into a dict
warm_storage_properties_usage_state_details_dict = warm_storage_properties_usage_state_details_instance.to_dict()
# create an instance of WarmStoragePropertiesUsageStateDetails from a dict
warm_storage_properties_usage_state_details_from_dict = WarmStoragePropertiesUsageStateDetails.from_dict(warm_storage_properties_usage_state_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


