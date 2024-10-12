# GoogleCloudChannelV1Entitlement

An entitlement is a representation of a customer's ability to use a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**association_info** | [**GoogleCloudChannelV1AssociationInfo**](GoogleCloudChannelV1AssociationInfo.md) |  | [optional] 
**billing_account** | **str** | Optional. The billing account resource name that is used to pay for this entitlement. | [optional] 
**commitment_settings** | [**GoogleCloudChannelV1CommitmentSettings**](GoogleCloudChannelV1CommitmentSettings.md) |  | [optional] 
**create_time** | **str** | Output only. The time at which the entitlement is created. | [optional] [readonly] 
**name** | **str** | Output only. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}. | [optional] [readonly] 
**offer** | **str** | Required. The offer resource name for which the entitlement is to be created. Takes the form: accounts/{account_id}/offers/{offer_id}. | [optional] 
**parameters** | [**List[GoogleCloudChannelV1Parameter]**](GoogleCloudChannelV1Parameter.md) | Extended entitlement parameters. When creating an entitlement, valid parameter names and values are defined in the Offer.parameter_definitions. For Google Workspace, the following Parameters may be accepted as input: - max_units: The maximum assignable units for a flexible offer OR - num_units: The total commitment for commitment-based offers The response may additionally include the following output-only Parameters: - assigned_units: The number of licenses assigned to users. For Google Cloud billing subaccounts, the following Parameter may be accepted as input: - display_name: The display name of the billing subaccount. | [optional] 
**provisioned_service** | [**GoogleCloudChannelV1ProvisionedService**](GoogleCloudChannelV1ProvisionedService.md) |  | [optional] 
**provisioning_state** | **str** | Output only. Current provisioning state of the entitlement. | [optional] [readonly] 
**purchase_order_id** | **str** | Optional. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given, it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. This is only supported for Google Workspace entitlements. | [optional] 
**suspension_reasons** | **List[str]** | Output only. Enumerable of all current suspension reasons for an entitlement. | [optional] [readonly] 
**trial_settings** | [**GoogleCloudChannelV1TrialSettings**](GoogleCloudChannelV1TrialSettings.md) |  | [optional] 
**update_time** | **str** | Output only. The time at which the entitlement is updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_entitlement import GoogleCloudChannelV1Entitlement

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1Entitlement from a JSON string
google_cloud_channel_v1_entitlement_instance = GoogleCloudChannelV1Entitlement.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1Entitlement.to_json())

# convert the object into a dict
google_cloud_channel_v1_entitlement_dict = google_cloud_channel_v1_entitlement_instance.to_dict()
# create an instance of GoogleCloudChannelV1Entitlement from a dict
google_cloud_channel_v1_entitlement_from_dict = GoogleCloudChannelV1Entitlement.from_dict(google_cloud_channel_v1_entitlement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


