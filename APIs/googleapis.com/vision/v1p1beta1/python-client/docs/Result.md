# Result

Information about a product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **str** | The resource name of the image from the product that is the closest match to the query. | [optional] 
**product** | [**Product**](Product.md) |  | [optional] 
**score** | **float** | A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence). | [optional] 

## Example

```python
from openapi_client.models.result import Result

# TODO update the JSON string below
json = "{}"
# create an instance of Result from a JSON string
result_instance = Result.from_json(json)
# print the JSON string representation of the object
print(Result.to_json())

# convert the object into a dict
result_dict = result_instance.to_dict()
# create an instance of Result from a dict
result_from_dict = Result.from_dict(result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


