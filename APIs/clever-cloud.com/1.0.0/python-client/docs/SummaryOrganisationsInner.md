# SummaryOrganisationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addons** | [**List[SummaryOrganisationsInnerAddonsInner]**](SummaryOrganisationsInnerAddonsInner.md) |  | [optional] 
**applications** | [**List[SummaryOrganisationsInnerApplicationsInner]**](SummaryOrganisationsInnerApplicationsInner.md) |  | [optional] 
**avatar** | **str** |  | [optional] 
**consumers** | [**List[SummaryOrganisationsInnerConsumersInner]**](SummaryOrganisationsInnerConsumersInner.md) |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**providers** | **List[str]** |  | [optional] 
**role** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.summary_organisations_inner import SummaryOrganisationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SummaryOrganisationsInner from a JSON string
summary_organisations_inner_instance = SummaryOrganisationsInner.from_json(json)
# print the JSON string representation of the object
print(SummaryOrganisationsInner.to_json())

# convert the object into a dict
summary_organisations_inner_dict = summary_organisations_inner_instance.to_dict()
# create an instance of SummaryOrganisationsInner from a dict
summary_organisations_inner_from_dict = SummaryOrganisationsInner.from_dict(summary_organisations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


