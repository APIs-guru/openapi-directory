# MeetingRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**MeetingEntityRelation**](MeetingEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.meeting_relation import MeetingRelation

# TODO update the JSON string below
json = "{}"
# create an instance of MeetingRelation from a JSON string
meeting_relation_instance = MeetingRelation.from_json(json)
# print the JSON string representation of the object
print(MeetingRelation.to_json())

# convert the object into a dict
meeting_relation_dict = meeting_relation_instance.to_dict()
# create an instance of MeetingRelation from a dict
meeting_relation_from_dict = MeetingRelation.from_dict(meeting_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


