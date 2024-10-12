# ConnectivityStatusContract

Details about connectivity to a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Error details of the connectivity to the resource. | [optional] 
**last_status_change** | **datetime** | The date when the resource connectivity status last Changed from success to failure or vice-versa. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | 
**last_updated** | **datetime** | The date when the resource connectivity status was last updated. This status should be updated every 15 minutes. If this status has not been updated, then it means that the service has lost network connectivity to the resource, from inside the Virtual Network.The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard.  | 
**name** | **str** | The hostname of the resource which the service depends on. This can be the database, storage or any other azure resource on which the service depends upon. | 
**status** | **str** | Resource Connectivity Status Type identifier. | 

## Example

```python
from openapi_client.models.connectivity_status_contract import ConnectivityStatusContract

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectivityStatusContract from a JSON string
connectivity_status_contract_instance = ConnectivityStatusContract.from_json(json)
# print the JSON string representation of the object
print(ConnectivityStatusContract.to_json())

# convert the object into a dict
connectivity_status_contract_dict = connectivity_status_contract_instance.to_dict()
# create an instance of ConnectivityStatusContract from a dict
connectivity_status_contract_from_dict = ConnectivityStatusContract.from_dict(connectivity_status_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


