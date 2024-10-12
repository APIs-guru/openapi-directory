# OperationWarningsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response. | [optional] 
**data** | [**List[OperationWarningsInnerDataInner]**](OperationWarningsInnerDataInner.md) | [Output Only] Metadata about this warning in key: value format. For example: \&quot;data\&quot;: [ { \&quot;key\&quot;: \&quot;scope\&quot;, \&quot;value\&quot;: \&quot;zones/us-east1-d\&quot; }  | [optional] 
**message** | **str** | [Output Only] A human-readable description of the warning code. | [optional] 

## Example

```python
from openapi_client.models.operation_warnings_inner import OperationWarningsInner

# TODO update the JSON string below
json = "{}"
# create an instance of OperationWarningsInner from a JSON string
operation_warnings_inner_instance = OperationWarningsInner.from_json(json)
# print the JSON string representation of the object
print(OperationWarningsInner.to_json())

# convert the object into a dict
operation_warnings_inner_dict = operation_warnings_inner_instance.to_dict()
# create an instance of OperationWarningsInner from a dict
operation_warnings_inner_from_dict = OperationWarningsInner.from_dict(operation_warnings_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


