# StandardizationError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The issue&#39;s description, human friendly. Pertaining to how the user can fix it.  | 
**line** | **int** | The line number where the issue occurs. 0-indexed. If for some reason, the broken rule does not include a line number, default to zero.  | 
**severity** | [**StandardizationRuleSeverity**](StandardizationRuleSeverity.md) |  | [optional] 

## Example

```python
from openapi_client.models.standardization_error import StandardizationError

# TODO update the JSON string below
json = "{}"
# create an instance of StandardizationError from a JSON string
standardization_error_instance = StandardizationError.from_json(json)
# print the JSON string representation of the object
print(StandardizationError.to_json())

# convert the object into a dict
standardization_error_dict = standardization_error_instance.to_dict()
# create an instance of StandardizationError from a dict
standardization_error_from_dict = StandardizationError.from_dict(standardization_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


