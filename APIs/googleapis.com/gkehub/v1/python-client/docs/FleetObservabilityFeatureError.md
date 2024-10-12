# FleetObservabilityFeatureError

All error details of the fleet observability feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code of the error. | [optional] 
**description** | **str** | A human-readable description of the current status. | [optional] 

## Example

```python
from openapi_client.models.fleet_observability_feature_error import FleetObservabilityFeatureError

# TODO update the JSON string below
json = "{}"
# create an instance of FleetObservabilityFeatureError from a JSON string
fleet_observability_feature_error_instance = FleetObservabilityFeatureError.from_json(json)
# print the JSON string representation of the object
print(FleetObservabilityFeatureError.to_json())

# convert the object into a dict
fleet_observability_feature_error_dict = fleet_observability_feature_error_instance.to_dict()
# create an instance of FleetObservabilityFeatureError from a dict
fleet_observability_feature_error_from_dict = FleetObservabilityFeatureError.from_dict(fleet_observability_feature_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


