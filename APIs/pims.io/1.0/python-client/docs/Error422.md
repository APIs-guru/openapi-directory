# Error422


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Description of the error. | 
**status** | **int** | Status code of the error. | 
**title** | **str** | Message corresponding to the status code. | 
**type** | **str** | Link to RFC 2616 about status codes definitions. | 

## Example

```python
from openapi_client.models.error422 import Error422

# TODO update the JSON string below
json = "{}"
# create an instance of Error422 from a JSON string
error422_instance = Error422.from_json(json)
# print the JSON string representation of the object
print(Error422.to_json())

# convert the object into a dict
error422_dict = error422_instance.to_dict()
# create an instance of Error422 from a dict
error422_from_dict = Error422.from_dict(error422_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


