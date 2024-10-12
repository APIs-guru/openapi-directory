# Compatibility

Product compatibility

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Full error message if any compatibility issues are found | [optional] 
**is_compatible** | **bool** | Tells if product is compatible with current device | [optional] 
**issues** | [**List[CompatibilityIssue]**](CompatibilityIssue.md) | List of all issues found | [optional] 
**message** | **str** | Short error message if any compatibility issues are found | [optional] 

## Example

```python
from openapi_client.models.compatibility import Compatibility

# TODO update the JSON string below
json = "{}"
# create an instance of Compatibility from a JSON string
compatibility_instance = Compatibility.from_json(json)
# print the JSON string representation of the object
print(Compatibility.to_json())

# convert the object into a dict
compatibility_dict = compatibility_instance.to_dict()
# create an instance of Compatibility from a dict
compatibility_from_dict = Compatibility.from_dict(compatibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


