# UsaResolveAddressResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**UsaResolveAddressResponseResult**](UsaResolveAddressResponseResult.md) |  | 

## Example

```python
from openapi_client.models.usa_resolve_address_response import UsaResolveAddressResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UsaResolveAddressResponse from a JSON string
usa_resolve_address_response_instance = UsaResolveAddressResponse.from_json(json)
# print the JSON string representation of the object
print(UsaResolveAddressResponse.to_json())

# convert the object into a dict
usa_resolve_address_response_dict = usa_resolve_address_response_instance.to_dict()
# create an instance of UsaResolveAddressResponse from a dict
usa_resolve_address_response_from_dict = UsaResolveAddressResponse.from_dict(usa_resolve_address_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


