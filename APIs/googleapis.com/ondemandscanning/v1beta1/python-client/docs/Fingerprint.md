# Fingerprint

A set of properties that uniquely identify a given Docker image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v1_name** | **str** | Required. The layer ID of the final layer in the Docker image&#39;s v1 representation. | [optional] 
**v2_blob** | **List[str]** | Required. The ordered list of v2 blobs that represent a given image. | [optional] 
**v2_name** | **str** | Output only. The name of the image&#39;s v2 blobs computed via: [bottom] :&#x3D; v2_blobbottom :&#x3D; sha256(v2_blob[N] + \&quot; \&quot; + v2_name[N+1]) Only the name of the final blob is kept. | [optional] 

## Example

```python
from openapi_client.models.fingerprint import Fingerprint

# TODO update the JSON string below
json = "{}"
# create an instance of Fingerprint from a JSON string
fingerprint_instance = Fingerprint.from_json(json)
# print the JSON string representation of the object
print(Fingerprint.to_json())

# convert the object into a dict
fingerprint_dict = fingerprint_instance.to_dict()
# create an instance of Fingerprint from a dict
fingerprint_from_dict = Fingerprint.from_dict(fingerprint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


