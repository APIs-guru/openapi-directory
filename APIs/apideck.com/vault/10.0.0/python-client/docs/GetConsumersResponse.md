# GetConsumersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[GetConsumersResponseDataInner]**](GetConsumersResponseDataInner.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_consumers_response import GetConsumersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetConsumersResponse from a JSON string
get_consumers_response_instance = GetConsumersResponse.from_json(json)
# print the JSON string representation of the object
print(GetConsumersResponse.to_json())

# convert the object into a dict
get_consumers_response_dict = get_consumers_response_instance.to_dict()
# create an instance of GetConsumersResponse from a dict
get_consumers_response_from_dict = GetConsumersResponse.from_dict(get_consumers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


