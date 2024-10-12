# Autoscale

Auto scaling settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_slots** | **str** | Output only. The slot capacity added to this reservation when autoscale happens. Will be between [0, max_slots]. | [optional] [readonly] 
**max_slots** | **str** | Number of slots to be scaled when needed. | [optional] 

## Example

```python
from openapi_client.models.autoscale import Autoscale

# TODO update the JSON string below
json = "{}"
# create an instance of Autoscale from a JSON string
autoscale_instance = Autoscale.from_json(json)
# print the JSON string representation of the object
print(Autoscale.to_json())

# convert the object into a dict
autoscale_dict = autoscale_instance.to_dict()
# create an instance of Autoscale from a dict
autoscale_from_dict = Autoscale.from_dict(autoscale_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


