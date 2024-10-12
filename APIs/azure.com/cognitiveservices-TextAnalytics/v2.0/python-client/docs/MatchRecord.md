# MatchRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**length** | **int** | Length (in Unicode characters) for the entity match text. | [optional] 
**offset** | **int** | Start position (in Unicode characters) for the entity match text. | [optional] 
**text** | **str** | Entity text as appears in the request. | [optional] 

## Example

```python
from openapi_client.models.match_record import MatchRecord

# TODO update the JSON string below
json = "{}"
# create an instance of MatchRecord from a JSON string
match_record_instance = MatchRecord.from_json(json)
# print the JSON string representation of the object
print(MatchRecord.to_json())

# convert the object into a dict
match_record_dict = match_record_instance.to_dict()
# create an instance of MatchRecord from a dict
match_record_from_dict = MatchRecord.from_dict(match_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


