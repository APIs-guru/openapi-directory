# ChangePlanRequest

JSON template for the ChangePlan rpc request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deal_code** | **str** | Google-issued code (100 char max) for discounted pricing on subscription plans. Deal code must be included in &#x60;changePlan&#x60; request in order to receive discounted rate. This property is optional. If a deal code has already been added to a subscription, this property may be left empty and the existing discounted rate will still apply (if not empty, only provide the deal code that is already present on the subscription). If a deal code has never been added to a subscription and this property is left blank, regular pricing will apply. | [optional] 
**kind** | **str** | Identifies the resource as a subscription change plan request. Value: &#x60;subscriptions#changePlanRequest&#x60; | [optional] [default to 'subscriptions#changePlanRequest']
**plan_name** | **str** | The &#x60;planName&#x60; property is required. This is the name of the subscription&#39;s payment plan. For more information about the Google payment plans, see API concepts. Possible values are: - &#x60;ANNUAL_MONTHLY_PAY&#x60; - The annual commitment plan with monthly payments *Caution: *&#x60;ANNUAL_MONTHLY_PAY&#x60; is returned as &#x60;ANNUAL&#x60; in all API responses. - &#x60;ANNUAL_YEARLY_PAY&#x60; - The annual commitment plan with yearly payments - &#x60;FLEXIBLE&#x60; - The flexible plan - &#x60;TRIAL&#x60; - The 30-day free trial plan  | [optional] 
**purchase_order_id** | **str** | This is an optional property. This purchase order (PO) information is for resellers to use for their company tracking usage. If a &#x60;purchaseOrderId&#x60; value is given it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. | [optional] 
**seats** | [**Seats**](Seats.md) |  | [optional] 

## Example

```python
from openapi_client.models.change_plan_request import ChangePlanRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChangePlanRequest from a JSON string
change_plan_request_instance = ChangePlanRequest.from_json(json)
# print the JSON string representation of the object
print(ChangePlanRequest.to_json())

# convert the object into a dict
change_plan_request_dict = change_plan_request_instance.to_dict()
# create an instance of ChangePlanRequest from a dict
change_plan_request_from_dict = ChangePlanRequest.from_dict(change_plan_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


