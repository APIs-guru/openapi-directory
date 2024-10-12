# Guardian

Association between a student and a guardian of that student. The guardian may receive information about the student's course work.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guardian_id** | **str** | Identifier for the guardian. | [optional] 
**guardian_profile** | [**UserProfile**](UserProfile.md) |  | [optional] 
**invited_email_address** | **str** | The email address to which the initial guardian invitation was sent. This field is only visible to domain administrators. | [optional] 
**student_id** | **str** | Identifier for the student to whom the guardian relationship applies. | [optional] 

## Example

```python
from openapi_client.models.guardian import Guardian

# TODO update the JSON string below
json = "{}"
# create an instance of Guardian from a JSON string
guardian_instance = Guardian.from_json(json)
# print the JSON string representation of the object
print(Guardian.to_json())

# convert the object into a dict
guardian_dict = guardian_instance.to_dict()
# create an instance of Guardian from a dict
guardian_from_dict = Guardian.from_dict(guardian_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


