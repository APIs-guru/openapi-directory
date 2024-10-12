# PatchDriverRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [optional] 
**address** | [**PostDriversRequestAddress**](PostDriversRequestAddress.md) |  | [optional] 
**email** | **str** |  | [optional] 
**firstname** | **str** |  | [optional] 
**lastname** | **str** |  | [optional] 
**phone** | [**PostDriversRequestPhone**](PostDriversRequestPhone.md) |  | [optional] 
**source** | **str** |  | [optional] 
**tokens** | **List[object]** |  | [optional] 

## Example

```python
from openapi_client.models.patch_driver_request import PatchDriverRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchDriverRequest from a JSON string
patch_driver_request_instance = PatchDriverRequest.from_json(json)
# print the JSON string representation of the object
print(PatchDriverRequest.to_json())

# convert the object into a dict
patch_driver_request_dict = patch_driver_request_instance.to_dict()
# create an instance of PatchDriverRequest from a dict
patch_driver_request_from_dict = PatchDriverRequest.from_dict(patch_driver_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


