# ApiDefinitionInfo

Information about the formal API definition for the web app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The URL of the API definition. | [optional] 

## Example

```python
from openapi_client.models.api_definition_info import ApiDefinitionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ApiDefinitionInfo from a JSON string
api_definition_info_instance = ApiDefinitionInfo.from_json(json)
# print the JSON string representation of the object
print(ApiDefinitionInfo.to_json())

# convert the object into a dict
api_definition_info_dict = api_definition_info_instance.to_dict()
# create an instance of ApiDefinitionInfo from a dict
api_definition_info_from_dict = ApiDefinitionInfo.from_dict(api_definition_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


