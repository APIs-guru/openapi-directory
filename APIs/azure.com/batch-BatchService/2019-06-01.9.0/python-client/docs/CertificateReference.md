# CertificateReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**store_location** | **str** | The default value is currentuser. This property is applicable only for Pools configured with Windows Compute Nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows Image reference). For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of &#39;remoteUser&#39;, a &#39;certs&#39; directory is created in the user&#39;s home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. | [optional] 
**store_name** | **str** | This property is applicable only for Pools configured with Windows Compute Nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows Image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My. | [optional] 
**thumbprint** | **str** |  | 
**thumbprint_algorithm** | **str** |  | 
**visibility** | **List[str]** | You can specify more than one visibility in this collection. The default is all Accounts. | [optional] 

## Example

```python
from openapi_client.models.certificate_reference import CertificateReference

# TODO update the JSON string below
json = "{}"
# create an instance of CertificateReference from a JSON string
certificate_reference_instance = CertificateReference.from_json(json)
# print the JSON string representation of the object
print(CertificateReference.to_json())

# convert the object into a dict
certificate_reference_dict = certificate_reference_instance.to_dict()
# create an instance of CertificateReference from a dict
certificate_reference_from_dict = CertificateReference.from_dict(certificate_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


