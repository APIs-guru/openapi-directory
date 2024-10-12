# Completeness

Indicates that the builder claims certain fields in this message to be complete.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **bool** | If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe. | [optional] 
**environment** | **bool** | If true, the builder claims that recipe.environment is claimed to be complete. | [optional] 
**materials** | **bool** | If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called \&quot;hermetic\&quot;. | [optional] 

## Example

```python
from openapi_client.models.completeness import Completeness

# TODO update the JSON string below
json = "{}"
# create an instance of Completeness from a JSON string
completeness_instance = Completeness.from_json(json)
# print the JSON string representation of the object
print(Completeness.to_json())

# convert the object into a dict
completeness_dict = completeness_instance.to_dict()
# create an instance of Completeness from a dict
completeness_from_dict = Completeness.from_dict(completeness_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


