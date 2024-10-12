# PrivateDestinationDefinitionRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_definition** | [**DestinationDefinitionRead**](DestinationDefinitionRead.md) |  | 
**granted** | **bool** |  | 

## Example

```python
from openapi_client.models.private_destination_definition_read import PrivateDestinationDefinitionRead

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateDestinationDefinitionRead from a JSON string
private_destination_definition_read_instance = PrivateDestinationDefinitionRead.from_json(json)
# print the JSON string representation of the object
print(PrivateDestinationDefinitionRead.to_json())

# convert the object into a dict
private_destination_definition_read_dict = private_destination_definition_read_instance.to_dict()
# create an instance of PrivateDestinationDefinitionRead from a dict
private_destination_definition_read_from_dict = PrivateDestinationDefinitionRead.from_dict(private_destination_definition_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


