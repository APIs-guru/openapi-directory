# SecurityBulletin

SecurityBulletin are notifications of vulnerabilities of Google products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bulletin_id** | **str** | ID of the bulletin corresponding to the vulnerability. | [optional] 
**submission_time** | **str** | Submission time of this Security Bulletin. | [optional] 
**suggested_upgrade_version** | **str** | This represents a version that the cluster receiving this notification should be upgraded to, based on its current version. For example, 1.15.0 | [optional] 

## Example

```python
from openapi_client.models.security_bulletin import SecurityBulletin

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityBulletin from a JSON string
security_bulletin_instance = SecurityBulletin.from_json(json)
# print the JSON string representation of the object
print(SecurityBulletin.to_json())

# convert the object into a dict
security_bulletin_dict = security_bulletin_instance.to_dict()
# create an instance of SecurityBulletin from a dict
security_bulletin_from_dict = SecurityBulletin.from_dict(security_bulletin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


