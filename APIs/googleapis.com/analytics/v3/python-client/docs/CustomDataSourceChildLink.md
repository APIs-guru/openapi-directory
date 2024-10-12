# CustomDataSourceChildLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Link to the list of daily uploads for this custom data source. Link to the list of uploads for this custom data source. | [optional] 
**type** | **str** | Value is \&quot;analytics#dailyUploads\&quot;. Value is \&quot;analytics#uploads\&quot;. | [optional] 

## Example

```python
from openapi_client.models.custom_data_source_child_link import CustomDataSourceChildLink

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDataSourceChildLink from a JSON string
custom_data_source_child_link_instance = CustomDataSourceChildLink.from_json(json)
# print the JSON string representation of the object
print(CustomDataSourceChildLink.to_json())

# convert the object into a dict
custom_data_source_child_link_dict = custom_data_source_child_link_instance.to_dict()
# create an instance of CustomDataSourceChildLink from a dict
custom_data_source_child_link_from_dict = CustomDataSourceChildLink.from_dict(custom_data_source_child_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


