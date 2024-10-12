# LabelDownload

Reference to the various downloadable file formats for the generated label 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The URL of the linked resource, if any | [optional] 
**pdf** | **str** | The URL for the pdf generated label | [optional] 
**png** | **str** | The URL for the png generated label | [optional] 
**zpl** | **str** | The URL for the zpl generated label | [optional] 

## Example

```python
from openapi_client.models.label_download import LabelDownload

# TODO update the JSON string below
json = "{}"
# create an instance of LabelDownload from a JSON string
label_download_instance = LabelDownload.from_json(json)
# print the JSON string representation of the object
print(LabelDownload.to_json())

# convert the object into a dict
label_download_dict = label_download_instance.to_dict()
# create an instance of LabelDownload from a dict
label_download_from_dict = LabelDownload.from_dict(label_download_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


