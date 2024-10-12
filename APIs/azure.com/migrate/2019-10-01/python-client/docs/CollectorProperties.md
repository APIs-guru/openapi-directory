# CollectorProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_properties** | [**CollectorAgentProperties**](CollectorAgentProperties.md) |  | [optional] 
**created_timestamp** | **str** | Time when this collector was created. Date-Time represented in ISO-8601 format. | [optional] [readonly] 
**discovery_site_id** | **str** | The ARM id of the discovery service site. | [optional] 
**updated_timestamp** | **str** | Time when this collector was updated. Date-Time represented in ISO-8601 format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.collector_properties import CollectorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CollectorProperties from a JSON string
collector_properties_instance = CollectorProperties.from_json(json)
# print the JSON string representation of the object
print(CollectorProperties.to_json())

# convert the object into a dict
collector_properties_dict = collector_properties_instance.to_dict()
# create an instance of CollectorProperties from a dict
collector_properties_from_dict = CollectorProperties.from_dict(collector_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


