# Messenger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.messenger import Messenger

# TODO update the JSON string below
json = "{}"
# create an instance of Messenger from a JSON string
messenger_instance = Messenger.from_json(json)
# print the JSON string representation of the object
print(Messenger.to_json())

# convert the object into a dict
messenger_dict = messenger_instance.to_dict()
# create an instance of Messenger from a dict
messenger_from_dict = Messenger.from_dict(messenger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


