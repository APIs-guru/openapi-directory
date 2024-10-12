# SummaryUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addons** | [**List[SummaryOrganisationsInnerAddonsInner]**](SummaryOrganisationsInnerAddonsInner.md) |  | 
**admin** | **bool** |  | [default to False]
**applications** | [**List[SummaryOrganisationsInnerApplicationsInner]**](SummaryOrganisationsInnerApplicationsInner.md) |  | 
**avatar** | **str** |  | 
**consumers** | [**List[SummaryOrganisationsInnerConsumersInner]**](SummaryOrganisationsInnerConsumersInner.md) |  | [optional] 
**id** | **str** |  | 
**lang** | **str** |  | 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.summary_user import SummaryUser

# TODO update the JSON string below
json = "{}"
# create an instance of SummaryUser from a JSON string
summary_user_instance = SummaryUser.from_json(json)
# print the JSON string representation of the object
print(SummaryUser.to_json())

# convert the object into a dict
summary_user_dict = summary_user_instance.to_dict()
# create an instance of SummaryUser from a dict
summary_user_from_dict = SummaryUser.from_dict(summary_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


