# MatchResponse

The response for a Match request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_id** | **str** | The cache id. | [optional] 
**is_match** | **bool** | Indicates if there is a match. | [optional] 
**matches** | [**List[Match]**](Match.md) | The match details. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**tracking_id** | **str** | The tracking id. | [optional] 

## Example

```python
from openapi_client.models.match_response import MatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MatchResponse from a JSON string
match_response_instance = MatchResponse.from_json(json)
# print the JSON string representation of the object
print(MatchResponse.to_json())

# convert the object into a dict
match_response_dict = match_response_instance.to_dict()
# create an instance of MatchResponse from a dict
match_response_from_dict = MatchResponse.from_dict(match_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


