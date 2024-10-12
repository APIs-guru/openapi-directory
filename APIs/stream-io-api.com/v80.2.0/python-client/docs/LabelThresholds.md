# LabelThresholds


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**block** | **float** | Threshold for automatic message block | [optional] 
**flag** | **float** | Threshold for automatic message flag | [optional] 

## Example

```python
from openapi_client.models.label_thresholds import LabelThresholds

# TODO update the JSON string below
json = "{}"
# create an instance of LabelThresholds from a JSON string
label_thresholds_instance = LabelThresholds.from_json(json)
# print the JSON string representation of the object
print(LabelThresholds.to_json())

# convert the object into a dict
label_thresholds_dict = label_thresholds_instance.to_dict()
# create an instance of LabelThresholds from a dict
label_thresholds_from_dict = LabelThresholds.from_dict(label_thresholds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


