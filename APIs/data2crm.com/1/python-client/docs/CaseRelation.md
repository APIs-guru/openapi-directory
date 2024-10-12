# CaseRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**CasesEntityRelation**](CasesEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.case_relation import CaseRelation

# TODO update the JSON string below
json = "{}"
# create an instance of CaseRelation from a JSON string
case_relation_instance = CaseRelation.from_json(json)
# print the JSON string representation of the object
print(CaseRelation.to_json())

# convert the object into a dict
case_relation_dict = case_relation_instance.to_dict()
# create an instance of CaseRelation from a dict
case_relation_from_dict = CaseRelation.from_dict(case_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


