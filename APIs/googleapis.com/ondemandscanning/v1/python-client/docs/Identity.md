# Identity

The unique identifier of the update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**revision** | **int** | The revision number of the update. | [optional] 
**update_id** | **str** | The revision independent identifier of the update. | [optional] 

## Example

```python
from openapi_client.models.identity import Identity

# TODO update the JSON string below
json = "{}"
# create an instance of Identity from a JSON string
identity_instance = Identity.from_json(json)
# print the JSON string representation of the object
print(Identity.to_json())

# convert the object into a dict
identity_dict = identity_instance.to_dict()
# create an instance of Identity from a dict
identity_from_dict = Identity.from_dict(identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


