# BucketAccessControlProjectTeam

The project team associated with the entity, if any.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_number** | **str** | The project number. | [optional] 
**team** | **str** | The team. | [optional] 

## Example

```python
from openapi_client.models.bucket_access_control_project_team import BucketAccessControlProjectTeam

# TODO update the JSON string below
json = "{}"
# create an instance of BucketAccessControlProjectTeam from a JSON string
bucket_access_control_project_team_instance = BucketAccessControlProjectTeam.from_json(json)
# print the JSON string representation of the object
print(BucketAccessControlProjectTeam.to_json())

# convert the object into a dict
bucket_access_control_project_team_dict = bucket_access_control_project_team_instance.to_dict()
# create an instance of BucketAccessControlProjectTeam from a dict
bucket_access_control_project_team_from_dict = BucketAccessControlProjectTeam.from_dict(bucket_access_control_project_team_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


