# GoogleCloudMlV1ParameterSpec

Represents a single hyperparameter to optimize.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categorical_values** | **List[str]** | Required if type is &#x60;CATEGORICAL&#x60;. The list of possible categories. | [optional] 
**discrete_values** | **List[float]** | Required if type is &#x60;DISCRETE&#x60;. A list of feasible points. The list should be in strictly increasing order. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values. | [optional] 
**max_value** | **float** | Required if type is &#x60;DOUBLE&#x60; or &#x60;INTEGER&#x60;. This field should be unset if type is &#x60;CATEGORICAL&#x60;. This value should be integers if type is &#x60;INTEGER&#x60;. | [optional] 
**min_value** | **float** | Required if type is &#x60;DOUBLE&#x60; or &#x60;INTEGER&#x60;. This field should be unset if type is &#x60;CATEGORICAL&#x60;. This value should be integers if type is INTEGER. | [optional] 
**parameter_name** | **str** | Required. The parameter name must be unique amongst all ParameterConfigs in a HyperparameterSpec message. E.g., \&quot;learning_rate\&quot;. | [optional] 
**scale_type** | **str** | Optional. How the parameter should be scaled to the hypercube. Leave unset for categorical parameters. Some kind of scaling is strongly recommended for real or integral parameters (e.g., &#x60;UNIT_LINEAR_SCALE&#x60;). | [optional] 
**type** | **str** | Required. The type of the parameter. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_parameter_spec import GoogleCloudMlV1ParameterSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1ParameterSpec from a JSON string
google_cloud_ml_v1_parameter_spec_instance = GoogleCloudMlV1ParameterSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1ParameterSpec.to_json())

# convert the object into a dict
google_cloud_ml_v1_parameter_spec_dict = google_cloud_ml_v1_parameter_spec_instance.to_dict()
# create an instance of GoogleCloudMlV1ParameterSpec from a dict
google_cloud_ml_v1_parameter_spec_from_dict = GoogleCloudMlV1ParameterSpec.from_dict(google_cloud_ml_v1_parameter_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


