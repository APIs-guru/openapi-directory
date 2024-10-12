# ResourceValueConfigMetadata

Metadata about a ResourceValueConfig. For example, id and name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Resource value config name | [optional] 

## Example

```python
from openapi_client.models.resource_value_config_metadata import ResourceValueConfigMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceValueConfigMetadata from a JSON string
resource_value_config_metadata_instance = ResourceValueConfigMetadata.from_json(json)
# print the JSON string representation of the object
print(ResourceValueConfigMetadata.to_json())

# convert the object into a dict
resource_value_config_metadata_dict = resource_value_config_metadata_instance.to_dict()
# create an instance of ResourceValueConfigMetadata from a dict
resource_value_config_metadata_from_dict = ResourceValueConfigMetadata.from_dict(resource_value_config_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


