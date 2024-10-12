# AutomationsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**AutomationsListDefaultResponseError**](AutomationsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.automations_list_default_response import AutomationsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationsListDefaultResponse from a JSON string
automations_list_default_response_instance = AutomationsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(AutomationsListDefaultResponse.to_json())

# convert the object into a dict
automations_list_default_response_dict = automations_list_default_response_instance.to_dict()
# create an instance of AutomationsListDefaultResponse from a dict
automations_list_default_response_from_dict = AutomationsListDefaultResponse.from_dict(automations_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


