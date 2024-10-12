# TestJobStreamsListByTestJob200Response

The response model for the list job stream operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[TestJobStreamsListByTestJob200ResponseValueInner]**](TestJobStreamsListByTestJob200ResponseValueInner.md) | A list of job streams. | [optional] 

## Example

```python
from openapi_client.models.test_job_streams_list_by_test_job200_response import TestJobStreamsListByTestJob200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TestJobStreamsListByTestJob200Response from a JSON string
test_job_streams_list_by_test_job200_response_instance = TestJobStreamsListByTestJob200Response.from_json(json)
# print the JSON string representation of the object
print(TestJobStreamsListByTestJob200Response.to_json())

# convert the object into a dict
test_job_streams_list_by_test_job200_response_dict = test_job_streams_list_by_test_job200_response_instance.to_dict()
# create an instance of TestJobStreamsListByTestJob200Response from a dict
test_job_streams_list_by_test_job200_response_from_dict = TestJobStreamsListByTestJob200Response.from_dict(test_job_streams_list_by_test_job200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


