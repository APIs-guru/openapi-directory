# OrderOfCustomFieldOptions

An ordered list of custom field option IDs and information on where to move them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**after** | **str** | The ID of the custom field option or cascading option to place the moved options after. Required if &#x60;position&#x60; isn&#39;t provided. | [optional] 
**custom_field_option_ids** | **List[str]** | A list of IDs of custom field options to move. The order of the custom field option IDs in the list is the order they are given after the move. The list must contain custom field options or cascading options, but not both. | 
**position** | **str** | The position the custom field options should be moved to. Required if &#x60;after&#x60; isn&#39;t provided. | [optional] 

## Example

```python
from openapi_client.models.order_of_custom_field_options import OrderOfCustomFieldOptions

# TODO update the JSON string below
json = "{}"
# create an instance of OrderOfCustomFieldOptions from a JSON string
order_of_custom_field_options_instance = OrderOfCustomFieldOptions.from_json(json)
# print the JSON string representation of the object
print(OrderOfCustomFieldOptions.to_json())

# convert the object into a dict
order_of_custom_field_options_dict = order_of_custom_field_options_instance.to_dict()
# create an instance of OrderOfCustomFieldOptions from a dict
order_of_custom_field_options_from_dict = OrderOfCustomFieldOptions.from_dict(order_of_custom_field_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


