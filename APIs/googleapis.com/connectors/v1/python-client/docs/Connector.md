# Connector

Connectors indicates a specific connector type, e.x. Salesforce, SAP etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Created time. | [optional] [readonly] 
**description** | **str** | Output only. Description of the resource. | [optional] [readonly] 
**display_name** | **str** | Output only. Display name. | [optional] [readonly] 
**documentation_uri** | **str** | Output only. Link to documentation page. | [optional] [readonly] 
**eventing_details** | [**EventingDetails**](EventingDetails.md) |  | [optional] 
**external_uri** | **str** | Output only. Link to external page. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources | [optional] [readonly] 
**launch_stage** | **str** | Output only. Flag to mark the version indicating the launch stage. | [optional] [readonly] 
**name** | **str** | Output only. Resource name of the Connector. Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector} Only global location is supported for Connector resource. | [optional] [readonly] 
**update_time** | **str** | Output only. Updated time. | [optional] [readonly] 
**web_assets_location** | **str** | Output only. Cloud storage location of icons etc consumed by UI. | [optional] [readonly] 

## Example

```python
from openapi_client.models.connector import Connector

# TODO update the JSON string below
json = "{}"
# create an instance of Connector from a JSON string
connector_instance = Connector.from_json(json)
# print the JSON string representation of the object
print(Connector.to_json())

# convert the object into a dict
connector_dict = connector_instance.to_dict()
# create an instance of Connector from a dict
connector_from_dict = Connector.from_dict(connector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


