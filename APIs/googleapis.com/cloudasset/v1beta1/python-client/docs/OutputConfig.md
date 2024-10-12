# OutputConfig

Output configuration for export assets destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_destination** | [**GcsDestination**](GcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.output_config import OutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OutputConfig from a JSON string
output_config_instance = OutputConfig.from_json(json)
# print the JSON string representation of the object
print(OutputConfig.to_json())

# convert the object into a dict
output_config_dict = output_config_instance.to_dict()
# create an instance of OutputConfig from a dict
output_config_from_dict = OutputConfig.from_dict(output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


