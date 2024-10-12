# DriversLicense


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The three digit country code of the principal owner. Valid values are Three digit alpha country codes as defined in ISO 3166-1. Required when Drivers License Number is provided. Should not be provided if Drivers License Number is not provided. | [optional] 
**country_subdivision** | **str** | The abbreviated state or province code for a merchant location (only supported for US and Canada merchants).  Required when Drivers License Country is &#39;USA&#39; . Should not be provided for non-US Drivers License Country. | [optional] 
**number** | **str** | The drivers license number of a principal owner. | [optional] 

## Example

```python
from openapi_client.models.drivers_license import DriversLicense

# TODO update the JSON string below
json = "{}"
# create an instance of DriversLicense from a JSON string
drivers_license_instance = DriversLicense.from_json(json)
# print the JSON string representation of the object
print(DriversLicense.to_json())

# convert the object into a dict
drivers_license_dict = drivers_license_instance.to_dict()
# create an instance of DriversLicense from a dict
drivers_license_from_dict = DriversLicense.from_dict(drivers_license_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


