# ApiEntityReference

The API entity reference.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ARM resource id in the form of /subscriptions/{SubscriptionId}/resourceGroups/{ResourceGroupName}/... | [optional] 

## Example

```python
from openapi_client.models.api_entity_reference import ApiEntityReference

# TODO update the JSON string below
json = "{}"
# create an instance of ApiEntityReference from a JSON string
api_entity_reference_instance = ApiEntityReference.from_json(json)
# print the JSON string representation of the object
print(ApiEntityReference.to_json())

# convert the object into a dict
api_entity_reference_dict = api_entity_reference_instance.to_dict()
# create an instance of ApiEntityReference from a dict
api_entity_reference_from_dict = ApiEntityReference.from_dict(api_entity_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


