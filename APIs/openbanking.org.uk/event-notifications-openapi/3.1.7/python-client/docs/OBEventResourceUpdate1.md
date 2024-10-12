# OBEventResourceUpdate1

Resource-Update Event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject** | [**OBEventSubject1**](OBEventSubject1.md) |  | 

## Example

```python
from openapi_client.models.ob_event_resource_update1 import OBEventResourceUpdate1

# TODO update the JSON string below
json = "{}"
# create an instance of OBEventResourceUpdate1 from a JSON string
ob_event_resource_update1_instance = OBEventResourceUpdate1.from_json(json)
# print the JSON string representation of the object
print(OBEventResourceUpdate1.to_json())

# convert the object into a dict
ob_event_resource_update1_dict = ob_event_resource_update1_instance.to_dict()
# create an instance of OBEventResourceUpdate1 from a dict
ob_event_resource_update1_from_dict = OBEventResourceUpdate1.from_dict(ob_event_resource_update1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


