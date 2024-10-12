# HostAppDataSourceMarkup

For a `SelectionInput` widget that uses a multiselect menu, a data source from a Google Workspace application. The data source populates selection items for the multiselect menu. [Google Chat apps](https://developers.google.com/chat):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_data_source** | [**ChatClientDataSourceMarkup**](ChatClientDataSourceMarkup.md) |  | [optional] 

## Example

```python
from openapi_client.models.host_app_data_source_markup import HostAppDataSourceMarkup

# TODO update the JSON string below
json = "{}"
# create an instance of HostAppDataSourceMarkup from a JSON string
host_app_data_source_markup_instance = HostAppDataSourceMarkup.from_json(json)
# print the JSON string representation of the object
print(HostAppDataSourceMarkup.to_json())

# convert the object into a dict
host_app_data_source_markup_dict = host_app_data_source_markup_instance.to_dict()
# create an instance of HostAppDataSourceMarkup from a dict
host_app_data_source_markup_from_dict = HostAppDataSourceMarkup.from_dict(host_app_data_source_markup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


