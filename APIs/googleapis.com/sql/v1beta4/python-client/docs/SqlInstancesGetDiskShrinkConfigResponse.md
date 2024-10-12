# SqlInstancesGetDiskShrinkConfigResponse

Instance get disk shrink config response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | This is always &#x60;sql#getDiskShrinkConfig&#x60;. | [optional] 
**message** | **str** | Additional message to customers. | [optional] 
**minimal_target_size_gb** | **str** | The minimum size to which a disk can be shrunk in GigaBytes. | [optional] 

## Example

```python
from openapi_client.models.sql_instances_get_disk_shrink_config_response import SqlInstancesGetDiskShrinkConfigResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SqlInstancesGetDiskShrinkConfigResponse from a JSON string
sql_instances_get_disk_shrink_config_response_instance = SqlInstancesGetDiskShrinkConfigResponse.from_json(json)
# print the JSON string representation of the object
print(SqlInstancesGetDiskShrinkConfigResponse.to_json())

# convert the object into a dict
sql_instances_get_disk_shrink_config_response_dict = sql_instances_get_disk_shrink_config_response_instance.to_dict()
# create an instance of SqlInstancesGetDiskShrinkConfigResponse from a dict
sql_instances_get_disk_shrink_config_response_from_dict = SqlInstancesGetDiskShrinkConfigResponse.from_dict(sql_instances_get_disk_shrink_config_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


