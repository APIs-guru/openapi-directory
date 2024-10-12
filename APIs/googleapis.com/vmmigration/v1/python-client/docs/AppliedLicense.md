# AppliedLicense

AppliedLicense holds the license data returned by adaptation module report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_license** | **str** | The OS license returned from the adaptation module&#39;s report. | [optional] 
**type** | **str** | The license type that was used in OS adaptation. | [optional] 

## Example

```python
from openapi_client.models.applied_license import AppliedLicense

# TODO update the JSON string below
json = "{}"
# create an instance of AppliedLicense from a JSON string
applied_license_instance = AppliedLicense.from_json(json)
# print the JSON string representation of the object
print(AppliedLicense.to_json())

# convert the object into a dict
applied_license_dict = applied_license_instance.to_dict()
# create an instance of AppliedLicense from a dict
applied_license_from_dict = AppliedLicense.from_dict(applied_license_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


