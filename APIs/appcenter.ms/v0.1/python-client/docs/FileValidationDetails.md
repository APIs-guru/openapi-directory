# FileValidationDetails

Additional details required for file validation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_upload_id** | **str** |  | [optional] 
**p12password** | **str** |  | 

## Example

```python
from openapi_client.models.file_validation_details import FileValidationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FileValidationDetails from a JSON string
file_validation_details_instance = FileValidationDetails.from_json(json)
# print the JSON string representation of the object
print(FileValidationDetails.to_json())

# convert the object into a dict
file_validation_details_dict = file_validation_details_instance.to_dict()
# create an instance of FileValidationDetails from a dict
file_validation_details_from_dict = FileValidationDetails.from_dict(file_validation_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


