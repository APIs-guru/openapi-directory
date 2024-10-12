# Response420


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | The status code of the response. &#x60;200&#x60; indicates a successful request. | [optional] 
**error_code_label** | **str** | More detail about what happened. For example you may need to request the number via the dashboard, or you may already own this number. | [optional] 

## Example

```python
from openapi_client.models.response420 import Response420

# TODO update the JSON string below
json = "{}"
# create an instance of Response420 from a JSON string
response420_instance = Response420.from_json(json)
# print the JSON string representation of the object
print(Response420.to_json())

# convert the object into a dict
response420_dict = response420_instance.to_dict()
# create an instance of Response420 from a dict
response420_from_dict = Response420.from_dict(response420_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


