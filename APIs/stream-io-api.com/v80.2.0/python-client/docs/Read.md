# Read


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_read** | **datetime** |  | 
**last_read_message_id** | **str** |  | 
**unread_messages** | **int** |  | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.read import Read

# TODO update the JSON string below
json = "{}"
# create an instance of Read from a JSON string
read_instance = Read.from_json(json)
# print the JSON string representation of the object
print(Read.to_json())

# convert the object into a dict
read_dict = read_instance.to_dict()
# create an instance of Read from a dict
read_from_dict = Read.from_dict(read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


