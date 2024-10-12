# Opportunity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**close_date** | **date** | The actual closing date for the opportunity. If close_date is null, the opportunity is not closed yet. | [optional] 
**company_id** | **str** | The unique identifier of the company associated with the opportunity. | [optional] 
**company_name** | **str** | The name of the company associated with the opportunity. | [optional] 
**contact_id** | **str** | The unique identifier of the contact associated with the opportunity. | [optional] 
**contact_ids** | **List[str]** | An array of unique identifiers of all contacts associated with the opportunity. | [optional] 
**created_at** | **datetime** | The date and time when the opportunity was created. | [optional] [readonly] 
**created_by** | **str** | The unique identifier of the user who created the opportunity. | [optional] [readonly] 
**currency** | [**Currency**](Currency.md) |  | [optional] 
**custom_fields** | [**List[CustomField]**](CustomField.md) |  | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**date_last_contacted** | **datetime** | The date and time when the opportunity was last contacted. | [optional] [readonly] 
**date_lead_created** | **datetime** | The date and time when the lead associated with the opportunity was created. | [optional] [readonly] 
**date_stage_changed** | **datetime** | The date and time when the stage of the opportunity was last changed. | [optional] [readonly] 
**deleted** | **bool** | Indicates whether the opportunity has been deleted. | [optional] [readonly] 
**description** | **str** | A description of the opportunity. | [optional] 
**expected_revenue** | **float** | The expected revenue from the opportunity | [optional] [readonly] 
**id** | **str** | A unique identifier for the opportunity. | [optional] [readonly] 
**interaction_count** | **float** | The number of interactions with the opportunity. | [optional] [readonly] 
**last_activity_at** | **str** | The date and time of the last activity associated with the opportunity. | [optional] [readonly] 
**lead_id** | **str** | The unique identifier of the lead associated with the opportunity. | [optional] 
**lead_source** | **str** | The source of the lead associated with the opportunity. | [optional] 
**loss_reason** | **str** | The reason why the opportunity was lost. | [optional] 
**loss_reason_id** | **str** | The unique identifier of the reason why the opportunity was lost. | [optional] 
**monetary_amount** | **float** | The monetary value associated with the opportunity | [optional] 
**owner_id** | **str** | The unique identifier of the user who owns the opportunity. | [optional] 
**pipeline_id** | **str** | The unique identifier of the pipeline associated with the opportunity | [optional] 
**pipeline_stage_id** | **str** | The unique identifier of the stage in the pipeline associated with the opportunity. | [optional] 
**primary_contact_id** | **str** | The unique identifier of the primary contact associated with the opportunity. | 
**priority** | **str** | The priority level of the opportunity. | [optional] 
**source_id** | **str** | The unique identifier of the source of the opportunity. | [optional] 
**stage_last_changed_at** | **datetime** | The date and time when the stage of the opportunity was last changed. | [optional] 
**status** | **str** | The current status of the opportunity. | [optional] 
**status_id** | **str** | The unique identifier of the current status of the opportunity. | [optional] 
**tags** | **List[str]** |  | [optional] 
**title** | **str** | The title or name of the opportunity. | 
**type** | **str** | The type of the opportunity | [optional] 
**updated_at** | **datetime** | The date and time when the opportunity was last updated. | [optional] [readonly] 
**updated_by** | **str** | The unique identifier of the user who last updated the opportunity. | [optional] [readonly] 
**win_probability** | **float** | The probability of winning the opportunity, expressed as a percentage. | [optional] 
**won_reason** | **str** | The reason why the opportunity was won. | [optional] 
**won_reason_id** | **str** | The unique identifier of the reason why the opportunity was won. | [optional] 

## Example

```python
from openapi_client.models.opportunity import Opportunity

# TODO update the JSON string below
json = "{}"
# create an instance of Opportunity from a JSON string
opportunity_instance = Opportunity.from_json(json)
# print the JSON string representation of the object
print(Opportunity.to_json())

# convert the object into a dict
opportunity_dict = opportunity_instance.to_dict()
# create an instance of Opportunity from a dict
opportunity_from_dict = Opportunity.from_dict(opportunity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


