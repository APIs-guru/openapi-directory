# BulkPermissionsRequestBean

Details of global permissions to look up and project permissions with associated projects and issues to look up.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID of a user. | [optional] 
**global_permissions** | **List[str]** | Global permissions to look up. | [optional] 
**project_permissions** | [**List[BulkProjectPermissions]**](BulkProjectPermissions.md) | Project permissions with associated projects and issues to look up. | [optional] 

## Example

```python
from openapi_client.models.bulk_permissions_request_bean import BulkPermissionsRequestBean

# TODO update the JSON string below
json = "{}"
# create an instance of BulkPermissionsRequestBean from a JSON string
bulk_permissions_request_bean_instance = BulkPermissionsRequestBean.from_json(json)
# print the JSON string representation of the object
print(BulkPermissionsRequestBean.to_json())

# convert the object into a dict
bulk_permissions_request_bean_dict = bulk_permissions_request_bean_instance.to_dict()
# create an instance of BulkPermissionsRequestBean from a dict
bulk_permissions_request_bean_from_dict = BulkPermissionsRequestBean.from_dict(bulk_permissions_request_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


