# CreateGroupMetaData



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | 
**properties** | **Dict[str, str]** | User-defined name-value pairs. Name and value must be strings. | [optional] 

## Example

```python
from openapi_client.models.create_group_meta_data import CreateGroupMetaData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGroupMetaData from a JSON string
create_group_meta_data_instance = CreateGroupMetaData.from_json(json)
# print the JSON string representation of the object
print(CreateGroupMetaData.to_json())

# convert the object into a dict
create_group_meta_data_dict = create_group_meta_data_instance.to_dict()
# create an instance of CreateGroupMetaData from a dict
create_group_meta_data_from_dict = CreateGroupMetaData.from_dict(create_group_meta_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


