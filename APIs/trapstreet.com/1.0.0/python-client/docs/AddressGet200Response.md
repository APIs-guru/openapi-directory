# AddressGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**trap** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.address_get200_response import AddressGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AddressGet200Response from a JSON string
address_get200_response_instance = AddressGet200Response.from_json(json)
# print the JSON string representation of the object
print(AddressGet200Response.to_json())

# convert the object into a dict
address_get200_response_dict = address_get200_response_instance.to_dict()
# create an instance of AddressGet200Response from a dict
address_get200_response_from_dict = AddressGet200Response.from_dict(address_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


