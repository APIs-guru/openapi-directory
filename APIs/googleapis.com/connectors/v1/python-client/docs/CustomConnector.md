# CustomConnector

CustomConnector represents the custom connector defined by the customer as part of byoc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_connector_versions** | **List[str]** | Optional. Active connector versions. | [optional] 
**create_time** | **str** | Output only. Created time. | [optional] [readonly] 
**custom_connector_type** | **str** | Required. Type of the custom connector. | [optional] 
**description** | **str** | Optional. Description of the resource. | [optional] 
**display_name** | **str** | Optional. Display name. | [optional] 
**labels** | **Dict[str, str]** | Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources | [optional] 
**logo** | **str** | Optional. Logo of the resource. | [optional] 
**name** | **str** | Identifier. Resource name of the CustomConnector. Format: projects/{project}/locations/{location}/customConnectors/{connector} | [optional] 
**update_time** | **str** | Output only. Updated time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_connector import CustomConnector

# TODO update the JSON string below
json = "{}"
# create an instance of CustomConnector from a JSON string
custom_connector_instance = CustomConnector.from_json(json)
# print the JSON string representation of the object
print(CustomConnector.to_json())

# convert the object into a dict
custom_connector_dict = custom_connector_instance.to_dict()
# create an instance of CustomConnector from a dict
custom_connector_from_dict = CustomConnector.from_dict(custom_connector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


