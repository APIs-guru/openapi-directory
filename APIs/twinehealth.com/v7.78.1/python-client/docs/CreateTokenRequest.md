# CreateTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CreateTokenRequestData**](CreateTokenRequestData.md) |  | 

## Example

```python
from openapi_client.models.create_token_request import CreateTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTokenRequest from a JSON string
create_token_request_instance = CreateTokenRequest.from_json(json)
# print the JSON string representation of the object
print(CreateTokenRequest.to_json())

# convert the object into a dict
create_token_request_dict = create_token_request_instance.to_dict()
# create an instance of CreateTokenRequest from a dict
create_token_request_from_dict = CreateTokenRequest.from_dict(create_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


