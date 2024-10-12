# DestinationRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_configuration** | **object** | The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition. | 
**destination_definition_id** | **str** |  | 
**destination_id** | **str** |  | 
**destination_name** | **str** |  | 
**icon** | **str** |  | [optional] 
**name** | **str** |  | 
**workspace_id** | **str** |  | 

## Example

```python
from openapi_client.models.destination_read import DestinationRead

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationRead from a JSON string
destination_read_instance = DestinationRead.from_json(json)
# print the JSON string representation of the object
print(DestinationRead.to_json())

# convert the object into a dict
destination_read_dict = destination_read_instance.to_dict()
# create an instance of DestinationRead from a dict
destination_read_from_dict = DestinationRead.from_dict(destination_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


