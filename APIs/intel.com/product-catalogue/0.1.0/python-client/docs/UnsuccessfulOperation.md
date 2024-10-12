# UnsuccessfulOperation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.unsuccessful_operation import UnsuccessfulOperation

# TODO update the JSON string below
json = "{}"
# create an instance of UnsuccessfulOperation from a JSON string
unsuccessful_operation_instance = UnsuccessfulOperation.from_json(json)
# print the JSON string representation of the object
print(UnsuccessfulOperation.to_json())

# convert the object into a dict
unsuccessful_operation_dict = unsuccessful_operation_instance.to_dict()
# create an instance of UnsuccessfulOperation from a dict
unsuccessful_operation_from_dict = UnsuccessfulOperation.from_dict(unsuccessful_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


