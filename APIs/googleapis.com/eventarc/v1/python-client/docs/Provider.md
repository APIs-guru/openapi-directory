# Provider

A representation of the Provider resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. Human friendly name for the Provider. For example \&quot;Cloud Storage\&quot;. | [optional] [readonly] 
**event_types** | [**List[EventType]**](EventType.md) | Output only. Event types for this provider. | [optional] [readonly] 
**name** | **str** | Output only. In &#x60;projects/{project}/locations/{location}/providers/{provider_id}&#x60; format. | [optional] [readonly] 

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


