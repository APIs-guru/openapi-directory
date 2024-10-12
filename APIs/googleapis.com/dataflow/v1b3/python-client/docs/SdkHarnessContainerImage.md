# SdkHarnessContainerImage

Defines an SDK harness container for executing Dataflow pipelines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | **List[str]** | The set of capabilities enumerated in the above Environment proto. See also [beam_runner_api.proto](https://github.com/apache/beam/blob/master/model/pipeline/src/main/proto/org/apache/beam/model/pipeline/v1/beam_runner_api.proto) | [optional] 
**container_image** | **str** | A docker container image that resides in Google Container Registry. | [optional] 
**environment_id** | **str** | Environment ID for the Beam runner API proto Environment that corresponds to the current SDK Harness. | [optional] 
**use_single_core_per_container** | **bool** | If true, recommends the Dataflow service to use only one core per SDK container instance with this image. If false (or unset) recommends using more than one core per SDK container instance with this image for efficiency. Note that Dataflow service may choose to override this property if needed. | [optional] 

## Example

```python
from openapi_client.models.sdk_harness_container_image import SdkHarnessContainerImage

# TODO update the JSON string below
json = "{}"
# create an instance of SdkHarnessContainerImage from a JSON string
sdk_harness_container_image_instance = SdkHarnessContainerImage.from_json(json)
# print the JSON string representation of the object
print(SdkHarnessContainerImage.to_json())

# convert the object into a dict
sdk_harness_container_image_dict = sdk_harness_container_image_instance.to_dict()
# create an instance of SdkHarnessContainerImage from a dict
sdk_harness_container_image_from_dict = SdkHarnessContainerImage.from_dict(sdk_harness_container_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


