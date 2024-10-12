# ConnectionSharedKeyResult

Response for CheckConnectionSharedKey API service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The virtual network connection shared key value | [optional] 

## Example

```python
from openapi_client.models.connection_shared_key_result import ConnectionSharedKeyResult

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionSharedKeyResult from a JSON string
connection_shared_key_result_instance = ConnectionSharedKeyResult.from_json(json)
# print the JSON string representation of the object
print(ConnectionSharedKeyResult.to_json())

# convert the object into a dict
connection_shared_key_result_dict = connection_shared_key_result_instance.to_dict()
# create an instance of ConnectionSharedKeyResult from a dict
connection_shared_key_result_from_dict = ConnectionSharedKeyResult.from_dict(connection_shared_key_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


