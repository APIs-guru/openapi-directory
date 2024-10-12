# ApplicationListResult

Result of the request to list cluster Applications. It contains a list of operations and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of operation list results if there are any. | [optional] [readonly] 
**value** | [**List[Application]**](Application.md) | The list of HDInsight applications installed on HDInsight cluster. | [optional] 

## Example

```python
from openapi_client.models.application_list_result import ApplicationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationListResult from a JSON string
application_list_result_instance = ApplicationListResult.from_json(json)
# print the JSON string representation of the object
print(ApplicationListResult.to_json())

# convert the object into a dict
application_list_result_dict = application_list_result_instance.to_dict()
# create an instance of ApplicationListResult from a dict
application_list_result_from_dict = ApplicationListResult.from_dict(application_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


