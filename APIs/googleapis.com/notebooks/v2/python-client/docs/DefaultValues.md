# DefaultValues

DefaultValues represents the default configuration values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_type** | **str** | Output only. The default machine type used by the backend if not provided by the user. | [optional] [readonly] 

## Example

```python
from openapi_client.models.default_values import DefaultValues

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultValues from a JSON string
default_values_instance = DefaultValues.from_json(json)
# print the JSON string representation of the object
print(DefaultValues.to_json())

# convert the object into a dict
default_values_dict = default_values_instance.to_dict()
# create an instance of DefaultValues from a dict
default_values_from_dict = DefaultValues.from_dict(default_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


