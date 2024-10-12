# DistributionSettingsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_public** | **bool** | Is this app using the \&quot;Default to Public Distribution Groups\&quot; logic | 

## Example

```python
from openapi_client.models.distribution_settings_response import DistributionSettingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionSettingsResponse from a JSON string
distribution_settings_response_instance = DistributionSettingsResponse.from_json(json)
# print the JSON string representation of the object
print(DistributionSettingsResponse.to_json())

# convert the object into a dict
distribution_settings_response_dict = distribution_settings_response_instance.to_dict()
# create an instance of DistributionSettingsResponse from a dict
distribution_settings_response_from_dict = DistributionSettingsResponse.from_dict(distribution_settings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


