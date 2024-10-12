# ResourceFilter

Message describing resource filters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gce_instance_filter** | [**GceInstanceFilter**](GceInstanceFilter.md) |  | [optional] 
**inclusion_labels** | **Dict[str, str]** | The label used for filter resource | [optional] 
**resource_id_patterns** | **List[str]** | The id pattern for filter resource | [optional] 
**scopes** | **List[str]** | The scopes of evaluation resource | [optional] 

## Example

```python
from openapi_client.models.resource_filter import ResourceFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceFilter from a JSON string
resource_filter_instance = ResourceFilter.from_json(json)
# print the JSON string representation of the object
print(ResourceFilter.to_json())

# convert the object into a dict
resource_filter_dict = resource_filter_instance.to_dict()
# create an instance of ResourceFilter from a dict
resource_filter_from_dict = ResourceFilter.from_dict(resource_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


