# OBEvent1

Events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**urnukorgopenbankingeventsresource_update** | [**OBEventResourceUpdate1**](OBEventResourceUpdate1.md) |  | 

## Example

```python
from openapi_client.models.ob_event1 import OBEvent1

# TODO update the JSON string below
json = "{}"
# create an instance of OBEvent1 from a JSON string
ob_event1_instance = OBEvent1.from_json(json)
# print the JSON string representation of the object
print(OBEvent1.to_json())

# convert the object into a dict
ob_event1_dict = ob_event1_instance.to_dict()
# create an instance of OBEvent1 from a dict
ob_event1_from_dict = OBEvent1.from_dict(ob_event1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


