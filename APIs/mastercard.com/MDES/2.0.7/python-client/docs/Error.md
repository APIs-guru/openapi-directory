# Error


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A textual description of the error that is appropriate for logging and may communicate additional details related to the reason code. | [optional] 
**error_code** | **str** | An identifier that represents additional detail for the reason of the error. | [optional] 
**reason_code** | **str** | Indicator that identifies the reason for the error. | [optional] 
**recoverable** | **str** | An indicator stating whether it is reasonable to retry a failed request. | [optional] 
**source** | **str** | Unique identifier that attempts to define the field in error when available.  If a specific field can&#39;t be identified, \&quot;System\&quot; will be returned. | [optional] 

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


