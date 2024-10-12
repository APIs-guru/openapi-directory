# ServiceConnectionPolicy

The ServiceConnectionPolicy resource. Next id: 12

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when the ServiceConnectionMap was created. | [optional] [readonly] 
**description** | **str** | A description of this resource. | [optional] 
**etag** | **str** | Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**infrastructure** | **str** | Output only. The type of underlying resources used to create the connection. | [optional] [readonly] 
**labels** | **Dict[str, str]** | User-defined labels. | [optional] 
**name** | **str** | Immutable. The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names | [optional] 
**network** | **str** | The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}. | [optional] 
**psc_config** | [**PscConfig**](PscConfig.md) |  | [optional] 
**psc_connections** | [**List[PscConnection]**](PscConnection.md) | Output only. [Output only] Information about each Private Service Connect connection. | [optional] [readonly] 
**service_class** | **str** | The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass. It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx. | [optional] 
**update_time** | **str** | Output only. Time when the ServiceConnectionMap was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_connection_policy import ServiceConnectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceConnectionPolicy from a JSON string
service_connection_policy_instance = ServiceConnectionPolicy.from_json(json)
# print the JSON string representation of the object
print(ServiceConnectionPolicy.to_json())

# convert the object into a dict
service_connection_policy_dict = service_connection_policy_instance.to_dict()
# create an instance of ServiceConnectionPolicy from a dict
service_connection_policy_from_dict = ServiceConnectionPolicy.from_dict(service_connection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


