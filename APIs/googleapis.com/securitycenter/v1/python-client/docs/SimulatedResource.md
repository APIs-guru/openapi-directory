# SimulatedResource

Manually constructed resource name. If the custom module evaluates against only the resource data, you can omit the `iam_policy_data` field. If it evaluates only the `iam_policy_data` field, you can omit the resource data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iam_policy_data** | [**Policy**](Policy.md) |  | [optional] 
**resource_data** | **Dict[str, object]** | Optional. A representation of the Google Cloud resource. Should match the Google Cloud resource JSON format. | [optional] 
**resource_type** | **str** | Required. The type of the resource, for example, &#x60;compute.googleapis.com/Disk&#x60;. | [optional] 

## Example

```python
from openapi_client.models.simulated_resource import SimulatedResource

# TODO update the JSON string below
json = "{}"
# create an instance of SimulatedResource from a JSON string
simulated_resource_instance = SimulatedResource.from_json(json)
# print the JSON string representation of the object
print(SimulatedResource.to_json())

# convert the object into a dict
simulated_resource_dict = simulated_resource_instance.to_dict()
# create an instance of SimulatedResource from a dict
simulated_resource_from_dict = SimulatedResource.from_dict(simulated_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


