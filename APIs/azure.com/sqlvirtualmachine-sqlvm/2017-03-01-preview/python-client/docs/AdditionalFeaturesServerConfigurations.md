# AdditionalFeaturesServerConfigurations

Additional SQL Server feature settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_r_services_enabled** | **bool** | Enable or disable R services (SQL 2016 onwards). | [optional] 

## Example

```python
from openapi_client.models.additional_features_server_configurations import AdditionalFeaturesServerConfigurations

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalFeaturesServerConfigurations from a JSON string
additional_features_server_configurations_instance = AdditionalFeaturesServerConfigurations.from_json(json)
# print the JSON string representation of the object
print(AdditionalFeaturesServerConfigurations.to_json())

# convert the object into a dict
additional_features_server_configurations_dict = additional_features_server_configurations_instance.to_dict()
# create an instance of AdditionalFeaturesServerConfigurations from a dict
additional_features_server_configurations_from_dict = AdditionalFeaturesServerConfigurations.from_dict(additional_features_server_configurations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


