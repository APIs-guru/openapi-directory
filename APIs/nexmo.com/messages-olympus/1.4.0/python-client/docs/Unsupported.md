# Unsupported


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ref** | **str** | Client reference of up to 100 characters. The reference will be present in every message status. | [optional] 
**message_type** | **str** | The type of message to send. Will be &#x60;unsupported&#x60; if the type of message received from user is not supported by the channel. | 

## Example

```python
from openapi_client.models.unsupported import Unsupported

# TODO update the JSON string below
json = "{}"
# create an instance of Unsupported from a JSON string
unsupported_instance = Unsupported.from_json(json)
# print the JSON string representation of the object
print(Unsupported.to_json())

# convert the object into a dict
unsupported_dict = unsupported_instance.to_dict()
# create an instance of Unsupported from a dict
unsupported_from_dict = Unsupported.from_dict(unsupported_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


