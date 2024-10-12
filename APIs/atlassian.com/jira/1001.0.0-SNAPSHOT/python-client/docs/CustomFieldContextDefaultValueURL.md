# CustomFieldContextDefaultValueURL

The default value for a URL custom field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The ID of the context. | 
**type** | **str** |  | 
**url** | **str** | The default URL. | 

## Example

```python
from openapi_client.models.custom_field_context_default_value_url import CustomFieldContextDefaultValueURL

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldContextDefaultValueURL from a JSON string
custom_field_context_default_value_url_instance = CustomFieldContextDefaultValueURL.from_json(json)
# print the JSON string representation of the object
print(CustomFieldContextDefaultValueURL.to_json())

# convert the object into a dict
custom_field_context_default_value_url_dict = custom_field_context_default_value_url_instance.to_dict()
# create an instance of CustomFieldContextDefaultValueURL from a dict
custom_field_context_default_value_url_from_dict = CustomFieldContextDefaultValueURL.from_dict(custom_field_context_default_value_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


