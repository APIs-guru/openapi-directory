# GetLastEditedUsingGET200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**data** | [**GetLastEditedUsingGET200ResponseData**](GetLastEditedUsingGET200ResponseData.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_last_edited_using_get200_response import GetLastEditedUsingGET200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetLastEditedUsingGET200Response from a JSON string
get_last_edited_using_get200_response_instance = GetLastEditedUsingGET200Response.from_json(json)
# print the JSON string representation of the object
print(GetLastEditedUsingGET200Response.to_json())

# convert the object into a dict
get_last_edited_using_get200_response_dict = get_last_edited_using_get200_response_instance.to_dict()
# create an instance of GetLastEditedUsingGET200Response from a dict
get_last_edited_using_get200_response_from_dict = GetLastEditedUsingGET200Response.from_dict(get_last_edited_using_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


