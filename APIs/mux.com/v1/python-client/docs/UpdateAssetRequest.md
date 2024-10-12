# UpdateAssetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**passthrough** | **str** | Arbitrary metadata set for the Asset. Max 255 characters. In order to clear this value, the field should be included with an empty string value. | [optional] 

## Example

```python
from openapi_client.models.update_asset_request import UpdateAssetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAssetRequest from a JSON string
update_asset_request_instance = UpdateAssetRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAssetRequest.to_json())

# convert the object into a dict
update_asset_request_dict = update_asset_request_instance.to_dict()
# create an instance of UpdateAssetRequest from a dict
update_asset_request_from_dict = UpdateAssetRequest.from_dict(update_asset_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


