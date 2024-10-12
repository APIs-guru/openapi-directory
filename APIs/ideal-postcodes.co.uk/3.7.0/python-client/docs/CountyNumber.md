# CountyNumber

The Federal Information Processing Standard (FIPS) code assigned to a given county or parish within a state. In Alaska, it identifies a region within the state. If APO/FPO/DPO, and the record type is “S,” “H,” or “F,” the county number will be blank.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.county_number import CountyNumber

# TODO update the JSON string below
json = "{}"
# create an instance of CountyNumber from a JSON string
county_number_instance = CountyNumber.from_json(json)
# print the JSON string representation of the object
print(CountyNumber.to_json())

# convert the object into a dict
county_number_dict = county_number_instance.to_dict()
# create an instance of CountyNumber from a dict
county_number_from_dict = CountyNumber.from_dict(county_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


