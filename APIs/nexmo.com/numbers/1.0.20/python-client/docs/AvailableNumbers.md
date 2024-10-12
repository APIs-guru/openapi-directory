# AvailableNumbers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The total amount of numbers available in the pool. | [optional] 
**numbers** | [**List[Availablenumber]**](Availablenumber.md) | A paginated array of available numbers and their details. | [optional] 

## Example

```python
from openapi_client.models.available_numbers import AvailableNumbers

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableNumbers from a JSON string
available_numbers_instance = AvailableNumbers.from_json(json)
# print the JSON string representation of the object
print(AvailableNumbers.to_json())

# convert the object into a dict
available_numbers_dict = available_numbers_instance.to_dict()
# create an instance of AvailableNumbers from a dict
available_numbers_from_dict = AvailableNumbers.from_dict(available_numbers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


