# DcimRackRolesList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[RackRole]**](RackRole.md) |  | 

## Example

```python
from openapi_client.models.dcim_rack_roles_list200_response import DcimRackRolesList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DcimRackRolesList200Response from a JSON string
dcim_rack_roles_list200_response_instance = DcimRackRolesList200Response.from_json(json)
# print the JSON string representation of the object
print(DcimRackRolesList200Response.to_json())

# convert the object into a dict
dcim_rack_roles_list200_response_dict = dcim_rack_roles_list200_response_instance.to_dict()
# create an instance of DcimRackRolesList200Response from a dict
dcim_rack_roles_list200_response_from_dict = DcimRackRolesList200Response.from_dict(dcim_rack_roles_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


