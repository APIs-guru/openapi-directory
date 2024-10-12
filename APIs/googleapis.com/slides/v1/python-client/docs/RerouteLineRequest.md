# RerouteLineRequest

Reroutes a line such that it's connected at the two closest connection sites on the connected page elements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The object ID of the line to reroute. Only a line with a category indicating it is a \&quot;connector\&quot; can be rerouted. The start and end connections of the line must be on different page elements. | [optional] 

## Example

```python
from openapi_client.models.reroute_line_request import RerouteLineRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RerouteLineRequest from a JSON string
reroute_line_request_instance = RerouteLineRequest.from_json(json)
# print the JSON string representation of the object
print(RerouteLineRequest.to_json())

# convert the object into a dict
reroute_line_request_dict = reroute_line_request_instance.to_dict()
# create an instance of RerouteLineRequest from a dict
reroute_line_request_from_dict = RerouteLineRequest.from_dict(reroute_line_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


