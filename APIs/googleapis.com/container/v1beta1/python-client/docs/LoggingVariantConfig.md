# LoggingVariantConfig

LoggingVariantConfig specifies the behaviour of the logging component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**variant** | **str** | Logging variant deployed on nodes. | [optional] 

## Example

```python
from openapi_client.models.logging_variant_config import LoggingVariantConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LoggingVariantConfig from a JSON string
logging_variant_config_instance = LoggingVariantConfig.from_json(json)
# print the JSON string representation of the object
print(LoggingVariantConfig.to_json())

# convert the object into a dict
logging_variant_config_dict = logging_variant_config_instance.to_dict()
# create an instance of LoggingVariantConfig from a dict
logging_variant_config_from_dict = LoggingVariantConfig.from_dict(logging_variant_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


