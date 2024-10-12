# ListSupportedDatabaseFlagsResponse

Message for response to listing SupportedDatabaseFlags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**supported_database_flags** | [**List[SupportedDatabaseFlag]**](SupportedDatabaseFlag.md) | The list of SupportedDatabaseFlags. | [optional] 

## Example

```python
from openapi_client.models.list_supported_database_flags_response import ListSupportedDatabaseFlagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSupportedDatabaseFlagsResponse from a JSON string
list_supported_database_flags_response_instance = ListSupportedDatabaseFlagsResponse.from_json(json)
# print the JSON string representation of the object
print(ListSupportedDatabaseFlagsResponse.to_json())

# convert the object into a dict
list_supported_database_flags_response_dict = list_supported_database_flags_response_instance.to_dict()
# create an instance of ListSupportedDatabaseFlagsResponse from a dict
list_supported_database_flags_response_from_dict = ListSupportedDatabaseFlagsResponse.from_dict(list_supported_database_flags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


