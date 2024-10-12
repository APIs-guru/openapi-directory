# SpaceDataSource

A data source that populates Google Chat spaces as selection items for a multiselect menu. Only populates spaces that the user is a member of. [Google Chat apps](https://developers.google.com/chat):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_to_current_space** | **bool** | If set to &#x60;true&#x60;, the multiselect menu selects the current Google Chat space as an item by default. | [optional] 

## Example

```python
from openapi_client.models.space_data_source import SpaceDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of SpaceDataSource from a JSON string
space_data_source_instance = SpaceDataSource.from_json(json)
# print the JSON string representation of the object
print(SpaceDataSource.to_json())

# convert the object into a dict
space_data_source_dict = space_data_source_instance.to_dict()
# create an instance of SpaceDataSource from a dict
space_data_source_from_dict = SpaceDataSource.from_dict(space_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


