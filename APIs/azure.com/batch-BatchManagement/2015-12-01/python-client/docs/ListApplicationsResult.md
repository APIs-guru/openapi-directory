# ListApplicationsResult

Response to an ApplicationOperations.ListApplications request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[Application]**](Application.md) | The list of applications. | [optional] 

## Example

```python
from openapi_client.models.list_applications_result import ListApplicationsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ListApplicationsResult from a JSON string
list_applications_result_instance = ListApplicationsResult.from_json(json)
# print the JSON string representation of the object
print(ListApplicationsResult.to_json())

# convert the object into a dict
list_applications_result_dict = list_applications_result_instance.to_dict()
# create an instance of ListApplicationsResult from a dict
list_applications_result_from_dict = ListApplicationsResult.from_dict(list_applications_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


