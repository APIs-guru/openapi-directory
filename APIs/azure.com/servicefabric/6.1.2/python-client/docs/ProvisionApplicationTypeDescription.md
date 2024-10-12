# ProvisionApplicationTypeDescription

Describes the operation to register or provision an application type using an application package uploaded to the Service Fabric image store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type_build_path** | **str** | The relative path for the application package in the image store specified during the prior upload operation. | [optional] 

## Example

```python
from openapi_client.models.provision_application_type_description import ProvisionApplicationTypeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisionApplicationTypeDescription from a JSON string
provision_application_type_description_instance = ProvisionApplicationTypeDescription.from_json(json)
# print the JSON string representation of the object
print(ProvisionApplicationTypeDescription.to_json())

# convert the object into a dict
provision_application_type_description_dict = provision_application_type_description_instance.to_dict()
# create an instance of ProvisionApplicationTypeDescription from a dict
provision_application_type_description_from_dict = ProvisionApplicationTypeDescription.from_dict(provision_application_type_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


