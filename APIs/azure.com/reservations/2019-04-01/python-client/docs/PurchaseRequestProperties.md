# PurchaseRequestProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_scope_type** | [**AppliedScopeType**](AppliedScopeType.md) |  | [optional] 
**applied_scopes** | **List[str]** | List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared. | [optional] 
**billing_plan** | [**ReservationBillingPlan**](ReservationBillingPlan.md) |  | [optional] 
**billing_scope_id** | **str** | Subscription that will be charged for purchasing Reservation | [optional] 
**display_name** | **str** | Friendly name of the Reservation | [optional] 
**quantity** | **int** | Quantity of the SKUs that are part of the Reservation. Must be greater than zero. | [optional] 
**renew** | **bool** | Setting this to true will automatically purchase a new reservation on the expiration date time. | [optional] [default to False]
**reserved_resource_properties** | [**PurchaseRequestPropertiesReservedResourceProperties**](PurchaseRequestPropertiesReservedResourceProperties.md) |  | [optional] 
**reserved_resource_type** | [**ReservedResourceType**](ReservedResourceType.md) |  | [optional] 
**term** | [**ReservationTerm**](ReservationTerm.md) |  | [optional] 

## Example

```python
from openapi_client.models.purchase_request_properties import PurchaseRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PurchaseRequestProperties from a JSON string
purchase_request_properties_instance = PurchaseRequestProperties.from_json(json)
# print the JSON string representation of the object
print(PurchaseRequestProperties.to_json())

# convert the object into a dict
purchase_request_properties_dict = purchase_request_properties_instance.to_dict()
# create an instance of PurchaseRequestProperties from a dict
purchase_request_properties_from_dict = PurchaseRequestProperties.from_dict(purchase_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


