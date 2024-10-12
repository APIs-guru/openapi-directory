# ManualScaling

A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | **int** | Number of instances to assign to the service at the start. This number can later be altered by using the Modules API (https://cloud.google.com/appengine/docs/python/modules/functions) set_num_instances() function. | [optional] 

## Example

```python
from openapi_client.models.manual_scaling import ManualScaling

# TODO update the JSON string below
json = "{}"
# create an instance of ManualScaling from a JSON string
manual_scaling_instance = ManualScaling.from_json(json)
# print the JSON string representation of the object
print(ManualScaling.to_json())

# convert the object into a dict
manual_scaling_dict = manual_scaling_instance.to_dict()
# create an instance of ManualScaling from a dict
manual_scaling_from_dict = ManualScaling.from_dict(manual_scaling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


