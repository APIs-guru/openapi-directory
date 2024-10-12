# ActivationMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_method_id** | **str** | Unique identifier of the activation method. | [optional] 
**activation_method_type** | **str** | Type of activation method. Valid values:&lt;br /&gt;    \&quot;SMS\&quot; ? Activation code sent in text message to masked mobile phone number&lt;br /&gt;    \&quot;EMA\&quot; ? Activation code sent in email to masked email address&lt;br /&gt;    \&quot;ACC\&quot; ? Cardholder to call automated call center phone number&lt;br /&gt;    \&quot;CLC\&quot; ? Cardholder to call Call Center phone number&lt;br /&gt;    \&quot;WEB\&quot; ? Website&lt;br /&gt;    \&quot;BAP\&quot; ? Mobile application&lt;br /&gt;    \&quot;OBC\&quot; ? Activation code spoken via call to cardholder on masked voice call phone number. | [optional] 
**activation_method_value** | **str** | Activation method details value. | [optional] 
**resend_indicator** | **str** | Whether the activation method can be used to re-send an activation code. Valid values are TRUE and FALSE. | [optional] 

## Example

```python
from openapi_client.models.activation_method import ActivationMethod

# TODO update the JSON string below
json = "{}"
# create an instance of ActivationMethod from a JSON string
activation_method_instance = ActivationMethod.from_json(json)
# print the JSON string representation of the object
print(ActivationMethod.to_json())

# convert the object into a dict
activation_method_dict = activation_method_instance.to_dict()
# create an instance of ActivationMethod from a dict
activation_method_from_dict = ActivationMethod.from_dict(activation_method_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


