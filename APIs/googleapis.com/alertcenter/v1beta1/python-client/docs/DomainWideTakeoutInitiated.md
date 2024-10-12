# DomainWideTakeoutInitiated

A takeout operation for the entire domain was initiated by an admin. Derived from audit logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email of the admin who initiated the takeout. | [optional] 
**takeout_request_id** | **str** | The takeout request ID. | [optional] 

## Example

```python
from openapi_client.models.domain_wide_takeout_initiated import DomainWideTakeoutInitiated

# TODO update the JSON string below
json = "{}"
# create an instance of DomainWideTakeoutInitiated from a JSON string
domain_wide_takeout_initiated_instance = DomainWideTakeoutInitiated.from_json(json)
# print the JSON string representation of the object
print(DomainWideTakeoutInitiated.to_json())

# convert the object into a dict
domain_wide_takeout_initiated_dict = domain_wide_takeout_initiated_instance.to_dict()
# create an instance of DomainWideTakeoutInitiated from a dict
domain_wide_takeout_initiated_from_dict = DomainWideTakeoutInitiated.from_dict(domain_wide_takeout_initiated_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


