# XPSVideoTrainingOperationMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**train_cost_milli_node_hour** | **str** | This is an estimation of the node hours necessary for training a model, expressed in milli node hours (i.e. 1,000 value in this field means 1 node hour). A node hour represents the time a virtual machine spends running your training job. The cost of one node running for one hour is a node hour. | [optional] 

## Example

```python
from openapi_client.models.xps_video_training_operation_metadata import XPSVideoTrainingOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of XPSVideoTrainingOperationMetadata from a JSON string
xps_video_training_operation_metadata_instance = XPSVideoTrainingOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(XPSVideoTrainingOperationMetadata.to_json())

# convert the object into a dict
xps_video_training_operation_metadata_dict = xps_video_training_operation_metadata_instance.to_dict()
# create an instance of XPSVideoTrainingOperationMetadata from a dict
xps_video_training_operation_metadata_from_dict = XPSVideoTrainingOperationMetadata.from_dict(xps_video_training_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


