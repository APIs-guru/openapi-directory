# TopologySingleResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[TopologySingleResourceChild]**](TopologySingleResourceChild.md) | Azure resources connected to this resource which are in lower level in the topology view | [optional] [readonly] 
**location** | **str** | The location of this resource | [optional] [readonly] 
**network_zones** | **str** | Indicates the resource connectivity level to the Internet (InternetFacing, Internal ,etc.) | [optional] [readonly] 
**parents** | [**List[TopologySingleResourceParent]**](TopologySingleResourceParent.md) | Azure resources connected to this resource which are in higher level in the topology view | [optional] [readonly] 
**recommendations_exist** | **bool** | Indicates if the resource has security recommendations | [optional] [readonly] 
**resource_id** | **str** | Azure resource id | [optional] [readonly] 
**severity** | **str** | The security severity of the resource | [optional] [readonly] 
**topology_score** | **int** | Score of the resource based on its security severity | [optional] [readonly] 

## Example

```python
from openapi_client.models.topology_single_resource import TopologySingleResource

# TODO update the JSON string below
json = "{}"
# create an instance of TopologySingleResource from a JSON string
topology_single_resource_instance = TopologySingleResource.from_json(json)
# print the JSON string representation of the object
print(TopologySingleResource.to_json())

# convert the object into a dict
topology_single_resource_dict = topology_single_resource_instance.to_dict()
# create an instance of TopologySingleResource from a dict
topology_single_resource_from_dict = TopologySingleResource.from_dict(topology_single_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


