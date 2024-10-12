# ProvisionApplicationTypeDescriptionBase

Represents the type of registration or provision requested, and if the operation needs to be asynchronous or not. Supported types of provision operations are from either image store or external store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_async** | **bool** | Indicates whether or not provisioning should occur asynchronously. When set to true, the provision operation returns when the request is accepted by the system, and the provision operation continues without any timeout limit. The default value is false. For large application packages, we recommend setting the value to true. | 
**kind** | [**ProvisionApplicationTypeKind**](ProvisionApplicationTypeKind.md) |  | 

## Example

```python
from openapi_client.models.provision_application_type_description_base import ProvisionApplicationTypeDescriptionBase

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisionApplicationTypeDescriptionBase from a JSON string
provision_application_type_description_base_instance = ProvisionApplicationTypeDescriptionBase.from_json(json)
# print the JSON string representation of the object
print(ProvisionApplicationTypeDescriptionBase.to_json())

# convert the object into a dict
provision_application_type_description_base_dict = provision_application_type_description_base_instance.to_dict()
# create an instance of ProvisionApplicationTypeDescriptionBase from a dict
provision_application_type_description_base_from_dict = ProvisionApplicationTypeDescriptionBase.from_dict(provision_application_type_description_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


