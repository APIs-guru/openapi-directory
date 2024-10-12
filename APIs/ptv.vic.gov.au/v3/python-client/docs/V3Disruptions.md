# V3Disruptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ferry** | [**List[V3Disruption]**](V3Disruption.md) | Subset of disruption information applicable to ferry | [optional] 
**general** | [**List[V3Disruption]**](V3Disruption.md) | Subset of disruption information applicable to multiple route_types | [optional] 
**interstate_train** | [**List[V3Disruption]**](V3Disruption.md) | Subset of disruption information applicable to interstate train | [optional] 
**metro_bus** | [**List[V3Disruption]**](V3Disruption.md) | Subset of disruption information applicable to metropolitan bus | [optional] 
**metro_train** | [**List[V3Disruption]**](V3Disruption.md) | Subset of disruption information applicable to metropolitan train | [optional] 
**metro_tram** | [**List[V3Disruption]**](V3Disruption.md) | Subset of disruption information applicable to metropolitan tram | [optional] 
**night_bus** | [**List[V3Disruption]**](V3Disruption.md) | Subset of disruption information applicable to night bus | [optional] 
**regional_bus** | [**List[V3Disruption]**](V3Disruption.md) | Subset of disruption information applicable to regional bus | [optional] 
**regional_coach** | [**List[V3Disruption]**](V3Disruption.md) | Subset of disruption information applicable to V/Line coach | [optional] 
**regional_train** | [**List[V3Disruption]**](V3Disruption.md) | Subset of disruption information applicable to V/Line train | [optional] 
**school_bus** | [**List[V3Disruption]**](V3Disruption.md) | Subset of disruption information applicable to school bus | [optional] 
**skybus** | [**List[V3Disruption]**](V3Disruption.md) | Subset of disruption information applicable to skybus | [optional] 
**taxi** | [**List[V3Disruption]**](V3Disruption.md) | Subset of disruption information applicable to taxi | [optional] 
**telebus** | [**List[V3Disruption]**](V3Disruption.md) | Subset of disruption information applicable to telebus services | [optional] 

## Example

```python
from openapi_client.models.v3_disruptions import V3Disruptions

# TODO update the JSON string below
json = "{}"
# create an instance of V3Disruptions from a JSON string
v3_disruptions_instance = V3Disruptions.from_json(json)
# print the JSON string representation of the object
print(V3Disruptions.to_json())

# convert the object into a dict
v3_disruptions_dict = v3_disruptions_instance.to_dict()
# create an instance of V3Disruptions from a dict
v3_disruptions_from_dict = V3Disruptions.from_dict(v3_disruptions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


