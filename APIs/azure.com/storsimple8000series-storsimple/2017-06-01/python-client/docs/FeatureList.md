# FeatureList

The collections of features.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Feature]**](Feature.md) | The value. | 

## Example

```python
from openapi_client.models.feature_list import FeatureList

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureList from a JSON string
feature_list_instance = FeatureList.from_json(json)
# print the JSON string representation of the object
print(FeatureList.to_json())

# convert the object into a dict
feature_list_dict = feature_list_instance.to_dict()
# create an instance of FeatureList from a dict
feature_list_from_dict = FeatureList.from_dict(feature_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


