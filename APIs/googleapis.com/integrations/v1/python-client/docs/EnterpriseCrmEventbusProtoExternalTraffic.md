# EnterpriseCrmEventbusProtoExternalTraffic

Represents external traffic type and id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcp_project_id** | **str** | User’s GCP project id the traffic is referring to. | [optional] 
**gcp_project_number** | **str** | User’s GCP project number the traffic is referring to. | [optional] 
**location** | **str** | Location for the user&#39;s request. | [optional] 
**source** | **str** | LINT.ThenChange(//depot/google3/enterprise/crm/eventbus/proto/product.proto:product, //depot/google3/java/com/google/enterprise/crm/integrationplatform/api/utils/ConverterUtils.java:source_to_product) | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_external_traffic import EnterpriseCrmEventbusProtoExternalTraffic

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoExternalTraffic from a JSON string
enterprise_crm_eventbus_proto_external_traffic_instance = EnterpriseCrmEventbusProtoExternalTraffic.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoExternalTraffic.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_external_traffic_dict = enterprise_crm_eventbus_proto_external_traffic_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoExternalTraffic from a dict
enterprise_crm_eventbus_proto_external_traffic_from_dict = EnterpriseCrmEventbusProtoExternalTraffic.from_dict(enterprise_crm_eventbus_proto_external_traffic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


