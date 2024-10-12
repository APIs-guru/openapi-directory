# PollOption

Describes a choice in a Poll object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The text of a poll choice. | 
**position** | **int** | Position of this choice in the poll. | 
**votes** | **int** | Number of users who voted for this choice. | 

## Example

```python
from openapi_client.models.poll_option import PollOption

# TODO update the JSON string below
json = "{}"
# create an instance of PollOption from a JSON string
poll_option_instance = PollOption.from_json(json)
# print the JSON string representation of the object
print(PollOption.to_json())

# convert the object into a dict
poll_option_dict = poll_option_instance.to_dict()
# create an instance of PollOption from a dict
poll_option_from_dict = PollOption.from_dict(poll_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


