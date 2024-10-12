# ActivationOptions

ActivationOptions for the class

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_url** | **str** | HTTPS URL that supports REST semantics. Would be used for requesting activation from partners for given valuable, triggered by the users. | [optional] 
**allow_reactivation** | **bool** | Flag to allow users to make activation call from different device. This allows client to render the activation button enabled even if the activationStatus is ACTIVATED but the requested device is different than the current device. | [optional] 

## Example

```python
from openapi_client.models.activation_options import ActivationOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ActivationOptions from a JSON string
activation_options_instance = ActivationOptions.from_json(json)
# print the JSON string representation of the object
print(ActivationOptions.to_json())

# convert the object into a dict
activation_options_dict = activation_options_instance.to_dict()
# create an instance of ActivationOptions from a dict
activation_options_from_dict = ActivationOptions.from_dict(activation_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


