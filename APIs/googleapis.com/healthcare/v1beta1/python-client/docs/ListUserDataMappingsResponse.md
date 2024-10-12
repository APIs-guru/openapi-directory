# ListUserDataMappingsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**user_data_mappings** | [**List[UserDataMapping]**](UserDataMapping.md) | The returned User data mappings. The maximum number of User data mappings returned is determined by the value of page_size in the ListUserDataMappingsRequest. | [optional] 

## Example

```python
from openapi_client.models.list_user_data_mappings_response import ListUserDataMappingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUserDataMappingsResponse from a JSON string
list_user_data_mappings_response_instance = ListUserDataMappingsResponse.from_json(json)
# print the JSON string representation of the object
print(ListUserDataMappingsResponse.to_json())

# convert the object into a dict
list_user_data_mappings_response_dict = list_user_data_mappings_response_instance.to_dict()
# create an instance of ListUserDataMappingsResponse from a dict
list_user_data_mappings_response_from_dict = ListUserDataMappingsResponse.from_dict(list_user_data_mappings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


