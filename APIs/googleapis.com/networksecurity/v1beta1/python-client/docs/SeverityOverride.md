# SeverityOverride

Defines what action to take for a specific severity match.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Required. Threat action override. | [optional] 
**severity** | **str** | Required. Severity level to match. | [optional] 

## Example

```python
from openapi_client.models.severity_override import SeverityOverride

# TODO update the JSON string below
json = "{}"
# create an instance of SeverityOverride from a JSON string
severity_override_instance = SeverityOverride.from_json(json)
# print the JSON string representation of the object
print(SeverityOverride.to_json())

# convert the object into a dict
severity_override_dict = severity_override_instance.to_dict()
# create an instance of SeverityOverride from a dict
severity_override_from_dict = SeverityOverride.from_dict(severity_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


