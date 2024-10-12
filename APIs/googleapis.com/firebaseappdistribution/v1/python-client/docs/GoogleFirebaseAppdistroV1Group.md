# GoogleFirebaseAppdistroV1Group

A group which can contain testers. A group can be invited to test apps in a Firebase project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. The display name of the group. | [optional] 
**invite_link_count** | **int** | Output only. The number of invite links for this group. | [optional] [readonly] 
**name** | **str** | The name of the group resource. Format: &#x60;projects/{project_number}/groups/{group_alias}&#x60; | [optional] 
**release_count** | **int** | Output only. The number of releases this group is permitted to access. | [optional] [readonly] 
**tester_count** | **int** | Output only. The number of testers who are members of this group. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_firebase_appdistro_v1_group import GoogleFirebaseAppdistroV1Group

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseAppdistroV1Group from a JSON string
google_firebase_appdistro_v1_group_instance = GoogleFirebaseAppdistroV1Group.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseAppdistroV1Group.to_json())

# convert the object into a dict
google_firebase_appdistro_v1_group_dict = google_firebase_appdistro_v1_group_instance.to_dict()
# create an instance of GoogleFirebaseAppdistroV1Group from a dict
google_firebase_appdistro_v1_group_from_dict = GoogleFirebaseAppdistroV1Group.from_dict(google_firebase_appdistro_v1_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


