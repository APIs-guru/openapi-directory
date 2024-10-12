# PoolUpdatePropertiesParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_package_references** | [**List[ApplicationPackageReference]**](ApplicationPackageReference.md) | The list replaces any existing application package references on the pool. Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool. If omitted, or if you specify an empty collection, any existing application packages references are removed from the pool. | 
**certificate_references** | [**List[CertificateReference]**](CertificateReference.md) | This list replaces any existing certificate references configured on the pool. If you specify an empty collection, any existing certificate references are removed from the pool. For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of &#39;remoteUser&#39;, a &#39;certs&#39; directory is created in the user&#39;s home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. | 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) | This list replaces any existing metadata configured on the pool. If omitted, or if you specify an empty collection, any existing metadata is removed from the pool. | 
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


