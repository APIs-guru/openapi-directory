# UsageDetailsListResult

Result of listing usage details. It contains a list of available usage details in reverse chronological order by billing period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[UsageDetail]**](UsageDetail.md) | The list of usage details. | [optional] [readonly] 

## Example

```python
from openapi_client.models.usage_details_list_result import UsageDetailsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of UsageDetailsListResult from a JSON string
usage_details_list_result_instance = UsageDetailsListResult.from_json(json)
# print the JSON string representation of the object
print(UsageDetailsListResult.to_json())

# convert the object into a dict
usage_details_list_result_dict = usage_details_list_result_instance.to_dict()
# create an instance of UsageDetailsListResult from a dict
usage_details_list_result_from_dict = UsageDetailsListResult.from_dict(usage_details_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


