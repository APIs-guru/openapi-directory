# ActivationStatus

The activation status of the object. This field includes activation status if valuable supports activation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.activation_status import ActivationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ActivationStatus from a JSON string
activation_status_instance = ActivationStatus.from_json(json)
# print the JSON string representation of the object
print(ActivationStatus.to_json())

# convert the object into a dict
activation_status_dict = activation_status_instance.to_dict()
# create an instance of ActivationStatus from a dict
activation_status_from_dict = ActivationStatus.from_dict(activation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


