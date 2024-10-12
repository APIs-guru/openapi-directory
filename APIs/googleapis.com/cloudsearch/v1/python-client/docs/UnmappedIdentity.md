# UnmappedIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_identity** | [**Principal**](Principal.md) |  | [optional] 
**resolution_status_code** | **str** | The resolution status for the external identity. | [optional] 

## Example

```python
from openapi_client.models.unmapped_identity import UnmappedIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of UnmappedIdentity from a JSON string
unmapped_identity_instance = UnmappedIdentity.from_json(json)
# print the JSON string representation of the object
print(UnmappedIdentity.to_json())

# convert the object into a dict
unmapped_identity_dict = unmapped_identity_instance.to_dict()
# create an instance of UnmappedIdentity from a dict
unmapped_identity_from_dict = UnmappedIdentity.from_dict(unmapped_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


