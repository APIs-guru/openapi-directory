# ServiceSpec

ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template** | [**RevisionTemplate**](RevisionTemplate.md) |  | [optional] 
**traffic** | [**List[TrafficTarget]**](TrafficTarget.md) | Specifies how to distribute traffic over a collection of Knative Revisions and Configurations to the Service&#39;s main URL. | [optional] 

## Example

```python
from openapi_client.models.service_spec import ServiceSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceSpec from a JSON string
service_spec_instance = ServiceSpec.from_json(json)
# print the JSON string representation of the object
print(ServiceSpec.to_json())

# convert the object into a dict
service_spec_dict = service_spec_instance.to_dict()
# create an instance of ServiceSpec from a dict
service_spec_from_dict = ServiceSpec.from_dict(service_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


