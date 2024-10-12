# Grid

A grid of choices (radio or check boxes) with each row constituting a separate question. Each row has the same choices, which are shown as the columns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**ChoiceQuestion**](ChoiceQuestion.md) |  | [optional] 
**shuffle_questions** | **bool** | If &#x60;true&#x60;, the questions are randomly ordered. In other words, the rows appear in a different order for every respondent. | [optional] 

## Example

```python
from openapi_client.models.grid import Grid

# TODO update the JSON string below
json = "{}"
# create an instance of Grid from a JSON string
grid_instance = Grid.from_json(json)
# print the JSON string representation of the object
print(Grid.to_json())

# convert the object into a dict
grid_dict = grid_instance.to_dict()
# create an instance of Grid from a dict
grid_from_dict = Grid.from_dict(grid_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


