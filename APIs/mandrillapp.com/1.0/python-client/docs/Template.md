# Template


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**from_email** | **str** |  | [optional] 
**from_name** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**labels** | **List[str]** |  | [optional] 
**name** | **str** |  | [optional] 
**publish** | **bool** |  | [optional] 
**subject** | **str** |  | [optional] 
**text** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template import Template

# TODO update the JSON string below
json = "{}"
# create an instance of Template from a JSON string
template_instance = Template.from_json(json)
# print the JSON string representation of the object
print(Template.to_json())

# convert the object into a dict
template_dict = template_instance.to_dict()
# create an instance of Template from a dict
template_from_dict = Template.from_dict(template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


