# PopSettings

POP settings for an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_window** | **str** | The range of messages which are accessible via POP. | [optional] 
**disposition** | **str** | The action that will be executed on a message after it has been fetched via POP. | [optional] 

## Example

```python
from openapi_client.models.pop_settings import PopSettings

# TODO update the JSON string below
json = "{}"
# create an instance of PopSettings from a JSON string
pop_settings_instance = PopSettings.from_json(json)
# print the JSON string representation of the object
print(PopSettings.to_json())

# convert the object into a dict
pop_settings_dict = pop_settings_instance.to_dict()
# create an instance of PopSettings from a dict
pop_settings_from_dict = PopSettings.from_dict(pop_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


