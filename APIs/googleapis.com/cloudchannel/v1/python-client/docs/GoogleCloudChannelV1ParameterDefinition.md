# GoogleCloudChannelV1ParameterDefinition

Parameter's definition. Specifies what parameter is required to use the current Offer to purchase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_values** | [**List[GoogleCloudChannelV1Value]**](GoogleCloudChannelV1Value.md) | If not empty, parameter values must be drawn from this list. For example, [us-west1, us-west2, ...] Applicable to STRING parameter type. | [optional] 
**max_value** | [**GoogleCloudChannelV1Value**](GoogleCloudChannelV1Value.md) |  | [optional] 
**min_value** | [**GoogleCloudChannelV1Value**](GoogleCloudChannelV1Value.md) |  | [optional] 
**name** | **str** | Name of the parameter. | [optional] 
**optional** | **bool** | If set to true, parameter is optional to purchase this Offer. | [optional] 
**parameter_type** | **str** | Data type of the parameter. Minimal value, Maximum value and allowed values will use specified data type here. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_parameter_definition import GoogleCloudChannelV1ParameterDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ParameterDefinition from a JSON string
google_cloud_channel_v1_parameter_definition_instance = GoogleCloudChannelV1ParameterDefinition.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ParameterDefinition.to_json())

# convert the object into a dict
google_cloud_channel_v1_parameter_definition_dict = google_cloud_channel_v1_parameter_definition_instance.to_dict()
# create an instance of GoogleCloudChannelV1ParameterDefinition from a dict
google_cloud_channel_v1_parameter_definition_from_dict = GoogleCloudChannelV1ParameterDefinition.from_dict(google_cloud_channel_v1_parameter_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


