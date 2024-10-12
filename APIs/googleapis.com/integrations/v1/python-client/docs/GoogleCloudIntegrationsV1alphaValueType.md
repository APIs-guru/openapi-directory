# GoogleCloudIntegrationsV1alphaValueType

The type of the parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean_array** | [**GoogleCloudIntegrationsV1alphaBooleanParameterArray**](GoogleCloudIntegrationsV1alphaBooleanParameterArray.md) |  | [optional] 
**boolean_value** | **bool** | Boolean. | [optional] 
**double_array** | [**GoogleCloudIntegrationsV1alphaDoubleParameterArray**](GoogleCloudIntegrationsV1alphaDoubleParameterArray.md) |  | [optional] 
**double_value** | **float** | Double Number. | [optional] 
**int_array** | [**GoogleCloudIntegrationsV1alphaIntParameterArray**](GoogleCloudIntegrationsV1alphaIntParameterArray.md) |  | [optional] 
**int_value** | **str** | Integer. | [optional] 
**json_value** | **str** | Json. | [optional] 
**string_array** | [**GoogleCloudIntegrationsV1alphaStringParameterArray**](GoogleCloudIntegrationsV1alphaStringParameterArray.md) |  | [optional] 
**string_value** | **str** | String. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_value_type import GoogleCloudIntegrationsV1alphaValueType

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaValueType from a JSON string
google_cloud_integrations_v1alpha_value_type_instance = GoogleCloudIntegrationsV1alphaValueType.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaValueType.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_value_type_dict = google_cloud_integrations_v1alpha_value_type_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaValueType from a dict
google_cloud_integrations_v1alpha_value_type_from_dict = GoogleCloudIntegrationsV1alphaValueType.from_dict(google_cloud_integrations_v1alpha_value_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


