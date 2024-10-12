# GroupObjectsRequest

Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children_object_ids** | **List[str]** | The object IDs of the objects to group. Only page elements can be grouped. There should be at least two page elements on the same page that are not already in another group. Some page elements, such as videos, tables and placeholders cannot be grouped. | [optional] 
**group_object_id** | **str** | A user-supplied object ID for the group to be created. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex &#x60;[a-zA-Z0-9_]&#x60;); remaining characters may include those as well as a hyphen or colon (matches regex &#x60;[a-zA-Z0-9_-:]&#x60;). The length of the ID must not be less than 5 or greater than 50. If you don&#39;t specify an ID, a unique one is generated. | [optional] 

## Example

```python
from openapi_client.models.group_objects_request import GroupObjectsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GroupObjectsRequest from a JSON string
group_objects_request_instance = GroupObjectsRequest.from_json(json)
# print the JSON string representation of the object
print(GroupObjectsRequest.to_json())

# convert the object into a dict
group_objects_request_dict = group_objects_request_instance.to_dict()
# create an instance of GroupObjectsRequest from a dict
group_objects_request_from_dict = GroupObjectsRequest.from_dict(group_objects_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


