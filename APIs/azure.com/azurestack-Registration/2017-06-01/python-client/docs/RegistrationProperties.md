# RegistrationProperties

Properties portion of the registration resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_model** | **str** | Specifies the billing mode for the Azure Stack registration. | [optional] 
**cloud_id** | **str** | The identifier of the registered Azure Stack. | [optional] 
**object_id** | **str** | The object identifier associated with the Azure Stack connecting to Azure. | [optional] 

## Example

```python
from openapi_client.models.registration_properties import RegistrationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RegistrationProperties from a JSON string
registration_properties_instance = RegistrationProperties.from_json(json)
# print the JSON string representation of the object
print(RegistrationProperties.to_json())

# convert the object into a dict
registration_properties_dict = registration_properties_instance.to_dict()
# create an instance of RegistrationProperties from a dict
registration_properties_from_dict = RegistrationProperties.from_dict(registration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


