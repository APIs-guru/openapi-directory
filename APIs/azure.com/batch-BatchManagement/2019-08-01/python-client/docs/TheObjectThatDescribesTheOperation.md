# TheObjectThatDescribesTheOperation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**operation** | **str** | For example: read, write, delete, or listKeys/action | [optional] 
**provider** | **str** |  | [optional] 
**resource** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.the_object_that_describes_the_operation import TheObjectThatDescribesTheOperation

# TODO update the JSON string below
json = "{}"
# create an instance of TheObjectThatDescribesTheOperation from a JSON string
the_object_that_describes_the_operation_instance = TheObjectThatDescribesTheOperation.from_json(json)
# print the JSON string representation of the object
print(TheObjectThatDescribesTheOperation.to_json())

# convert the object into a dict
the_object_that_describes_the_operation_dict = the_object_that_describes_the_operation_instance.to_dict()
# create an instance of TheObjectThatDescribesTheOperation from a dict
the_object_that_describes_the_operation_from_dict = TheObjectThatDescribesTheOperation.from_dict(the_object_that_describes_the_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


