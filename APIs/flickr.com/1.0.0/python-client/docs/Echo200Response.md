# Echo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**echo** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 

## Example

```python
from openapi_client.models.echo200_response import Echo200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Echo200Response from a JSON string
echo200_response_instance = Echo200Response.from_json(json)
# print the JSON string representation of the object
print(Echo200Response.to_json())

# convert the object into a dict
echo200_response_dict = echo200_response_instance.to_dict()
# create an instance of Echo200Response from a dict
echo200_response_from_dict = Echo200Response.from_dict(echo200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


