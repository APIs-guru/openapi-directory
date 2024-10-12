# CustomSourceLocation

Identifies the location of a custom souce.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stateful** | **bool** | Whether this source is stateful. | [optional] 

## Example

```python
from openapi_client.models.custom_source_location import CustomSourceLocation

# TODO update the JSON string below
json = "{}"
# create an instance of CustomSourceLocation from a JSON string
custom_source_location_instance = CustomSourceLocation.from_json(json)
# print the JSON string representation of the object
print(CustomSourceLocation.to_json())

# convert the object into a dict
custom_source_location_dict = custom_source_location_instance.to_dict()
# create an instance of CustomSourceLocation from a dict
custom_source_location_from_dict = CustomSourceLocation.from_dict(custom_source_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


