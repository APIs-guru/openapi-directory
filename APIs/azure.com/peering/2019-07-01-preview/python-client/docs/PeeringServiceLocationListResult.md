# PeeringServiceLocationListResult

The paginated list of peering service locations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to fetch the next page of peering service locations. | [optional] 
**value** | [**List[PeeringServiceLocation]**](PeeringServiceLocation.md) | The list of peering service locations. | [optional] 

## Example

```python
from openapi_client.models.peering_service_location_list_result import PeeringServiceLocationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringServiceLocationListResult from a JSON string
peering_service_location_list_result_instance = PeeringServiceLocationListResult.from_json(json)
# print the JSON string representation of the object
print(PeeringServiceLocationListResult.to_json())

# convert the object into a dict
peering_service_location_list_result_dict = peering_service_location_list_result_instance.to_dict()
# create an instance of PeeringServiceLocationListResult from a dict
peering_service_location_list_result_from_dict = PeeringServiceLocationListResult.from_dict(peering_service_location_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


