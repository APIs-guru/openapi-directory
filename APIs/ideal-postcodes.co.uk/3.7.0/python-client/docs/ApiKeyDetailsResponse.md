# ApiKeyDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**ApiKeyDetails**](ApiKeyDetails.md) |  | 

## Example

```python
from openapi_client.models.api_key_details_response import ApiKeyDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeyDetailsResponse from a JSON string
api_key_details_response_instance = ApiKeyDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(ApiKeyDetailsResponse.to_json())

# convert the object into a dict
api_key_details_response_dict = api_key_details_response_instance.to_dict()
# create an instance of ApiKeyDetailsResponse from a dict
api_key_details_response_from_dict = ApiKeyDetailsResponse.from_dict(api_key_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


