# VaultCertificate

Describes a single certificate reference in a Key Vault, and where the certificate should reside on the VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_store** | **str** | For Windows VMs, specifies the certificate store on the Virtual Machine to which the certificate should be added. The specified certificate store is implicitly in the LocalMachine account. &lt;br&gt;&lt;br&gt;For Linux VMs, the certificate file is placed under the /var/lib/waagent directory, with the file name &amp;lt;UppercaseThumbprint&amp;gt;.crt for the X509 certificate file and &amp;lt;UppercaseThumbprint&amp;gt;.prv for private key. Both of these files are .pem formatted. | [optional] 
**certificate_url** | **str** | This is the URL of a certificate that has been uploaded to Key Vault as a secret. For adding a secret to the Key Vault, see [Add a key or secret to the key vault](https://docs.microsoft.com/azure/key-vault/key-vault-get-started/#add). In this case, your certificate needs to be It is the Base64 encoding of the following JSON Object which is encoded in UTF-8: &lt;br&gt;&lt;br&gt; {&lt;br&gt;  \&quot;data\&quot;:\&quot;&lt;Base64-encoded-certificate&gt;\&quot;,&lt;br&gt;  \&quot;dataType\&quot;:\&quot;pfx\&quot;,&lt;br&gt;  \&quot;password\&quot;:\&quot;&lt;pfx-file-password&gt;\&quot;&lt;br&gt;} | [optional] 

## Example

```python
from openapi_client.models.vault_certificate import VaultCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of VaultCertificate from a JSON string
vault_certificate_instance = VaultCertificate.from_json(json)
# print the JSON string representation of the object
print(VaultCertificate.to_json())

# convert the object into a dict
vault_certificate_dict = vault_certificate_instance.to_dict()
# create an instance of VaultCertificate from a dict
vault_certificate_from_dict = VaultCertificate.from_dict(vault_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


