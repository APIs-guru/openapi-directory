# RenewalSettings

JSON template for a subscription renewal settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies the resource as a subscription renewal setting. Value: &#x60;subscriptions#renewalSettings&#x60; | [optional] [default to 'subscriptions#renewalSettings']
**renewal_type** | **str** | Renewal settings for the annual commitment plan. For more detailed information, see renewal options in the administrator help center. When renewing a subscription, the &#x60;renewalType&#x60; is a required property. | [optional] 

## Example

```python
from openapi_client.models.renewal_settings import RenewalSettings

# TODO update the JSON string below
json = "{}"
# create an instance of RenewalSettings from a JSON string
renewal_settings_instance = RenewalSettings.from_json(json)
# print the JSON string representation of the object
print(RenewalSettings.to_json())

# convert the object into a dict
renewal_settings_dict = renewal_settings_instance.to_dict()
# create an instance of RenewalSettings from a dict
renewal_settings_from_dict = RenewalSettings.from_dict(renewal_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


