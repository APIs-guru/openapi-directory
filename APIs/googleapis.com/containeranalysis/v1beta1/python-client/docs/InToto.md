# InToto

This contains the fields corresponding to the definition of a software supply chain step in an in-toto layout. This information goes into a Grafeas note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected_command** | **List[str]** | This field contains the expected command used to perform the step. | [optional] 
**expected_materials** | [**List[ArtifactRule]**](ArtifactRule.md) | The following fields contain in-toto artifact rules identifying the artifacts that enter this supply chain step, and exit the supply chain step, i.e. materials and products of the step. | [optional] 
**expected_products** | [**List[ArtifactRule]**](ArtifactRule.md) |  | [optional] 
**signing_keys** | [**List[SigningKey]**](SigningKey.md) | This field contains the public keys that can be used to verify the signatures on the step metadata. | [optional] 
**step_name** | **str** | This field identifies the name of the step in the supply chain. | [optional] 
**threshold** | **str** | This field contains a value that indicates the minimum number of keys that need to be used to sign the step&#39;s in-toto link. | [optional] 

## Example

```python
from openapi_client.models.in_toto import InToto

# TODO update the JSON string below
json = "{}"
# create an instance of InToto from a JSON string
in_toto_instance = InToto.from_json(json)
# print the JSON string representation of the object
print(InToto.to_json())

# convert the object into a dict
in_toto_dict = in_toto_instance.to_dict()
# create an instance of InToto from a dict
in_toto_from_dict = InToto.from_dict(in_toto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


