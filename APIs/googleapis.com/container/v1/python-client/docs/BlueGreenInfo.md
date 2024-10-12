# BlueGreenInfo

Information relevant to blue-green upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blue_instance_group_urls** | **List[str]** | The resource URLs of the [managed instance groups] (/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with blue pool. | [optional] 
**blue_pool_deletion_start_time** | **str** | Time to start deleting blue pool to complete blue-green upgrade, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. | [optional] 
**green_instance_group_urls** | **List[str]** | The resource URLs of the [managed instance groups] (/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with green pool. | [optional] 
**green_pool_version** | **str** | Version of green pool. | [optional] 
**phase** | **str** | Current blue-green upgrade phase. | [optional] 

## Example

```python
from openapi_client.models.blue_green_info import BlueGreenInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BlueGreenInfo from a JSON string
blue_green_info_instance = BlueGreenInfo.from_json(json)
# print the JSON string representation of the object
print(BlueGreenInfo.to_json())

# convert the object into a dict
blue_green_info_dict = blue_green_info_instance.to_dict()
# create an instance of BlueGreenInfo from a dict
blue_green_info_from_dict = BlueGreenInfo.from_dict(blue_green_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


