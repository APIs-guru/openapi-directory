# PoolPatchParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_package_references** | [**List[ApplicationPackageReference]**](ApplicationPackageReference.md) | Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. If this element is present, it replaces any existing Package references. If you specify an empty collection, then all Package references are removed from the Pool. If omitted, any existing Package references are left unchanged. | [optional] 
**certificate_references** | [**List[CertificateReference]**](CertificateReference.md) | If this element is present, it replaces any existing Certificate references configured on the Pool. If omitted, any existing Certificate references are left unchanged. For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of &#39;remoteUser&#39;, a &#39;certs&#39; directory is created in the user&#39;s home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. | [optional] 
**metadata** | [**List[MetadataItem]**](MetadataItem.md) | If this element is present, it replaces any existing metadata configured on the Pool. If you specify an empty collection, any metadata is removed from the Pool. If omitted, any existing metadata is left unchanged. | [optional] 
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


