# RemarketingConfig

Settings that control the whether remarketing is enabled for the given identified advertiser.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | Output only. The ID of the advertiser. | [optional] [readonly] 
**remarketing_enabled** | **bool** | Output only. Whether the Floodlight activity remarketing user list is available to the identified advertiser. | [optional] [readonly] 

## Example

```python
from openapi_client.models.remarketing_config import RemarketingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RemarketingConfig from a JSON string
remarketing_config_instance = RemarketingConfig.from_json(json)
# print the JSON string representation of the object
print(RemarketingConfig.to_json())

# convert the object into a dict
remarketing_config_dict = remarketing_config_instance.to_dict()
# create an instance of RemarketingConfig from a dict
remarketing_config_from_dict = RemarketingConfig.from_dict(remarketing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


