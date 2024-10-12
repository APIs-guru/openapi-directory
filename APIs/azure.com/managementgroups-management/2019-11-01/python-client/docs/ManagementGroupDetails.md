# ManagementGroupDetails

The details of a management group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | [**ParentGroupInfo**](ParentGroupInfo.md) |  | [optional] 
**updated_by** | **str** | The identity of the principal or process that updated the object. | [optional] 
**updated_time** | **datetime** | The date and time when this object was last updated. | [optional] 
**version** | **float** | The version number of the object. | [optional] 

## Example

```python
from openapi_client.models.management_group_details import ManagementGroupDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementGroupDetails from a JSON string
management_group_details_instance = ManagementGroupDetails.from_json(json)
# print the JSON string representation of the object
print(ManagementGroupDetails.to_json())

# convert the object into a dict
management_group_details_dict = management_group_details_instance.to_dict()
# create an instance of ManagementGroupDetails from a dict
management_group_details_from_dict = ManagementGroupDetails.from_dict(management_group_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


