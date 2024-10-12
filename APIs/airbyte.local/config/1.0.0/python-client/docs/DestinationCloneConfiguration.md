# DestinationCloneConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_configuration** | **object** | The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition. | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.destination_clone_configuration import DestinationCloneConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationCloneConfiguration from a JSON string
destination_clone_configuration_instance = DestinationCloneConfiguration.from_json(json)
# print the JSON string representation of the object
print(DestinationCloneConfiguration.to_json())

# convert the object into a dict
destination_clone_configuration_dict = destination_clone_configuration_instance.to_dict()
# create an instance of DestinationCloneConfiguration from a dict
destination_clone_configuration_from_dict = DestinationCloneConfiguration.from_dict(destination_clone_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


