# Config

Response for getting WbI configurations in a location

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_images** | [**List[ImageRelease]**](ImageRelease.md) | Output only. The list of available images to create a WbI. | [optional] [readonly] 
**default_values** | [**DefaultValues**](DefaultValues.md) |  | [optional] 
**supported_values** | [**SupportedValues**](SupportedValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.config import Config

# TODO update the JSON string below
json = "{}"
# create an instance of Config from a JSON string
config_instance = Config.from_json(json)
# print the JSON string representation of the object
print(Config.to_json())

# convert the object into a dict
config_dict = config_instance.to_dict()
# create an instance of Config from a dict
config_from_dict = Config.from_dict(config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


