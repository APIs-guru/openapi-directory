# AdditionalItemProperty

An additional property for the item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the property. | 
**value** | **str** | The value of the property. | 

## Example

```python
from openapi_client.models.additional_item_property import AdditionalItemProperty

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalItemProperty from a JSON string
additional_item_property_instance = AdditionalItemProperty.from_json(json)
# print the JSON string representation of the object
print(AdditionalItemProperty.to_json())

# convert the object into a dict
additional_item_property_dict = additional_item_property_instance.to_dict()
# create an instance of AdditionalItemProperty from a dict
additional_item_property_from_dict = AdditionalItemProperty.from_dict(additional_item_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


