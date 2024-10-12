# KYCScreeningResult

The results of a safe harbour KYC check of an individual 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_match_count** | **int** | The number of address matches | 
**check_result** | **str** | The disposition of the 2+2 Safe Harbour check  | [optional] 
**dob_match_count** | **int** | The number of date of birth matches | 
**matching_sources** | **List[str]** | The is of matching data sources that produced a success match for the person being screened Example given is not indicative of the actual sources available.  | [optional] 
**name_match_count** | **int** | The number of name matches | 

## Example

```python
from openapi_client.models.kyc_screening_result import KYCScreeningResult

# TODO update the JSON string below
json = "{}"
# create an instance of KYCScreeningResult from a JSON string
kyc_screening_result_instance = KYCScreeningResult.from_json(json)
# print the JSON string representation of the object
print(KYCScreeningResult.to_json())

# convert the object into a dict
kyc_screening_result_dict = kyc_screening_result_instance.to_dict()
# create an instance of KYCScreeningResult from a dict
kyc_screening_result_from_dict = KYCScreeningResult.from_dict(kyc_screening_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


