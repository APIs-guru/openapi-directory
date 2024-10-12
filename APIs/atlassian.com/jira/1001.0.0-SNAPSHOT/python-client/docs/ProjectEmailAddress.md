# ProjectEmailAddress

A project's sender email address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** | The email address. | [optional] 
**email_address_status** | **List[str]** | When using a custom domain, the status of the email address. | [optional] 

## Example

```python
from openapi_client.models.project_email_address import ProjectEmailAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectEmailAddress from a JSON string
project_email_address_instance = ProjectEmailAddress.from_json(json)
# print the JSON string representation of the object
print(ProjectEmailAddress.to_json())

# convert the object into a dict
project_email_address_dict = project_email_address_instance.to_dict()
# create an instance of ProjectEmailAddress from a dict
project_email_address_from_dict = ProjectEmailAddress.from_dict(project_email_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


