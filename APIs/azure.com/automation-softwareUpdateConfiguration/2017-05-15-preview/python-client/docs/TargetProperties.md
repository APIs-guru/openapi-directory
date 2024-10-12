# TargetProperties

Group specific to the update configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_queries** | [**List[AzureQueryProperties]**](AzureQueryProperties.md) | List of Azure queries in the software update configuration. | [optional] 
**non_azure_queries** | [**List[NonAzureQueryProperties]**](NonAzureQueryProperties.md) | List of non Azure queries in the software update configuration. | [optional] 

## Example

```python
from openapi_client.models.target_properties import TargetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TargetProperties from a JSON string
target_properties_instance = TargetProperties.from_json(json)
# print the JSON string representation of the object
print(TargetProperties.to_json())

# convert the object into a dict
target_properties_dict = target_properties_instance.to_dict()
# create an instance of TargetProperties from a dict
target_properties_from_dict = TargetProperties.from_dict(target_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


