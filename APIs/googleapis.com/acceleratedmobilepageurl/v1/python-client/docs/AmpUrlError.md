# AmpUrlError

AMP URL Error resource for a requested URL that couldn't be found.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | The error code of an API call. | [optional] 
**error_message** | **str** | An optional descriptive error message. | [optional] 
**original_url** | **str** | The original non-AMP URL. | [optional] 

## Example

```python
from openapi_client.models.amp_url_error import AmpUrlError

# TODO update the JSON string below
json = "{}"
# create an instance of AmpUrlError from a JSON string
amp_url_error_instance = AmpUrlError.from_json(json)
# print the JSON string representation of the object
print(AmpUrlError.to_json())

# convert the object into a dict
amp_url_error_dict = amp_url_error_instance.to_dict()
# create an instance of AmpUrlError from a dict
amp_url_error_from_dict = AmpUrlError.from_dict(amp_url_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


