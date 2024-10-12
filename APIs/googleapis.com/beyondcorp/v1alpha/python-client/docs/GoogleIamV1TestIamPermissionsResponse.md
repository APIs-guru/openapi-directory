# GoogleIamV1TestIamPermissionsResponse

Response message for `TestIamPermissions` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | A subset of &#x60;TestPermissionsRequest.permissions&#x60; that the caller is allowed. | [optional] 

## Example

```python
from openapi_client.models.google_iam_v1_test_iam_permissions_response import GoogleIamV1TestIamPermissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamV1TestIamPermissionsResponse from a JSON string
google_iam_v1_test_iam_permissions_response_instance = GoogleIamV1TestIamPermissionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleIamV1TestIamPermissionsResponse.to_json())

# convert the object into a dict
google_iam_v1_test_iam_permissions_response_dict = google_iam_v1_test_iam_permissions_response_instance.to_dict()
# create an instance of GoogleIamV1TestIamPermissionsResponse from a dict
google_iam_v1_test_iam_permissions_response_from_dict = GoogleIamV1TestIamPermissionsResponse.from_dict(google_iam_v1_test_iam_permissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


