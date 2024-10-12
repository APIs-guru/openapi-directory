# DataFlowResource

Data flow resource type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Azure Data Factory nested object which contains a flow with data movements and transformations. | 
**etag** | **str** | Etag identifies change in the resource. | [optional] [readonly] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_flow_resource import DataFlowResource

# TODO update the JSON string below
json = "{}"
# create an instance of DataFlowResource from a JSON string
data_flow_resource_instance = DataFlowResource.from_json(json)
# print the JSON string representation of the object
print(DataFlowResource.to_json())

# convert the object into a dict
data_flow_resource_dict = data_flow_resource_instance.to_dict()
# create an instance of DataFlowResource from a dict
data_flow_resource_from_dict = DataFlowResource.from_dict(data_flow_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


