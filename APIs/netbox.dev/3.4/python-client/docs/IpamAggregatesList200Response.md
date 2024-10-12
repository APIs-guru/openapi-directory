# IpamAggregatesList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[Aggregate]**](Aggregate.md) |  | 

## Example

```python
from openapi_client.models.ipam_aggregates_list200_response import IpamAggregatesList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IpamAggregatesList200Response from a JSON string
ipam_aggregates_list200_response_instance = IpamAggregatesList200Response.from_json(json)
# print the JSON string representation of the object
print(IpamAggregatesList200Response.to_json())

# convert the object into a dict
ipam_aggregates_list200_response_dict = ipam_aggregates_list200_response_instance.to_dict()
# create an instance of IpamAggregatesList200Response from a dict
ipam_aggregates_list200_response_from_dict = IpamAggregatesList200Response.from_dict(ipam_aggregates_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


