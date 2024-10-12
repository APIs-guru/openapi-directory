# ProcessingOptions

Input only. Options for job processing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_street_address_resolution** | **bool** | Optional. If set to &#x60;true&#x60;, the service does not attempt to resolve a more precise address for the job. | [optional] 
**html_sanitization** | **str** | Optional. Option for job HTML content sanitization. Applied fields are: * description * applicationInfo.instruction * incentives * qualifications * responsibilities HTML tags in these fields may be stripped if sanitiazation is not disabled. Defaults to HtmlSanitization.SIMPLE_FORMATTING_ONLY. | [optional] 

## Example

```python
from openapi_client.models.processing_options import ProcessingOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessingOptions from a JSON string
processing_options_instance = ProcessingOptions.from_json(json)
# print the JSON string representation of the object
print(ProcessingOptions.to_json())

# convert the object into a dict
processing_options_dict = processing_options_instance.to_dict()
# create an instance of ProcessingOptions from a dict
processing_options_from_dict = ProcessingOptions.from_dict(processing_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


