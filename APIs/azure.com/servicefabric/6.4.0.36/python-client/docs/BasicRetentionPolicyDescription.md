# BasicRetentionPolicyDescription

Describes basic retention policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minimum_number_of_backups** | **int** | It is the minimum number of backups to be retained at any point of time. If specified with a non zero value, backups will not be deleted even if the backups have gone past retention duration and have number of backups less than or equal to it. | [optional] 
**retention_duration** | **str** | It is the minimum duration for which a backup created, will remain stored in the storage and might get deleted after that span of time. It should be specified in ISO8601 format. | 

## Example

```python
from openapi_client.models.basic_retention_policy_description import BasicRetentionPolicyDescription

# TODO update the JSON string below
json = "{}"
# create an instance of BasicRetentionPolicyDescription from a JSON string
basic_retention_policy_description_instance = BasicRetentionPolicyDescription.from_json(json)
# print the JSON string representation of the object
print(BasicRetentionPolicyDescription.to_json())

# convert the object into a dict
basic_retention_policy_description_dict = basic_retention_policy_description_instance.to_dict()
# create an instance of BasicRetentionPolicyDescription from a dict
basic_retention_policy_description_from_dict = BasicRetentionPolicyDescription.from_dict(basic_retention_policy_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


