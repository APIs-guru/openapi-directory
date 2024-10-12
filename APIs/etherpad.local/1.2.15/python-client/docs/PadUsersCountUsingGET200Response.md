# PadUsersCountUsingGET200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**data** | [**PadUsersCountUsingGET200ResponseData**](PadUsersCountUsingGET200ResponseData.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.pad_users_count_using_get200_response import PadUsersCountUsingGET200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PadUsersCountUsingGET200Response from a JSON string
pad_users_count_using_get200_response_instance = PadUsersCountUsingGET200Response.from_json(json)
# print the JSON string representation of the object
print(PadUsersCountUsingGET200Response.to_json())

# convert the object into a dict
pad_users_count_using_get200_response_dict = pad_users_count_using_get200_response_instance.to_dict()
# create an instance of PadUsersCountUsingGET200Response from a dict
pad_users_count_using_get200_response_from_dict = PadUsersCountUsingGET200Response.from_dict(pad_users_count_using_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


