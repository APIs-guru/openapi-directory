# EventRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**EventEntityRelation**](EventEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.event_relation import EventRelation

# TODO update the JSON string below
json = "{}"
# create an instance of EventRelation from a JSON string
event_relation_instance = EventRelation.from_json(json)
# print the JSON string representation of the object
print(EventRelation.to_json())

# convert the object into a dict
event_relation_dict = event_relation_instance.to_dict()
# create an instance of EventRelation from a dict
event_relation_from_dict = EventRelation.from_dict(event_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


