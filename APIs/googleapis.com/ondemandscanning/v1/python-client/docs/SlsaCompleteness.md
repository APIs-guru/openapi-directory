# SlsaCompleteness

Indicates that the builder claims certain fields in this message to be complete.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **bool** | If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe. | [optional] 
**environment** | **bool** | If true, the builder claims that recipe.environment is claimed to be complete. | [optional] 
**materials** | **bool** | If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called \&quot;hermetic\&quot;. | [optional] 

## Example

```python
from openapi_client.models.slsa_completeness import SlsaCompleteness

# TODO update the JSON string below
json = "{}"
# create an instance of SlsaCompleteness from a JSON string
slsa_completeness_instance = SlsaCompleteness.from_json(json)
# print the JSON string representation of the object
print(SlsaCompleteness.to_json())

# convert the object into a dict
slsa_completeness_dict = slsa_completeness_instance.to_dict()
# create an instance of SlsaCompleteness from a dict
slsa_completeness_from_dict = SlsaCompleteness.from_dict(slsa_completeness_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


