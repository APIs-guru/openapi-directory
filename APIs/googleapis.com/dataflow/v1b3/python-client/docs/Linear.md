# Linear

Linear buckets with the following boundaries for indices in 0 to n-1. - i in [0, n-1]: [start + (i)*width, start + (i+1)*width)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_of_buckets** | **int** | Must be greater than 0. | [optional] 
**start** | **float** | Lower bound of the first bucket. | [optional] 
**width** | **float** | Distance between bucket boundaries. Must be greater than 0. | [optional] 

## Example

```python
from openapi_client.models.linear import Linear

# TODO update the JSON string below
json = "{}"
# create an instance of Linear from a JSON string
linear_instance = Linear.from_json(json)
# print the JSON string representation of the object
print(Linear.to_json())

# convert the object into a dict
linear_dict = linear_instance.to_dict()
# create an instance of Linear from a dict
linear_from_dict = Linear.from_dict(linear_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


