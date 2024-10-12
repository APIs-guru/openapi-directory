# ReaderEntitlements

A singleton containing all of a reader's entitlements for a publication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlements** | [**List[Entitlement]**](Entitlement.md) | All of the entitlements for a publication reader. | [optional] 
**name** | **str** | Output only. The resource name of the singleton. | [optional] [readonly] 

## Example

```python
from openapi_client.models.reader_entitlements import ReaderEntitlements

# TODO update the JSON string below
json = "{}"
# create an instance of ReaderEntitlements from a JSON string
reader_entitlements_instance = ReaderEntitlements.from_json(json)
# print the JSON string representation of the object
print(ReaderEntitlements.to_json())

# convert the object into a dict
reader_entitlements_dict = reader_entitlements_instance.to_dict()
# create an instance of ReaderEntitlements from a dict
reader_entitlements_from_dict = ReaderEntitlements.from_dict(reader_entitlements_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


