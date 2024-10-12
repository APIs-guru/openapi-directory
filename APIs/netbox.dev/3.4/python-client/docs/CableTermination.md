# CableTermination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cable** | **int** |  | 
**cable_end** | **str** |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**termination** | **object** |  | [optional] [readonly] 
**termination_id** | **int** |  | 
**termination_type** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.cable_termination import CableTermination

# TODO update the JSON string below
json = "{}"
# create an instance of CableTermination from a JSON string
cable_termination_instance = CableTermination.from_json(json)
# print the JSON string representation of the object
print(CableTermination.to_json())

# convert the object into a dict
cable_termination_dict = cable_termination_instance.to_dict()
# create an instance of CableTermination from a dict
cable_termination_from_dict = CableTermination.from_dict(cable_termination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


