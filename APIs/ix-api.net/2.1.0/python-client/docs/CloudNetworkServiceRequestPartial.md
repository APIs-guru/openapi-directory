# CloudNetworkServiceRequestPartial

Cloud Network Service Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | An account requires billing_information to be used as a &#x60;billing_account&#x60;. | [optional] 
**capacity** | **int** | The capacity of the service in Mbps. When null, the maximum capacity will be used. | [optional] 
**cloud_key** | **str** |  | [optional] 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | [optional] 
**contract_ref** | **str** | A reference to a contract. If no specific contract is used, a default MAY be chosen by the implementer.  | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 
**product_offering** | **str** |  | [optional] 
**purchase_order** | **str** | Purchase Order ID which will be displayed on the invoice.  | [optional] [default to '']
**type** | **str** |  | 

## Example

```python
from openapi_client.models.cloud_network_service_request_partial import CloudNetworkServiceRequestPartial

# TODO update the JSON string below
json = "{}"
# create an instance of CloudNetworkServiceRequestPartial from a JSON string
cloud_network_service_request_partial_instance = CloudNetworkServiceRequestPartial.from_json(json)
# print the JSON string representation of the object
print(CloudNetworkServiceRequestPartial.to_json())

# convert the object into a dict
cloud_network_service_request_partial_dict = cloud_network_service_request_partial_instance.to_dict()
# create an instance of CloudNetworkServiceRequestPartial from a dict
cloud_network_service_request_partial_from_dict = CloudNetworkServiceRequestPartial.from_dict(cloud_network_service_request_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


