# CustomFieldContextUpdateDetails

Details of a custom field context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the custom field context. The maximum length is 255 characters. | [optional] 
**name** | **str** | The name of the custom field context. The name must be unique. The maximum length is 255 characters. | [optional] 

## Example

```python
from openapi_client.models.custom_field_context_update_details import CustomFieldContextUpdateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextUpdateDetails from a JSON string
custom_field_context_update_details_instance = CustomFieldContextUpdateDetails.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextUpdateDetails.to_json())

# convert the object into a dict
custom_field_context_update_details_dict = custom_field_context_update_details_instance.to_dict()
# create an instance of CustomFieldContextUpdateDetails from a dict
custom_field_context_update_details_from_dict = CustomFieldContextUpdateDetails.from_dict(custom_field_context_update_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


