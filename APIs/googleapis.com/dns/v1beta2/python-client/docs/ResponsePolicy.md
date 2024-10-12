# ResponsePolicy

A Response Policy is a collection of selectors that apply to queries made against one or more Virtual Private Cloud networks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | User-provided description for this Response Policy. | [optional] 
**gke_clusters** | [**List[ResponsePolicyGKECluster]**](ResponsePolicyGKECluster.md) | The list of Google Kubernetes Engine clusters to which this response policy is applied. | [optional] 
**id** | **str** | Unique identifier for the resource; defined by the server (output only). | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#responsePolicy']
**labels** | **Dict[str, str]** | User labels. | [optional] 
**networks** | [**List[ResponsePolicyNetwork]**](ResponsePolicyNetwork.md) | List of network names specifying networks to which this policy is applied. | [optional] 
**response_policy_name** | **str** | User assigned name for this Response Policy. | [optional] 

## Example

```python
from openapi_client.models.response_policy import ResponsePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ResponsePolicy from a JSON string
response_policy_instance = ResponsePolicy.from_json(json)
# print the JSON string representation of the object
print(ResponsePolicy.to_json())

# convert the object into a dict
response_policy_dict = response_policy_instance.to_dict()
# create an instance of ResponsePolicy from a dict
response_policy_from_dict = ResponsePolicy.from_dict(response_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


