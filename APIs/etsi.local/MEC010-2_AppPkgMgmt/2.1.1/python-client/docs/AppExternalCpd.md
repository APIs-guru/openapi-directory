# AppExternalCpd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inherited_attributes** | **object** | All attributes inherited from Cpd. | 
**virtual_network_interface_requirements** | **List[str]** | Specifies requirements on a virtual network interface realizing the CPs instantiated from this CPD. | [optional] 

## Example

```python
from openapi_client.models.app_external_cpd import AppExternalCpd

# TODO update the JSON string below
json = "{}"
# create an instance of AppExternalCpd from a JSON string
app_external_cpd_instance = AppExternalCpd.from_json(json)
# print the JSON string representation of the object
print(AppExternalCpd.to_json())

# convert the object into a dict
app_external_cpd_dict = app_external_cpd_instance.to_dict()
# create an instance of AppExternalCpd from a dict
app_external_cpd_from_dict = AppExternalCpd.from_dict(app_external_cpd_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


