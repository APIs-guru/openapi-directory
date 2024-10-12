# Stage

Stage specifies a location to which to deploy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deploy_parameters** | [**List[DeployParameters]**](DeployParameters.md) | Optional. The deploy parameters to use for the target in this stage. | [optional] 
**profiles** | **List[str]** | Skaffold profiles to use when rendering the manifest for this stage&#39;s &#x60;Target&#x60;. | [optional] 
**strategy** | [**Strategy**](Strategy.md) |  | [optional] 
**target_id** | **str** | The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be &#x60;my-target&#x60; (rather than &#x60;projects/project/locations/location/targets/my-target&#x60;). The location of the &#x60;Target&#x60; is inferred to be the same as the location of the &#x60;DeliveryPipeline&#x60; that contains this &#x60;Stage&#x60;. | [optional] 

## Example

```python
from openapi_client.models.stage import Stage

# TODO update the JSON string below
json = "{}"
# create an instance of Stage from a JSON string
stage_instance = Stage.from_json(json)
# print the JSON string representation of the object
print(Stage.to_json())

# convert the object into a dict
stage_dict = stage_instance.to_dict()
# create an instance of Stage from a dict
stage_from_dict = Stage.from_dict(stage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


