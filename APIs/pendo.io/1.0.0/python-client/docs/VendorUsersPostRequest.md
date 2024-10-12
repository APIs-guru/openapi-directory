# VendorUsersPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**external_id** | **str** |  | [optional] 
**full_name** | **str** |  | [optional] 
**permission_group_id** | **float** |  | [optional] 
**team** | **str** | A comma seperated list of teams the user belongs to | [optional] 

## Example

```python
from openapi_client.models.vendor_users_post_request import VendorUsersPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VendorUsersPostRequest from a JSON string
vendor_users_post_request_instance = VendorUsersPostRequest.from_json(json)
# print the JSON string representation of the object
print(VendorUsersPostRequest.to_json())

# convert the object into a dict
vendor_users_post_request_dict = vendor_users_post_request_instance.to_dict()
# create an instance of VendorUsersPostRequest from a dict
vendor_users_post_request_from_dict = VendorUsersPostRequest.from_dict(vendor_users_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


