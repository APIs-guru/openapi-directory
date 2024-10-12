# NotifierSecretRef

NotifierSecretRef contains the reference to a secret stored in the corresponding NotifierSpec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret_ref** | **str** | The value of &#x60;secret_ref&#x60; should be a &#x60;name&#x60; that is registered in a &#x60;Secret&#x60; in the &#x60;secrets&#x60; list of the &#x60;Spec&#x60;. | [optional] 

## Example

```python
from openapi_client.models.notifier_secret_ref import NotifierSecretRef

# TODO update the JSON string below
json = "{}"
# create an instance of NotifierSecretRef from a JSON string
notifier_secret_ref_instance = NotifierSecretRef.from_json(json)
# print the JSON string representation of the object
print(NotifierSecretRef.to_json())

# convert the object into a dict
notifier_secret_ref_dict = notifier_secret_ref_instance.to_dict()
# create an instance of NotifierSecretRef from a dict
notifier_secret_ref_from_dict = NotifierSecretRef.from_dict(notifier_secret_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


