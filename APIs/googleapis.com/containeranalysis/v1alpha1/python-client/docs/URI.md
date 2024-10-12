# URI

An URI message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | A label for the URI. | [optional] 
**uri** | **str** | The unique resource identifier. | [optional] 

## Example

```python
from openapi_client.models.uri import URI

# TODO update the JSON string below
json = "{}"
# create an instance of URI from a JSON string
uri_instance = URI.from_json(json)
# print the JSON string representation of the object
print(URI.to_json())

# convert the object into a dict
uri_dict = uri_instance.to_dict()
# create an instance of URI from a dict
uri_from_dict = URI.from_dict(uri_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


