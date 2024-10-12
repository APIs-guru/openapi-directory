# FreeFormServiceItem

Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_id** | **str** | Required. The &#x60;category_id&#x60; and &#x60;service_type_id&#x60; should match the possible combinations provided in the &#x60;Category&#x60; message. | [optional] 
**label** | [**Label**](Label.md) |  | [optional] 

## Example

```python
from openapi_client.models.free_form_service_item import FreeFormServiceItem

# TODO update the JSON string below
json = "{}"
# create an instance of FreeFormServiceItem from a JSON string
free_form_service_item_instance = FreeFormServiceItem.from_json(json)
# print the JSON string representation of the object
print(FreeFormServiceItem.to_json())

# convert the object into a dict
free_form_service_item_dict = free_form_service_item_instance.to_dict()
# create an instance of FreeFormServiceItem from a dict
free_form_service_item_from_dict = FreeFormServiceItem.from_dict(free_form_service_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


