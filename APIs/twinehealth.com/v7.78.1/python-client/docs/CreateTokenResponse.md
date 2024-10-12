# CreateTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TokenResource**](TokenResource.md) |  | 
**included** | [**List[GroupResource]**](GroupResource.md) |  | [optional] 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_token_response import CreateTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTokenResponse from a JSON string
create_token_response_instance = CreateTokenResponse.from_json(json)
# print the JSON string representation of the object
print(CreateTokenResponse.to_json())

# convert the object into a dict
create_token_response_dict = create_token_response_instance.to_dict()
# create an instance of CreateTokenResponse from a dict
create_token_response_from_dict = CreateTokenResponse.from_dict(create_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


