# NextHopResult

The information about next hop from the specified VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_hop_ip_address** | **str** | Next hop IP Address | [optional] 
**next_hop_type** | **str** | Next hop type. | [optional] 
**route_table_id** | **str** | The resource identifier for the route table associated with the route being returned. If the route being returned does not correspond to any user created routes then this field will be the string &#39;System Route&#39;. | [optional] 

## Example

```python
from openapi_client.models.next_hop_result import NextHopResult

# TODO update the JSON string below
json = "{}"
# create an instance of NextHopResult from a JSON string
next_hop_result_instance = NextHopResult.from_json(json)
# print the JSON string representation of the object
print(NextHopResult.to_json())

# convert the object into a dict
next_hop_result_dict = next_hop_result_instance.to_dict()
# create an instance of NextHopResult from a dict
next_hop_result_from_dict = NextHopResult.from_dict(next_hop_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


