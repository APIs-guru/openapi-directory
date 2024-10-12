# PeeringServiceProviderListResult

The paginated list of peering service providers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to fetch the next page of peering service providers. | [optional] 
**value** | [**List[PeeringServiceProvider]**](PeeringServiceProvider.md) | The list of peering service providers. | [optional] 

## Example

```python
from openapi_client.models.peering_service_provider_list_result import PeeringServiceProviderListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringServiceProviderListResult from a JSON string
peering_service_provider_list_result_instance = PeeringServiceProviderListResult.from_json(json)
# print the JSON string representation of the object
print(PeeringServiceProviderListResult.to_json())

# convert the object into a dict
peering_service_provider_list_result_dict = peering_service_provider_list_result_instance.to_dict()
# create an instance of PeeringServiceProviderListResult from a dict
peering_service_provider_list_result_from_dict = PeeringServiceProviderListResult.from_dict(peering_service_provider_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


