# ListReportsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as page_token to retrieve the next page of reports. If this field is omitted, there are no subsequent pages. | [optional] 
**reports** | [**List[Report]**](Report.md) | Retrieved reports. | [optional] 

## Example

```python
from openapi_client.models.list_reports_response import ListReportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListReportsResponse from a JSON string
list_reports_response_instance = ListReportsResponse.from_json(json)
# print the JSON string representation of the object
print(ListReportsResponse.to_json())

# convert the object into a dict
list_reports_response_dict = list_reports_response_instance.to_dict()
# create an instance of ListReportsResponse from a dict
list_reports_response_from_dict = ListReportsResponse.from_dict(list_reports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


