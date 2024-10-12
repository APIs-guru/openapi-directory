# DestinationDefinitionReadList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_definitions** | [**List[DestinationDefinitionRead]**](DestinationDefinitionRead.md) |  | 

## Example

```python
from openapi_client.models.destination_definition_read_list import DestinationDefinitionReadList

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationDefinitionReadList from a JSON string
destination_definition_read_list_instance = DestinationDefinitionReadList.from_json(json)
# print the JSON string representation of the object
print(DestinationDefinitionReadList.to_json())

# convert the object into a dict
destination_definition_read_list_dict = destination_definition_read_list_instance.to_dict()
# create an instance of DestinationDefinitionReadList from a dict
destination_definition_read_list_from_dict = DestinationDefinitionReadList.from_dict(destination_definition_read_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


