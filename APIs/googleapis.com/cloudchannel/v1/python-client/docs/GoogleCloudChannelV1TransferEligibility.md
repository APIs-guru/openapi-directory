# GoogleCloudChannelV1TransferEligibility

Specifies transfer eligibility of a SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Localized description if reseller is not eligible to transfer the SKU. | [optional] 
**ineligibility_reason** | **str** | Specified the reason for ineligibility. | [optional] 
**is_eligible** | **bool** | Whether reseller is eligible to transfer the SKU. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_transfer_eligibility import GoogleCloudChannelV1TransferEligibility

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1TransferEligibility from a JSON string
google_cloud_channel_v1_transfer_eligibility_instance = GoogleCloudChannelV1TransferEligibility.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1TransferEligibility.to_json())

# convert the object into a dict
google_cloud_channel_v1_transfer_eligibility_dict = google_cloud_channel_v1_transfer_eligibility_instance.to_dict()
# create an instance of GoogleCloudChannelV1TransferEligibility from a dict
google_cloud_channel_v1_transfer_eligibility_from_dict = GoogleCloudChannelV1TransferEligibility.from_dict(google_cloud_channel_v1_transfer_eligibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


