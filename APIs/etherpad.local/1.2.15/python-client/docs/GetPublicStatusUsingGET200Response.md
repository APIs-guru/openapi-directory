# GetPublicStatusUsingGET200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**data** | [**GetPublicStatusUsingGET200ResponseData**](GetPublicStatusUsingGET200ResponseData.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_public_status_using_get200_response import GetPublicStatusUsingGET200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetPublicStatusUsingGET200Response from a JSON string
get_public_status_using_get200_response_instance = GetPublicStatusUsingGET200Response.from_json(json)
# print the JSON string representation of the object
print(GetPublicStatusUsingGET200Response.to_json())

# convert the object into a dict
get_public_status_using_get200_response_dict = get_public_status_using_get200_response_instance.to_dict()
# create an instance of GetPublicStatusUsingGET200Response from a dict
get_public_status_using_get200_response_from_dict = GetPublicStatusUsingGET200Response.from_dict(get_public_status_using_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


