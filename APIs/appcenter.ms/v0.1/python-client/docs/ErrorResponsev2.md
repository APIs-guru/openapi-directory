# ErrorResponsev2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**UsersGetUserMetadataDefaultResponseError**](UsersGetUserMetadataDefaultResponseError.md) |  | 

## Example

```python
from openapi_client.models.error_responsev2 import ErrorResponsev2

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorResponsev2 from a JSON string
error_responsev2_instance = ErrorResponsev2.from_json(json)
# print the JSON string representation of the object
print(ErrorResponsev2.to_json())

# convert the object into a dict
error_responsev2_dict = error_responsev2_instance.to_dict()
# create an instance of ErrorResponsev2 from a dict
error_responsev2_from_dict = ErrorResponsev2.from_dict(error_responsev2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


