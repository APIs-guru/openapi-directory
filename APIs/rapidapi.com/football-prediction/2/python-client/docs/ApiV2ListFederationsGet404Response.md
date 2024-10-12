# ApiV2ListFederationsGet404Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[ApiV2ListFederationsGet404ResponseErrorsInner]**](ApiV2ListFederationsGet404ResponseErrorsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_v2_list_federations_get404_response import ApiV2ListFederationsGet404Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV2ListFederationsGet404Response from a JSON string
api_v2_list_federations_get404_response_instance = ApiV2ListFederationsGet404Response.from_json(json)
# print the JSON string representation of the object
print(ApiV2ListFederationsGet404Response.to_json())

# convert the object into a dict
api_v2_list_federations_get404_response_dict = api_v2_list_federations_get404_response_instance.to_dict()
# create an instance of ApiV2ListFederationsGet404Response from a dict
api_v2_list_federations_get404_response_from_dict = ApiV2ListFederationsGet404Response.from_dict(api_v2_list_federations_get404_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


