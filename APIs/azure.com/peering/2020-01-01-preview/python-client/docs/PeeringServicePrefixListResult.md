# PeeringServicePrefixListResult

The paginated list of peering service prefixes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to fetch the next page of peering service prefixes. | [optional] 
**value** | [**List[PeeringServicePrefix]**](PeeringServicePrefix.md) | The list of peering service prefixes. | [optional] 

## Example

```python
from openapi_client.models.peering_service_prefix_list_result import PeeringServicePrefixListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringServicePrefixListResult from a JSON string
peering_service_prefix_list_result_instance = PeeringServicePrefixListResult.from_json(json)
# print the JSON string representation of the object
print(PeeringServicePrefixListResult.to_json())

# convert the object into a dict
peering_service_prefix_list_result_dict = peering_service_prefix_list_result_instance.to_dict()
# create an instance of PeeringServicePrefixListResult from a dict
peering_service_prefix_list_result_from_dict = PeeringServicePrefixListResult.from_dict(peering_service_prefix_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


