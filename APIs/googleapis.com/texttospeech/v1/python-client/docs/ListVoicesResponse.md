# ListVoicesResponse

The message returned to the client by the `ListVoices` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**voices** | [**List[Voice]**](Voice.md) | The list of voices. | [optional] 

## Example

```python
from openapi_client.models.list_voices_response import ListVoicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVoicesResponse from a JSON string
list_voices_response_instance = ListVoicesResponse.from_json(json)
# print the JSON string representation of the object
print(ListVoicesResponse.to_json())

# convert the object into a dict
list_voices_response_dict = list_voices_response_instance.to_dict()
# create an instance of ListVoicesResponse from a dict
list_voices_response_from_dict = ListVoicesResponse.from_dict(list_voices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


