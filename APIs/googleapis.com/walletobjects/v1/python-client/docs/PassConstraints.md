# PassConstraints

Container for any constraints that may be placed on passes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nfc_constraint** | **List[str]** | The NFC constraints for the pass. | [optional] 
**screenshot_eligibility** | **str** | The screenshot eligibility for the pass. | [optional] 

## Example

```python
from openapi_client.models.pass_constraints import PassConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of PassConstraints from a JSON string
pass_constraints_instance = PassConstraints.from_json(json)
# print the JSON string representation of the object
print(PassConstraints.to_json())

# convert the object into a dict
pass_constraints_dict = pass_constraints_instance.to_dict()
# create an instance of PassConstraints from a dict
pass_constraints_from_dict = PassConstraints.from_dict(pass_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


