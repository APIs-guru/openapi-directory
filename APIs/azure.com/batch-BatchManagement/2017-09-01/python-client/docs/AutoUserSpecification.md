# AutoUserSpecification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elevation_level** | [**ElevationLevel**](ElevationLevel.md) |  | [optional] 
**scope** | **str** | pool - specifies that the task runs as the common auto user account which is created on every node in a pool. task - specifies that the service should create a new user for the task. The default value is task. | [optional] 

## Example

```python
from openapi_client.models.auto_user_specification import AutoUserSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of AutoUserSpecification from a JSON string
auto_user_specification_instance = AutoUserSpecification.from_json(json)
# print the JSON string representation of the object
print(AutoUserSpecification.to_json())

# convert the object into a dict
auto_user_specification_dict = auto_user_specification_instance.to_dict()
# create an instance of AutoUserSpecification from a dict
auto_user_specification_from_dict = AutoUserSpecification.from_dict(auto_user_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


