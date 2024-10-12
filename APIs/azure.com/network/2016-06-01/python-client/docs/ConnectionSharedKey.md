# ConnectionSharedKey

Response for GetConnectionSharedKey Api service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The virtual network connection shared key value | [optional] 

## Example

```python
from openapi_client.models.connection_shared_key import ConnectionSharedKey

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionSharedKey from a JSON string
connection_shared_key_instance = ConnectionSharedKey.from_json(json)
# print the JSON string representation of the object
print(ConnectionSharedKey.to_json())

# convert the object into a dict
connection_shared_key_dict = connection_shared_key_instance.to_dict()
# create an instance of ConnectionSharedKey from a dict
connection_shared_key_from_dict = ConnectionSharedKey.from_dict(connection_shared_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


