# RoundToScale

This allows the data to change scale, for example if the source is 2 digits after the decimal point, specify round to scale value = 2. If for example the value needs to be converted to an integer, use round to scale value = 0.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scale** | **int** | Required. Scale value to be used | [optional] 

## Example

```python
from openapi_client.models.round_to_scale import RoundToScale

# TODO update the JSON string below
json = "{}"
# create an instance of RoundToScale from a JSON string
round_to_scale_instance = RoundToScale.from_json(json)
# print the JSON string representation of the object
print(RoundToScale.to_json())

# convert the object into a dict
round_to_scale_dict = round_to_scale_instance.to_dict()
# create an instance of RoundToScale from a dict
round_to_scale_from_dict = RoundToScale.from_dict(round_to_scale_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


