# DestinationUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_configuration** | **object** | The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition. | 
**destination_id** | **str** |  | 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.destination_update import DestinationUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationUpdate from a JSON string
destination_update_instance = DestinationUpdate.from_json(json)
# print the JSON string representation of the object
print(DestinationUpdate.to_json())

# convert the object into a dict
destination_update_dict = destination_update_instance.to_dict()
# create an instance of DestinationUpdate from a dict
destination_update_from_dict = DestinationUpdate.from_dict(destination_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


