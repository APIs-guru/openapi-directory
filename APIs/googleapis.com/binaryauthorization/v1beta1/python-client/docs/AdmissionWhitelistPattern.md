# AdmissionWhitelistPattern

An admission allowlist pattern exempts images from checks by admission rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name_pattern** | **str** | An image name pattern to allowlist, in the form &#x60;registry/path/to/image&#x60;. This supports a trailing &#x60;*&#x60; as a wildcard, but this is allowed only in text after the &#x60;registry/&#x60; part. &#x60;*&#x60; wildcard does not match &#x60;/&#x60;, i.e., &#x60;gcr.io/nginx*&#x60; matches &#x60;gcr.io/nginx@latest&#x60;, but it does not match &#x60;gcr.io/nginx/image&#x60;. This also supports a trailing &#x60;**&#x60; wildcard which matches subdirectories, i.e., &#x60;gcr.io/nginx**&#x60; matches &#x60;gcr.io/nginx/image&#x60;. | [optional] 

## Example

```python
from openapi_client.models.admission_whitelist_pattern import AdmissionWhitelistPattern

# TODO update the JSON string below
json = "{}"
# create an instance of AdmissionWhitelistPattern from a JSON string
admission_whitelist_pattern_instance = AdmissionWhitelistPattern.from_json(json)
# print the JSON string representation of the object
print(AdmissionWhitelistPattern.to_json())

# convert the object into a dict
admission_whitelist_pattern_dict = admission_whitelist_pattern_instance.to_dict()
# create an instance of AdmissionWhitelistPattern from a dict
admission_whitelist_pattern_from_dict = AdmissionWhitelistPattern.from_dict(admission_whitelist_pattern_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


