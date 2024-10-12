# NetworkStatusContractByLocation

Network Status in the Location

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of service | [optional] 
**network_status** | [**NetworkStatusContract**](NetworkStatusContract.md) |  | [optional] 

## Example

```python
from openapi_client.models.network_status_contract_by_location import NetworkStatusContractByLocation

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkStatusContractByLocation from a JSON string
network_status_contract_by_location_instance = NetworkStatusContractByLocation.from_json(json)
# print the JSON string representation of the object
print(NetworkStatusContractByLocation.to_json())

# convert the object into a dict
network_status_contract_by_location_dict = network_status_contract_by_location_instance.to_dict()
# create an instance of NetworkStatusContractByLocation from a dict
network_status_contract_by_location_from_dict = NetworkStatusContractByLocation.from_dict(network_status_contract_by_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


