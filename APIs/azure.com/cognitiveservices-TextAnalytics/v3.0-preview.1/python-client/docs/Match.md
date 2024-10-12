# Match


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**length** | **int** | Length (in Unicode characters) for the entity match text. | 
**offset** | **int** | Start position (in Unicode characters) for the entity match text. | 
**score** | **float** | If a well-known item is recognized, a decimal number denoting the confidence level between 0 and 1 will be returned. | 
**text** | **str** | Entity text as appears in the request. | 

## Example

```python
from openapi_client.models.match import Match

# TODO update the JSON string below
json = "{}"
# create an instance of Match from a JSON string
match_instance = Match.from_json(json)
# print the JSON string representation of the object
print(Match.to_json())

# convert the object into a dict
match_dict = match_instance.to_dict()
# create an instance of Match from a dict
match_from_dict = Match.from_dict(match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


