# InstanceOrError

Result of a batch operation on a particular time series instance. Instance object is set when operation is successful (except put operation) and error object is set when operation is unsuccessful.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**TsiErrorBody**](TsiErrorBody.md) |  | [optional] 
**instance** | [**TimeSeriesInstance**](TimeSeriesInstance.md) |  | [optional] 

## Example

```python
from openapi_client.models.instance_or_error import InstanceOrError

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceOrError from a JSON string
instance_or_error_instance = InstanceOrError.from_json(json)
# print the JSON string representation of the object
print(InstanceOrError.to_json())

# convert the object into a dict
instance_or_error_dict = instance_or_error_instance.to_dict()
# create an instance of InstanceOrError from a dict
instance_or_error_from_dict = InstanceOrError.from_dict(instance_or_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


