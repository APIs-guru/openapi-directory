# Bundle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sha1** | **str** | A sha1 hash of the upload payload, encoded as a hex string and matching the output of the sha1sum command. | [optional] 
**sha256** | **str** | A sha256 hash of the upload payload, encoded as a hex string and matching the output of the sha256sum command. | [optional] 
**version_code** | **int** | The version code of the Android App Bundle. As specified in the Android App Bundle&#39;s base module APK manifest file. | [optional] 

## Example

```python
from openapi_client.models.bundle import Bundle

# TODO update the JSON string below
json = "{}"
# create an instance of Bundle from a JSON string
bundle_instance = Bundle.from_json(json)
# print the JSON string representation of the object
print(Bundle.to_json())

# convert the object into a dict
bundle_dict = bundle_instance.to_dict()
# create an instance of Bundle from a dict
bundle_from_dict = Bundle.from_dict(bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


