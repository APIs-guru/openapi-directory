# Resources

Machine resources for a version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu** | **float** | Number of CPU cores needed. | [optional] 
**disk_gb** | **float** | Disk size (GB) needed. | [optional] 
**kms_key_reference** | **str** | The name of the encryption key that is stored in Google Cloud KMS. Only should be used by Cloud Composer to encrypt the vm disk | [optional] 
**memory_gb** | **float** | Memory (GB) needed. | [optional] 
**volumes** | [**List[Volume]**](Volume.md) | User specified volumes. | [optional] 

## Example

```python
from openapi_client.models.resources import Resources

# TODO update the JSON string below
json = "{}"
# create an instance of Resources from a JSON string
resources_instance = Resources.from_json(json)
# print the JSON string representation of the object
print(Resources.to_json())

# convert the object into a dict
resources_dict = resources_instance.to_dict()
# create an instance of Resources from a dict
resources_from_dict = Resources.from_dict(resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


