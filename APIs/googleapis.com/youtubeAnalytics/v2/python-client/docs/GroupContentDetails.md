# GroupContentDetails

A group's content details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_count** | **str** | The number of items in the group. | [optional] 
**item_type** | **str** | The type of resources that the group contains. Valid values for this property are: * &#x60;youtube#channel&#x60; * &#x60;youtube#playlist&#x60; * &#x60;youtube#video&#x60; * &#x60;youtubePartner#asset&#x60; | [optional] 

## Example

```python
from openapi_client.models.group_content_details import GroupContentDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GroupContentDetails from a JSON string
group_content_details_instance = GroupContentDetails.from_json(json)
# print the JSON string representation of the object
print(GroupContentDetails.to_json())

# convert the object into a dict
group_content_details_dict = group_content_details_instance.to_dict()
# create an instance of GroupContentDetails from a dict
group_content_details_from_dict = GroupContentDetails.from_dict(group_content_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


