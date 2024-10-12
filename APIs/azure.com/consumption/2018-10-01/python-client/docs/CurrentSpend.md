# CurrentSpend

The current amount of cost which is being tracked for a budget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The total amount of cost which is being tracked by the budget. | [optional] [readonly] 
**unit** | **str** | The unit of measure for the budget amount. | [optional] [readonly] 

## Example

```python
from openapi_client.models.current_spend import CurrentSpend

# TODO update the JSON string below
json = "{}"
# create an instance of CurrentSpend from a JSON string
current_spend_instance = CurrentSpend.from_json(json)
# print the JSON string representation of the object
print(CurrentSpend.to_json())

# convert the object into a dict
current_spend_dict = current_spend_instance.to_dict()
# create an instance of CurrentSpend from a dict
current_spend_from_dict = CurrentSpend.from_dict(current_spend_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


