# AddressResponse

Describes main public IP address and any extra virtual IPs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | AddressResponse resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.address_response import AddressResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddressResponse from a JSON string
address_response_instance = AddressResponse.from_json(json)
# print the JSON string representation of the object
print(AddressResponse.to_json())

# convert the object into a dict
address_response_dict = address_response_instance.to_dict()
# create an instance of AddressResponse from a dict
address_response_from_dict = AddressResponse.from_dict(address_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


