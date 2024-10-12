# LibreOfficeConvertRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** |  | [optional] 
**inline_pdf** | **bool** |  | [optional] 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.libre_office_convert_request import LibreOfficeConvertRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LibreOfficeConvertRequest from a JSON string
libre_office_convert_request_instance = LibreOfficeConvertRequest.from_json(json)
# print the JSON string representation of the object
print(LibreOfficeConvertRequest.to_json())

# convert the object into a dict
libre_office_convert_request_dict = libre_office_convert_request_instance.to_dict()
# create an instance of LibreOfficeConvertRequest from a dict
libre_office_convert_request_from_dict = LibreOfficeConvertRequest.from_dict(libre_office_convert_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


