# PeeringServiceListResult

The paginated list of peering services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to fetch the next page of peering services. | [optional] 
**value** | [**List[PeeringService]**](PeeringService.md) | The list of peering services. | [optional] 

## Example

```python
from openapi_client.models.peering_service_list_result import PeeringServiceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringServiceListResult from a JSON string
peering_service_list_result_instance = PeeringServiceListResult.from_json(json)
# print the JSON string representation of the object
print(PeeringServiceListResult.to_json())

# convert the object into a dict
peering_service_list_result_dict = peering_service_list_result_instance.to_dict()
# create an instance of PeeringServiceListResult from a dict
peering_service_list_result_from_dict = PeeringServiceListResult.from_dict(peering_service_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


