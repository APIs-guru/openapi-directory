# CheckValidCredsResponse

A response indicating whether the credentials exist and are valid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_valid_creds** | **bool** | If set to &#x60;true&#x60;, the credentials exist and are valid. | [optional] 

## Example

```python
from openapi_client.models.check_valid_creds_response import CheckValidCredsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckValidCredsResponse from a JSON string
check_valid_creds_response_instance = CheckValidCredsResponse.from_json(json)
# print the JSON string representation of the object
print(CheckValidCredsResponse.to_json())

# convert the object into a dict
check_valid_creds_response_dict = check_valid_creds_response_instance.to_dict()
# create an instance of CheckValidCredsResponse from a dict
check_valid_creds_response_from_dict = CheckValidCredsResponse.from_dict(check_valid_creds_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


