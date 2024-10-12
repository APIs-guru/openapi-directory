# CSRPErrorBody

Error properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error&#39;s code | [optional] [readonly] 
**details** | [**List[CSRPErrorBody]**](CSRPErrorBody.md) | Error&#39;s details | [optional] [readonly] 
**message** | **str** | Error&#39;s message | [optional] [readonly] 
**target** | **str** | Error&#39;s target | [optional] 

## Example

```python
from openapi_client.models.csrp_error_body import CSRPErrorBody

# TODO update the JSON string below
json = "{}"
# create an instance of CSRPErrorBody from a JSON string
csrp_error_body_instance = CSRPErrorBody.from_json(json)
# print the JSON string representation of the object
print(CSRPErrorBody.to_json())

# convert the object into a dict
csrp_error_body_dict = csrp_error_body_instance.to_dict()
# create an instance of CSRPErrorBody from a dict
csrp_error_body_from_dict = CSRPErrorBody.from_dict(csrp_error_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


