# MatchedLocation

Represents a possible match to a location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_exact_match** | **bool** | Is this an exact match? | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 

## Example

```python
from openapi_client.models.matched_location import MatchedLocation

# TODO update the JSON string below
json = "{}"
# create an instance of MatchedLocation from a JSON string
matched_location_instance = MatchedLocation.from_json(json)
# print the JSON string representation of the object
print(MatchedLocation.to_json())

# convert the object into a dict
matched_location_dict = matched_location_instance.to_dict()
# create an instance of MatchedLocation from a dict
matched_location_from_dict = MatchedLocation.from_dict(matched_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


