# CustomizationIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | Windows Text Identity. Prepared data | [optional] 
**host_name** | [**CustomizationHostName**](CustomizationHostName.md) |  | [optional] 
**type** | **str** | Identity type | [optional] 
**user_data** | [**CustomizationIdentityUserData**](CustomizationIdentityUserData.md) |  | [optional] 

## Example

```python
from openapi_client.models.customization_identity import CustomizationIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of CustomizationIdentity from a JSON string
customization_identity_instance = CustomizationIdentity.from_json(json)
# print the JSON string representation of the object
print(CustomizationIdentity.to_json())

# convert the object into a dict
customization_identity_dict = customization_identity_instance.to_dict()
# create an instance of CustomizationIdentity from a dict
customization_identity_from_dict = CustomizationIdentity.from_dict(customization_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


