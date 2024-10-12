# CustomHttpPattern

A custom pattern is used for defining custom HTTP verb.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The name of this custom HTTP verb. | [optional] 
**path** | **str** | The path matched by this custom verb. | [optional] 

## Example

```python
from openapi_client.models.custom_http_pattern import CustomHttpPattern

# TODO update the JSON string below
json = "{}"
# create an instance of CustomHttpPattern from a JSON string
custom_http_pattern_instance = CustomHttpPattern.from_json(json)
# print the JSON string representation of the object
print(CustomHttpPattern.to_json())

# convert the object into a dict
custom_http_pattern_dict = custom_http_pattern_instance.to_dict()
# create an instance of CustomHttpPattern from a dict
custom_http_pattern_from_dict = CustomHttpPattern.from_dict(custom_http_pattern_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


