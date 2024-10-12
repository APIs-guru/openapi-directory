# DataDisks

Settings for the data disk which would be created for the File Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caching_type** | **str** |  | [optional] [default to 'none']
**disk_count** | **int** |  | 
**disk_size_in_gb** | **int** |  | 
**storage_account_type** | **str** |  | 

## Example

```python
from openapi_client.models.data_disks import DataDisks

# TODO update the JSON string below
json = "{}"
# create an instance of DataDisks from a JSON string
data_disks_instance = DataDisks.from_json(json)
# print the JSON string representation of the object
print(DataDisks.to_json())

# convert the object into a dict
data_disks_dict = data_disks_instance.to_dict()
# create an instance of DataDisks from a dict
data_disks_from_dict = DataDisks.from_dict(data_disks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


