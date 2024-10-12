# GetReportsResponse

The main response class which holds the reports from the Reporting API `batchGet` call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_cost** | **int** | The amount of resource quota tokens deducted to execute the query. Includes all responses. | [optional] 
**reports** | [**List[Report]**](Report.md) | Responses corresponding to each of the request. | [optional] 
**resource_quotas_remaining** | [**ResourceQuotasRemaining**](ResourceQuotasRemaining.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_reports_response import GetReportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetReportsResponse from a JSON string
get_reports_response_instance = GetReportsResponse.from_json(json)
# print the JSON string representation of the object
print(GetReportsResponse.to_json())

# convert the object into a dict
get_reports_response_dict = get_reports_response_instance.to_dict()
# create an instance of GetReportsResponse from a dict
get_reports_response_from_dict = GetReportsResponse.from_dict(get_reports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


