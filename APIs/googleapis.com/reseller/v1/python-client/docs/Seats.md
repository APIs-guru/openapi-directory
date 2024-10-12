# Seats

JSON template for subscription seats.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies the resource as a subscription seat setting. Value: &#x60;subscriptions#seats&#x60; | [optional] [default to 'subscriptions#seats']
**licensed_number_of_seats** | **int** | Read-only field containing the current number of users that are assigned a license for the product defined in &#x60;skuId&#x60;. This field&#39;s value is equivalent to the numerical count of users returned by the Enterprise License Manager API method: [&#x60;listForProductAndSku&#x60;](/admin-sdk/licensing/v1/reference/licenseAssignments/listForProductAndSku). | [optional] 
**maximum_number_of_seats** | **int** | This is a required property and is exclusive to subscriptions with &#x60;FLEXIBLE&#x60; or &#x60;TRIAL&#x60; plans. This property sets the maximum number of licensed users allowed on a subscription. This quantity can be increased up to the maximum limit defined in the reseller&#39;s contract. The minimum quantity is the current number of users in the customer account. *Note: *G Suite subscriptions automatically assign a license to every user. | [optional] 
**number_of_seats** | **int** | This is a required property and is exclusive to subscriptions with &#x60;ANNUAL_MONTHLY_PAY&#x60; and &#x60;ANNUAL_YEARLY_PAY&#x60; plans. This property sets the maximum number of licenses assignable to users on a subscription. The reseller can add more licenses, but once set, the &#x60;numberOfSeats&#x60; cannot be reduced until renewal. The reseller is invoiced based on the &#x60;numberOfSeats&#x60; value regardless of how many of these user licenses are assigned. *Note: *Google Workspace subscriptions automatically assign a license to every user. | [optional] 

## Example

```python
from openapi_client.models.seats import Seats

# TODO update the JSON string below
json = "{}"
# create an instance of Seats from a JSON string
seats_instance = Seats.from_json(json)
# print the JSON string representation of the object
print(Seats.to_json())

# convert the object into a dict
seats_dict = seats_instance.to_dict()
# create an instance of Seats from a dict
seats_from_dict = Seats.from_dict(seats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


