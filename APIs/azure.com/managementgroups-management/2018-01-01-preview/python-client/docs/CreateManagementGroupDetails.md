# CreateManagementGroupDetails

The details of a management group used during creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | [**CreateParentGroupInfo**](CreateParentGroupInfo.md) |  | [optional] 
**updated_by** | **str** | The identity of the principal or process that updated the object. | [optional] [readonly] 
**updated_time** | **datetime** | The date and time when this object was last updated. | [optional] [readonly] 
**version** | **float** | The version number of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.create_management_group_details import CreateManagementGroupDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CreateManagementGroupDetails from a JSON string
create_management_group_details_instance = CreateManagementGroupDetails.from_json(json)
# print the JSON string representation of the object
print(CreateManagementGroupDetails.to_json())

# convert the object into a dict
create_management_group_details_dict = create_management_group_details_instance.to_dict()
# create an instance of CreateManagementGroupDetails from a dict
create_management_group_details_from_dict = CreateManagementGroupDetails.from_dict(create_management_group_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


