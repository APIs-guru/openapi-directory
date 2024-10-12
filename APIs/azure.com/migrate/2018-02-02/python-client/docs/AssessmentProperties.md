# AssessmentProperties

Properties of an assessment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_hybrid_use_benefit** | **str** | AHUB discount on windows virtual machines. | 
**azure_location** | **str** | Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API. | 
**azure_offer_code** | **str** | Offer code according to which cost estimation is done. | 
**azure_pricing_tier** | **str** | Pricing tier for Size evaluation. | 
**azure_storage_redundancy** | **str** | Storage Redundancy type offered by Azure. | 
**confidence_rating_in_percentage** | **float** | Confidence rating percentage for assessment. Can be in the range [0, 100]. | [optional] [readonly] 
**created_timestamp** | **datetime** | Time when this project was created. Date-Time represented in ISO-8601 format. | [optional] [readonly] 
**currency** | **str** | Currency to report prices in. | 
**discount_percentage** | **float** | Custom discount percentage to be applied on final costs. Can be in the range [0, 100]. | 
**monthly_bandwidth_cost** | **float** | Monthly network cost estimate for the machines that are part of this assessment as a group, for a 31-day month. | [optional] [readonly] 
**monthly_compute_cost** | **float** | Monthly compute cost estimate for the machines that are part of this assessment as a group, for a 31-day month. | [optional] [readonly] 
**monthly_storage_cost** | **float** | Monthly storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month. | [optional] [readonly] 
**number_of_machines** | **int** | Number of assessed machines part of this assessment. | [optional] [readonly] 
**percentile** | **str** | Percentile of performance data used to recommend Azure size. | 
**prices_timestamp** | **datetime** | Time when the Azure Prices were queried. Date-Time represented in ISO-8601 format. | [optional] [readonly] 
**scaling_factor** | **float** | Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value &#x3D; 1.0, Max value &#x3D; 1.9, Default &#x3D; 1.3. | 
**sizing_criterion** | **str** | Assessment sizing criterion. | 
**stage** | **str** | User configurable setting that describes the status of the assessment. | 
**status** | **str** | Whether the assessment has been created and is valid. | [optional] [readonly] 
**time_range** | **str** | Time range of performance data used to recommend a size. | 
**updated_timestamp** | **datetime** | Time when this project was last updated. Date-Time represented in ISO-8601 format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assessment_properties import AssessmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AssessmentProperties from a JSON string
assessment_properties_instance = AssessmentProperties.from_json(json)
# print the JSON string representation of the object
print(AssessmentProperties.to_json())

# convert the object into a dict
assessment_properties_dict = assessment_properties_instance.to_dict()
# create an instance of AssessmentProperties from a dict
assessment_properties_from_dict = AssessmentProperties.from_dict(assessment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


