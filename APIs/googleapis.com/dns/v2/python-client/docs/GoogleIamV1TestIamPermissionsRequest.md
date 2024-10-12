# GoogleIamV1TestIamPermissionsRequest

Request message for `TestIamPermissions` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | The set of permissions to check for the &#x60;resource&#x60;. Permissions with wildcards (such as &#x60;*&#x60; or &#x60;storage.*&#x60;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). | [optional] 

## Example

```python
from openapi_client.models.google_iam_v1_test_iam_permissions_request import GoogleIamV1TestIamPermissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamV1TestIamPermissionsRequest from a JSON string
google_iam_v1_test_iam_permissions_request_instance = GoogleIamV1TestIamPermissionsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleIamV1TestIamPermissionsRequest.to_json())

# convert the object into a dict
google_iam_v1_test_iam_permissions_request_dict = google_iam_v1_test_iam_permissions_request_instance.to_dict()
# create an instance of GoogleIamV1TestIamPermissionsRequest from a dict
google_iam_v1_test_iam_permissions_request_from_dict = GoogleIamV1TestIamPermissionsRequest.from_dict(google_iam_v1_test_iam_permissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


