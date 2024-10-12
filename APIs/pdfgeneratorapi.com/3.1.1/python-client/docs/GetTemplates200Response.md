# GetTemplates200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**List[Template]**](Template.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_templates200_response import GetTemplates200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetTemplates200Response from a JSON string
get_templates200_response_instance = GetTemplates200Response.from_json(json)
# print the JSON string representation of the object
print(GetTemplates200Response.to_json())

# convert the object into a dict
get_templates200_response_dict = get_templates200_response_instance.to_dict()
# create an instance of GetTemplates200Response from a dict
get_templates200_response_from_dict = GetTemplates200Response.from_dict(get_templates200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


