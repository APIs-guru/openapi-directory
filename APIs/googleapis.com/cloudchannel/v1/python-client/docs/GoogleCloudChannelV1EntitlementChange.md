# GoogleCloudChannelV1EntitlementChange

Change event entry for Entitlement order history

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_reason** | **str** | The Entitlement&#39;s activation reason | [optional] 
**cancellation_reason** | **str** | Cancellation reason for the Entitlement. | [optional] 
**change_type** | **str** | The change action type. | [optional] 
**create_time** | **str** | The submitted time of the change. | [optional] 
**entitlement** | **str** | Required. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id} | [optional] 
**offer** | **str** | Required. Resource name of the Offer at the time of change. Takes the form: accounts/{account_id}/offers/{offer_id}. | [optional] 
**operator** | **str** | Human-readable identifier that shows what operator made a change. When the operator_type is RESELLER, this is the user&#39;s email address. For all other operator types, this is empty. | [optional] 
**operator_type** | **str** | Operator type responsible for the change. | [optional] 
**other_change_reason** | **str** | e.g. purchase_number change reason, entered by CRS. | [optional] 
**parameters** | [**List[GoogleCloudChannelV1Parameter]**](GoogleCloudChannelV1Parameter.md) | Extended parameters, such as: purchase_order_number, gcp_details; internal_correlation_id, long_running_operation_id, order_id; etc. | [optional] 
**provisioned_service** | [**GoogleCloudChannelV1ProvisionedService**](GoogleCloudChannelV1ProvisionedService.md) |  | [optional] 
**suspension_reason** | **str** | Suspension reason for the Entitlement. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_entitlement_change import GoogleCloudChannelV1EntitlementChange

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1EntitlementChange from a JSON string
google_cloud_channel_v1_entitlement_change_instance = GoogleCloudChannelV1EntitlementChange.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1EntitlementChange.to_json())

# convert the object into a dict
google_cloud_channel_v1_entitlement_change_dict = google_cloud_channel_v1_entitlement_change_instance.to_dict()
# create an instance of GoogleCloudChannelV1EntitlementChange from a dict
google_cloud_channel_v1_entitlement_change_from_dict = GoogleCloudChannelV1EntitlementChange.from_dict(google_cloud_channel_v1_entitlement_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


