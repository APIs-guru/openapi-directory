# UpdateCustomMappingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CustomMapping**](CustomMapping.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.update_custom_mapping_response import UpdateCustomMappingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCustomMappingResponse from a JSON string
update_custom_mapping_response_instance = UpdateCustomMappingResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateCustomMappingResponse.to_json())

# convert the object into a dict
update_custom_mapping_response_dict = update_custom_mapping_response_instance.to_dict()
# create an instance of UpdateCustomMappingResponse from a dict
update_custom_mapping_response_from_dict = UpdateCustomMappingResponse.from_dict(update_custom_mapping_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


