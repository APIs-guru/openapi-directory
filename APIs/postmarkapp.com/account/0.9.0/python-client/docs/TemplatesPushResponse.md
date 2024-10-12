# TemplatesPushResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templates** | [**List[TemplatesPushResponseTemplatesInner]**](TemplatesPushResponseTemplatesInner.md) |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.templates_push_response import TemplatesPushResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TemplatesPushResponse from a JSON string
templates_push_response_instance = TemplatesPushResponse.from_json(json)
# print the JSON string representation of the object
print(TemplatesPushResponse.to_json())

# convert the object into a dict
templates_push_response_dict = templates_push_response_instance.to_dict()
# create an instance of TemplatesPushResponse from a dict
templates_push_response_from_dict = TemplatesPushResponse.from_dict(templates_push_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


