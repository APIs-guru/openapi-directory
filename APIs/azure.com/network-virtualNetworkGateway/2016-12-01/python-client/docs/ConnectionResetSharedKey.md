# ConnectionResetSharedKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_length** | **int** | The virtual network connection reset shared key length, should between 1 and 128. | 

## Example

```python
from openapi_client.models.connection_reset_shared_key import ConnectionResetSharedKey

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionResetSharedKey from a JSON string
connection_reset_shared_key_instance = ConnectionResetSharedKey.from_json(json)
# print the JSON string representation of the object
print(ConnectionResetSharedKey.to_json())

# convert the object into a dict
connection_reset_shared_key_dict = connection_reset_shared_key_instance.to_dict()
# create an instance of ConnectionResetSharedKey from a dict
connection_reset_shared_key_from_dict = ConnectionResetSharedKey.from_dict(connection_reset_shared_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


