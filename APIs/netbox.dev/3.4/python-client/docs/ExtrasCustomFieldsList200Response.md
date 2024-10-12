# ExtrasCustomFieldsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[CustomField]**](CustomField.md) |  | 

## Example

```python
from openapi_client.models.extras_custom_fields_list200_response import ExtrasCustomFieldsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ExtrasCustomFieldsList200Response from a JSON string
extras_custom_fields_list200_response_instance = ExtrasCustomFieldsList200Response.from_json(json)
# print the JSON string representation of the object
print(ExtrasCustomFieldsList200Response.to_json())

# convert the object into a dict
extras_custom_fields_list200_response_dict = extras_custom_fields_list200_response_instance.to_dict()
# create an instance of ExtrasCustomFieldsList200Response from a dict
extras_custom_fields_list200_response_from_dict = ExtrasCustomFieldsList200Response.from_dict(extras_custom_fields_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


