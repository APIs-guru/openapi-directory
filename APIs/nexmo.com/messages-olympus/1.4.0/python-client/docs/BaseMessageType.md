# BaseMessageType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ref** | **str** | Client reference of up to 100 characters. The reference will be present in every message status. | [optional] 

## Example

```python
from openapi_client.models.base_message_type import BaseMessageType

# TODO update the JSON string below
json = "{}"
# create an instance of BaseMessageType from a JSON string
base_message_type_instance = BaseMessageType.from_json(json)
# print the JSON string representation of the object
print(BaseMessageType.to_json())

# convert the object into a dict
base_message_type_dict = base_message_type_instance.to_dict()
# create an instance of BaseMessageType from a dict
base_message_type_from_dict = BaseMessageType.from_dict(base_message_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


