# FirstAndThirdPartyAudienceTargetingSetting

Details of first and third party audience targeting setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_and_third_party_audience_id** | **str** | Required. First and third party audience id of the first and third party audience targeting setting. This id is first_and_third_party_audience_id. | [optional] 
**recency** | **str** | The recency of the first and third party audience targeting setting. Only applicable to first party audiences, otherwise will be ignored. For more info, refer to https://support.google.com/displayvideo/answer/2949947#recency When unspecified, no recency limit will be used. | [optional] 

## Example

```python
from openapi_client.models.first_and_third_party_audience_targeting_setting import FirstAndThirdPartyAudienceTargetingSetting

# TODO update the JSON string below
json = "{}"
# create an instance of FirstAndThirdPartyAudienceTargetingSetting from a JSON string
first_and_third_party_audience_targeting_setting_instance = FirstAndThirdPartyAudienceTargetingSetting.from_json(json)
# print the JSON string representation of the object
print(FirstAndThirdPartyAudienceTargetingSetting.to_json())

# convert the object into a dict
first_and_third_party_audience_targeting_setting_dict = first_and_third_party_audience_targeting_setting_instance.to_dict()
# create an instance of FirstAndThirdPartyAudienceTargetingSetting from a dict
first_and_third_party_audience_targeting_setting_from_dict = FirstAndThirdPartyAudienceTargetingSetting.from_dict(first_and_third_party_audience_targeting_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


