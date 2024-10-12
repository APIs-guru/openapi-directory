# GoogleDevtoolsRemoteworkersV1test2Digest

The CommandTask and CommandResult messages assume the existence of a service that can serve blobs of content, identified by a hash and size known as a \"digest.\" The method by which these blobs may be retrieved is not specified here, but a model implementation is in the Remote Execution API's \"ContentAddressibleStorage\" interface. In the context of the RWAPI, a Digest will virtually always refer to the contents of a file or a directory. The latter is represented by the byte-encoded Directory message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash** | **str** | A string-encoded hash (eg \&quot;1a2b3c\&quot;, not the byte array [0x1a, 0x2b, 0x3c]) using an implementation-defined hash algorithm (eg SHA-256). | [optional] 
**size_bytes** | **str** | The size of the contents. While this is not strictly required as part of an identifier (after all, any given hash will have exactly one canonical size), it&#39;s useful in almost all cases when one might want to send or retrieve blobs of content and is included here for this reason. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remoteworkers_v1test2_digest import GoogleDevtoolsRemoteworkersV1test2Digest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemoteworkersV1test2Digest from a JSON string
google_devtools_remoteworkers_v1test2_digest_instance = GoogleDevtoolsRemoteworkersV1test2Digest.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemoteworkersV1test2Digest.to_json())

# convert the object into a dict
google_devtools_remoteworkers_v1test2_digest_dict = google_devtools_remoteworkers_v1test2_digest_instance.to_dict()
# create an instance of GoogleDevtoolsRemoteworkersV1test2Digest from a dict
google_devtools_remoteworkers_v1test2_digest_from_dict = GoogleDevtoolsRemoteworkersV1test2Digest.from_dict(google_devtools_remoteworkers_v1test2_digest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


