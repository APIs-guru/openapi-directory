# Thresholds

Sets thresholds for AI moderation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit** | [**LabelThresholds**](LabelThresholds.md) |  | [optional] 
**spam** | [**LabelThresholds**](LabelThresholds.md) |  | [optional] 
**toxic** | [**LabelThresholds**](LabelThresholds.md) |  | [optional] 

## Example

```python
from openapi_client.models.thresholds import Thresholds

# TODO update the JSON string below
json = "{}"
# create an instance of Thresholds from a JSON string
thresholds_instance = Thresholds.from_json(json)
# print the JSON string representation of the object
print(Thresholds.to_json())

# convert the object into a dict
thresholds_dict = thresholds_instance.to_dict()
# create an instance of Thresholds from a dict
thresholds_from_dict = Thresholds.from_dict(thresholds_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


