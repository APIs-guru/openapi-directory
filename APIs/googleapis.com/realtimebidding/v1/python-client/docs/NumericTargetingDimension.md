# NumericTargetingDimension

Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_ids** | **List[str]** | The IDs excluded in a configuration. | [optional] 
**included_ids** | **List[str]** | The IDs included in a configuration. | [optional] 

## Example

```python
from openapi_client.models.numeric_targeting_dimension import NumericTargetingDimension

# TODO update the JSON string below
json = "{}"
# create an instance of NumericTargetingDimension from a JSON string
numeric_targeting_dimension_instance = NumericTargetingDimension.from_json(json)
# print the JSON string representation of the object
print(NumericTargetingDimension.to_json())

# convert the object into a dict
numeric_targeting_dimension_dict = numeric_targeting_dimension_instance.to_dict()
# create an instance of NumericTargetingDimension from a dict
numeric_targeting_dimension_from_dict = NumericTargetingDimension.from_dict(numeric_targeting_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


