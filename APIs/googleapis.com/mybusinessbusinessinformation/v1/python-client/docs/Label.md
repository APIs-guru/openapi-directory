# Label

Label to be used when displaying the price list, section, or item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. Description of the price list, section, or item. | [optional] 
**display_name** | **str** | Required. Display name for the price list, section, or item. | [optional] 
**language_code** | **str** | Optional. The BCP-47 language code that these strings apply for. Only one set of labels may be set per language. | [optional] 

## Example

```python
from openapi_client.models.label import Label

# TODO update the JSON string below
json = "{}"
# create an instance of Label from a JSON string
label_instance = Label.from_json(json)
# print the JSON string representation of the object
print(Label.to_json())

# convert the object into a dict
label_dict = label_instance.to_dict()
# create an instance of Label from a dict
label_from_dict = Label.from_dict(label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


