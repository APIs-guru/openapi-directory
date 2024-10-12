# GroupItemResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The channel, video, playlist, or asset ID that YouTube uses to uniquely identify the item that is being added to the group. | [optional] 
**kind** | **str** | Identifies the type of resource being added to the group. Valid values for this property are: * &#x60;youtube#channel&#x60; * &#x60;youtube#playlist&#x60; * &#x60;youtube#video&#x60; * &#x60;youtubePartner#asset&#x60; | [optional] 

## Example

```python
from openapi_client.models.group_item_resource import GroupItemResource

# TODO update the JSON string below
json = "{}"
# create an instance of GroupItemResource from a JSON string
group_item_resource_instance = GroupItemResource.from_json(json)
# print the JSON string representation of the object
print(GroupItemResource.to_json())

# convert the object into a dict
group_item_resource_dict = group_item_resource_instance.to_dict()
# create an instance of GroupItemResource from a dict
group_item_resource_from_dict = GroupItemResource.from_dict(group_item_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


