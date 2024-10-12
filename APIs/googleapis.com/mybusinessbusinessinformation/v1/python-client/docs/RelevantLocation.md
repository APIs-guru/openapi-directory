# RelevantLocation

Information about another location that is related to current one. The relation can be any one of DEPARTMENT_OF or INDEPENDENT_ESTABLISHMENT_OF, and the location specified here can be on either side (parent/child) of the location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**place_id** | **str** | Required. Specify the location that is on the other side of the relation by its placeID. | [optional] 
**relation_type** | **str** | Required. The type of the relationship. | [optional] 

## Example

```python
from openapi_client.models.relevant_location import RelevantLocation

# TODO update the JSON string below
json = "{}"
# create an instance of RelevantLocation from a JSON string
relevant_location_instance = RelevantLocation.from_json(json)
# print the JSON string representation of the object
print(RelevantLocation.to_json())

# convert the object into a dict
relevant_location_dict = relevant_location_instance.to_dict()
# create an instance of RelevantLocation from a dict
relevant_location_from_dict = RelevantLocation.from_dict(relevant_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


