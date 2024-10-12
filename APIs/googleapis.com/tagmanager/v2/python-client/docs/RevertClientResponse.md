# RevertClientResponse

The result of reverting a client in a workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client** | [**Client**](Client.md) |  | [optional] 

## Example

```python
from openapi_client.models.revert_client_response import RevertClientResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RevertClientResponse from a JSON string
revert_client_response_instance = RevertClientResponse.from_json(json)
# print the JSON string representation of the object
print(RevertClientResponse.to_json())

# convert the object into a dict
revert_client_response_dict = revert_client_response_instance.to_dict()
# create an instance of RevertClientResponse from a dict
revert_client_response_from_dict = RevertClientResponse.from_dict(revert_client_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


