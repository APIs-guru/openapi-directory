# GetTemplateResponse

The response to a GetTemplate request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**TemplateMetadata**](TemplateMetadata.md) |  | [optional] 
**runtime_metadata** | [**RuntimeMetadata**](RuntimeMetadata.md) |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**template_type** | **str** | Template Type. | [optional] 

## Example

```python
from openapi_client.models.get_template_response import GetTemplateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetTemplateResponse from a JSON string
get_template_response_instance = GetTemplateResponse.from_json(json)
# print the JSON string representation of the object
print(GetTemplateResponse.to_json())

# convert the object into a dict
get_template_response_dict = get_template_response_instance.to_dict()
# create an instance of GetTemplateResponse from a dict
get_template_response_from_dict = GetTemplateResponse.from_dict(get_template_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


