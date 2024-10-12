# Configuration

Represents a Configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ConfigurationProperties**](ConfigurationProperties.md) |  | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.configuration import Configuration

# TODO update the JSON string below
json = "{}"
# create an instance of Configuration from a JSON string
configuration_instance = Configuration.from_json(json)
# print the JSON string representation of the object
print(Configuration.to_json())

# convert the object into a dict
configuration_dict = configuration_instance.to_dict()
# create an instance of Configuration from a dict
configuration_from_dict = Configuration.from_dict(configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


