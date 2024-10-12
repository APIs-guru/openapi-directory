# Version

A Version resource is a specific set of source code and configuration files that are deployed into a service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_config** | [**ApiConfigHandler**](ApiConfigHandler.md) |  | [optional] 
**app_engine_apis** | **bool** | Allows App Engine second generation runtimes to access the legacy bundled services. | [optional] 
**automatic_scaling** | [**AutomaticScaling**](AutomaticScaling.md) |  | [optional] 
**basic_scaling** | [**BasicScaling**](BasicScaling.md) |  | [optional] 
**beta_settings** | **Dict[str, str]** | Metadata settings that are supplied to this version to enable beta runtime features. | [optional] 
**build_env_variables** | **Dict[str, str]** | Environment variables available to the build environment.Only returned in GET requests if view&#x3D;FULL is set. | [optional] 
**create_time** | **str** | Time that this version was created.@OutputOnly | [optional] 
**created_by** | **str** | Email address of the user who created this version.@OutputOnly | [optional] 
**default_expiration** | **str** | Duration that static files should be cached by web proxies and browsers. Only applicable if the corresponding StaticFilesHandler (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StaticFilesHandler) does not specify its own expiration time.Only returned in GET requests if view&#x3D;FULL is set. | [optional] 
**deployment** | [**Deployment**](Deployment.md) |  | [optional] 
**disk_usage_bytes** | **str** | Total size in bytes of all the files that are included in this version and currently hosted on the App Engine disk.@OutputOnly | [optional] 
**endpoints_api_service** | [**EndpointsApiService**](EndpointsApiService.md) |  | [optional] 
**entrypoint** | [**Entrypoint**](Entrypoint.md) |  | [optional] 
**env** | **str** | App Engine execution environment for this version.Defaults to standard. | [optional] 
**env_variables** | **Dict[str, str]** | Environment variables available to the application.Only returned in GET requests if view&#x3D;FULL is set. | [optional] 
**error_handlers** | [**List[ErrorHandler]**](ErrorHandler.md) | Custom static error pages. Limited to 10KB per page.Only returned in GET requests if view&#x3D;FULL is set. | [optional] 
**flexible_runtime_settings** | [**FlexibleRuntimeSettings**](FlexibleRuntimeSettings.md) |  | [optional] 
**generated_customer_metadata** | **Dict[str, object]** | Additional Google Generated Customer Metadata, this field won&#39;t be provided by default and can be requested by setting the IncludeExtraData field in GetVersionRequest | [optional] 
**handlers** | [**List[UrlMap]**](UrlMap.md) | An ordered list of URL-matching patterns that should be applied to incoming requests. The first matching URL handles the request and other request handlers are not attempted.Only returned in GET requests if view&#x3D;FULL is set. | [optional] 
**health_check** | [**HealthCheck**](HealthCheck.md) |  | [optional] 
**id** | **str** | Relative name of the version within the service. Example: v1. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names: \&quot;default\&quot;, \&quot;latest\&quot;, and any name with the prefix \&quot;ah-\&quot;. | [optional] 
**inbound_services** | **List[str]** | Before an application can receive email or XMPP messages, the application must be configured to enable the service. | [optional] 
**instance_class** | **str** | Instance class that is used to run this version. Valid values are: AutomaticScaling: F1, F2, F4, F4_1G ManualScaling or BasicScaling: B1, B2, B4, B8, B4_1GDefaults to F1 for AutomaticScaling and B1 for ManualScaling or BasicScaling. | [optional] 
**libraries** | [**List[Library]**](Library.md) | Configuration for third-party Python runtime libraries that are required by the application.Only returned in GET requests if view&#x3D;FULL is set. | [optional] 
**liveness_check** | [**LivenessCheck**](LivenessCheck.md) |  | [optional] 
**manual_scaling** | [**ManualScaling**](ManualScaling.md) |  | [optional] 
**name** | **str** | Full path to the Version resource in the API. Example: apps/myapp/services/default/versions/v1.@OutputOnly | [optional] 
**network** | [**Network**](Network.md) |  | [optional] 
**nobuild_files_regex** | **str** | Files that match this pattern will not be built into this version. Only applicable for Go runtimes.Only returned in GET requests if view&#x3D;FULL is set. | [optional] 
**readiness_check** | [**ReadinessCheck**](ReadinessCheck.md) |  | [optional] 
**resources** | [**Resources**](Resources.md) |  | [optional] 
**runtime** | **str** | Desired runtime. Example: python27. | [optional] 
**runtime_api_version** | **str** | The version of the API in the given runtime environment. Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard//config/appref | [optional] 
**runtime_channel** | **str** | The channel of the runtime to use. Only available for some runtimes. Defaults to the default channel. | [optional] 
**runtime_main_executable_path** | **str** | The path or name of the app&#39;s main executable. | [optional] 
**service_account** | **str** | The identity that the deployed version will run as. Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag. | [optional] 
**serving_status** | **str** | Current serving status of this version. Only the versions with a SERVING status create instances and can be billed.SERVING_STATUS_UNSPECIFIED is an invalid value. Defaults to SERVING. | [optional] 
**threadsafe** | **bool** | Whether multiple requests can be dispatched to this version at once. | [optional] 
**version_url** | **str** | Serving URL for this version. Example: \&quot;https://myversion-dot-myservice-dot-myapp.appspot.com\&quot;@OutputOnly | [optional] 
**vm** | **bool** | Whether to deploy this version in a container on a virtual machine. | [optional] 
**vpc_access_connector** | [**VpcAccessConnector**](VpcAccessConnector.md) |  | [optional] 
**zones** | **List[str]** | The Google Compute Engine zones that are supported by this version in the App Engine flexible environment. Deprecated. | [optional] 

## Example

```python
from openapi_client.models.version import Version

# TODO update the JSON string below
json = "{}"
# create an instance of Version from a JSON string
version_instance = Version.from_json(json)
# print the JSON string representation of the object
print(Version.to_json())

# convert the object into a dict
version_dict = version_instance.to_dict()
# create an instance of Version from a dict
version_from_dict = Version.from_dict(version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


