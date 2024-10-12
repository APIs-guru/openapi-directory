# ListSessionTemplatesResponse

A list of session templates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**session_templates** | [**List[SessionTemplate]**](SessionTemplate.md) | Output only. Session template list | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_session_templates_response import ListSessionTemplatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSessionTemplatesResponse from a JSON string
list_session_templates_response_instance = ListSessionTemplatesResponse.from_json(json)
# print the JSON string representation of the object
print(ListSessionTemplatesResponse.to_json())

# convert the object into a dict
list_session_templates_response_dict = list_session_templates_response_instance.to_dict()
# create an instance of ListSessionTemplatesResponse from a dict
list_session_templates_response_from_dict = ListSessionTemplatesResponse.from_dict(list_session_templates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


