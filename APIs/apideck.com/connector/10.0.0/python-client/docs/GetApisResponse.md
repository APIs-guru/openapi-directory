# GetApisResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Api]**](Api.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_apis_response import GetApisResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetApisResponse from a JSON string
get_apis_response_instance = GetApisResponse.from_json(json)
# print the JSON string representation of the object
print(GetApisResponse.to_json())

# convert the object into a dict
get_apis_response_dict = get_apis_response_instance.to_dict()
# create an instance of GetApisResponse from a dict
get_apis_response_from_dict = GetApisResponse.from_dict(get_apis_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


