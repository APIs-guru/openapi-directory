# ModifyColumnFamiliesRequest

Request message for google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_warnings** | **bool** | Optional. If true, ignore safety checks when modifying the column families. | [optional] 
**modifications** | [**List[Modification]**](Modification.md) | Required. Modifications to be atomically applied to the specified table&#39;s families. Entries are applied in order, meaning that earlier modifications can be masked by later ones (in the case of repeated updates to the same family, for example). | [optional] 

## Example

```python
from openapi_client.models.modify_column_families_request import ModifyColumnFamiliesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyColumnFamiliesRequest from a JSON string
modify_column_families_request_instance = ModifyColumnFamiliesRequest.from_json(json)
# print the JSON string representation of the object
print(ModifyColumnFamiliesRequest.to_json())

# convert the object into a dict
modify_column_families_request_dict = modify_column_families_request_instance.to_dict()
# create an instance of ModifyColumnFamiliesRequest from a dict
modify_column_families_request_from_dict = ModifyColumnFamiliesRequest.from_dict(modify_column_families_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


