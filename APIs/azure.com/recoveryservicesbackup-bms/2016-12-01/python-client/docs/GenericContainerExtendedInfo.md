# GenericContainerExtendedInfo

Container extended information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_identity_info** | [**ContainerIdentityInfo**](ContainerIdentityInfo.md) |  | [optional] 
**raw_cert_data** | **str** | Public key of container cert | [optional] 
**service_endpoints** | **Dict[str, str]** | Azure Backup Service Endpoints for the container | [optional] 

## Example

```python
from openapi_client.models.generic_container_extended_info import GenericContainerExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GenericContainerExtendedInfo from a JSON string
generic_container_extended_info_instance = GenericContainerExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(GenericContainerExtendedInfo.to_json())

# convert the object into a dict
generic_container_extended_info_dict = generic_container_extended_info_instance.to_dict()
# create an instance of GenericContainerExtendedInfo from a dict
generic_container_extended_info_from_dict = GenericContainerExtendedInfo.from_dict(generic_container_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


