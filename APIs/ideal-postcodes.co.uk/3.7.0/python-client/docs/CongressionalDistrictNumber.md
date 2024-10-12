# CongressionalDistrictNumber

A standard value identifying a geographic area within the United States served by a member of the U.S. House of Representatives. If Army/Air Force (APO), Fleet Post Office (FPO), or Diplomatic/Defense Post Office (DPO), this field will be blank. If there is only one member of Congress within a state, the code will be \"AL\" (at large).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.congressional_district_number import CongressionalDistrictNumber

# TODO update the JSON string below
json = "{}"
# create an instance of CongressionalDistrictNumber from a JSON string
congressional_district_number_instance = CongressionalDistrictNumber.from_json(json)
# print the JSON string representation of the object
print(CongressionalDistrictNumber.to_json())

# convert the object into a dict
congressional_district_number_dict = congressional_district_number_instance.to_dict()
# create an instance of CongressionalDistrictNumber from a dict
congressional_district_number_from_dict = CongressionalDistrictNumber.from_dict(congressional_district_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


