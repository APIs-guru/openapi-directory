# V3OutletParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_results** | **int** | Maximum number of results returned (default &#x3D; 30) | [optional] 

## Example

```python
from openapi_client.models.v3_outlet_parameters import V3OutletParameters

# TODO update the JSON string below
json = "{}"
# create an instance of V3OutletParameters from a JSON string
v3_outlet_parameters_instance = V3OutletParameters.from_json(json)
# print the JSON string representation of the object
print(V3OutletParameters.to_json())

# convert the object into a dict
v3_outlet_parameters_dict = v3_outlet_parameters_instance.to_dict()
# create an instance of V3OutletParameters from a dict
v3_outlet_parameters_from_dict = V3OutletParameters.from_dict(v3_outlet_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


