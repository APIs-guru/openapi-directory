# GoogleCloudVisionV1p3beta1ImportProductSetsResponse

Response message for the `ImportProductSets` method. This message is returned by the google.longrunning.Operations.GetOperation method in the returned google.longrunning.Operation.response field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference_images** | [**List[GoogleCloudVisionV1p3beta1ReferenceImage]**](GoogleCloudVisionV1p3beta1ReferenceImage.md) | The list of reference_images that are imported successfully. | [optional] 
**statuses** | [**List[Status]**](Status.md) | The rpc status for each ImportProductSet request, including both successes and errors. The number of statuses here matches the number of lines in the csv file, and statuses[i] stores the success or failure status of processing the i-th line of the csv, starting from line 0. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p3beta1_import_product_sets_response import GoogleCloudVisionV1p3beta1ImportProductSetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p3beta1ImportProductSetsResponse from a JSON string
google_cloud_vision_v1p3beta1_import_product_sets_response_instance = GoogleCloudVisionV1p3beta1ImportProductSetsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p3beta1ImportProductSetsResponse.to_json())

# convert the object into a dict
google_cloud_vision_v1p3beta1_import_product_sets_response_dict = google_cloud_vision_v1p3beta1_import_product_sets_response_instance.to_dict()
# create an instance of GoogleCloudVisionV1p3beta1ImportProductSetsResponse from a dict
google_cloud_vision_v1p3beta1_import_product_sets_response_from_dict = GoogleCloudVisionV1p3beta1ImportProductSetsResponse.from_dict(google_cloud_vision_v1p3beta1_import_product_sets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


