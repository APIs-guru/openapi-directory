# GoogleCloudApigeeV1OperationGroup

List of operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_config_type** | **str** | Flag that specifes whether the configuration is for Apigee API proxy or a remote service. Valid values include &#x60;proxy&#x60; or &#x60;remoteservice&#x60;. Defaults to &#x60;proxy&#x60;. Set to &#x60;proxy&#x60; when Apigee API proxies are associated with the API product. Set to &#x60;remoteservice&#x60; when non-Apigee proxies like Istio-Envoy are associated with the API product. | [optional] 
**operation_configs** | [**List[GoogleCloudApigeeV1OperationConfig]**](GoogleCloudApigeeV1OperationConfig.md) | Required. List of operation configurations for either Apigee API proxies or other remote services that are associated with this API product. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_operation_group import GoogleCloudApigeeV1OperationGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1OperationGroup from a JSON string
google_cloud_apigee_v1_operation_group_instance = GoogleCloudApigeeV1OperationGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1OperationGroup.to_json())

# convert the object into a dict
google_cloud_apigee_v1_operation_group_dict = google_cloud_apigee_v1_operation_group_instance.to_dict()
# create an instance of GoogleCloudApigeeV1OperationGroup from a dict
google_cloud_apigee_v1_operation_group_from_dict = GoogleCloudApigeeV1OperationGroup.from_dict(google_cloud_apigee_v1_operation_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


