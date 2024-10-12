# CustomDestinationDefinitionCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_definition** | [**DestinationDefinitionCreate**](DestinationDefinitionCreate.md) |  | 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.custom_destination_definition_create import CustomDestinationDefinitionCreate

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDestinationDefinitionCreate from a JSON string
custom_destination_definition_create_instance = CustomDestinationDefinitionCreate.from_json(json)
# print the JSON string representation of the object
print(CustomDestinationDefinitionCreate.to_json())

# convert the object into a dict
custom_destination_definition_create_dict = custom_destination_definition_create_instance.to_dict()
# create an instance of CustomDestinationDefinitionCreate from a dict
custom_destination_definition_create_from_dict = CustomDestinationDefinitionCreate.from_dict(custom_destination_definition_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


