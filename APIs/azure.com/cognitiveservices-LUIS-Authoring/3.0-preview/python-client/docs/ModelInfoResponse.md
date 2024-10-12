# ModelInfoResponse

An application model info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the Entity Model. | 
**name** | **str** | Name of the Entity Model. | [optional] 
**readable_type** | [**ReadableType**](ReadableType.md) |  | 
**type_id** | **int** | The type ID of the Entity Model. | [optional] 
**children** | [**List[ChildEntity]**](ChildEntity.md) |  | [optional] 
**roles** | [**List[EntityRole]**](EntityRole.md) | List of Pattern.Any Entity Extractors. | [optional] 
**sub_lists** | [**List[SubClosedListResponse]**](SubClosedListResponse.md) | List of sublists. | [optional] 
**custom_prebuilt_domain_name** | **str** | The domain name. | [optional] 
**custom_prebuilt_model_name** | **str** | The intent name or entity name. | [optional] 
**regex_pattern** | **str** | The Regular Expression entity pattern. | [optional] 
**explicit_list** | [**List[ExplicitListItem]**](ExplicitListItem.md) | List of explicit (exception) list items | [optional] 

## Example

```python
from openapi_client.models.model_info_response import ModelInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ModelInfoResponse from a JSON string
model_info_response_instance = ModelInfoResponse.from_json(json)
# print the JSON string representation of the object
print(ModelInfoResponse.to_json())

# convert the object into a dict
model_info_response_dict = model_info_response_instance.to_dict()
# create an instance of ModelInfoResponse from a dict
model_info_response_from_dict = ModelInfoResponse.from_dict(model_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


