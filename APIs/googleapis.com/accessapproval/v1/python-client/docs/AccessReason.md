# AccessReason


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | More detail about certain reason types. See comments for each type above. | [optional] 
**type** | **str** | Type of access justification. | [optional] 

## Example

```python
from openapi_client.models.access_reason import AccessReason

# TODO update the JSON string below
json = "{}"
# create an instance of AccessReason from a JSON string
access_reason_instance = AccessReason.from_json(json)
# print the JSON string representation of the object
print(AccessReason.to_json())

# convert the object into a dict
access_reason_dict = access_reason_instance.to_dict()
# create an instance of AccessReason from a dict
access_reason_from_dict = AccessReason.from_dict(access_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


