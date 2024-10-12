# GetCustomMappingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CustomMapping**](CustomMapping.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_custom_mapping_response import GetCustomMappingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomMappingResponse from a JSON string
get_custom_mapping_response_instance = GetCustomMappingResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomMappingResponse.to_json())

# convert the object into a dict
get_custom_mapping_response_dict = get_custom_mapping_response_instance.to_dict()
# create an instance of GetCustomMappingResponse from a dict
get_custom_mapping_response_from_dict = GetCustomMappingResponse.from_dict(get_custom_mapping_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


