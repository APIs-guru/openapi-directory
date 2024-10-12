# HashOfTotals

A hash of total usage, including overall total billed and used for all targets, and totals by zone for each protocol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_billed** | **int** | The amount of usage, in bytes, that was billed for all stream targets during the selected time frame. | [optional] 
**bytes_used** | **int** | The amount of content, in bytes, that went through all stream targets during the selected time frame. | [optional] 
**protocols** | [**HashOfProtocols**](HashOfProtocols.md) |  | [optional] 

## Example

```python
from openapi_client.models.hash_of_totals import HashOfTotals

# TODO update the JSON string below
json = "{}"
# create an instance of HashOfTotals from a JSON string
hash_of_totals_instance = HashOfTotals.from_json(json)
# print the JSON string representation of the object
print(HashOfTotals.to_json())

# convert the object into a dict
hash_of_totals_dict = hash_of_totals_instance.to_dict()
# create an instance of HashOfTotals from a dict
hash_of_totals_from_dict = HashOfTotals.from_dict(hash_of_totals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


