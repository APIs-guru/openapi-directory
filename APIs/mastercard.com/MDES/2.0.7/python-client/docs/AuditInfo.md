# AuditInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization** | **str** | Name of the Issuer or Processor to which the Customer Service Representative who triggered the API request belongs. | 
**phone** | **str** | Phone Number of the Customer Service Representative who triggered the API request. | [optional] 
**user_id** | **str** | User ID (as assigned by the Issuer/Processor) of the Customer Service Representative who triggered the API request. | 
**user_name** | **str** | User Name of the Customer Service Representative who triggered the API request. | 

## Example

```python
from openapi_client.models.audit_info import AuditInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AuditInfo from a JSON string
audit_info_instance = AuditInfo.from_json(json)
# print the JSON string representation of the object
print(AuditInfo.to_json())

# convert the object into a dict
audit_info_dict = audit_info_instance.to_dict()
# create an instance of AuditInfo from a dict
audit_info_from_dict = AuditInfo.from_dict(audit_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


