# V1betaAudienceDimensionValue

The value of a dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Value as a string if the dimension type is a string. | [optional] 

## Example

```python
from openapi_client.models.v1beta_audience_dimension_value import V1betaAudienceDimensionValue

# TODO update the JSON string below
json = "{}"
# create an instance of V1betaAudienceDimensionValue from a JSON string
v1beta_audience_dimension_value_instance = V1betaAudienceDimensionValue.from_json(json)
# print the JSON string representation of the object
print(V1betaAudienceDimensionValue.to_json())

# convert the object into a dict
v1beta_audience_dimension_value_dict = v1beta_audience_dimension_value_instance.to_dict()
# create an instance of V1betaAudienceDimensionValue from a dict
v1beta_audience_dimension_value_from_dict = V1betaAudienceDimensionValue.from_dict(v1beta_audience_dimension_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


