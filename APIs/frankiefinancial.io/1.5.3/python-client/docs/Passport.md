# Passport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Country of Issue | 
**expiry_date** | **str** | Expiry date of passport | [optional] 
**number** | **str** | Passport Number | 
**type** | **str** | Document identifier | 

## Example

```python
from openapi_client.models.passport import Passport

# TODO update the JSON string below
json = "{}"
# create an instance of Passport from a JSON string
passport_instance = Passport.from_json(json)
# print the JSON string representation of the object
print(Passport.to_json())

# convert the object into a dict
passport_dict = passport_instance.to_dict()
# create an instance of Passport from a dict
passport_from_dict = Passport.from_dict(passport_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


