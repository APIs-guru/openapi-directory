# GetUsers200ResponseEmbeddedData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**users** | [**List[UserList]**](UserList.md) | List of users matching the provided filter | [optional] 

## Example

```python
from openapi_client.models.get_users200_response_embedded_data import GetUsers200ResponseEmbeddedData

# TODO update the JSON string below
json = "{}"
# create an instance of GetUsers200ResponseEmbeddedData from a JSON string
get_users200_response_embedded_data_instance = GetUsers200ResponseEmbeddedData.from_json(json)
# print the JSON string representation of the object
print(GetUsers200ResponseEmbeddedData.to_json())

# convert the object into a dict
get_users200_response_embedded_data_dict = get_users200_response_embedded_data_instance.to_dict()
# create an instance of GetUsers200ResponseEmbeddedData from a dict
get_users200_response_embedded_data_from_dict = GetUsers200ResponseEmbeddedData.from_dict(get_users200_response_embedded_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


