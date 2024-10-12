# GoogleCloudApigeeV1GraphQLOperation

Represents the pairing of GraphQL operation types and the GraphQL operation name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** | GraphQL operation name. The name and operation type will be used to apply quotas. If no name is specified, the quota will be applied to all GraphQL operations irrespective of their operation names in the payload. | [optional] 
**operation_types** | **List[str]** | Required. GraphQL operation types. Valid values include &#x60;query&#x60; or &#x60;mutation&#x60;. **Note**: Apigee does not currently support &#x60;subscription&#x60; types. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_graph_ql_operation import GoogleCloudApigeeV1GraphQLOperation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1GraphQLOperation from a JSON string
google_cloud_apigee_v1_graph_ql_operation_instance = GoogleCloudApigeeV1GraphQLOperation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1GraphQLOperation.to_json())

# convert the object into a dict
google_cloud_apigee_v1_graph_ql_operation_dict = google_cloud_apigee_v1_graph_ql_operation_instance.to_dict()
# create an instance of GoogleCloudApigeeV1GraphQLOperation from a dict
google_cloud_apigee_v1_graph_ql_operation_from_dict = GoogleCloudApigeeV1GraphQLOperation.from_dict(google_cloud_apigee_v1_graph_ql_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


