# PatchLocationRequestAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**postal_code** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**street_and_number** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.patch_location_request_address import PatchLocationRequestAddress

# TODO update the JSON string below
json = "{}"
# create an instance of PatchLocationRequestAddress from a JSON string
patch_location_request_address_instance = PatchLocationRequestAddress.from_json(json)
# print the JSON string representation of the object
print(PatchLocationRequestAddress.to_json())

# convert the object into a dict
patch_location_request_address_dict = patch_location_request_address_instance.to_dict()
# create an instance of PatchLocationRequestAddress from a dict
patch_location_request_address_from_dict = PatchLocationRequestAddress.from_dict(patch_location_request_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


