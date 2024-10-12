# ProcessSignature

Indicates what signature matched this process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memory_hash_signature** | [**MemoryHashSignature**](MemoryHashSignature.md) |  | [optional] 
**signature_type** | **str** | Describes the type of resource associated with the signature. | [optional] 
**yara_rule_signature** | [**YaraRuleSignature**](YaraRuleSignature.md) |  | [optional] 

## Example

```python
from openapi_client.models.process_signature import ProcessSignature

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessSignature from a JSON string
process_signature_instance = ProcessSignature.from_json(json)
# print the JSON string representation of the object
print(ProcessSignature.to_json())

# convert the object into a dict
process_signature_dict = process_signature_instance.to_dict()
# create an instance of ProcessSignature from a dict
process_signature_from_dict = ProcessSignature.from_dict(process_signature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


