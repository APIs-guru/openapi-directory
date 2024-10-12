# GoogleCloudDocumentaiV1beta2DocumentPageMatrix

Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cols** | **int** | Number of columns in the matrix. | [optional] 
**data** | **bytearray** | The matrix data. | [optional] 
**rows** | **int** | Number of rows in the matrix. | [optional] 
**type** | **int** | This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_document_page_matrix import GoogleCloudDocumentaiV1beta2DocumentPageMatrix

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageMatrix from a JSON string
google_cloud_documentai_v1beta2_document_page_matrix_instance = GoogleCloudDocumentaiV1beta2DocumentPageMatrix.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2DocumentPageMatrix.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_document_page_matrix_dict = google_cloud_documentai_v1beta2_document_page_matrix_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageMatrix from a dict
google_cloud_documentai_v1beta2_document_page_matrix_from_dict = GoogleCloudDocumentaiV1beta2DocumentPageMatrix.from_dict(google_cloud_documentai_v1beta2_document_page_matrix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


