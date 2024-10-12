# AppEngineRouting

App Engine Routing. For more information about services, versions, and instances see [An Overview of App Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine), [Microservices Architecture on Google App Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine), [App Engine Standard request routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed), and [App Engine Flex request routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | Output only. The host that the job is sent to. For more information about how App Engine requests are routed, see [here](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed). The host is constructed as: * &#x60;host &#x3D; [application_domain_name]&#x60; &#x60;| [service] + &#39;.&#39; + [application_domain_name]&#x60; &#x60;| [version] + &#39;.&#39; + [application_domain_name]&#x60; &#x60;| [version_dot_service]+ &#39;.&#39; + [application_domain_name]&#x60; &#x60;| [instance] + &#39;.&#39; + [application_domain_name]&#x60; &#x60;| [instance_dot_service] + &#39;.&#39; + [application_domain_name]&#x60; &#x60;| [instance_dot_version] + &#39;.&#39; + [application_domain_name]&#x60; &#x60;| [instance_dot_version_dot_service] + &#39;.&#39; + [application_domain_name]&#x60; * &#x60;application_domain_name&#x60; &#x3D; The domain name of the app, for example .appspot.com, which is associated with the job&#39;s project ID. * &#x60;service &#x3D;&#x60; service * &#x60;version &#x3D;&#x60; version * &#x60;version_dot_service &#x3D;&#x60; version &#x60;+ &#39;.&#39; +&#x60; service * &#x60;instance &#x3D;&#x60; instance * &#x60;instance_dot_service &#x3D;&#x60; instance &#x60;+ &#39;.&#39; +&#x60; service * &#x60;instance_dot_version &#x3D;&#x60; instance &#x60;+ &#39;.&#39; +&#x60; version * &#x60;instance_dot_version_dot_service &#x3D;&#x60; instance &#x60;+ &#39;.&#39; +&#x60; version &#x60;+ &#39;.&#39; +&#x60; service If service is empty, then the job will be sent to the service which is the default service when the job is attempted. If version is empty, then the job will be sent to the version which is the default version when the job is attempted. If instance is empty, then the job will be sent to an instance which is available when the job is attempted. If service, version, or instance is invalid, then the job will be sent to the default version of the default service when the job is attempted. | [optional] 
**instance** | **str** | App instance. By default, the job is sent to an instance which is available when the job is attempted. Requests can only be sent to a specific instance if [manual scaling is used in App Engine Standard](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine?#scaling_types_and_instance_classes). App Engine Flex does not support instances. For more information, see [App Engine Standard request routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed) and [App Engine Flex request routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed). | [optional] 
**service** | **str** | App service. By default, the job is sent to the service which is the default service when the job is attempted. | [optional] 
**version** | **str** | App version. By default, the job is sent to the version which is the default version when the job is attempted. | [optional] 

## Example

```python
from openapi_client.models.app_engine_routing import AppEngineRouting

# TODO update the JSON string below
json = "{}"
# create an instance of AppEngineRouting from a JSON string
app_engine_routing_instance = AppEngineRouting.from_json(json)
# print the JSON string representation of the object
print(AppEngineRouting.to_json())

# convert the object into a dict
app_engine_routing_dict = app_engine_routing_instance.to_dict()
# create an instance of AppEngineRouting from a dict
app_engine_routing_from_dict = AppEngineRouting.from_dict(app_engine_routing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


