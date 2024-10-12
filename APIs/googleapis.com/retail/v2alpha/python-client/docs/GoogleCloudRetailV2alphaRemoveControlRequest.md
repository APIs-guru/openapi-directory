# GoogleCloudRetailV2alphaRemoveControlRequest

Request for RemoveControl method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_id** | **str** | Required. The id of the control to apply. Assumed to be in the same catalog as the serving config. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_remove_control_request import GoogleCloudRetailV2alphaRemoveControlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaRemoveControlRequest from a JSON string
google_cloud_retail_v2alpha_remove_control_request_instance = GoogleCloudRetailV2alphaRemoveControlRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaRemoveControlRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_remove_control_request_dict = google_cloud_retail_v2alpha_remove_control_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaRemoveControlRequest from a dict
google_cloud_retail_v2alpha_remove_control_request_from_dict = GoogleCloudRetailV2alphaRemoveControlRequest.from_dict(google_cloud_retail_v2alpha_remove_control_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


