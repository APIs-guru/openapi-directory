# CancellationReason


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancellation_reason_code** | **str** | Machine-interpretable identification code for this cancellation | [optional] 
**cancellation_reason_text** | **str** | Natural-language description of this cancellation reason | [optional] 

## Example

```python
from openapi_client.models.cancellation_reason import CancellationReason

# TODO update the JSON string below
json = "{}"
# create an instance of CancellationReason from a JSON string
cancellation_reason_instance = CancellationReason.from_json(json)
# print the JSON string representation of the object
print(CancellationReason.to_json())

# convert the object into a dict
cancellation_reason_dict = cancellation_reason_instance.to_dict()
# create an instance of CancellationReason from a dict
cancellation_reason_from_dict = CancellationReason.from_dict(cancellation_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


