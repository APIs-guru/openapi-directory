# ChatClientDataSourceMarkup

For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Chat. The data source populates selection items for the multiselect menu. For example, a user can select Google Chat spaces that they're a member of. [Google Chat apps](https://developers.google.com/chat):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**space_data_source** | [**SpaceDataSource**](SpaceDataSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.chat_client_data_source_markup import ChatClientDataSourceMarkup

# TODO update the JSON string below
json = "{}"
# create an instance of ChatClientDataSourceMarkup from a JSON string
chat_client_data_source_markup_instance = ChatClientDataSourceMarkup.from_json(json)
# print the JSON string representation of the object
print(ChatClientDataSourceMarkup.to_json())

# convert the object into a dict
chat_client_data_source_markup_dict = chat_client_data_source_markup_instance.to_dict()
# create an instance of ChatClientDataSourceMarkup from a dict
chat_client_data_source_markup_from_dict = ChatClientDataSourceMarkup.from_dict(chat_client_data_source_markup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


