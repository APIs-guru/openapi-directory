# CreativeServingRestrictionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contexts** | [**List[CreativeServingRestrictionsInnerContextsInner]**](CreativeServingRestrictionsInnerContextsInner.md) | All known contexts/restrictions. | [optional] 
**disapproval_reasons** | [**List[CreativeServingRestrictionsInnerDisapprovalReasonsInner]**](CreativeServingRestrictionsInnerDisapprovalReasonsInner.md) | The reasons for disapproval within this restriction, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED or CONDITIONALLY_APPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue. | [optional] 
**reason** | **str** | Why the creative is ineligible to serve in this context (e.g., it has been explicitly disapproved or is pending review). | [optional] 

## Example

```python
from openapi_client.models.creative_serving_restrictions_inner import CreativeServingRestrictionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeServingRestrictionsInner from a JSON string
creative_serving_restrictions_inner_instance = CreativeServingRestrictionsInner.from_json(json)
# print the JSON string representation of the object
print(CreativeServingRestrictionsInner.to_json())

# convert the object into a dict
creative_serving_restrictions_inner_dict = creative_serving_restrictions_inner_instance.to_dict()
# create an instance of CreativeServingRestrictionsInner from a dict
creative_serving_restrictions_inner_from_dict = CreativeServingRestrictionsInner.from_dict(creative_serving_restrictions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


