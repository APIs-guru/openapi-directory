# DefaultErrorTemplate

This method either only returns a brief _not OK_ response or a verbose schema is not available for this method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.default_error_template import DefaultErrorTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultErrorTemplate from a JSON string
default_error_template_instance = DefaultErrorTemplate.from_json(json)
# print the JSON string representation of the object
print(DefaultErrorTemplate.to_json())

# convert the object into a dict
default_error_template_dict = default_error_template_instance.to_dict()
# create an instance of DefaultErrorTemplate from a dict
default_error_template_from_dict = DefaultErrorTemplate.from_dict(default_error_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


