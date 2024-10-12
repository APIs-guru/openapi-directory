# DefaultSuccessTemplate

This method either only returns a brief _OK_ response or a verbose schema is not available for this method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.default_success_template import DefaultSuccessTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultSuccessTemplate from a JSON string
default_success_template_instance = DefaultSuccessTemplate.from_json(json)
# print the JSON string representation of the object
print(DefaultSuccessTemplate.to_json())

# convert the object into a dict
default_success_template_dict = default_success_template_instance.to_dict()
# create an instance of DefaultSuccessTemplate from a dict
default_success_template_from_dict = DefaultSuccessTemplate.from_dict(default_success_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


