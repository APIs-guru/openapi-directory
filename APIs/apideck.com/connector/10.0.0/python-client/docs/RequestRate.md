# RequestRate

The rate at which requests for resources will be made to downstream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate** | **int** | The number of requests per window unit. | 
**size** | **int** | Size of request window. | 
**unit** | **str** | The window unit for the rate. | 

## Example

```python
from openapi_client.models.request_rate import RequestRate

# TODO update the JSON string below
json = "{}"
# create an instance of RequestRate from a JSON string
request_rate_instance = RequestRate.from_json(json)
# print the JSON string representation of the object
print(RequestRate.to_json())

# convert the object into a dict
request_rate_dict = request_rate_instance.to_dict()
# create an instance of RequestRate from a dict
request_rate_from_dict = RequestRate.from_dict(request_rate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


