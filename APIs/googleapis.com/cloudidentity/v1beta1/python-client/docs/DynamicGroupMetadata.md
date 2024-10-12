# DynamicGroupMetadata

Dynamic group metadata like queries and status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queries** | [**List[DynamicGroupQuery]**](DynamicGroupQuery.md) | Memberships will be the union of all queries. Only one entry with USER resource is currently supported. Customers can create up to 500 dynamic groups. | [optional] 
**status** | [**DynamicGroupStatus**](DynamicGroupStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.dynamic_group_metadata import DynamicGroupMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicGroupMetadata from a JSON string
dynamic_group_metadata_instance = DynamicGroupMetadata.from_json(json)
# print the JSON string representation of the object
print(DynamicGroupMetadata.to_json())

# convert the object into a dict
dynamic_group_metadata_dict = dynamic_group_metadata_instance.to_dict()
# create an instance of DynamicGroupMetadata from a dict
dynamic_group_metadata_from_dict = DynamicGroupMetadata.from_dict(dynamic_group_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


