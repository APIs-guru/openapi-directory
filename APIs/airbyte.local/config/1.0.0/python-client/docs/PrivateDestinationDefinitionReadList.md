# PrivateDestinationDefinitionReadList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_definitions** | [**List[PrivateDestinationDefinitionRead]**](PrivateDestinationDefinitionRead.md) |  | 

## Example

```python
from openapi_client.models.private_destination_definition_read_list import PrivateDestinationDefinitionReadList

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateDestinationDefinitionReadList from a JSON string
private_destination_definition_read_list_instance = PrivateDestinationDefinitionReadList.from_json(json)
# print the JSON string representation of the object
print(PrivateDestinationDefinitionReadList.to_json())

# convert the object into a dict
private_destination_definition_read_list_dict = private_destination_definition_read_list_instance.to_dict()
# create an instance of PrivateDestinationDefinitionReadList from a dict
private_destination_definition_read_list_from_dict = PrivateDestinationDefinitionReadList.from_dict(private_destination_definition_read_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


