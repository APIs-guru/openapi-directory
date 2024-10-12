# AMLScreeningResult

The results of any AML/Adverse media screening undertaken 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_result** | **str** | The overall result | [optional] 
**media_hit_count** | **int** | The number of adverse media hits. | [optional] 

## Example

```python
from openapi_client.models.aml_screening_result import AMLScreeningResult

# TODO update the JSON string below
json = "{}"
# create an instance of AMLScreeningResult from a JSON string
aml_screening_result_instance = AMLScreeningResult.from_json(json)
# print the JSON string representation of the object
print(AMLScreeningResult.to_json())

# convert the object into a dict
aml_screening_result_dict = aml_screening_result_instance.to_dict()
# create an instance of AMLScreeningResult from a dict
aml_screening_result_from_dict = AMLScreeningResult.from_dict(aml_screening_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


