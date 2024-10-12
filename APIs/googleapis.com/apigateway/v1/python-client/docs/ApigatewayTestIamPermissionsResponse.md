# ApigatewayTestIamPermissionsResponse

Response message for `TestIamPermissions` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | A subset of &#x60;TestPermissionsRequest.permissions&#x60; that the caller is allowed. | [optional] 

## Example

```python
from openapi_client.models.apigateway_test_iam_permissions_response import ApigatewayTestIamPermissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayTestIamPermissionsResponse from a JSON string
apigateway_test_iam_permissions_response_instance = ApigatewayTestIamPermissionsResponse.from_json(json)
# print the JSON string representation of the object
print(ApigatewayTestIamPermissionsResponse.to_json())

# convert the object into a dict
apigateway_test_iam_permissions_response_dict = apigateway_test_iam_permissions_response_instance.to_dict()
# create an instance of ApigatewayTestIamPermissionsResponse from a dict
apigateway_test_iam_permissions_response_from_dict = ApigatewayTestIamPermissionsResponse.from_dict(apigateway_test_iam_permissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


