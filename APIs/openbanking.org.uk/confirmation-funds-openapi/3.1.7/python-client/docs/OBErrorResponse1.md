# OBErrorResponse1

An array of detail error codes, and messages, and URLs to documentation to help remediation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | High level textual error code, to help categorize the errors. | 
**errors** | [**List[OBError1]**](OBError1.md) |  | 
**id** | **str** | A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors. | [optional] 
**message** | **str** | Brief Error message, e.g., &#39;There is something wrong with the request parameters provided&#39; | 

## Example

```python
from openapi_client.models.ob_error_response1 import OBErrorResponse1

# TODO update the JSON string below
json = "{}"
# create an instance of OBErrorResponse1 from a JSON string
ob_error_response1_instance = OBErrorResponse1.from_json(json)
# print the JSON string representation of the object
print(OBErrorResponse1.to_json())

# convert the object into a dict
ob_error_response1_dict = ob_error_response1_instance.to_dict()
# create an instance of OBErrorResponse1 from a dict
ob_error_response1_from_dict = OBErrorResponse1.from_dict(ob_error_response1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


