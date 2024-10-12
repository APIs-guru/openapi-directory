# ObjectOptions

The options for an object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_options** | [**ObjectDisplayOptions**](ObjectDisplayOptions.md) |  | [optional] 
**freshness_options** | [**FreshnessOptions**](FreshnessOptions.md) |  | [optional] 
**suggestion_filtering_operators** | **List[str]** | Operators that can be used to filter suggestions. For Suggest API, only operators mentioned here will be honored in the FilterOptions. Only TEXT and ENUM operators are supported. NOTE: \&quot;objecttype\&quot;, \&quot;type\&quot; and \&quot;mimetype\&quot; are already supported. This property is to configure schema specific operators. Even though this is an array, only one operator can be specified. This is an array for future extensibility. Operators mapping to multiple properties within the same object are not supported. If the operator spans across different object types, this option has to be set once for each object definition. | [optional] 

## Example

```python
from openapi_client.models.object_options import ObjectOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectOptions from a JSON string
object_options_instance = ObjectOptions.from_json(json)
# print the JSON string representation of the object
print(ObjectOptions.to_json())

# convert the object into a dict
object_options_dict = object_options_instance.to_dict()
# create an instance of ObjectOptions from a dict
object_options_from_dict = ObjectOptions.from_dict(object_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


