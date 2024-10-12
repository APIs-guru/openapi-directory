# Base2Exponent

Exponential buckets where the growth factor between buckets is `2**(2**-scale)`. e.g. for `scale=1` growth factor is `2**(2**(-1))=sqrt(2)`. `n` buckets will have the following boundaries. - 0th: [0, gf) - i in [1, n-1]: [gf^(i), gf^(i+1))

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_buckets** | **int** | Must be greater than 0. | [optional] 
**scale** | **int** | Must be between -3 and 3. This forces the growth factor of the bucket boundaries to be between &#x60;2^(1/8)&#x60; and &#x60;256&#x60;. | [optional] 

## Example

```python
from openapi_client.models.base2_exponent import Base2Exponent

# TODO update the JSON string below
json = "{}"
# create an instance of Base2Exponent from a JSON string
base2_exponent_instance = Base2Exponent.from_json(json)
# print the JSON string representation of the object
print(Base2Exponent.to_json())

# convert the object into a dict
base2_exponent_dict = base2_exponent_instance.to_dict()
# create an instance of Base2Exponent from a dict
base2_exponent_from_dict = Base2Exponent.from_dict(base2_exponent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


