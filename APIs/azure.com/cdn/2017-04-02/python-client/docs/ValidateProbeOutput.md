# ValidateProbeOutput

Output of the validate probe API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Specifies the error code when the probe url is not accepted. | [optional] [readonly] 
**is_valid** | **bool** | Indicates whether the probe URL is accepted or not. | [optional] [readonly] 
**message** | **str** | The detailed error message describing why the probe URL is not accepted. | [optional] [readonly] 

## Example

```python
from openapi_client.models.validate_probe_output import ValidateProbeOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateProbeOutput from a JSON string
validate_probe_output_instance = ValidateProbeOutput.from_json(json)
# print the JSON string representation of the object
print(ValidateProbeOutput.to_json())

# convert the object into a dict
validate_probe_output_dict = validate_probe_output_instance.to_dict()
# create an instance of ValidateProbeOutput from a dict
validate_probe_output_from_dict = ValidateProbeOutput.from_dict(validate_probe_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


