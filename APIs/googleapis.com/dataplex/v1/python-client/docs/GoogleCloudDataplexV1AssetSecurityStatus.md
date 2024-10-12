# GoogleCloudDataplexV1AssetSecurityStatus

Security policy status of the asset. Data security policy, i.e., readers, writers & owners, should be specified in the lake/zone/asset IAM policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Additional information about the current state. | [optional] 
**state** | **str** | The current state of the security policy applied to the attached resource. | [optional] 
**update_time** | **str** | Last update time of the status. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_asset_security_status import GoogleCloudDataplexV1AssetSecurityStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1AssetSecurityStatus from a JSON string
google_cloud_dataplex_v1_asset_security_status_instance = GoogleCloudDataplexV1AssetSecurityStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1AssetSecurityStatus.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_asset_security_status_dict = google_cloud_dataplex_v1_asset_security_status_instance.to_dict()
# create an instance of GoogleCloudDataplexV1AssetSecurityStatus from a dict
google_cloud_dataplex_v1_asset_security_status_from_dict = GoogleCloudDataplexV1AssetSecurityStatus.from_dict(google_cloud_dataplex_v1_asset_security_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


