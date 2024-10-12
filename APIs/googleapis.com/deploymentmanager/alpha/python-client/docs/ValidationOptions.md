# ValidationOptions

Options for how to validate and process properties on a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema_validation** | **str** | Customize how deployment manager will validate the resource against schema errors. | [optional] 
**undeclared_properties** | **str** | Specify what to do with extra properties when executing a request. | [optional] 

## Example

```python
from openapi_client.models.validation_options import ValidationOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationOptions from a JSON string
validation_options_instance = ValidationOptions.from_json(json)
# print the JSON string representation of the object
print(ValidationOptions.to_json())

# convert the object into a dict
validation_options_dict = validation_options_instance.to_dict()
# create an instance of ValidationOptions from a dict
validation_options_from_dict = ValidationOptions.from_dict(validation_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


