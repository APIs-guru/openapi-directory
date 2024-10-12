# HandledErrors


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[ErrorsListForGroup200ResponseErrorsInner]**](ErrorsListForGroup200ResponseErrorsInner.md) | Errors list. | [optional] 
**next_link** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.handled_errors import HandledErrors

# TODO update the JSON string below
json = "{}"
# create an instance of HandledErrors from a JSON string
handled_errors_instance = HandledErrors.from_json(json)
# print the JSON string representation of the object
print(HandledErrors.to_json())

# convert the object into a dict
handled_errors_dict = handled_errors_instance.to_dict()
# create an instance of HandledErrors from a dict
handled_errors_from_dict = HandledErrors.from_dict(handled_errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


