# DistributionUpdate

A metric value representing a distribution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | [**SplitInt64**](SplitInt64.md) |  | [optional] 
**histogram** | [**Histogram**](Histogram.md) |  | [optional] 
**max** | [**SplitInt64**](SplitInt64.md) |  | [optional] 
**min** | [**SplitInt64**](SplitInt64.md) |  | [optional] 
**sum** | [**SplitInt64**](SplitInt64.md) |  | [optional] 
**sum_of_squares** | **float** | Use a double since the sum of squares is likely to overflow int64. | [optional] 

## Example

```python
from openapi_client.models.distribution_update import DistributionUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DistributionUpdate from a JSON string
distribution_update_instance = DistributionUpdate.from_json(json)
# print the JSON string representation of the object
print(DistributionUpdate.to_json())

# convert the object into a dict
distribution_update_dict = distribution_update_instance.to_dict()
# create an instance of DistributionUpdate from a dict
distribution_update_from_dict = DistributionUpdate.from_dict(distribution_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


