# TagConsentSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_status** | **str** | The tag&#39;s consent status. If set to NEEDED, the runtime will check that the consent types specified by the consent_type field have been granted. | [optional] 
**consent_type** | [**Parameter**](Parameter.md) |  | [optional] 

## Example

```python
from openapi_client.models.tag_consent_setting import TagConsentSetting

# TODO update the JSON string below
json = "{}"
# create an instance of TagConsentSetting from a JSON string
tag_consent_setting_instance = TagConsentSetting.from_json(json)
# print the JSON string representation of the object
print(TagConsentSetting.to_json())

# convert the object into a dict
tag_consent_setting_dict = tag_consent_setting_instance.to_dict()
# create an instance of TagConsentSetting from a dict
tag_consent_setting_from_dict = TagConsentSetting.from_dict(tag_consent_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


