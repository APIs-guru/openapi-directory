# AppTemplatesResult

A list of IoT Central Application Templates with a next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of IoT Central application templates. | [optional] 
**value** | [**List[AppTemplate]**](AppTemplate.md) | A list of IoT Central Application Templates. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_templates_result import AppTemplatesResult

# TODO update the JSON string below
json = "{}"
# create an instance of AppTemplatesResult from a JSON string
app_templates_result_instance = AppTemplatesResult.from_json(json)
# print the JSON string representation of the object
print(AppTemplatesResult.to_json())

# convert the object into a dict
app_templates_result_dict = app_templates_result_instance.to_dict()
# create an instance of AppTemplatesResult from a dict
app_templates_result_from_dict = AppTemplatesResult.from_dict(app_templates_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


