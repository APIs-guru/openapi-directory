# RestorePoint

Database restore points.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Resource location. | [optional] [readonly] 
**properties** | [**RestorePointProperties**](RestorePointProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.restore_point import RestorePoint

# TODO update the JSON string below
json = "{}"
# create an instance of RestorePoint from a JSON string
restore_point_instance = RestorePoint.from_json(json)
# print the JSON string representation of the object
print(RestorePoint.to_json())

# convert the object into a dict
restore_point_dict = restore_point_instance.to_dict()
# create an instance of RestorePoint from a dict
restore_point_from_dict = RestorePoint.from_dict(restore_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


