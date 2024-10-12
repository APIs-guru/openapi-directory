# TestIamPermissionsResponse

Response message for `TestIamPermissions` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | A subset of &#x60;TestPermissionsRequest.permissions&#x60; that the caller is allowed. | [optional] 

## Example

```python
from openapi_client.models.test_iam_permissions_response import TestIamPermissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TestIamPermissionsResponse from a JSON string
test_iam_permissions_response_instance = TestIamPermissionsResponse.from_json(json)
# print the JSON string representation of the object
print(TestIamPermissionsResponse.to_json())

# convert the object into a dict
test_iam_permissions_response_dict = test_iam_permissions_response_instance.to_dict()
# create an instance of TestIamPermissionsResponse from a dict
test_iam_permissions_response_from_dict = TestIamPermissionsResponse.from_dict(test_iam_permissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


