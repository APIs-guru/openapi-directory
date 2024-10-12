# PeeringRegisteredAsnListResult

The paginated list of peering registered ASNs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to fetch the next page of peering registered ASNs. | [optional] 
**value** | [**List[PeeringRegisteredAsn]**](PeeringRegisteredAsn.md) | The list of peering registered ASNs. | [optional] 

## Example

```python
from openapi_client.models.peering_registered_asn_list_result import PeeringRegisteredAsnListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringRegisteredAsnListResult from a JSON string
peering_registered_asn_list_result_instance = PeeringRegisteredAsnListResult.from_json(json)
# print the JSON string representation of the object
print(PeeringRegisteredAsnListResult.to_json())

# convert the object into a dict
peering_registered_asn_list_result_dict = peering_registered_asn_list_result_instance.to_dict()
# create an instance of PeeringRegisteredAsnListResult from a dict
peering_registered_asn_list_result_from_dict = PeeringRegisteredAsnListResult.from_dict(peering_registered_asn_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


