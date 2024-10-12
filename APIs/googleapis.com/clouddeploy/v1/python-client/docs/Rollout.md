# Rollout

A `Rollout` resource in the Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations. | [optional] 
**approval_state** | **str** | Output only. Approval state of the &#x60;Rollout&#x60;. | [optional] [readonly] 
**approve_time** | **str** | Output only. Time at which the &#x60;Rollout&#x60; was approved. | [optional] [readonly] 
**controller_rollout** | **str** | Output only. Name of the &#x60;ControllerRollout&#x60;. Format is &#x60;projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/a-z{0,62}&#x60;. | [optional] [readonly] 
**create_time** | **str** | Output only. Time at which the &#x60;Rollout&#x60; was created. | [optional] [readonly] 
**deploy_end_time** | **str** | Output only. Time at which the &#x60;Rollout&#x60; finished deploying. | [optional] [readonly] 
**deploy_failure_cause** | **str** | Output only. The reason this rollout failed. This will always be unspecified while the rollout is in progress. | [optional] [readonly] 
**deploy_start_time** | **str** | Output only. Time at which the &#x60;Rollout&#x60; started deploying. | [optional] [readonly] 
**deploying_build** | **str** | Output only. The resource name of the Cloud Build &#x60;Build&#x60; object that is used to deploy the Rollout. Format is &#x60;projects/{project}/locations/{location}/builds/{build}&#x60;. | [optional] [readonly] 
**description** | **str** | Description of the &#x60;Rollout&#x60; for user purposes. Max length is 255 characters. | [optional] 
**enqueue_time** | **str** | Output only. Time at which the &#x60;Rollout&#x60; was enqueued. | [optional] [readonly] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**failure_reason** | **str** | Output only. Additional information about the rollout failure, if available. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;&#x3D; 128 bytes. | [optional] 
**metadata** | [**Metadata**](Metadata.md) |  | [optional] 
**name** | **str** | Optional. Name of the &#x60;Rollout&#x60;. Format is &#x60;projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/a-z{0,62}&#x60;. | [optional] 
**phases** | [**List[Phase]**](Phase.md) | Output only. The phases that represent the workflows of this &#x60;Rollout&#x60;. | [optional] [readonly] 
**rollback_of_rollout** | **str** | Output only. Name of the &#x60;Rollout&#x60; that is rolled back by this &#x60;Rollout&#x60;. Empty if this &#x60;Rollout&#x60; wasn&#39;t created as a rollback. | [optional] [readonly] 
**rolled_back_by_rollouts** | **List[str]** | Output only. Names of &#x60;Rollouts&#x60; that rolled back this &#x60;Rollout&#x60;. | [optional] [readonly] 
**state** | **str** | Output only. Current state of the &#x60;Rollout&#x60;. | [optional] [readonly] 
**target_id** | **str** | Required. The ID of Target to which this &#x60;Rollout&#x60; is deploying. | [optional] 
**uid** | **str** | Output only. Unique identifier of the &#x60;Rollout&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.rollout import Rollout

# TODO update the JSON string below
json = "{}"
# create an instance of Rollout from a JSON string
rollout_instance = Rollout.from_json(json)
# print the JSON string representation of the object
print(Rollout.to_json())

# convert the object into a dict
rollout_dict = rollout_instance.to_dict()
# create an instance of Rollout from a dict
rollout_from_dict = Rollout.from_dict(rollout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


