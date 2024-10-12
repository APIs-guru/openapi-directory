# Benefit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employee_deduction** | **float** | The amount deducted for benefit. | [optional] 
**employer_contribution** | **float** | The amount of employer contribution. | [optional] 
**name** | **str** | The name of the benefit. | [optional] 

## Example

```python
from openapi_client.models.benefit import Benefit

# TODO update the JSON string below
json = "{}"
# create an instance of Benefit from a JSON string
benefit_instance = Benefit.from_json(json)
# print the JSON string representation of the object
print(Benefit.to_json())

# convert the object into a dict
benefit_dict = benefit_instance.to_dict()
# create an instance of Benefit from a dict
benefit_from_dict = Benefit.from_dict(benefit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


