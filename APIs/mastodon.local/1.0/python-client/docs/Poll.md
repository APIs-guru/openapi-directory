# Poll

Represents a poll attached to a status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emojis** | [**List[Emoji]**](Emoji.md) | Custom emoji to be used for rendering poll options. | [optional] 
**expired** | **bool** | Is the poll currently expired? | [optional] 
**expires_at** | **datetime** | When the poll ends. ISO 8601 Datetime, or null if the poll does not end. | [optional] 
**id** | **str** | The ID of the poll in the database. Cast from an integer, but not guaranteed to be a number. | [optional] 
**multiple** | **bool** | Does the poll allow multiple-choice answers? | [optional] 
**options** | **List[object]** | Possible answers for the poll. | [optional] 
**own_votes** | **List[int]** | When called with a user token, which options has the authorized user chosen? Contains an array of index values for &#x60;options&#x60;. Array of Number, or null if no current user | [optional] 
**voted** | **bool** | When called with a user token, has the authorized user voted? Boolean, or null if no current user | [optional] 
**voters_count** | **int** | How many unique accounts have voted on a multiple-choice poll. Number, or null if &#x60;multiple&#x60; is false. | [optional] 
**votes_count** | **int** | How many votes have been received. | [optional] 

## Example

```python
from openapi_client.models.poll import Poll

# TODO update the JSON string below
json = "{}"
# create an instance of Poll from a JSON string
poll_instance = Poll.from_json(json)
# print the JSON string representation of the object
print(Poll.to_json())

# convert the object into a dict
poll_dict = poll_instance.to_dict()
# create an instance of Poll from a dict
poll_from_dict = Poll.from_dict(poll_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


