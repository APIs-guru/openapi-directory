# StandardizationResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validation** | [**List[StandardizationError]**](StandardizationError.md) |  | [optional] 

## Example

```python
from openapi_client.models.standardization_result import StandardizationResult

# TODO update the JSON string below
json = "{}"
# create an instance of StandardizationResult from a JSON string
standardization_result_instance = StandardizationResult.from_json(json)
# print the JSON string representation of the object
print(StandardizationResult.to_json())

# convert the object into a dict
standardization_result_dict = standardization_result_instance.to_dict()
# create an instance of StandardizationResult from a dict
standardization_result_from_dict = StandardizationResult.from_dict(standardization_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


