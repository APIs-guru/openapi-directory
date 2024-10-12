# SavedQuery

A saved query which can be shared with others or used later.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**QueryContent**](QueryContent.md) |  | [optional] 
**create_time** | **str** | Output only. The create time of this saved query. | [optional] [readonly] 
**creator** | **str** | Output only. The account&#39;s email address who has created this saved query. | [optional] [readonly] 
**description** | **str** | The description of this saved query. This value should be fewer than 255 characters. | [optional] 
**labels** | **Dict[str, str]** | Labels applied on the resource. This value should not contain more than 10 entries. The key and value of each entry must be non-empty and fewer than 64 characters. | [optional] 
**last_update_time** | **str** | Output only. The last update time of this saved query. | [optional] [readonly] 
**last_updater** | **str** | Output only. The account&#39;s email address who has updated this saved query most recently. | [optional] [readonly] 
**name** | **str** | The resource name of the saved query. The format must be: * projects/project_number/savedQueries/saved_query_id * folders/folder_number/savedQueries/saved_query_id * organizations/organization_number/savedQueries/saved_query_id | [optional] 

## Example

```python
from openapi_client.models.saved_query import SavedQuery

# TODO update the JSON string below
json = "{}"
# create an instance of SavedQuery from a JSON string
saved_query_instance = SavedQuery.from_json(json)
# print the JSON string representation of the object
print(SavedQuery.to_json())

# convert the object into a dict
saved_query_dict = saved_query_instance.to_dict()
# create an instance of SavedQuery from a dict
saved_query_from_dict = SavedQuery.from_dict(saved_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


