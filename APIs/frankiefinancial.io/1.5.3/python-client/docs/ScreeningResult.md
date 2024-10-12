# ScreeningResult

Contains the results (if any) of the KYC and AML/Media checks performed 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aml_result** | [**AMLScreeningResult**](AMLScreeningResult.md) |  | [optional] 
**kyc_result** | [**KYCScreeningResult**](KYCScreeningResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.screening_result import ScreeningResult

# TODO update the JSON string below
json = "{}"
# create an instance of ScreeningResult from a JSON string
screening_result_instance = ScreeningResult.from_json(json)
# print the JSON string representation of the object
print(ScreeningResult.to_json())

# convert the object into a dict
screening_result_dict = screening_result_instance.to_dict()
# create an instance of ScreeningResult from a dict
screening_result_from_dict = ScreeningResult.from_dict(screening_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


