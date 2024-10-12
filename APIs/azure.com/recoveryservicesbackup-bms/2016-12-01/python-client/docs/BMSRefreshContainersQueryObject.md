# BMSRefreshContainersQueryObject

The query filters that can be used with the refresh container API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | Backup management type for this container. | [optional] 

## Example

```python
from openapi_client.models.bms_refresh_containers_query_object import BMSRefreshContainersQueryObject

# TODO update the JSON string below
json = "{}"
# create an instance of BMSRefreshContainersQueryObject from a JSON string
bms_refresh_containers_query_object_instance = BMSRefreshContainersQueryObject.from_json(json)
# print the JSON string representation of the object
print(BMSRefreshContainersQueryObject.to_json())

# convert the object into a dict
bms_refresh_containers_query_object_dict = bms_refresh_containers_query_object_instance.to_dict()
# create an instance of BMSRefreshContainersQueryObject from a dict
bms_refresh_containers_query_object_from_dict = BMSRefreshContainersQueryObject.from_dict(bms_refresh_containers_query_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


