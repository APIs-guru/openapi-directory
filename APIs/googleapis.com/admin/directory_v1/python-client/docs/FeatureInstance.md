# FeatureInstance

JSON template for a feature instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature** | [**Feature**](Feature.md) |  | [optional] 

## Example

```python
from openapi_client.models.feature_instance import FeatureInstance

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureInstance from a JSON string
feature_instance_instance = FeatureInstance.from_json(json)
# print the JSON string representation of the object
print(FeatureInstance.to_json())

# convert the object into a dict
feature_instance_dict = feature_instance_instance.to_dict()
# create an instance of FeatureInstance from a dict
feature_instance_from_dict = FeatureInstance.from_dict(feature_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


