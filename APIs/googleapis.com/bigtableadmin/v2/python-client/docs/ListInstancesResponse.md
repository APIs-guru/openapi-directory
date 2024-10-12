# ListInstancesResponse

Response message for BigtableInstanceAdmin.ListInstances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_locations** | **List[str]** | Locations from which Instance information could not be retrieved, due to an outage or some other transient condition. Instances whose Clusters are all in one of the failed locations may be missing from &#x60;instances&#x60;, and Instances with at least one Cluster in a failed location may only have partial information returned. Values are of the form &#x60;projects//locations/&#x60; | [optional] 
**instances** | [**List[Instance]**](Instance.md) | The list of requested instances. | [optional] 
**next_page_token** | **str** | DEPRECATED: This field is unused and ignored. | [optional] 

## Example

```python
from openapi_client.models.list_instances_response import ListInstancesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListInstancesResponse from a JSON string
list_instances_response_instance = ListInstancesResponse.from_json(json)
# print the JSON string representation of the object
print(ListInstancesResponse.to_json())

# convert the object into a dict
list_instances_response_dict = list_instances_response_instance.to_dict()
# create an instance of ListInstancesResponse from a dict
list_instances_response_from_dict = ListInstancesResponse.from_dict(list_instances_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


