# StringTargetingDimension

Generic targeting with string values used in app, website and publisher targeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targeting_mode** | **str** | How the items in this list should be targeted. | [optional] 
**values** | **List[str]** | The values specified. | [optional] 

## Example

```python
from openapi_client.models.string_targeting_dimension import StringTargetingDimension

# TODO update the JSON string below
json = "{}"
# create an instance of StringTargetingDimension from a JSON string
string_targeting_dimension_instance = StringTargetingDimension.from_json(json)
# print the JSON string representation of the object
print(StringTargetingDimension.to_json())

# convert the object into a dict
string_targeting_dimension_dict = string_targeting_dimension_instance.to_dict()
# create an instance of StringTargetingDimension from a dict
string_targeting_dimension_from_dict = StringTargetingDimension.from_dict(string_targeting_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


