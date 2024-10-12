# TransitObjectUploadRotatingBarcodeValuesRequest

Request to upload rotating barcode values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob** | [**Media**](Media.md) |  | [optional] 
**media_request_info** | [**MediaRequestInfo**](MediaRequestInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.transit_object_upload_rotating_barcode_values_request import TransitObjectUploadRotatingBarcodeValuesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TransitObjectUploadRotatingBarcodeValuesRequest from a JSON string
transit_object_upload_rotating_barcode_values_request_instance = TransitObjectUploadRotatingBarcodeValuesRequest.from_json(json)
# print the JSON string representation of the object
print(TransitObjectUploadRotatingBarcodeValuesRequest.to_json())

# convert the object into a dict
transit_object_upload_rotating_barcode_values_request_dict = transit_object_upload_rotating_barcode_values_request_instance.to_dict()
# create an instance of TransitObjectUploadRotatingBarcodeValuesRequest from a dict
transit_object_upload_rotating_barcode_values_request_from_dict = TransitObjectUploadRotatingBarcodeValuesRequest.from_dict(transit_object_upload_rotating_barcode_values_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


