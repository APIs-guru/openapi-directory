# ResourceRange

Describes the resource range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max** | **int** | The maximum number of the resource. | [optional] 
**min** | **int** | The minimum number of the resource. | [optional] 

## Example

```python
from openapi_client.models.resource_range import ResourceRange

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceRange from a JSON string
resource_range_instance = ResourceRange.from_json(json)
# print the JSON string representation of the object
print(ResourceRange.to_json())

# convert the object into a dict
resource_range_dict = resource_range_instance.to_dict()
# create an instance of ResourceRange from a dict
resource_range_from_dict = ResourceRange.from_dict(resource_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


