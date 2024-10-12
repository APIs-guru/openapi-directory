# RateLimitedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | &#x60;429X&#x60; type error response code | 
**message** | **str** | Request is being rate limited | 

## Example

```python
from openapi_client.models.rate_limited_response import RateLimitedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RateLimitedResponse from a JSON string
rate_limited_response_instance = RateLimitedResponse.from_json(json)
# print the JSON string representation of the object
print(RateLimitedResponse.to_json())

# convert the object into a dict
rate_limited_response_dict = rate_limited_response_instance.to_dict()
# create an instance of RateLimitedResponse from a dict
rate_limited_response_from_dict = RateLimitedResponse.from_dict(rate_limited_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


