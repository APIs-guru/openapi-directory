# CreateCustomMappingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CustomMapping**](CustomMapping.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.create_custom_mapping_response import CreateCustomMappingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCustomMappingResponse from a JSON string
create_custom_mapping_response_instance = CreateCustomMappingResponse.from_json(json)
# print the JSON string representation of the object
print(CreateCustomMappingResponse.to_json())

# convert the object into a dict
create_custom_mapping_response_dict = create_custom_mapping_response_instance.to_dict()
# create an instance of CreateCustomMappingResponse from a dict
create_custom_mapping_response_from_dict = CreateCustomMappingResponse.from_dict(create_custom_mapping_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


