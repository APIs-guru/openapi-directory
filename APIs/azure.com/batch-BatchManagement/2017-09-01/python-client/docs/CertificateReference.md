# CertificateReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**store_location** | **str** | The default value is currentUser. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of &#39;remoteUser&#39;, a &#39;certs&#39; directory is created in the user&#39;s home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. | [optional] 
**store_name** | **str** | This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My. | [optional] 
**visibility** | **List[str]** | Values are:   starttask - The user account under which the start task is run.  task - The accounts under which job tasks are run.  remoteuser - The accounts under which users remotely access the node.   You can specify more than one visibility in this collection. The default is all accounts. | [optional] 

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


