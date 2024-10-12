# DatabasesListResponse

Database list response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Database]**](Database.md) | List of database resources in the instance. | [optional] 
**kind** | **str** | This is always &#x60;sql#databasesList&#x60;. | [optional] 

## Example

```python
from openapi_client.models.databases_list_response import DatabasesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasesListResponse from a JSON string
databases_list_response_instance = DatabasesListResponse.from_json(json)
# print the JSON string representation of the object
print(DatabasesListResponse.to_json())

# convert the object into a dict
databases_list_response_dict = databases_list_response_instance.to_dict()
# create an instance of DatabasesListResponse from a dict
databases_list_response_from_dict = DatabasesListResponse.from_dict(databases_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


