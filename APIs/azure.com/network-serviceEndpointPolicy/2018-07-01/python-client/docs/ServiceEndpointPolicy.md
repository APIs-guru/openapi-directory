# ServiceEndpointPolicy

Service End point policy resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**ServiceEndpointPolicyPropertiesFormat**](ServiceEndpointPolicyPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_endpoint_policy import ServiceEndpointPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceEndpointPolicy from a JSON string
service_endpoint_policy_instance = ServiceEndpointPolicy.from_json(json)
# print the JSON string representation of the object
print(ServiceEndpointPolicy.to_json())

# convert the object into a dict
service_endpoint_policy_dict = service_endpoint_policy_instance.to_dict()
# create an instance of ServiceEndpointPolicy from a dict
service_endpoint_policy_from_dict = ServiceEndpointPolicy.from_dict(service_endpoint_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


