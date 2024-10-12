# CreateServiceGroupDescription

The description of the create service group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** |  | [optional] 
**correlation_scheme** | [**ServiceCorrelationDescription**](ServiceCorrelationDescription.md) |  | [optional] 
**flags** | **int** |  | [optional] 
**partition_description** | [**PartitionDescription**](PartitionDescription.md) |  | [optional] 
**placement_constraints** | **str** |  | [optional] 
**service_group_member_description** | [**List[ServiceGroupMemberDescription]**](ServiceGroupMemberDescription.md) |  | [optional] 
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | 
**service_load_metrics** | [**ServiceCorrelationDescription**](ServiceCorrelationDescription.md) |  | [optional] 
**service_name** | **str** |  | [optional] 
**service_placement_policies** | [**ServiceCorrelationDescription**](ServiceCorrelationDescription.md) |  | [optional] 
**service_type_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_service_group_description import CreateServiceGroupDescription

# TODO update the JSON string below
json = "{}"
# create an instance of CreateServiceGroupDescription from a JSON string
create_service_group_description_instance = CreateServiceGroupDescription.from_json(json)
# print the JSON string representation of the object
print(CreateServiceGroupDescription.to_json())

# convert the object into a dict
create_service_group_description_dict = create_service_group_description_instance.to_dict()
# create an instance of CreateServiceGroupDescription from a dict
create_service_group_description_from_dict = CreateServiceGroupDescription.from_dict(create_service_group_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


