# DestinationReadList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinations** | [**List[DestinationRead]**](DestinationRead.md) |  | 

## Example

```python
from openapi_client.models.destination_read_list import DestinationReadList

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationReadList from a JSON string
destination_read_list_instance = DestinationReadList.from_json(json)
# print the JSON string representation of the object
print(DestinationReadList.to_json())

# convert the object into a dict
destination_read_list_dict = destination_read_list_instance.to_dict()
# create an instance of DestinationReadList from a dict
destination_read_list_from_dict = DestinationReadList.from_dict(destination_read_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


