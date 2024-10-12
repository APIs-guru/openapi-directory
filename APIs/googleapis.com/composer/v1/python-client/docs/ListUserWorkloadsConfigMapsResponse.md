# ListUserWorkloadsConfigMapsResponse

The user workloads ConfigMaps for a given environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The page token used to query for the next page if one exists. | [optional] 
**user_workloads_config_maps** | [**List[UserWorkloadsConfigMap]**](UserWorkloadsConfigMap.md) | The list of ConfigMaps returned by a ListUserWorkloadsConfigMapsRequest. | [optional] 

## Example

```python
from openapi_client.models.list_user_workloads_config_maps_response import ListUserWorkloadsConfigMapsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUserWorkloadsConfigMapsResponse from a JSON string
list_user_workloads_config_maps_response_instance = ListUserWorkloadsConfigMapsResponse.from_json(json)
# print the JSON string representation of the object
print(ListUserWorkloadsConfigMapsResponse.to_json())

# convert the object into a dict
list_user_workloads_config_maps_response_dict = list_user_workloads_config_maps_response_instance.to_dict()
# create an instance of ListUserWorkloadsConfigMapsResponse from a dict
list_user_workloads_config_maps_response_from_dict = ListUserWorkloadsConfigMapsResponse.from_dict(list_user_workloads_config_maps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


