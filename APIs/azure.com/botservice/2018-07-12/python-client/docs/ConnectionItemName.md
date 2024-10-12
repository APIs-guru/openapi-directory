# ConnectionItemName

The display name of a connection Item Setting registered with the Bot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Connection Item name that has been added in the API | [optional] [readonly] 

## Example

```python
from openapi_client.models.connection_item_name import ConnectionItemName

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionItemName from a JSON string
connection_item_name_instance = ConnectionItemName.from_json(json)
# print the JSON string representation of the object
print(ConnectionItemName.to_json())

# convert the object into a dict
connection_item_name_dict = connection_item_name_instance.to_dict()
# create an instance of ConnectionItemName from a dict
connection_item_name_from_dict = ConnectionItemName.from_dict(connection_item_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


