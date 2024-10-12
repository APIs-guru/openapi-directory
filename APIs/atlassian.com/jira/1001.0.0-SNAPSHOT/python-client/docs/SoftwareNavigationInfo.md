# SoftwareNavigationInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**board_id** | **int** |  | [optional] 
**board_name** | **str** |  | [optional] 
**simple_board** | **bool** |  | [optional] 
**total_boards_in_project** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.software_navigation_info import SoftwareNavigationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareNavigationInfo from a JSON string
software_navigation_info_instance = SoftwareNavigationInfo.from_json(json)
# print the JSON string representation of the object
print(SoftwareNavigationInfo.to_json())

# convert the object into a dict
software_navigation_info_dict = software_navigation_info_instance.to_dict()
# create an instance of SoftwareNavigationInfo from a dict
software_navigation_info_from_dict = SoftwareNavigationInfo.from_dict(software_navigation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


