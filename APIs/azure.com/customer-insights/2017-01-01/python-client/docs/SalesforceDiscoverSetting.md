# SalesforceDiscoverSetting

Salesforce discover setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**salesforce_connection_string_secret_url** | **str** | The salesforce connection string secret URL. | 

## Example

```python
from openapi_client.models.salesforce_discover_setting import SalesforceDiscoverSetting

# TODO update the JSON string below
json = "{}"
# create an instance of SalesforceDiscoverSetting from a JSON string
salesforce_discover_setting_instance = SalesforceDiscoverSetting.from_json(json)
# print the JSON string representation of the object
print(SalesforceDiscoverSetting.to_json())

# convert the object into a dict
salesforce_discover_setting_dict = salesforce_discover_setting_instance.to_dict()
# create an instance of SalesforceDiscoverSetting from a dict
salesforce_discover_setting_from_dict = SalesforceDiscoverSetting.from_dict(salesforce_discover_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


