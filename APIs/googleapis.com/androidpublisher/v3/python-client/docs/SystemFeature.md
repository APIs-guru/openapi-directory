# SystemFeature

Representation of a system feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the feature. | [optional] 

## Example

```python
from openapi_client.models.system_feature import SystemFeature

# TODO update the JSON string below
json = "{}"
# create an instance of SystemFeature from a JSON string
system_feature_instance = SystemFeature.from_json(json)
# print the JSON string representation of the object
print(SystemFeature.to_json())

# convert the object into a dict
system_feature_dict = system_feature_instance.to_dict()
# create an instance of SystemFeature from a dict
system_feature_from_dict = SystemFeature.from_dict(system_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


