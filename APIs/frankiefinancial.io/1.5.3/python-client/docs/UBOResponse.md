# UBOResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asic_search_timestamp** | **datetime** | If an ASIC search was conducted, what was the date/time in RFC-3339 format  | [optional] 
**business_details** | [**BusinessDetails**](BusinessDetails.md) |  | [optional] 
**business_screening_result** | [**ScreeningResult**](ScreeningResult.md) |  | [optional] 
**error_message** | **str** | Only populated if there was an error whilst trying to initiate the UBO check.  Signifies that no other result data will be supplied  | [optional] 
**issues_list** | [**List[IssueListItems]**](IssueListItems.md) | A list of issues encountered whilst processing the UBO request and subsequent KYC/AML checks.  | [optional] 
**non_individual_beneficial_owners** | [**List[NonIndividualBeneficialOwner]**](NonIndividualBeneficialOwner.md) | A list of organisations who have been determined to own a (potentially) beneficial interest the company.  The presence of non_individual_beneficial_owners indicates that not all individual ultimate beneficial owners could be determined.  Examples may include public companies, listed companies, foreign companies, corporate trusts or other entities whose beneficial owners are not readily available.  | [optional] 
**officeholders** | [**List[IndividualData]**](IndividualData.md) | A list of individuals who serve as current office holders the company  | [optional] 
**supplied_data** | [**SuppliedData**](SuppliedData.md) |  | 
**supplied_data_matches** | [**SuppliedDataMatches**](SuppliedDataMatches.md) |  | [optional] 
**ubo_report** | **str** | The full URI of the UBO report PDF created as a part of this process (if requested)  | [optional] 
**ultimate_beneficial_owners** | [**List[IndividualData]**](IndividualData.md) | A list of individuals who have been determined to own, either directly or indirectly, 25% or more of the company  | [optional] 

## Example

```python
from openapi_client.models.ubo_response import UBOResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UBOResponse from a JSON string
ubo_response_instance = UBOResponse.from_json(json)
# print the JSON string representation of the object
print(UBOResponse.to_json())

# convert the object into a dict
ubo_response_dict = ubo_response_instance.to_dict()
# create an instance of UBOResponse from a dict
ubo_response_from_dict = UBOResponse.from_dict(ubo_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


