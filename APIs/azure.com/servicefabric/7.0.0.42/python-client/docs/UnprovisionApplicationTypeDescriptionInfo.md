# UnprovisionApplicationTypeDescriptionInfo

Describes the operation to unregister or unprovision an application type and its version that was registered with the Service Fabric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_type_version** | **str** | The version of the application type as defined in the application manifest. | 
**var_async** | **bool** | The flag indicating whether or not unprovision should occur asynchronously. When set to true, the unprovision operation returns when the request is accepted by the system, and the unprovision operation continues without any timeout limit. The default value is false. However, we recommend setting it to true for large application packages that were provisioned. | [optional] 

## Example

```python
from openapi_client.models.unprovision_application_type_description_info import UnprovisionApplicationTypeDescriptionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UnprovisionApplicationTypeDescriptionInfo from a JSON string
unprovision_application_type_description_info_instance = UnprovisionApplicationTypeDescriptionInfo.from_json(json)
# print the JSON string representation of the object
print(UnprovisionApplicationTypeDescriptionInfo.to_json())

# convert the object into a dict
unprovision_application_type_description_info_dict = unprovision_application_type_description_info_instance.to_dict()
# create an instance of UnprovisionApplicationTypeDescriptionInfo from a dict
unprovision_application_type_description_info_from_dict = UnprovisionApplicationTypeDescriptionInfo.from_dict(unprovision_application_type_description_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


