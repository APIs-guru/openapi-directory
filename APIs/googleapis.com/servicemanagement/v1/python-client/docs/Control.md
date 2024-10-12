# Control

Selects and configures the service controller used by the service. Example: control: environment: servicecontrol.googleapis.com

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | **str** | The service controller environment to use. If empty, no control plane feature (like quota and billing) will be enabled. The recommended value for most services is servicecontrol.googleapis.com | [optional] 
**method_policies** | [**List[MethodPolicy]**](MethodPolicy.md) | Defines policies applying to the API methods of the service. | [optional] 

## Example

```python
from openapi_client.models.control import Control

# TODO update the JSON string below
json = "{}"
# create an instance of Control from a JSON string
control_instance = Control.from_json(json)
# print the JSON string representation of the object
print(Control.to_json())

# convert the object into a dict
control_dict = control_instance.to_dict()
# create an instance of Control from a dict
control_from_dict = Control.from_dict(control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


