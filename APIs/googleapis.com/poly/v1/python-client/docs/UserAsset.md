# UserAsset

Data about the user's asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | [**Asset**](Asset.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_asset import UserAsset

# TODO update the JSON string below
json = "{}"
# create an instance of UserAsset from a JSON string
user_asset_instance = UserAsset.from_json(json)
# print the JSON string representation of the object
print(UserAsset.to_json())

# convert the object into a dict
user_asset_dict = user_asset_instance.to_dict()
# create an instance of UserAsset from a dict
user_asset_from_dict = UserAsset.from_dict(user_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


