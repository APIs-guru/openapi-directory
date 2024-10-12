# PatchChargeStation200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**ok** | **bool** |  | [optional] 
**result** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.patch_charge_station200_response import PatchChargeStation200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PatchChargeStation200Response from a JSON string
patch_charge_station200_response_instance = PatchChargeStation200Response.from_json(json)
# print the JSON string representation of the object
print(PatchChargeStation200Response.to_json())

# convert the object into a dict
patch_charge_station200_response_dict = patch_charge_station200_response_instance.to_dict()
# create an instance of PatchChargeStation200Response from a dict
patch_charge_station200_response_from_dict = PatchChargeStation200Response.from_dict(patch_charge_station200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


