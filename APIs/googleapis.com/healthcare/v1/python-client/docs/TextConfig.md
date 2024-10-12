# TextConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_transformations** | [**List[InfoTypeTransformation]**](InfoTypeTransformation.md) | Transformations to apply to the detected data, overridden by &#x60;exclude_info_types&#x60;. | [optional] 
**exclude_info_types** | **List[str]** | InfoTypes to skip transforming, overriding &#x60;additional_transformations&#x60;. | [optional] 
**transformations** | [**List[InfoTypeTransformation]**](InfoTypeTransformation.md) | The transformations to apply to the detected data. Deprecated. Use &#x60;additional_transformations&#x60; instead. | [optional] 

## Example

```python
from openapi_client.models.text_config import TextConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TextConfig from a JSON string
text_config_instance = TextConfig.from_json(json)
# print the JSON string representation of the object
print(TextConfig.to_json())

# convert the object into a dict
text_config_dict = text_config_instance.to_dict()
# create an instance of TextConfig from a dict
text_config_from_dict = TextConfig.from_dict(text_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


