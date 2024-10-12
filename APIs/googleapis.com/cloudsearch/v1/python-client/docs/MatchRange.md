# MatchRange

Matched range of a snippet [start, end).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **int** | End of the match in the snippet. | [optional] 
**start** | **int** | Starting position of the match in the snippet. | [optional] 

## Example

```python
from openapi_client.models.match_range import MatchRange

# TODO update the JSON string below
json = "{}"
# create an instance of MatchRange from a JSON string
match_range_instance = MatchRange.from_json(json)
# print the JSON string representation of the object
print(MatchRange.to_json())

# convert the object into a dict
match_range_dict = match_range_instance.to_dict()
# create an instance of MatchRange from a dict
match_range_from_dict = MatchRange.from_dict(match_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


