# GetCustomFieldsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[CustomFieldFinder]**](CustomFieldFinder.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_custom_fields_response import GetCustomFieldsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomFieldsResponse from a JSON string
get_custom_fields_response_instance = GetCustomFieldsResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomFieldsResponse.to_json())

# convert the object into a dict
get_custom_fields_response_dict = get_custom_fields_response_instance.to_dict()
# create an instance of GetCustomFieldsResponse from a dict
get_custom_fields_response_from_dict = GetCustomFieldsResponse.from_dict(get_custom_fields_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


