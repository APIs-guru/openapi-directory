# LogProfileProperties

The log profile properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **List[str]** | the categories of the logs. These categories are created as is convenient to the user. Some values are: &#39;Write&#39;, &#39;Delete&#39;, and/or &#39;Action.&#39; | 
**locations** | **List[str]** | List of regions for which Activity Log events should be stored or streamed. It is a comma separated list of valid ARM locations including the &#39;global&#39; location. | 
**retention_policy** | [**RetentionPolicy**](RetentionPolicy.md) |  | 
**service_bus_rule_id** | **str** | The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: &#39;{service bus resource ID}/authorizationrules/{key name}&#39;. | [optional] 
**storage_account_id** | **str** | the resource id of the storage account to which you would like to send the Activity Log. | [optional] 

## Example

```python
from openapi_client.models.log_profile_properties import LogProfileProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LogProfileProperties from a JSON string
log_profile_properties_instance = LogProfileProperties.from_json(json)
# print the JSON string representation of the object
print(LogProfileProperties.to_json())

# convert the object into a dict
log_profile_properties_dict = log_profile_properties_instance.to_dict()
# create an instance of LogProfileProperties from a dict
log_profile_properties_from_dict = LogProfileProperties.from_dict(log_profile_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


