# AvailableCulture

Available culture for using in a new application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The ISO value for the language. | [optional] 
**name** | **str** | The language name. | [optional] 

## Example

```python
from openapi_client.models.available_culture import AvailableCulture

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableCulture from a JSON string
available_culture_instance = AvailableCulture.from_json(json)
# print the JSON string representation of the object
print(AvailableCulture.to_json())

# convert the object into a dict
available_culture_dict = available_culture_instance.to_dict()
# create an instance of AvailableCulture from a dict
available_culture_from_dict = AvailableCulture.from_dict(available_culture_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


