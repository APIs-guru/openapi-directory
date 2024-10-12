# SourceCloneConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_configuration** | **object** | The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source. | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.source_clone_configuration import SourceCloneConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of SourceCloneConfiguration from a JSON string
source_clone_configuration_instance = SourceCloneConfiguration.from_json(json)
# print the JSON string representation of the object
print(SourceCloneConfiguration.to_json())

# convert the object into a dict
source_clone_configuration_dict = source_clone_configuration_instance.to_dict()
# create an instance of SourceCloneConfiguration from a dict
source_clone_configuration_from_dict = SourceCloneConfiguration.from_dict(source_clone_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


