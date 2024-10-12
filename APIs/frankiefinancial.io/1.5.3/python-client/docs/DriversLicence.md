# DriversLicence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry_date** | **str** | Expiry date of drivers licence | [optional] 
**number** | **str** | Drivers Licence Number | 
**state** | **str** | State of Issue | 
**type** | **str** | Document identifier | 

## Example

```python
from openapi_client.models.drivers_licence import DriversLicence

# TODO update the JSON string below
json = "{}"
# create an instance of DriversLicence from a JSON string
drivers_licence_instance = DriversLicence.from_json(json)
# print the JSON string representation of the object
print(DriversLicence.to_json())

# convert the object into a dict
drivers_licence_dict = drivers_licence_instance.to_dict()
# create an instance of DriversLicence from a dict
drivers_licence_from_dict = DriversLicence.from_dict(drivers_licence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


