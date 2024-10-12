# InputConfig

The input content

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**GcsSource**](GcsSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.input_config import InputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InputConfig from a JSON string
input_config_instance = InputConfig.from_json(json)
# print the JSON string representation of the object
print(InputConfig.to_json())

# convert the object into a dict
input_config_dict = input_config_instance.to_dict()
# create an instance of InputConfig from a dict
input_config_from_dict = InputConfig.from_dict(input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


