# OBEventLink1

Resource links to other available versions of the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link** | **str** | Resource link. | 
**version** | **str** | Resource version. | 

## Example

```python
from openapi_client.models.ob_event_link1 import OBEventLink1

# TODO update the JSON string below
json = "{}"
# create an instance of OBEventLink1 from a JSON string
ob_event_link1_instance = OBEventLink1.from_json(json)
# print the JSON string representation of the object
print(OBEventLink1.to_json())

# convert the object into a dict
ob_event_link1_dict = ob_event_link1_instance.to_dict()
# create an instance of OBEventLink1 from a dict
ob_event_link1_from_dict = OBEventLink1.from_dict(ob_event_link1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


