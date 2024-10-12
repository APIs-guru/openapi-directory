# AvailabilityGroup

The availability groups for sqlserver

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**databases** | **List[str]** | Output only. The databases | [optional] [readonly] 
**name** | **str** | Output only. The availability group name | [optional] [readonly] 
**primary_server** | **str** | Output only. The primary server | [optional] [readonly] 
**secondary_servers** | **List[str]** | Output only. The secondary servers | [optional] [readonly] 

## Example

```python
from openapi_client.models.availability_group import AvailabilityGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilityGroup from a JSON string
availability_group_instance = AvailabilityGroup.from_json(json)
# print the JSON string representation of the object
print(AvailabilityGroup.to_json())

# convert the object into a dict
availability_group_dict = availability_group_instance.to_dict()
# create an instance of AvailabilityGroup from a dict
availability_group_from_dict = AvailabilityGroup.from_dict(availability_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


