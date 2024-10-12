# ReservationProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_scope_type** | [**AppliedScopeType**](AppliedScopeType.md) |  | [optional] 
**applied_scopes** | **List[str]** | List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared. | [optional] 
**billing_plan** | [**ReservationBillingPlan**](ReservationBillingPlan.md) |  | [optional] 
**billing_scope_id** | **str** | Subscription that will be charged for purchasing Reservation | [optional] 
**display_name** | **str** | Friendly name for user to easily identify the reservation | [optional] 
**effective_date_time** | **datetime** | DateTime of the Reservation starting when this version is effective from. | [optional] 
**expiry_date** | **date** | This is the date when the Reservation will expire. | [optional] 
**extended_status_info** | [**ExtendedStatusInfo**](ExtendedStatusInfo.md) |  | [optional] 
**instance_flexibility** | [**InstanceFlexibility**](InstanceFlexibility.md) |  | [optional] 
**last_updated_date_time** | **datetime** | DateTime of the last time the Reservation was updated. | [optional] [readonly] 
**merge_properties** | [**ReservationMergeProperties**](ReservationMergeProperties.md) |  | [optional] 
**provisioning_state** | **str** | Current state of the reservation. | [optional] 
**quantity** | **int** | Quantity of the SKUs that are part of the Reservation. Must be greater than zero. | [optional] 
**renew** | **bool** | Setting this to true will automatically purchase a new reservation on the expiration date time. | [optional] [default to False]
**renew_destination** | **str** | Reservation Id of the reservation which is purchased because of renew. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}. | [optional] 
**renew_properties** | [**RenewPropertiesResponse**](RenewPropertiesResponse.md) |  | [optional] 
**renew_source** | **str** | Reservation Id of the reservation from which this reservation is renewed. Format of the resource Id is /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}. | [optional] 
**reserved_resource_type** | [**ReservedResourceType**](ReservedResourceType.md) |  | [optional] 
**sku_description** | **str** | Description of the SKU in english. | [optional] 
**split_properties** | [**ReservationSplitProperties**](ReservationSplitProperties.md) |  | [optional] 
**term** | [**ReservationTerm**](ReservationTerm.md) |  | [optional] 

## Example

```python
from openapi_client.models.reservation_properties import ReservationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReservationProperties from a JSON string
reservation_properties_instance = ReservationProperties.from_json(json)
# print the JSON string representation of the object
print(ReservationProperties.to_json())

# convert the object into a dict
reservation_properties_dict = reservation_properties_instance.to_dict()
# create an instance of ReservationProperties from a dict
reservation_properties_from_dict = ReservationProperties.from_dict(reservation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


