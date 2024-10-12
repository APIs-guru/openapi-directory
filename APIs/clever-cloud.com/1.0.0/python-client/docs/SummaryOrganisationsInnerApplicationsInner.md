# SummaryOrganisationsInnerApplicationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **bool** |  | [optional] [default to False]
**commit** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**instance_type** | **str** |  | [optional] 
**instance_variant** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**variant_slug** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.summary_organisations_inner_applications_inner import SummaryOrganisationsInnerApplicationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SummaryOrganisationsInnerApplicationsInner from a JSON string
summary_organisations_inner_applications_inner_instance = SummaryOrganisationsInnerApplicationsInner.from_json(json)
# print the JSON string representation of the object
print(SummaryOrganisationsInnerApplicationsInner.to_json())

# convert the object into a dict
summary_organisations_inner_applications_inner_dict = summary_organisations_inner_applications_inner_instance.to_dict()
# create an instance of SummaryOrganisationsInnerApplicationsInner from a dict
summary_organisations_inner_applications_inner_from_dict = SummaryOrganisationsInnerApplicationsInner.from_dict(summary_organisations_inner_applications_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


