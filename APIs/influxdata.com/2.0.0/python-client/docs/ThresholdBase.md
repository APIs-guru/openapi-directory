# ThresholdBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_values** | **bool** | If true, only alert if all values meet threshold. | [optional] 
**level** | [**CheckStatusLevel**](CheckStatusLevel.md) |  | [optional] 

## Example

```python
from openapi_client.models.threshold_base import ThresholdBase

# TODO update the JSON string below
json = "{}"
# create an instance of ThresholdBase from a JSON string
threshold_base_instance = ThresholdBase.from_json(json)
# print the JSON string representation of the object
print(ThresholdBase.to_json())

# convert the object into a dict
threshold_base_dict = threshold_base_instance.to_dict()
# create an instance of ThresholdBase from a dict
threshold_base_from_dict = ThresholdBase.from_dict(threshold_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


