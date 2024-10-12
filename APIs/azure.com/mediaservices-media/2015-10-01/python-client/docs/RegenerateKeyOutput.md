# RegenerateKeyOutput

The response body for a RegenerateKey API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The new value of either the primary or secondary key. | [optional] 

## Example

```python
from openapi_client.models.regenerate_key_output import RegenerateKeyOutput

# TODO update the JSON string below
json = "{}"
# create an instance of RegenerateKeyOutput from a JSON string
regenerate_key_output_instance = RegenerateKeyOutput.from_json(json)
# print the JSON string representation of the object
print(RegenerateKeyOutput.to_json())

# convert the object into a dict
regenerate_key_output_dict = regenerate_key_output_instance.to_dict()
# create an instance of RegenerateKeyOutput from a dict
regenerate_key_output_from_dict = RegenerateKeyOutput.from_dict(regenerate_key_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


