# Group

A group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_details** | [**GroupContentDetails**](GroupContentDetails.md) |  | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 
**etag** | **str** | The Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube uses to uniquely identify the group. | [optional] 
**kind** | **str** | Identifies the API resource&#39;s type. The value will be &#x60;youtube#group&#x60;. | [optional] 
**snippet** | [**GroupSnippet**](GroupSnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.group import Group

# TODO update the JSON string below
json = "{}"
# create an instance of Group from a JSON string
group_instance = Group.from_json(json)
# print the JSON string representation of the object
print(Group.to_json())

# convert the object into a dict
group_dict = group_instance.to_dict()
# create an instance of Group from a dict
group_from_dict = Group.from_dict(group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


