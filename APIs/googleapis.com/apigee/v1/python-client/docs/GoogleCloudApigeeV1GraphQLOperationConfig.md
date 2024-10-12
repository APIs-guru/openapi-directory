# GoogleCloudApigeeV1GraphQLOperationConfig

Binds the resources in a proxy or remote service with the GraphQL operation and its associated quota enforcement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_source** | **str** | Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated. | [optional] 
**attributes** | [**List[GoogleCloudApigeeV1Attribute]**](GoogleCloudApigeeV1Attribute.md) | Custom attributes associated with the operation. | [optional] 
**operations** | [**List[GoogleCloudApigeeV1GraphQLOperation]**](GoogleCloudApigeeV1GraphQLOperation.md) | Required. List of GraphQL name/operation type pairs for the proxy or remote service to which quota will be applied. If only operation types are specified, the quota will be applied to all GraphQL requests irrespective of the GraphQL name. **Note**: Currently, you can specify only a single GraphQLOperation. Specifying more than one will cause the operation to fail. | [optional] 
**quota** | [**GoogleCloudApigeeV1Quota**](GoogleCloudApigeeV1Quota.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_graph_ql_operation_config import GoogleCloudApigeeV1GraphQLOperationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1GraphQLOperationConfig from a JSON string
google_cloud_apigee_v1_graph_ql_operation_config_instance = GoogleCloudApigeeV1GraphQLOperationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1GraphQLOperationConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_graph_ql_operation_config_dict = google_cloud_apigee_v1_graph_ql_operation_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1GraphQLOperationConfig from a dict
google_cloud_apigee_v1_graph_ql_operation_config_from_dict = GoogleCloudApigeeV1GraphQLOperationConfig.from_dict(google_cloud_apigee_v1_graph_ql_operation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


