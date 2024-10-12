# AddsConfiguration

The list of key value properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token for paginated calls. | [optional] 
**next_link** | **str** | The link used to get the next page of operations. | [optional] 
**total_count** | **int** | The total count of configuration. | [optional] 
**value** | [**List[Item]**](Item.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.adds_configuration import AddsConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AddsConfiguration from a JSON string
adds_configuration_instance = AddsConfiguration.from_json(json)
# print the JSON string representation of the object
print(AddsConfiguration.to_json())

# convert the object into a dict
adds_configuration_dict = adds_configuration_instance.to_dict()
# create an instance of AddsConfiguration from a dict
adds_configuration_from_dict = AddsConfiguration.from_dict(adds_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


