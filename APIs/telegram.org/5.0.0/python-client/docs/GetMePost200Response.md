# GetMePost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | [default to True]
**result** | [**User**](User.md) |  | 

## Example

```python
from openapi_client.models.get_me_post200_response import GetMePost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetMePost200Response from a JSON string
get_me_post200_response_instance = GetMePost200Response.from_json(json)
# print the JSON string representation of the object
print(GetMePost200Response.to_json())

# convert the object into a dict
get_me_post200_response_dict = get_me_post200_response_instance.to_dict()
# create an instance of GetMePost200Response from a dict
get_me_post200_response_from_dict = GetMePost200Response.from_dict(get_me_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


