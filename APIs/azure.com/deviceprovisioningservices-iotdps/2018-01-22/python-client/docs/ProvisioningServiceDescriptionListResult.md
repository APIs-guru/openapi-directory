# ProvisioningServiceDescriptionListResult

List of provisioning service descriptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | the next link | [optional] [readonly] 
**value** | [**List[ProvisioningServiceDescription]**](ProvisioningServiceDescription.md) | List of provisioning service descriptions. | [optional] 

## Example

```python
from openapi_client.models.provisioning_service_description_list_result import ProvisioningServiceDescriptionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisioningServiceDescriptionListResult from a JSON string
provisioning_service_description_list_result_instance = ProvisioningServiceDescriptionListResult.from_json(json)
# print the JSON string representation of the object
print(ProvisioningServiceDescriptionListResult.to_json())

# convert the object into a dict
provisioning_service_description_list_result_dict = provisioning_service_description_list_result_instance.to_dict()
# create an instance of ProvisioningServiceDescriptionListResult from a dict
provisioning_service_description_list_result_from_dict = ProvisioningServiceDescriptionListResult.from_dict(provisioning_service_description_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


