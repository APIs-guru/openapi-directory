# HierarchiesBatchResponse

Response of a single operation on a batch of time series hierarchies. Only one of \"get\", \"put\" or \"delete\" will be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | [**List[TsiErrorBody]**](TsiErrorBody.md) | List of error objects corresponding by position to the \&quot;delete\&quot; array in the request - null when the operation is successful. | [optional] [readonly] 
**get** | [**List[TimeSeriesHierarchyOrError]**](TimeSeriesHierarchyOrError.md) | List of hierarchy or error objects corresponding by position to the \&quot;get\&quot; array in the request. Hierarchy object is set when operation is successful and error object is set when operation is unsuccessful. | [optional] [readonly] 
**put** | [**List[TimeSeriesHierarchyOrError]**](TimeSeriesHierarchyOrError.md) | List of hierarchy or error object corresponding by position to the \&quot;put\&quot; array in the request. Hierarchy object is set when operation is successful and error object is set when operation is unsuccessful. | [optional] [readonly] 

## Example

```python
from openapi_client.models.hierarchies_batch_response import HierarchiesBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HierarchiesBatchResponse from a JSON string
hierarchies_batch_response_instance = HierarchiesBatchResponse.from_json(json)
# print the JSON string representation of the object
print(HierarchiesBatchResponse.to_json())

# convert the object into a dict
hierarchies_batch_response_dict = hierarchies_batch_response_instance.to_dict()
# create an instance of HierarchiesBatchResponse from a dict
hierarchies_batch_response_from_dict = HierarchiesBatchResponse.from_dict(hierarchies_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


