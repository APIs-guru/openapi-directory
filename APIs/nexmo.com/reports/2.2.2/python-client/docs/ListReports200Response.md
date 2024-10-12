# ListReports200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items_count** | **int** | The number of reports in the list. | [optional] 
**reports** | [**List[ListReports200ResponseReportsInner]**](ListReports200ResponseReportsInner.md) | The list of reports. | [optional] 
**self_link** | **str** | URI of this search. | [optional] 

## Example

```python
from openapi_client.models.list_reports200_response import ListReports200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListReports200Response from a JSON string
list_reports200_response_instance = ListReports200Response.from_json(json)
# print the JSON string representation of the object
print(ListReports200Response.to_json())

# convert the object into a dict
list_reports200_response_dict = list_reports200_response_instance.to_dict()
# create an instance of ListReports200Response from a dict
list_reports200_response_from_dict = ListReports200Response.from_dict(list_reports200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


