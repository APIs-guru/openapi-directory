# RunPipelineRequest

The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Life Sciences service account or the request will fail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | User-defined labels to associate with the returned operation. These labels are not propagated to any Google Cloud Platform resources used by the operation, and can be modified at any time. To associate labels with resources created while executing the operation, see the appropriate resource message (for example, &#x60;VirtualMachine&#x60;). | [optional] 
**pipeline** | [**Pipeline**](Pipeline.md) |  | [optional] 
**pub_sub_topic** | **str** | The name of an existing Pub/Sub topic. The server will publish messages to this topic whenever the status of the operation changes. The Life Sciences Service Agent account must have publisher permissions to the specified topic or notifications will not be sent. | [optional] 

## Example

```python
from openapi_client.models.run_pipeline_request import RunPipelineRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RunPipelineRequest from a JSON string
run_pipeline_request_instance = RunPipelineRequest.from_json(json)
# print the JSON string representation of the object
print(RunPipelineRequest.to_json())

# convert the object into a dict
run_pipeline_request_dict = run_pipeline_request_instance.to_dict()
# create an instance of RunPipelineRequest from a dict
run_pipeline_request_from_dict = RunPipelineRequest.from_dict(run_pipeline_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


