# ValidateProbeInput

Input of the validate probe API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**probe_url** | **str** | The probe URL to validate. | 

## Example

```python
from openapi_client.models.validate_probe_input import ValidateProbeInput

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateProbeInput from a JSON string
validate_probe_input_instance = ValidateProbeInput.from_json(json)
# print the JSON string representation of the object
print(ValidateProbeInput.to_json())

# convert the object into a dict
validate_probe_input_dict = validate_probe_input_instance.to_dict()
# create an instance of ValidateProbeInput from a dict
validate_probe_input_from_dict = ValidateProbeInput.from_dict(validate_probe_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


