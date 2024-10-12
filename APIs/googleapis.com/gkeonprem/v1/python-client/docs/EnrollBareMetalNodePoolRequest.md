# EnrollBareMetalNodePoolRequest

Message for enrolling an existing bare metal node pool to the GKE on-prem API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bare_metal_node_pool_id** | **str** | User provided OnePlatform identifier that is used as part of the resource name. (https://tools.ietf.org/html/rfc1123) format. | [optional] 
**validate_only** | **bool** | If set, only validate the request, but do not actually enroll the node pool. | [optional] 

## Example

```python
from openapi_client.models.enroll_bare_metal_node_pool_request import EnrollBareMetalNodePoolRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnrollBareMetalNodePoolRequest from a JSON string
enroll_bare_metal_node_pool_request_instance = EnrollBareMetalNodePoolRequest.from_json(json)
# print the JSON string representation of the object
print(EnrollBareMetalNodePoolRequest.to_json())

# convert the object into a dict
enroll_bare_metal_node_pool_request_dict = enroll_bare_metal_node_pool_request_instance.to_dict()
# create an instance of EnrollBareMetalNodePoolRequest from a dict
enroll_bare_metal_node_pool_request_from_dict = EnrollBareMetalNodePoolRequest.from_dict(enroll_bare_metal_node_pool_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


