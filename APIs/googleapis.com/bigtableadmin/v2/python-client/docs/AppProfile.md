# AppProfile

A configuration object describing how Cloud Bigtable should treat traffic from a particular end user application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Long form description of the use case for this AppProfile. | [optional] 
**etag** | **str** | Strongly validated etag for optimistic concurrency control. Preserve the value returned from &#x60;GetAppProfile&#x60; when calling &#x60;UpdateAppProfile&#x60; to fail the request if there has been a modification in the mean time. The &#x60;update_mask&#x60; of the request need not include &#x60;etag&#x60; for this protection to apply. See [Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag) and [RFC 7232](https://tools.ietf.org/html/rfc7232#section-2.3) for more details. | [optional] 
**multi_cluster_routing_use_any** | [**MultiClusterRoutingUseAny**](MultiClusterRoutingUseAny.md) |  | [optional] 
**name** | **str** | The unique name of the app profile. Values are of the form &#x60;projects/{project}/instances/{instance}/appProfiles/_a-zA-Z0-9*&#x60;. | [optional] 
**priority** | **str** | This field has been deprecated in favor of &#x60;standard_isolation.priority&#x60;. If you set this field, &#x60;standard_isolation.priority&#x60; will be set instead. The priority of requests sent using this app profile. | [optional] 
**single_cluster_routing** | [**SingleClusterRouting**](SingleClusterRouting.md) |  | [optional] 
**standard_isolation** | [**StandardIsolation**](StandardIsolation.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_profile import AppProfile

# TODO update the JSON string below
json = "{}"
# create an instance of AppProfile from a JSON string
app_profile_instance = AppProfile.from_json(json)
# print the JSON string representation of the object
print(AppProfile.to_json())

# convert the object into a dict
app_profile_dict = app_profile_instance.to_dict()
# create an instance of AppProfile from a dict
app_profile_from_dict = AppProfile.from_dict(app_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


