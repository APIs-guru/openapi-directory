# ServiceManagementNavigationInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queue_category** | **str** |  | [optional] 
**queue_id** | **int** |  | [optional] 
**queue_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.service_management_navigation_info import ServiceManagementNavigationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceManagementNavigationInfo from a JSON string
service_management_navigation_info_instance = ServiceManagementNavigationInfo.from_json(json)
# print the JSON string representation of the object
print(ServiceManagementNavigationInfo.to_json())

# convert the object into a dict
service_management_navigation_info_dict = service_management_navigation_info_instance.to_dict()
# create an instance of ServiceManagementNavigationInfo from a dict
service_management_navigation_info_from_dict = ServiceManagementNavigationInfo.from_dict(service_management_navigation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


