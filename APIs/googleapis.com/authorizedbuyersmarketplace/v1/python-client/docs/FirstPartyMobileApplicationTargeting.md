# FirstPartyMobileApplicationTargeting

Represents a list of targeted and excluded mobile application IDs that publishers own. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_app_ids** | **List[str]** | A list of application IDs to be excluded. | [optional] 
**targeted_app_ids** | **List[str]** | A list of application IDs to be included. | [optional] 

## Example

```python
from openapi_client.models.first_party_mobile_application_targeting import FirstPartyMobileApplicationTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of FirstPartyMobileApplicationTargeting from a JSON string
first_party_mobile_application_targeting_instance = FirstPartyMobileApplicationTargeting.from_json(json)
# print the JSON string representation of the object
print(FirstPartyMobileApplicationTargeting.to_json())

# convert the object into a dict
first_party_mobile_application_targeting_dict = first_party_mobile_application_targeting_instance.to_dict()
# create an instance of FirstPartyMobileApplicationTargeting from a dict
first_party_mobile_application_targeting_from_dict = FirstPartyMobileApplicationTargeting.from_dict(first_party_mobile_application_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


