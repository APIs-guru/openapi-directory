# PeeringRegisteredPrefixListResult

The paginated list of peering registered prefixes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to fetch the next page of peering registered prefixes. | [optional] 
**value** | [**List[PeeringRegisteredPrefix]**](PeeringRegisteredPrefix.md) | The list of peering registered prefixes. | [optional] 

## Example

```python
from openapi_client.models.peering_registered_prefix_list_result import PeeringRegisteredPrefixListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringRegisteredPrefixListResult from a JSON string
peering_registered_prefix_list_result_instance = PeeringRegisteredPrefixListResult.from_json(json)
# print the JSON string representation of the object
print(PeeringRegisteredPrefixListResult.to_json())

# convert the object into a dict
peering_registered_prefix_list_result_dict = peering_registered_prefix_list_result_instance.to_dict()
# create an instance of PeeringRegisteredPrefixListResult from a dict
peering_registered_prefix_list_result_from_dict = PeeringRegisteredPrefixListResult.from_dict(peering_registered_prefix_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


