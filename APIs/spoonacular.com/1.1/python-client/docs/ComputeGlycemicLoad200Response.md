# ComputeGlycemicLoad200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingredients** | [**List[ComputeGlycemicLoad200ResponseIngredientsInner]**](ComputeGlycemicLoad200ResponseIngredientsInner.md) |  | 
**total_glycemic_load** | **float** |  | 

## Example

```python
from openapi_client.models.compute_glycemic_load200_response import ComputeGlycemicLoad200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeGlycemicLoad200Response from a JSON string
compute_glycemic_load200_response_instance = ComputeGlycemicLoad200Response.from_json(json)
# print the JSON string representation of the object
print(ComputeGlycemicLoad200Response.to_json())

# convert the object into a dict
compute_glycemic_load200_response_dict = compute_glycemic_load200_response_instance.to_dict()
# create an instance of ComputeGlycemicLoad200Response from a dict
compute_glycemic_load200_response_from_dict = ComputeGlycemicLoad200Response.from_dict(compute_glycemic_load200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


