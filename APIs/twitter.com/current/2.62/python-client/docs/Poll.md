# Poll

Represent a Poll attached to a Tweet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_minutes** | **int** |  | [optional] 
**end_datetime** | **datetime** |  | [optional] 
**id** | **str** | Unique identifier of this poll. | 
**options** | [**List[PollOption]**](PollOption.md) |  | 
**voting_status** | **str** |  | [optional] 

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


