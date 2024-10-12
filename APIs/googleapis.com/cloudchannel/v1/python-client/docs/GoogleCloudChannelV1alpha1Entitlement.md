# GoogleCloudChannelV1alpha1Entitlement

An entitlement is a representation of a customer's ability to use a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_units** | **int** | The current number of users that are assigned a license for the product defined in provisioned_service.skuId. Read-only. Deprecated: Use &#x60;parameters&#x60; instead. | [optional] 
**association_info** | [**GoogleCloudChannelV1alpha1AssociationInfo**](GoogleCloudChannelV1alpha1AssociationInfo.md) |  | [optional] 
**billing_account** | **str** | Optional. The billing account resource name that is used to pay for this entitlement. | [optional] 
**channel_partner_id** | **str** | Cloud Identity ID of a channel partner who will be the direct reseller for the customer&#39;s order. This field is generally used in 2-tier ordering, where the order is placed by a top-level distributor on behalf of their channel partner or reseller. Required for distributors. Deprecated: &#x60;channel_partner_id&#x60; has been moved to the Customer. | [optional] 
**commitment_settings** | [**GoogleCloudChannelV1alpha1CommitmentSettings**](GoogleCloudChannelV1alpha1CommitmentSettings.md) |  | [optional] 
**create_time** | **str** | Output only. The time at which the entitlement is created. | [optional] [readonly] 
**max_units** | **int** | Maximum number of units for a non commitment-based Offer, such as Flexible, Trial or Free entitlements. For commitment-based entitlements, this is a read-only field, which only the internal support team can update. Deprecated: Use &#x60;parameters&#x60; instead. | [optional] 
**name** | **str** | Output only. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}. | [optional] [readonly] 
**num_units** | **int** | Number of units for a commitment-based Offer. For example, for seat-based Offers, this would be the number of seats; for license-based Offers, this would be the number of licenses. Required for creating commitment-based Offers. Deprecated: Use &#x60;parameters&#x60; instead. | [optional] 
**offer** | **str** | Required. The offer resource name for which the entitlement is to be created. Takes the form: accounts/{account_id}/offers/{offer_id}. | [optional] 
**parameters** | [**List[GoogleCloudChannelV1alpha1Parameter]**](GoogleCloudChannelV1alpha1Parameter.md) | Extended entitlement parameters. When creating an entitlement, valid parameter names and values are defined in the Offer.parameter_definitions. For Google Workspace, the following Parameters may be accepted as input: - max_units: The maximum assignable units for a flexible offer OR - num_units: The total commitment for commitment-based offers The response may additionally include the following output-only Parameters: - assigned_units: The number of licenses assigned to users. For Google Cloud billing subaccounts, the following Parameter may be accepted as input: - display_name: The display name of the billing subaccount. | [optional] 
**provisioned_service** | [**GoogleCloudChannelV1alpha1ProvisionedService**](GoogleCloudChannelV1alpha1ProvisionedService.md) |  | [optional] 
**provisioning_state** | **str** | Output only. Current provisioning state of the entitlement. | [optional] [readonly] 
**purchase_order_id** | **str** | Optional. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given, it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. This is only supported for Google Workspace entitlements. | [optional] 
**suspension_reasons** | **List[str]** | Output only. Enumerable of all current suspension reasons for an entitlement. | [optional] [readonly] 
**trial_settings** | [**GoogleCloudChannelV1alpha1TrialSettings**](GoogleCloudChannelV1alpha1TrialSettings.md) |  | [optional] 
**update_time** | **str** | Output only. The time at which the entitlement is updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1alpha1_entitlement import GoogleCloudChannelV1alpha1Entitlement

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1alpha1Entitlement from a JSON string
google_cloud_channel_v1alpha1_entitlement_instance = GoogleCloudChannelV1alpha1Entitlement.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1alpha1Entitlement.to_json())

# convert the object into a dict
google_cloud_channel_v1alpha1_entitlement_dict = google_cloud_channel_v1alpha1_entitlement_instance.to_dict()
# create an instance of GoogleCloudChannelV1alpha1Entitlement from a dict
google_cloud_channel_v1alpha1_entitlement_from_dict = GoogleCloudChannelV1alpha1Entitlement.from_dict(google_cloud_channel_v1alpha1_entitlement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


