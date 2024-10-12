# CreateSessionUsingGET200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**data** | [**CreateSessionUsingGET200ResponseData**](CreateSessionUsingGET200ResponseData.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_session_using_get200_response import CreateSessionUsingGET200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSessionUsingGET200Response from a JSON string
create_session_using_get200_response_instance = CreateSessionUsingGET200Response.from_json(json)
# print the JSON string representation of the object
print(CreateSessionUsingGET200Response.to_json())

# convert the object into a dict
create_session_using_get200_response_dict = create_session_using_get200_response_instance.to_dict()
# create an instance of CreateSessionUsingGET200Response from a dict
create_session_using_get200_response_from_dict = CreateSessionUsingGET200Response.from_dict(create_session_using_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


