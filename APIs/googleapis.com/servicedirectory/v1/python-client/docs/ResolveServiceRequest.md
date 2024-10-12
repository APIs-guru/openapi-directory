# ResolveServiceRequest

The request message for LookupService.ResolveService. Looks up a service by its name, returns the service and its endpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_filter** | **str** | Optional. The filter applied to the endpoints of the resolved service. General &#x60;filter&#x60; string syntax: &#x60; ()&#x60; * &#x60;&#x60; can be &#x60;name&#x60;, &#x60;address&#x60;, &#x60;port&#x60;, or &#x60;annotations.&#x60; for map field * &#x60;&#x60; can be &#x60;&lt;&#x60;, &#x60;&gt;&#x60;, &#x60;&lt;&#x3D;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;&#x3D;&#x60;, &#x60;:&#x60;. Of which &#x60;:&#x60; means &#x60;HAS&#x60;, and is roughly the same as &#x60;&#x3D;&#x60; * &#x60;&#x60; must be the same data type as field * &#x60;&#x60; can be &#x60;AND&#x60;, &#x60;OR&#x60;, &#x60;NOT&#x60; Examples of valid filters: * &#x60;annotations.owner&#x60; returns endpoints that have a annotation with the key &#x60;owner&#x60;, this is the same as &#x60;annotations:owner&#x60; * &#x60;annotations.protocol&#x3D;gRPC&#x60; returns endpoints that have key/value &#x60;protocol&#x3D;gRPC&#x60; * &#x60;address&#x3D;192.108.1.105&#x60; returns endpoints that have this address * &#x60;port&gt;8080&#x60; returns endpoints that have port number larger than 8080 * &#x60;name&gt;projects/my-project/locations/us-east1/namespaces/my-namespace/services/my-service/endpoints/endpoint-c&#x60; returns endpoints that have name that is alphabetically later than the string, so \&quot;endpoint-e\&quot; is returned but \&quot;endpoint-a\&quot; is not * &#x60;name&#x3D;projects/my-project/locations/us-central1/namespaces/my-namespace/services/my-service/endpoints/ep-1&#x60; returns the endpoint that has an endpoint_id equal to &#x60;ep-1&#x60; * &#x60;annotations.owner!&#x3D;sd AND annotations.foo&#x3D;bar&#x60; returns endpoints that have &#x60;owner&#x60; in annotation key but value is not &#x60;sd&#x60; AND have key/value &#x60;foo&#x3D;bar&#x60; * &#x60;doesnotexist.foo&#x3D;bar&#x60; returns an empty list. Note that endpoint doesn&#39;t have a field called \&quot;doesnotexist\&quot;. Since the filter does not match any endpoint, it returns no results For more information about filtering, see [API Filtering](https://aip.dev/160). | [optional] 
**max_endpoints** | **int** | Optional. The maximum number of endpoints to return. Defaults to 25. Maximum is 100. If a value less than one is specified, the Default is used. If a value greater than the Maximum is specified, the Maximum is used. | [optional] 

## Example

```python
from openapi_client.models.resolve_service_request import ResolveServiceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResolveServiceRequest from a JSON string
resolve_service_request_instance = ResolveServiceRequest.from_json(json)
# print the JSON string representation of the object
print(ResolveServiceRequest.to_json())

# convert the object into a dict
resolve_service_request_dict = resolve_service_request_instance.to_dict()
# create an instance of ResolveServiceRequest from a dict
resolve_service_request_from_dict = ResolveServiceRequest.from_dict(resolve_service_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


