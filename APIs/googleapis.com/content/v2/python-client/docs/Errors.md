# Errors

A list of errors returned by a failed batch entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | The HTTP status of the first error in &#x60;errors&#x60;. | [optional] 
**errors** | [**List[Error]**](Error.md) | A list of errors. | [optional] 
**message** | **str** | The message of the first error in &#x60;errors&#x60;. | [optional] 

## Example

```python
from openapi_client.models.errors import Errors

# TODO update the JSON string below
json = "{}"
# create an instance of Errors from a JSON string
errors_instance = Errors.from_json(json)
# print the JSON string representation of the object
print(Errors.to_json())

# convert the object into a dict
errors_dict = errors_instance.to_dict()
# create an instance of Errors from a dict
errors_from_dict = Errors.from_dict(errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


