# ApproximateSplitRequest

A suggestion by the service to the worker to dynamically split the WorkItem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fraction_consumed** | **float** | A fraction at which to split the work item, from 0.0 (beginning of the input) to 1.0 (end of the input). | [optional] 
**fraction_of_remainder** | **float** | The fraction of the remainder of work to split the work item at, from 0.0 (split at the current position) to 1.0 (end of the input). | [optional] 
**position** | [**Position**](Position.md) |  | [optional] 

## Example

```python
from openapi_client.models.approximate_split_request import ApproximateSplitRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApproximateSplitRequest from a JSON string
approximate_split_request_instance = ApproximateSplitRequest.from_json(json)
# print the JSON string representation of the object
print(ApproximateSplitRequest.to_json())

# convert the object into a dict
approximate_split_request_dict = approximate_split_request_instance.to_dict()
# create an instance of ApproximateSplitRequest from a dict
approximate_split_request_from_dict = ApproximateSplitRequest.from_dict(approximate_split_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


