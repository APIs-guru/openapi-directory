# ConnectionStateCreateOrUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** |  | 
**connection_state** | [**ConnectionState**](ConnectionState.md) |  | 

## Example

```python
from openapi_client.models.connection_state_create_or_update import ConnectionStateCreateOrUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionStateCreateOrUpdate from a JSON string
connection_state_create_or_update_instance = ConnectionStateCreateOrUpdate.from_json(json)
# print the JSON string representation of the object
print(ConnectionStateCreateOrUpdate.to_json())

# convert the object into a dict
connection_state_create_or_update_dict = connection_state_create_or_update_instance.to_dict()
# create an instance of ConnectionStateCreateOrUpdate from a dict
connection_state_create_or_update_from_dict = ConnectionStateCreateOrUpdate.from_dict(connection_state_create_or_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


