# Distance

Distance represented by an integer and unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | The distance unit. Acceptable values are &#x60;None&#x60;, &#x60;Miles&#x60;, and &#x60;Kilometers&#x60;. | [optional] 
**value** | **str** | The distance represented as a number. | [optional] 

## Example

```python
from openapi_client.models.distance import Distance

# TODO update the JSON string below
json = "{}"
# create an instance of Distance from a JSON string
distance_instance = Distance.from_json(json)
# print the JSON string representation of the object
print(Distance.to_json())

# convert the object into a dict
distance_dict = distance_instance.to_dict()
# create an instance of Distance from a dict
distance_from_dict = Distance.from_dict(distance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


