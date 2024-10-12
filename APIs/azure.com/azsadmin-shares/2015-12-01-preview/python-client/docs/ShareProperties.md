# ShareProperties

Storage share properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free_capacity** | **int** | The free space of the storage share in bytes. | [optional] [readonly] 
**health_status** | **str** | Current health status. | [optional] [readonly] 
**share_name** | **str** | The name of the storage share. | [optional] [readonly] 
**total_capacity** | **int** | The total capacity of the storage share in bytes. | [optional] [readonly] 
**unc_path** | **str** | The UNC path to the storage share. | [optional] [readonly] 
**used_capacity** | **int** | The used capacity of the storage share in bytes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.share_properties import ShareProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ShareProperties from a JSON string
share_properties_instance = ShareProperties.from_json(json)
# print the JSON string representation of the object
print(ShareProperties.to_json())

# convert the object into a dict
share_properties_dict = share_properties_instance.to_dict()
# create an instance of ShareProperties from a dict
share_properties_from_dict = ShareProperties.from_dict(share_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


