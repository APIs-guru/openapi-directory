# RateRequestRateOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate_options** | [**RateRequestBody**](RateRequestBody.md) | The rate options | [optional] 

## Example

```python
from openapi_client.models.rate_request_rate_options import RateRequestRateOptions

# TODO update the JSON string below
json = "{}"
# create an instance of RateRequestRateOptions from a JSON string
rate_request_rate_options_instance = RateRequestRateOptions.from_json(json)
# print the JSON string representation of the object
print(RateRequestRateOptions.to_json())

# convert the object into a dict
rate_request_rate_options_dict = rate_request_rate_options_instance.to_dict()
# create an instance of RateRequestRateOptions from a dict
rate_request_rate_options_from_dict = RateRequestRateOptions.from_dict(rate_request_rate_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


