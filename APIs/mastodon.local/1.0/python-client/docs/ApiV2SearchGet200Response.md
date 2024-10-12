# ApiV2SearchGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts** | [**List[Account]**](Account.md) |  | [optional] 
**hashtags** | [**List[Status]**](Status.md) |  | [optional] 
**statuses** | [**List[Tag]**](Tag.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_v2_search_get200_response import ApiV2SearchGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV2SearchGet200Response from a JSON string
api_v2_search_get200_response_instance = ApiV2SearchGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiV2SearchGet200Response.to_json())

# convert the object into a dict
api_v2_search_get200_response_dict = api_v2_search_get200_response_instance.to_dict()
# create an instance of ApiV2SearchGet200Response from a dict
api_v2_search_get200_response_from_dict = ApiV2SearchGet200Response.from_dict(api_v2_search_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


