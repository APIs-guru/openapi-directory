# Correction

Output only. Shows any corrections that were applied to this creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contexts** | [**List[ServingContext]**](ServingContext.md) | The contexts for the correction. | [optional] 
**details** | **List[str]** | Additional details about what was corrected. | [optional] 
**type** | **str** | The type of correction that was applied to the creative. | [optional] 

## Example

```python
from openapi_client.models.correction import Correction

# TODO update the JSON string below
json = "{}"
# create an instance of Correction from a JSON string
correction_instance = Correction.from_json(json)
# print the JSON string representation of the object
print(Correction.to_json())

# convert the object into a dict
correction_dict = correction_instance.to_dict()
# create an instance of Correction from a dict
correction_from_dict = Correction.from_dict(correction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


