# ListAlertPoliciesResponse

The protocol for the ListAlertPolicies response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alert_policies** | [**List[AlertPolicy]**](AlertPolicy.md) | The returned alert policies. | [optional] 
**next_page_token** | **str** | If there might be more results than were returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method. | [optional] 
**total_size** | **int** | The total number of alert policies in all pages. This number is only an estimate, and may change in subsequent pages. https://aip.dev/158 | [optional] 

## Example

```python
from openapi_client.models.list_alert_policies_response import ListAlertPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAlertPoliciesResponse from a JSON string
list_alert_policies_response_instance = ListAlertPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(ListAlertPoliciesResponse.to_json())

# convert the object into a dict
list_alert_policies_response_dict = list_alert_policies_response_instance.to_dict()
# create an instance of ListAlertPoliciesResponse from a dict
list_alert_policies_response_from_dict = ListAlertPoliciesResponse.from_dict(list_alert_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


