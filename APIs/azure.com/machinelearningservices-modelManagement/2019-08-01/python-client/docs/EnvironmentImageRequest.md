# EnvironmentImageRequest

Request to create a Docker image based on Environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**List[EnvironmentImageAsset]**](EnvironmentImageAsset.md) | The list of assets. | [optional] 
**driver_program** | **str** | The name of the driver file. | [optional] 
**environment** | [**ModelEnvironmentDefinition**](ModelEnvironmentDefinition.md) |  | [optional] 
**model_ids** | **List[str]** | The list of model Ids. | [optional] 

## Example

```python
from openapi_client.models.environment_image_request import EnvironmentImageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentImageRequest from a JSON string
environment_image_request_instance = EnvironmentImageRequest.from_json(json)
# print the JSON string representation of the object
print(EnvironmentImageRequest.to_json())

# convert the object into a dict
environment_image_request_dict = environment_image_request_instance.to_dict()
# create an instance of EnvironmentImageRequest from a dict
environment_image_request_from_dict = EnvironmentImageRequest.from_dict(environment_image_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


