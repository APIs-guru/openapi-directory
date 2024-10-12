# GetBounceCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | [**List[GetBounceCounts200ResponseDaysInner]**](GetBounceCounts200ResponseDaysInner.md) |  | [optional] 
**hard_bounce** | **int** |  | [optional] 
**smtp_api_error** | **int** |  | [optional] 
**soft_bounce** | **int** |  | [optional] 
**transient** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_bounce_counts200_response import GetBounceCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetBounceCounts200Response from a JSON string
get_bounce_counts200_response_instance = GetBounceCounts200Response.from_json(json)
# print the JSON string representation of the object
print(GetBounceCounts200Response.to_json())

# convert the object into a dict
get_bounce_counts200_response_dict = get_bounce_counts200_response_instance.to_dict()
# create an instance of GetBounceCounts200Response from a dict
get_bounce_counts200_response_from_dict = GetBounceCounts200Response.from_dict(get_bounce_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


