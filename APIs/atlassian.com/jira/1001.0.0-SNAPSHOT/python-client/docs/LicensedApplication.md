# LicensedApplication

Details about a licensed Jira application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the application. | [readonly] 
**plan** | **str** | The licensing plan. | [readonly] 

## Example

```python
from openapi_client.models.licensed_application import LicensedApplication

# TODO update the JSON string below
json = "{}"
# create an instance of LicensedApplication from a JSON string
licensed_application_instance = LicensedApplication.from_json(json)
# print the JSON string representation of the object
print(LicensedApplication.to_json())

# convert the object into a dict
licensed_application_dict = licensed_application_instance.to_dict()
# create an instance of LicensedApplication from a dict
licensed_application_from_dict = LicensedApplication.from_dict(licensed_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


