# GetDelayGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delay** | **int** |  | [optional] 
**next** | **int** |  | [optional] 
**next_relative** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_delay_get200_response import GetDelayGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetDelayGet200Response from a JSON string
get_delay_get200_response_instance = GetDelayGet200Response.from_json(json)
# print the JSON string representation of the object
print(GetDelayGet200Response.to_json())

# convert the object into a dict
get_delay_get200_response_dict = get_delay_get200_response_instance.to_dict()
# create an instance of GetDelayGet200Response from a dict
get_delay_get200_response_from_dict = GetDelayGet200Response.from_dict(get_delay_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


