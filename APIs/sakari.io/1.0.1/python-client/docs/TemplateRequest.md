# TemplateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**template** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_request import TemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateRequest from a JSON string
template_request_instance = TemplateRequest.from_json(json)
# print the JSON string representation of the object
print(TemplateRequest.to_json())

# convert the object into a dict
template_request_dict = template_request_instance.to_dict()
# create an instance of TemplateRequest from a dict
template_request_from_dict = TemplateRequest.from_dict(template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


