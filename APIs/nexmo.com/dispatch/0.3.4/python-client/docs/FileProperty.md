# FileProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | Additional text to accompany the image. Supported by WhatsApp and MMS. | [optional] 
**url** | **str** | The URL of the file attachment. &#x60;messenger&#x60; supports a wide range of attachments including .zip, .csv and .pdf. &#x60;whatsapp&#x60; supports .pdf, .doc(x), .ppt(x) and .xls(x). | [optional] 

## Example

```python
from openapi_client.models.file_property import FileProperty

# TODO update the JSON string below
json = "{}"
# create an instance of FileProperty from a JSON string
file_property_instance = FileProperty.from_json(json)
# print the JSON string representation of the object
print(FileProperty.to_json())

# convert the object into a dict
file_property_dict = file_property_instance.to_dict()
# create an instance of FileProperty from a dict
file_property_from_dict = FileProperty.from_dict(file_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


