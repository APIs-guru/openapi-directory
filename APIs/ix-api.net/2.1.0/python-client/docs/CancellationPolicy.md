# CancellationPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charged_until** | **date** | Your obligation to pay for the service will end on this date. Typically &#x60;≥ decommission_at&#x60;. | 
**decommission_at** | **date** | This field denotes the first possible cancellation date of the service. | 

## Example

```python
from openapi_client.models.cancellation_policy import CancellationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of CancellationPolicy from a JSON string
cancellation_policy_instance = CancellationPolicy.from_json(json)
# print the JSON string representation of the object
print(CancellationPolicy.to_json())

# convert the object into a dict
cancellation_policy_dict = cancellation_policy_instance.to_dict()
# create an instance of CancellationPolicy from a dict
cancellation_policy_from_dict = CancellationPolicy.from_dict(cancellation_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


