# ContactCenterQuota

Represents a quota for contact centers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_center_count_limit** | **int** | Deprecated: Use the Quota fields instead. Reflects the count limit of contact centers on a billing account. | [optional] 
**contact_center_count_sum** | **int** | Deprecated: Use the Quota fields instead. Reflects the count sum of contact centers on a billing account. | [optional] 
**quotas** | [**List[Quota]**](Quota.md) | Quota details per contact center instance type. | [optional] 

## Example

```python
from openapi_client.models.contact_center_quota import ContactCenterQuota

# TODO update the JSON string below
json = "{}"
# create an instance of ContactCenterQuota from a JSON string
contact_center_quota_instance = ContactCenterQuota.from_json(json)
# print the JSON string representation of the object
print(ContactCenterQuota.to_json())

# convert the object into a dict
contact_center_quota_dict = contact_center_quota_instance.to_dict()
# create an instance of ContactCenterQuota from a dict
contact_center_quota_from_dict = ContactCenterQuota.from_dict(contact_center_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


