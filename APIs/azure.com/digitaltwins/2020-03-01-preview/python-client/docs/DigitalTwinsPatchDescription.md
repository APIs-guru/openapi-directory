# DigitalTwinsPatchDescription

The description of the DigitalTwins service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Instance tags | [optional] 

## Example

```python
from openapi_client.models.digital_twins_patch_description import DigitalTwinsPatchDescription

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalTwinsPatchDescription from a JSON string
digital_twins_patch_description_instance = DigitalTwinsPatchDescription.from_json(json)
# print the JSON string representation of the object
print(DigitalTwinsPatchDescription.to_json())

# convert the object into a dict
digital_twins_patch_description_dict = digital_twins_patch_description_instance.to_dict()
# create an instance of DigitalTwinsPatchDescription from a dict
digital_twins_patch_description_from_dict = DigitalTwinsPatchDescription.from_dict(digital_twins_patch_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


