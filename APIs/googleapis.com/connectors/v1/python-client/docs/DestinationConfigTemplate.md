# DestinationConfigTemplate

DestinationConfigTemplate defines required destinations supported by the Connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_port** | **int** | The default port. | [optional] 
**description** | **str** | Description. | [optional] 
**display_name** | **str** | Display name of the parameter. | [optional] 
**is_advanced** | **bool** | Whether the current destination tempalate is part of Advanced settings | [optional] 
**key** | **str** | Key of the destination. | [optional] 
**max** | **int** | The maximum number of destinations supported for this key. | [optional] 
**min** | **int** | The minimum number of destinations supported for this key. | [optional] 
**port_field_type** | **str** | Whether port number should be provided by customers. | [optional] 
**regex_pattern** | **str** | Regex pattern for host. | [optional] 

## Example

```python
from openapi_client.models.destination_config_template import DestinationConfigTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationConfigTemplate from a JSON string
destination_config_template_instance = DestinationConfigTemplate.from_json(json)
# print the JSON string representation of the object
print(DestinationConfigTemplate.to_json())

# convert the object into a dict
destination_config_template_dict = destination_config_template_instance.to_dict()
# create an instance of DestinationConfigTemplate from a dict
destination_config_template_from_dict = DestinationConfigTemplate.from_dict(destination_config_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


