# SharedLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**download_url** | **str** | The URL that can be used to download the file. | [optional] 
**expires_at** | **datetime** |  | [optional] [readonly] 
**password** | **str** | Optional password for the shared link. | [optional] 
**password_protected** | **bool** | Indicated if the shared link is password protected. | [optional] [readonly] 
**scope** | **str** | The scope of the shared link. | [optional] 
**target** | [**SharedLinkTarget**](SharedLinkTarget.md) |  | [optional] 
**target_id** | **str** | The ID of the file or folder to link. | 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**url** | **str** | The URL that can be used to view the file. | [optional] [readonly] 

## Example

```python
from openapi_client.models.shared_link import SharedLink

# TODO update the JSON string below
json = "{}"
# create an instance of SharedLink from a JSON string
shared_link_instance = SharedLink.from_json(json)
# print the JSON string representation of the object
print(SharedLink.to_json())

# convert the object into a dict
shared_link_dict = shared_link_instance.to_dict()
# create an instance of SharedLink from a dict
shared_link_from_dict = SharedLink.from_dict(shared_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


