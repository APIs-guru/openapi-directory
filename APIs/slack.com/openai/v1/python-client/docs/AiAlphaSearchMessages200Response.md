# AiAlphaSearchMessages200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** | Boolean indicating whether or not the request was successful | 
**results** | [**List[Result]**](Result.md) |  | [optional] 

## Example

```python
from openapi_client.models.ai_alpha_search_messages200_response import AiAlphaSearchMessages200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AiAlphaSearchMessages200Response from a JSON string
ai_alpha_search_messages200_response_instance = AiAlphaSearchMessages200Response.from_json(json)
# print the JSON string representation of the object
print(AiAlphaSearchMessages200Response.to_json())

# convert the object into a dict
ai_alpha_search_messages200_response_dict = ai_alpha_search_messages200_response_instance.to_dict()
# create an instance of AiAlphaSearchMessages200Response from a dict
ai_alpha_search_messages200_response_from_dict = AiAlphaSearchMessages200Response.from_dict(ai_alpha_search_messages200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


