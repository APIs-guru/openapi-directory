# ContextNumberLinking


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | Which account the number is associated with | [optional] 
**application_id** | **str** | UUID of the app the number is being linked/unlinked to | [optional] 
**country** | **str** | The country of the number | [optional] 
**msisdn** | **str** | The phone number linked/unlinked to your application | [optional] 

## Example

```python
from openapi_client.models.context_number_linking import ContextNumberLinking

# TODO update the JSON string below
json = "{}"
# create an instance of ContextNumberLinking from a JSON string
context_number_linking_instance = ContextNumberLinking.from_json(json)
# print the JSON string representation of the object
print(ContextNumberLinking.to_json())

# convert the object into a dict
context_number_linking_dict = context_number_linking_instance.to_dict()
# create an instance of ContextNumberLinking from a dict
context_number_linking_from_dict = ContextNumberLinking.from_dict(context_number_linking_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


