# TestIamPermissionsRequest

Request message for `TestIamPermissions` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | REQUIRED: The set of permissions to check for &#39;resource&#39;. Permissions with wildcards (such as &#39;*&#39;, &#39;spanner.*&#39;, &#39;spanner.instances.*&#39;) are not allowed. | [optional] 

## Example

```python
from openapi_client.models.test_iam_permissions_request import TestIamPermissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestIamPermissionsRequest from a JSON string
test_iam_permissions_request_instance = TestIamPermissionsRequest.from_json(json)
# print the JSON string representation of the object
print(TestIamPermissionsRequest.to_json())

# convert the object into a dict
test_iam_permissions_request_dict = test_iam_permissions_request_instance.to_dict()
# create an instance of TestIamPermissionsRequest from a dict
test_iam_permissions_request_from_dict = TestIamPermissionsRequest.from_dict(test_iam_permissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


