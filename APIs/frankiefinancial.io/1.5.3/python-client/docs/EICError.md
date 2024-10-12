# EICError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlation_id** | **str** | The correlationId as passed in the request | 
**error_code** | **int** | * &#x60;400&#x60; - The request was malformed * &#x60;422&#x60; - Invalid request parameter  | 
**message** | **str** | Text to provide more details on errorCode | 
**version** | **str** | Version of the API on which the EIC request took place. This value should be reported with any issue raised. | 

## Example

```python
from openapi_client.models.eic_error import EICError

# TODO update the JSON string below
json = "{}"
# create an instance of EICError from a JSON string
eic_error_instance = EICError.from_json(json)
# print the JSON string representation of the object
print(EICError.to_json())

# convert the object into a dict
eic_error_dict = eic_error_instance.to_dict()
# create an instance of EICError from a dict
eic_error_from_dict = EICError.from_dict(eic_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


