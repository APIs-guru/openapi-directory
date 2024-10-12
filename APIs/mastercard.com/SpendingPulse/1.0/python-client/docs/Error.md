# Error


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | This is the text description of the error. This is optional and will only be displayed if more information is available than is stored in the data identifier and reason code. | [optional] 
**reason_code** | **str** | This will identify the reason for the error. | [optional] 
**recoverable** | **bool** | This is a true/false presentation to explain if the transaction was submitted again would it be successful or not. | [optional] 
**source** | **str** | Unique identifier that attempts to define the field in error when available.  If a specific field can&#39;t be identified System will be returned. | [optional] 

## Example

```python
from openapi_client.models.error import Error

# TODO update the JSON string below
json = "{}"
# create an instance of Error from a JSON string
error_instance = Error.from_json(json)
# print the JSON string representation of the object
print(Error.to_json())

# convert the object into a dict
error_dict = error_instance.to_dict()
# create an instance of Error from a dict
error_from_dict = Error.from_dict(error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


