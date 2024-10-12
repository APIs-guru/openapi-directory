# Volumes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Volume]**](Volume.md) | A list of volumes. | [optional] 
**kind** | **str** | Resource type. | [optional] 
**total_items** | **int** | Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated. | [optional] 

## Example

```python
from openapi_client.models.volumes import Volumes

# TODO update the JSON string below
json = "{}"
# create an instance of Volumes from a JSON string
volumes_instance = Volumes.from_json(json)
# print the JSON string representation of the object
print(Volumes.to_json())

# convert the object into a dict
volumes_dict = volumes_instance.to_dict()
# create an instance of Volumes from a dict
volumes_from_dict = Volumes.from_dict(volumes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


