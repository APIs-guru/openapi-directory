# GetRateLimitsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android** | [**Dict[str, LimitInfo]**](LimitInfo.md) | Map of endpoint rate limits for the Android platform | [optional] 
**duration** | **str** |  | 
**ios** | [**Dict[str, LimitInfo]**](LimitInfo.md) | Map of endpoint rate limits for the iOS platform | [optional] 
**server_side** | [**Dict[str, LimitInfo]**](LimitInfo.md) | Map of endpoint rate limits for the server-side platform | [optional] 
**web** | [**Dict[str, LimitInfo]**](LimitInfo.md) | Map of endpoint rate limits for the web platform | [optional] 

## Example

```python
from openapi_client.models.get_rate_limits_response import GetRateLimitsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetRateLimitsResponse from a JSON string
get_rate_limits_response_instance = GetRateLimitsResponse.from_json(json)
# print the JSON string representation of the object
print(GetRateLimitsResponse.to_json())

# convert the object into a dict
get_rate_limits_response_dict = get_rate_limits_response_instance.to_dict()
# create an instance of GetRateLimitsResponse from a dict
get_rate_limits_response_from_dict = GetRateLimitsResponse.from_dict(get_rate_limits_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


