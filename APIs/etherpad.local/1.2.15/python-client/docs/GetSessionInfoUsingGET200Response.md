# GetSessionInfoUsingGET200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**data** | [**GetSessionInfoUsingGET200ResponseData**](GetSessionInfoUsingGET200ResponseData.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_session_info_using_get200_response import GetSessionInfoUsingGET200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetSessionInfoUsingGET200Response from a JSON string
get_session_info_using_get200_response_instance = GetSessionInfoUsingGET200Response.from_json(json)
# print the JSON string representation of the object
print(GetSessionInfoUsingGET200Response.to_json())

# convert the object into a dict
get_session_info_using_get200_response_dict = get_session_info_using_get200_response_instance.to_dict()
# create an instance of GetSessionInfoUsingGET200Response from a dict
get_session_info_using_get200_response_from_dict = GetSessionInfoUsingGET200Response.from_dict(get_session_info_using_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


