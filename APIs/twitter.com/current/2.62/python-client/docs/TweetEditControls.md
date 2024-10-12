# TweetEditControls


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**editable_until** | **datetime** | Time when Tweet is no longer editable. | 
**edits_remaining** | **int** | Number of times this Tweet can be edited. | 
**is_edit_eligible** | **bool** | Indicates if this Tweet is eligible to be edited. | 

## Example

```python
from openapi_client.models.tweet_edit_controls import TweetEditControls

# TODO update the JSON string below
json = "{}"
# create an instance of TweetEditControls from a JSON string
tweet_edit_controls_instance = TweetEditControls.from_json(json)
# print the JSON string representation of the object
print(TweetEditControls.to_json())

# convert the object into a dict
tweet_edit_controls_dict = tweet_edit_controls_instance.to_dict()
# create an instance of TweetEditControls from a dict
tweet_edit_controls_from_dict = TweetEditControls.from_dict(tweet_edit_controls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


