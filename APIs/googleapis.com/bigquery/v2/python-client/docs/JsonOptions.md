# JsonOptions

Json Options for load and make external tables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | Optional. The character encoding of the data. The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8. | [optional] 

## Example

```python
from openapi_client.models.json_options import JsonOptions

# TODO update the JSON string below
json = "{}"
# create an instance of JsonOptions from a JSON string
json_options_instance = JsonOptions.from_json(json)
# print the JSON string representation of the object
print(JsonOptions.to_json())

# convert the object into a dict
json_options_dict = json_options_instance.to_dict()
# create an instance of JsonOptions from a dict
json_options_from_dict = JsonOptions.from_dict(json_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


