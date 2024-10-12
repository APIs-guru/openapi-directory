# Avg

Average of the values of the requested property. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns `NULL`. * Always returns the result as a double.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_property** | [**PropertyReference**](PropertyReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.avg import Avg

# TODO update the JSON string below
json = "{}"
# create an instance of Avg from a JSON string
avg_instance = Avg.from_json(json)
# print the JSON string representation of the object
print(Avg.to_json())

# convert the object into a dict
avg_dict = avg_instance.to_dict()
# create an instance of Avg from a dict
avg_from_dict = Avg.from_dict(avg_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


