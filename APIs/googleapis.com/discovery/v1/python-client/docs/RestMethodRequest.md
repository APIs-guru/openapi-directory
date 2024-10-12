# RestMethodRequest

The schema for the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ref** | **str** | Schema ID for the request schema. | [optional] 
**parameter_name** | **str** | parameter name. | [optional] 

## Example

```python
from openapi_client.models.rest_method_request import RestMethodRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestMethodRequest from a JSON string
rest_method_request_instance = RestMethodRequest.from_json(json)
# print the JSON string representation of the object
print(RestMethodRequest.to_json())

# convert the object into a dict
rest_method_request_dict = rest_method_request_instance.to_dict()
# create an instance of RestMethodRequest from a dict
rest_method_request_from_dict = RestMethodRequest.from_dict(rest_method_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


