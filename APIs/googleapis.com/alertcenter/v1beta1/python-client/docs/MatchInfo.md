# MatchInfo

Proto that contains match information from the condition part of the rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**predefined_detector** | [**PredefinedDetectorInfo**](PredefinedDetectorInfo.md) |  | [optional] 
**user_defined_detector** | [**UserDefinedDetectorInfo**](UserDefinedDetectorInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.match_info import MatchInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MatchInfo from a JSON string
match_info_instance = MatchInfo.from_json(json)
# print the JSON string representation of the object
print(MatchInfo.to_json())

# convert the object into a dict
match_info_dict = match_info_instance.to_dict()
# create an instance of MatchInfo from a dict
match_info_from_dict = MatchInfo.from_dict(match_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


