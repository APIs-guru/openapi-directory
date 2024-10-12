# AzureQueryProperties

Azure query for the update configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | **List[str]** | List of locations to scope the query to. | [optional] 
**scope** | **List[str]** | List of Subscription or Resource Group ARM Ids. | [optional] 
**tag_settings** | [**TagSettingsProperties**](TagSettingsProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_query_properties import AzureQueryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AzureQueryProperties from a JSON string
azure_query_properties_instance = AzureQueryProperties.from_json(json)
# print the JSON string representation of the object
print(AzureQueryProperties.to_json())

# convert the object into a dict
azure_query_properties_dict = azure_query_properties_instance.to_dict()
# create an instance of AzureQueryProperties from a dict
azure_query_properties_from_dict = AzureQueryProperties.from_dict(azure_query_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


