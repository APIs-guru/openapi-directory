# LiaOmnichannelExperience

Omnichannel experience details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The CLDR country code (for example, \&quot;US\&quot;). | [optional] 
**lsf_type** | **str** | The Local Store Front (LSF) type for this country. Acceptable values are: - \&quot;&#x60;ghlsf&#x60;\&quot; (Google-Hosted Local Store Front) - \&quot;&#x60;mhlsfBasic&#x60;\&quot; (Merchant-Hosted Local Store Front Basic) - \&quot;&#x60;mhlsfFull&#x60;\&quot; (Merchant-Hosted Local Store Front Full) More details about these types can be found here. | [optional] 
**pickup_types** | **List[str]** | The Pickup types for this country. Acceptable values are: - \&quot;&#x60;pickupToday&#x60;\&quot; - \&quot;&#x60;pickupLater&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.lia_omnichannel_experience import LiaOmnichannelExperience

# TODO update the JSON string below
json = "{}"
# create an instance of LiaOmnichannelExperience from a JSON string
lia_omnichannel_experience_instance = LiaOmnichannelExperience.from_json(json)
# print the JSON string representation of the object
print(LiaOmnichannelExperience.to_json())

# convert the object into a dict
lia_omnichannel_experience_dict = lia_omnichannel_experience_instance.to_dict()
# create an instance of LiaOmnichannelExperience from a dict
lia_omnichannel_experience_from_dict = LiaOmnichannelExperience.from_dict(lia_omnichannel_experience_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


