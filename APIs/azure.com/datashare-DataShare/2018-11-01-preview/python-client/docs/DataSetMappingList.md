# DataSetMappingList

List response for get DataSetMappings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The Url of next result page. | [optional] 
**value** | [**List[DataSetMapping]**](DataSetMapping.md) | Collection of items of type DataTransferObjects. | 

## Example

```python
from openapi_client.models.data_set_mapping_list import DataSetMappingList

# TODO update the JSON string below
json = "{}"
# create an instance of DataSetMappingList from a JSON string
data_set_mapping_list_instance = DataSetMappingList.from_json(json)
# print the JSON string representation of the object
print(DataSetMappingList.to_json())

# convert the object into a dict
data_set_mapping_list_dict = data_set_mapping_list_instance.to_dict()
# create an instance of DataSetMappingList from a dict
data_set_mapping_list_from_dict = DataSetMappingList.from_dict(data_set_mapping_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


