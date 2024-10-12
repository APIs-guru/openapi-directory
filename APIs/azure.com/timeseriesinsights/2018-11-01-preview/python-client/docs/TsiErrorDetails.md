# TsiErrorDetails

Additional error information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Language-independent, human-readable string that defines a service-specific error code. This code serves as a more specific indicator for the HTTP error code specified in the response. Can be used to programmatically handle specific error cases. | [optional] [readonly] 
**message** | **str** | Human-readable, language-independent representation of the error. It is intended as an aid to developers and is not suitable for exposure to end users. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tsi_error_details import TsiErrorDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TsiErrorDetails from a JSON string
tsi_error_details_instance = TsiErrorDetails.from_json(json)
# print the JSON string representation of the object
print(TsiErrorDetails.to_json())

# convert the object into a dict
tsi_error_details_dict = tsi_error_details_instance.to_dict()
# create an instance of TsiErrorDetails from a dict
tsi_error_details_from_dict = TsiErrorDetails.from_dict(tsi_error_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


