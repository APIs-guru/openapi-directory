# GoogleCloudSecuritycenterV2Node

Kubernetes nodes associated with the finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | [Full resource name](https://google.aip.dev/122#full-resource-names) of the Compute Engine VM running the cluster node. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_node import GoogleCloudSecuritycenterV2Node

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Node from a JSON string
google_cloud_securitycenter_v2_node_instance = GoogleCloudSecuritycenterV2Node.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Node.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_node_dict = google_cloud_securitycenter_v2_node_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Node from a dict
google_cloud_securitycenter_v2_node_from_dict = GoogleCloudSecuritycenterV2Node.from_dict(google_cloud_securitycenter_v2_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


