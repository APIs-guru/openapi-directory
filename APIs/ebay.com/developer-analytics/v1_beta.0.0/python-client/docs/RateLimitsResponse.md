# RateLimitsResponse

This complex type defines a list of rate-limit data as it pertains to a method within the specified version of an API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate_limits** | [**List[RateLimit]**](RateLimit.md) | The rate-limit data for the specified APIs. The rate-limit data is returned for all the methods in the specified APIs and data pertains to the current time window. | [optional] 

## Example

```python
from openapi_client.models.rate_limits_response import RateLimitsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RateLimitsResponse from a JSON string
rate_limits_response_instance = RateLimitsResponse.from_json(json)
# print the JSON string representation of the object
print(RateLimitsResponse.to_json())

# convert the object into a dict
rate_limits_response_dict = rate_limits_response_instance.to_dict()
# create an instance of RateLimitsResponse from a dict
rate_limits_response_from_dict = RateLimitsResponse.from_dict(rate_limits_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


