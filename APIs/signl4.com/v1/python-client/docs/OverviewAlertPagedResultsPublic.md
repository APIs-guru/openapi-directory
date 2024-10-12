# OverviewAlertPagedResultsPublic


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | [**PagedResultsPublicContinuationToken**](PagedResultsPublicContinuationToken.md) |  | [optional] 
**has_more** | **bool** |  | [optional] [readonly] 
**results** | [**List[OverviewAlert]**](OverviewAlert.md) |  | [optional] 

## Example

```python
from openapi_client.models.overview_alert_paged_results_public import OverviewAlertPagedResultsPublic

# TODO update the JSON string below
json = "{}"
# create an instance of OverviewAlertPagedResultsPublic from a JSON string
overview_alert_paged_results_public_instance = OverviewAlertPagedResultsPublic.from_json(json)
# print the JSON string representation of the object
print(OverviewAlertPagedResultsPublic.to_json())

# convert the object into a dict
overview_alert_paged_results_public_dict = overview_alert_paged_results_public_instance.to_dict()
# create an instance of OverviewAlertPagedResultsPublic from a dict
overview_alert_paged_results_public_from_dict = OverviewAlertPagedResultsPublic.from_dict(overview_alert_paged_results_public_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


