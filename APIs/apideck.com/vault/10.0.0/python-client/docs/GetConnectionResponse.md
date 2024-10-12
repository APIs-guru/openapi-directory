# GetConnectionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Connection**](Connection.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_connection_response import GetConnectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetConnectionResponse from a JSON string
get_connection_response_instance = GetConnectionResponse.from_json(json)
# print the JSON string representation of the object
print(GetConnectionResponse.to_json())

# convert the object into a dict
get_connection_response_dict = get_connection_response_instance.to_dict()
# create an instance of GetConnectionResponse from a dict
get_connection_response_from_dict = GetConnectionResponse.from_dict(get_connection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


