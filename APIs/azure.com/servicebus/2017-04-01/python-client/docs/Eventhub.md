# Eventhub

Single item in List or Get Event Hub operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Properties supplied to the Create Or Update Event Hub operation. | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.eventhub import Eventhub

# TODO update the JSON string below
json = "{}"
# create an instance of Eventhub from a JSON string
eventhub_instance = Eventhub.from_json(json)
# print the JSON string representation of the object
print(Eventhub.to_json())

# convert the object into a dict
eventhub_dict = eventhub_instance.to_dict()
# create an instance of Eventhub from a dict
eventhub_from_dict = Eventhub.from_dict(eventhub_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


