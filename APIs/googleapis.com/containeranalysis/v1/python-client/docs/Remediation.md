# Remediation

Specifies details on how to handle (and presumably, fix) a vulnerability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Contains a comprehensive human-readable discussion of the remediation. | [optional] 
**remediation_type** | **str** | The type of remediation that can be applied. | [optional] 
**remediation_uri** | [**RelatedUrl**](RelatedUrl.md) |  | [optional] 

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


