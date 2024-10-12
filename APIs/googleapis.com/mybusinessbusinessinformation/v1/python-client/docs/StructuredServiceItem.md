# StructuredServiceItem

Represents a structured service offered by the merchant. For eg: toilet_installation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. Description of structured service item. The character limit is 300. | [optional] 
**service_type_id** | **str** | Required. The &#x60;service_type_id&#x60; field is a Google provided unique ID that can be found in &#x60;ServiceType&#x60;. This information is provided by &#x60;BatchGetCategories&#x60; rpc service. | [optional] 

## Example

```python
from openapi_client.models.structured_service_item import StructuredServiceItem

# TODO update the JSON string below
json = "{}"
# create an instance of StructuredServiceItem from a JSON string
structured_service_item_instance = StructuredServiceItem.from_json(json)
# print the JSON string representation of the object
print(StructuredServiceItem.to_json())

# convert the object into a dict
structured_service_item_dict = structured_service_item_instance.to_dict()
# create an instance of StructuredServiceItem from a dict
structured_service_item_from_dict = StructuredServiceItem.from_dict(structured_service_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


