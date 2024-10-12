# CompositeTypesListResponse

A response that returns all Composite Types supported by Deployment Manager

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**composite_types** | [**List[CompositeType]**](CompositeType.md) | Output only. A list of resource composite types supported by Deployment Manager. | [optional] 
**next_page_token** | **str** | A token used to continue a truncated list request. | [optional] 

## Example

```python
from openapi_client.models.composite_types_list_response import CompositeTypesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CompositeTypesListResponse from a JSON string
composite_types_list_response_instance = CompositeTypesListResponse.from_json(json)
# print the JSON string representation of the object
print(CompositeTypesListResponse.to_json())

# convert the object into a dict
composite_types_list_response_dict = composite_types_list_response_instance.to_dict()
# create an instance of CompositeTypesListResponse from a dict
composite_types_list_response_from_dict = CompositeTypesListResponse.from_dict(composite_types_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


