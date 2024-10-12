# GetTokenIdResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_id** | **str** | Unique ID of the token | [optional] 
**token_name** | **str** | String representing the token Symbol | [optional] 

## Example

```python
from openapi_client.models.get_token_id_response import GetTokenIdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetTokenIdResponse from a JSON string
get_token_id_response_instance = GetTokenIdResponse.from_json(json)
# print the JSON string representation of the object
print(GetTokenIdResponse.to_json())

# convert the object into a dict
get_token_id_response_dict = get_token_id_response_instance.to_dict()
# create an instance of GetTokenIdResponse from a dict
get_token_id_response_from_dict = GetTokenIdResponse.from_dict(get_token_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


