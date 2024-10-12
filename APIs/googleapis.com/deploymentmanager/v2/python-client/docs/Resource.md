# Resource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_control** | [**ResourceAccessControl**](ResourceAccessControl.md) |  | [optional] 
**final_properties** | **str** | Output only. The evaluated properties of the resource with references expanded. Returned as serialized YAML. | [optional] 
**id** | **str** |  | [optional] 
**insert_time** | **str** | Output only. Creation timestamp in RFC3339 text format. | [optional] 
**manifest** | **str** | Output only. URL of the manifest representing the current configuration of this resource. | [optional] 
**name** | **str** | Output only. The name of the resource as it appears in the YAML config. | [optional] 
**properties** | **str** | Output only. The current properties of the resource before any references have been filled in. Returned as serialized YAML. | [optional] 
**type** | **str** | Output only. The type of the resource, for example &#x60;compute.v1.instance&#x60;, or &#x60;cloudfunctions.v1beta1.function&#x60;. | [optional] 
**update** | [**ResourceUpdate**](ResourceUpdate.md) |  | [optional] 
**update_time** | **str** | Output only. Update timestamp in RFC3339 text format. | [optional] 
**url** | **str** | Output only. The URL of the actual resource. | [optional] 
**warnings** | [**List[OperationWarningsInner]**](OperationWarningsInner.md) | Output only. If warning messages are generated during processing of this resource, this field will be populated. | [optional] 

## Example

```python
from openapi_client.models.resource import Resource

# TODO update the JSON string below
json = "{}"
# create an instance of Resource from a JSON string
resource_instance = Resource.from_json(json)
# print the JSON string representation of the object
print(Resource.to_json())

# convert the object into a dict
resource_dict = resource_instance.to_dict()
# create an instance of Resource from a dict
resource_from_dict = Resource.from_dict(resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


