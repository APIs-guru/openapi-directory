# BillingAggregatedInformationGetByAppDefaultResponseError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | The status code return by the API. It can be 400 or 403 or 500. | [optional] 
**message** | **str** | The reason for the request failed | [optional] 

## Example

```python
from openapi_client.models.billing_aggregated_information_get_by_app_default_response_error import BillingAggregatedInformationGetByAppDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAggregatedInformationGetByAppDefaultResponseError from a JSON string
billing_aggregated_information_get_by_app_default_response_error_instance = BillingAggregatedInformationGetByAppDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(BillingAggregatedInformationGetByAppDefaultResponseError.to_json())

# convert the object into a dict
billing_aggregated_information_get_by_app_default_response_error_dict = billing_aggregated_information_get_by_app_default_response_error_instance.to_dict()
# create an instance of BillingAggregatedInformationGetByAppDefaultResponseError from a dict
billing_aggregated_information_get_by_app_default_response_error_from_dict = BillingAggregatedInformationGetByAppDefaultResponseError.from_dict(billing_aggregated_information_get_by_app_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


