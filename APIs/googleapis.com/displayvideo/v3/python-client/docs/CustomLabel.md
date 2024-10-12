# CustomLabel

The key and value of a custom label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the label. | [optional] 
**value** | **str** | The value of the label. | [optional] 

## Example

```python
from openapi_client.models.custom_label import CustomLabel

# TODO update the JSON string below
json = "{}"
# create an instance of CustomLabel from a JSON string
custom_label_instance = CustomLabel.from_json(json)
# print the JSON string representation of the object
print(CustomLabel.to_json())

# convert the object into a dict
custom_label_dict = custom_label_instance.to_dict()
# create an instance of CustomLabel from a dict
custom_label_from_dict = CustomLabel.from_dict(custom_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


