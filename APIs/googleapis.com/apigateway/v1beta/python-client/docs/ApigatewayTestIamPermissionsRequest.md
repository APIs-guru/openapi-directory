# ApigatewayTestIamPermissionsRequest

Request message for `TestIamPermissions` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | The set of permissions to check for the &#x60;resource&#x60;. Permissions with wildcards (such as &#x60;*&#x60; or &#x60;storage.*&#x60;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). | [optional] 

## Example

```python
from openapi_client.models.apigateway_test_iam_permissions_request import ApigatewayTestIamPermissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayTestIamPermissionsRequest from a JSON string
apigateway_test_iam_permissions_request_instance = ApigatewayTestIamPermissionsRequest.from_json(json)
# print the JSON string representation of the object
print(ApigatewayTestIamPermissionsRequest.to_json())

# convert the object into a dict
apigateway_test_iam_permissions_request_dict = apigateway_test_iam_permissions_request_instance.to_dict()
# create an instance of ApigatewayTestIamPermissionsRequest from a dict
apigateway_test_iam_permissions_request_from_dict = ApigatewayTestIamPermissionsRequest.from_dict(apigateway_test_iam_permissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


