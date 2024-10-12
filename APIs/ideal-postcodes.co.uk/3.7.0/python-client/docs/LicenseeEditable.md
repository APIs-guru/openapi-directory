# LicenseeEditable

Licensee object which can be defined by user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Licensee&#39;s first, second and third line address as well as post town concatenated by commas | [optional] 
**daily** | [**LicenseeEditableDaily**](LicenseeEditableDaily.md) |  | [optional] 
**name** | **str** | Licensee individual or organisation name | [optional] 
**postcode** | **str** | Licensee&#39;s postcode | [optional] 
**whitelist** | **List[str]** | A list of allowed URLs. An empty list means that whitelisting is disabled | [optional] 

## Example

```python
from openapi_client.models.licensee_editable import LicenseeEditable

# TODO update the JSON string below
json = "{}"
# create an instance of LicenseeEditable from a JSON string
licensee_editable_instance = LicenseeEditable.from_json(json)
# print the JSON string representation of the object
print(LicenseeEditable.to_json())

# convert the object into a dict
licensee_editable_dict = licensee_editable_instance.to_dict()
# create an instance of LicenseeEditable from a dict
licensee_editable_from_dict = LicenseeEditable.from_dict(licensee_editable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


