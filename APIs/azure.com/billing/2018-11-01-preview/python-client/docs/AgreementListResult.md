# AgreementListResult

Result of listing agreements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[Agreement]**](Agreement.md) | The list of agreements. | [optional] [readonly] 

## Example

```python
from openapi_client.models.agreement_list_result import AgreementListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AgreementListResult from a JSON string
agreement_list_result_instance = AgreementListResult.from_json(json)
# print the JSON string representation of the object
print(AgreementListResult.to_json())

# convert the object into a dict
agreement_list_result_dict = agreement_list_result_instance.to_dict()
# create an instance of AgreementListResult from a dict
agreement_list_result_from_dict = AgreementListResult.from_dict(agreement_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


