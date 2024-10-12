# ListPerfSamplesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Optional, returned if result size exceeds the page size specified in the request (or the default page size, 500, if unspecified). It indicates the last sample timestamp to be used as page_token in subsequent request | [optional] 
**perf_samples** | [**List[PerfSample]**](PerfSample.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_perf_samples_response import ListPerfSamplesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPerfSamplesResponse from a JSON string
list_perf_samples_response_instance = ListPerfSamplesResponse.from_json(json)
# print the JSON string representation of the object
print(ListPerfSamplesResponse.to_json())

# convert the object into a dict
list_perf_samples_response_dict = list_perf_samples_response_instance.to_dict()
# create an instance of ListPerfSamplesResponse from a dict
list_perf_samples_response_from_dict = ListPerfSamplesResponse.from_dict(list_perf_samples_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


