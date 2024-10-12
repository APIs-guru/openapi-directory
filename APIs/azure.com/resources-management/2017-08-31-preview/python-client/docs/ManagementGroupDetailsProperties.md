# ManagementGroupDetailsProperties

The details properties of a management group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**management_group_type** | [**ManagementGroupType**](ManagementGroupType.md) |  | [optional] 
**parent** | [**ParentGroupInfo**](ParentGroupInfo.md) |  | [optional] 
**updated_by** | **str** | The identity of the principal or process that updated the object. | [optional] 
**updated_time** | **datetime** | The date and time when this object was last updated. | [optional] 
**version** | **float** | The version number of the object. | [optional] 

## Example

```python
from openapi_client.models.management_group_details_properties import ManagementGroupDetailsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementGroupDetailsProperties from a JSON string
management_group_details_properties_instance = ManagementGroupDetailsProperties.from_json(json)
# print the JSON string representation of the object
print(ManagementGroupDetailsProperties.to_json())

# convert the object into a dict
management_group_details_properties_dict = management_group_details_properties_instance.to_dict()
# create an instance of ManagementGroupDetailsProperties from a dict
management_group_details_properties_from_dict = ManagementGroupDetailsProperties.from_dict(management_group_details_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


