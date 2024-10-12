# GetUsers200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded** | [**GetUsers200ResponseEmbedded**](GetUsers200ResponseEmbedded.md) |  | [optional] 
**links** | [**GetUsers200ResponseLinks**](GetUsers200ResponseLinks.md) |  | [optional] 
**cursor** | **str** | Current cursor | [optional] 
**page_size** | **int** | The number of results returned on this page | [optional] 

## Example

```python
from openapi_client.models.get_users200_response import GetUsers200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetUsers200Response from a JSON string
get_users200_response_instance = GetUsers200Response.from_json(json)
# print the JSON string representation of the object
print(GetUsers200Response.to_json())

# convert the object into a dict
get_users200_response_dict = get_users200_response_instance.to_dict()
# create an instance of GetUsers200Response from a dict
get_users200_response_from_dict = GetUsers200Response.from_dict(get_users200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


