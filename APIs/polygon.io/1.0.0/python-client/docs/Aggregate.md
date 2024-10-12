# Aggregate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**c** | **int** | Close price | [optional] 
**h** | **int** | High price | [optional] 
**k** | **int** | Transactions ( 1 transaction contains X shares exchanged ) | [optional] 
**l** | **int** | Low price | [optional] 
**o** | **int** | Open price | [optional] 
**t** | **int** | Timestamp of this aggregation | [optional] 
**v** | **int** | Total Volume of all trades ( total shares exchanged ) | [optional] 

## Example

```python
from openapi_client.models.aggregate import Aggregate

# TODO update the JSON string below
json = "{}"
# create an instance of Aggregate from a JSON string
aggregate_instance = Aggregate.from_json(json)
# print the JSON string representation of the object
print(Aggregate.to_json())

# convert the object into a dict
aggregate_dict = aggregate_instance.to_dict()
# create an instance of Aggregate from a dict
aggregate_from_dict = Aggregate.from_dict(aggregate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


