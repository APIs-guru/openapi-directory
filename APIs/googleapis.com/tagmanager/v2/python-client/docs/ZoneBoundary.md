# ZoneBoundary

Represents a Zone's boundaries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | [**List[Condition]**](Condition.md) | The conditions that, when conjoined, make up the boundary. | [optional] 
**custom_evaluation_trigger_id** | **List[str]** | Custom evaluation trigger IDs. A zone will evaluate its boundary conditions when any of the listed triggers are true. | [optional] 

## Example

```python
from openapi_client.models.zone_boundary import ZoneBoundary

# TODO update the JSON string below
json = "{}"
# create an instance of ZoneBoundary from a JSON string
zone_boundary_instance = ZoneBoundary.from_json(json)
# print the JSON string representation of the object
print(ZoneBoundary.to_json())

# convert the object into a dict
zone_boundary_dict = zone_boundary_instance.to_dict()
# create an instance of ZoneBoundary from a dict
zone_boundary_from_dict = ZoneBoundary.from_dict(zone_boundary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


