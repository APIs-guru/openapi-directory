# MessageResponseFailurereason


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **float** | Numeric code that defines the error. Integer. | [optional] 
**details** | **str** |  | [optional] 
**permanent** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.message_response_failurereason import MessageResponseFailurereason

# TODO update the JSON string below
json = "{}"
# create an instance of MessageResponseFailurereason from a JSON string
message_response_failurereason_instance = MessageResponseFailurereason.from_json(json)
# print the JSON string representation of the object
print(MessageResponseFailurereason.to_json())

# convert the object into a dict
message_response_failurereason_dict = message_response_failurereason_instance.to_dict()
# create an instance of MessageResponseFailurereason from a dict
message_response_failurereason_from_dict = MessageResponseFailurereason.from_dict(message_response_failurereason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


