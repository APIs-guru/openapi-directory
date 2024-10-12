# MobileApplicationTargeting

Mobile application targeting settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_party_targeting** | [**FirstPartyMobileApplicationTargeting**](FirstPartyMobileApplicationTargeting.md) |  | [optional] 

## Example

```python
from openapi_client.models.mobile_application_targeting import MobileApplicationTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of MobileApplicationTargeting from a JSON string
mobile_application_targeting_instance = MobileApplicationTargeting.from_json(json)
# print the JSON string representation of the object
print(MobileApplicationTargeting.to_json())

# convert the object into a dict
mobile_application_targeting_dict = mobile_application_targeting_instance.to_dict()
# create an instance of MobileApplicationTargeting from a dict
mobile_application_targeting_from_dict = MobileApplicationTargeting.from_dict(mobile_application_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


