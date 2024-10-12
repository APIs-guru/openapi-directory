# PatchServiceAccountRequest

The service account patch request. You can patch only the `display_name` and `description` fields. You must use the `update_mask` field to specify which of these fields you want to patch. Only the fields specified in the request are guaranteed to be returned in the response. Other fields may be empty in the response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_account** | [**ServiceAccount**](ServiceAccount.md) |  | [optional] 
**update_mask** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.patch_service_account_request import PatchServiceAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchServiceAccountRequest from a JSON string
patch_service_account_request_instance = PatchServiceAccountRequest.from_json(json)
# print the JSON string representation of the object
print(PatchServiceAccountRequest.to_json())

# convert the object into a dict
patch_service_account_request_dict = patch_service_account_request_instance.to_dict()
# create an instance of PatchServiceAccountRequest from a dict
patch_service_account_request_from_dict = PatchServiceAccountRequest.from_dict(patch_service_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


