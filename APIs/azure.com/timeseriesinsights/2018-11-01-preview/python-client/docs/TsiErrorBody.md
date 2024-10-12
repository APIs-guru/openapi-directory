# TsiErrorBody

A particular API error with an error code and a message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Language-independent, human-readable string that defines a service-specific error code. This code serves as a more specific indicator for the HTTP error code specified in the response. Can be used to programmatically handle specific error cases. | [optional] [readonly] 
**details** | [**List[TsiErrorDetails]**](TsiErrorDetails.md) | Contains additional error information. May be null. | [optional] [readonly] 
**inner_error** | [**TsiErrorBody**](TsiErrorBody.md) |  | [optional] 
**message** | **str** | Human-readable, language-independent representation of the error. It is intended as an aid to developers and is not suitable for exposure to end users. | [optional] [readonly] 
**target** | **str** | Target of the particular error (for example, the name of the property in error). May be null. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tsi_error_body import TsiErrorBody

# TODO update the JSON string below
json = "{}"
# create an instance of TsiErrorBody from a JSON string
tsi_error_body_instance = TsiErrorBody.from_json(json)
# print the JSON string representation of the object
print(TsiErrorBody.to_json())

# convert the object into a dict
tsi_error_body_dict = tsi_error_body_instance.to_dict()
# create an instance of TsiErrorBody from a dict
tsi_error_body_from_dict = TsiErrorBody.from_dict(tsi_error_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


