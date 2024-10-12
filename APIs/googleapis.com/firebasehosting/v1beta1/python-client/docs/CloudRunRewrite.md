# CloudRunRewrite

A configured rewrite that directs requests to a Cloud Run service. If the Cloud Run service does not exist when setting or updating your Firebase Hosting configuration, then the request fails. Any errors from the Cloud Run service are passed to the end user (for example, if you delete a service, any requests directed to that service receive a `404` error).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **str** | Optional. User-provided region where the Cloud Run service is hosted. Defaults to &#x60;us-central1&#x60; if not supplied. | [optional] 
**service_id** | **str** | Required. User-defined ID of the Cloud Run service. | [optional] 
**tag** | **str** | Optional. User-provided TrafficConfig tag to send traffic to. When omitted, traffic is sent to the service-wide URI | [optional] 

## Example

```python
from openapi_client.models.cloud_run_rewrite import CloudRunRewrite

# TODO update the JSON string below
json = "{}"
# create an instance of CloudRunRewrite from a JSON string
cloud_run_rewrite_instance = CloudRunRewrite.from_json(json)
# print the JSON string representation of the object
print(CloudRunRewrite.to_json())

# convert the object into a dict
cloud_run_rewrite_dict = cloud_run_rewrite_instance.to_dict()
# create an instance of CloudRunRewrite from a dict
cloud_run_rewrite_from_dict = CloudRunRewrite.from_dict(cloud_run_rewrite_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


