# EndpointsApiService

Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration. The Endpoints API Service provides tooling for serving Open API and gRPC endpoints via an NGINX proxy. Only valid for App Engine Flexible environment deployments.The fields here refer to the name and configuration ID of a \"service\" resource in the Service Management API (https://cloud.google.com/service-management/overview).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_id** | **str** | Endpoints service configuration ID as specified by the Service Management API. For example \&quot;2016-09-19r1\&quot;.By default, the rollout strategy for Endpoints is RolloutStrategy.FIXED. This means that Endpoints starts up with a particular configuration ID. When a new configuration is rolled out, Endpoints must be given the new configuration ID. The config_id field is used to give the configuration ID and is required in this case.Endpoints also has a rollout strategy called RolloutStrategy.MANAGED. When using this, Endpoints fetches the latest configuration and does not need the configuration ID. In this case, config_id must be omitted. | [optional] 
**disable_trace_sampling** | **bool** | Enable or disable trace sampling. By default, this is set to false for enabled. | [optional] 
**name** | **str** | Endpoints service name which is the name of the \&quot;service\&quot; resource in the Service Management API. For example \&quot;myapi.endpoints.myproject.cloud.goog\&quot; | [optional] 
**rollout_strategy** | **str** | Endpoints rollout strategy. If FIXED, config_id must be specified. If MANAGED, config_id must be omitted. | [optional] 

## Example

```python
from openapi_client.models.endpoints_api_service import EndpointsApiService

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointsApiService from a JSON string
endpoints_api_service_instance = EndpointsApiService.from_json(json)
# print the JSON string representation of the object
print(EndpointsApiService.to_json())

# convert the object into a dict
endpoints_api_service_dict = endpoints_api_service_instance.to_dict()
# create an instance of EndpointsApiService from a dict
endpoints_api_service_from_dict = EndpointsApiService.from_dict(endpoints_api_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


