# FreeListingsProgramStatusRegionStatus

Status of program and region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disapproval_date** | **str** | Date by which eligibilityStatus will go from &#x60;WARNING&#x60; to &#x60;DISAPPROVED&#x60;. Only visible when your eligibilityStatus is WARNING. In [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: &#x60;YYYY-MM-DD&#x60;. | [optional] 
**eligibility_status** | **str** | Eligibility status of the standard free listing program. | [optional] 
**onboarding_issues** | **List[str]** | Issues that must be fixed to be eligible for review. | [optional] 
**region_codes** | **List[str]** | The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes for all the regions with the same &#x60;eligibilityStatus&#x60; and &#x60;reviewEligibility&#x60;. | [optional] 
**review_eligibility_status** | **str** | If a program is eligible for review in a specific region. Only visible if &#x60;eligibilityStatus&#x60; is &#x60;DISAPPROVED&#x60;. | [optional] 
**review_ineligibility_reason** | **str** | Review ineligibility reason if account is not eligible for review. | [optional] 
**review_ineligibility_reason_description** | **str** | Reason a program in a specific region isn’t eligible for review. Only visible if &#x60;reviewEligibilityStatus&#x60; is &#x60;INELIGIBLE&#x60;. | [optional] 
**review_ineligibility_reason_details** | [**FreeListingsProgramStatusReviewIneligibilityReasonDetails**](FreeListingsProgramStatusReviewIneligibilityReasonDetails.md) |  | [optional] 
**review_issues** | **List[str]** | Issues evaluated in the review process. Fix all issues before requesting a review. | [optional] 

## Example

```python
from openapi_client.models.free_listings_program_status_region_status import FreeListingsProgramStatusRegionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of FreeListingsProgramStatusRegionStatus from a JSON string
free_listings_program_status_region_status_instance = FreeListingsProgramStatusRegionStatus.from_json(json)
# print the JSON string representation of the object
print(FreeListingsProgramStatusRegionStatus.to_json())

# convert the object into a dict
free_listings_program_status_region_status_dict = free_listings_program_status_region_status_instance.to_dict()
# create an instance of FreeListingsProgramStatusRegionStatus from a dict
free_listings_program_status_region_status_from_dict = FreeListingsProgramStatusRegionStatus.from_dict(free_listings_program_status_region_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


