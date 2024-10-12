# KerberosConfig

Configuration information for a Kerberos principal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keytab** | [**Secret**](Secret.md) |  | [optional] 
**krb5_config_gcs_uri** | **str** | A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly. | [optional] 
**principal** | **str** | A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal is of the form primary/instance@REALM, but there is no exact format. | [optional] 

## Example

```python
from openapi_client.models.kerberos_config import KerberosConfig

# TODO update the JSON string below
json = "{}"
# create an instance of KerberosConfig from a JSON string
kerberos_config_instance = KerberosConfig.from_json(json)
# print the JSON string representation of the object
print(KerberosConfig.to_json())

# convert the object into a dict
kerberos_config_dict = kerberos_config_instance.to_dict()
# create an instance of KerberosConfig from a dict
kerberos_config_from_dict = KerberosConfig.from_dict(kerberos_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


