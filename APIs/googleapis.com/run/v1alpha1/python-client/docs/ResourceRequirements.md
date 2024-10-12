# ResourceRequirements

ResourceRequirements describes the compute resource requirements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limits** | **Dict[str, str]** | (Optional) Only memory and CPU are supported. Limits describes the maximum amount of compute resources allowed. The values of the map is string form of the &#39;quantity&#39; k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go | [optional] 
**requests** | **Dict[str, str]** | (Optional) Only memory and CPU are supported. Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. The values of the map is string form of the &#39;quantity&#39; k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go | [optional] 

## Example

```python
from openapi_client.models.resource_requirements import ResourceRequirements

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceRequirements from a JSON string
resource_requirements_instance = ResourceRequirements.from_json(json)
# print the JSON string representation of the object
print(ResourceRequirements.to_json())

# convert the object into a dict
resource_requirements_dict = resource_requirements_instance.to_dict()
# create an instance of ResourceRequirements from a dict
resource_requirements_from_dict = ResourceRequirements.from_dict(resource_requirements_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


