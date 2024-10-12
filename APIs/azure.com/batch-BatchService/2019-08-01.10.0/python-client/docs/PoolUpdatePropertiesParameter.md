# PoolUpdatePropertiesParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_package_references** | [**List[ApplicationPackageReference]**](ApplicationPackageReference.md) | The list replaces any existing Application Package references on the Pool. Changes to Application Package references affect all new Compute Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Application Package references on any given Pool. If omitted, or if you specify an empty collection, any existing Application Packages references are removed from the Pool. A maximum of 10 references may be specified on a given Pool. | 
**certificate_references** | [**List[CertificateReference]**](CertificateReference.md) | This list replaces any existing Certificate references configured on the Pool. If you specify an empty collection, any existing Certificate references are removed from the Pool. For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of &#39;remoteUser&#39;, a &#39;certs&#39; directory is created in the user&#39;s home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. | 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) | This list replaces any existing metadata configured on the Pool. If omitted, or if you specify an empty collection, any existing metadata is removed from the Pool. | 
**start_task** | [**StartTask**](StartTask.md) |  | [optional] 

## Example

```python
from openapi_client.models.pool_update_properties_parameter import PoolUpdatePropertiesParameter

# TODO update the JSON string below
json = "{}"
# create an instance of PoolUpdatePropertiesParameter from a JSON string
pool_update_properties_parameter_instance = PoolUpdatePropertiesParameter.from_json(json)
# print the JSON string representation of the object
print(PoolUpdatePropertiesParameter.to_json())

# convert the object into a dict
pool_update_properties_parameter_dict = pool_update_properties_parameter_instance.to_dict()
# create an instance of PoolUpdatePropertiesParameter from a dict
pool_update_properties_parameter_from_dict = PoolUpdatePropertiesParameter.from_dict(pool_update_properties_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


