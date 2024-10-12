# Keys

The Nexmo product that you access with this application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_key** | **str** | The public key used to validate the [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token). | [optional] 

## Example

```python
from openapi_client.models.keys import Keys

# TODO update the JSON string below
json = "{}"
# create an instance of Keys from a JSON string
keys_instance = Keys.from_json(json)
# print the JSON string representation of the object
print(Keys.to_json())

# convert the object into a dict
keys_dict = keys_instance.to_dict()
# create an instance of Keys from a dict
keys_from_dict = Keys.from_dict(keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


