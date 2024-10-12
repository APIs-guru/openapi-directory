# UsageListResult

The response containing the usage data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Usage]**](Usage.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.usage_list_result import UsageListResult

# TODO update the JSON string below
json = "{}"
# create an instance of UsageListResult from a JSON string
usage_list_result_instance = UsageListResult.from_json(json)
# print the JSON string representation of the object
print(UsageListResult.to_json())

# convert the object into a dict
usage_list_result_dict = usage_list_result_instance.to_dict()
# create an instance of UsageListResult from a dict
usage_list_result_from_dict = UsageListResult.from_dict(usage_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


