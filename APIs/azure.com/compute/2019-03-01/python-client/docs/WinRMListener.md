# WinRMListener

Describes Protocol and thumbprint of Windows Remote Management listener

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_url** | **str** | This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: &lt;br&gt;&lt;br&gt; {&lt;br&gt;  \&quot;data\&quot;:\&quot;&lt;Base64-encoded-certificate&gt;\&quot;,&lt;br&gt;  \&quot;dataType\&quot;:\&quot;pfx\&quot;,&lt;br&gt;  \&quot;password\&quot;:\&quot;&lt;pfx-file-password&gt;\&quot;&lt;br&gt;} | [optional] 
**protocol** | **str** | Specifies the protocol of listener. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;**http** &lt;br&gt;&lt;br&gt; **https** | [optional] 

## Example

```python
from openapi_client.models.win_rm_listener import WinRMListener

# TODO update the JSON string below
json = "{}"
# create an instance of WinRMListener from a JSON string
win_rm_listener_instance = WinRMListener.from_json(json)
# print the JSON string representation of the object
print(WinRMListener.to_json())

# convert the object into a dict
win_rm_listener_dict = win_rm_listener_instance.to_dict()
# create an instance of WinRMListener from a dict
win_rm_listener_from_dict = WinRMListener.from_dict(win_rm_listener_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


