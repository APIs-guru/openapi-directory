# RemediationListResult

List of remediations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[Remediation]**](Remediation.md) | Array of remediation definitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.remediation_list_result import RemediationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RemediationListResult from a JSON string
remediation_list_result_instance = RemediationListResult.from_json(json)
# print the JSON string representation of the object
print(RemediationListResult.to_json())

# convert the object into a dict
remediation_list_result_dict = remediation_list_result_instance.to_dict()
# create an instance of RemediationListResult from a dict
remediation_list_result_from_dict = RemediationListResult.from_dict(remediation_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


