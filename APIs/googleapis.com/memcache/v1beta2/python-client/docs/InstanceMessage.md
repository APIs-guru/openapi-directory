# InstanceMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | A code that correspond to one type of user-facing message. | [optional] 
**message** | **str** | Message on memcached instance which will be exposed to users. | [optional] 

## Example

```python
from openapi_client.models.instance_message import InstanceMessage

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceMessage from a JSON string
instance_message_instance = InstanceMessage.from_json(json)
# print the JSON string representation of the object
print(InstanceMessage.to_json())

# convert the object into a dict
instance_message_dict = instance_message_instance.to_dict()
# create an instance of InstanceMessage from a dict
instance_message_from_dict = InstanceMessage.from_dict(instance_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


