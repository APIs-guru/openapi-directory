# TemplateDetailed


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
from openapi_client.models.template_detailed import TemplateDetailed

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateDetailed from a JSON string
template_detailed_instance = TemplateDetailed.from_json(json)
# print the JSON string representation of the object
print(TemplateDetailed.to_json())

# convert the object into a dict
template_detailed_dict = template_detailed_instance.to_dict()
# create an instance of TemplateDetailed from a dict
template_detailed_from_dict = TemplateDetailed.from_dict(template_detailed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


