# Service

An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canary** | [**Canary**](Canary.md) |  | [optional] 
**additional_headers** | **Dict[str, str]** | Specify headers that will be added to each client request. Useful to add authentication | [optional] 
**api** | [**ExposedApi**](ExposedApi.md) |  | [optional] 
**auth_config_ref** | **str** | A reference to a global auth module config | [optional] 
**build_mode** | **bool** | Display a construction page when a user try to use the service | 
**chaos_config** | [**ChaosConfig**](ChaosConfig.md) |  | [optional] 
**client_config** | [**ClientConfig**](ClientConfig.md) |  | [optional] 
**client_validator_ref** | **str** | A reference to validation authority | [optional] 
**cors** | [**CorsSettings**](CorsSettings.md) |  | [optional] 
**domain** | **str** | The domain on which the service is available. | 
**enabled** | **bool** | Activate or deactivate your service. Once disabled, users will get an error page saying the service does not exist | 
**enforce_secure_communication** | **bool** | When enabled, Otoroshi will try to exchange headers with downstream service to ensure no one else can use the service from outside | 
**env** | **str** | The line on which the service is available. Based on that value, the name of the line will be appended to the subdomain. For line prod, nothing will be appended. For example, if the subdomain is &#39;foo&#39; and line is &#39;preprod&#39;, then the exposed service will be available at &#39;foo.preprod.mydomain&#39; | 
**force_https** | **bool** | Will force redirection to https:// if not present | 
**groups** | **List[str]** | Each service descriptor is attached to groups. A group can have one or more services. Each API key is linked to a group and allow access to every service in the group | 
**gzip** | [**Gzip**](Gzip.md) |  | [optional] 
**headers_verification** | **Dict[str, str]** | Specify headers that will be verified after routing. | [optional] 
**health_check** | [**HealthCheck**](HealthCheck.md) |  | [optional] 
**id** | **str** | A unique random string to identify your service | 
**ip_filtering** | [**IpFiltering**](IpFiltering.md) |  | [optional] 
**jwt_verifier** | [**ImportExportServiceDescriptorsInnerJwtVerifier**](ImportExportServiceDescriptorsInnerJwtVerifier.md) |  | [optional] 
**local_host** | **str** | The host used localy, mainly localhost:xxxx | [optional] 
**local_scheme** | **str** | The scheme used localy, mainly http | [optional] 
**maintenance_mode** | **bool** | Display a maintainance page when a user try to use the service | 
**matching_headers** | **Dict[str, str]** | Specify headers that MUST be present on client request to route it. Useful to implement versioning | [optional] 
**matching_root** | **str** | The root path on which the service is available | [optional] 
**metadata** | **Dict[str, str]** | Just a bunch of random properties | [optional] 
**name** | **str** | The name of your service. Only for debug and human readability purposes | 
**override_host** | **bool** | Host header will be overriden with Host of the target | [optional] 
**private_app** | **bool** | When enabled, user will be allowed to use the service (UI) only if they are registered users of the private apps domain | 
**private_patterns** | **List[str]** | If you define a public pattern that is a little bit too much, you can make some of public URL private again | [optional] 
**public_patterns** | **List[str]** | By default, every services are private only and you&#39;ll need an API key to access it. However, if you want to expose a public UI, you can define one or more public patterns (regex) to allow access to anybody. For example if you want to allow anybody on any URL, just use &#39;/.*&#39; | [optional] 
**redirect_to_local** | **bool** | If you work locally with Otoroshi, you may want to use that feature to redirect one particuliar service to a local host. For example, you can relocate https://foo.preprod.bar.com to http://localhost:8080 to make some tests | [optional] 
**redirection** | [**RedirectionSettings**](RedirectionSettings.md) |  | [optional] 
**root** | **str** | Otoroshi will append this root to any target choosen. If the specified root is &#39;/api/foo&#39;, then a request to https://yyyyyyy/bar will actually hit https://xxxxxxxxx/api/foo/bar | 
**sec_com_excluded_patterns** | **List[str]** | URI patterns excluded from secured communications | [optional] 
**sec_com_settings** | [**GlobalJwtVerifierAlgoSettings**](GlobalJwtVerifierAlgoSettings.md) |  | [optional] 
**send_otoroshi_headers_back** | **bool** | When enabled, Otoroshi will send headers to consumer like request id, client latency, overhead, etc ... | [optional] 
**statsd_config** | [**StatsdConfig**](StatsdConfig.md) |  | [optional] 
**subdomain** | **str** | The subdomain on which the service is available | 
**targets** | [**List[Target]**](Target.md) | The list of target that Otoroshi will proxy and expose through the subdomain defined before. Otoroshi will do round-robin load balancing between all those targets with circuit breaker mecanism to avoid cascading failures | 
**transformer_ref** | **str** | A reference to a request transformer | [optional] 
**user_facing** | **bool** | The fact that this service will be seen by users and cannot be impacted by the Snow Monkey | [optional] 
**x_forwarded_headers** | **bool** | Send X-Forwarded-* headers | [optional] 

## Example

```python
from openapi_client.models.service import Service

# TODO update the JSON string below
json = "{}"
# create an instance of Service from a JSON string
service_instance = Service.from_json(json)
# print the JSON string representation of the object
print(Service.to_json())

# convert the object into a dict
service_dict = service_instance.to_dict()
# create an instance of Service from a dict
service_from_dict = Service.from_dict(service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


