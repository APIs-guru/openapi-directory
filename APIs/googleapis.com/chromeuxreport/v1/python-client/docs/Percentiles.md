# Percentiles

Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**p75** | **object** | 75% of users experienced the given metric at or below this value. | [optional] 

## Example

```python
from openapi_client.models.percentiles import Percentiles

# TODO update the JSON string below
json = "{}"
# create an instance of Percentiles from a JSON string
percentiles_instance = Percentiles.from_json(json)
# print the JSON string representation of the object
print(Percentiles.to_json())

# convert the object into a dict
percentiles_dict = percentiles_instance.to_dict()
# create an instance of Percentiles from a dict
percentiles_from_dict = Percentiles.from_dict(percentiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


