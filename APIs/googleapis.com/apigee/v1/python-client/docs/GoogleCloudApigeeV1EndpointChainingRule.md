# GoogleCloudApigeeV1EndpointChainingRule

EndpointChainingRule specifies the proxies contained in a particular deployment group, so that other deployment groups can find them in chaining calls.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_group** | **str** | The deployment group to target for cross-shard chaining calls to these proxies. | [optional] 
**proxy_ids** | **List[str]** | List of proxy ids which may be found in the given deployment group. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_endpoint_chaining_rule import GoogleCloudApigeeV1EndpointChainingRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1EndpointChainingRule from a JSON string
google_cloud_apigee_v1_endpoint_chaining_rule_instance = GoogleCloudApigeeV1EndpointChainingRule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1EndpointChainingRule.to_json())

# convert the object into a dict
google_cloud_apigee_v1_endpoint_chaining_rule_dict = google_cloud_apigee_v1_endpoint_chaining_rule_instance.to_dict()
# create an instance of GoogleCloudApigeeV1EndpointChainingRule from a dict
google_cloud_apigee_v1_endpoint_chaining_rule_from_dict = GoogleCloudApigeeV1EndpointChainingRule.from_dict(google_cloud_apigee_v1_endpoint_chaining_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


