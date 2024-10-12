# TestPermissionsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | The set of permissions to check for the &#39;resource&#39;. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. | [optional] 

## Example

```python
from openapi_client.models.test_permissions_request import TestPermissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestPermissionsRequest from a JSON string
test_permissions_request_instance = TestPermissionsRequest.from_json(json)
# print the JSON string representation of the object
print(TestPermissionsRequest.to_json())

# convert the object into a dict
test_permissions_request_dict = test_permissions_request_instance.to_dict()
# create an instance of TestPermissionsRequest from a dict
test_permissions_request_from_dict = TestPermissionsRequest.from_dict(test_permissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


