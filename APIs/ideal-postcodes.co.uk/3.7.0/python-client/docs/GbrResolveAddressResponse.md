# GbrResolveAddressResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**GbrResolveAddressResponseResult**](GbrResolveAddressResponseResult.md) |  | 

## Example

```python
from openapi_client.models.gbr_resolve_address_response import GbrResolveAddressResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GbrResolveAddressResponse from a JSON string
gbr_resolve_address_response_instance = GbrResolveAddressResponse.from_json(json)
# print the JSON string representation of the object
print(GbrResolveAddressResponse.to_json())

# convert the object into a dict
gbr_resolve_address_response_dict = gbr_resolve_address_response_instance.to_dict()
# create an instance of GbrResolveAddressResponse from a dict
gbr_resolve_address_response_from_dict = GbrResolveAddressResponse.from_dict(gbr_resolve_address_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


