# UpdateAssetMP4SupportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mp4_support** | **str** | String value for the level of mp4 support | [optional] 

## Example

```python
from openapi_client.models.update_asset_mp4_support_request import UpdateAssetMP4SupportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAssetMP4SupportRequest from a JSON string
update_asset_mp4_support_request_instance = UpdateAssetMP4SupportRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAssetMP4SupportRequest.to_json())

# convert the object into a dict
update_asset_mp4_support_request_dict = update_asset_mp4_support_request_instance.to_dict()
# create an instance of UpdateAssetMP4SupportRequest from a dict
update_asset_mp4_support_request_from_dict = UpdateAssetMP4SupportRequest.from_dict(update_asset_mp4_support_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


