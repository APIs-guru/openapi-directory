# FixedOrPercent

Message encapsulating a value that can be either absolute (\"fixed\") or relative (\"percent\") to a value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed** | **int** | Specifies a fixed value. | [optional] 
**percent** | **int** | Specifies the relative value defined as a percentage, which will be multiplied by a reference value. | [optional] 

## Example

```python
from openapi_client.models.fixed_or_percent import FixedOrPercent

# TODO update the JSON string below
json = "{}"
# create an instance of FixedOrPercent from a JSON string
fixed_or_percent_instance = FixedOrPercent.from_json(json)
# print the JSON string representation of the object
print(FixedOrPercent.to_json())

# convert the object into a dict
fixed_or_percent_dict = fixed_or_percent_instance.to_dict()
# create an instance of FixedOrPercent from a dict
fixed_or_percent_from_dict = FixedOrPercent.from_dict(fixed_or_percent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


