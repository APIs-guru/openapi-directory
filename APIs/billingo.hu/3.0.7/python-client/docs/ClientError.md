# ClientError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.client_error import ClientError

# TODO update the JSON string below
json = "{}"
# create an instance of ClientError from a JSON string
client_error_instance = ClientError.from_json(json)
# print the JSON string representation of the object
print(ClientError.to_json())

# convert the object into a dict
client_error_dict = client_error_instance.to_dict()
# create an instance of ClientError from a dict
client_error_from_dict = ClientError.from_dict(client_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


