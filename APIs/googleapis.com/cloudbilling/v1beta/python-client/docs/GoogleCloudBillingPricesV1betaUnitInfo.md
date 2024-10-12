# GoogleCloudBillingPricesV1betaUnitInfo

Encapsulates the unit information for a Rate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | Shorthand for the unit. Example: GiBy.mo. | [optional] 
**unit_description** | **str** | Human-readable description of the unit. Example: gibibyte month. | [optional] 
**unit_quantity** | [**Decimal**](Decimal.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_prices_v1beta_unit_info import GoogleCloudBillingPricesV1betaUnitInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingPricesV1betaUnitInfo from a JSON string
google_cloud_billing_prices_v1beta_unit_info_instance = GoogleCloudBillingPricesV1betaUnitInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingPricesV1betaUnitInfo.to_json())

# convert the object into a dict
google_cloud_billing_prices_v1beta_unit_info_dict = google_cloud_billing_prices_v1beta_unit_info_instance.to_dict()
# create an instance of GoogleCloudBillingPricesV1betaUnitInfo from a dict
google_cloud_billing_prices_v1beta_unit_info_from_dict = GoogleCloudBillingPricesV1betaUnitInfo.from_dict(google_cloud_billing_prices_v1beta_unit_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


