# CustomDataSource

JSON template for an Analytics custom data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID to which this custom data source belongs. | [optional] 
**child_link** | [**CustomDataSourceChildLink**](CustomDataSourceChildLink.md) |  | [optional] 
**created** | **datetime** | Time this custom data source was created. | [optional] 
**description** | **str** | Description of custom data source. | [optional] 
**id** | **str** | Custom data source ID. | [optional] 
**import_behavior** | **str** |  | [optional] 
**kind** | **str** | Resource type for Analytics custom data source. | [optional] [default to 'analytics#customDataSource']
**name** | **str** | Name of this custom data source. | [optional] 
**parent_link** | [**CustomDataSourceParentLink**](CustomDataSourceParentLink.md) |  | [optional] 
**profiles_linked** | **List[str]** | IDs of views (profiles) linked to the custom data source. | [optional] 
**var_schema** | **List[str]** | Collection of schema headers of the custom data source. | [optional] 
**self_link** | **str** | Link for this Analytics custom data source. | [optional] 
**type** | **str** | Type of the custom data source. | [optional] 
**updated** | **datetime** | Time this custom data source was last modified. | [optional] 
**upload_type** | **str** | Upload type of the custom data source. | [optional] 
**web_property_id** | **str** | Web property ID of the form UA-XXXXX-YY to which this custom data source belongs. | [optional] 

## Example

```python
from openapi_client.models.custom_data_source import CustomDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDataSource from a JSON string
custom_data_source_instance = CustomDataSource.from_json(json)
# print the JSON string representation of the object
print(CustomDataSource.to_json())

# convert the object into a dict
custom_data_source_dict = custom_data_source_instance.to_dict()
# create an instance of CustomDataSource from a dict
custom_data_source_from_dict = CustomDataSource.from_dict(custom_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


