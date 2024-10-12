# Margin


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bottom** | **int** |  | [optional] [default to 0]
**left** | **int** |  | [optional] [default to 0]
**right** | **int** |  | [optional] [default to 0]
**top** | **int** |  | [optional] [default to 0]

## Example

```python
from openapi_client.models.margin import Margin

# TODO update the JSON string below
json = "{}"
# create an instance of Margin from a JSON string
margin_instance = Margin.from_json(json)
# print the JSON string representation of the object
print(Margin.to_json())

# convert the object into a dict
margin_dict = margin_instance.to_dict()
# create an instance of Margin from a dict
margin_from_dict = Margin.from_dict(margin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


