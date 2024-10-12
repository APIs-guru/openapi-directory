# Hub

Network Connectivity Center is a hub-and-spoke abstraction for network connectivity management in Google Cloud. It reduces operational complexity through a simple, centralized connectivity management model. Following is the resource message of a hub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Time when the Hub was created. | [optional] 
**description** | **str** | Short description of the hub resource. | [optional] 
**labels** | **Dict[str, str]** | User-defined labels. | [optional] 
**name** | **str** | Immutable. The name of a Hub resource. | [optional] 
**spokes** | **List[str]** | Output only. A list of the URIs of all attached spokes. This field is deprecated and will not be included in future API versions. Call ListSpokes on each region instead. | [optional] [readonly] 
**state** | **str** | Output only. The current lifecycle state of this Hub. | [optional] [readonly] 
**unique_id** | **str** | Output only. Google-generated UUID for this resource. This is unique across all Hub resources. If a Hub resource is deleted and another with the same name is created, it gets a different unique_id. | [optional] [readonly] 
**update_time** | **str** | Time when the Hub was updated. | [optional] 

## Example

```python
from openapi_client.models.hub import Hub

# TODO update the JSON string below
json = "{}"
# create an instance of Hub from a JSON string
hub_instance = Hub.from_json(json)
# print the JSON string representation of the object
print(Hub.to_json())

# convert the object into a dict
hub_dict = hub_instance.to_dict()
# create an instance of Hub from a dict
hub_from_dict = Hub.from_dict(hub_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


