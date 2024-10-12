# Deduction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The amount deducted. | [optional] 
**name** | **str** | The name of the deduction. | [optional] 

## Example

```python
from openapi_client.models.deduction import Deduction

# TODO update the JSON string below
json = "{}"
# create an instance of Deduction from a JSON string
deduction_instance = Deduction.from_json(json)
# print the JSON string representation of the object
print(Deduction.to_json())

# convert the object into a dict
deduction_dict = deduction_instance.to_dict()
# create an instance of Deduction from a dict
deduction_from_dict = Deduction.from_dict(deduction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


