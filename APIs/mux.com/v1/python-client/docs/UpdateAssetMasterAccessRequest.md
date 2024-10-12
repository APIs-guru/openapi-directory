# UpdateAssetMasterAccessRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**master_access** | **str** | Add or remove access to the master version of the video. | [optional] 

## Example

```python
from openapi_client.models.update_asset_master_access_request import UpdateAssetMasterAccessRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAssetMasterAccessRequest from a JSON string
update_asset_master_access_request_instance = UpdateAssetMasterAccessRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAssetMasterAccessRequest.to_json())

# convert the object into a dict
update_asset_master_access_request_dict = update_asset_master_access_request_instance.to_dict()
# create an instance of UpdateAssetMasterAccessRequest from a dict
update_asset_master_access_request_from_dict = UpdateAssetMasterAccessRequest.from_dict(update_asset_master_access_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


