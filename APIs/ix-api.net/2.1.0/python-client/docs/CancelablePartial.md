# CancelablePartial

Service or config can be canceled

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charged_until** | **date** | Your obligation to pay for the service will end on this date. Typically &#x60;≥ decommission_at&#x60;.  This field is only used when the state is &#x60;DECOMMISSION_REQUESTED&#x60; or &#x60;DECOMMISSIONED&#x60;. | [optional] 
**decommission_at** | **date** | The service will be decommissioned on this date.  This field is only used when the state is &#x60;DECOMMISSION_REQUESTED&#x60; or &#x60;DECOMMISSIONED&#x60;. | [optional] 

## Example

```python
from openapi_client.models.cancelable_partial import CancelablePartial

# TODO update the JSON string below
json = "{}"
# create an instance of CancelablePartial from a JSON string
cancelable_partial_instance = CancelablePartial.from_json(json)
# print the JSON string representation of the object
print(CancelablePartial.to_json())

# convert the object into a dict
cancelable_partial_dict = cancelable_partial_instance.to_dict()
# create an instance of CancelablePartial from a dict
cancelable_partial_from_dict = CancelablePartial.from_dict(cancelable_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


