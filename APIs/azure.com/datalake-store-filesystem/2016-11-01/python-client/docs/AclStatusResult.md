# AclStatusResult

Data Lake Store file or directory Access Control List information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acl_status** | [**AclStatus**](AclStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.acl_status_result import AclStatusResult

# TODO update the JSON string below
json = "{}"
# create an instance of AclStatusResult from a JSON string
acl_status_result_instance = AclStatusResult.from_json(json)
# print the JSON string representation of the object
print(AclStatusResult.to_json())

# convert the object into a dict
acl_status_result_dict = acl_status_result_instance.to_dict()
# create an instance of AclStatusResult from a dict
acl_status_result_from_dict = AclStatusResult.from_dict(acl_status_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


