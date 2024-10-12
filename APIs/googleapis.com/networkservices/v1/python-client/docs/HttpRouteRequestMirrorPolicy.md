# HttpRouteRequestMirrorPolicy

Specifies the policy on how requests are shadowed to a separate mirrored destination service. The proxy does not wait for responses from the shadow service. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**HttpRouteDestination**](HttpRouteDestination.md) |  | [optional] 
**mirror_percent** | **float** | Optional. The percentage of requests to get mirrored to the desired destination. | [optional] 

## Example

```python
from openapi_client.models.http_route_request_mirror_policy import HttpRouteRequestMirrorPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteRequestMirrorPolicy from a JSON string
http_route_request_mirror_policy_instance = HttpRouteRequestMirrorPolicy.from_json(json)
# print the JSON string representation of the object
print(HttpRouteRequestMirrorPolicy.to_json())

# convert the object into a dict
http_route_request_mirror_policy_dict = http_route_request_mirror_policy_instance.to_dict()
# create an instance of HttpRouteRequestMirrorPolicy from a dict
http_route_request_mirror_policy_from_dict = HttpRouteRequestMirrorPolicy.from_dict(http_route_request_mirror_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


