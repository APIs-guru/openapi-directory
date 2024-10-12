# Error401


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Description of the error. | 
**status** | **int** | Status code of the error. | 
**title** | **str** | Message corresponding to the status code. | 
**type** | **str** | Link to RFC 2616 about status codes definitions. | 

## Example

```python
from openapi_client.models.error401 import Error401

# TODO update the JSON string below
json = "{}"
# create an instance of Error401 from a JSON string
error401_instance = Error401.from_json(json)
# print the JSON string representation of the object
print(Error401.to_json())

# convert the object into a dict
error401_dict = error401_instance.to_dict()
# create an instance of Error401 from a dict
error401_from_dict = Error401.from_dict(error401_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


