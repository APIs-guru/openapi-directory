# Justification

Justification provides the justification when the state of the assessment if NOT_AFFECTED.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Additional details on why this justification was chosen. | [optional] 
**justification_type** | **str** | The justification type for this vulnerability. | [optional] 

## Example

```python
from openapi_client.models.justification import Justification

# TODO update the JSON string below
json = "{}"
# create an instance of Justification from a JSON string
justification_instance = Justification.from_json(json)
# print the JSON string representation of the object
print(Justification.to_json())

# convert the object into a dict
justification_dict = justification_instance.to_dict()
# create an instance of Justification from a dict
justification_from_dict = Justification.from_dict(justification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


