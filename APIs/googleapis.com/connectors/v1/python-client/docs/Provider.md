# Provider

Provider indicates the owner who provides the connectors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Created time. | [optional] [readonly] 
**description** | **str** | Output only. Description of the resource. | [optional] [readonly] 
**display_name** | **str** | Output only. Display name. | [optional] [readonly] 
**documentation_uri** | **str** | Output only. Link to documentation page. | [optional] [readonly] 
**external_uri** | **str** | Output only. Link to external page. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Output only. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources | [optional] [readonly] 
**launch_stage** | **str** | Output only. Flag to mark the version indicating the launch stage. | [optional] [readonly] 
**name** | **str** | Output only. Resource name of the Provider. Format: projects/{project}/locations/{location}/providers/{provider} Only global location is supported for Provider resource. | [optional] [readonly] 
**update_time** | **str** | Output only. Updated time. | [optional] [readonly] 
**web_assets_location** | **str** | Output only. Cloud storage location of icons etc consumed by UI. | [optional] [readonly] 

## Example

```python
from openapi_client.models.provider import Provider

# TODO update the JSON string below
json = "{}"
# create an instance of Provider from a JSON string
provider_instance = Provider.from_json(json)
# print the JSON string representation of the object
print(Provider.to_json())

# convert the object into a dict
provider_dict = provider_instance.to_dict()
# create an instance of Provider from a dict
provider_from_dict = Provider.from_dict(provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


