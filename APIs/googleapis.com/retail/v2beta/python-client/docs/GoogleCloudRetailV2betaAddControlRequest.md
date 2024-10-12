# GoogleCloudRetailV2betaAddControlRequest

Request for AddControl method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_id** | **str** | Required. The id of the control to apply. Assumed to be in the same catalog as the serving config - if id is not found a NOT_FOUND error is returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_add_control_request import GoogleCloudRetailV2betaAddControlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaAddControlRequest from a JSON string
google_cloud_retail_v2beta_add_control_request_instance = GoogleCloudRetailV2betaAddControlRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaAddControlRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_add_control_request_dict = google_cloud_retail_v2beta_add_control_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaAddControlRequest from a dict
google_cloud_retail_v2beta_add_control_request_from_dict = GoogleCloudRetailV2betaAddControlRequest.from_dict(google_cloud_retail_v2beta_add_control_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


