# AzureResourceProperties

An Azure resource QueryPack-Query object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Azure resource Id | [optional] [readonly] 
**name** | **str** | Azure resource name | [optional] [readonly] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_resource_properties import AzureResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AzureResourceProperties from a JSON string
azure_resource_properties_instance = AzureResourceProperties.from_json(json)
# print the JSON string representation of the object
print(AzureResourceProperties.to_json())

# convert the object into a dict
azure_resource_properties_dict = azure_resource_properties_instance.to_dict()
# create an instance of AzureResourceProperties from a dict
azure_resource_properties_from_dict = AzureResourceProperties.from_dict(azure_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


