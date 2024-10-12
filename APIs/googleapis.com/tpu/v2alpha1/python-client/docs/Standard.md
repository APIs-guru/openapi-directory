# Standard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity_units** | **str** |  | [optional] 
**interval** | [**Interval**](Interval.md) |  | [optional] 
**resource_type** | **str** | The resource type of the reservation. | [optional] 
**size** | **int** | The size of the reservation, in the units specified in the &#39;capacity_units&#39; field. | [optional] 
**usage** | [**Usage**](Usage.md) |  | [optional] 

## Example

```python
from openapi_client.models.standard import Standard

# TODO update the JSON string below
json = "{}"
# create an instance of Standard from a JSON string
standard_instance = Standard.from_json(json)
# print the JSON string representation of the object
print(Standard.to_json())

# convert the object into a dict
standard_dict = standard_instance.to_dict()
# create an instance of Standard from a dict
standard_from_dict = Standard.from_dict(standard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


