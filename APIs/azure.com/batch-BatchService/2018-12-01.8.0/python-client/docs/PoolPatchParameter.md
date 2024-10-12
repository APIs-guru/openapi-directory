# PoolPatchParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_package_references** | [**List[ApplicationPackageReference]**](ApplicationPackageReference.md) | The list replaces any existing application package references on the pool. Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool. If omitted, any existing application package references are left unchanged. | [optional] 
**certificate_references** | [**List[CertificateReference]**](CertificateReference.md) | If this element is present, it replaces any existing certificate references configured on the pool. If omitted, any existing certificate references are left unchanged. For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of &#39;remoteUser&#39;, a &#39;certs&#39; directory is created in the user&#39;s home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. | [optional] 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) | If this element is present, it replaces any existing metadata configured on the pool. If you specify an empty collection, any metadata is removed from the pool. If omitted, any existing metadata is left unchanged. | [optional] 
**start_task** | [**StartTask**](StartTask.md) |  | [optional] 

## Example

```python
from openapi_client.models.pool_patch_parameter import PoolPatchParameter

# TODO update the JSON string below
json = "{}"
# create an instance of PoolPatchParameter from a JSON string
pool_patch_parameter_instance = PoolPatchParameter.from_json(json)
# print the JSON string representation of the object
print(PoolPatchParameter.to_json())

# convert the object into a dict
pool_patch_parameter_dict = pool_patch_parameter_instance.to_dict()
# create an instance of PoolPatchParameter from a dict
pool_patch_parameter_from_dict = PoolPatchParameter.from_dict(pool_patch_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


