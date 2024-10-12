# GetMembers200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded** | [**GetMembers200ResponseEmbedded**](GetMembers200ResponseEmbedded.md) |  | [optional] 
**links** | [**GetMembers200ResponseLinks**](GetMembers200ResponseLinks.md) |  | [optional] 
**page_size** | **int** | The number of results returned on this page | [optional] 

## Example

```python
from openapi_client.models.get_members200_response import GetMembers200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetMembers200Response from a JSON string
get_members200_response_instance = GetMembers200Response.from_json(json)
# print the JSON string representation of the object
print(GetMembers200Response.to_json())

# convert the object into a dict
get_members200_response_dict = get_members200_response_instance.to_dict()
# create an instance of GetMembers200Response from a dict
get_members200_response_from_dict = GetMembers200Response.from_dict(get_members200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


