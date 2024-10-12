# NonAzureQueryProperties

Non Azure query for the update configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function_alias** | **str** | Log Analytics Saved Search name. | [optional] 
**workspace_id** | **str** | Workspace Id for Log Analytics in which the saved Search is resided. | [optional] 

## Example

```python
from openapi_client.models.non_azure_query_properties import NonAzureQueryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NonAzureQueryProperties from a JSON string
non_azure_query_properties_instance = NonAzureQueryProperties.from_json(json)
# print the JSON string representation of the object
print(NonAzureQueryProperties.to_json())

# convert the object into a dict
non_azure_query_properties_dict = non_azure_query_properties_instance.to_dict()
# create an instance of NonAzureQueryProperties from a dict
non_azure_query_properties_from_dict = NonAzureQueryProperties.from_dict(non_azure_query_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


