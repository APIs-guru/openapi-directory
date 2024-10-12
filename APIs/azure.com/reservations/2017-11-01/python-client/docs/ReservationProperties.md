# ReservationProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_scope_type** | [**AppliedScopeType**](AppliedScopeType.md) |  | [optional] 
**applied_scopes** | **List[str]** | List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared. | [optional] 
**display_name** | **str** | Friendly name for user to easily identify the reservation | [optional] 
**effective_date_time** | **datetime** | DateTime of the Reservation starting when this version is effective from. | [optional] 
**expiry_date** | **date** | This is the date when the Reservation will expire. | [optional] 
**extended_status_info** | [**ExtendedStatusInfo**](ExtendedStatusInfo.md) |  | [optional] 
**last_updated_date_time** | **datetime** | DateTime of the last time the Reservation was updated. | [optional] [readonly] 
**merge_properties** | [**ReservationMergeProperties**](ReservationMergeProperties.md) |  | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**quantity** | **int** | Quantity of the SKUs that are part of the Reservation. | [optional] 
**split_properties** | [**ReservationSplitProperties**](ReservationSplitProperties.md) |  | [optional] 

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


