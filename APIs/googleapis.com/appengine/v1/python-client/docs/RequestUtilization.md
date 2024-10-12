# RequestUtilization

Target scaling by request utilization. Only applicable in the App Engine flexible environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_concurrent_requests** | **int** | Target number of concurrent requests. | [optional] 
**target_request_count_per_second** | **int** | Target requests per second. | [optional] 

## Example

```python
from openapi_client.models.request_utilization import RequestUtilization

# TODO update the JSON string below
json = "{}"
# create an instance of RequestUtilization from a JSON string
request_utilization_instance = RequestUtilization.from_json(json)
# print the JSON string representation of the object
print(RequestUtilization.to_json())

# convert the object into a dict
request_utilization_dict = request_utilization_instance.to_dict()
# create an instance of RequestUtilization from a dict
request_utilization_from_dict = RequestUtilization.from_dict(request_utilization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


