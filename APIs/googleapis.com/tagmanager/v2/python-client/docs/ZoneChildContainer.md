# ZoneChildContainer

Represents a child container of a Zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nickname** | **str** | The zone&#39;s nickname for the child container. | [optional] 
**public_id** | **str** | The child container&#39;s public id. | [optional] 

## Example

```python
from openapi_client.models.zone_child_container import ZoneChildContainer

# TODO update the JSON string below
json = "{}"
# create an instance of ZoneChildContainer from a JSON string
zone_child_container_instance = ZoneChildContainer.from_json(json)
# print the JSON string representation of the object
print(ZoneChildContainer.to_json())

# convert the object into a dict
zone_child_container_dict = zone_child_container_instance.to_dict()
# create an instance of ZoneChildContainer from a dict
zone_child_container_from_dict = ZoneChildContainer.from_dict(zone_child_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


