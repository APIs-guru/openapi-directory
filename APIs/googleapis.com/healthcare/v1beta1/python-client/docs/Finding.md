# Finding


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | Zero-based ending index of the found text, exclusively. | [optional] 
**info_type** | **str** | The type of information stored in this text range. For example, HumanName, BirthDate, or Address. | [optional] 
**quote** | **str** | The snippet of the sensitive text. This field is only populated during deidentification if &#x60;store_quote&#x60; is set to true in DeidentifyConfig. | [optional] 
**start** | **str** | Zero-based starting index of the found text, inclusively. | [optional] 

## Example

```python
from openapi_client.models.finding import Finding

# TODO update the JSON string below
json = "{}"
# create an instance of Finding from a JSON string
finding_instance = Finding.from_json(json)
# print the JSON string representation of the object
print(Finding.to_json())

# convert the object into a dict
finding_dict = finding_instance.to_dict()
# create an instance of Finding from a dict
finding_from_dict = Finding.from_dict(finding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


