# Options

Specifies additional options to apply to the base profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clean_descriptors** | **object** | This option is based on the DICOM Standard&#39;s [Clean Descriptors Option](http://dicom.nema.org/medical/dicom/2018e/output/chtml/part15/sect_E.3.5.html), and the &#x60;CleanText&#x60; &#x60;Action&#x60; is applied to all the specified fields. When cleaning text, the process attempts to transform phrases matching any of the tags marked for removal (action codes D, Z, X, and U) in the [Basic Profile](http://dicom.nema.org/medical/dicom/2018e/output/chtml/part15/chapter_E.html). These contextual phrases are replaced with the token \&quot;[CTX]\&quot;. This option uses an additional infoType during inspection. | [optional] 
**clean_image** | [**ImageConfig**](ImageConfig.md) |  | [optional] 
**primary_ids** | **str** | Set &#x60;Action&#x60; for [&#x60;StudyInstanceUID&#x60;, &#x60;SeriesInstanceUID&#x60;, &#x60;SOPInstanceUID&#x60;, and &#x60;MediaStorageSOPInstanceUID&#x60;](http://dicom.nema.org/medical/dicom/2018e/output/chtml/part06/chapter_6.html). | [optional] 

## Example

```python
from openapi_client.models.options import Options

# TODO update the JSON string below
json = "{}"
# create an instance of Options from a JSON string
options_instance = Options.from_json(json)
# print the JSON string representation of the object
print(Options.to_json())

# convert the object into a dict
options_dict = options_instance.to_dict()
# create an instance of Options from a dict
options_from_dict = Options.from_dict(options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


