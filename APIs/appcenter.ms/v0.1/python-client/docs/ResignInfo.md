# ResignInfo

The information for a resign attempt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_expiration** | **str** | The expiration date of the certificate used for the resign attempt | [optional] 
**certificate_name** | **str** | The name of the certificate used for the resign attempt | [optional] 
**group_name** | **str** | The group name of the resign attempt | [optional] 
**profile_name** | **str** | The provisioning profile name of group for the given resign attempt | [optional] 
**profile_type** | **str** | The provisioning profile type of group for the given resign attempt | [optional] 

## Example

```python
from openapi_client.models.resign_info import ResignInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ResignInfo from a JSON string
resign_info_instance = ResignInfo.from_json(json)
# print the JSON string representation of the object
print(ResignInfo.to_json())

# convert the object into a dict
resign_info_dict = resign_info_instance.to_dict()
# create an instance of ResignInfo from a dict
resign_info_from_dict = ResignInfo.from_dict(resign_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


