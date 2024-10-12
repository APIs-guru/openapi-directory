# GoogleCloudApigeeV1RatePlan

Rate plan details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiproduct** | **str** | Name of the API product that the rate plan is associated with. | [optional] 
**billing_period** | **str** | Frequency at which the customer will be billed. | [optional] 
**consumption_pricing_rates** | [**List[GoogleCloudApigeeV1RateRange]**](GoogleCloudApigeeV1RateRange.md) | API call volume ranges and the fees charged when the total number of API calls is within a given range. The method used to calculate the final fee depends on the selected pricing model. For example, if the pricing model is &#x60;STAIRSTEP&#x60; and the ranges are defined as follows: &#x60;&#x60;&#x60; { \&quot;start\&quot;: 1, \&quot;end\&quot;: 100, \&quot;fee\&quot;: 75 }, { \&quot;start\&quot;: 101, \&quot;end\&quot;: 200, \&quot;fee\&quot;: 100 }, } &#x60;&#x60;&#x60; Then the following fees would be charged based on the total number of API calls (assuming the currency selected is &#x60;USD&#x60;): * 1 call costs $75 * 50 calls cost $75 * 150 calls cost $100 The number of API calls cannot exceed 200. | [optional] 
**consumption_pricing_type** | **str** | Pricing model used for consumption-based charges. | [optional] 
**created_at** | **str** | Output only. Time that the rate plan was created in milliseconds since epoch. | [optional] [readonly] 
**currency_code** | **str** | Currency to be used for billing. Consists of a three-letter code as defined by the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standard. | [optional] 
**description** | **str** | Description of the rate plan. | [optional] 
**display_name** | **str** | Display name of the rate plan. | [optional] 
**end_time** | **str** | Time when the rate plan will expire in milliseconds since epoch. Set to 0 or &#x60;null&#x60; to indicate that the rate plan should never expire. | [optional] 
**fixed_fee_frequency** | **int** | Frequency at which the fixed fee is charged. | [optional] 
**fixed_recurring_fee** | [**GoogleTypeMoney**](GoogleTypeMoney.md) |  | [optional] 
**last_modified_at** | **str** | Output only. Time the rate plan was last modified in milliseconds since epoch. | [optional] [readonly] 
**name** | **str** | Output only. Name of the rate plan. | [optional] [readonly] 
**payment_funding_model** | **str** | DEPRECATED: This field is no longer supported and will eventually be removed when Apigee Hybrid 1.5/1.6 is no longer supported. Instead, use the &#x60;billingType&#x60; field inside &#x60;DeveloperMonetizationConfig&#x60; resource. Flag that specifies the billing account type, prepaid or postpaid. | [optional] 
**revenue_share_rates** | [**List[GoogleCloudApigeeV1RevenueShareRange]**](GoogleCloudApigeeV1RevenueShareRange.md) | Details of the revenue sharing model. | [optional] 
**revenue_share_type** | **str** | Method used to calculate the revenue that is shared with developers. | [optional] 
**setup_fee** | [**GoogleTypeMoney**](GoogleTypeMoney.md) |  | [optional] 
**start_time** | **str** | Time when the rate plan becomes active in milliseconds since epoch. | [optional] 
**state** | **str** | Current state of the rate plan (draft or published). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_rate_plan import GoogleCloudApigeeV1RatePlan

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1RatePlan from a JSON string
google_cloud_apigee_v1_rate_plan_instance = GoogleCloudApigeeV1RatePlan.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1RatePlan.to_json())

# convert the object into a dict
google_cloud_apigee_v1_rate_plan_dict = google_cloud_apigee_v1_rate_plan_instance.to_dict()
# create an instance of GoogleCloudApigeeV1RatePlan from a dict
google_cloud_apigee_v1_rate_plan_from_dict = GoogleCloudApigeeV1RatePlan.from_dict(google_cloud_apigee_v1_rate_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


