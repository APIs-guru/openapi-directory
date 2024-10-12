# V3Disruption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colour** | **str** |  | [optional] 
**description** | **str** | Description of the disruption | [optional] 
**display_on_board** | **bool** |  | [optional] 
**display_status** | **bool** |  | [optional] 
**disruption_id** | **int** | Disruption information identifier | [optional] 
**disruption_status** | **str** | Status of the disruption (e.g. \&quot;Planned\&quot;, \&quot;Current\&quot;) | [optional] 
**disruption_type** | **str** | Type of disruption | [optional] 
**from_date** | **datetime** | Date and time at which disruption begins, in ISO 8601 UTC format | [optional] 
**last_updated** | **datetime** | Date and time disruption information was last updated by PTV, in ISO 8601 UTC format | [optional] 
**published_on** | **datetime** | Date and time disruption information is published on PTV website, in ISO 8601 UTC format | [optional] 
**routes** | [**List[V3DisruptionRoute]**](V3DisruptionRoute.md) | Route relevant to a disruption (if applicable) | [optional] 
**stops** | [**List[V3DisruptionStop]**](V3DisruptionStop.md) | Stop relevant to a disruption (if applicable) | [optional] 
**title** | **str** | Headline title summarising disruption information | [optional] 
**to_date** | **datetime** | Date and time at which disruption ends, in ISO 8601 UTC format (returns null if unknown) | [optional] 
**url** | **str** | URL of relevant article on PTV website | [optional] 

## Example

```python
from openapi_client.models.v3_disruption import V3Disruption

# TODO update the JSON string below
json = "{}"
# create an instance of V3Disruption from a JSON string
v3_disruption_instance = V3Disruption.from_json(json)
# print the JSON string representation of the object
print(V3Disruption.to_json())

# convert the object into a dict
v3_disruption_dict = v3_disruption_instance.to_dict()
# create an instance of V3Disruption from a dict
v3_disruption_from_dict = V3Disruption.from_dict(v3_disruption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


