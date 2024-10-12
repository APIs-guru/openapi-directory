# GoogleCloudRetailV2alphaImportProductsResponse

Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_samples** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | A sample of errors encountered while processing the request. | [optional] 
**errors_config** | [**GoogleCloudRetailV2alphaImportErrorsConfig**](GoogleCloudRetailV2alphaImportErrorsConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_import_products_response import GoogleCloudRetailV2alphaImportProductsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaImportProductsResponse from a JSON string
google_cloud_retail_v2alpha_import_products_response_instance = GoogleCloudRetailV2alphaImportProductsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaImportProductsResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_import_products_response_dict = google_cloud_retail_v2alpha_import_products_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaImportProductsResponse from a dict
google_cloud_retail_v2alpha_import_products_response_from_dict = GoogleCloudRetailV2alphaImportProductsResponse.from_dict(google_cloud_retail_v2alpha_import_products_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


