# CustomTargetDeployMetadata

CustomTargetDeployMetadata contains information from a Custom Target deploy operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skip_message** | **str** | Output only. Skip message provided in the results of a custom deploy operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_target_deploy_metadata import CustomTargetDeployMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CustomTargetDeployMetadata from a JSON string
custom_target_deploy_metadata_instance = CustomTargetDeployMetadata.from_json(json)
# print the JSON string representation of the object
print(CustomTargetDeployMetadata.to_json())

# convert the object into a dict
custom_target_deploy_metadata_dict = custom_target_deploy_metadata_instance.to_dict()
# create an instance of CustomTargetDeployMetadata from a dict
custom_target_deploy_metadata_from_dict = CustomTargetDeployMetadata.from_dict(custom_target_deploy_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


