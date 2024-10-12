# ViberOneOf3AllOfFile

An object containing details of the file to be sent. Note: allowed file types are `.doc,` `.docx`, `.rtf`, `.dot`, `.dotx`, `.odt`, `.odf`, `.fodt`, `.txt`, `.info`, `.pdf`, `.xps`, `.pdax`, `.eps`, `.xls`, `.xlsx`, `.ods`, `.fods`, `.csv`, `.xlsm`, `.xltx`. Maximum file size is 200MB

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name and extension of the file. | [optional] 
**url** | **str** | The URL for the file attachment *or* the path for the location of the file attachement. If &#x60;name&#x60; is included, can just be the path. If  &#x60;name&#x60; is not included, must include the filename and extension. | [optional] 

## Example

```python
from openapi_client.models.viber_one_of3_all_of_file import ViberOneOf3AllOfFile

# TODO update the JSON string below
json = "{}"
# create an instance of ViberOneOf3AllOfFile from a JSON string
viber_one_of3_all_of_file_instance = ViberOneOf3AllOfFile.from_json(json)
# print the JSON string representation of the object
print(ViberOneOf3AllOfFile.to_json())

# convert the object into a dict
viber_one_of3_all_of_file_dict = viber_one_of3_all_of_file_instance.to_dict()
# create an instance of ViberOneOf3AllOfFile from a dict
viber_one_of3_all_of_file_from_dict = ViberOneOf3AllOfFile.from_dict(viber_one_of3_all_of_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


