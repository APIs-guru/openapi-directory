# TypeProvidersListTypesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token used to continue a truncated list request. | [optional] 
**types** | [**List[TypeInfo]**](TypeInfo.md) | Output only. A list of resource type info. | [optional] 

## Example

```python
from openapi_client.models.type_providers_list_types_response import TypeProvidersListTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TypeProvidersListTypesResponse from a JSON string
type_providers_list_types_response_instance = TypeProvidersListTypesResponse.from_json(json)
# print the JSON string representation of the object
print(TypeProvidersListTypesResponse.to_json())

# convert the object into a dict
type_providers_list_types_response_dict = type_providers_list_types_response_instance.to_dict()
# create an instance of TypeProvidersListTypesResponse from a dict
type_providers_list_types_response_from_dict = TypeProvidersListTypesResponse.from_dict(type_providers_list_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


