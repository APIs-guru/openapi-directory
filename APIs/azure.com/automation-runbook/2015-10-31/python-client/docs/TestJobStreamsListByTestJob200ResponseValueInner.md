# TestJobStreamsListByTestJob200ResponseValueInner

Definition of the job stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets or sets the id of the resource. | [optional] 
**properties** | [**TestJobStreamsListByTestJob200ResponseValueInnerProperties**](TestJobStreamsListByTestJob200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_job_streams_list_by_test_job200_response_value_inner import TestJobStreamsListByTestJob200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of TestJobStreamsListByTestJob200ResponseValueInner from a JSON string
test_job_streams_list_by_test_job200_response_value_inner_instance = TestJobStreamsListByTestJob200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(TestJobStreamsListByTestJob200ResponseValueInner.to_json())

# convert the object into a dict
test_job_streams_list_by_test_job200_response_value_inner_dict = test_job_streams_list_by_test_job200_response_value_inner_instance.to_dict()
# create an instance of TestJobStreamsListByTestJob200ResponseValueInner from a dict
test_job_streams_list_by_test_job200_response_value_inner_from_dict = TestJobStreamsListByTestJob200ResponseValueInner.from_dict(test_job_streams_list_by_test_job200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


