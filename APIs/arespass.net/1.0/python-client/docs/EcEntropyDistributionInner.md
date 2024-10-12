# EcEntropyDistributionInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**char** | **str** | The n-th character. | [optional] 
**l33tchar** | **str** | The n-th character after the l33t transformation. | [optional] 
**percentage** | **float** | The amount of entropy contributed by this character, expressed as percentage of the total. | [optional] 

## Example

```python
from openapi_client.models.ec_entropy_distribution_inner import EcEntropyDistributionInner

# TODO update the JSON string below
json = "{}"
# create an instance of EcEntropyDistributionInner from a JSON string
ec_entropy_distribution_inner_instance = EcEntropyDistributionInner.from_json(json)
# print the JSON string representation of the object
print(EcEntropyDistributionInner.to_json())

# convert the object into a dict
ec_entropy_distribution_inner_dict = ec_entropy_distribution_inner_instance.to_dict()
# create an instance of EcEntropyDistributionInner from a dict
ec_entropy_distribution_inner_from_dict = EcEntropyDistributionInner.from_dict(ec_entropy_distribution_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


