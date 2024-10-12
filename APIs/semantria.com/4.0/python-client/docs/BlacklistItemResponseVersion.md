# BlacklistItemResponseVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique blacklist item identifier | 
**modified** | **str** | The timestamp of the latest update of the record. Creation date of update didn&#39;t occur | 
**name** | **str** | Blacklist item name | 

## Example

```python
from openapi_client.models.blacklist_item_response_version import BlacklistItemResponseVersion

# TODO update the JSON string below
json = "{}"
# create an instance of BlacklistItemResponseVersion from a JSON string
blacklist_item_response_version_instance = BlacklistItemResponseVersion.from_json(json)
# print the JSON string representation of the object
print(BlacklistItemResponseVersion.to_json())

# convert the object into a dict
blacklist_item_response_version_dict = blacklist_item_response_version_instance.to_dict()
# create an instance of BlacklistItemResponseVersion from a dict
blacklist_item_response_version_from_dict = BlacklistItemResponseVersion.from_dict(blacklist_item_response_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


