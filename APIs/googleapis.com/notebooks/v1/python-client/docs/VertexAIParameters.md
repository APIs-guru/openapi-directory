# VertexAIParameters

Parameters used in Vertex AI JobType executions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**env** | **Dict[str, str]** | Environment variables. At most 100 environment variables can be specified and unique. Example: &#x60;GCP_BUCKET&#x3D;gs://my-bucket/samples/&#x60; | [optional] 
**network** | **str** | The full name of the Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the Job should be peered. For example, &#x60;projects/12345/global/networks/myVPC&#x60;. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert) is of the form &#x60;projects/{project}/global/networks/{network}&#x60;. Where &#x60;{project}&#x60; is a project number, as in &#x60;12345&#x60;, and &#x60;{network}&#x60; is a network name. Private services access must already be configured for the network. If left unspecified, the job is not peered with any network. | [optional] 

## Example

```python
from openapi_client.models.vertex_ai_parameters import VertexAIParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VertexAIParameters from a JSON string
vertex_ai_parameters_instance = VertexAIParameters.from_json(json)
# print the JSON string representation of the object
print(VertexAIParameters.to_json())

# convert the object into a dict
vertex_ai_parameters_dict = vertex_ai_parameters_instance.to_dict()
# create an instance of VertexAIParameters from a dict
vertex_ai_parameters_from_dict = VertexAIParameters.from_dict(vertex_ai_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


