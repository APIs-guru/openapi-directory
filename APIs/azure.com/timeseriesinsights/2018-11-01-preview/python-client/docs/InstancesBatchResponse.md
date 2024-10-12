# InstancesBatchResponse

Response of a single operation on a batch of instances. Only one of \"get\", \"put\", \"update\" or \"delete\" will be set based on the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | [**List[TsiErrorBody]**](TsiErrorBody.md) | List of error objects corresponding by position to the \&quot;delete\&quot; array in the request. Null means the instance has been deleted, or did not exist. Error object is set when operation is unsuccessful (e.g. when there are events associated with this time series instance). | [optional] [readonly] 
**get** | [**List[InstanceOrError]**](InstanceOrError.md) | List of instance or error objects corresponding by position to the \&quot;get\&quot; array in the request. Instance object is set when operation is successful and error object is set when operation is unsuccessful. | [optional] [readonly] 
**put** | [**List[InstanceOrError]**](InstanceOrError.md) | List of error objects corresponding by position to the \&quot;put\&quot; array in the request. Error object is set when operation is unsuccessful. | [optional] [readonly] 
**update** | [**List[InstanceOrError]**](InstanceOrError.md) | List of error objects corresponding by position to the \&quot;update\&quot; array in the request. Instance object is set when operation is successful and error object is set when operation is unsuccessful. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instances_batch_response import InstancesBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesBatchResponse from a JSON string
instances_batch_response_instance = InstancesBatchResponse.from_json(json)
# print the JSON string representation of the object
print(InstancesBatchResponse.to_json())

# convert the object into a dict
instances_batch_response_dict = instances_batch_response_instance.to_dict()
# create an instance of InstancesBatchResponse from a dict
instances_batch_response_from_dict = InstancesBatchResponse.from_dict(instances_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


