# ValidationResultProperties

The properties of the validation result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Result Code. | [optional] [readonly] 
**level** | **str** | Result Level. | [optional] [readonly] 
**message** | **str** | The validation message. | [optional] [readonly] 

## Example

```python
from openapi_client.models.validation_result_properties import ValidationResultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationResultProperties from a JSON string
validation_result_properties_instance = ValidationResultProperties.from_json(json)
# print the JSON string representation of the object
print(ValidationResultProperties.to_json())

# convert the object into a dict
validation_result_properties_dict = validation_result_properties_instance.to_dict()
# create an instance of ValidationResultProperties from a dict
validation_result_properties_from_dict = ValidationResultProperties.from_dict(validation_result_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


