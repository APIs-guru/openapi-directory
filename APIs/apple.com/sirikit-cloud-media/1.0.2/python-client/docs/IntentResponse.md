# IntentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_class** | **str** |  | 
**user_activity** | [**UserActivity**](UserActivity.md) |  | 

## Example

```python
from openapi_client.models.intent_response import IntentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IntentResponse from a JSON string
intent_response_instance = IntentResponse.from_json(json)
# print the JSON string representation of the object
print(IntentResponse.to_json())

# convert the object into a dict
intent_response_dict = intent_response_instance.to_dict()
# create an instance of IntentResponse from a dict
intent_response_from_dict = IntentResponse.from_dict(intent_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


