# ConnectivityHop

Information about a hop between the source and the destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The IP address of the hop. | [optional] [readonly] 
**id** | **str** | The ID of the hop. | [optional] [readonly] 
**issues** | [**List[ConnectivityIssue]**](ConnectivityIssue.md) | List of issues. | [optional] [readonly] 
**next_hop_ids** | **List[str]** | List of next hop identifiers. | [optional] [readonly] 
**resource_id** | **str** | The ID of the resource corresponding to this hop. | [optional] [readonly] 
**type** | **str** | The type of the hop. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connectivity_hop import ConnectivityHop

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectivityHop from a JSON string
connectivity_hop_instance = ConnectivityHop.from_json(json)
# print the JSON string representation of the object
print(ConnectivityHop.to_json())

# convert the object into a dict
connectivity_hop_dict = connectivity_hop_instance.to_dict()
# create an instance of ConnectivityHop from a dict
connectivity_hop_from_dict = ConnectivityHop.from_dict(connectivity_hop_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


