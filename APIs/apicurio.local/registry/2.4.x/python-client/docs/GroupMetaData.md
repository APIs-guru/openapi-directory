# GroupMetaData



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | **str** |  | 
**created_on** | **datetime** |  | 
**description** | **str** |  | 
**id** | **str** | An ID of a single artifact group. | 
**modified_by** | **str** |  | 
**modified_on** | **datetime** |  | 
**properties** | **Dict[str, str]** | User-defined name-value pairs. Name and value must be strings. | 

## Example

```python
from openapi_client.models.group_meta_data import GroupMetaData

# TODO update the JSON string below
json = "{}"
# create an instance of GroupMetaData from a JSON string
group_meta_data_instance = GroupMetaData.from_json(json)
# print the JSON string representation of the object
print(GroupMetaData.to_json())

# convert the object into a dict
group_meta_data_dict = group_meta_data_instance.to_dict()
# create an instance of GroupMetaData from a dict
group_meta_data_from_dict = GroupMetaData.from_dict(group_meta_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


