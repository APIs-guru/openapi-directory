# MatchRecordV2dot1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**length** | **int** | Length (in Unicode characters) for the entity match text. | [optional] 
**offset** | **int** | Start position (in Unicode characters) for the entity match text. | [optional] 
**text** | **str** | Entity text as appears in the request. | [optional] 

## Example

```python
from openapi_client.models.match_record_v2dot1 import MatchRecordV2dot1

# TODO update the JSON string below
json = "{}"
# create an instance of MatchRecordV2dot1 from a JSON string
match_record_v2dot1_instance = MatchRecordV2dot1.from_json(json)
# print the JSON string representation of the object
print(MatchRecordV2dot1.to_json())

# convert the object into a dict
match_record_v2dot1_dict = match_record_v2dot1_instance.to_dict()
# create an instance of MatchRecordV2dot1 from a dict
match_record_v2dot1_from_dict = MatchRecordV2dot1.from_dict(match_record_v2dot1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


