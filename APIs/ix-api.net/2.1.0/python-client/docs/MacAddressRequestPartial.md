# MacAddressRequestPartial

MAC-Address Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Unicast MAC address, formatted hexadecimal values with colons.  | [optional] 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 
**valid_not_after** | **datetime** |  | [optional] 
**valid_not_before** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.mac_address_request_partial import MacAddressRequestPartial

# TODO update the JSON string below
json = "{}"
# create an instance of MacAddressRequestPartial from a JSON string
mac_address_request_partial_instance = MacAddressRequestPartial.from_json(json)
# print the JSON string representation of the object
print(MacAddressRequestPartial.to_json())

# convert the object into a dict
mac_address_request_partial_dict = mac_address_request_partial_instance.to_dict()
# create an instance of MacAddressRequestPartial from a dict
mac_address_request_partial_from_dict = MacAddressRequestPartial.from_dict(mac_address_request_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


