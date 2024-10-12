# GetEndpoints200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | **object** | Endpoint to get the authentication token | [optional] 
**host** | **str** | Host name | [optional] 
**routes** | **object** | All the availables endpoints | [optional] 

## Example

```python
from openapi_client.models.get_endpoints200_response import GetEndpoints200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetEndpoints200Response from a JSON string
get_endpoints200_response_instance = GetEndpoints200Response.from_json(json)
# print the JSON string representation of the object
print(GetEndpoints200Response.to_json())

# convert the object into a dict
get_endpoints200_response_dict = get_endpoints200_response_instance.to_dict()
# create an instance of GetEndpoints200Response from a dict
get_endpoints200_response_from_dict = GetEndpoints200Response.from_dict(get_endpoints200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


