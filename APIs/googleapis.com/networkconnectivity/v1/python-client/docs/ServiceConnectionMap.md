# ServiceConnectionMap

The ServiceConnectionMap resource. Next id: 15

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_psc_configs** | [**List[ConsumerPscConfig]**](ConsumerPscConfig.md) | The PSC configurations on consumer side. | [optional] 
**consumer_psc_connections** | [**List[ConsumerPscConnection]**](ConsumerPscConnection.md) | Output only. PSC connection details on consumer side. | [optional] [readonly] 
**create_time** | **str** | Output only. Time when the ServiceConnectionMap was created. | [optional] [readonly] 
**description** | **str** | A description of this resource. | [optional] 
**etag** | **str** | Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**infrastructure** | **str** | Output only. The infrastructure used for connections between consumers/producers. | [optional] [readonly] 
**labels** | **Dict[str, str]** | User-defined labels. | [optional] 
**name** | **str** | Immutable. The name of a ServiceConnectionMap. Format: projects/{project}/locations/{location}/serviceConnectionMaps/{service_connection_map} See: https://google.aip.dev/122#fields-representing-resource-names | [optional] 
**producer_psc_configs** | [**List[ProducerPscConfig]**](ProducerPscConfig.md) | The PSC configurations on producer side. | [optional] 
**service_class** | **str** | The service class identifier this ServiceConnectionMap is for. The user of ServiceConnectionMap create API needs to have networkconnecitivty.serviceclasses.use iam permission for the service class. | [optional] 
**service_class_uri** | **str** | Output only. The service class uri this ServiceConnectionMap is for. | [optional] [readonly] 
**token** | **str** | The token provided by the consumer. This token authenticates that the consumer can create a connecton within the specified project and network. | [optional] 
**update_time** | **str** | Output only. Time when the ServiceConnectionMap was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_connection_map import ServiceConnectionMap

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceConnectionMap from a JSON string
service_connection_map_instance = ServiceConnectionMap.from_json(json)
# print the JSON string representation of the object
print(ServiceConnectionMap.to_json())

# convert the object into a dict
service_connection_map_dict = service_connection_map_instance.to_dict()
# create an instance of ServiceConnectionMap from a dict
service_connection_map_from_dict = ServiceConnectionMap.from_dict(service_connection_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


