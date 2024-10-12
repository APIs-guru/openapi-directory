# BasicScaling

A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idle_timeout** | **str** | Duration of time after the last request that an instance must wait before the instance is shut down. | [optional] 
**max_instances** | **int** | Maximum number of instances to create for this version. | [optional] 

## Example

```python
from openapi_client.models.basic_scaling import BasicScaling

# TODO update the JSON string below
json = "{}"
# create an instance of BasicScaling from a JSON string
basic_scaling_instance = BasicScaling.from_json(json)
# print the JSON string representation of the object
print(BasicScaling.to_json())

# convert the object into a dict
basic_scaling_dict = basic_scaling_instance.to_dict()
# create an instance of BasicScaling from a dict
basic_scaling_from_dict = BasicScaling.from_dict(basic_scaling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


