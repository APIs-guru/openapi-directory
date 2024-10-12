# RunOutputProperties

Describes the properties of a run output

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_id** | **str** | The resource id of the artifact. | [optional] 
**artifact_uri** | **str** | The location URI of the artifact. | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 

## Example

```python
from openapi_client.models.run_output_properties import RunOutputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RunOutputProperties from a JSON string
run_output_properties_instance = RunOutputProperties.from_json(json)
# print the JSON string representation of the object
print(RunOutputProperties.to_json())

# convert the object into a dict
run_output_properties_dict = run_output_properties_instance.to_dict()
# create an instance of RunOutputProperties from a dict
run_output_properties_from_dict = RunOutputProperties.from_dict(run_output_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


