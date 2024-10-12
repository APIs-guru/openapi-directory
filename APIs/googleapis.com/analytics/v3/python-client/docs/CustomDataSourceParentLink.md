# CustomDataSourceParentLink

Parent link for this custom data source. Points to the web property to which this custom data source belongs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Link to the web property to which this custom data source belongs. | [optional] 
**type** | **str** | Value is \&quot;analytics#webproperty\&quot;. | [optional] [default to 'analytics#webproperty']

## Example

```python
from openapi_client.models.custom_data_source_parent_link import CustomDataSourceParentLink

# TODO update the JSON string below
json = "{}"
# create an instance of CustomDataSourceParentLink from a JSON string
custom_data_source_parent_link_instance = CustomDataSourceParentLink.from_json(json)
# print the JSON string representation of the object
print(CustomDataSourceParentLink.to_json())

# convert the object into a dict
custom_data_source_parent_link_dict = custom_data_source_parent_link_instance.to_dict()
# create an instance of CustomDataSourceParentLink from a dict
custom_data_source_parent_link_from_dict = CustomDataSourceParentLink.from_dict(custom_data_source_parent_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


