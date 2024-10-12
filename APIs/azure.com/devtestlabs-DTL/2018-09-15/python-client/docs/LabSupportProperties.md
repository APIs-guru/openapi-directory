# LabSupportProperties

Properties of a lab's support banner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **str** | Is the lab support banner active/enabled at this time? | [optional] 
**markdown** | **str** | The markdown text (if any) that this lab displays in the UI. If left empty/null, nothing will be shown. | [optional] 

## Example

```python
from openapi_client.models.lab_support_properties import LabSupportProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LabSupportProperties from a JSON string
lab_support_properties_instance = LabSupportProperties.from_json(json)
# print the JSON string representation of the object
print(LabSupportProperties.to_json())

# convert the object into a dict
lab_support_properties_dict = lab_support_properties_instance.to_dict()
# create an instance of LabSupportProperties from a dict
lab_support_properties_from_dict = LabSupportProperties.from_dict(lab_support_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


