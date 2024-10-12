# BadRequestResponseAllOfErrors


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** |  | [optional] 
**message** | **str** | Indicates location of error in request query or URL parameter | 
**path** | **str** | Indicates location of error in request query or URL parameter | 

## Example

```python
from openapi_client.models.bad_request_response_all_of_errors import BadRequestResponseAllOfErrors

# TODO update the JSON string below
json = "{}"
# create an instance of BadRequestResponseAllOfErrors from a JSON string
bad_request_response_all_of_errors_instance = BadRequestResponseAllOfErrors.from_json(json)
# print the JSON string representation of the object
print(BadRequestResponseAllOfErrors.to_json())

# convert the object into a dict
bad_request_response_all_of_errors_dict = bad_request_response_all_of_errors_instance.to_dict()
# create an instance of BadRequestResponseAllOfErrors from a dict
bad_request_response_all_of_errors_from_dict = BadRequestResponseAllOfErrors.from_dict(bad_request_response_all_of_errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


