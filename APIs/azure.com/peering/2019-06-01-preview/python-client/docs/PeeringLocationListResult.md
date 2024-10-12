# PeeringLocationListResult

The paginated list of peering locations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to fetch the next page of peering locations. | [optional] 
**value** | [**List[PeeringLocation]**](PeeringLocation.md) | The list of peering locations. | [optional] 

## Example

```python
from openapi_client.models.peering_location_list_result import PeeringLocationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringLocationListResult from a JSON string
peering_location_list_result_instance = PeeringLocationListResult.from_json(json)
# print the JSON string representation of the object
print(PeeringLocationListResult.to_json())

# convert the object into a dict
peering_location_list_result_dict = peering_location_list_result_instance.to_dict()
# create an instance of PeeringLocationListResult from a dict
peering_location_list_result_from_dict = PeeringLocationListResult.from_dict(peering_location_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


