# ScoreFork

Options to fork the score

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | **str** | Unique identifier of a collection where the score will be copied. If no collection identifier is provided, the score will be stored in the &#x60;root&#x60; directory.  | [optional] [default to 'root']

## Example

```python
from openapi_client.models.score_fork import ScoreFork

# TODO update the JSON string below
json = "{}"
# create an instance of ScoreFork from a JSON string
score_fork_instance = ScoreFork.from_json(json)
# print the JSON string representation of the object
print(ScoreFork.to_json())

# convert the object into a dict
score_fork_dict = score_fork_instance.to_dict()
# create an instance of ScoreFork from a dict
score_fork_from_dict = ScoreFork.from_dict(score_fork_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


