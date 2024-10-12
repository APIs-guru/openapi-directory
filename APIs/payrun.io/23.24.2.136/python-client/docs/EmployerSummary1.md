# EmployerSummary1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_date** | **date** | The employer summarys&#39; effective date | [optional] 
**meta_data** | **object** | The employer summarys&#39; meta data | [optional] 
**name** | **str** | The employer summarys&#39; name | [optional] 
**next_revision_date** | **date** | The employer summarys&#39; next revision date | [optional] 
**revision** | **int** | The employer summarys&#39; revision | [optional] 
**unique_key** | **str** | The employer summarys&#39; unique key | [optional] 

## Example

```python
from openapi_client.models.employer_summary1 import EmployerSummary1

# TODO update the JSON string below
json = "{}"
# create an instance of EmployerSummary1 from a JSON string
employer_summary1_instance = EmployerSummary1.from_json(json)
# print the JSON string representation of the object
print(EmployerSummary1.to_json())

# convert the object into a dict
employer_summary1_dict = employer_summary1_instance.to_dict()
# create an instance of EmployerSummary1 from a dict
employer_summary1_from_dict = EmployerSummary1.from_dict(employer_summary1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


