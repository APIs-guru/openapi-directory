# ObjectId

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id_path** | **List[int]** | Required. The parts of an OID path. The most significant parts of the path come first. | [optional] 

## Example

```python
from openapi_client.models.object_id import ObjectId

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectId from a JSON string
object_id_instance = ObjectId.from_json(json)
# print the JSON string representation of the object
print(ObjectId.to_json())

# convert the object into a dict
object_id_dict = object_id_instance.to_dict()
# create an instance of ObjectId from a dict
object_id_from_dict = ObjectId.from_dict(object_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


