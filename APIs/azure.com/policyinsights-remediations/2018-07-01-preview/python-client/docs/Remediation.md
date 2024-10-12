# Remediation

The remediation definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the remediation. | [optional] [readonly] 
**name** | **str** | The name of the remediation. | [optional] [readonly] 
**properties** | [**RemediationProperties**](RemediationProperties.md) |  | [optional] 
**type** | **str** | The type of the remediation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.remediation import Remediation

# TODO update the JSON string below
json = "{}"
# create an instance of Remediation from a JSON string
remediation_instance = Remediation.from_json(json)
# print the JSON string representation of the object
print(Remediation.to_json())

# convert the object into a dict
remediation_dict = remediation_instance.to_dict()
# create an instance of Remediation from a dict
remediation_from_dict = Remediation.from_dict(remediation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


