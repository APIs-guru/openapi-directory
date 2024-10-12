# ComputeGlycemicLoadRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingredients** | **List[str]** |  | 

## Example

```python
from openapi_client.models.compute_glycemic_load_request import ComputeGlycemicLoadRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeGlycemicLoadRequest from a JSON string
compute_glycemic_load_request_instance = ComputeGlycemicLoadRequest.from_json(json)
# print the JSON string representation of the object
print(ComputeGlycemicLoadRequest.to_json())

# convert the object into a dict
compute_glycemic_load_request_dict = compute_glycemic_load_request_instance.to_dict()
# create an instance of ComputeGlycemicLoadRequest from a dict
compute_glycemic_load_request_from_dict = ComputeGlycemicLoadRequest.from_dict(compute_glycemic_load_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


