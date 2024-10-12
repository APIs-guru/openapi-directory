# CreateAccessKeyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | [**AccessKeyListResponseAccessKeysInner**](AccessKeyListResponseAccessKeysInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_access_key_response import CreateAccessKeyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAccessKeyResponse from a JSON string
create_access_key_response_instance = CreateAccessKeyResponse.from_json(json)
# print the JSON string representation of the object
print(CreateAccessKeyResponse.to_json())

# convert the object into a dict
create_access_key_response_dict = create_access_key_response_instance.to_dict()
# create an instance of CreateAccessKeyResponse from a dict
create_access_key_response_from_dict = CreateAccessKeyResponse.from_dict(create_access_key_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


