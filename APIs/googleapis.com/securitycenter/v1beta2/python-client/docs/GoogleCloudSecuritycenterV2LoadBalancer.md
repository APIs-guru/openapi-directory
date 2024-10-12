# GoogleCloudSecuritycenterV2LoadBalancer

Contains information related to the load balancer associated with the finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the load balancer associated with the finding. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_load_balancer import GoogleCloudSecuritycenterV2LoadBalancer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2LoadBalancer from a JSON string
google_cloud_securitycenter_v2_load_balancer_instance = GoogleCloudSecuritycenterV2LoadBalancer.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2LoadBalancer.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_load_balancer_dict = google_cloud_securitycenter_v2_load_balancer_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2LoadBalancer from a dict
google_cloud_securitycenter_v2_load_balancer_from_dict = GoogleCloudSecuritycenterV2LoadBalancer.from_dict(google_cloud_securitycenter_v2_load_balancer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


