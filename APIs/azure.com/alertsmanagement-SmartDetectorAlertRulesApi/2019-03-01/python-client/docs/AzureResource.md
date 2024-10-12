# AzureResource

An Azure resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource ID. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.azure_resource import AzureResource

# TODO update the JSON string below
json = "{}"
# create an instance of AzureResource from a JSON string
azure_resource_instance = AzureResource.from_json(json)
# print the JSON string representation of the object
print(AzureResource.to_json())

# convert the object into a dict
azure_resource_dict = azure_resource_instance.to_dict()
# create an instance of AzureResource from a dict
azure_resource_from_dict = AzureResource.from_dict(azure_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


