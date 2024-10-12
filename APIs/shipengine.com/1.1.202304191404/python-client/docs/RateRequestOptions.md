# RateRequestOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate_options** | [**RateRequestBody**](RateRequestBody.md) | The rate options | [optional] 

## Example

```python
from openapi_client.models.rate_request_options import RateRequestOptions

# TODO update the JSON string below
json = "{}"
# create an instance of RateRequestOptions from a JSON string
rate_request_options_instance = RateRequestOptions.from_json(json)
# print the JSON string representation of the object
print(RateRequestOptions.to_json())

# convert the object into a dict
rate_request_options_dict = rate_request_options_instance.to_dict()
# create an instance of RateRequestOptions from a dict
rate_request_options_from_dict = RateRequestOptions.from_dict(rate_request_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


