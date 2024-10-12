# TypesListResponse

A response that returns all Types supported by Deployment Manager

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token used to continue a truncated list request. | [optional] 
**types** | [**List[Type]**](Type.md) | Output only. A list of resource types supported by Deployment Manager. | [optional] 

## Example

```python
from openapi_client.models.types_list_response import TypesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TypesListResponse from a JSON string
types_list_response_instance = TypesListResponse.from_json(json)
# print the JSON string representation of the object
print(TypesListResponse.to_json())

# convert the object into a dict
types_list_response_dict = types_list_response_instance.to_dict()
# create an instance of TypesListResponse from a dict
types_list_response_from_dict = TypesListResponse.from_dict(types_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


