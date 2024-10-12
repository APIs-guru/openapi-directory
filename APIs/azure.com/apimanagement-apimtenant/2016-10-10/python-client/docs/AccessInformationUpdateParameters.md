# AccessInformationUpdateParameters

Tenant access information update parameters of the API Management service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Tenant access information of the API Management service. | 

## Example

```python
from openapi_client.models.access_information_update_parameters import AccessInformationUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AccessInformationUpdateParameters from a JSON string
access_information_update_parameters_instance = AccessInformationUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(AccessInformationUpdateParameters.to_json())

# convert the object into a dict
access_information_update_parameters_dict = access_information_update_parameters_instance.to_dict()
# create an instance of AccessInformationUpdateParameters from a dict
access_information_update_parameters_from_dict = AccessInformationUpdateParameters.from_dict(access_information_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


