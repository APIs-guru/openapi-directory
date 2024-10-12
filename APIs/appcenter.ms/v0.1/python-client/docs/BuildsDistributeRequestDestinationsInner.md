# BuildsDistributeRequestDestinationsInner

Destination details for distributing build releases

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.builds_distribute_request_destinations_inner import BuildsDistributeRequestDestinationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsDistributeRequestDestinationsInner from a JSON string
builds_distribute_request_destinations_inner_instance = BuildsDistributeRequestDestinationsInner.from_json(json)
# print the JSON string representation of the object
print(BuildsDistributeRequestDestinationsInner.to_json())

# convert the object into a dict
builds_distribute_request_destinations_inner_dict = builds_distribute_request_destinations_inner_instance.to_dict()
# create an instance of BuildsDistributeRequestDestinationsInner from a dict
builds_distribute_request_destinations_inner_from_dict = BuildsDistributeRequestDestinationsInner.from_dict(builds_distribute_request_destinations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


