# FeatureReference

Identifier for a Feature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Feature id | [optional] 
**type** | **str** | Type of specific feature or Taxonomy node such as EventCategory, SportsTeam, Persona. | [optional] 
**name** | **str** | Display name of the feature | [optional] 

## Example

```python
from openapi_client.models.feature_reference import FeatureReference

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureReference from a JSON string
feature_reference_instance = FeatureReference.from_json(json)
# print the JSON string representation of the object
print(FeatureReference.to_json())

# convert the object into a dict
feature_reference_dict = feature_reference_instance.to_dict()
# create an instance of FeatureReference from a dict
feature_reference_from_dict = FeatureReference.from_dict(feature_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


