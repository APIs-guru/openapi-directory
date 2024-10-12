# ConnectionError

Connection error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.connection_error import ConnectionError

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionError from a JSON string
connection_error_instance = ConnectionError.from_json(json)
# print the JSON string representation of the object
print(ConnectionError.to_json())

# convert the object into a dict
connection_error_dict = connection_error_instance.to_dict()
# create an instance of ConnectionError from a dict
connection_error_from_dict = ConnectionError.from_dict(connection_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


