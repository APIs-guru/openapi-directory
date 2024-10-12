# ResumeApplicationUpgradeDescription

Describes the parameters for resuming an unmonitored manual Service Fabric application upgrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upgrade_domain_name** | **str** | The name of the upgrade domain in which to resume the upgrade. | 

## Example

```python
from openapi_client.models.resume_application_upgrade_description import ResumeApplicationUpgradeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ResumeApplicationUpgradeDescription from a JSON string
resume_application_upgrade_description_instance = ResumeApplicationUpgradeDescription.from_json(json)
# print the JSON string representation of the object
print(ResumeApplicationUpgradeDescription.to_json())

# convert the object into a dict
resume_application_upgrade_description_dict = resume_application_upgrade_description_instance.to_dict()
# create an instance of ResumeApplicationUpgradeDescription from a dict
resume_application_upgrade_description_from_dict = ResumeApplicationUpgradeDescription.from_dict(resume_application_upgrade_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


