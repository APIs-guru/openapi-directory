# BlacklistItemUpdateVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique blacklist item identifier | 
**name** | **str** | Blacklist item name | 

## Example

```python
from openapi_client.models.blacklist_item_update_version import BlacklistItemUpdateVersion

# TODO update the JSON string below
json = "{}"
# create an instance of BlacklistItemUpdateVersion from a JSON string
blacklist_item_update_version_instance = BlacklistItemUpdateVersion.from_json(json)
# print the JSON string representation of the object
print(BlacklistItemUpdateVersion.to_json())

# convert the object into a dict
blacklist_item_update_version_dict = blacklist_item_update_version_instance.to_dict()
# create an instance of BlacklistItemUpdateVersion from a dict
blacklist_item_update_version_from_dict = BlacklistItemUpdateVersion.from_dict(blacklist_item_update_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


