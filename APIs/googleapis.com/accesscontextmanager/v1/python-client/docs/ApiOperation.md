# ApiOperation

Identification for an API Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method_selectors** | [**List[MethodSelector]**](MethodSelector.md) | API methods or permissions to allow. Method or permission must belong to the service specified by &#x60;service_name&#x60; field. A single MethodSelector entry with &#x60;*&#x60; specified for the &#x60;method&#x60; field will allow all methods AND permissions for the service specified in &#x60;service_name&#x60;. | [optional] 
**service_name** | **str** | The name of the API whose methods or permissions the IngressPolicy or EgressPolicy want to allow. A single ApiOperation with &#x60;service_name&#x60; field set to &#x60;*&#x60; will allow all methods AND permissions for all services. | [optional] 

## Example

```python
from openapi_client.models.api_operation import ApiOperation

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOperation from a JSON string
api_operation_instance = ApiOperation.from_json(json)
# print the JSON string representation of the object
print(ApiOperation.to_json())

# convert the object into a dict
api_operation_dict = api_operation_instance.to_dict()
# create an instance of ApiOperation from a dict
api_operation_from_dict = ApiOperation.from_dict(api_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


