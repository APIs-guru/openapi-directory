# AzureCapacity

Azure capacity definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **int** | The default capacity that would be used. | 
**maximum** | **int** | Maximum allowed instances count. | 
**minimum** | **int** | Minimum allowed instances count. | 
**scale_type** | **str** | Scale type. | 

## Example

```python
from openapi_client.models.azure_capacity import AzureCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of AzureCapacity from a JSON string
azure_capacity_instance = AzureCapacity.from_json(json)
# print the JSON string representation of the object
print(AzureCapacity.to_json())

# convert the object into a dict
azure_capacity_dict = azure_capacity_instance.to_dict()
# create an instance of AzureCapacity from a dict
azure_capacity_from_dict = AzureCapacity.from_dict(azure_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


