# ContextNumberUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The country of the number | [optional] 
**http** | **str** | The URL of the endpoint the number has been forwarded to | [optional] 
**msisdn** | **str** | The phone number linked/unlinked to your application | [optional] 
**voice_type** | **str** | The type of endpoint the number has been forwarded to | [optional] 
**voice_value** | **str** | The value of the endpoint the number has been forwarded to | [optional] 

## Example

```python
from openapi_client.models.context_number_update import ContextNumberUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ContextNumberUpdate from a JSON string
context_number_update_instance = ContextNumberUpdate.from_json(json)
# print the JSON string representation of the object
print(ContextNumberUpdate.to_json())

# convert the object into a dict
context_number_update_dict = context_number_update_instance.to_dict()
# create an instance of ContextNumberUpdate from a dict
context_number_update_from_dict = ContextNumberUpdate.from_dict(context_number_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


