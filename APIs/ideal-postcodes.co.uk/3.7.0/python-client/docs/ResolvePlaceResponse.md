# ResolvePlaceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**ResolvePlaceResponseResult**](ResolvePlaceResponseResult.md) |  | 

## Example

```python
from openapi_client.models.resolve_place_response import ResolvePlaceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResolvePlaceResponse from a JSON string
resolve_place_response_instance = ResolvePlaceResponse.from_json(json)
# print the JSON string representation of the object
print(ResolvePlaceResponse.to_json())

# convert the object into a dict
resolve_place_response_dict = resolve_place_response_instance.to_dict()
# create an instance of ResolvePlaceResponse from a dict
resolve_place_response_from_dict = ResolvePlaceResponse.from_dict(resolve_place_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


