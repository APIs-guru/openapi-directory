# GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo

Encapsulates the aggregation information such as aggregation level and interval for a billing account price.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interval** | **str** | Interval at which usage is aggregated to compute cost. Example: \&quot;MONTHLY\&quot; interval indicates that usage is aggregated every month. | [optional] 
**level** | **str** | Level at which usage is aggregated to compute cost. Example: \&quot;ACCOUNT\&quot; level indicates that usage is aggregated across all projects in a single account. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountprices_v1beta_aggregation_info import GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo from a JSON string
google_cloud_billing_billingaccountprices_v1beta_aggregation_info_instance = GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountprices_v1beta_aggregation_info_dict = google_cloud_billing_billingaccountprices_v1beta_aggregation_info_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo from a dict
google_cloud_billing_billingaccountprices_v1beta_aggregation_info_from_dict = GoogleCloudBillingBillingaccountpricesV1betaAggregationInfo.from_dict(google_cloud_billing_billingaccountprices_v1beta_aggregation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


