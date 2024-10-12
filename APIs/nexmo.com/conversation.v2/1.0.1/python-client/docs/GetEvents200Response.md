# GetEvents200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded** | [**GetEvents200ResponseEmbedded**](GetEvents200ResponseEmbedded.md) |  | [optional] 
**links** | [**GetEvents200ResponseLinks**](GetEvents200ResponseLinks.md) |  | [optional] 
**page_size** | **int** | The number of results returned on this page. | [optional] 

## Example

```python
from openapi_client.models.get_events200_response import GetEvents200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetEvents200Response from a JSON string
get_events200_response_instance = GetEvents200Response.from_json(json)
# print the JSON string representation of the object
print(GetEvents200Response.to_json())

# convert the object into a dict
get_events200_response_dict = get_events200_response_instance.to_dict()
# create an instance of GetEvents200Response from a dict
get_events200_response_from_dict = GetEvents200Response.from_dict(get_events200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


