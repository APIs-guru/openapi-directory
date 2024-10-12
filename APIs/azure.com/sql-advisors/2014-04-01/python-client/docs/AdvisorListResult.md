# AdvisorListResult

Represents the response to a list advisors request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Advisor]**](Advisor.md) | The list of advisors. | [optional] 

## Example

```python
from openapi_client.models.advisor_list_result import AdvisorListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AdvisorListResult from a JSON string
advisor_list_result_instance = AdvisorListResult.from_json(json)
# print the JSON string representation of the object
print(AdvisorListResult.to_json())

# convert the object into a dict
advisor_list_result_dict = advisor_list_result_instance.to_dict()
# create an instance of AdvisorListResult from a dict
advisor_list_result_from_dict = AdvisorListResult.from_dict(advisor_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


