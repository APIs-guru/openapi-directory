# RestorePointProperties

Represents the properties of a database restore point.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**earliest_restore_date** | **datetime** | Earliest restore time (ISO8601 format). Populated when restorePointType &#x3D; DISCRETE. Null otherwise. | [optional] [readonly] 
**restore_point_creation_date** | **datetime** | Restore point creation time (ISO8601 format). Populated when restorePointType &#x3D; CONTINUOUS. Null otherwise. | [optional] [readonly] 
**restore_point_type** | **str** | The restore point type of the database restore point. | [optional] [readonly] 

## Example

```python
from openapi_client.models.restore_point_properties import RestorePointProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RestorePointProperties from a JSON string
restore_point_properties_instance = RestorePointProperties.from_json(json)
# print the JSON string representation of the object
print(RestorePointProperties.to_json())

# convert the object into a dict
restore_point_properties_dict = restore_point_properties_instance.to_dict()
# create an instance of RestorePointProperties from a dict
restore_point_properties_from_dict = RestorePointProperties.from_dict(restore_point_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


