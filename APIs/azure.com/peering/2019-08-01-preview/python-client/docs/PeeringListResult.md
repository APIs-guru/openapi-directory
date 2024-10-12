# PeeringListResult

The paginated list of peerings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to fetch the next page of peerings. | [optional] 
**value** | [**List[Peering]**](Peering.md) | The list of peerings. | [optional] 

## Example

```python
from openapi_client.models.peering_list_result import PeeringListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringListResult from a JSON string
peering_list_result_instance = PeeringListResult.from_json(json)
# print the JSON string representation of the object
print(PeeringListResult.to_json())

# convert the object into a dict
peering_list_result_dict = peering_list_result_instance.to_dict()
# create an instance of PeeringListResult from a dict
peering_list_result_from_dict = PeeringListResult.from_dict(peering_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


