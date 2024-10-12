# RetentionVolume

The retention details of the MT.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity_in_bytes** | **int** | The volume capacity. | [optional] 
**free_space_in_bytes** | **int** | The free space available in this volume. | [optional] 
**threshold_percentage** | **int** | The threshold percentage. | [optional] 
**volume_name** | **str** | The volume name. | [optional] 

## Example

```python
from openapi_client.models.retention_volume import RetentionVolume

# TODO update the JSON string below
json = "{}"
# create an instance of RetentionVolume from a JSON string
retention_volume_instance = RetentionVolume.from_json(json)
# print the JSON string representation of the object
print(RetentionVolume.to_json())

# convert the object into a dict
retention_volume_dict = retention_volume_instance.to_dict()
# create an instance of RetentionVolume from a dict
retention_volume_from_dict = RetentionVolume.from_dict(retention_volume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


