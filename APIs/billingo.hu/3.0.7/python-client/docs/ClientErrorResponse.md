# ClientErrorResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ClientError**](ClientError.md) |  | [optional] 

## Example

```python
from openapi_client.models.client_error_response import ClientErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ClientErrorResponse from a JSON string
client_error_response_instance = ClientErrorResponse.from_json(json)
# print the JSON string representation of the object
print(ClientErrorResponse.to_json())

# convert the object into a dict
client_error_response_dict = client_error_response_instance.to_dict()
# create an instance of ClientErrorResponse from a dict
client_error_response_from_dict = ClientErrorResponse.from_dict(client_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


