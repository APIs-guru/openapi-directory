# Zone


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corresponding_region** | **str** |  | 
**internal** | **bool** |  | [default to False]
**name** | **str** |  | 

## Example

```python
from openapi_client.models.zone import Zone

# TODO update the JSON string below
json = "{}"
# create an instance of Zone from a JSON string
zone_instance = Zone.from_json(json)
# print the JSON string representation of the object
print(Zone.to_json())

# convert the object into a dict
zone_dict = zone_instance.to_dict()
# create an instance of Zone from a dict
zone_from_dict = Zone.from_dict(zone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


