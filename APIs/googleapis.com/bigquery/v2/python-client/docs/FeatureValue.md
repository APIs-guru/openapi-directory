# FeatureValue

Representative value of a single feature within the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categorical_value** | [**CategoricalValue**](CategoricalValue.md) |  | [optional] 
**feature_column** | **str** | The feature column name. | [optional] 
**numerical_value** | **float** | The numerical feature value. This is the centroid value for this feature. | [optional] 

## Example

```python
from openapi_client.models.feature_value import FeatureValue

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureValue from a JSON string
feature_value_instance = FeatureValue.from_json(json)
# print the JSON string representation of the object
print(FeatureValue.to_json())

# convert the object into a dict
feature_value_dict = feature_value_instance.to_dict()
# create an instance of FeatureValue from a dict
feature_value_from_dict = FeatureValue.from_dict(feature_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


