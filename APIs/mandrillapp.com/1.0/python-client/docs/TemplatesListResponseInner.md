# TemplatesListResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**from_email** | **str** |  | [optional] 
**from_name** | **str** |  | [optional] 
**labels** | **List[str]** |  | [optional] 
**name** | **str** |  | [optional] 
**publish_code** | **str** |  | [optional] 
**publish_from_email** | **str** |  | [optional] 
**publish_from_name** | **str** |  | [optional] 
**publish_name** | **str** |  | [optional] 
**publish_subject** | **str** |  | [optional] 
**publish_text** | **str** |  | [optional] 
**published_at** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 
**subject** | **str** |  | [optional] 
**text** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.templates_list_response_inner import TemplatesListResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of TemplatesListResponseInner from a JSON string
templates_list_response_inner_instance = TemplatesListResponseInner.from_json(json)
# print the JSON string representation of the object
print(TemplatesListResponseInner.to_json())

# convert the object into a dict
templates_list_response_inner_dict = templates_list_response_inner_instance.to_dict()
# create an instance of TemplatesListResponseInner from a dict
templates_list_response_inner_from_dict = TemplatesListResponseInner.from_dict(templates_list_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


