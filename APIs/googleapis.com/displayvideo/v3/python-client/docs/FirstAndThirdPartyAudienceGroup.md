# FirstAndThirdPartyAudienceGroup

Details of first and third party audience group. All first and third party audience targeting settings are logically ‘OR’ of each other.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | [**List[FirstAndThirdPartyAudienceTargetingSetting]**](FirstAndThirdPartyAudienceTargetingSetting.md) | Required. All first and third party audience targeting settings in first and third party audience group. Repeated settings with same id are not allowed. | [optional] 

## Example

```python
from openapi_client.models.first_and_third_party_audience_group import FirstAndThirdPartyAudienceGroup

# TODO update the JSON string below
json = "{}"
# create an instance of FirstAndThirdPartyAudienceGroup from a JSON string
first_and_third_party_audience_group_instance = FirstAndThirdPartyAudienceGroup.from_json(json)
# print the JSON string representation of the object
print(FirstAndThirdPartyAudienceGroup.to_json())

# convert the object into a dict
first_and_third_party_audience_group_dict = first_and_third_party_audience_group_instance.to_dict()
# create an instance of FirstAndThirdPartyAudienceGroup from a dict
first_and_third_party_audience_group_from_dict = FirstAndThirdPartyAudienceGroup.from_dict(first_and_third_party_audience_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


