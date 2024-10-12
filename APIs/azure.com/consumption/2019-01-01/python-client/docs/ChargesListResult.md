# ChargesListResult

Result of listing charge summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ChargeSummary]**](ChargeSummary.md) | The list of charge summary | [optional] [readonly] 

## Example

```python
from openapi_client.models.charges_list_result import ChargesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ChargesListResult from a JSON string
charges_list_result_instance = ChargesListResult.from_json(json)
# print the JSON string representation of the object
print(ChargesListResult.to_json())

# convert the object into a dict
charges_list_result_dict = charges_list_result_instance.to_dict()
# create an instance of ChargesListResult from a dict
charges_list_result_from_dict = ChargesListResult.from_dict(charges_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


