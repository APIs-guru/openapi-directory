# DeliveryPipeline

A `DeliveryPipeline` resource in the Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. | [optional] 
**condition** | [**PipelineCondition**](PipelineCondition.md) |  | [optional] 
**create_time** | **str** | Output only. Time at which the pipeline was created. | [optional] [readonly] 
**description** | **str** | Description of the &#x60;DeliveryPipeline&#x60;. Max length is 255 characters. | [optional] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**labels** | **Dict[str, str]** | Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be &lt;&#x3D; 128 bytes. | [optional] 
**name** | **str** | Optional. Name of the &#x60;DeliveryPipeline&#x60;. Format is &#x60;projects/{project}/locations/{location}/deliveryPipelines/a-z{0,62}&#x60;. | [optional] 
**serial_pipeline** | [**SerialPipeline**](SerialPipeline.md) |  | [optional] 
**suspended** | **bool** | When suspended, no new releases or rollouts can be created, but in-progress ones will complete. | [optional] 
**uid** | **str** | Output only. Unique identifier of the &#x60;DeliveryPipeline&#x60;. | [optional] [readonly] 
**update_time** | **str** | Output only. Most recent time at which the pipeline was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.delivery_pipeline import DeliveryPipeline

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryPipeline from a JSON string
delivery_pipeline_instance = DeliveryPipeline.from_json(json)
# print the JSON string representation of the object
print(DeliveryPipeline.to_json())

# convert the object into a dict
delivery_pipeline_dict = delivery_pipeline_instance.to_dict()
# create an instance of DeliveryPipeline from a dict
delivery_pipeline_from_dict = DeliveryPipeline.from_dict(delivery_pipeline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


