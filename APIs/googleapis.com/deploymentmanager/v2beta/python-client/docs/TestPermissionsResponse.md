# TestPermissionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | **List[str]** | A subset of &#x60;TestPermissionsRequest.permissions&#x60; that the caller is allowed. | [optional] 

## Example

```python
from openapi_client.models.test_permissions_response import TestPermissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TestPermissionsResponse from a JSON string
test_permissions_response_instance = TestPermissionsResponse.from_json(json)
# print the JSON string representation of the object
print(TestPermissionsResponse.to_json())

# convert the object into a dict
test_permissions_response_dict = test_permissions_response_instance.to_dict()
# create an instance of TestPermissionsResponse from a dict
test_permissions_response_from_dict = TestPermissionsResponse.from_dict(test_permissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


