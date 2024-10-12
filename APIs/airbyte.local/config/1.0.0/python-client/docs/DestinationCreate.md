# DestinationCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_configuration** | **object** | The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition. | 
**destination_definition_id** | **str** |  | 
**name** | **str** |  | 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.destination_create import DestinationCreate

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationCreate from a JSON string
destination_create_instance = DestinationCreate.from_json(json)
# print the JSON string representation of the object
print(DestinationCreate.to_json())

# convert the object into a dict
destination_create_dict = destination_create_instance.to_dict()
# create an instance of DestinationCreate from a dict
destination_create_from_dict = DestinationCreate.from_dict(destination_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


